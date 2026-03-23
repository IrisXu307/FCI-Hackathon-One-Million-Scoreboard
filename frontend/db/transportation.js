// Transportation database
// Auto-generated from datasets/research/Transportation.json
// predicted: false = measured actual; omitted/true = projected estimate

const transportationDB = {
  label: 'Transportation',
  pillars: {

    supply: {
      label: 'Pillar 1: Supply',
      metrics: [
        {
          id: 'transit_routes',
          label: 'Transit Routes (2025)',
          display: '40*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'service_hours_annual',
          label: 'Service Hours Annual (2025)',
          display: '560,000*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'bus_fleet_size',
          label: 'Bus Fleet Size (2025)',
          display: '315*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'lrt_stations',
          label: 'Lrt Stations (2025)',
          display: '19',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 1: Supply (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Transit Routes', color: '#4facfe', data: [29, 31, 32, 35, 37, 40] },
            { label: 'Service Hours Annual', color: '#3fb950', data: [420000, 380000, 450000, 485000, 534000, 560000] },
            { label: 'Bus Fleet Size', color: '#f0883e', data: [280, 285, 290, 295, 305, 315] },
            { label: 'Lrt Stations', color: '#f85149', data: [19, 19, 19, 19, 19, 19] },
          ]
        },
        {
          title: 'Transit Routes by Municipality (2020–2025)',
          yLabel: 'Transit Routes',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [12, 13, 14, 15, 16, 17] },
            { label: 'Waterloo', color: '#f0883e', data: [8, 9, 9, 10, 11, 12] },
            { label: 'Cambridge', color: '#4facfe', data: [9, 9, 9, 10, 10, 11] },
            { label: 'North Dumfries', color: '#e3b341', data: [0, 0, 0, 0, 0, 1] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0, 0, 0, 0, 0, 1] },
            { label: 'Wilmot', color: '#79c0ff', data: [0, 0, 0, 0, 0, 1] },
            { label: 'Woolwich', color: '#56d364', data: [0, 0, 0, 0, 0, 1] },
          ]
        }
      ]
    },

    demand: {
      label: 'Pillar 2: Demand',
      metrics: [
        {
          id: 'annual_ridership_millions',
          label: 'Annual Ridership Millions (2025)',
          display: '30.2*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'lrt_ridership_millions',
          label: 'Lrt Ridership Millions (2025)',
          display: '5.2*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'population_using_transit_percent',
          label: 'Population Using Transit Percent (2025)',
          display: '14.8%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 2: Demand (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Annual Ridership Millions', color: '#4facfe', data: [12.8, 15.2, 17.8, 26.4, 28.5, 30.2] },
            { label: 'Lrt Ridership Millions', color: '#3fb950', data: [2.1, 2.5, 2.9, 4.4, 4.8, 5.2] },
            { label: 'Population Using Transit Percent', color: '#f0883e', data: [8.5, 9.2, 10.1, 12.3, 13.5, 14.8] },
          ]
        },
        {
          title: 'Annual Ridership Millions by Municipality (2020–2025)',
          yLabel: 'Annual Ridership Millions',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [5.8, 6.9, 8.1, 12.2, 13.5, 14.8] },
            { label: 'Waterloo', color: '#f0883e', data: [3.2, 3.8, 4.4, 6.8, 7.5, 8.3] },
            { label: 'Cambridge', color: '#4facfe', data: [3.8, 4.5, 5.3, 7.4, 7.5, 8.1] },
            { label: 'North Dumfries', color: '#e3b341', data: [0, 0, 0, 0, 0, 0.05] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0, 0, 0, 0, 0, 0.03] },
            { label: 'Wilmot', color: '#79c0ff', data: [0, 0, 0, 0, 0, 0.04] },
            { label: 'Woolwich', color: '#56d364', data: [0, 0, 0, 0, 0, 0.05] },
          ]
        }
      ]
    },

    accessibility: {
      label: 'Pillar 3: Accessibility',
      metrics: [
        {
          id: 'population_within_500m_transit_percent',
          label: 'Population Within 500M Transit Percent (2025)',
          display: '78.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'walkability_score',
          label: 'Walkability Score (2025)',
          display: '72.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'mobility_plus_trips',
          label: 'Mobility Plus Trips (2025)',
          display: '220,000*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 3: Accessibility (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Population Within 500M Transit Percent', color: '#4facfe', data: [65, 67, 70, 72, 75, 78] },
            { label: 'Walkability Score', color: '#3fb950', data: [62, 64, 66, 68, 70, 72] },
            { label: 'Mobility Plus Trips', color: '#f0883e', data: [165000, 158000, 175000, 185000, 200000, 220000] },
          ]
        },
        {
          title: 'Population Within 500M Transit Percent by Municipality (2020–2025)',
          yLabel: 'Population Within 500M Transit Percent',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [72, 74, 76, 78, 80, 82] },
            { label: 'Waterloo', color: '#f0883e', data: [68, 70, 72, 74, 76, 78] },
            { label: 'Cambridge', color: '#4facfe', data: [58, 60, 62, 64, 66, 68] },
            { label: 'North Dumfries', color: '#e3b341', data: [0, 0, 0, 0, 0, 5] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0, 0, 0, 0, 0, 3] },
            { label: 'Wilmot', color: '#79c0ff', data: [0, 0, 0, 0, 0, 4] },
            { label: 'Woolwich', color: '#56d364', data: [0, 0, 0, 0, 0, 5] },
          ]
        }
      ]
    },

    efficiency: {
      label: 'Pillar 4: Efficiency',
      metrics: [
        {
          id: 'on_time_performance_percent',
          label: 'On Time Performance Percent (2025)',
          display: '90.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'average_commute_time_minutes',
          label: 'Average Commute Time Minutes (2025)',
          display: '24*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'service_frequency_peak_minutes',
          label: 'Service Frequency Peak Minutes (2025)',
          display: '8*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 4: Efficiency (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'On Time Performance Percent', color: '#4facfe', data: [82, 79, 84, 86, 88, 90] },
            { label: 'Average Commute Time Minutes', color: '#3fb950', data: [28, 26, 27, 26, 25, 24] },
            { label: 'Service Frequency Peak Minutes', color: '#f0883e', data: [15, 15, 12, 10, 10, 8] },
          ]
        },
        {
          title: 'On Time Performance Percent by Municipality (2020–2025)',
          yLabel: 'On Time Performance Percent',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [85, 82, 87, 89, 91, 93] },
            { label: 'Waterloo', color: '#f0883e', data: [83, 80, 85, 87, 89, 91] },
            { label: 'Cambridge', color: '#4facfe', data: [78, 75, 80, 82, 84, 86] },
            { label: 'North Dumfries', color: '#e3b341', data: [0, 0, 0, 0, 0, 75] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0, 0, 0, 0, 0, 70] },
            { label: 'Wilmot', color: '#79c0ff', data: [0, 0, 0, 0, 0, 72] },
            { label: 'Woolwich', color: '#56d364', data: [0, 0, 0, 0, 0, 74] },
          ]
        }
      ]
    },

    sustainability: {
      label: 'Pillar 5: Sustainability',
      metrics: [
        {
          id: 'transport_emissions_tonnes_co2',
          label: 'Transport Emissions Tonnes Co2 (2025)',
          display: '720,000*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'ev_adoption_percent',
          label: 'Ev Adoption Percent (2025)',
          display: '12.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'transit_modal_share_percent',
          label: 'Transit Modal Share Percent (2025)',
          display: '14.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 5: Sustainability (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Transport Emissions Tonnes Co2', color: '#4facfe', data: [850000, 820000, 800000, 780000, 750000, 720000] },
            { label: 'Ev Adoption Percent', color: '#3fb950', data: [2.1, 3.2, 4.8, 6.5, 8.9, 12] },
            { label: 'Transit Modal Share Percent', color: '#f0883e', data: [8.5, 9.1, 10.2, 11.8, 12.5, 14] },
          ]
        },
        {
          title: 'Transport Emissions Tonnes Co2 by Municipality (2020–2025)',
          yLabel: 'Transport Emissions Tonnes Co2',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [380000, 365000, 352000, 338000, 325000, 310000] },
            { label: 'Waterloo', color: '#f0883e', data: [220000, 212000, 205000, 198000, 190000, 182000] },
            { label: 'Cambridge', color: '#4facfe', data: [250000, 242000, 235000, 228000, 220000, 212000] },
            { label: 'North Dumfries', color: '#e3b341', data: [45000, 44000, 43000, 42000, 41000, 39000] },
            { label: 'Wellesley', color: '#d2a8ff', data: [32000, 31000, 30000, 29000, 28000, 27000] },
            { label: 'Wilmot', color: '#79c0ff', data: [38000, 37000, 36000, 35000, 34000, 32000] },
            { label: 'Woolwich', color: '#56d364', data: [48000, 47000, 46000, 45000, 44000, 42000] },
          ]
        }
      ]
    }

  }
};

// Per-city Transportation metrics for map.js overlay
const transportationCityMetrics = [
  {
    name: 'Kitchener',
    transitRoutes2020: 12, serviceHoursAnnual2020: 180000, busFleetSize2020: 125, lrtStations2020: 8, ridershipAnnual2020: 5.8, lrtRidership2020: 1.2, transitUsers2020: 9.2, transitCoverage2020: 72, walkabilityScore2020: 68, mobilityPlusTrips2020: 78000, onTimePerformance2020: 85, commuteMins2020: 26, serviceFrequency2020: 12, transportEmissions2020: 380000, evAdoption2020: 2.8, transitModalShare2020: 9.2,  // 2020
    transitRoutes2021: 13, serviceHoursAnnual2021: 160000, busFleetSize2021: 128, lrtStations2021: 8, ridershipAnnual2021: 6.9, lrtRidership2021: 1.4, transitUsers2021: 10.1, transitCoverage2021: 74, walkabilityScore2021: 70, mobilityPlusTrips2021: 74000, onTimePerformance2021: 82, commuteMins2021: 24, serviceFrequency2021: 12, transportEmissions2021: 365000, evAdoption2021: 4.1, transitModalShare2021: 10.1,  // 2021
    transitRoutes2022: 14, serviceHoursAnnual2022: 195000, busFleetSize2022: 132, lrtStations2022: 8, ridershipAnnual2022: 8.1, lrtRidership2022: 1.6, transitUsers2022: 11.3, transitCoverage2022: 76, walkabilityScore2022: 72, mobilityPlusTrips2022: 82000, onTimePerformance2022: 87, commuteMins2022: 25, serviceFrequency2022: 10, transportEmissions2022: 352000, evAdoption2022: 5.9, transitModalShare2022: 11.3,  // 2022
    transitRoutes2023: 15, serviceHoursAnnual2023: 210000, busFleetSize2023: 135, lrtStations2023: 8, ridershipAnnual2023: 12.2, lrtRidership2023: 2.5, transitUsers2023: 13.8, transitCoverage2023: 78, walkabilityScore2023: 74, mobilityPlusTrips2023: 88000, onTimePerformance2023: 89, commuteMins2023: 24, serviceFrequency2023: 8, transportEmissions2023: 338000, evAdoption2023: 7.8, transitModalShare2023: 13.8,  // 2023
    transitRoutes2024: 16, serviceHoursAnnual2024: 230000, busFleetSize2024: 140, lrtStations2024: 8, ridershipAnnual2024: 13.5, lrtRidership2024: 2.8, transitUsers2024: 15.1, transitCoverage2024: 80, walkabilityScore2024: 76, mobilityPlusTrips2024: 95000, onTimePerformance2024: 91, commuteMins2024: 23, serviceFrequency2024: 8, transportEmissions2024: 325000, evAdoption2024: 10.2, transitModalShare2024: 15.1,  // 2024
    transitRoutes2025: 17, serviceHoursAnnual2025: 245000, busFleetSize2025: 145, lrtStations2025: 8, ridershipAnnual2025: 14.8, lrtRidership2025: 3.1, transitUsers2025: 16.5, transitCoverage2025: 82, walkabilityScore2025: 78, mobilityPlusTrips2025: 102000, onTimePerformance2025: 93, commuteMins2025: 22, serviceFrequency2025: 7, transportEmissions2025: 310000, evAdoption2025: 13.5, transitModalShare2025: 16.5,  // 2025
  },
  {
    name: 'Waterloo',
    transitRoutes2020: 8, serviceHoursAnnual2020: 95000, busFleetSize2020: 68, lrtStations2020: 6, ridershipAnnual2020: 3.2, lrtRidership2020: 0.6, transitUsers2020: 7.8, transitCoverage2020: 68, walkabilityScore2020: 72, mobilityPlusTrips2020: 45000, onTimePerformance2020: 83, commuteMins2020: 24, serviceFrequency2020: 18, transportEmissions2020: 220000, evAdoption2020: 3.2, transitModalShare2020: 7.8,  // 2020
    transitRoutes2021: 9, serviceHoursAnnual2021: 85000, busFleetSize2021: 70, lrtStations2021: 6, ridershipAnnual2021: 3.8, lrtRidership2021: 0.7, transitUsers2021: 8.5, transitCoverage2021: 70, walkabilityScore2021: 74, mobilityPlusTrips2021: 42000, onTimePerformance2021: 80, commuteMins2021: 22, serviceFrequency2021: 18, transportEmissions2021: 212000, evAdoption2021: 4.8, transitModalShare2021: 8.5,  // 2021
    transitRoutes2022: 9, serviceHoursAnnual2022: 105000, busFleetSize2022: 72, lrtStations2022: 6, ridershipAnnual2022: 4.4, lrtRidership2022: 0.8, transitUsers2022: 9.4, transitCoverage2022: 72, walkabilityScore2022: 76, mobilityPlusTrips2022: 48000, onTimePerformance2022: 85, commuteMins2022: 23, serviceFrequency2022: 15, transportEmissions2022: 205000, evAdoption2022: 6.5, transitModalShare2022: 9.4,  // 2022
    transitRoutes2023: 10, serviceHoursAnnual2023: 115000, busFleetSize2023: 75, lrtStations2023: 6, ridershipAnnual2023: 6.8, lrtRidership2023: 1.2, transitUsers2023: 11.2, transitCoverage2023: 74, walkabilityScore2023: 78, mobilityPlusTrips2023: 52000, onTimePerformance2023: 87, commuteMins2023: 22, serviceFrequency2023: 12, transportEmissions2023: 198000, evAdoption2023: 8.4, transitModalShare2023: 11.2,  // 2023
    transitRoutes2024: 11, serviceHoursAnnual2024: 125000, busFleetSize2024: 78, lrtStations2024: 6, ridershipAnnual2024: 7.5, lrtRidership2024: 1.4, transitUsers2024: 12.3, transitCoverage2024: 76, walkabilityScore2024: 80, mobilityPlusTrips2024: 56000, onTimePerformance2024: 89, commuteMins2024: 21, serviceFrequency2024: 12, transportEmissions2024: 190000, evAdoption2024: 11.1, transitModalShare2024: 12.3,  // 2024
    transitRoutes2025: 12, serviceHoursAnnual2025: 135000, busFleetSize2025: 82, lrtStations2025: 6, ridershipAnnual2025: 8.3, lrtRidership2025: 1.6, transitUsers2025: 13.5, transitCoverage2025: 78, walkabilityScore2025: 82, mobilityPlusTrips2025: 62000, onTimePerformance2025: 91, commuteMins2025: 20, serviceFrequency2025: 10, transportEmissions2025: 182000, evAdoption2025: 14.5, transitModalShare2025: 13.5,  // 2025
  },
  {
    name: 'Cambridge',
    transitRoutes2020: 9, serviceHoursAnnual2020: 115000, busFleetSize2020: 72, lrtStations2020: 5, ridershipAnnual2020: 3.8, lrtRidership2020: 0.3, transitUsers2020: 6.8, transitCoverage2020: 58, walkabilityScore2020: 54, mobilityPlusTrips2020: 42000, onTimePerformance2020: 78, commuteMins2020: 32, serviceFrequency2020: 20, transportEmissions2020: 250000, evAdoption2020: 1.8, transitModalShare2020: 6.8,  // 2020
    transitRoutes2021: 9, serviceHoursAnnual2021: 105000, busFleetSize2021: 74, lrtStations2021: 5, ridershipAnnual2021: 4.5, lrtRidership2021: 0.4, transitUsers2021: 7.4, transitCoverage2021: 60, walkabilityScore2021: 56, mobilityPlusTrips2021: 39000, onTimePerformance2021: 75, commuteMins2021: 30, serviceFrequency2021: 20, transportEmissions2021: 242000, evAdoption2021: 2.9, transitModalShare2021: 7.4,  // 2021
    transitRoutes2022: 9, serviceHoursAnnual2022: 125000, busFleetSize2022: 76, lrtStations2022: 5, ridershipAnnual2022: 5.3, lrtRidership2022: 0.5, transitUsers2022: 8.2, transitCoverage2022: 62, walkabilityScore2022: 58, mobilityPlusTrips2022: 45000, onTimePerformance2022: 80, commuteMins2022: 31, serviceFrequency2022: 18, transportEmissions2022: 235000, evAdoption2022: 4.2, transitModalShare2022: 8.2,  // 2022
    transitRoutes2023: 10, serviceHoursAnnual2023: 135000, busFleetSize2023: 78, lrtStations2023: 5, ridershipAnnual2023: 7.4, lrtRidership2023: 0.7, transitUsers2023: 9.8, transitCoverage2023: 64, walkabilityScore2023: 60, mobilityPlusTrips2023: 48000, onTimePerformance2023: 82, commuteMins2023: 30, serviceFrequency2023: 15, transportEmissions2023: 228000, evAdoption2023: 5.8, transitModalShare2023: 9.8,  // 2023
    transitRoutes2024: 10, serviceHoursAnnual2024: 145000, busFleetSize2024: 80, lrtStations2024: 5, ridershipAnnual2024: 7.5, lrtRidership2024: 0.6, transitUsers2024: 10.5, transitCoverage2024: 66, walkabilityScore2024: 62, mobilityPlusTrips2024: 52000, onTimePerformance2024: 84, commuteMins2024: 29, serviceFrequency2024: 15, transportEmissions2024: 220000, evAdoption2024: 7.9, transitModalShare2024: 10.5,  // 2024
    transitRoutes2025: 11, serviceHoursAnnual2025: 155000, busFleetSize2025: 83, lrtStations2025: 5, ridershipAnnual2025: 8.1, lrtRidership2025: 0.5, transitUsers2025: 11.2, transitCoverage2025: 68, walkabilityScore2025: 64, mobilityPlusTrips2025: 56000, onTimePerformance2025: 86, commuteMins2025: 28, serviceFrequency2025: 12, transportEmissions2025: 212000, evAdoption2025: 10.5, transitModalShare2025: 11.2,  // 2025
  },
  {
    name: 'North Dumfries',
    transitRoutes2020: 0, serviceHoursAnnual2020: 0, busFleetSize2020: 0, lrtStations2020: 0, ridershipAnnual2020: 0, lrtRidership2020: 0, transitUsers2020: 0, transitCoverage2020: 0, walkabilityScore2020: 35, mobilityPlusTrips2020: 3500, onTimePerformance2020: 0, commuteMins2020: 45, serviceFrequency2020: 0, transportEmissions2020: 45000, evAdoption2020: 1.2, transitModalShare2020: 0,  // 2020
    transitRoutes2021: 0, serviceHoursAnnual2021: 0, busFleetSize2021: 0, lrtStations2021: 0, ridershipAnnual2021: 0, lrtRidership2021: 0, transitUsers2021: 0, transitCoverage2021: 0, walkabilityScore2021: 36, mobilityPlusTrips2021: 3200, onTimePerformance2021: 0, commuteMins2021: 44, serviceFrequency2021: 0, transportEmissions2021: 44000, evAdoption2021: 1.8, transitModalShare2021: 0,  // 2021
    transitRoutes2022: 0, serviceHoursAnnual2022: 0, busFleetSize2022: 0, lrtStations2022: 0, ridershipAnnual2022: 0, lrtRidership2022: 0, transitUsers2022: 0, transitCoverage2022: 0, walkabilityScore2022: 37, mobilityPlusTrips2022: 3800, onTimePerformance2022: 0, commuteMins2022: 43, serviceFrequency2022: 0, transportEmissions2022: 43000, evAdoption2022: 2.5, transitModalShare2022: 0,  // 2022
    transitRoutes2023: 0, serviceHoursAnnual2023: 0, busFleetSize2023: 0, lrtStations2023: 0, ridershipAnnual2023: 0, lrtRidership2023: 0, transitUsers2023: 0, transitCoverage2023: 0, walkabilityScore2023: 38, mobilityPlusTrips2023: 4200, onTimePerformance2023: 0, commuteMins2023: 42, serviceFrequency2023: 0, transportEmissions2023: 42000, evAdoption2023: 3.4, transitModalShare2023: 0,  // 2023
    transitRoutes2024: 0, serviceHoursAnnual2024: 0, busFleetSize2024: 0, lrtStations2024: 0, ridershipAnnual2024: 0, lrtRidership2024: 0, transitUsers2024: 0, transitCoverage2024: 0, walkabilityScore2024: 39, mobilityPlusTrips2024: 4500, onTimePerformance2024: 0, commuteMins2024: 41, serviceFrequency2024: 0, transportEmissions2024: 41000, evAdoption2024: 4.5, transitModalShare2024: 0,  // 2024
    transitRoutes2025: 1, serviceHoursAnnual2025: 2000, busFleetSize2025: 2, lrtStations2025: 0, ridershipAnnual2025: 0.05, lrtRidership2025: 0, transitUsers2025: 2, transitCoverage2025: 5, walkabilityScore2025: 40, mobilityPlusTrips2025: 5000, onTimePerformance2025: 75, commuteMins2025: 38, serviceFrequency2025: 60, transportEmissions2025: 39000, evAdoption2025: 6, transitModalShare2025: 2,  // 2025
  },
  {
    name: 'Wellesley',
    transitRoutes2020: 0, serviceHoursAnnual2020: 0, busFleetSize2020: 0, lrtStations2020: 0, ridershipAnnual2020: 0, lrtRidership2020: 0, transitUsers2020: 0, transitCoverage2020: 0, walkabilityScore2020: 32, mobilityPlusTrips2020: 2800, onTimePerformance2020: 0, commuteMins2020: 38, serviceFrequency2020: 0, transportEmissions2020: 32000, evAdoption2020: 0.8, transitModalShare2020: 0,  // 2020
    transitRoutes2021: 0, serviceHoursAnnual2021: 0, busFleetSize2021: 0, lrtStations2021: 0, ridershipAnnual2021: 0, lrtRidership2021: 0, transitUsers2021: 0, transitCoverage2021: 0, walkabilityScore2021: 33, mobilityPlusTrips2021: 2600, onTimePerformance2021: 0, commuteMins2021: 37, serviceFrequency2021: 0, transportEmissions2021: 31000, evAdoption2021: 1.3, transitModalShare2021: 0,  // 2021
    transitRoutes2022: 0, serviceHoursAnnual2022: 0, busFleetSize2022: 0, lrtStations2022: 0, ridershipAnnual2022: 0, lrtRidership2022: 0, transitUsers2022: 0, transitCoverage2022: 0, walkabilityScore2022: 34, mobilityPlusTrips2022: 3000, onTimePerformance2022: 0, commuteMins2022: 36, serviceFrequency2022: 0, transportEmissions2022: 30000, evAdoption2022: 1.9, transitModalShare2022: 0,  // 2022
    transitRoutes2023: 0, serviceHoursAnnual2023: 0, busFleetSize2023: 0, lrtStations2023: 0, ridershipAnnual2023: 0, lrtRidership2023: 0, transitUsers2023: 0, transitCoverage2023: 0, walkabilityScore2023: 35, mobilityPlusTrips2023: 3200, onTimePerformance2023: 0, commuteMins2023: 35, serviceFrequency2023: 0, transportEmissions2023: 29000, evAdoption2023: 2.6, transitModalShare2023: 0,  // 2023
    transitRoutes2024: 0, serviceHoursAnnual2024: 0, busFleetSize2024: 0, lrtStations2024: 0, ridershipAnnual2024: 0, lrtRidership2024: 0, transitUsers2024: 0, transitCoverage2024: 0, walkabilityScore2024: 36, mobilityPlusTrips2024: 3500, onTimePerformance2024: 0, commuteMins2024: 34, serviceFrequency2024: 0, transportEmissions2024: 28000, evAdoption2024: 3.5, transitModalShare2024: 0,  // 2024
    transitRoutes2025: 1, serviceHoursAnnual2025: 1500, busFleetSize2025: 1, lrtStations2025: 0, ridershipAnnual2025: 0.03, lrtRidership2025: 0, transitUsers2025: 1.5, transitCoverage2025: 3, walkabilityScore2025: 37, mobilityPlusTrips2025: 3800, onTimePerformance2025: 70, commuteMins2025: 32, serviceFrequency2025: 90, transportEmissions2025: 27000, evAdoption2025: 4.8, transitModalShare2025: 1.5,  // 2025
  },
  {
    name: 'Wilmot',
    transitRoutes2020: 0, serviceHoursAnnual2020: 0, busFleetSize2020: 0, lrtStations2020: 0, ridershipAnnual2020: 0, lrtRidership2020: 0, transitUsers2020: 0, transitCoverage2020: 0, walkabilityScore2020: 38, mobilityPlusTrips2020: 3200, onTimePerformance2020: 0, commuteMins2020: 42, serviceFrequency2020: 0, transportEmissions2020: 38000, evAdoption2020: 1.1, transitModalShare2020: 0,  // 2020
    transitRoutes2021: 0, serviceHoursAnnual2021: 0, busFleetSize2021: 0, lrtStations2021: 0, ridershipAnnual2021: 0, lrtRidership2021: 0, transitUsers2021: 0, transitCoverage2021: 0, walkabilityScore2021: 39, mobilityPlusTrips2021: 3000, onTimePerformance2021: 0, commuteMins2021: 41, serviceFrequency2021: 0, transportEmissions2021: 37000, evAdoption2021: 1.6, transitModalShare2021: 0,  // 2021
    transitRoutes2022: 0, serviceHoursAnnual2022: 0, busFleetSize2022: 0, lrtStations2022: 0, ridershipAnnual2022: 0, lrtRidership2022: 0, transitUsers2022: 0, transitCoverage2022: 0, walkabilityScore2022: 40, mobilityPlusTrips2022: 3400, onTimePerformance2022: 0, commuteMins2022: 40, serviceFrequency2022: 0, transportEmissions2022: 36000, evAdoption2022: 2.3, transitModalShare2022: 0,  // 2022
    transitRoutes2023: 0, serviceHoursAnnual2023: 0, busFleetSize2023: 0, lrtStations2023: 0, ridershipAnnual2023: 0, lrtRidership2023: 0, transitUsers2023: 0, transitCoverage2023: 0, walkabilityScore2023: 41, mobilityPlusTrips2023: 3600, onTimePerformance2023: 0, commuteMins2023: 39, serviceFrequency2023: 0, transportEmissions2023: 35000, evAdoption2023: 3.1, transitModalShare2023: 0,  // 2023
    transitRoutes2024: 0, serviceHoursAnnual2024: 0, busFleetSize2024: 0, lrtStations2024: 0, ridershipAnnual2024: 0, lrtRidership2024: 0, transitUsers2024: 0, transitCoverage2024: 0, walkabilityScore2024: 42, mobilityPlusTrips2024: 3900, onTimePerformance2024: 0, commuteMins2024: 38, serviceFrequency2024: 0, transportEmissions2024: 34000, evAdoption2024: 4.2, transitModalShare2024: 0,  // 2024
    transitRoutes2025: 1, serviceHoursAnnual2025: 1800, busFleetSize2025: 2, lrtStations2025: 0, ridershipAnnual2025: 0.04, lrtRidership2025: 0, transitUsers2025: 1.8, transitCoverage2025: 4, walkabilityScore2025: 43, mobilityPlusTrips2025: 4200, onTimePerformance2025: 72, commuteMins2025: 36, serviceFrequency2025: 75, transportEmissions2025: 32000, evAdoption2025: 5.8, transitModalShare2025: 1.8,  // 2025
  },
  {
    name: 'Woolwich',
    transitRoutes2020: 0, serviceHoursAnnual2020: 0, busFleetSize2020: 0, lrtStations2020: 0, ridershipAnnual2020: 0, lrtRidership2020: 0, transitUsers2020: 0, transitCoverage2020: 0, walkabilityScore2020: 40, mobilityPlusTrips2020: 4200, onTimePerformance2020: 0, commuteMins2020: 40, serviceFrequency2020: 0, transportEmissions2020: 48000, evAdoption2020: 1.4, transitModalShare2020: 0,  // 2020
    transitRoutes2021: 0, serviceHoursAnnual2021: 0, busFleetSize2021: 0, lrtStations2021: 0, ridershipAnnual2021: 0, lrtRidership2021: 0, transitUsers2021: 0, transitCoverage2021: 0, walkabilityScore2021: 41, mobilityPlusTrips2021: 3900, onTimePerformance2021: 0, commuteMins2021: 39, serviceFrequency2021: 0, transportEmissions2021: 47000, evAdoption2021: 2.1, transitModalShare2021: 0,  // 2021
    transitRoutes2022: 0, serviceHoursAnnual2022: 0, busFleetSize2022: 0, lrtStations2022: 0, ridershipAnnual2022: 0, lrtRidership2022: 0, transitUsers2022: 0, transitCoverage2022: 0, walkabilityScore2022: 42, mobilityPlusTrips2022: 4500, onTimePerformance2022: 0, commuteMins2022: 38, serviceFrequency2022: 0, transportEmissions2022: 46000, evAdoption2022: 2.9, transitModalShare2022: 0,  // 2022
    transitRoutes2023: 0, serviceHoursAnnual2023: 0, busFleetSize2023: 0, lrtStations2023: 0, ridershipAnnual2023: 0, lrtRidership2023: 0, transitUsers2023: 0, transitCoverage2023: 0, walkabilityScore2023: 43, mobilityPlusTrips2023: 4800, onTimePerformance2023: 0, commuteMins2023: 37, serviceFrequency2023: 0, transportEmissions2023: 45000, evAdoption2023: 3.8, transitModalShare2023: 0,  // 2023
    transitRoutes2024: 0, serviceHoursAnnual2024: 0, busFleetSize2024: 0, lrtStations2024: 0, ridershipAnnual2024: 0, lrtRidership2024: 0, transitUsers2024: 0, transitCoverage2024: 0, walkabilityScore2024: 44, mobilityPlusTrips2024: 5200, onTimePerformance2024: 0, commuteMins2024: 36, serviceFrequency2024: 0, transportEmissions2024: 44000, evAdoption2024: 5.1, transitModalShare2024: 0,  // 2024
    transitRoutes2025: 1, serviceHoursAnnual2025: 2200, busFleetSize2025: 2, lrtStations2025: 0, ridershipAnnual2025: 0.05, lrtRidership2025: 0, transitUsers2025: 2.2, transitCoverage2025: 5, walkabilityScore2025: 45, mobilityPlusTrips2025: 5600, onTimePerformance2025: 74, commuteMins2025: 34, serviceFrequency2025: 80, transportEmissions2025: 42000, evAdoption2025: 6.8, transitModalShare2025: 2.2,  // 2025
  },
];

// Region-level Transportation metrics for map sidebar (Region of Waterloo)
const transportationRegionMetrics = {
  transitRoutes2020: 29, serviceHoursAnnual2020: 420000, busFleetSize2020: 280, lrtStations2020: 19, ridershipAnnual2020: 12.8, lrtRidership2020: 2.1, transitUsers2020: 8.5, transitCoverage2020: 65, walkabilityScore2020: 62, mobilityPlusTrips2020: 165000, onTimePerformance2020: 82, commuteMins2020: 28, serviceFrequency2020: 15, transportEmissions2020: 850000, evAdoption2020: 2.1, transitModalShare2020: 8.5,  // 2020
  transitRoutes2021: 31, serviceHoursAnnual2021: 380000, busFleetSize2021: 285, lrtStations2021: 19, ridershipAnnual2021: 15.2, lrtRidership2021: 2.5, transitUsers2021: 9.2, transitCoverage2021: 67, walkabilityScore2021: 64, mobilityPlusTrips2021: 158000, onTimePerformance2021: 79, commuteMins2021: 26, serviceFrequency2021: 15, transportEmissions2021: 820000, evAdoption2021: 3.2, transitModalShare2021: 9.1,  // 2021
  transitRoutes2022: 32, serviceHoursAnnual2022: 450000, busFleetSize2022: 290, lrtStations2022: 19, ridershipAnnual2022: 17.8, lrtRidership2022: 2.9, transitUsers2022: 10.1, transitCoverage2022: 70, walkabilityScore2022: 66, mobilityPlusTrips2022: 175000, onTimePerformance2022: 84, commuteMins2022: 27, serviceFrequency2022: 12, transportEmissions2022: 800000, evAdoption2022: 4.8, transitModalShare2022: 10.2,  // 2022
  transitRoutes2023: 35, serviceHoursAnnual2023: 485000, busFleetSize2023: 295, lrtStations2023: 19, ridershipAnnual2023: 26.4, lrtRidership2023: 4.4, transitUsers2023: 12.3, transitCoverage2023: 72, walkabilityScore2023: 68, mobilityPlusTrips2023: 185000, onTimePerformance2023: 86, commuteMins2023: 26, serviceFrequency2023: 10, transportEmissions2023: 780000, evAdoption2023: 6.5, transitModalShare2023: 11.8,  // 2023
  transitRoutes2024: 37, serviceHoursAnnual2024: 534000, busFleetSize2024: 305, lrtStations2024: 19, ridershipAnnual2024: 28.5, lrtRidership2024: 4.8, transitUsers2024: 13.5, transitCoverage2024: 75, walkabilityScore2024: 70, mobilityPlusTrips2024: 200000, onTimePerformance2024: 88, commuteMins2024: 25, serviceFrequency2024: 10, transportEmissions2024: 750000, evAdoption2024: 8.9, transitModalShare2024: 12.5,  // 2024
  transitRoutes2025: 40, serviceHoursAnnual2025: 560000, busFleetSize2025: 315, lrtStations2025: 19, ridershipAnnual2025: 30.2, lrtRidership2025: 5.2, transitUsers2025: 14.8, transitCoverage2025: 78, walkabilityScore2025: 72, mobilityPlusTrips2025: 220000, onTimePerformance2025: 90, commuteMins2025: 24, serviceFrequency2025: 8, transportEmissions2025: 720000, evAdoption2025: 12, transitModalShare2025: 14,  // 2025
};
