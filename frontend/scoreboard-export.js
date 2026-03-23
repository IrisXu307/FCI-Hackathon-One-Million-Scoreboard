function exportCSV() {
  const { regions, pillars } = scoreboardDB;
  const rows = [['Pillar', 'Metric', ...regions]];
  pillars.forEach(pillar => {
    pillar.metrics.forEach(metric => {
      rows.push([pillar.label, metric.label, ...metric.values.map(v => metric.format(v))]);
    });
  });
  const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  triggerDownload(new Blob([csv], { type: 'text/csv' }), 'waterloo-region-housing-scoreboard.csv');
}

function exportJSON() {
  const out = {
    title: 'Waterloo Region Housing Scoreboard',
    generated: new Date().toISOString().slice(0, 10),
    note: 'All 2025 values are projected estimates',
    regions: scoreboardDB.regions,
    pillars: scoreboardDB.pillars.map(p => ({
      label: p.label,
      metrics: p.metrics.map(m => ({
        label: m.label,
        definition: m.definition || '',
        higherIsBetter: m.higherIsBetter,
        values: Object.fromEntries(scoreboardDB.regions.map((r, i) => [r, m.values[i]]))
      }))
    }))
  };
  triggerDownload(new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' }), 'waterloo-region-housing-scoreboard.json');
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
