// Housing category database
// Source: datasets/research/01_Waterloo_Region_1Million_Plan_Analysis.json
// All 2025 values are projections from the research file unless otherwise noted.

const housingDB = {
  pillars: {
    supply: {
      label: 'Pillar 1: Supply',
      metrics: [
        {
          id: 'units_approved',
          label: 'Units Approved (2025)',
          display: '20,000',
          unit: 'units',
          status: 'in_progress',
          predicted: true,
          note: '2024 actual: 18,500 · Up from 12,000 in 2020 · Target: 25,000 by 2030'
        },
        {
          id: 'housing_starts_2025',
          label: 'Housing Starts (2025)',
          display: '9,000',
          unit: 'units',
          status: 'in_progress',
          predicted: true,
          note: '2024 actual: 8,100 · Up from 5,200 in 2020 · Target: 12,000 by 2030'
        },
        {
          id: 'housing_completions_2025',
          label: 'Housing Completions (2025)',
          display: '7,500',
          unit: 'units',
          status: 'in_progress',
          predicted: true,
          note: '2024 actual: 7,000 · Up from 4,800 in 2020 · Target: 10,000 by 2030'
        },
        {
          id: 'rental_units_2025',
          label: 'New Rental Units (2025)',
          display: '920',
          unit: 'units',
          status: 'needs_attention',
          predicted: true,
          note: '2024 actual: 850 · Up from 450 in 2020 · Target: 1,200 by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Housing Supply Trends (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Housing Starts',  color: '#4facfe', data: [5200, 5800, 6500, 7200, 8100, 9000] },
            { label: 'Completions',     color: '#3fb950', data: [4800, 5200, 5800, 6200, 7000, 7500] },
            { label: 'Rental Units',    color: '#f0883e', data: [450,  520,  680,  750,  850,  920]  }
          ]
        },
        {
          title: 'Housing Starts by Municipality (2020–2025)',
          yLabel: 'Housing Starts',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#3fb950', data: [1400, 1550, 1700, 1900, 2100, 2600] },
            { label: 'Cambridge',            color: '#f0883e', data: [800,  900, 1000, 1100, 1300, 1500] },
            { label: 'Waterloo',             color: '#4facfe', data: [1300, 1400, 1500, 1600, 1722, 2400] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [900, 1000, 1100, 1200, 1350, 1700] }
          ]
        }
      ]
    },

    demand: {
      label: 'Pillar 2: Demand',
      metrics: [
        {
          id: 'population_2025',
          label: 'Population (2025)',
          display: '695,000',
          unit: 'residents',
          status: 'on_track',
          predicted: true,
          note: '2024 actual: 678,170 · Up from 614,000 in 2020 · Target: 760,000 by 2030 · 1,000,000 by 2050'
        },
        {
          id: 'net_migration_2025',
          label: 'Migration (2025)',
          display: '90,048',
          unit: 'residents/yr',
          status: 'in_progress',
          predicted: true,
          note: '2024: 78,838 · Up from 18,000 in 2020 · Target: 133,329 by 2030'
        },
        {
          id: 'total_households_2025',
          label: 'Total Households (2025)',
          display: '290,000',
          unit: 'households',
          status: 'in_progress',
          predicted: true,
          note: '2024: ~280,000 · Up from 245,000 in 2020 · Target: ~320,000 by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Demand Trends (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Population (thousands)', color: '#4facfe', data: [614, 614, 635, 655, 678, 695]  },
            { label: 'Migration (thousands)',   color: '#00f2fe', data: [18,  52,  65,  72,  78.8, 90] },
            { label: 'Households (thousands)', color: '#3fb950', data: [245, 252, 262, 270, 280, 290]  }
          ]
        },
        {
          title: 'Population by Municipality (2020–2025, thousands)',
          yLabel: 'Population (thousands)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#3fb950', data: [247, 255, 264, 272, 280, 285] },
            { label: 'Cambridge',            color: '#f0883e', data: [121, 125, 130, 135, 140, 142] },
            { label: 'Waterloo',             color: '#4facfe', data: [125, 130, 135, 140, 148, 155] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [40,  41,  42,  43,  44,  45]  }
          ]
        }
      ]
    },

    affordability: {
      label: 'Pillar 3: Affordability',
      metrics: [
        {
          id: 'price_to_income_ratio',
          label: 'Price-to-Income Ratio (2025)',
          display: '5.5×',
          unit: '×',
          status: 'in_progress',
          predicted: true,
          note: 'Down from 6.3 peak (2023) · 2024: 5.8 · Target: 5.0 by 2030 · Crisis threshold: 6.0'
        },
        {
          id: 'rent_burden',
          label: 'Rent Burden (2025)',
          display: '30%',
          unit: '% of income',
          status: 'needs_attention',
          predicted: true,
          note: 'At CMHC 30% threshold · Down from 35% peak (2023) · Target: 28% by 2030'
        },
        {
          id: 'affordable_units',
          label: 'Affordable Units (2025)',
          display: '16,500',
          unit: 'units',
          status: 'on_track',
          predicted: true,
          note: '2024 actual: 15,200 · Up from 12,000 in 2020 · Target: 22,000 by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Affordability Trends (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Price/Income Ratio',  color: '#f85149', data: [5.2, 5.5, 6.1, 6.3, 5.8, 5.5]   },
            { label: 'Rent Burden (%)',     color: '#f0883e', data: [32,  32,  34,  35,  31,  30]      },
            { label: 'Affordable Units (k)',color: '#3fb950', data: [12, 12.5, 13.2, 14, 15.2, 16.5]  }
          ]
        },
        {
          title: 'Median Home Price by Municipality (2020–2025, $k)',
          yLabel: 'Median Price ($k)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#3fb950', data: [580, 650, 730, 790, 750, 784] },
            { label: 'Cambridge',            color: '#f0883e', data: [540, 600, 680, 740, 710, 720] },
            { label: 'Waterloo',             color: '#4facfe', data: [610, 680, 760, 820, 780, 810] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [490, 545, 615, 670, 640, 650] }
          ]
        }
      ]
    },

    urban_form: {
      label: 'Pillar 4: Urban Form',
      metrics: [
        {
          id: 'density',
          label: 'Population Density (2025)',
          display: '950 / km²',
          unit: 'people/km²',
          status: 'in_progress',
          predicted: true,
          note: '2024: ~925 · Up from 850 in 2020 · Target: 1,050 by 2030 · 1,250 by 2050'
        },
        {
          id: 'intensification',
          label: 'Intensification Rate (2025)',
          display: '40%',
          unit: '% of new units in built-up area',
          status: 'in_progress',
          predicted: true,
          note: '2024: 38% · Up from 28% in 2020 · Target: 48% by 2030 · 60% by 2050'
        },
        {
          id: 'land_use',
          label: 'Residential Land Use (2025)',
          display: '41%',
          unit: '% of land area',
          status: 'in_progress',
          predicted: true,
          note: '2024: 40% · Up from 38% in 2020 · Target: 43% by 2030 · 45% by 2050'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Urban Form Progress (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Density (/km²)',       color: '#3fb950', data: [850, 860, 880, 900, 925, 950] },
            { label: 'Intensification (%)',  color: '#4facfe', data: [28,  30,  32,  35,  38,  40]  },
            { label: 'Residential Land (%)', color: '#f0883e', data: [38,  38,  39,  40,  40,  41]  }
          ]
        },
        {
          title: 'Intensification Rate by Municipality (2020–2025, %)',
          yLabel: 'Rate (%)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#3fb950', data: [35, 36, 38, 39, 41, 42] },
            { label: 'Cambridge',            color: '#f0883e', data: [28, 29, 31, 32, 34, 35] },
            { label: 'Waterloo',             color: '#4facfe', data: [40, 42, 43, 45, 46, 48] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [16, 17, 18, 19, 21, 22] }
          ]
        }
      ]
    },

    stability: {
      label: 'Pillar 5: Housing Stability',
      metrics: [
        {
          id: 'homelessness',
          label: 'People Experiencing Homelessness (2025)',
          display: '2,700',
          unit: 'people',
          status: 'needs_attention',
          predicted: true,
          note: '2024 actual: 2,371 · Up from 1,050 in 2020 · 2021 actual: 1,195 · Target: functional zero by 2030'
        },
        {
          id: 'vacancy',
          label: 'Rental Vacancy Rate (2025)',
          display: '4.1%',
          unit: '%',
          status: 'on_track',
          note: '2024 actual: 2.2% · Up from 1.2% in 2020 · Target: 3.5% by 2030'
        },
        {
          id: 'housing_need',
          label: 'Households in Core Housing Need (2025)',
          display: '55,500',
          unit: 'households',
          status: 'needs_attention',
          predicted: true,
          note: '2024: ~54,000 · Up from 45,000 in 2020 · Target: 58,000 ceiling by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Housing Stability Trends (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Homelessness',             color: '#f85149', data: [1050, 1195, 1300, 1600, 2371, 2700] },
            { label: 'Vacancy Rate (%)',          color: '#3fb950', data: [1.2,  1.5,  1.8,  1.5,  2.2,  4.1] },
            { label: 'Housing Need (thousands)', color: '#f0883e', data: [45, 48, 50.5, 52, 54, 55.5]         }
          ]
        },
        {
          title: 'Homelessness by Municipality (2020–2025)',
          yLabel: 'Individuals Experiencing Homelessness',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener',            color: '#3fb950', data: [420, 480, 580, 700,  950, 1200] },
            { label: 'Cambridge',            color: '#f0883e', data: [250, 280, 330, 400,  500,  650] },
            { label: 'Waterloo',             color: '#4facfe', data: [200, 220, 260, 320,  420,  550] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [120, 130, 150, 180,  240,  300] }
          ]
        }
      ]
    }
  },

  // Regional aggregate — Waterloo Region overall (used in map sidebar)
  // Source: 01_Waterloo_Region_1Million_Plan_Analysis.json, Region_of_Waterloo, 2025 projections
  regionMetrics: {
    // Supply
    unitsApproved2024:        41762,  // pipeline total Dec 2024 (processed data)
    housingStarts2024:         4500,  // 2025 projection (2024 actual: 4,306)
    unitsCompleted2024:        3900,  // 2025 projection (2024 actual: 3,600)
    rentalUnits2024:           1800,  // 2025 projection (35% of starts)
    housingTarget2031:        70000,  // Kitchener 35k + Waterloo 16k + Cambridge 19k
    // Demand
    populationGrowthRate2023:   1.8,  // 2025 projected growth rate %
    temporaryStudents2023:    35000,  // 2025 (down from 43,410 in 2024 due to federal cap)
    totalHouseholds2023:     248000,  // 2025 projection
    // Affordability
    medianHomePrice2025:     712000,
    priceToIncomeRatio2025:    6.78,
    averageRent2025:           2034,  // 2BR average
    rentBurden2025:              32,
    rentalVacancyRate2025:      4.1,
    coreHousingNeed2025:       12.0,
    subsidizedWaitlist2025:    3070,
    // Urban Form
    intensificationPct2025:      50,
    transitOrientedUnits2025:  9600,
    multiUnitPermits2025:      null,  // only % available regionally (55%)
    majorTransitAreas2025:       18,
    // Stability
    homelessness2025:          1200,
    chronicHomeless2025:        900,
    livingRough2025:           1009,  // from PIT count (processed #05)
    shelterBeds2025:            605,
    supportiveHousingUnits2025: 760,
    // Context
    density:                    468,  // 2025 per research (per sq km)
    price:                   712000
  },

  // Per-city data for the map
  cityMetrics: [
    {
      name: 'Waterloo', city: 'Waterloo',
      county: 'Regional Municipality of Waterloo', state: 'Ontario', country: 'Canada',
      density: 2350, price: 810000,
      // Supply
      unitsApproved2024: null,
      housingStarts2024: 1722,
      unitsCompleted2024: null,
      rentalUnits2024: 310,
      housingTarget2031: 16000,
      // Demand
      populationGrowthRate2023: 3.9,
      temporaryStudents2023: 34550,
      totalHouseholds2023: 51980,
      // Affordability (2025)
      medianHomePrice2025: 810000,
      priceToIncomeRatio2025: 6.3,
      averageRent2025: 1968,
      rentBurden2025: 33,
      rentalVacancyRate2025: 5.2,
      coreHousingNeed2025: 11.8,
      subsidizedWaitlist2025: 720,
      // Urban Form (2025)
      intensificationPct2025: 48,
      transitOrientedUnits2025: 3200,
      multiUnitPermits2025: 450,
      majorTransitAreas2025: 6,
      // Stability (2025)
      homelessness2025: 550,
      chronicHomeless2025: 280,
      livingRough2025: 250,
      shelterBeds2025: 170,
      supportiveHousingUnits2025: 240
    },
    {
      name: 'Kitchener', city: 'Kitchener',
      county: 'Regional Municipality of Waterloo', state: 'Ontario', country: 'Canada',
      density: 1320, price: 784343,
      // Supply
      unitsApproved2024: null,
      housingStarts2024: 2100,
      unitsCompleted2024: 1800,
      rentalUnits2024: null,
      housingTarget2031: 35000,
      // Demand
      populationGrowthRate2023: 5.1,
      temporaryStudents2023: 10700,
      totalHouseholds2023: 107580,
      // Affordability (2025)
      medianHomePrice2025: 784343,
      priceToIncomeRatio2025: 6.1,
      averageRent2025: 1903,
      rentBurden2025: 32,
      rentalVacancyRate2025: 3.6,
      coreHousingNeed2025: 12.5,
      subsidizedWaitlist2025: 1800,
      // Urban Form (2025)
      intensificationPct2025: 48,
      transitOrientedUnits2025: 4800,
      multiUnitPermits2025: 2050,
      majorTransitAreas2025: 8,
      // Stability (2025)
      homelessness2025: 650,
      chronicHomeless2025: 420,
      livingRough2025: 380,
      shelterBeds2025: 280,
      supportiveHousingUnits2025: 380
    },
    {
      name: 'Cambridge', city: 'Cambridge',
      county: 'Regional Municipality of Waterloo', state: 'Ontario', country: 'Canada',
      density: 920, price: 676300,
      // Supply
      unitsApproved2024: 7000,
      housingStarts2024: null,
      unitsCompleted2024: 816,
      rentalUnits2024: null,
      housingTarget2031: 19000,
      // Demand
      populationGrowthRate2023: 4.7,
      temporaryStudents2023: 4500,
      totalHouseholds2023: 53920,
      // Affordability (2025)
      medianHomePrice2025: 676300,
      priceToIncomeRatio2025: 5.2,
      averageRent2025: 1850,
      rentBurden2025: 29,
      rentalVacancyRate2025: 3.8,
      coreHousingNeed2025: 10.9,
      subsidizedWaitlist2025: 550,
      // Urban Form (2025)
      intensificationPct2025: 35,
      transitOrientedUnits2025: 1600,
      multiUnitPermits2025: 430,
      majorTransitAreas2025: 4,
      // Stability (2025)
      homelessness2025: 650,
      chronicHomeless2025: 210,
      livingRough2025: 180,
      shelterBeds2025: 155,
      supportiveHousingUnits2025: 190
    },

    // ── Other Municipalities (townships) ─────────────────────────────────
    // Data below is the COMBINED aggregate for all 4 townships.
    // Individual breakdowns are not available in the research file.
    // Each township gets its own map polygon; all share the same combined stats.
    ...['North Dumfries', 'Wellesley', 'Wilmot', 'Woolwich'].map(township => ({
      name: 'Other Municipalities',   // shared label shown in map popups
      displayName: township,          // used to fetch the correct Nominatim boundary
      city: township,
      county: 'Regional Municipality of Waterloo', state: 'Ontario', country: 'Canada',
      // Context
      density: 370,   // combined avg 2025 (per km²)
      price: null,
      // Supply (2025 combined projections)
      unitsApproved2024:    3800,
      housingStarts2024:    1700,
      unitsCompleted2024:   1400,
      rentalUnits2024:       200,
      housingTarget2031:    null,
      // Demand (2025 combined projections)
      populationGrowthRate2023: null,
      temporaryStudents2023:    null,
      totalHouseholds2023:     17000,  // 2023 value
      // Affordability (2025 combined)
      medianHomePrice2025:        null,
      priceToIncomeRatio2025:      4.9,
      averageRent2025:            null,
      rentBurden2025:               27,
      rentalVacancyRate2025:      null,
      coreHousingNeed2025:        null,
      subsidizedWaitlist2025:     null,
      // Urban Form (2025 combined)
      intensificationPct2025:       22,
      transitOrientedUnits2025:   null,
      multiUnitPermits2025:       null,
      majorTransitAreas2025:      null,
      // Stability (2025 combined)
      homelessness2025:            300,
      chronicHomeless2025:        null,
      livingRough2025:            null,
      shelterBeds2025:            null,
      supportiveHousingUnits2025: null
    }))
  ]
};
