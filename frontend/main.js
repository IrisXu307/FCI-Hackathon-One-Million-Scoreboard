const STATUS_LABELS = {
  on_track:        'On Track',
  in_progress:     'In Progress',
  needs_attention: 'Needs Attention',
  no_data:         'No Data'
};

// Track active Chart.js instances so we can destroy before re-render
const activeCharts = {};

function metricCard(metric) {
  const badge  = `<span class="badge badge--${metric.status}">${STATUS_LABELS[metric.status] ?? metric.status}</span>`;
  const sub    = metric.note ? `<span class="card-sub">${metric.note}</span>` : '';
  const marker = metric.predicted ? `<sup class="predicted-marker">*</sup>` : '';
  const unit   = metric.unit ? `<span class="card-unit">${metric.unit}</span>` : '';
  return `
    <div class="card">
      <div class="card-header">
        <h3>${metric.label}</h3>
        ${badge}
      </div>
      <p class="card-value">${metric.display}${marker} ${unit}</p>
      ${sub}
    </div>`;
}

function initChart(canvasId, cfg) {
  if (activeCharts[canvasId]) {
    activeCharts[canvasId].destroy();
    delete activeCharts[canvasId];
  }
  const canvas = document.getElementById(canvasId);
  if (!canvas || !cfg) return;
  activeCharts[canvasId] = new Chart(canvas, {
    type: 'line',
    data: {
      labels: cfg.years,
      datasets: cfg.series.map(s => ({
        label: s.label,
        data: s.data,
        borderColor: s.color,
        backgroundColor: s.color + '18',
        fill: false,
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          labels: { color: '#8b949e', font: { size: 11 }, boxWidth: 14, padding: 16 }
        }
      },
      scales: {
        x: {
          ticks: { color: '#8b949e', font: { size: 11 } },
          grid:  { color: 'rgba(255,255,255,0.06)' },
          border:{ color: 'rgba(255,255,255,0.08)' }
        },
        y: {
          ticks: { color: '#8b949e', font: { size: 11 } },
          grid:  { color: 'rgba(255,255,255,0.06)' },
          border:{ color: 'rgba(255,255,255,0.08)' },
          ...(cfg.yLabel ? { title: { display: true, text: cfg.yLabel, color: '#8b949e', font: { size: 10 } } } : {})
        }
      }
    }
  });
}

function renderCategory(key) {
  const cat     = housingData.categories[key];
  const content = document.getElementById('categoryContent');

  if (cat.coming_soon) {
    content.innerHTML = `
      <div class="coming-soon">
        <p class="coming-soon-icon">◎</p>
        <h3>${cat.label}</h3>
        <p>Data coming soon</p>
      </div>`;
    return;
  }

  content.innerHTML = Object.entries(cat.pillars).map(([pillKey, pillar]) => {
    const hasPredicted = pillar.metrics.some(m => m.predicted);
    return `
    <section class="pillar">
      <h2 class="pillar-title">${pillar.label}</h2>
      <div class="cards">
        ${pillar.metrics.map(metricCard).join('')}
      </div>
      ${hasPredicted ? `<p class="pillar-note">* Projected estimate</p>` : ''}
      ${(pillar.charts || (pillar.chart ? [pillar.chart] : [])).map((ch, ci) => `
        <div class="chart-container">
          <p class="chart-title">${ch.title}</p>
          <div class="chart-wrap">
            <canvas id="chart-${pillKey}-${ci}"></canvas>
          </div>
        </div>`).join('')}
    </section>`;
  }).join('');

  // Init charts after DOM is updated
  Object.entries(cat.pillars).forEach(([pillKey, pillar]) => {
    (pillar.charts || (pillar.chart ? [pillar.chart] : [])).forEach((ch, ci) => {
      initChart(`chart-${pillKey}-${ci}`, ch);
    });
  });
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCategory(tab.dataset.category);
  });
});

renderCategory('housing');
