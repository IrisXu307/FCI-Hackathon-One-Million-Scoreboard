// Employment database
// Auto-generated from datasets/research/03_Employment.json
// predicted: false = measured actual; omitted/true = projected estimate

const employmentDB = {
  label: 'Employment',
  pillars: {

    supply: {
      label: 'Pillar 1: Supply',
      metrics: [
        {
          id: 'total_jobs',
          label: 'Total Jobs (2025)',
          display: '383,500',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'job_growth',
          label: 'Job Growth (2025)',
          display: '4.5%',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Waterloo Region — Pillar 1: Supply (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Total Jobs', color: '#4facfe', data: [306200, 320400, 335200, 350500, 366800, 383500] },
            { label: 'Job Growth', color: '#3fb950', data: [-3.2, 4.6, 4.6, 4.6, 4.6, 4.5] },
          ]
        },
        {
          title: 'Total Jobs by Municipality (2020–2025)',
          yLabel: 'Total Jobs',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [126700, 130500, 134400, 138500, 142800, 147200] },
            { label: 'Cambridge', color: '#f0883e', data: [95300, 98200, 101300, 104500, 107900, 111500] },
            { label: 'Waterloo', color: '#4facfe', data: [85200, 87800, 90500, 93400, 96500, 99800] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [15700, 16230, 16770, 17310, 17850, 18400] },
          ]
        }
      ]
    },

    workforce: {
      label: 'Pillar 2: Workforce',
      metrics: [
        {
          id: 'labor_force_participation',
          label: 'Labor Force Participation (2025)',
          display: '68.5%',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'unemployment_rate',
          label: 'Unemployment Rate (2025)',
          display: '7.5%',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Waterloo Region — Pillar 2: Workforce (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Labor Force Participation', color: '#4facfe', data: [68.7, 69.2, 69.5, 69, 68.8, 68.5] },
            { label: 'Unemployment Rate', color: '#3fb950', data: [9.6, 6.3, 5.7, 6.2, 6.8, 7.5] },
          ]
        },
        {
          title: 'Labor Force Participation by Municipality (2020–2025)',
          yLabel: 'Labor Force Participation',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [68.7, 68.9, 69.5, 69.2, 69, 68.8] },
            { label: 'Cambridge', color: '#f0883e', data: [67.5, 68.1, 68.8, 68.5, 68.2, 67.9] },
            { label: 'Waterloo', color: '#4facfe', data: [71.2, 71.5, 72.1, 71.8, 71.5, 71.2] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [66.0, 66.5, 66.92, 66.65, 66.28, 66.0] },
          ]
        }
      ]
    },

    income: {
      label: 'Pillar 3: Income',
      metrics: [
        {
          id: 'median_income',
          label: 'Median Income (2025)',
          display: '111,500',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'wage_growth',
          label: 'Wage Growth (2025)',
          display: '4',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'income_inequality',
          label: 'Income Inequality (2025)',
          display: '13.3',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Waterloo Region — Pillar 3: Income (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Median Income', color: '#4facfe', data: [92000, 95500, 99200, 103000, 107200, 111500] },
            { label: 'Wage Growth', color: '#3fb950', data: [-1.2, 3.8, 3.9, 3.8, 4, 4] },
            { label: 'Income Inequality', color: '#f0883e', data: [14.8, 14.5, 14.2, 13.9, 13.6, 13.3] },
          ]
        },
        {
          title: 'Median Income by Municipality (2020–2025)',
          yLabel: 'Median Income',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [92000, 94500, 97200, 99800, 102500, 105000] },
            { label: 'Cambridge', color: '#f0883e', data: [88500, 91200, 94100, 97200, 100500, 103900] },
            { label: 'Waterloo', color: '#4facfe', data: [98500, 101200, 104100, 107000, 110200, 113000] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [351500, 362400, 374000, 386200, 399300, 413200] },
          ]
        }
      ]
    },

    industry: {
      label: 'Pillar 4: Industry',
      metrics: [
        {
          id: 'sector_diversity',
          label: 'Sector Diversity (2025)',
          display: '0.83',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'tech_employment',
          label: 'Tech Employment (2025)',
          display: '51,200',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'manufacturing_employment',
          label: 'Manufacturing Employment (2025)',
          display: '78,900',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Waterloo Region — Pillar 4: Industry (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Sector Diversity', color: '#4facfe', data: [0.78, 0.79, 0.8, 0.81, 0.82, 0.83] },
            { label: 'Tech Employment', color: '#3fb950', data: [28500, 32200, 36800, 41600, 46500, 51200] },
            { label: 'Manufacturing Employment', color: '#f0883e', data: [68500, 70200, 72100, 74200, 76500, 78900] },
          ]
        },
        {
          title: 'Sector Diversity by Municipality (2020–2025)',
          yLabel: 'Sector Diversity',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [0.75, 0.76, 0.77, 0.78, 0.79, 0.8] },
            { label: 'Cambridge', color: '#f0883e', data: [0.71, 0.72, 0.73, 0.74, 0.75, 0.76] },
            { label: 'Waterloo', color: '#4facfe', data: [0.82, 0.83, 0.84, 0.85, 0.86, 0.87] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [0.67, 0.68, 0.69, 0.7, 0.71, 0.72] },
          ]
        }
      ]
    },

    stability: {
      label: 'Pillar 5: Stability',
      metrics: [
        {
          id: 'job_retention',
          label: 'Job Retention (2025)',
          display: '87.8%',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'layoffs',
          label: 'Layoffs (2025)',
          display: '6',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'economic_resilience',
          label: 'Economic Resilience (2025)',
          display: '0.86',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Waterloo Region — Pillar 5: Stability (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Job Retention', color: '#4facfe', data: [84.2, 87.1, 88.9, 89.8, 88.5, 87.8] },
            { label: 'Layoffs', color: '#3fb950', data: [11.8, 7.9, 5.8, 5.4, 7.2, 6] },
            { label: 'Economic Resilience', color: '#f0883e', data: [0.7, 0.84, 0.9, 0.92, 0.89, 0.86] },
          ]
        },
        {
          title: 'Job Retention by Municipality (2020–2025)',
          yLabel: 'Job Retention',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [82.5, 85.2, 87.1, 88.5, 87.2, 85.8] },
            { label: 'Cambridge', color: '#f0883e', data: [81.2, 84.5, 86.8, 88.2, 86.5, 85.2] },
            { label: 'Waterloo', color: '#4facfe', data: [85.2, 88.1, 89.8, 90.5, 89.2, 88.5] },
            { label: 'Other Municipalities', color: '#9e9ac8', data: [78.83, 81.92, 84.25, 85.75, 83.8, 82.58] },
          ]
        }
      ]
    }

  }
};

// Per-city Employment metrics for map.js overlay
const employmentCityMetrics = [
  {
    name: 'Kitchener',
    totalJobs2020: 126700, jobGrowth2020: -2.1, lfp2020: 68.7, unemp2020: 9.6, income2020: 92000, wageGrowth2020: -1.2, inequality2020: 15.5, diversity2020: 0.75, techEmployment2020: 15200, manufacturingEmployment2020: 32500, retention2020: 82.5, layoffs2020: 12.8, resilience2020: 0.68,  // 2020
    totalJobs2021: 130500, jobGrowth2021: 3, lfp2021: 68.9, unemp2021: 6.3, income2021: 94500, wageGrowth2021: 2.7, inequality2021: 15.2, diversity2021: 0.76, techEmployment2021: 17100, manufacturingEmployment2021: 33200, retention2021: 85.2, layoffs2021: 8.4, resilience2021: 0.82,  // 2021
    totalJobs2022: 134400, jobGrowth2022: 3, lfp2022: 69.5, unemp2022: 5.7, income2022: 97200, wageGrowth2022: 4.1, inequality2022: 14.8, diversity2022: 0.77, techEmployment2022: 19500, manufacturingEmployment2022: 34100, retention2022: 87.1, layoffs2022: 6.2, resilience2022: 0.89,  // 2022
    totalJobs2023: 138500, jobGrowth2023: 3.1, lfp2023: 69.2, unemp2023: 6.1, income2023: 99800, wageGrowth2023: 2.7, inequality2023: 14.5, diversity2023: 0.78, techEmployment2023: 22200, manufacturingEmployment2023: 35100, retention2023: 88.5, layoffs2023: 5.8, resilience2023: 0.92,  // 2023
    totalJobs2024: 142800, jobGrowth2024: 3.1, lfp2024: 69, unemp2024: 6.5, income2024: 102500, wageGrowth2024: 3.5, inequality2024: 14.2, diversity2024: 0.79, techEmployment2024: 25000, manufacturingEmployment2024: 36200, retention2024: 87.2, layoffs2024: 7.8, resilience2024: 0.88,  // 2024
    totalJobs2025: 147200, jobGrowth2025: 3.1, lfp2025: 68.8, unemp2025: 7.8, income2025: 105000, wageGrowth2025: 3.5, inequality2025: 14, diversity2025: 0.8, techEmployment2025: 27800, manufacturingEmployment2025: 37400, retention2025: 85.8, layoffs2025: 6.5, resilience2025: 0.85,  // 2025
  },
  {
    name: 'Cambridge',
    totalJobs2020: 95300, jobGrowth2020: -2.5, lfp2020: 67.5, unemp2020: 10.2, income2020: 88500, wageGrowth2020: -1.5, inequality2020: 16.2, diversity2020: 0.71, techEmployment2020: 5800, manufacturingEmployment2020: 20800, retention2020: 81.2, layoffs2020: 13.5, resilience2020: 0.65,  // 2020
    totalJobs2021: 98200, jobGrowth2021: 3, lfp2021: 68.1, unemp2021: 6.8, income2021: 91200, wageGrowth2021: 3.1, inequality2021: 15.8, diversity2021: 0.72, techEmployment2021: 6500, manufacturingEmployment2021: 21600, retention2021: 84.5, layoffs2021: 9.2, resilience2021: 0.79,  // 2021
    totalJobs2022: 101300, jobGrowth2022: 3.2, lfp2022: 68.8, unemp2022: 6.2, income2022: 94100, wageGrowth2022: 3.2, inequality2022: 15.4, diversity2022: 0.73, techEmployment2022: 7400, manufacturingEmployment2022: 22500, retention2022: 86.8, layoffs2022: 6.8, resilience2022: 0.86,  // 2022
    totalJobs2023: 104500, jobGrowth2023: 3.2, lfp2023: 68.5, unemp2023: 6.5, income2023: 97200, wageGrowth2023: 3.3, inequality2023: 15, diversity2023: 0.74, techEmployment2023: 8400, manufacturingEmployment2023: 23400, retention2023: 88.2, layoffs2023: 6.2, resilience2023: 0.89,  // 2023
    totalJobs2024: 107900, jobGrowth2024: 3.3, lfp2024: 68.2, unemp2024: 7, income2024: 100500, wageGrowth2024: 3.4, inequality2024: 14.6, diversity2024: 0.75, techEmployment2024: 9500, manufacturingEmployment2024: 24400, retention2024: 86.5, layoffs2024: 8.5, resilience2024: 0.85,  // 2024
    totalJobs2025: 111500, jobGrowth2025: 3.3, lfp2025: 67.9, unemp2025: 8.2, income2025: 103900, wageGrowth2025: 3.4, inequality2025: 14.2, diversity2025: 0.76, techEmployment2025: 10800, manufacturingEmployment2025: 25500, retention2025: 85.2, layoffs2025: 7, resilience2025: 0.82,  // 2025
  },
  {
    name: 'Waterloo',
    totalJobs2020: 85200, jobGrowth2020: -1.8, lfp2020: 71.2, unemp2020: 8.2, income2020: 98500, wageGrowth2020: -0.8, inequality2020: 13.8, diversity2020: 0.82, techEmployment2020: 11500, manufacturingEmployment2020: 18200, retention2020: 85.2, layoffs2020: 10.8, resilience2020: 0.72,  // 2020
    totalJobs2021: 87800, jobGrowth2021: 3.1, lfp2021: 71.5, unemp2021: 5.8, income2021: 101200, wageGrowth2021: 2.7, inequality2021: 13.5, diversity2021: 0.83, techEmployment2021: 13200, manufacturingEmployment2021: 18800, retention2021: 88.1, layoffs2021: 7.2, resilience2021: 0.85,  // 2021
    totalJobs2022: 90500, jobGrowth2022: 3.1, lfp2022: 72.1, unemp2022: 5.2, income2022: 104100, wageGrowth2022: 2.9, inequality2022: 13.2, diversity2022: 0.84, techEmployment2022: 15100, manufacturingEmployment2022: 19500, retention2022: 89.8, layoffs2022: 5.1, resilience2022: 0.91,  // 2022
    totalJobs2023: 93400, jobGrowth2023: 3.2, lfp2023: 71.8, unemp2023: 5.6, income2023: 107000, wageGrowth2023: 2.8, inequality2023: 12.9, diversity2023: 0.85, techEmployment2023: 17300, manufacturingEmployment2023: 20300, retention2023: 90.5, layoffs2023: 4.8, resilience2023: 0.93,  // 2023
    totalJobs2024: 96500, jobGrowth2024: 3.3, lfp2024: 71.5, unemp2024: 6, income2024: 110200, wageGrowth2024: 3, inequality2024: 12.6, diversity2024: 0.86, techEmployment2024: 19800, manufacturingEmployment2024: 21200, retention2024: 89.2, layoffs2024: 6.8, resilience2024: 0.9,  // 2024
    totalJobs2025: 99800, jobGrowth2025: 3.4, lfp2025: 71.2, unemp2025: 7.2, income2025: 113000, wageGrowth2025: 2.6, inequality2025: 12.3, diversity2025: 0.87, techEmployment2025: 22600, manufacturingEmployment2025: 22100, retention2025: 88.5, layoffs2025: 5.5, resilience2025: 0.87,  // 2025
  },
  {
    // Aggregate of North Dumfries, Wellesley, Wilmot, Woolwich
    name: 'Other Municipalities',
    totalJobs2020: 15700, jobGrowth2020: -1.68, lfp2020: 66.0, unemp2020: 11.0, income2020: 351500, wageGrowth2020: -0.97, inequality2020: 16.43, diversity2020: 0.67, techEmployment2020: 257.5, manufacturingEmployment2020: 4700, retention2020: 78.83, layoffs2020: 15.07, resilience2020: 0.59,  // 2020
    totalJobs2021: 16230, jobGrowth2021: 3.38, lfp2021: 66.5, unemp2021: 7.28, income2021: 362400, wageGrowth2021: 3.08, inequality2021: 15.93, diversity2021: 0.68, techEmployment2021: 292.5, manufacturingEmployment2021: 4880, retention2021: 81.92, layoffs2021: 10.5, resilience2021: 0.73,  // 2021
    totalJobs2022: 16770, jobGrowth2022: 3.28, lfp2022: 66.92, unemp2022: 6.58, income2022: 374000, wageGrowth2022: 3.2, inequality2022: 15.43, diversity2022: 0.69, techEmployment2022: 330.0, manufacturingEmployment2022: 5060, retention2022: 84.25, layoffs2022: 7.7, resilience2022: 0.8,  // 2022
    totalJobs2023: 17310, jobGrowth2023: 3.17, lfp2023: 66.65, unemp2023: 6.95, income2023: 386200, wageGrowth2023: 3.27, inequality2023: 14.93, diversity2023: 0.7, techEmployment2023: 367.5, manufacturingEmployment2023: 5240, retention2023: 85.75, layoffs2023: 7.08, resilience2023: 0.83,  // 2023
    totalJobs2024: 17850, jobGrowth2024: 3.1, lfp2024: 66.28, unemp2024: 7.58, income2024: 399300, wageGrowth2024: 3.38, inequality2024: 14.43, diversity2024: 0.71, techEmployment2024: 407.5, manufacturingEmployment2024: 5420, retention2024: 83.8, layoffs2024: 9.65, resilience2024: 0.8,  // 2024
    totalJobs2025: 18400, jobGrowth2025: 3.05, lfp2025: 66.0, unemp2025: 8.85, income2025: 413200, wageGrowth2025: 3.45, inequality2025: 13.93, diversity2025: 0.72, techEmployment2025: 447.5, manufacturingEmployment2025: 5600, retention2025: 82.58, layoffs2025: 8.0, resilience2025: 0.77,  // 2025
  }
];

// Region-level Employment metrics for map sidebar
const employmentRegionMetrics = {
  totalJobs2020: 306200, jobGrowth2020: -3.2, lfp2020: 68.7, unemp2020: 9.6, income2020: 92000, wageGrowth2020: -1.2, inequality2020: 14.8, diversity2020: 0.78, techEmployment2020: 28500, manufacturingEmployment2020: 68500, retention2020: 84.2, layoffs2020: 11.8, resilience2020: 0.7,  // 2020
  totalJobs2021: 320400, jobGrowth2021: 4.6, lfp2021: 69.2, unemp2021: 6.3, income2021: 95500, wageGrowth2021: 3.8, inequality2021: 14.5, diversity2021: 0.79, techEmployment2021: 32200, manufacturingEmployment2021: 70200, retention2021: 87.1, layoffs2021: 7.9, resilience2021: 0.84,  // 2021
  totalJobs2022: 335200, jobGrowth2022: 4.6, lfp2022: 69.5, unemp2022: 5.7, income2022: 99200, wageGrowth2022: 3.9, inequality2022: 14.2, diversity2022: 0.8, techEmployment2022: 36800, manufacturingEmployment2022: 72100, retention2022: 88.9, layoffs2022: 5.8, resilience2022: 0.9,  // 2022
  totalJobs2023: 350500, jobGrowth2023: 4.6, lfp2023: 69, unemp2023: 6.2, income2023: 103000, wageGrowth2023: 3.8, inequality2023: 13.9, diversity2023: 0.81, techEmployment2023: 41600, manufacturingEmployment2023: 74200, retention2023: 89.8, layoffs2023: 5.4, resilience2023: 0.92,  // 2023
  totalJobs2024: 366800, jobGrowth2024: 4.6, lfp2024: 68.8, unemp2024: 6.8, income2024: 107200, wageGrowth2024: 4, inequality2024: 13.6, diversity2024: 0.82, techEmployment2024: 46500, manufacturingEmployment2024: 76500, retention2024: 88.5, layoffs2024: 7.2, resilience2024: 0.89,  // 2024
  totalJobs2025: 383500, jobGrowth2025: 4.5, lfp2025: 68.5, unemp2025: 7.5, income2025: 111500, wageGrowth2025: 4, inequality2025: 13.3, diversity2025: 0.83, techEmployment2025: 51200, manufacturingEmployment2025: 78900, retention2025: 87.8, layoffs2025: 6, resilience2025: 0.86,  // 2025
};
