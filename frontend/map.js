const map = L.map('map').setView([43.42, -80.48], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let geojsonLayer = null;
let fetchedFeatures = null;

const metaConfig = {
  density: {
    label: 'Population Density (per km²)',
    format: v => `${v.toLocaleString()} / km²`,
    thresholds: [1300, 1700, 2000],
    colors: ['#fee0d2', '#fc9272', '#de2d26', '#a50f15']
  },
  price: {
    label: 'Average Housing Price',
    format: v => `$${v.toLocaleString()}`,
    thresholds: [740000, 800000, 840000],
    colors: ['#deebf7', '#9ecae1', '#3182bd', '#08519c']
  }
};

function getColor(value, metric) {
  const { thresholds, colors } = metaConfig[metric];
  if (value < thresholds[0]) return colors[0];
  if (value < thresholds[1]) return colors[1];
  if (value < thresholds[2]) return colors[2];
  return colors[3];
}

async function fetchBoundary(city) {
  // Structured query is more precise than freeform text — avoids returning
  // the Regional Municipality of Waterloo instead of individual cities
  const params = new URLSearchParams({
    city: city.city,
    county: city.county,
    state: city.state,
    country: city.country,
    format: 'geojson',
    polygon_geojson: '1',
    limit: '5',
    'accept-language': 'en'
  });

  const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`);
  const data = await res.json();

  // Prefer a result explicitly typed as 'city'; fall back to first result
  const feature =
    data.features.find(f => f.properties.type === 'city') ||
    data.features.find(f => f.properties.type === 'administrative') ||
    data.features[0];

  if (!feature?.geometry) throw new Error(`No boundary found for ${city.name}`);

  return {
    type: 'Feature',
    geometry: feature.geometry,
    properties: { name: city.name, density: city.density, price: city.price }
  };
}

function renderLayer(metric) {
  if (geojsonLayer) map.removeLayer(geojsonLayer);

  geojsonLayer = L.geoJSON({ type: 'FeatureCollection', features: fetchedFeatures }, {
    style: feature => ({
      fillColor: getColor(feature.properties[metric], metric),
      weight: 2,
      opacity: 1,
      color: '#444',
      fillOpacity: 0.55
    }),
    onEachFeature: (feature, layer) => {
      const p = feature.properties;
      const value = metaConfig[metric].format(p[metric]);
      layer.bindPopup(`<strong>${p.name}</strong><br>${metaConfig[metric].label}: ${value}`);
      layer.on('mouseover', () => { layer.setStyle({ fillOpacity: 0.8 }); layer.openPopup(); });
      layer.on('mouseout', () => { layer.setStyle({ fillOpacity: 0.55 }); layer.closePopup(); });
    }
  }).addTo(map);

  map.fitBounds(geojsonLayer.getBounds(), { padding: [30, 30] });
}

function updateSidebar(metric) {
  const category = document.getElementById('categorySelect').value;
  const details = fetchedFeatures.map(f => {
    const p = f.properties;
    return `${p.name}: ${metaConfig[metric].format(p[metric])}`;
  }).join('\n');
  document.getElementById('metricDetails').innerText =
    `Category: ${category}\nMetric: ${metaConfig[metric].label}\n\n${details}`;
}

function updateMap() {
  const metric = document.getElementById('metricSelect').value;
  renderLayer(metric);
  updateSidebar(metric);
}

async function init() {
  document.getElementById('metricDetails').innerText = 'Loading boundaries…';
  try {
    // Fetch sequentially to respect Nominatim's 1 req/s rate limit
    const features = [];
    for (const city of cityMetrics) {
      features.push(await fetchBoundary(city));
      await new Promise(r => setTimeout(r, 1100));
    }
    fetchedFeatures = features;
    renderLayer('density');
    updateSidebar('density');
    document.getElementById('loadingOverlay').classList.add('hidden');
  } catch (err) {
    document.getElementById('metricDetails').innerText = `Error: ${err.message}`;
    document.getElementById('loadingOverlay').classList.add('hidden');
    console.error(err);
  }
}

init();
