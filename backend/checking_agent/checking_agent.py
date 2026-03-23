import json
import os
import glob
from dotenv import load_dotenv
load_dotenv()
import pandas as pd
from tqdm import tqdm
from concurrent.futures import ThreadPoolExecutor, as_completed
from langchain_anthropic import ChatAnthropic
from typing import List, Dict, Any
import time
import logging

logging.basicConfig(filename='langgraph_workflow.log',
                    level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# ===============================
# Discover all JSON files in *_agent*/research/ directories
# ===============================
def find_research_jsons(base_dir: str) -> List[str]:
    pattern = os.path.join(base_dir, "backend", "*agent*", "research", "*.json")
    return glob.glob(pattern, recursive=False)


# ===============================
# Extract data fields and sources from JSON
# ===============================
def extract_fields_and_sources(data: Any, parent_key: str = "") -> tuple[List[Dict], List[str]]:
    """
    Recursively flatten the JSON into field-value pairs.
    Extracts the top-level 'sources' list separately.
    """
    sources = []
    fields = []

    def flatten(obj, prefix=""):
        if isinstance(obj, dict):
            for k, v in obj.items():
                new_key = f"{prefix}.{k}" if prefix else k
                if k == "sources" and isinstance(v, list) and not prefix:
                    # top-level sources
                    pass
                else:
                    flatten(v, new_key)
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                flatten(item, f"{prefix}[{i}]")
        else:
            fields.append({"field": prefix, "value": str(obj)})

    # Extract sources first (look at any level for a "sources" list of strings)
    def find_sources(obj):
        if isinstance(obj, dict):
            for k, v in obj.items():
                if k == "sources" and isinstance(v, list):
                    for s in v:
                        if isinstance(s, str):
                            sources.append(s)
                else:
                    find_sources(v)
        elif isinstance(obj, list):
            for item in obj:
                find_sources(item)

    find_sources(data)
    flatten(data)

    # Remove fields that are just source entries themselves
    fields = [f for f in fields if not f["field"].startswith("sources[")]

    return fields, sources


# ===============================
# Verify a single field against sources using Claude
# ===============================
def verify_field(field_data: Dict, sources: List[str], llm: ChatAnthropic,
                 max_retry=3, delay=2) -> Dict:
    sources_text = "\n".join(f"- {s}" for s in sources)

    for attempt in range(max_retry):
        try:
            prompt = f"""You are a data verification assistant.

The following data field was scraped from a research report about Waterloo Region's 1 Million Plan:

Field: {field_data['field']}
Value: {field_data['value']}

The data was reportedly sourced from these references:
{sources_text}

Based on your knowledge of these sources and the Waterloo Region 1 Million Plan context, assess whether this field value is plausible and consistent with what these sources would report.

Respond with JSON only, no extra text:
{{
  "exists": true or false,
  "confidence": 0.0 to 1.0,
  "reason": "brief explanation",
  "sources_matched": ["list of sources that support or contradict this value"]
}}"""

            response = llm.invoke(prompt)
            raw = response.content.strip()
            if raw.startswith("```"):
                raw = raw.removeprefix("```json").removeprefix("```").removesuffix("```").strip()
            verification = json.loads(raw)
            verification.update({
                "field": field_data['field'],
                "value": field_data['value'],
            })
            return verification
        except Exception as e:
            logging.warning(f"Retry {attempt+1} for field '{field_data['field']}': {e}")
            time.sleep(delay)

    logging.error(f"Failed to verify field '{field_data['field']}' after {max_retry} retries")
    return {
        "field": field_data['field'],
        "value": field_data['value'],
        "exists": False,
        "confidence": 0.0,
        "reason": "Failed after retries",
        "sources_matched": []
    }


# ===============================
# Process a single JSON file
# ===============================
def process_json_file(filepath: str, llm: ChatAnthropic, max_workers=4) -> str:
    print(f"\nProcessing: {filepath}")
    with open(filepath, "r") as f:
        data = json.load(f)

    fields, sources = extract_fields_and_sources(data)

    if not sources:
        print(f"  No sources found in {filepath}, skipping.")
        return None

    print(f"  Fields: {len(fields)}, Sources: {len(sources)}")

    results = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(verify_field, fd, sources, llm): fd for fd in fields}
        for future in tqdm(as_completed(futures), total=len(futures), desc="  Verifying"):
            results.append(future.result())

    # Save output next to the input JSON
    base = os.path.splitext(filepath)[0]
    out_path = base + "_verification.csv"
    pd.DataFrame(results).to_csv(out_path, index=False)
    print(f"  Saved: {out_path}")
    return out_path


# ===============================
# Main runner
# ===============================
def run_all(base_dir: str, model_name: str = "claude-sonnet-4-6", max_workers: int = 4):
    json_files = find_research_jsons(base_dir)
    if not json_files:
        print(f"No JSON files found under {base_dir}/backend/*agent*/research/")
        return

    print(f"Found {len(json_files)} JSON file(s):")
    for f in json_files:
        print(f"  {f}")

    llm = ChatAnthropic(model=model_name)

    for filepath in json_files:
        process_json_file(filepath, llm, max_workers=max_workers)

    print("\nAll done!")


if __name__ == "__main__":
    # Run from repo root or set base_dir to the repo root
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    run_all(base_dir)
