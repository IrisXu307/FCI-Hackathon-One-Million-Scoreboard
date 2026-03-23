// Transportation category database
// Source: datasets/research/02_Transportation.json
// Region-level values are population-weighted aggregates of per-municipality data.
// All 2025 values are projected estimates unless noted.

const transportationDB = {
  label: 'Transportation',
  pillars: {

    supply: {
      label: 'Pillar 1: Supply',
      metrics: [
        {
          id: 'transit_routes',
          label: 'Transit Routes (2025)',
          display: '116',
          unit: 'routes',
          status: 'in_progress',
          predicted: true,
          note: 'Region total · 2024: ~111 · Target: 130+ by 2030 · Kitchener leads at 48'
        },
        {
          id: 'service_hours',
          label: 'Annual Service Hours (2025)',
          display: '1,056,000',
          unit: 'hours/yr',
          status: 'in_progress',
          predicted: true,
          note: '2024: ~1,014,000 hrs · Kitchener: 535k · Waterloo: 245k · Cambridge: 205k · Target: 1.2M+ by 2030'
        },
        {
          id: 'fleet_size',
          label: 'Fleet Size (2025)',
          display: '400',
          unit: 'vehicles',
          status: 'in_progress',
          predicted: true,
          note: '2024: ~385 · Kitchener leads at 290 · Target: 430+ by 2030 · Includes buses and LRT'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Annual Service Hours & Fleet (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Service Hours (thousands)', color: '#4facfe', data: [840, 850, 870, 900, 968, 1056] },
            { label: 'Fleet Size (vehicles)',      color: '#3fb950', data: [350, 355, 360, 370, 385,  400] }
          ]
        },
        {
          title: 'Annual Service Hours by Municipality (2020–2025, thousands)',
          yLabel: 'Service Hours (thousands)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#4facfe', data: [450, 460, 470, 480, 528, 535] },
            { label: 'Waterloo',             color: '#3fb950', data: [200, 210, 220, 230, 240, 245] },
            { label: 'Cambridge',            color: '#f0883e', data: [180, 185, 190, 195, 200, 205] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [60,  62,  64,  66,  68,  71]  }
          ]
        }
      ]
    },

    demand: {
      label: 'Pillar 2: Demand',
      metrics: [
        {
          id: 'ridership',
          label: 'Annual Ridership (2025)',
          display: '35.4M',
          unit: 'trips/yr',
          status: 'on_track',
          predicted: true,
          note: '2024 actual: ~33.8M · Target: 51M by 2030 · Kitchener: 23M · Work-from-home dampened post-COVID recovery'
        },
        {
          id: 'pop_using_transit',
          label: 'Population Using Transit (2025)',
          display: '182,000',
          unit: 'residents',
          status: 'in_progress',
          predicted: true,
          note: '~26% of regional population · 2024: ~175,000 · Target: 260,000+ by 2030'
        },
        {
          id: 'vehicle_commute_share',
          label: 'Vehicle Commute Share (2025)',
          display: '77%',
          unit: '% of commuters',
          status: 'needs_attention',
          predicted: true,
          note: 'Target: 65% by 2030, 45% by 2050 · Down from ~80% in 2020 · Waterloo lowest at 67% · Rural townships: 86–90%'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Ridership & Vehicle Commute Share (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Total Ridership (millions)', color: '#4facfe', data: [29.5, 20.0, 24.5, 31.0, 33.8, 35.4] },
            { label: 'Vehicle Commute Share (%)',  color: '#f85149', data: [80,   79,   79,   78,   78,   77]   }
          ]
        },
        {
          title: 'Annual Ridership by Municipality (2020–2025, millions)',
          yLabel: 'Ridership (millions)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#4facfe', data: [18.0, 12.0, 15.0, 20.0, 22.1, 23.0] },
            { label: 'Waterloo',             color: '#3fb950', data: [5.5,  4.2,  4.8,  5.8,  6.2,  6.5]  },
            { label: 'Cambridge',            color: '#f0883e', data: [4.5,  3.2,  3.8,  4.6,  5.0,  5.2]  },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [0.8,  0.5,  0.6,  0.7,  0.7,  0.7]  }
          ]
        }
      ]
    },

    accessibility: {
      label: 'Pillar 3: Accessibility',
      metrics: [
        {
          id: 'transit_coverage',
          label: 'Population Within 500m of Transit (2025)',
          display: '79%',
          unit: '% of residents',
          status: 'on_track',
          predicted: true,
          note: '2024: 77% · Up from 72% in 2020 · Target: 85% by 2030 · Kitchener: 81% · Rural townships: 26–34%'
        },
        {
          id: 'walkability_score',
          label: 'Walkability Score (2025)',
          display: '60 / 100',
          unit: 'score',
          status: 'in_progress',
          predicted: true,
          note: '2024: ~58 · Up from ~52 in 2020 · Target: 70 by 2030 · Waterloo leads at 60 · Cambridge: 50'
        },
        {
          id: 'last_mile_coverage',
          label: 'Last-Mile Access Coverage (2025)',
          display: '59%',
          unit: '% of stops',
          status: 'in_progress',
          predicted: true,
          note: '% of stops with bike/micro-mobility/pedestrian connectivity · 2024: 57% · Target: 75% by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Transit Coverage & Walkability (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Pop. Within 500m of Transit (%)', color: '#4facfe', data: [72, 73, 74, 75, 77, 79] },
            { label: 'Walkability Score (0–100)',        color: '#3fb950', data: [52, 54, 55, 57, 58, 60] }
          ]
        },
        {
          title: 'Population Within 500m of Transit by Municipality (2020–2025, %)',
          yLabel: 'Population Coverage (%)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#4facfe', data: [75, 76, 77, 78, 80, 81] },
            { label: 'Waterloo',             color: '#3fb950', data: [72, 73, 74, 75, 76, 77] },
            { label: 'Cambridge',            color: '#f0883e', data: [68, 69, 70, 71, 72, 73] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [26, 27, 28, 29, 30, 30] }
          ]
        }
      ]
    },

    efficiency: {
      label: 'Pillar 4: Efficiency',
      metrics: [
        {
          id: 'commute_time',
          label: 'Avg. Commute Time (2025)',
          display: '23 min',
          unit: 'minutes',
          status: 'on_track',
          predicted: true,
          note: 'Population-weighted regional avg · Waterloo shortest: 17 min · Cambridge: 24 min · Rural townships: 33–38 min'
        },
        {
          id: 'congestion_index',
          label: 'Congestion Index (2025)',
          display: '1.18',
          unit: 'index',
          status: 'in_progress',
          predicted: true,
          note: '1.0 = free-flow; higher = more congested · 2024: 1.20 · Target: <1.05 by 2030 · Waterloo best at 1.03'
        },
        {
          id: 'on_time_performance',
          label: 'On-Time Performance (2025)',
          display: '95%',
          unit: '% on time',
          status: 'on_track',
          predicted: true,
          note: '2024: ~94% · Kitchener leads at 97% · Cambridge: 93% · Target: 97%+ region-wide by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Commute Time & Congestion (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Avg. Commute Time (min)', color: '#f0883e', data: [26,   25,   24,   24,   23,   23]   },
            { label: 'Congestion Index',        color: '#f85149', data: [1.28, 1.22, 1.20, 1.20, 1.20, 1.18] }
          ]
        },
        {
          title: 'Average Commute Time by Municipality (2020–2025, minutes)',
          yLabel: 'Commute Time (min)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#4facfe', data: [24, 23, 23, 22, 22, 22] },
            { label: 'Waterloo',             color: '#3fb950', data: [19, 18, 18, 17, 17, 17] },
            { label: 'Cambridge',            color: '#f0883e', data: [28, 27, 26, 25, 24, 24] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [38, 37, 37, 36, 36, 36] }
          ]
        }
      ]
    },

    sustainability: {
      label: 'Pillar 5: Sustainability',
      metrics: [
        {
          id: 'transport_emissions',
          label: 'Transport Emissions (2025)',
          display: '843k t CO₂',
          unit: 'tonnes CO₂/yr',
          status: 'needs_attention',
          predicted: true,
          note: '2024: ~845k t · Down from ~955k t in 2020 · Target: 640k t by 2030, <180k t by 2050'
        },
        {
          id: 'ev_adoption',
          label: 'EV Adoption Rate (2025)',
          display: '5%',
          unit: '% of vehicles',
          status: 'needs_attention',
          predicted: true,
          note: '2024: ~3.5% · Up from 0.8% in 2020 · Target: 25% by 2030 · Waterloo leads at 6% · Rural: 2.6–3.4%'
        },
        {
          id: 'transit_modal_share',
          label: 'Transit Modal Share (2025)',
          display: '16%',
          unit: '% of all trips',
          status: 'in_progress',
          predicted: true,
          note: '2024: 15% · Up from 11% in 2020 · Target: 25% by 2030 · Waterloo leads at 19% · Cambridge: 12%'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Emissions & Modal Share (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Transport Emissions (k t CO₂)', color: '#f85149', data: [955, 910, 870, 855, 845, 843] },
            { label: 'Transit Modal Share (%)',        color: '#3fb950', data: [11,  12,  13,  14,  15,  16]  },
            { label: 'EV Adoption Rate (%)',           color: '#4facfe', data: [0.8, 1.2, 1.8, 2.5, 3.5, 5.0] }
          ]
        },
        {
          title: 'Transport Emissions by Municipality (2020–2025, thousand tonnes CO₂)',
          yLabel: 'Emissions (kt CO₂)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#f85149', data: [450, 430, 410, 390, 375, 360] },
            { label: 'Cambridge',            color: '#f0883e', data: [220, 215, 210, 205, 200, 195] },
            { label: 'Waterloo',             color: '#ffa657', data: [180, 175, 170, 165, 160, 155] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [145, 140, 135, 133, 133, 133] }
          ]
        }
      ]
    }

  }
};

// Per-city transportation metrics for map.js (2025 projected values)
// Source: 02_Transportation.json; Other Municipalities = avg of 4 townships
const transportationCityMetrics = [
  {
    name: 'Kitchener',
    // 2025 projected
    ridershipAnnual2025: 23000000, vehicleCommuteShare2025: 73, transitCoverage2025: 81, walkabilityScore2025: 63, commuteMins2025: 22, congestionIndex2025: 1.12, onTimePerformance2025: 97, transportEmissions2025: 360000, evAdoption2025: 5.0, transitModalShare2025: 16,
    // 2024 actual
    ridershipAnnual2024: 22100000, vehicleCommuteShare2024: 74, transitCoverage2024: 80, walkabilityScore2024: 62, commuteMins2024: 22, congestionIndex2024: 1.15, onTimePerformance2024: 97, transportEmissions2024: 375000, evAdoption2024: 3.5, transitModalShare2024: 15,
    // 2023 actual (from 02_Transportation.json)
    ridershipAnnual2023: 20000000, vehicleCommuteShare2023: 75, transitCoverage2023: 78, walkabilityScore2023: 61, commuteMins2023: 22, congestionIndex2023: 1.18, onTimePerformance2023: 94, transportEmissions2023: 390000, evAdoption2023: 2.5, transitModalShare2023: 13
  },
  {
    name: 'Cambridge',
    ridershipAnnual2025: 5200000, vehicleCommuteShare2025: 77, transitCoverage2025: 73, walkabilityScore2025: 50, commuteMins2025: 24, congestionIndex2025: 1.22, onTimePerformance2025: 93, transportEmissions2025: 195000, evAdoption2025: 4.5, transitModalShare2025: 12,
    ridershipAnnual2024: 5000000, vehicleCommuteShare2024: 78, transitCoverage2024: 72, walkabilityScore2024: 49, commuteMins2024: 24, congestionIndex2024: 1.25, onTimePerformance2024: 92, transportEmissions2024: 200000, evAdoption2024: 3.0, transitModalShare2024: 11,
    // 2023 actual (from 02_Transportation.json)
    ridershipAnnual2023: 4600000, vehicleCommuteShare2023: 79, transitCoverage2023: 71, walkabilityScore2023: 48, commuteMins2023: 25, congestionIndex2023: 1.28, onTimePerformance2023: 90, transportEmissions2023: 205000, evAdoption2023: 2.2, transitModalShare2023: 9
  },
  {
    name: 'Waterloo',
    ridershipAnnual2025: 6500000, vehicleCommuteShare2025: 67, transitCoverage2025: 77, walkabilityScore2025: 60, commuteMins2025: 17, congestionIndex2025: 1.03, onTimePerformance2025: 95, transportEmissions2025: 155000, evAdoption2025: 6.0, transitModalShare2025: 19,
    ridershipAnnual2024: 6200000, vehicleCommuteShare2024: 68, transitCoverage2024: 76, walkabilityScore2024: 59, commuteMins2024: 17, congestionIndex2024: 1.05, onTimePerformance2024: 95, transportEmissions2024: 160000, evAdoption2024: 4.2, transitModalShare2024: 18,
    // 2023 actual (from 02_Transportation.json)
    ridershipAnnual2023: 5800000, vehicleCommuteShare2023: 69, transitCoverage2023: 75, walkabilityScore2023: 58, commuteMins2023: 17, congestionIndex2023: 1.08, onTimePerformance2023: 93, transportEmissions2023: 165000, evAdoption2023: 3.2, transitModalShare2023: 16
  },
  {
    // One entry covers all 4 townships — data.js uses .find() which matches the first occurrence
    name: 'Other Municipalities',
    ridershipAnnual2025: 730000, vehicleCommuteShare2025: 88, transitCoverage2025: 30, walkabilityScore2025: 30, commuteMins2025: 36, congestionIndex2025: 1.33, onTimePerformance2025: 84, transportEmissions2025: 132500, evAdoption2025: 3.0, transitModalShare2025: 6,
    ridershipAnnual2024: 700000, vehicleCommuteShare2024: 89, transitCoverage2024: 29, walkabilityScore2024: 29, commuteMins2024: 37, congestionIndex2024: 1.36, onTimePerformance2024: 83, transportEmissions2024: 136000, evAdoption2024: 2.1, transitModalShare2024: 5,
    // 2023 actual — avg of 4 townships from 02_Transportation.json
    ridershipAnnual2023: 655000, vehicleCommuteShare2023: 90, transitCoverage2023: 27, walkabilityScore2023: 28, commuteMins2023: 38, congestionIndex2023: 1.39, onTimePerformance2023: 81, transportEmissions2023: 139500, evAdoption2023: 1.5, transitModalShare2023: 4
  }
];

// Regional aggregate transportation metrics for map sidebar
const transportationRegionMetrics = {
  // 2025 projected
  ridershipAnnual2025: 35400000, vehicleCommuteShare2025: 77, transitCoverage2025: 79,
  walkabilityScore2025: 60, commuteMins2025: 23, congestionIndex2025: 1.18,
  onTimePerformance2025: 95, transportEmissions2025: 843000, evAdoption2025: 5.0, transitModalShare2025: 16,
  // 2024 actual
  ridershipAnnual2024: 33800000, vehicleCommuteShare2024: 78, transitCoverage2024: 77,
  walkabilityScore2024: 58, commuteMins2024: 23, congestionIndex2024: 1.20,
  onTimePerformance2024: 94, transportEmissions2024: 845000, evAdoption2024: 3.5, transitModalShare2024: 15,
  // 2023 actual (derived from 02_Transportation.json, sum/avg of all municipalities)
  ridershipAnnual2023: 31000000, vehicleCommuteShare2023: 78, transitCoverage2023: 75,
  walkabilityScore2023: 57, commuteMins2023: 24, congestionIndex2023: 1.20,
  onTimePerformance2023: 93, transportEmissions2023: 899500, evAdoption2023: 2.5, transitModalShare2023: 14
};
