#!/usr/bin/env python3
"""
json_to_js.py — Convert research JSON files (region → pillar → metric → year)
into frontend DB JS files for the Vision One Million Scoreboard.

Expected JSON structure (all research files follow this pattern):
  {
    "Region of Waterloo": {            ← first region key = regional aggregate
      "pillar_1_supply": {             ← pillar_{N}_{name}
        "total_jobs": {                ← metric key (snake_case)
          "2020": "306200",            ← plain number = measured actual
          "2025": "383500_est",        ← _est suffix = projected estimate
          "2030": "450000_est"         ← skipped (only CHART_YEARS are extracted)
        }
      }
    },
    "Kitchener":     { ... },          ← individual cities (same pillar structure)
    "Cambridge":     { ... },
    "Waterloo":      { ... },
    "North Dumfries":{ ... },
    "Wellesley":     { ... },
    "Wilmot":        { ... },
    "Woolwich":      { ... },
    "sources":       { ... }           ← metadata, silently skipped
  }

Usage:
    python3 json_to_js.py datasets/research/Employment.json
    python3 json_to_js.py datasets/research/Healthcare.json
"""

import json
import re
import sys
from pathlib import Path

# ── What years to extract ─────────────────────────────────────────────────────
CHART_YEARS = [2020, 2021, 2022, 2023, 2024, 2025]

# ── Region auto-detection ─────────────────────────────────────────────────────
# The "whole region" aggregate key — matched case-insensitively.
REGION_HINT = 'region'   # any key whose name contains this word is the regional aggregate

# ── Non-data keys to skip at the top level ────────────────────────────────────
SKIP_REGIONS = {'sources'}

# ── Metrics to drop entirely per file (exact snake_case key) ─────────────────
# Add entries for metrics that duplicate another or are unused.
SKIP_METRICS_BY_FILE = {
    'Employment.json': {'job_creation_rate'},
}

# ── Color palette ─────────────────────────────────────────────────────────────
# 8 distinct colors for the 7 cities + region charts
CITY_COLOR_CYCLE = [
    '#3fb950',   # Kitchener     — green
    '#f0883e',   # Cambridge     — orange
    '#4facfe',   # Waterloo      — blue
    '#e3b341',   # North Dumfries— amber
    '#d2a8ff',   # Wellesley     — violet
    '#79c0ff',   # Wilmot        — sky
    '#56d364',   # Woolwich      — lime
    '#ff7b72',   # extra
]

# Colors for regional-level overview charts (series within one chart)
REGION_SERIES_COLORS = ['#4facfe', '#3fb950', '#f0883e', '#f85149', '#9e9ac8', '#e3b341', '#a5d6ff']

# ── Metric name abbreviations ─────────────────────────────────────────────────
# Maps snake_case JSON metric key → camelCase JS field name.
# Without an entry here, the key is auto-converted (snake_case → camelCase).
METRIC_ABBREV = {
    # ── Employment ──────────────────────────────────────────────────────────
    'labor_force_participation':   'lfp',
    'labour_force_participation':  'lfp',
    'unemployment_rate':           'unemp',
    'median_income':               'income',
    'income_inequality':           'inequality',
    'sector_diversity':            'diversity',
    'job_retention':               'retention',
    'economic_resilience':         'resilience',
    # ── Healthcare ──────────────────────────────────────────────────────────
    'hospital_beds_per_1000':                  'bedsPer1k',
    'beds_per_capita':                         'bedsPer1k',
    'beds_per_1k':                             'bedsPer1k',
    'healthcare_facilities_count':             'facilitiesCount',
    'hospital_investment_millions':            'hospitalInvestment',
    'population_total':                        'population',
    'seniors_percentage':                      'aging65Plus',
    'aging_population_65plus_percent':         'aging65Plus',
    'aging_65_plus':                           'aging65Plus',
    'er_visits_annual':                        'erVisitsAnnual',
    'er_visits_per_capita':                    'erVisits',
    'residents_without_family_doctor':         'withoutFamilyDr',
    'family_doctor_access_percent':            'familyDrAccess',
    'wait_times_weeks':                        'waitTimes',
    'home_care_wait_days':                     'homeCareWait',
    'doctors_per_100k':                        'doctorsPer100k',
    'doctors_per_capita':                      'doctorsPer1k',
    'nurses_per_1000':                         'nursesPer1k',
    'nurses_per_capita':                       'nursesPer1k',
    'healthcare_workers_per_capita':           'healthWorkersPer1k',
    'healthcare_workers_shortage':             'workerShortage',
    'life_expectancy_years':                   'lifeExpectancy',
    'preventable_hospitalizations_per_capita': 'prevHosp',
    'preventable_hospitalizations_rate':       'prevHosp',
    'chronic_disease_burden_percentage':       'chronicDisease',
    'health_outcomes_score':                   'healthScore',
    'service_availability_score':              'serviceAvail',
    'clinics_per_capita':                      'clinicsPer1k',
    'hospitals_per_capita':                    'hospitalsPer1k',
    # ── Transportation ──────────────────────────────────────────────────────
    'transit_routes':                          'transitRoutes',
    'service_hours_annual':                    'serviceHoursAnnual',
    'bus_fleet_size':                          'busFleetSize',
    'lrt_stations':                            'lrtStations',
    'annual_ridership':                        'ridershipAnnual',
    'annual_ridership_millions':               'ridershipAnnual',
    'lrt_ridership_millions':                  'lrtRidership',
    'population_using_transit_percent':        'transitUsers',
    'vehicle_commute_share':                   'vehicleCommuteShare',
    'transit_coverage':                        'transitCoverage',
    'population_within_500m_transit_percent':  'transitCoverage',
    'walkability_score':                       'walkabilityScore',
    'mobility_plus_trips':                     'mobilityPlusTrips',
    'avg_commute_time':                        'commuteMins',
    'commute_time':                            'commuteMins',
    'average_commute_time_minutes':            'commuteMins',
    'congestion_index':                        'congestionIndex',
    'on_time_performance':                     'onTimePerformance',
    'on_time_performance_percent':             'onTimePerformance',
    'service_frequency_peak_minutes':          'serviceFrequency',
    'transport_emissions':                     'transportEmissions',
    'transport_emissions_tonnes_co2':          'transportEmissions',
    'ev_adoption':                             'evAdoption',
    'ev_adoption_rate':                        'evAdoption',
    'ev_adoption_percent':                     'evAdoption',
    'transit_modal_share':                     'transitModalShare',
    'transit_modal_share_percent':             'transitModalShare',
    # ── Healthcare (overrides) ───────────────────────────────────────────────────
    'er_visits_annual':                        'erVisits',
    'doctors_per_100k':                        'doctorsPer1k',
}

# ── Metrics that are rates/percentages (used for display formatting) ──────────
RATE_KEYWORDS = (
    'rate', 'growth', 'participation', 'share', 'adoption', 'burden',
    'vacancy', 'performance', 'retention', 'layoff', 'percent', 'percentage',
    'inequality', 'coverage', 'access', 'availability', 'resilience',
    'diversity', 'score', 'index',
)

# ── Helpers ───────────────────────────────────────────────────────────────────

def snake_to_camel(s: str) -> str:
    parts = s.split('_')
    return parts[0] + ''.join(p.capitalize() for p in parts[1:])


def field_name(metric_key: str) -> str:
    return METRIC_ABBREV.get(metric_key, snake_to_camel(metric_key))


def parse_value(raw):
    """Parse '306200', '4.6_est', '-3.2' → (number | None, is_estimated).
    Values ending in _est are estimated/projected."""
    s = str(raw).strip()
    is_est = s.endswith('_est')
    if is_est:
        s = s[:-4]
    try:
        v = float(s)
        # Preserve integer form for whole numbers
        return (int(v) if v == int(v) else v), is_est
    except (ValueError, TypeError):
        return None, is_est


def js_val(v) -> str:
    """Render a Python value as a JS literal (None → null)."""
    if v is None:
        return 'null'
    return str(v)


def js_list(lst: list) -> str:
    return '[' + ', '.join(js_val(v) for v in lst) + ']'


def pillar_label(pillar_key: str) -> str:
    """'pillar_1_supply' → 'Pillar 1: Supply'"""
    m = re.match(r'pillar_(\d+)_(.*)', pillar_key)
    if m:
        name = m.group(2).replace('_', ' ').title()
        return f'Pillar {m.group(1)}: {name}'
    return pillar_key.replace('_', ' ').title()


def pillar_short(pillar_key: str) -> str:
    """'pillar_1_supply' → 'supply'"""
    m = re.match(r'pillar_\d+_(.*)', pillar_key)
    return m.group(1) if m else pillar_key


def metric_label(metric_key: str) -> str:
    return metric_key.replace('_', ' ').title()


def get_year_val(pillar_dict: dict, metric_key: str, year: int):
    raw = pillar_dict.get(metric_key, {}).get(str(year))
    if raw is None:
        return None, False
    return parse_value(raw)


def get_series(pillar_dict: dict, metric_key: str) -> list:
    result = []
    for y in CHART_YEARS:
        val, _ = get_year_val(pillar_dict, metric_key, y)
        result.append(val)
    return result


def format_display(val, metric_key: str) -> str:
    """Format a value for the display field on a metric card."""
    if val is None:
        return 'N/A'
    mk_lower = metric_key.lower()
    is_rate = any(kw in mk_lower for kw in RATE_KEYWORDS)
    if isinstance(val, int):
        if val > 1000:
            return f'{val:,}'
        if is_rate:
            return f'{val:.1f}%'
        return str(val)
    # float
    if val < 2 and not is_rate:
        return f'{val:.2f}'
    if is_rate:
        return f'{val:.1f}%'
    return f'{val:.1f}'


# ── Core generator ────────────────────────────────────────────────────────────

def generate(data: dict, category_name: str, source_filename: str,
             skip_metrics: set) -> str:
    out = []

    # Identify the regional aggregate vs individual cities
    region_key = None
    city_keys  = []
    for k, v in data.items():
        if k in SKIP_REGIONS or not isinstance(v, dict):
            continue
        if region_key is None and REGION_HINT.lower() in k.lower():
            region_key = k
        else:
            city_keys.append(k)

    # Fallback: first key is region if none matched
    if region_key is None:
        all_keys = [k for k in data if k not in SKIP_REGIONS and isinstance(data[k], dict)]
        region_key = all_keys[0]
        city_keys  = all_keys[1:]

    region_data = data[region_key]
    pillar_keys = [k for k in region_data if k.startswith('pillar_') or k.startswith('pillar')]

    # JS variable prefix
    var_prefix = re.sub(r'\s+', '_', category_name.lower())
    var_prefix = re.sub(r'[^a-z0-9_]', '', var_prefix)
    camel_prefix = snake_to_camel(var_prefix)
    db_var     = f'{camel_prefix}DB'
    city_var   = f'{camel_prefix}CityMetrics'
    region_var = f'{camel_prefix}RegionMetrics'

    # Assign a color to each city
    city_color = {city: CITY_COLOR_CYCLE[i % len(CITY_COLOR_CYCLE)]
                  for i, city in enumerate(city_keys)}

    # ── Header ────────────────────────────────────────────────────────────
    out.append(f'// {category_name} database')
    out.append(f'// Auto-generated from datasets/research/{source_filename}')
    out.append(f'// predicted: false = measured actual; omitted/true = projected estimate')
    out.append('')

    # ── DB object ─────────────────────────────────────────────────────────
    out.append(f'const {db_var} = {{')
    out.append(f"  label: '{category_name}',")
    out.append(f'  pillars: {{')
    out.append('')

    for pi, pillar_key in enumerate(pillar_keys):
        p_short  = pillar_short(pillar_key)
        p_label  = pillar_label(pillar_key)
        pillar_d = region_data.get(pillar_key, {})
        metric_keys = [k for k in pillar_d if k not in skip_metrics]

        out.append(f'    {p_short}: {{')
        out.append(f"      label: '{p_label}',")
        out.append(f'      metrics: [')

        for mk in metric_keys:
            # Use most recent non-null year for display
            display_val = None
            display_est = False
            for yr in reversed(CHART_YEARS):
                v, is_est = get_year_val(pillar_d, mk, yr)
                if v is not None:
                    display_val = v
                    display_est = is_est
                    break
            display_str = format_display(display_val, mk)
            if display_est:
                display_str += '*'
            predicted_js = 'true' if display_est else 'false'
            out.append(f'        {{')
            out.append(f"          id: '{mk}',")
            out.append(f"          label: '{metric_label(mk)} ({CHART_YEARS[-1]})',")
            out.append(f"          display: '{display_str}',")
            out.append(f"          unit: '',")
            out.append(f"          status: 'in_progress',")
            out.append(f"          predicted: {predicted_js},")
            out.append(f"          note: ''")
            out.append(f'        }},')

        out.append(f'      ],')
        out.append(f'      charts: [')

        # Chart 1 — regional overview, all metrics in this pillar
        out.append(f'        {{')
        out.append(f"          title: '{region_key} — {p_label} ({CHART_YEARS[0]}–{CHART_YEARS[-1]})',")
        out.append(f"          years: {CHART_YEARS},")
        out.append(f'          series: [')
        for ci, mk in enumerate(metric_keys):
            color  = REGION_SERIES_COLORS[ci % len(REGION_SERIES_COLORS)]
            series = get_series(pillar_d, mk)
            out.append(f"            {{ label: '{metric_label(mk)}', color: '{color}', data: {js_list(series)} }},")
        out.append(f'          ]')
        out.append(f'        }},')

        # Chart 2 — city comparison for first metric in pillar
        if metric_keys:
            first_mk    = metric_keys[0]
            first_label = metric_label(first_mk)

            out.append(f'        {{')
            out.append(f"          title: '{first_label} by Municipality ({CHART_YEARS[0]}–{CHART_YEARS[-1]})',")
            out.append(f"          yLabel: '{first_label}',")
            out.append(f"          years: {CHART_YEARS},")
            out.append(f'          series: [')
            for city in city_keys:
                city_pillar = data[city].get(pillar_key, {})
                cd          = get_series(city_pillar, first_mk)
                color       = city_color[city]
                out.append(f"            {{ label: '{city}', color: '{color}', data: {js_list(cd)} }},")
            out.append(f'          ]')
            out.append(f'        }}')

        is_last = (pi == len(pillar_keys) - 1)
        out.append(f'      ]')
        out.append(f'    }}{("" if is_last else ",")}')
        out.append('')

    out.append(f'  }}')
    out.append(f'}};')
    out.append('')

    # ── City metrics ──────────────────────────────────────────────────────
    out.append(f'// Per-city {category_name} metrics for map.js overlay')
    out.append(f'const {city_var} = [')

    for city in city_keys:
        out.append(f'  {{')
        out.append(f"    name: '{city}',")
        for year in CHART_YEARS:
            parts = []
            for pillar_key in pillar_keys:
                city_pillar = data[city].get(pillar_key, {})
                for mk in [k for k in region_data.get(pillar_key, {}) if k not in skip_metrics]:
                    val, _ = get_year_val(city_pillar, mk, year)
                    if val is not None:
                        parts.append(f'{field_name(mk)}{year}: {js_val(val)}')
            if parts:
                out.append(f'    {", ".join(parts)},  // {year}')
        out.append(f'  }},')

    out.append(f'];')
    out.append('')

    # ── Region metrics ────────────────────────────────────────────────────
    out.append(f'// Region-level {category_name} metrics for map sidebar ({region_key})')
    out.append(f'const {region_var} = {{')
    for year in CHART_YEARS:
        parts = []
        for pillar_key in pillar_keys:
            pillar_d = region_data.get(pillar_key, {})
            for mk in [k for k in pillar_d if k not in skip_metrics]:
                val, _ = get_year_val(pillar_d, mk, year)
                if val is not None:
                    parts.append(f'{field_name(mk)}{year}: {js_val(val)}')
        if parts:
            out.append(f'  {", ".join(parts)},  // {year}')
    out.append('};')
    out.append('')

    return '\n'.join(out)


# ── Entry point ───────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print('Usage: python3 json_to_js.py datasets/research/<Category>.json')
        sys.exit(1)

    json_path = Path(sys.argv[1])
    if not json_path.exists():
        print(f'Error: {json_path} not found')
        sys.exit(1)

    with open(json_path, encoding='utf-8') as f:
        data = json.load(f)

    # Derive category name: "Employment.json" → "Employment", "03_Employment.json" → "Employment"
    stem          = json_path.stem
    category_name = re.sub(r'^\d+_', '', stem).replace('_', ' ')

    skip_metrics = SKIP_METRICS_BY_FILE.get(json_path.name, set())

    output = generate(data, category_name, json_path.name, skip_metrics)

    # Write to frontend/db/<category_lower>.js
    project_root = json_path.resolve().parent.parent.parent
    out_dir  = project_root / 'frontend' / 'db'
    out_name = re.sub(r'[^a-z0-9_]', '', category_name.lower().replace(' ', '_')) + '.js'
    out_path = out_dir / out_name

    out_path.write_text(output, encoding='utf-8')
    print(f'Written : {out_path}')
    print(f'Category: {category_name}')
    print(f'Regions : region="{next(k for k in data if k not in SKIP_REGIONS and isinstance(data[k], dict) and REGION_HINT.lower() in k.lower())}", cities={[k for k in data if k not in SKIP_REGIONS and isinstance(data[k], dict) and REGION_HINT.lower() not in k.lower()]}')
    print(f'Years   : {CHART_YEARS}')


if __name__ == '__main__':
    main()
