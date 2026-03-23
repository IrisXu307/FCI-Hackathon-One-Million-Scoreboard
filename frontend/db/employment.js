// Employment database
// Auto-generated from datasets/research/Employment.json
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
          display: '383,500*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'job_growth',
          label: 'Job Growth (2025)',
          display: '4.5%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 1: Supply (2020–2025)',
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
            { label: 'Waterloo', color: '#f0883e', data: [85200, 87800, 90500, 93400, 96500, 99800] },
            { label: 'Cambridge', color: '#4facfe', data: [95300, 98200, 101300, 104500, 107900, 111500] },
            { label: 'North Dumfries', color: '#e3b341', data: [3200, 3300, 3400, 3500, 3600, 3700] },
            { label: 'Wellesley', color: '#d2a8ff', data: [2800, 2900, 3000, 3100, 3200, 3300] },
            { label: 'Wilmot', color: '#79c0ff', data: [4500, 4650, 4800, 4950, 5100, 5250] },
            { label: 'Woolwich', color: '#56d364', data: [5200, 5380, 5570, 5760, 5950, 6150] },
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
          display: '68.5%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'unemployment_rate',
          label: 'Unemployment Rate (2025)',
          display: '7.5%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 2: Workforce (2020–2025)',
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
            { label: 'Waterloo', color: '#f0883e', data: [71.2, 71.5, 72.1, 71.8, 71.5, 71.2] },
            { label: 'Cambridge', color: '#4facfe', data: [67.5, 68.1, 68.8, 68.5, 68.2, 67.9] },
            { label: 'North Dumfries', color: '#e3b341', data: [65.8, 66.2, 66.5, 66.3, 66, 65.8] },
            { label: 'Wellesley', color: '#d2a8ff', data: [63.5, 64, 64.5, 64.2, 63.8, 63.5] },
            { label: 'Wilmot', color: '#79c0ff', data: [66.2, 66.8, 67.2, 66.9, 66.5, 66.2] },
            { label: 'Woolwich', color: '#56d364', data: [68.5, 69, 69.5, 69.2, 68.8, 68.5] },
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
          display: '111,500*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'wage_growth',
          label: 'Wage Growth (2025)',
          display: '4.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'income_inequality',
          label: 'Income Inequality (2025)',
          display: '13.3%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 3: Income (2020–2025)',
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
            { label: 'Waterloo', color: '#f0883e', data: [98500, 101200, 104100, 107000, 110200, 113000] },
            { label: 'Cambridge', color: '#4facfe', data: [88500, 91200, 94100, 97200, 100500, 103900] },
            { label: 'North Dumfries', color: '#e3b341', data: [85000, 87500, 90200, 93000, 96000, 99200] },
            { label: 'Wellesley', color: '#d2a8ff', data: [82000, 84500, 87200, 90000, 93000, 96200] },
            { label: 'Wilmot', color: '#79c0ff', data: [89500, 92200, 95100, 98200, 101500, 105000] },
            { label: 'Woolwich', color: '#56d364', data: [95000, 98200, 101500, 105000, 108800, 112800] },
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
          display: '0.8%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'tech_employment',
          label: 'Tech Employment (2025)',
          display: '51,200*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'manufacturing_employment',
          label: 'Manufacturing Employment (2025)',
          display: '78,900*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 4: Industry (2020–2025)',
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
            { label: 'Waterloo', color: '#f0883e', data: [0.82, 0.83, 0.84, 0.85, 0.86, 0.87] },
            { label: 'Cambridge', color: '#4facfe', data: [0.71, 0.72, 0.73, 0.74, 0.75, 0.76] },
            { label: 'North Dumfries', color: '#e3b341', data: [0.65, 0.66, 0.67, 0.68, 0.69, 0.7] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0.62, 0.63, 0.64, 0.65, 0.66, 0.67] },
            { label: 'Wilmot', color: '#79c0ff', data: [0.68, 0.69, 0.7, 0.71, 0.72, 0.73] },
            { label: 'Woolwich', color: '#56d364', data: [0.73, 0.74, 0.75, 0.76, 0.77, 0.78] },
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
          display: '87.8%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'layoffs',
          label: 'Layoffs (2025)',
          display: '6.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'economic_resilience',
          label: 'Economic Resilience (2025)',
          display: '0.9%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 5: Stability (2020–2025)',
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
            { label: 'Waterloo', color: '#f0883e', data: [85.2, 88.1, 89.8, 90.5, 89.2, 88.5] },
            { label: 'Cambridge', color: '#4facfe', data: [81.2, 84.5, 86.8, 88.2, 86.5, 85.2] },
            { label: 'North Dumfries', color: '#e3b341', data: [78.5, 81.2, 83.5, 85, 83.2, 82] },
            { label: 'Wellesley', color: '#d2a8ff', data: [76.8, 79.8, 82.2, 83.8, 81.8, 80.5] },
            { label: 'Wilmot', color: '#79c0ff', data: [79.2, 82.5, 84.8, 86.2, 84.2, 83] },
            { label: 'Woolwich', color: '#56d364', data: [80.8, 84.2, 86.5, 88, 86, 84.8] },
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
    name: 'Waterloo',
    totalJobs2020: 85200, jobGrowth2020: -1.8, lfp2020: 71.2, unemp2020: 8.2, income2020: 98500, wageGrowth2020: -0.8, inequality2020: 13.8, diversity2020: 0.82, techEmployment2020: 11500, manufacturingEmployment2020: 18200, retention2020: 85.2, layoffs2020: 10.8, resilience2020: 0.72,  // 2020
    totalJobs2021: 87800, jobGrowth2021: 3.1, lfp2021: 71.5, unemp2021: 5.8, income2021: 101200, wageGrowth2021: 2.7, inequality2021: 13.5, diversity2021: 0.83, techEmployment2021: 13200, manufacturingEmployment2021: 18800, retention2021: 88.1, layoffs2021: 7.2, resilience2021: 0.85,  // 2021
    totalJobs2022: 90500, jobGrowth2022: 3.1, lfp2022: 72.1, unemp2022: 5.2, income2022: 104100, wageGrowth2022: 2.9, inequality2022: 13.2, diversity2022: 0.84, techEmployment2022: 15100, manufacturingEmployment2022: 19500, retention2022: 89.8, layoffs2022: 5.1, resilience2022: 0.91,  // 2022
    totalJobs2023: 93400, jobGrowth2023: 3.2, lfp2023: 71.8, unemp2023: 5.6, income2023: 107000, wageGrowth2023: 2.8, inequality2023: 12.9, diversity2023: 0.85, techEmployment2023: 17300, manufacturingEmployment2023: 20300, retention2023: 90.5, layoffs2023: 4.8, resilience2023: 0.93,  // 2023
    totalJobs2024: 96500, jobGrowth2024: 3.3, lfp2024: 71.5, unemp2024: 6, income2024: 110200, wageGrowth2024: 3, inequality2024: 12.6, diversity2024: 0.86, techEmployment2024: 19800, manufacturingEmployment2024: 21200, retention2024: 89.2, layoffs2024: 6.8, resilience2024: 0.9,  // 2024
    totalJobs2025: 99800, jobGrowth2025: 3.4, lfp2025: 71.2, unemp2025: 7.2, income2025: 113000, wageGrowth2025: 2.6, inequality2025: 12.3, diversity2025: 0.87, techEmployment2025: 22600, manufacturingEmployment2025: 22100, retention2025: 88.5, layoffs2025: 5.5, resilience2025: 0.87,  // 2025
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
    name: 'North Dumfries',
    totalJobs2020: 3200, jobGrowth2020: -1.5, lfp2020: 65.8, unemp2020: 11.2, income2020: 85000, wageGrowth2020: -1.2, inequality2020: 17.5, diversity2020: 0.65, techEmployment2020: 180, manufacturingEmployment2020: 950, retention2020: 78.5, layoffs2020: 15.2, resilience2020: 0.58,  // 2020
    totalJobs2021: 3300, jobGrowth2021: 3.1, lfp2021: 66.2, unemp2021: 7.5, income2021: 87500, wageGrowth2021: 2.9, inequality2021: 17, diversity2021: 0.66, techEmployment2021: 200, manufacturingEmployment2021: 980, retention2021: 81.2, layoffs2021: 10.5, resilience2021: 0.72,  // 2021
    totalJobs2022: 3400, jobGrowth2022: 3, lfp2022: 66.5, unemp2022: 6.8, income2022: 90200, wageGrowth2022: 3.1, inequality2022: 16.5, diversity2022: 0.67, techEmployment2022: 220, manufacturingEmployment2022: 1010, retention2022: 83.5, layoffs2022: 7.8, resilience2022: 0.79,  // 2022
    totalJobs2023: 3500, jobGrowth2023: 2.9, lfp2023: 66.3, unemp2023: 7.2, income2023: 93000, wageGrowth2023: 3.1, inequality2023: 16, diversity2023: 0.68, techEmployment2023: 240, manufacturingEmployment2023: 1040, retention2023: 85, layoffs2023: 7.2, resilience2023: 0.82,  // 2023
    totalJobs2024: 3600, jobGrowth2024: 2.9, lfp2024: 66, unemp2024: 7.8, income2024: 96000, wageGrowth2024: 3.2, inequality2024: 15.5, diversity2024: 0.69, techEmployment2024: 260, manufacturingEmployment2024: 1070, retention2024: 83.2, layoffs2024: 9.8, resilience2024: 0.78,  // 2024
    totalJobs2025: 3700, jobGrowth2025: 2.8, lfp2025: 65.8, unemp2025: 9, income2025: 99200, wageGrowth2025: 3.3, inequality2025: 15, diversity2025: 0.7, techEmployment2025: 280, manufacturingEmployment2025: 1100, retention2025: 82, layoffs2025: 8.2, resilience2025: 0.75,  // 2025
  },
  {
    name: 'Wellesley',
    totalJobs2020: 2800, jobGrowth2020: -1.2, lfp2020: 63.5, unemp2020: 12.5, income2020: 82000, wageGrowth2020: -0.8, inequality2020: 18.2, diversity2020: 0.62, techEmployment2020: 150, manufacturingEmployment2020: 850, retention2020: 76.8, layoffs2020: 16.5, resilience2020: 0.55,  // 2020
    totalJobs2021: 2900, jobGrowth2021: 3.6, lfp2021: 64, unemp2021: 8.2, income2021: 84500, wageGrowth2021: 3, inequality2021: 17.6, diversity2021: 0.63, techEmployment2021: 170, manufacturingEmployment2021: 880, retention2021: 79.8, layoffs2021: 11.8, resilience2021: 0.69,  // 2021
    totalJobs2022: 3000, jobGrowth2022: 3.4, lfp2022: 64.5, unemp2022: 7.5, income2022: 87200, wageGrowth2022: 3.2, inequality2022: 17, diversity2022: 0.64, techEmployment2022: 190, manufacturingEmployment2022: 910, retention2022: 82.2, layoffs2022: 8.5, resilience2022: 0.76,  // 2022
    totalJobs2023: 3100, jobGrowth2023: 3.3, lfp2023: 64.2, unemp2023: 7.8, income2023: 90000, wageGrowth2023: 3.2, inequality2023: 16.4, diversity2023: 0.65, techEmployment2023: 210, manufacturingEmployment2023: 940, retention2023: 83.8, layoffs2023: 7.8, resilience2023: 0.79,  // 2023
    totalJobs2024: 3200, jobGrowth2024: 3.2, lfp2024: 63.8, unemp2024: 8.5, income2024: 93000, wageGrowth2024: 3.3, inequality2024: 15.8, diversity2024: 0.66, techEmployment2024: 230, manufacturingEmployment2024: 970, retention2024: 81.8, layoffs2024: 10.5, resilience2024: 0.75,  // 2024
    totalJobs2025: 3300, jobGrowth2025: 3.1, lfp2025: 63.5, unemp2025: 9.8, income2025: 96200, wageGrowth2025: 3.4, inequality2025: 15.2, diversity2025: 0.67, techEmployment2025: 250, manufacturingEmployment2025: 1000, retention2025: 80.5, layoffs2025: 8.8, resilience2025: 0.72,  // 2025
  },
  {
    name: 'Wilmot',
    totalJobs2020: 4500, jobGrowth2020: -1.8, lfp2020: 66.2, unemp2020: 10.8, income2020: 89500, wageGrowth2020: -1, inequality2020: 15.8, diversity2020: 0.68, techEmployment2020: 280, manufacturingEmployment2020: 1250, retention2020: 79.2, layoffs2020: 14.8, resilience2020: 0.61,  // 2020
    totalJobs2021: 4650, jobGrowth2021: 3.3, lfp2021: 66.8, unemp2021: 7.2, income2021: 92200, wageGrowth2021: 3, inequality2021: 15.3, diversity2021: 0.69, techEmployment2021: 320, manufacturingEmployment2021: 1300, retention2021: 82.5, layoffs2021: 10.2, resilience2021: 0.75,  // 2021
    totalJobs2022: 4800, jobGrowth2022: 3.2, lfp2022: 67.2, unemp2022: 6.5, income2022: 95100, wageGrowth2022: 3.1, inequality2022: 14.8, diversity2022: 0.7, techEmployment2022: 360, manufacturingEmployment2022: 1350, retention2022: 84.8, layoffs2022: 7.5, resilience2022: 0.82,  // 2022
    totalJobs2023: 4950, jobGrowth2023: 3.1, lfp2023: 66.9, unemp2023: 6.9, income2023: 98200, wageGrowth2023: 3.3, inequality2023: 14.3, diversity2023: 0.71, techEmployment2023: 400, manufacturingEmployment2023: 1400, retention2023: 86.2, layoffs2023: 6.9, resilience2023: 0.85,  // 2023
    totalJobs2024: 5100, jobGrowth2024: 3, lfp2024: 66.5, unemp2024: 7.5, income2024: 101500, wageGrowth2024: 3.4, inequality2024: 13.8, diversity2024: 0.72, techEmployment2024: 440, manufacturingEmployment2024: 1450, retention2024: 84.2, layoffs2024: 9.5, resilience2024: 0.81,  // 2024
    totalJobs2025: 5250, jobGrowth2025: 2.9, lfp2025: 66.2, unemp2025: 8.8, income2025: 105000, wageGrowth2025: 3.4, inequality2025: 13.3, diversity2025: 0.73, techEmployment2025: 480, manufacturingEmployment2025: 1500, retention2025: 83, layoffs2025: 7.8, resilience2025: 0.78,  // 2025
  },
  {
    name: 'Woolwich',
    totalJobs2020: 5200, jobGrowth2020: -2.2, lfp2020: 68.5, unemp2020: 9.5, income2020: 95000, wageGrowth2020: -0.9, inequality2020: 14.2, diversity2020: 0.73, techEmployment2020: 420, manufacturingEmployment2020: 1650, retention2020: 80.8, layoffs2020: 13.8, resilience2020: 0.64,  // 2020
    totalJobs2021: 5380, jobGrowth2021: 3.5, lfp2021: 69, unemp2021: 6.2, income2021: 98200, wageGrowth2021: 3.4, inequality2021: 13.8, diversity2021: 0.74, techEmployment2021: 480, manufacturingEmployment2021: 1720, retention2021: 84.2, layoffs2021: 9.5, resilience2021: 0.78,  // 2021
    totalJobs2022: 5570, jobGrowth2022: 3.5, lfp2022: 69.5, unemp2022: 5.5, income2022: 101500, wageGrowth2022: 3.4, inequality2022: 13.4, diversity2022: 0.75, techEmployment2022: 550, manufacturingEmployment2022: 1790, retention2022: 86.5, layoffs2022: 7, resilience2022: 0.85,  // 2022
    totalJobs2023: 5760, jobGrowth2023: 3.4, lfp2023: 69.2, unemp2023: 5.9, income2023: 105000, wageGrowth2023: 3.5, inequality2023: 13, diversity2023: 0.76, techEmployment2023: 620, manufacturingEmployment2023: 1860, retention2023: 88, layoffs2023: 6.4, resilience2023: 0.88,  // 2023
    totalJobs2024: 5950, jobGrowth2024: 3.3, lfp2024: 68.8, unemp2024: 6.5, income2024: 108800, wageGrowth2024: 3.6, inequality2024: 12.6, diversity2024: 0.77, techEmployment2024: 700, manufacturingEmployment2024: 1930, retention2024: 86, layoffs2024: 8.8, resilience2024: 0.84,  // 2024
    totalJobs2025: 6150, jobGrowth2025: 3.4, lfp2025: 68.5, unemp2025: 7.8, income2025: 112800, wageGrowth2025: 3.7, inequality2025: 12.2, diversity2025: 0.78, techEmployment2025: 780, manufacturingEmployment2025: 2000, retention2025: 84.8, layoffs2025: 7.2, resilience2025: 0.81,  // 2025
  },
];

// Region-level Employment metrics for map sidebar (Region of Waterloo)
const employmentRegionMetrics = {
  totalJobs2020: 306200, jobGrowth2020: -3.2, lfp2020: 68.7, unemp2020: 9.6, income2020: 92000, wageGrowth2020: -1.2, inequality2020: 14.8, diversity2020: 0.78, techEmployment2020: 28500, manufacturingEmployment2020: 68500, retention2020: 84.2, layoffs2020: 11.8, resilience2020: 0.7,  // 2020
  totalJobs2021: 320400, jobGrowth2021: 4.6, lfp2021: 69.2, unemp2021: 6.3, income2021: 95500, wageGrowth2021: 3.8, inequality2021: 14.5, diversity2021: 0.79, techEmployment2021: 32200, manufacturingEmployment2021: 70200, retention2021: 87.1, layoffs2021: 7.9, resilience2021: 0.84,  // 2021
  totalJobs2022: 335200, jobGrowth2022: 4.6, lfp2022: 69.5, unemp2022: 5.7, income2022: 99200, wageGrowth2022: 3.9, inequality2022: 14.2, diversity2022: 0.8, techEmployment2022: 36800, manufacturingEmployment2022: 72100, retention2022: 88.9, layoffs2022: 5.8, resilience2022: 0.9,  // 2022
  totalJobs2023: 350500, jobGrowth2023: 4.6, lfp2023: 69, unemp2023: 6.2, income2023: 103000, wageGrowth2023: 3.8, inequality2023: 13.9, diversity2023: 0.81, techEmployment2023: 41600, manufacturingEmployment2023: 74200, retention2023: 89.8, layoffs2023: 5.4, resilience2023: 0.92,  // 2023
  totalJobs2024: 366800, jobGrowth2024: 4.6, lfp2024: 68.8, unemp2024: 6.8, income2024: 107200, wageGrowth2024: 4, inequality2024: 13.6, diversity2024: 0.82, techEmployment2024: 46500, manufacturingEmployment2024: 76500, retention2024: 88.5, layoffs2024: 7.2, resilience2024: 0.89,  // 2024
  totalJobs2025: 383500, jobGrowth2025: 4.5, lfp2025: 68.5, unemp2025: 7.5, income2025: 111500, wageGrowth2025: 4, inequality2025: 13.3, diversity2025: 0.83, techEmployment2025: 51200, manufacturingEmployment2025: 78900, retention2025: 87.8, layoffs2025: 6, resilience2025: 0.86,  // 2025
};
