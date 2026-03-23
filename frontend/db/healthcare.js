// Healthcare category database
// Source: datasets/research/03_Healthcare.json
// "Waterloo Region" entry provides region-level aggregates.
// "Rural Townships" covers the 4 townships (Other Municipalities).
// All values marked predicted:true are estimates unless noted.

const healthcareDB = {
  label: 'Healthcare',
  pillars: {

    capacity: {
      label: 'Pillar 1: Capacity',
      metrics: [
        {
          id: 'hospitals_per_capita',
          label: 'Hospitals per 1,000 Residents (2025)',
          display: '0.0044',
          unit: 'per 1,000',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 0.0044 (unchanged) · Target: 0.006 by 2050 · Waterloo highest at 0.0064 · Rural townships: 0.000'
        },
        {
          id: 'beds_per_capita',
          label: 'Hospital Beds per 1,000 Residents (2025)',
          display: '1.42',
          unit: 'per 1,000',
          status: 'in_progress',
          predicted: true,
          note: '2024: 1.40 · Target: 1.80 by 2030 · Waterloo: 2.30 · Kitchener: 2.10 · Cambridge: 1.35 · Rural: 0.00'
        },
        {
          id: 'clinics_per_capita',
          label: 'Clinics per 1,000 Residents (2025)',
          display: '0.17',
          unit: 'per 1,000',
          status: 'in_progress',
          predicted: true,
          note: '2024: 0.17 · Target: 0.25 by 2050 · Kitchener leads at 0.26 · Cambridge lowest at 0.14'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Hospital Beds & Clinics per 1,000 (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Beds per 1,000',    color: '#4facfe', data: [1.35, 1.36, 1.38, 1.39, 1.40, 1.42] },
            { label: 'Clinics per 1,000', color: '#3fb950', data: [0.14, 0.15, 0.15, 0.16, 0.17, 0.17] }
          ]
        },
        {
          title: 'Hospital Beds per 1,000 by Municipality (2020–2025)',
          yLabel: 'Beds per 1,000 Residents',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Waterloo',             color: '#4facfe', data: [2.15, 2.18, 2.20, 2.22, 2.25, 2.30] },
            { label: 'Kitchener',            color: '#3fb950', data: [1.95, 1.97, 1.98, 2.00, 2.05, 2.10] },
            { label: 'Cambridge',            color: '#f0883e', data: [1.10, 1.12, 1.15, 1.18, 1.20, 1.35] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00] }
          ]
        }
      ]
    },

    demand: {
      label: 'Pillar 2: Demand',
      metrics: [
        {
          id: 'population_served',
          label: 'Population (2025)',
          display: '685,000',
          unit: 'residents',
          status: 'in_progress',
          predicted: true,
          note: '2024: 678,170 · Kitchener: 298,000 · Waterloo: 158,000 · Cambridge: 155,000 · Rural: 76,500'
        },
        {
          id: 'er_visits_per_capita',
          label: 'ER Visits per Capita (2025)',
          display: '0.55',
          unit: 'visits/person/yr',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 0.52 · Cambridge highest at 0.63 · Waterloo lowest at 0.45 · Target: ≤0.50 by 2050'
        },
        {
          id: 'aging_65plus',
          label: 'Population Aged 65+ (2025)',
          display: '19.0%',
          unit: '% of residents',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 18.5% · Target: 22% by 2030 · Cambridge: 21.0% · Waterloo: 16.8% · Rural townships: 25.0%'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — ER Visits per Capita & Population 65+ (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'ER Visits per Capita',  color: '#f85149', data: [0.48, 0.38, 0.42, 0.50, 0.52, 0.55] },
            { label: 'Population Aged 65+ (%)', color: '#f0883e', data: [17.5, 17.8, 18.0, 18.3, 18.7, 19.0] }
          ]
        },
        {
          title: 'ER Visits per Capita by Municipality (2020–2025)',
          yLabel: 'ER Visits per Capita',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Cambridge',            color: '#f0883e', data: [0.52, 0.44, 0.48, 0.55, 0.60, 0.63] },
            { label: 'Kitchener',            color: '#4facfe', data: [0.48, 0.40, 0.45, 0.52, 0.58, 0.60] },
            { label: 'Waterloo',             color: '#3fb950', data: [0.35, 0.30, 0.33, 0.38, 0.42, 0.45] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [0.28, 0.22, 0.25, 0.29, 0.30, 0.32] }
          ]
        }
      ]
    },

    access: {
      label: 'Pillar 3: Access',
      metrics: [
        {
          id: 'wait_times',
          label: 'Specialist Wait Time (2025)',
          display: '19.0 wks',
          unit: 'weeks',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 19.2 wks · Target: 17 by 2030 · Waterloo best at 17.8 · Rural worst at 23.0 · Cambridge: 20.0'
        },
        {
          id: 'family_doctor_access',
          label: 'Population with a Family Doctor (2025)',
          display: '89.5%',
          unit: '% of residents',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 90.0% · Declining region-wide · Waterloo highest: 91.5% · Rural: 83.0% · Target: 95% by 2050'
        },
        {
          id: 'service_availability',
          label: 'Service Availability Score (2025)',
          display: '7.6 / 10',
          unit: 'score',
          status: 'in_progress',
          predicted: true,
          note: '2024: 7.5 · Waterloo leads at 8.6 · Cambridge: 7.2 · Rural: 4.9 · Target: 9.0 by 2050'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Wait Times & Family Doctor Access (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Specialist Wait Time (weeks)', color: '#f85149', data: [18.5, 20.2, 19.8, 19.5, 19.2, 19.0] },
            { label: 'Population with Family Dr. (%)', color: '#3fb950', data: [92.0, 91.5, 91.0, 90.5, 90.0, 89.5] }
          ]
        },
        {
          title: 'Specialist Wait Time by Municipality (2020–2025, weeks)',
          yLabel: 'Wait Time (weeks)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Cambridge',            color: '#f0883e', data: [19.5, 21.2, 20.8, 20.5, 20.2, 20.0] },
            { label: 'Kitchener',            color: '#4facfe', data: [18.8, 20.5, 20.0, 19.8, 19.5, 19.2] },
            { label: 'Waterloo',             color: '#3fb950', data: [17.5, 19.0, 18.5, 18.2, 18.0, 17.8] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [22.0, 24.0, 23.5, 23.2, 23.1, 23.0] }
          ]
        }
      ]
    },

    workforce: {
      label: 'Pillar 4: Workforce',
      metrics: [
        {
          id: 'doctors_per_1k',
          label: 'Physicians per 1,000 Residents (2025)',
          display: '1.72',
          unit: 'per 1,000',
          status: 'needs_attention',
          predicted: true,
          note: '2024: 1.75 · Declining region-wide · Waterloo highest: 2.30 · Rural: 0.70 · Ontario avg: ~2.2'
        },
        {
          id: 'nurses_per_1k',
          label: 'Nurses per 1,000 Residents (2025)',
          display: '6.1',
          unit: 'per 1,000',
          status: 'in_progress',
          predicted: true,
          note: '2024: 6.0 · Waterloo highest: 8.5 · Cambridge: 4.8 · Rural: 3.2 · Target: 8.5 by 2030'
        },
        {
          id: 'healthcare_workers_per_1k',
          label: 'Healthcare Workers per 1,000 Residents (2025)',
          display: '11.8',
          unit: 'per 1,000',
          status: 'in_progress',
          predicted: true,
          note: '2024: 11.6 · Waterloo: 15.2 · Kitchener: 13.5 · Cambridge: 9.2 · Rural: 6.5 · Target: 15 by 2030'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Healthcare Workforce per 1,000 (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Physicians per 1,000',      color: '#4facfe', data: [1.85, 1.82, 1.80, 1.78, 1.75, 1.72] },
            { label: 'Nurses per 1,000',          color: '#3fb950', data: [5.8,  5.9,  6.0,  6.0,  6.0,  6.1]  },
            { label: 'Health Workers per 1,000',  color: '#f0883e', data: [11.0, 11.2, 11.4, 11.5, 11.6, 11.8]  }
          ]
        },
        {
          title: 'Physicians per 1,000 Residents by Municipality (2020–2025)',
          yLabel: 'Physicians per 1,000',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Waterloo',             color: '#4facfe', data: [2.45, 2.42, 2.38, 2.35, 2.32, 2.30] },
            { label: 'Kitchener',            color: '#3fb950', data: [2.10, 2.08, 2.05, 2.02, 2.00, 1.98] },
            { label: 'Cambridge',            color: '#f0883e', data: [1.45, 1.42, 1.38, 1.35, 1.32, 1.30] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [0.75, 0.74, 0.73, 0.72, 0.71, 0.70] }
          ]
        }
      ]
    },

    outcomes: {
      label: 'Pillar 5: Outcomes',
      metrics: [
        {
          id: 'life_expectancy',
          label: 'Life Expectancy (2025)',
          display: '83.3 yrs',
          unit: 'years',
          status: 'on_track',
          predicted: false,
          note: '2024: 83.2 · Waterloo highest: 84.0 · Kitchener: 83.4 · Cambridge: 82.7 · Rural: 82.5 · Target: 85.5 by 2050'
        },
        {
          id: 'preventable_hospitalizations',
          label: 'Preventable Hospitalizations per Capita (2025)',
          display: '0.024',
          unit: 'per capita/yr',
          status: 'in_progress',
          predicted: true,
          note: '2024: 0.025 · Waterloo best at 0.018 · Cambridge: 0.031 · Rural: 0.033 · Target: 0.018 by 2030'
        },
        {
          id: 'health_outcomes_score',
          label: 'Health Outcomes Score (2025)',
          display: '8.2 / 10',
          unit: 'score',
          status: 'in_progress',
          predicted: true,
          note: '2024: 8.1 · Waterloo leads at 8.9 · Kitchener: 8.3 · Cambridge: 7.6 · Rural: 6.5 · Target: 9.2 by 2050'
        }
      ],
      charts: [
        {
          title: 'Waterloo Region — Health Outcomes (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Life Expectancy (years)',          color: '#4facfe', data: [83.0, 82.7, 83.1, 83.2, 83.2, 83.3] },
            { label: 'Health Outcomes Score (0–10)',     color: '#3fb950', data: [7.8,  7.6,  7.9,  8.0,  8.1,  8.2]  },
            { label: 'Prev. Hospitalizations (×100)',    color: '#f85149', data: [2.8,  2.7,  2.6,  2.5,  2.5,  2.4]  }
          ]
        },
        {
          title: 'Life Expectancy by Municipality (2020–2025, years)',
          yLabel: 'Life Expectancy (years)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Waterloo',             color: '#4facfe', data: [83.5, 83.2, 83.6, 83.8, 83.9, 84.0] },
            { label: 'Kitchener',            color: '#3fb950', data: [82.9, 82.6, 83.0, 83.2, 83.3, 83.4] },
            { label: 'Cambridge',            color: '#f0883e', data: [82.2, 81.9, 82.3, 82.5, 82.6, 82.7] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [82.0, 81.8, 82.1, 82.3, 82.4, 82.5] }
          ]
        }
      ]
    }

  }
};

// Per-city healthcare metrics for map.js
// "Other Municipalities" covers all 4 rural townships (avg of Rural Townships entry).
const healthcareCityMetrics = [
  {
    name: 'Kitchener',
    // 2025 projected
    hospitalsPer1k2025: 0.0034, bedsPer1k2025: 2.10, clinicsPer1k2025: 0.26,
    erVisits2025: 0.60, aging65Plus2025: 18.2,
    waitTimes2025: 19.2, familyDrAccess2025: 88.8, serviceAvail2025: 8.2,
    doctorsPer1k2025: 1.98, nursesPer1k2025: 7.2, healthWorkersPer1k2025: 13.5,
    lifeExpectancy2025: 83.4, prevHosp2025: 0.026, healthScore2025: 8.3,
    // 2024 actual/estimated
    hospitalsPer1k2024: 0.0034, bedsPer1k2024: 2.05, clinicsPer1k2024: 0.25,
    erVisits2024: 0.58, aging65Plus2024: 17.8,
    waitTimes2024: 19.5, familyDrAccess2024: 89.2, serviceAvail2024: 8.1,
    doctorsPer1k2024: 2.00, nursesPer1k2024: 7.1, healthWorkersPer1k2024: 13.2,
    lifeExpectancy2024: 83.3, prevHosp2024: 0.027, healthScore2024: 8.2,
    // 2023 actual (interpolated: 2024 value minus 2024→2025 delta)
    hospitalsPer1k2023: 0.0034, bedsPer1k2023: 2.00, clinicsPer1k2023: 0.24,
    erVisits2023: 0.56, aging65Plus2023: 17.4,
    waitTimes2023: 19.8, familyDrAccess2023: 89.6, serviceAvail2023: 8.0,
    doctorsPer1k2023: 2.02, nursesPer1k2023: 7.0, healthWorkersPer1k2023: 12.9,
    lifeExpectancy2023: 83.2, prevHosp2023: 0.028, healthScore2023: 8.1
  },
  {
    name: 'Cambridge',
    hospitalsPer1k2025: 0.0065, bedsPer1k2025: 1.35, clinicsPer1k2025: 0.14,
    erVisits2025: 0.63, aging65Plus2025: 21.0,
    waitTimes2025: 20.0, familyDrAccess2025: 87.8, serviceAvail2025: 7.2,
    doctorsPer1k2025: 1.30, nursesPer1k2025: 4.8, healthWorkersPer1k2025: 9.2,
    lifeExpectancy2025: 82.7, prevHosp2025: 0.031, healthScore2025: 7.6,
    hospitalsPer1k2024: 0.0065, bedsPer1k2024: 1.20, clinicsPer1k2024: 0.14,
    erVisits2024: 0.60, aging65Plus2024: 20.5,
    waitTimes2024: 20.2, familyDrAccess2024: 88.2, serviceAvail2024: 7.1,
    doctorsPer1k2024: 1.32, nursesPer1k2024: 4.7, healthWorkersPer1k2024: 9.0,
    lifeExpectancy2024: 82.6, prevHosp2024: 0.032, healthScore2024: 7.5,
    // 2023 actual (interpolated)
    hospitalsPer1k2023: 0.0065, bedsPer1k2023: 1.05, clinicsPer1k2023: 0.14,
    erVisits2023: 0.57, aging65Plus2023: 20.0,
    waitTimes2023: 20.4, familyDrAccess2023: 88.6, serviceAvail2023: 7.0,
    doctorsPer1k2023: 1.34, nursesPer1k2023: 4.6, healthWorkersPer1k2023: 8.8,
    lifeExpectancy2023: 82.5, prevHosp2023: 0.033, healthScore2023: 7.4
  },
  {
    name: 'Waterloo',
    hospitalsPer1k2025: 0.0064, bedsPer1k2025: 2.30, clinicsPer1k2025: 0.22,
    erVisits2025: 0.45, aging65Plus2025: 16.8,
    waitTimes2025: 17.8, familyDrAccess2025: 91.5, serviceAvail2025: 8.6,
    doctorsPer1k2025: 2.30, nursesPer1k2025: 8.5, healthWorkersPer1k2025: 15.2,
    lifeExpectancy2025: 84.0, prevHosp2025: 0.018, healthScore2025: 8.9,
    hospitalsPer1k2024: 0.0064, bedsPer1k2024: 2.25, clinicsPer1k2024: 0.21,
    erVisits2024: 0.42, aging65Plus2024: 16.2,
    waitTimes2024: 18.0, familyDrAccess2024: 91.8, serviceAvail2024: 8.5,
    doctorsPer1k2024: 2.32, nursesPer1k2024: 8.3, healthWorkersPer1k2024: 15.0,
    lifeExpectancy2024: 83.9, prevHosp2024: 0.019, healthScore2024: 8.8,
    // 2023 actual (interpolated)
    hospitalsPer1k2023: 0.0064, bedsPer1k2023: 2.20, clinicsPer1k2023: 0.20,
    erVisits2023: 0.39, aging65Plus2023: 15.6,
    waitTimes2023: 18.2, familyDrAccess2023: 92.1, serviceAvail2023: 8.4,
    doctorsPer1k2023: 2.34, nursesPer1k2023: 8.1, healthWorkersPer1k2023: 14.8,
    lifeExpectancy2023: 83.8, prevHosp2023: 0.020, healthScore2023: 8.7
  },
  {
    // One entry covers all 4 townships (Rural Townships aggregate from JSON)
    name: 'Other Municipalities',
    hospitalsPer1k2025: 0.0000, bedsPer1k2025: 0.00, clinicsPer1k2025: 0.06,
    erVisits2025: 0.32, aging65Plus2025: 25.0,
    waitTimes2025: 23.0, familyDrAccess2025: 83.0, serviceAvail2025: 4.9,
    doctorsPer1k2025: 0.70, nursesPer1k2025: 3.2, healthWorkersPer1k2025: 6.5,
    lifeExpectancy2025: 82.5, prevHosp2025: 0.033, healthScore2025: 6.5,
    hospitalsPer1k2024: 0.0000, bedsPer1k2024: 0.00, clinicsPer1k2024: 0.06,
    erVisits2024: 0.30, aging65Plus2024: 24.5,
    waitTimes2024: 23.2, familyDrAccess2024: 83.5, serviceAvail2024: 4.8,
    doctorsPer1k2024: 0.72, nursesPer1k2024: 3.1, healthWorkersPer1k2024: 6.2,
    lifeExpectancy2024: 82.3, prevHosp2024: 0.034, healthScore2024: 6.4,
    // 2023 actual (interpolated)
    hospitalsPer1k2023: 0.0000, bedsPer1k2023: 0.00, clinicsPer1k2023: 0.05,
    erVisits2023: 0.28, aging65Plus2023: 24.0,
    waitTimes2023: 23.4, familyDrAccess2023: 84.0, serviceAvail2023: 4.7,
    doctorsPer1k2023: 0.74, nursesPer1k2023: 3.0, healthWorkersPer1k2023: 6.0,
    lifeExpectancy2023: 82.1, prevHosp2023: 0.035, healthScore2023: 6.3
  }
];

// Regional aggregate healthcare metrics for map sidebar
const healthcareRegionMetrics = {
  // 2025
  hospitalsPer1k2025: 0.0044, bedsPer1k2025: 1.42, clinicsPer1k2025: 0.17,
  erVisits2025: 0.55, aging65Plus2025: 19.0,
  waitTimes2025: 19.0, familyDrAccess2025: 89.5, serviceAvail2025: 7.6,
  doctorsPer1k2025: 1.72, nursesPer1k2025: 6.1, healthWorkersPer1k2025: 11.8,
  lifeExpectancy2025: 83.3, prevHosp2025: 0.024, healthScore2025: 8.2,
  // 2024
  hospitalsPer1k2024: 0.0044, bedsPer1k2024: 1.40, clinicsPer1k2024: 0.17,
  erVisits2024: 0.52, aging65Plus2024: 18.5,
  waitTimes2024: 19.2, familyDrAccess2024: 90.0, serviceAvail2024: 7.5,
  doctorsPer1k2024: 1.75, nursesPer1k2024: 6.0, healthWorkersPer1k2024: 11.6,
  lifeExpectancy2024: 83.2, prevHosp2024: 0.025, healthScore2024: 8.1,
  // 2023 actual (from 03_Healthcare.json)
  hospitalsPer1k2023: 0.0044, bedsPer1k2023: 1.35, clinicsPer1k2023: 0.16,
  erVisits2023: 0.48, aging65Plus2023: 18.0,
  waitTimes2023: 19.5, familyDrAccess2023: 90.2, serviceAvail2023: 7.3,
  doctorsPer1k2023: 1.78, nursesPer1k2023: 5.9, healthWorkersPer1k2023: 11.4,
  lifeExpectancy2023: 83.1, prevHosp2023: 0.026, healthScore2023: 8.0
};
