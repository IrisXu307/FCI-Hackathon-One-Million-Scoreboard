const map = L.map('map').setView([43.42, -80.48], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let geojsonLayer = null;
let fetchedFeatures = null;

const metaConfig = {
  density: {
    label: 'Population Density (per km²)',
    format: v => v != null ? `${v.toLocaleString()} / km²` : 'N/A',
    thresholds: [1300, 1700, 2000],
    colors: ['#fee0d2', '#fc9272', '#de2d26', '#a50f15']
  },
  price: {
    label: 'Average Housing Price',
    format: v => v != null ? `$${v.toLocaleString()}` : 'N/A',
    thresholds: [740000, 800000, 840000],
    colors: ['#deebf7', '#9ecae1', '#3182bd', '#08519c']
  },
  housingTarget2031: {
    label: 'Provincial Housing Target (2031)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'Not specified',
    thresholds: [5000, 15000, 30000],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  // Supply
  unitsApproved2024: {
    label: 'Units Approved (2024)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [1000, 3000, 6000],
    colors: ['#ffffcc', '#a1dab4', '#41b6c4', '#225ea8']
  },
  housingStarts2024: {
    label: 'Housing Starts (2024)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [500, 1500, 2500],
    colors: ['#fff7bc', '#fec44f', '#d95f0e', '#993404']
  },
  unitsCompleted2024: {
    label: 'Units Completed (2024)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [400, 1000, 2000],
    colors: ['#f2f0f7', '#9e9ac8', '#6a51a3', '#3f007d']
  },
  rentalUnits2024: {
    label: 'New Rental Units (2024)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [50, 100, 200],
    colors: ['#e5f5f9', '#66c2a4', '#238b45', '#00441b']
  },
  // Demand
  populationGrowthRate2023: {
    label: 'Population Growth Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2, 4, 5],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#d94701']
  },
  temporaryStudents2023: {
    label: 'Temporary Students (2023)',
    format: v => v != null ? `${v.toLocaleString()} residents` : 'No data',
    thresholds: [5000, 12000, 30000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  totalHouseholds2023: {
    label: 'Total Households (2023)',
    format: v => v != null ? `${v.toLocaleString()} households` : 'No data',
    thresholds: [52000, 55000, 100000],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  // Affordability
  medianHomePrice2025: {
    label: 'Median Home Price (2025)',
    format: v => v != null ? `$${v.toLocaleString()}` : 'No data',
    thresholds: [700000, 760000, 800000],
    colors: ['#ffffb2', '#fecc5c', '#fd8d3c', '#e31a1c']
  },
  priceToIncomeRatio2025: {
    label: 'Price-to-Income Ratio (2025)',
    format: v => v != null ? `${v}×` : 'No data',
    thresholds: [5.5, 6.0, 6.2],
    colors: ['#ffffb2', '#fecc5c', '#fd8d3c', '#e31a1c']
  },
  averageRent2025: {
    label: 'Average Rent (2025)',
    format: v => v != null ? `$${v.toLocaleString()}/mo` : 'No data',
    thresholds: [1860, 1920, 1960],
    colors: ['#ffffb2', '#fecc5c', '#fd8d3c', '#e31a1c']
  },
  rentBurden2025: {
    label: 'Rent Burden (2025)',
    format: v => v != null ? `${v}% of income` : 'No data',
    thresholds: [30, 31, 32],
    colors: ['#fee8c8', '#fdbb84', '#e34a33', '#b30000']
  },
  rentalVacancyRate2025: {
    label: 'Rental Vacancy Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [3.3, 3.6, 3.8],
    colors: ['#edf8fb', '#b2e2e2', '#66c2a4', '#238b45']
  },
  coreHousingNeed2025: {
    label: 'Core Housing Need (2025)',
    format: v => v != null ? `${v}% of households` : 'No data',
    thresholds: [11, 11.5, 12],
    colors: ['#fee8c8', '#fdbb84', '#e34a33', '#b30000']
  },
  subsidizedWaitlist2025: {
    label: 'Subsidized Housing Waitlist (2025)',
    format: v => v != null ? `${v.toLocaleString()} households` : 'No data',
    thresholds: [600, 800, 1500],
    colors: ['#edf8fb', '#b2e2e2', '#e34a33', '#b30000']
  },
  // Urban Form
  intensificationPct2025: {
    label: 'Intensification Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [40, 50, 65],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  transitOrientedUnits2025: {
    label: 'Transit-Oriented Dev. Units (2025)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [1800, 3000, 4500],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  multiUnitPermits2025: {
    label: 'Multi-Unit Permits (2025)',
    format: v => v != null ? `${v.toLocaleString()} permits` : 'No data',
    thresholds: [450, 500, 2000],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  majorTransitAreas2025: {
    label: 'Major Transit Station Areas (2025)',
    format: v => v != null ? `${v} areas` : 'No data',
    thresholds: [4, 6, 7],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  // Stability
  homelessness2025: {
    label: 'People Experiencing Homelessness (2025)',
    format: v => v != null ? `${v.toLocaleString()} people` : 'No data',
    thresholds: [480, 600, 750],
    colors: ['#fee8c8', '#fdbb84', '#e34a33', '#b30000']
  },
  chronicHomeless2025: {
    label: 'Chronic Homelessness (2025)',
    format: v => v != null ? `${v.toLocaleString()} people` : 'No data',
    thresholds: [220, 280, 400],
    colors: ['#fee8c8', '#fdbb84', '#e34a33', '#b30000']
  },
  livingRough2025: {
    label: 'Living Rough (2025)',
    format: v => v != null ? `${v.toLocaleString()} people` : 'No data',
    thresholds: [190, 250, 350],
    colors: ['#fee8c8', '#fdbb84', '#e34a33', '#b30000']
  },
  shelterBeds2025: {
    label: 'Shelter Beds Available (2025)',
    format: v => v != null ? `${v.toLocaleString()} beds` : 'No data',
    thresholds: [160, 175, 260],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  supportiveHousingUnits2025: {
    label: 'Supportive Housing Units (2025)',
    format: v => v != null ? `${v.toLocaleString()} units` : 'No data',
    thresholds: [200, 250, 360],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  // Transportation metrics
  ridershipAnnual2025: {
    label: 'Annual Ridership (2025)',
    format: v => v != null ? `${(v/1000000).toFixed(1)}M trips` : 'No data',
    thresholds: [1000000, 5000000, 15000000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  vehicleCommuteShare2025: {
    label: 'Vehicle Commute Share (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [73, 78, 85],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  transitCoverage2025: {
    label: 'Pop. Within 500m of Transit (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [40, 65, 78],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  walkabilityScore2025: {
    label: 'Walkability Score (2025)',
    format: v => v != null ? `${v} / 100` : 'No data',
    thresholds: [30, 45, 58],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  commuteMins2025: {
    label: 'Avg. Commute Time (2025)',
    format: v => v != null ? `${v} min` : 'No data',
    thresholds: [20, 25, 33],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  congestionIndex2025: {
    label: 'Congestion Index (2025)',
    format: v => v != null ? `${v}` : 'No data',
    thresholds: [1.05, 1.15, 1.30],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  onTimePerformance2025: {
    label: 'On-Time Performance (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [85, 90, 95],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transportEmissions2025: {
    label: 'Transport Emissions (2025)',
    format: v => v != null ? `${(v/1000).toFixed(0)}k t CO₂` : 'No data',
    thresholds: [100000, 200000, 350000],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  evAdoption2025: {
    label: 'EV Adoption Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [3, 4, 5.5],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transitModalShare2025: {
    label: 'Transit Modal Share (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [7, 12, 16],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  // Transportation 2023 actuals
  ridershipAnnual2023: {
    label: 'Annual Ridership (2023)',
    format: v => v != null ? `${(v/1000000).toFixed(1)}M trips` : 'No data',
    thresholds: [800000, 4000000, 12000000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  vehicleCommuteShare2023: {
    label: 'Vehicle Commute Share (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [74, 80, 87],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  transitCoverage2023: {
    label: 'Pop. Within 500m of Transit (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [30, 60, 76],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  walkabilityScore2023: {
    label: 'Walkability Score (2023)',
    format: v => v != null ? `${v} / 100` : 'No data',
    thresholds: [30, 45, 58],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  commuteMins2023: {
    label: 'Avg. Commute Time (2023)',
    format: v => v != null ? `${v} min` : 'No data',
    thresholds: [20, 25, 35],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  congestionIndex2023: {
    label: 'Congestion Index (2023)',
    format: v => v != null ? `${v}` : 'No data',
    thresholds: [1.08, 1.20, 1.35],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  onTimePerformance2023: {
    label: 'On-Time Performance (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [82, 88, 94],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transportEmissions2023: {
    label: 'Transport Emissions (2023)',
    format: v => v != null ? `${(v/1000).toFixed(0)}k t CO₂` : 'No data',
    thresholds: [100000, 200000, 370000],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  evAdoption2023: {
    label: 'EV Adoption Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [1.5, 2.5, 3.5],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transitModalShare2023: {
    label: 'Transit Modal Share (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [5, 10, 15],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  // Transportation 2024 actuals
  ridershipAnnual2024: {
    label: 'Annual Ridership (2024)',
    format: v => v != null ? `${(v/1000000).toFixed(1)}M trips` : 'No data',
    thresholds: [1000000, 5000000, 15000000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  vehicleCommuteShare2024: {
    label: 'Vehicle Commute Share (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [74, 80, 87],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  transitCoverage2024: {
    label: 'Pop. Within 500m of Transit (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [30, 60, 76],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  walkabilityScore2024: {
    label: 'Walkability Score (2024)',
    format: v => v != null ? `${v} / 100` : 'No data',
    thresholds: [30, 45, 58],
    colors: ['#f7fcf5', '#74c476', '#238b45', '#00441b']
  },
  commuteMins2024: {
    label: 'Avg. Commute Time (2024)',
    format: v => v != null ? `${v} min` : 'No data',
    thresholds: [20, 25, 35],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  congestionIndex2024: {
    label: 'Congestion Index (2024)',
    format: v => v != null ? `${v}` : 'No data',
    thresholds: [1.08, 1.20, 1.35],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  onTimePerformance2024: {
    label: 'On-Time Performance (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [82, 88, 94],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transportEmissions2024: {
    label: 'Transport Emissions (2024)',
    format: v => v != null ? `${(v/1000).toFixed(0)}k t CO₂` : 'No data',
    thresholds: [100000, 200000, 370000],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  evAdoption2024: {
    label: 'EV Adoption Rate (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2, 3, 4],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  transitModalShare2024: {
    label: 'Transit Modal Share (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [5, 10, 15],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  // Healthcare 2023 actuals
  bedsPer1k2023: {
    label: 'Hospital Beds per 1,000 (2023)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.5, 1.2, 2.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  clinicsPer1k2023: {
    label: 'Clinics per 1,000 (2023)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.07, 0.15, 0.22],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  erVisits2023: {
    label: 'ER Visits per Capita (2023)',
    format: v => v != null ? `${v.toFixed(2)} / person` : 'No data',
    thresholds: [0.28, 0.45, 0.57],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  aging65Plus2023: {
    label: 'Population Aged 65+ (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [17, 20, 23],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  waitTimes2023: {
    label: 'Specialist Wait Time (2023)',
    format: v => v != null ? `${v} wks` : 'No data',
    thresholds: [18, 20, 22],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  familyDrAccess2023: {
    label: 'Population with Family Doctor (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [84, 88, 91],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  serviceAvail2023: {
    label: 'Service Availability Score (2023)',
    format: v => v != null ? `${v} / 10` : 'No data',
    thresholds: [5.5, 7.0, 8.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  doctorsPer1k2023: {
    label: 'Physicians per 1,000 (2023)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.8, 1.5, 2.1],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  nursesPer1k2023: {
    label: 'Nurses per 1,000 (2023)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [3.5, 5.5, 7.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  healthWorkersPer1k2023: {
    label: 'Healthcare Workers per 1,000 (2023)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [7, 10, 14],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  lifeExpectancy2023: {
    label: 'Life Expectancy (2023)',
    format: v => v != null ? `${v.toFixed(1)} yrs` : 'No data',
    thresholds: [82.0, 82.8, 83.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  prevHosp2023: {
    label: 'Preventable Hospitalizations per Capita (2023)',
    format: v => v != null ? `${v.toFixed(3)}` : 'No data',
    thresholds: [0.021, 0.027, 0.033],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  healthScore2023: {
    label: 'Health Outcomes Score (2023)',
    format: v => v != null ? `${v.toFixed(1)} / 10` : 'No data',
    thresholds: [6.6, 7.7, 8.4],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  // Healthcare 2025
  bedsPer1k2025: {
    label: 'Hospital Beds per 1,000 (2025)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.5, 1.2, 2.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  clinicsPer1k2025: {
    label: 'Clinics per 1,000 (2025)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.07, 0.15, 0.22],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  erVisits2025: {
    label: 'ER Visits per Capita (2025)',
    format: v => v != null ? `${v.toFixed(2)} / person` : 'No data',
    thresholds: [0.35, 0.50, 0.60],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  aging65Plus2025: {
    label: 'Population Aged 65+ (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [17, 20, 23],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  waitTimes2025: {
    label: 'Specialist Wait Time (2025)',
    format: v => v != null ? `${v} wks` : 'No data',
    thresholds: [18, 20, 22],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  familyDrAccess2025: {
    label: 'Population with Family Doctor (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [84, 88, 91],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  serviceAvail2025: {
    label: 'Service Availability Score (2025)',
    format: v => v != null ? `${v} / 10` : 'No data',
    thresholds: [5.5, 7.0, 8.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  doctorsPer1k2025: {
    label: 'Physicians per 1,000 (2025)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.8, 1.5, 2.1],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  nursesPer1k2025: {
    label: 'Nurses per 1,000 (2025)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [3.5, 5.5, 7.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  healthWorkersPer1k2025: {
    label: 'Healthcare Workers per 1,000 (2025)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [7, 10, 14],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  lifeExpectancy2025: {
    label: 'Life Expectancy (2025)',
    format: v => v != null ? `${v.toFixed(1)} yrs` : 'No data',
    thresholds: [82.6, 83.0, 83.6],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  prevHosp2025: {
    label: 'Preventable Hospitalizations per Capita (2025)',
    format: v => v != null ? `${v.toFixed(3)}` : 'No data',
    thresholds: [0.020, 0.026, 0.032],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  healthScore2025: {
    label: 'Health Outcomes Score (2025)',
    format: v => v != null ? `${v.toFixed(1)} / 10` : 'No data',
    thresholds: [6.8, 7.8, 8.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  // Healthcare 2024
  bedsPer1k2024: {
    label: 'Hospital Beds per 1,000 (2024)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.5, 1.2, 2.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  clinicsPer1k2024: {
    label: 'Clinics per 1,000 (2024)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.07, 0.15, 0.22],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  erVisits2024: {
    label: 'ER Visits per Capita (2024)',
    format: v => v != null ? `${v.toFixed(2)} / person` : 'No data',
    thresholds: [0.32, 0.48, 0.58],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  aging65Plus2024: {
    label: 'Population Aged 65+ (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [17, 20, 23],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  waitTimes2024: {
    label: 'Specialist Wait Time (2024)',
    format: v => v != null ? `${v} wks` : 'No data',
    thresholds: [18, 20, 22],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  familyDrAccess2024: {
    label: 'Population with Family Doctor (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [84, 88, 91],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  serviceAvail2024: {
    label: 'Service Availability Score (2024)',
    format: v => v != null ? `${v} / 10` : 'No data',
    thresholds: [5.5, 7.0, 8.0],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  doctorsPer1k2024: {
    label: 'Physicians per 1,000 (2024)',
    format: v => v != null ? `${v.toFixed(2)} / 1k` : 'No data',
    thresholds: [0.8, 1.5, 2.1],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  nursesPer1k2024: {
    label: 'Nurses per 1,000 (2024)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [3.5, 5.5, 7.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  healthWorkersPer1k2024: {
    label: 'Healthcare Workers per 1,000 (2024)',
    format: v => v != null ? `${v.toFixed(1)} / 1k` : 'No data',
    thresholds: [7, 10, 14],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  lifeExpectancy2024: {
    label: 'Life Expectancy (2024)',
    format: v => v != null ? `${v.toFixed(1)} yrs` : 'No data',
    thresholds: [82.5, 82.9, 83.5],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  prevHosp2024: {
    label: 'Preventable Hospitalizations per Capita (2024)',
    format: v => v != null ? `${v.toFixed(3)}` : 'No data',
    thresholds: [0.021, 0.027, 0.033],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  healthScore2024: {
    label: 'Health Outcomes Score (2024)',
    format: v => v != null ? `${v.toFixed(1)} / 10` : 'No data',
    thresholds: [6.6, 7.7, 8.4],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },

  // Employment 2023 actuals
  totalJobs2023: {
    label: 'Total Jobs (2023)',
    format: v => v != null ? `${v.toLocaleString()} jobs` : 'No data',
    thresholds: [10000, 50000, 120000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  jobGrowth2023: {
    label: 'Job Growth Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.8, 3.2, 3.6],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  lfp2023: {
    label: 'Labour Force Participation (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [66, 68, 70],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  unemp2023: {
    label: 'Unemployment Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [5.8, 6.3, 7.0],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  income2023: {
    label: 'Median Household Income (2023)',
    format: v => v != null ? `$${v.toLocaleString()}` : 'No data',
    thresholds: [90000, 97000, 105000],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  wageGrowth2023: {
    label: 'Wage Growth (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.4, 2.7, 3.0],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  inequality2023: {
    label: 'Income Inequality (Gini×100, 2023)',
    format: v => v != null ? `${v.toFixed(1)}` : 'No data',
    thresholds: [13.5, 14.5, 15.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  diversity2023: {
    label: 'Sector Diversity Score (2023)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.70, 0.77, 0.83],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  retention2023: {
    label: 'Job Retention Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [85, 88, 90],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  layoffs2023: {
    label: 'Layoff Rate (2023)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [5.5, 6.5, 7.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  resilience2023: {
    label: 'Economic Resilience Score (2023)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.87, 0.90, 0.93],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  // Employment 2025
  totalJobs2025: {
    label: 'Total Jobs (2025)',
    format: v => v != null ? `${v.toLocaleString()} jobs` : 'No data',
    thresholds: [10000, 50000, 120000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  jobGrowth2025: {
    label: 'Job Growth Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.5, 3.0, 3.5],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  lfp2025: {
    label: 'Labour Force Participation (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [66, 68, 70],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  unemp2025: {
    label: 'Unemployment Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [7.2, 7.8, 8.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  income2025: {
    label: 'Median Household Income (2025)',
    format: v => v != null ? `$${v.toLocaleString()}` : 'No data',
    thresholds: [95000, 103000, 110000],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  wageGrowth2025: {
    label: 'Wage Growth (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.7, 3.0, 3.3],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  inequality2025: {
    label: 'Income Inequality (Gini×100, 2025)',
    format: v => v != null ? `${v.toFixed(1)}` : 'No data',
    thresholds: [13.5, 14.5, 15.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  diversity2025: {
    label: 'Sector Diversity Score (2025)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.72, 0.78, 0.84],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  retention2025: {
    label: 'Job Retention Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [84, 86, 88],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  layoffs2025: {
    label: 'Layoff Rate (2025)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [5.5, 6.5, 7.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  resilience2025: {
    label: 'Economic Resilience Score (2025)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.82, 0.85, 0.87],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  // Employment 2024
  totalJobs2024: {
    label: 'Total Jobs (2024)',
    format: v => v != null ? `${v.toLocaleString()} jobs` : 'No data',
    thresholds: [10000, 50000, 120000],
    colors: ['#f7fbff', '#9ecae1', '#3182bd', '#08306b']
  },
  jobGrowth2024: {
    label: 'Job Growth Rate (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.8, 3.5, 5.0],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  lfp2024: {
    label: 'Labour Force Participation (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [66, 68, 70],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  unemp2024: {
    label: 'Unemployment Rate (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [6.2, 6.8, 7.5],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  income2024: {
    label: 'Median Household Income (2024)',
    format: v => v != null ? `$${v.toLocaleString()}` : 'No data',
    thresholds: [92000, 100000, 108000],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  wageGrowth2024: {
    label: 'Wage Growth (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [2.9, 3.2, 3.6],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  inequality2024: {
    label: 'Income Inequality (Gini×100, 2024)',
    format: v => v != null ? `${v.toFixed(1)}` : 'No data',
    thresholds: [13.5, 14.5, 16.0],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  diversity2024: {
    label: 'Sector Diversity Score (2024)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.71, 0.77, 0.83],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  },
  retention2024: {
    label: 'Job Retention Rate (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [84, 87, 89],
    colors: ['#feedde', '#fdbe85', '#fd8d3c', '#3fb950']
  },
  layoffs2024: {
    label: 'Layoff Rate (2024)',
    format: v => v != null ? `${v}%` : 'No data',
    thresholds: [6.0, 7.0, 8.0],
    colors: ['#3fb950', '#ffa657', '#fd8d3c', '#d94701']
  },
  resilience2024: {
    label: 'Economic Resilience Score (2024)',
    format: v => v != null ? `${v.toFixed(2)} / 1.0` : 'No data',
    thresholds: [0.83, 0.86, 0.89],
    colors: ['#feedde', '#fdbe85', '#3182bd', '#08519c']
  }
};

// Metrics whose displayed values are projected estimates (appended with *)
const PREDICTED_METRICS = new Set([
  // Housing 2025 & 2031
  'medianHomePrice2025','priceToIncomeRatio2025','averageRent2025','rentBurden2025',
  'rentalVacancyRate2025','coreHousingNeed2025','subsidizedWaitlist2025',
  'intensificationPct2025','transitOrientedUnits2025','multiUnitPermits2025','majorTransitAreas2025',
  'homelessness2025','chronicHomeless2025','livingRough2025','shelterBeds2025','supportiveHousingUnits2025',
  'housingTarget2031',
  // Transportation 2025
  'ridershipAnnual2025','vehicleCommuteShare2025','transitCoverage2025','walkabilityScore2025',
  'commuteMins2025','congestionIndex2025','onTimePerformance2025','transportEmissions2025',
  'evAdoption2025','transitModalShare2025',
  // Healthcare 2025 (lifeExpectancy2025 is an actual measurement — excluded)
  'bedsPer1k2025','clinicsPer1k2025','erVisits2025','aging65Plus2025',
  'waitTimes2025','familyDrAccess2025','serviceAvail2025',
  'doctorsPer1k2025','nursesPer1k2025','healthWorkersPer1k2025','prevHosp2025','healthScore2025',
  // Employment 2025
  'totalJobs2025','jobGrowth2025','lfp2025','unemp2025','income2025',
  'wageGrowth2025','inequality2025','diversity2025','retention2025','layoffs2025','resilience2025'
]);

function getColor(value, metric) {
  if (value == null) return '#444';
  const { thresholds, colors } = metaConfig[metric];
  if (value < thresholds[0]) return colors[0];
  if (value < thresholds[1]) return colors[1];
  if (value < thresholds[2]) return colors[2];
  return colors[3];
}

async function fetchBoundary(city) {
  // Use displayName (township name) for boundary lookup when set,
  // otherwise fall back to city name. This lets townships share a
  // common data label ('Other Municipalities') while fetching individual polygons.
  const queryCity = city.displayName || city.city;
  const params = new URLSearchParams({
    city: queryCity,
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

  // Prefer city, then town/village (for townships), then any administrative boundary
  const feature =
    data.features.find(f => f.properties.type === 'city') ||
    data.features.find(f => f.properties.type === 'town') ||
    data.features.find(f => f.properties.type === 'village') ||
    data.features.find(f => f.properties.type === 'administrative') ||
    data.features[0];

  if (!feature?.geometry) throw new Error(`No boundary found for ${queryCity}`);

  return {
    type: 'Feature',
    geometry: feature.geometry,
    properties: {
      name: city.name,
      displayName: city.displayName || city.name,
      density: city.density,
      price: city.price,
      housingTarget2031: city.housingTarget2031,
      // Supply
      unitsApproved2024: city.unitsApproved2024,
      housingStarts2024: city.housingStarts2024,
      unitsCompleted2024: city.unitsCompleted2024,
      rentalUnits2024: city.rentalUnits2024,
      // Demand
      populationGrowthRate2023: city.populationGrowthRate2023,
      temporaryStudents2023: city.temporaryStudents2023,
      totalHouseholds2023: city.totalHouseholds2023,
      // Affordability
      medianHomePrice2025: city.medianHomePrice2025,
      priceToIncomeRatio2025: city.priceToIncomeRatio2025,
      averageRent2025: city.averageRent2025,
      rentBurden2025: city.rentBurden2025,
      rentalVacancyRate2025: city.rentalVacancyRate2025,
      coreHousingNeed2025: city.coreHousingNeed2025,
      subsidizedWaitlist2025: city.subsidizedWaitlist2025,
      // Urban Form
      intensificationPct2025: city.intensificationPct2025,
      transitOrientedUnits2025: city.transitOrientedUnits2025,
      multiUnitPermits2025: city.multiUnitPermits2025,
      majorTransitAreas2025: city.majorTransitAreas2025,
      // Stability
      homelessness2025: city.homelessness2025,
      chronicHomeless2025: city.chronicHomeless2025,
      livingRough2025: city.livingRough2025,
      shelterBeds2025: city.shelterBeds2025,
      supportiveHousingUnits2025: city.supportiveHousingUnits2025,
      // Transportation 2025
      ridershipAnnual2025: city.ridershipAnnual2025,
      vehicleCommuteShare2025: city.vehicleCommuteShare2025,
      transitCoverage2025: city.transitCoverage2025,
      walkabilityScore2025: city.walkabilityScore2025,
      commuteMins2025: city.commuteMins2025,
      congestionIndex2025: city.congestionIndex2025,
      onTimePerformance2025: city.onTimePerformance2025,
      transportEmissions2025: city.transportEmissions2025,
      evAdoption2025: city.evAdoption2025,
      transitModalShare2025: city.transitModalShare2025,
      // Transportation 2024
      ridershipAnnual2024: city.ridershipAnnual2024,
      vehicleCommuteShare2024: city.vehicleCommuteShare2024,
      transitCoverage2024: city.transitCoverage2024,
      walkabilityScore2024: city.walkabilityScore2024,
      commuteMins2024: city.commuteMins2024,
      congestionIndex2024: city.congestionIndex2024,
      onTimePerformance2024: city.onTimePerformance2024,
      transportEmissions2024: city.transportEmissions2024,
      evAdoption2024: city.evAdoption2024,
      transitModalShare2024: city.transitModalShare2024,
      // Transportation 2023
      ridershipAnnual2023: city.ridershipAnnual2023,
      vehicleCommuteShare2023: city.vehicleCommuteShare2023,
      transitCoverage2023: city.transitCoverage2023,
      walkabilityScore2023: city.walkabilityScore2023,
      commuteMins2023: city.commuteMins2023,
      congestionIndex2023: city.congestionIndex2023,
      onTimePerformance2023: city.onTimePerformance2023,
      transportEmissions2023: city.transportEmissions2023,
      evAdoption2023: city.evAdoption2023,
      transitModalShare2023: city.transitModalShare2023,
      // Healthcare 2025
      bedsPer1k2025: city.bedsPer1k2025,
      clinicsPer1k2025: city.clinicsPer1k2025,
      erVisits2025: city.erVisits2025,
      aging65Plus2025: city.aging65Plus2025,
      waitTimes2025: city.waitTimes2025,
      familyDrAccess2025: city.familyDrAccess2025,
      serviceAvail2025: city.serviceAvail2025,
      doctorsPer1k2025: city.doctorsPer1k2025,
      nursesPer1k2025: city.nursesPer1k2025,
      healthWorkersPer1k2025: city.healthWorkersPer1k2025,
      lifeExpectancy2025: city.lifeExpectancy2025,
      prevHosp2025: city.prevHosp2025,
      healthScore2025: city.healthScore2025,
      // Healthcare 2024
      bedsPer1k2024: city.bedsPer1k2024,
      clinicsPer1k2024: city.clinicsPer1k2024,
      erVisits2024: city.erVisits2024,
      aging65Plus2024: city.aging65Plus2024,
      waitTimes2024: city.waitTimes2024,
      familyDrAccess2024: city.familyDrAccess2024,
      serviceAvail2024: city.serviceAvail2024,
      doctorsPer1k2024: city.doctorsPer1k2024,
      nursesPer1k2024: city.nursesPer1k2024,
      healthWorkersPer1k2024: city.healthWorkersPer1k2024,
      lifeExpectancy2024: city.lifeExpectancy2024,
      prevHosp2024: city.prevHosp2024,
      healthScore2024: city.healthScore2024,
      // Healthcare 2023
      bedsPer1k2023: city.bedsPer1k2023,
      clinicsPer1k2023: city.clinicsPer1k2023,
      erVisits2023: city.erVisits2023,
      aging65Plus2023: city.aging65Plus2023,
      waitTimes2023: city.waitTimes2023,
      familyDrAccess2023: city.familyDrAccess2023,
      serviceAvail2023: city.serviceAvail2023,
      doctorsPer1k2023: city.doctorsPer1k2023,
      nursesPer1k2023: city.nursesPer1k2023,
      healthWorkersPer1k2023: city.healthWorkersPer1k2023,
      lifeExpectancy2023: city.lifeExpectancy2023,
      prevHosp2023: city.prevHosp2023,
      healthScore2023: city.healthScore2023,
      // Employment 2025
      totalJobs2025: city.totalJobs2025,
      jobGrowth2025: city.jobGrowth2025,
      lfp2025: city.lfp2025,
      unemp2025: city.unemp2025,
      income2025: city.income2025,
      wageGrowth2025: city.wageGrowth2025,
      inequality2025: city.inequality2025,
      diversity2025: city.diversity2025,
      retention2025: city.retention2025,
      layoffs2025: city.layoffs2025,
      resilience2025: city.resilience2025,
      // Employment 2024
      totalJobs2024: city.totalJobs2024,
      jobGrowth2024: city.jobGrowth2024,
      lfp2024: city.lfp2024,
      unemp2024: city.unemp2024,
      income2024: city.income2024,
      wageGrowth2024: city.wageGrowth2024,
      inequality2024: city.inequality2024,
      diversity2024: city.diversity2024,
      retention2024: city.retention2024,
      layoffs2024: city.layoffs2024,
      resilience2024: city.resilience2024,
      // Employment 2023
      totalJobs2023: city.totalJobs2023,
      jobGrowth2023: city.jobGrowth2023,
      lfp2023: city.lfp2023,
      unemp2023: city.unemp2023,
      income2023: city.income2023,
      wageGrowth2023: city.wageGrowth2023,
      inequality2023: city.inequality2023,
      diversity2023: city.diversity2023,
      retention2023: city.retention2023,
      layoffs2023: city.layoffs2023,
      resilience2023: city.resilience2023
    }
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
      const asterisk = PREDICTED_METRICS.has(metric) ? '*' : '';
      const value = metaConfig[metric].format(p[metric]) + asterisk;
      // Show individual township name in popup title when it differs from the data label
      const popupTitle = p.displayName && p.displayName !== p.name
        ? `${p.displayName} <span style="color:#8b949e;font-weight:400;font-size:0.85em">(${p.name})</span>`
        : p.name;
      layer.bindPopup(`<strong>${popupTitle}</strong><br>${metaConfig[metric].label}: ${value}`);
      layer.on('mouseover', () => { layer.setStyle({ fillOpacity: 0.8 }); layer.openPopup(); });
      layer.on('mouseout', () => { layer.setStyle({ fillOpacity: 0.55 }); layer.closePopup(); });
    }
  }).addTo(map);

  map.fitBounds(geojsonLayer.getBounds(), { padding: [30, 30] });
}

function updateSidebar(metric) {
  const cfg = metaConfig[metric];
  document.getElementById('metricLabel').textContent = cfg.label;

  const asterisk = PREDICTED_METRICS.has(metric) ? '*' : '';

  const rawRegion = regionMetrics[metric] != null
    ? regionMetrics[metric]
    : (regionTransportMetrics && regionTransportMetrics[metric] != null
      ? regionTransportMetrics[metric]
      : (regionHealthcareMetrics && regionHealthcareMetrics[metric] != null
        ? regionHealthcareMetrics[metric]
        : (typeof regionEmploymentMetrics !== 'undefined' ? regionEmploymentMetrics[metric] : null)));
  const regionVal = rawRegion != null ? cfg.format(rawRegion) + asterisk : 'No regional data';

  // Deduplicate by name so the 4 townships show as one 'Other Municipalities' row
  const seen = new Set();
  const cityRows = fetchedFeatures
    .filter(f => {
      if (seen.has(f.properties.name)) return false;
      seen.add(f.properties.name);
      return true;
    })
    .map(f => {
      const p = f.properties;
      return `<div class="detail-row">
        <span class="detail-city">${p.name}</span>
        <span class="detail-val">${cfg.format(p[metric])}${asterisk}</span>
      </div>`;
    }).join('');

  document.getElementById('metricDetails').innerHTML = `
    <div class="detail-region">
      <span class="detail-city">Waterloo Region</span>
      <span class="detail-val">${regionVal}</span>
    </div>
    <div class="detail-divider"></div>
    ${cityRows}`;
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
    // rebuildMetricSelect is defined in map.html; it will call updateMap() now that fetchedFeatures is set
    if (typeof rebuildMetricSelect === 'function') {
      rebuildMetricSelect();
    } else {
      renderLayer('housingStarts2024');
      updateSidebar('housingStarts2024');
    }
    document.getElementById('loadingOverlay').classList.add('hidden');
  } catch (err) {
    document.getElementById('metricDetails').innerText = `Error: ${err.message}`;
    document.getElementById('loadingOverlay').classList.add('hidden');
    console.error(err);
  }
}

init();
