function rankCities(values, higherIsBetter) {
  // values[1..4] are the 4 city values; rank among them
  const cityVals = values.slice(1);
  const sorted = [...cityVals].sort((a, b) => higherIsBetter ? b - a : a - b);
  return cityVals.map(v => {
    const idx = sorted.findIndex(s => s === v);
    return idx + 1;
  });
}

function renderScoreboard() {
  const { regions, pillars } = scoreboardDB;
  const tbody = document.getElementById('scoreboardBody');
  const thead = document.getElementById('scoreboardHead');

  // Header row
  let headHtml = `<tr><th class="sb-label-col">Metric</th>`;
  regions.forEach((r, i) => {
    headHtml += `<th class="${i === 0 ? 'sb-region-col' : 'sb-city-col'}">${r}</th>`;
  });
  headHtml += `</tr>`;
  thead.innerHTML = headHtml;

  let bodyHtml = '';
  pillars.forEach(pillar => {
    bodyHtml += `<tr class="sb-pillar-row"><td colspan="${regions.length + 1}">${pillar.label}</td></tr>`;
    pillar.metrics.forEach(metric => {
      const ranks = metric.higherIsBetter !== null ? rankCities(metric.values, metric.higherIsBetter) : null;
      const tip = metric.definition ? ` data-tooltip="${metric.definition}"` : '';
      const star = metric.predicted !== false ? `<sup class="predicted-marker">*</sup>` : '';
      bodyHtml += `<tr class="sb-metric-row"><td class="sb-label"${tip}>${metric.label} <span class="info-icon">ⓘ</span>${star}</td>`;
      metric.values.forEach((v, i) => {
        let cls;
        if (i === 0) {
          cls = 'score-region';
        } else if (!ranks) {
          cls = 'score-neutral';
        } else {
          const rank = ranks[i - 1];
          cls = ['', 'score-best', 'score-good', 'score-bad', 'score-worst'][rank];
        }
        bodyHtml += `<td class="${cls}">${metric.format(v)}</td>`;
      });
      bodyHtml += `</tr>`;
    });
  });

  tbody.innerHTML = bodyHtml;
}

renderScoreboard();
