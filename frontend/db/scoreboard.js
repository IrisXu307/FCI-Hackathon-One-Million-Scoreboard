// Scoreboard comparison data
// Sources: 01_Waterloo_Region_1Million_Plan_Analysis.json, 02_Transportation.json, 03_Healthcare.json
// Region of Waterloo = regional total/aggregate; city columns are per-municipality
// predicted: false means the value is a measured actual; omitted/true means projected estimate

const scoreboardDB = {
  regions: ['Waterloo Region', 'Kitchener', 'Cambridge', 'Waterloo', 'Other Munic.'],
  pillars: [

    // ── Housing ──────────────────────────────────────────────────────────────
    {
      key: 'supply',
      label: 'Housing — Supply',
      metrics: [
        { label: 'Units Approved',   predicted: true,  definition: 'Annual housing units granted municipal building permit approval',                higherIsBetter: true,  format: v => v.toLocaleString(), values: [20000, 7500, 4500, 4200, 3800] },
        { label: 'Housing Starts',   predicted: true,  definition: 'New construction projects where work has physically begun during the year',       higherIsBetter: true,  format: v => v.toLocaleString(), values: [9000,  2600, 1500, 2400, 1700] },
        { label: 'Completions',      predicted: true,  definition: 'Units finished and ready for occupancy during the year',                          higherIsBetter: true,  format: v => v.toLocaleString(), values: [7500,  2700, 1200, 1900, 1400] },
        { label: 'New Rental Units', predicted: true,  definition: 'Purpose-built rental units added to the housing stock',                           higherIsBetter: true,  format: v => v.toLocaleString(), values: [920,   380,  280,  310,  200 ] }
      ]
    },
    {
      key: 'demand',
      label: 'Housing — Demand',
      metrics: [
        { label: 'Population',   predicted: true,  definition: 'Total number of residents — the primary driver of housing demand',                   higherIsBetter: null,  format: v => `${v.toLocaleString()} ppl`, values: [695000, 285000, 142000, 258000, 48000] },
        { label: 'Migration',    predicted: true,  definition: 'Net arrivals from other regions and countries per year',                              higherIsBetter: null,  format: v => `${v.toLocaleString()} ppl`, values: [90048,  38000,  26000,  22000,  4048 ] },
        { label: 'Households',   predicted: true,  definition: 'Occupied private dwellings; each household = one unit of housing demand',            higherIsBetter: null,  format: v => `${v.toLocaleString()} HH`,  values: [290000, 120000,  53000, 105000, 18500] }
      ]
    },
    {
      key: 'affordability',
      label: 'Housing — Affordability',
      metrics: [
        { label: 'Price/Income Ratio', predicted: true,  definition: 'Median home price ÷ median household income. Above 6× is the crisis threshold', higherIsBetter: false, format: v => `${v}×`,            values: [5.5, 5.6, 5.2, 5.7, 4.9] },
        { label: 'Rent Burden',        predicted: true,  definition: 'Share of household income spent on rent. CMHC affordability threshold: 30%',    higherIsBetter: false, format: v => `${v}%`,            values: [30,  31,  29,  32,  27 ] },
        { label: 'Affordable Units',   predicted: true,  definition: 'Units priced at or below 80% of median market rent or sale price',               higherIsBetter: true,  format: v => v.toLocaleString(), values: [16500, 7000, 4500, 5200, 2600] }
      ]
    },
    {
      key: 'urban_form',
      label: 'Housing — Urban Form',
      metrics: [
        { label: 'Density (/km²)',       predicted: true,  definition: 'Residents per square kilometre — higher density supports transit and services',      higherIsBetter: true,  format: v => v.toLocaleString(), values: [950,  1090, 840,  1240, 370] },
        { label: 'Intensification Rate', predicted: true,  definition: 'Share of new housing built within the existing urban boundary, not on greenfield',   higherIsBetter: true,  format: v => `${v}%`,            values: [40,   42,   35,   48,   22 ] },
        { label: 'Residential Land Use', predicted: true,  definition: 'Percentage of total municipal land area designated for residential use',              higherIsBetter: true,  format: v => `${v}%`,            values: [41,   43,   39,   45,   28 ] }
      ]
    },
    {
      key: 'stability',
      label: 'Housing — Stability',
      metrics: [
        { label: 'Homelessness',      predicted: true,  definition: 'People without stable housing (sheltered + unsheltered). Lower is better',              higherIsBetter: false, format: v => `${v.toLocaleString()} ppl`, values: [2700, 1200, 650,  550,  300 ] },
        { label: 'Rental Vacancy',    predicted: true,  definition: 'Percentage of rental units unoccupied and available. Healthy range: 3–5%',              higherIsBetter: true,  format: v => `${v}%`,            values: [4.1,  4.5,  3.8,  5.2,  2.5 ] },
        { label: 'Core Housing Need', predicted: true,  definition: 'Households spending >30% of income on housing, or in inadequate/unsuitable housing',    higherIsBetter: false, format: v => `${v.toLocaleString()} HH`,  values: [55500, 23000, 16000, 19000, 6200] }
      ]
    },

    // ── Transportation ────────────────────────────────────────────────────────
    {
      key: 'transport_supply',
      label: 'Transportation — Supply',
      metrics: [
        { label: 'Transit Routes',         predicted: true, definition: 'Total number of active transit routes operated by Grand River Transit (2025)',                                       higherIsBetter: true,  format: v => v.toLocaleString(),                  values: [116,     48,      24,      28,      16  ] },
        { label: 'Annual Service Hours',   predicted: true, definition: 'Total vehicle revenue hours operated per year across all routes, in thousands (2025)',                               higherIsBetter: true,  format: v => `${(v/1000).toFixed(0)}k hrs`,       values: [1056000, 535000,  205000,  245000,  71000] },
        { label: 'Fleet Size',             predicted: true, definition: 'Number of revenue vehicles (buses + LRT) in active service (2025)',                                                  higherIsBetter: true,  format: v => `${v} vehicles`,                     values: [400,     290,     43,      49,      18  ] }
      ]
    },
    {
      key: 'transport_demand',
      label: 'Transportation — Demand',
      metrics: [
        { label: 'Annual Ridership',         predicted: true,  definition: 'Total transit boardings per year (2025)',                                                                         higherIsBetter: true,  format: v => `${(v/1000000).toFixed(1)}M`,        values: [35400000, 23000000, 5200000, 6500000, 730000] },
        { label: 'Pop. Using Transit',       predicted: true,  definition: 'Estimated number of residents who use transit regularly (2025)',                                                  higherIsBetter: true,  format: v => `${v.toLocaleString()} ppl`,          values: [182000,   98000,    33000,   42000,   9000  ] },
        { label: 'Vehicle Commute Share',    predicted: true,  definition: '% of workers commuting primarily by personal vehicle. Lower = better mode shift (2025)',                         higherIsBetter: false, format: v => `${v}%`,                             values: [77,       73,       77,      67,      88    ] }
      ]
    },
    {
      key: 'transport_accessibility',
      label: 'Transportation — Accessibility',
      metrics: [
        { label: 'Pop. Within 500m of Transit', predicted: true, definition: 'Share of residents living within a 5-minute walk of a transit stop (2025)',                                    higherIsBetter: true,  format: v => `${v}%`,    values: [79,   81,   73,   77,   30  ] },
        { label: 'Walkability Score',           predicted: true, definition: 'Composite score (0–100) rating pedestrian friendliness of the built environment (2025)',                       higherIsBetter: true,  format: v => `${v}/100`, values: [60,   63,   50,   60,   30  ] },
        { label: 'Last-Mile Coverage',          predicted: true, definition: '% of transit stops connected to bike, micro-mobility, or pedestrian infrastructure (2025)',                    higherIsBetter: true,  format: v => `${v}%`,    values: [59,   63,   45,   60,   21  ] }
      ]
    },
    {
      key: 'transport_efficiency',
      label: 'Transportation — Efficiency',
      metrics: [
        { label: 'Avg. Commute Time',   predicted: true, definition: 'Population-weighted average one-way commute time in minutes (2025)',                                                    higherIsBetter: false, format: v => `${v} min`, values: [23,   22,   24,   17,   36  ] },
        { label: 'Congestion Index',    predicted: true, definition: 'Ratio of travel time vs. free-flow speed. 1.0 = no congestion; higher = more congested (2025)',                        higherIsBetter: false, format: v => `${v}`,     values: [1.18, 1.12, 1.22, 1.03, 1.33] },
        { label: 'On-Time Performance', predicted: true, definition: '% of transit trips arriving within 3 minutes of scheduled time (2025)',                                                higherIsBetter: true,  format: v => `${v}%`,    values: [95,   97,   93,   95,   84  ] }
      ]
    },
    {
      key: 'transport_sustainability',
      label: 'Transportation — Sustainability',
      metrics: [
        { label: 'EV Adoption Rate',    predicted: true, definition: '% of registered vehicles that are battery electric or plug-in hybrid (2025)',                                          higherIsBetter: true,  format: v => `${v}%`,    values: [5.0,  5.0,  4.5,  6.0,  3.0 ] },
        { label: 'Transit Modal Share', predicted: true, definition: '% of all trips made by public transit instead of private vehicle (2025)',                                               higherIsBetter: true,  format: v => `${v}%`,    values: [16,   16,   12,   19,   6   ] },
        { label: 'Transport Emissions', predicted: true, definition: 'Annual CO₂-equivalent emissions from all road transport, in thousand tonnes (2025)',                                   higherIsBetter: false, format: v => `${(v/1000).toFixed(0)}k t`, values: [843000, 360000, 195000, 155000, 132500] }
      ]
    },

    // ── Healthcare ────────────────────────────────────────────────────────────
    {
      key: 'healthcare_capacity',
      label: 'Healthcare — Capacity',
      metrics: [
        { label: 'Beds per 1,000',       predicted: true,  definition: 'Hospital beds per 1,000 residents. Higher indicates more inpatient capacity (2025)',                               higherIsBetter: true,  format: v => v.toFixed(2),  values: [1.42, 2.10, 1.35, 2.30, 0.00] },
        { label: 'Clinics per 1,000',    predicted: true,  definition: 'Primary care clinics per 1,000 residents. Higher = better community access to care (2025)',                        higherIsBetter: true,  format: v => v.toFixed(2),  values: [0.17, 0.26, 0.14, 0.22, 0.06] },
        { label: 'Family Doctor Access', predicted: true,  definition: '% of residents with an attached family doctor or primary care provider (2025)',                                    higherIsBetter: true,  format: v => `${v}%`,       values: [89.5, 88.8, 87.8, 91.5, 83.0] }
      ]
    },
    {
      key: 'healthcare_demand',
      label: 'Healthcare — Demand',
      metrics: [
        { label: 'Population Served',  predicted: true,  definition: 'Total population served by healthcare system, driving overall demand (2025)',                                         higherIsBetter: null,  format: v => `${v.toLocaleString()} ppl`, values: [685000, 298000, 155000, 158000, 76500] },
        { label: 'ER Visits/Capita',   predicted: true,  definition: 'Emergency room visits per resident per year. Lower = better preventive care and access (2025)',                       higherIsBetter: false, format: v => v.toFixed(2),       values: [0.55,  0.60,  0.63,  0.45,  0.32 ] },
        { label: 'Population Aged 65+',predicted: true,  definition: '% of population aged 65+. Higher means greater per-capita healthcare demand (2025)',                                 higherIsBetter: null,  format: v => `${v}%`,            values: [19.0,  18.2,  21.0,  16.8,  25.0 ] }
      ]
    },
    {
      key: 'healthcare_access',
      label: 'Healthcare — Access',
      metrics: [
        { label: 'Wait Time (weeks)',    predicted: true,  definition: 'Average specialist wait time in weeks. Lower is better (2025)',                                                     higherIsBetter: false, format: v => `${v} wks`,  values: [19.0, 19.2, 20.0, 17.8, 23.0] },
        { label: 'Service Avail. Score',predicted: true,  definition: 'Composite score (0–10) rating geographic and temporal availability of healthcare services (2025)',                   higherIsBetter: true,  format: v => `${v}/10`,   values: [7.6,  8.2,  7.2,  8.6,  4.9 ] },
        { label: 'Family Doctor Access',predicted: true,  definition: '% of residents with an attached family doctor or primary care provider (2025)',                                     higherIsBetter: true,  format: v => `${v}%`,     values: [89.5, 88.8, 87.8, 91.5, 83.0] }
      ]
    },
    {
      key: 'healthcare_workforce',
      label: 'Healthcare — Workforce',
      metrics: [
        { label: 'Physicians per 1,000',      predicted: true, definition: 'Registered physicians per 1,000 residents. Declining region-wide (2025)',                                      higherIsBetter: true,  format: v => v.toFixed(2), values: [1.72, 1.98, 1.30, 2.30, 0.70] },
        { label: 'Nurses per 1,000',          predicted: true, definition: 'Registered nurses per 1,000 residents (2025)',                                                                 higherIsBetter: true,  format: v => v.toFixed(1), values: [6.1,  7.2,  4.8,  8.5,  3.2 ] },
        { label: 'Health Workers per 1,000',  predicted: true, definition: 'All regulated healthcare workers per 1,000 residents (2025)',                                                  higherIsBetter: true,  format: v => v.toFixed(1), values: [11.8, 13.5, 9.2,  15.2, 6.5 ] }
      ]
    },
    {
      key: 'healthcare_outcomes',
      label: 'Healthcare — Outcomes',
      metrics: [
        { label: 'Life Expectancy',        predicted: false, definition: 'Average life expectancy at birth in years (2025 estimate)',                                                       higherIsBetter: true,  format: v => `${v} yrs`,   values: [83.3, 83.4, 82.7, 84.0, 82.5]   },
        { label: 'Prev. Hospitalizations', predicted: true,  definition: 'Preventable hospitalizations per capita per year. Lower = better preventive care (2025)',                        higherIsBetter: false, format: v => v.toFixed(3), values: [0.024, 0.026, 0.031, 0.018, 0.033] },
        { label: 'Health Outcomes Score',  predicted: true,  definition: 'Composite score (0–10) rating population health outcomes across multiple indicators (2025)',                      higherIsBetter: true,  format: v => `${v}/10`,    values: [8.2,  8.3,  7.6,  8.9,  6.5]   }
      ]
    },

    // ── Employment ────────────────────────────────────────────────────────────
    {
      key: 'employment_supply',
      label: 'Employment — Supply',
      metrics: [
        { label: 'Total Jobs',      predicted: true, definition: 'Total number of jobs located in the municipality (workplace count, 2025)',           higherIsBetter: true,  format: v => `${v.toLocaleString()} jobs`, values: [375000, 146200, 111000, 99200, 18700] },
        { label: 'Job Growth Rate', predicted: true, definition: 'Year-over-year percentage change in total municipal jobs (2025)',                    higherIsBetter: true,  format: v => `${v}%`,            values: [2.7,   2.4,   2.9,   2.8,  3.3  ] }
      ]
    },
    {
      key: 'employment_workforce',
      label: 'Employment — Workforce',
      metrics: [
        { label: 'Labour Force Participation', predicted: true, definition: '% of working-age population employed or actively seeking work (2025)',    higherIsBetter: true,  format: v => `${v}%`,  values: [69.3, 68.8, 68.0, 71.2, 66.2] },
        { label: 'Unemployment Rate',          predicted: true, definition: '% of labour force without a job and actively looking. Lower is better (2025)', higherIsBetter: false, format: v => `${v}%`,  values: [7.6,  7.8,  8.2,  7.2,  7.1 ] }
      ]
    },
    {
      key: 'employment_income',
      label: 'Employment — Income',
      metrics: [
        { label: 'Median Household Income', predicted: true, definition: 'Median annual household income in Canadian dollars (2025)',                  higherIsBetter: true,  format: v => `$${v.toLocaleString()}`, values: [106000, 105000, 101000, 113000, 93650] },
        { label: 'Wage Growth',             predicted: true, definition: 'Year-over-year percentage change in average wages (2025)',                   higherIsBetter: true,  format: v => `${v}%`,                  values: [3.0,   3.5,   2.8,   2.6,  3.2  ] },
        { label: 'Income Inequality',       predicted: true, definition: 'Gini coefficient ×100. Lower = more equal income distribution (2025)',       higherIsBetter: false, format: v => v.toFixed(1),             values: [13.7,  14.0,  15.2,  12.3, 15.0 ] }
      ]
    },
    {
      key: 'employment_industry',
      label: 'Employment — Industry',
      metrics: [
        { label: 'Sector Diversity Score', predicted: true, definition: 'Economic sector diversification score (0–1). Higher = more diversified, lower recession risk (2025)', higherIsBetter: true, format: v => v.toFixed(2), values: [0.82, 0.80, 0.78, 0.87, 0.71] }
      ]
    },
    {
      key: 'employment_stability',
      label: 'Employment — Stability',
      metrics: [
        { label: 'Job Retention Rate',      predicted: true, definition: '% of employees who remain with the same employer year-over-year (2025)',     higherIsBetter: true,  format: v => `${v}%`,      values: [86.5, 85.8, 85.0, 88.5, 84.1] },
        { label: 'Layoff Rate',             predicted: true, definition: '% of workforce subject to involuntary job loss during the year (2025)',       higherIsBetter: false, format: v => `${v}%`,      values: [6.1,  6.5,  7.0,  5.5,  5.0 ] },
        { label: 'Economic Resilience',     predicted: true, definition: 'Composite score (0–1) measuring the economy\'s capacity to absorb shocks (2025)', higherIsBetter: true, format: v => v.toFixed(2), values: [0.85, 0.85, 0.82, 0.87, 0.82] }
      ]
    },
    {
      key: 'placemaking_supply',
      label: 'Placemaking — Green & Public Space Supply',
      metrics: [
        { label: 'Parks Area per Capita',       predicted: false, definition: 'Total parkland in hectares divided by population (2025)', higherIsBetter: true,  format: v => `${v.toFixed(2)} ha/cap`, values: [0.75, 0.84, 0.96, 0.79, 1.29]  },
        { label: 'Public Plazas Count',         predicted: false, definition: 'Number of publicly accessible plazas and squares (2025)',  higherIsBetter: true,  format: v => v.toFixed(0),            values: [15,   8,    7,    6,    2]     },
        { label: 'Public Amenities per 1,000',  predicted: false, definition: 'Parks, benches, fountains and similar amenities per 1,000 residents (2025)', higherIsBetter: true, format: v => v.toFixed(2), values: [4.2, 4.7, 5.2, 4.4, 2.85] }
      ]
    },
    {
      key: 'placemaking_accessibility',
      label: 'Placemaking — Accessibility',
      metrics: [
        { label: 'Avg Distance to Nearest Park',    predicted: false, definition: 'Average walking distance in metres to nearest green space (2025)', higherIsBetter: false, format: v => `${v} m`,   values: [380, 340, 300, 410, 597.5]  },
        { label: '% Residents within 400 m Park',   predicted: false, definition: '% of residents living within a 400 m walk of a park (2025)',       higherIsBetter: true,  format: v => `${v}%`,   values: [83, 86, 90, 79, 55.25]     },
        { label: 'Transit Accessibility Score',     predicted: false, definition: 'Composite 0–100 score for transit access to key destinations (2025)', higherIsBetter: true, format: v => `${v} / 100`, values: [78, 82, 88, 75, 58.75]  }
      ]
    },
    {
      key: 'placemaking_vibrancy',
      label: 'Placemaking — Cultural Vibrancy',
      metrics: [
        { label: 'Annual Events Count',        predicted: false, definition: 'Number of public events and festivals held annually (2025)',            higherIsBetter: true, format: v => v.toFixed(0),                    values: [72, 40, 34, 24, 9]          },
        { label: 'Annual Event Attendance',    predicted: false, definition: 'Total attendees across all public events per year (2025)',             higherIsBetter: true, format: v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v.toFixed(0), values: [465000, 238000, 175000, 148000, 26500] },
        { label: 'Business Activity Index',    predicted: false, definition: 'Composite 0–100 score for retail, dining and commercial vitality (2025)', higherIsBetter: true, format: v => `${v} / 100`,                  values: [82, 84, 87, 80, 67.75]      }
      ]
    },
    {
      key: 'placemaking_livability',
      label: 'Placemaking — Livability & Safety',
      metrics: [
        { label: 'Safety Score',                   predicted: false, definition: 'Composite 0–100 score based on crime rates and perceptions of safety (2025)', higherIsBetter: true,  format: v => `${v} / 100`,        values: [75, 73, 79, 77, 81.5]   },
        { label: 'Cleanliness & Maintenance Index', predicted: false, definition: 'Composite 0–100 score for public space cleanliness and upkeep (2025)',         higherIsBetter: true,  format: v => `${v} / 100`,        values: [76, 77, 81, 78, 79.75]  },
        { label: 'Noise Complaint Index',           predicted: false, definition: 'Composite 0–100 score based on noise complaint density (lower is better, 2025)', higherIsBetter: false, format: v => `${v} / 100`,      values: [40, 43, 37, 41, 33]     }
      ]
    },
    {
      key: 'placemaking_community',
      label: 'Placemaking — Community Engagement',
      metrics: [
        { label: 'Community Events Participation', predicted: false, definition: '% of residents who participated in at least one community event (2025)', higherIsBetter: true, format: v => `${v}%`,    values: [55, 53, 59, 51, 46.5]   },
        { label: 'Local Programs Availability',    predicted: false, definition: 'Number of municipality-run recreational and social programs (2025)',     higherIsBetter: true, format: v => v.toFixed(0), values: [195, 138, 162, 120, 59]  },
        { label: 'Volunteer Engagement Rate',      predicted: false, definition: '% of residents engaged in formal volunteer activities (2025)',           higherIsBetter: true, format: v => `${v}%`,    values: [31, 29, 35, 27, 24.25]  }
      ]
    }

  ]
};
