// Thin orchestrator — category data lives in db/*.js, loaded via <script> tags
const housingData = {
  categories: {
    housing:        { label: 'Housing', pillars: housingDB.pillars },
    transportation: transportationDB,
    healthcare:     healthcareDB,
    employment:     employmentDB,
    placemaking:    placemakingDB
  }
};

// Merge housing + transportation + healthcare + employment per-city data for map.js
// Housing cityMetrics provide geometry fields (displayName, city, county, state, country)
const cityMetrics = housingDB.cityMetrics.map(hCity => {
  const tCity = (typeof transportationCityMetrics !== 'undefined' ? transportationCityMetrics : [])
    .find(t => t.name === hCity.name) || {};
  const hcCity = (typeof healthcareCityMetrics !== 'undefined' ? healthcareCityMetrics : [])
    .find(h => h.name === hCity.name) || {};
  const emCity = (typeof employmentCityMetrics !== 'undefined' ? employmentCityMetrics : [])
    .find(e => e.name === hCity.name) || {};
  const pmCity = (typeof placemakingCityMetrics !== 'undefined' ? placemakingCityMetrics : [])
    .find(p => p.name === hCity.name) || {};
  return Object.assign({}, hCity, tCity, hcCity, emCity, pmCity);
});

// Region-level metrics for map sidebar (housing)
const regionMetrics = housingDB.regionMetrics;

// Region-level metrics for map sidebar (transportation)
const regionTransportMetrics = typeof transportationRegionMetrics !== 'undefined'
  ? transportationRegionMetrics : {};

// Region-level metrics for map sidebar (healthcare)
const regionHealthcareMetrics = typeof healthcareRegionMetrics !== 'undefined'
  ? healthcareRegionMetrics : {};

// Region-level metrics for map sidebar (employment)
const regionEmploymentMetrics = typeof employmentRegionMetrics !== 'undefined'
  ? employmentRegionMetrics : {};

// Region-level metrics for map sidebar (placemaking)
const regionPlacemakingMetrics = typeof placemakingRegionMetrics !== 'undefined'
  ? placemakingRegionMetrics : {};
