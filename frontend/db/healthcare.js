// Healthcare database
// Auto-generated from datasets/research/Healthcare.json
// predicted: false = measured actual; omitted/true = projected estimate

const healthcareDB = {
  label: 'Healthcare',
  pillars: {

    capacity: {
      label: 'Pillar 1: Capacity',
      metrics: [
        {
          id: 'hospital_beds_per_1000',
          label: 'Hospital Beds Per 1000 (2025)',
          display: '2.5*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'healthcare_facilities_count',
          label: 'Healthcare Facilities Count (2025)',
          display: '95*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'hospital_investment_millions',
          label: 'Hospital Investment Millions (2025)',
          display: '30*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 1: Capacity (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Hospital Beds Per 1000', color: '#4facfe', data: [2.3, 2.3, 2.3, 2.3, 2.4, 2.5] },
            { label: 'Healthcare Facilities Count', color: '#3fb950', data: [85, 87, 89, 91, 93, 95] },
            { label: 'Hospital Investment Millions', color: '#f0883e', data: [5, 8, 12, 15, 25, 30] },
          ]
        },
        {
          title: 'Hospital Beds Per 1000 by Municipality (2020–2025)',
          yLabel: 'Hospital Beds Per 1000',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [2.4, 2.4, 2.4, 2.5, 2.6, 2.8] },
            { label: 'Waterloo', color: '#f0883e', data: [1.8, 1.8, 1.9, 2, 2.1, 2.5] },
            { label: 'Cambridge', color: '#4facfe', data: [2.1, 2.1, 2.2, 2.3, 2.5, 2.7] },
            { label: 'North Dumfries', color: '#e3b341', data: [0.8, 0.8, 0.9, 0.9, 1, 1.2] },
            { label: 'Wellesley', color: '#d2a8ff', data: [0.5, 0.5, 0.6, 0.6, 0.7, 0.9] },
            { label: 'Wilmot', color: '#79c0ff', data: [0.6, 0.6, 0.7, 0.7, 0.8, 1] },
            { label: 'Woolwich', color: '#56d364', data: [0.4, 0.4, 0.5, 0.5, 0.6, 0.8] },
          ]
        }
      ]
    },

    demand: {
      label: 'Pillar 2: Demand',
      metrics: [
        {
          id: 'population_total',
          label: 'Population Total (2025)',
          display: '695,000*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'seniors_percentage',
          label: 'Seniors Percentage (2025)',
          display: '18.5%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'er_visits_annual',
          label: 'Er Visits Annual (2025)',
          display: '185,000*',
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
            { label: 'Population Total', color: '#4facfe', data: [623930, 614000, 645000, 665000, 678170, 695000] },
            { label: 'Seniors Percentage', color: '#3fb950', data: [14.8, 15.5, 16.2, 17, 17.8, 18.5] },
            { label: 'Er Visits Annual', color: '#f0883e', data: [145000, 135000, 155000, 165000, 175000, 185000] },
          ]
        },
        {
          title: 'Population Total by Municipality (2020–2025)',
          yLabel: 'Population Total',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [256885, 256885, 265000, 275000, 285000, 295000] },
            { label: 'Waterloo', color: '#f0883e', data: [121436, 121436, 125000, 128000, 132000, 136000] },
            { label: 'Cambridge', color: '#4facfe', data: [138479, 138479, 142000, 145000, 148000, 152000] },
            { label: 'North Dumfries', color: '#e3b341', data: [10790, 10790, 11200, 11600, 12000, 12500] },
            { label: 'Wellesley', color: '#d2a8ff', data: [11260, 11260, 11700, 12100, 12500, 13000] },
            { label: 'Wilmot', color: '#79c0ff', data: [21608, 21608, 22500, 23400, 24300, 25200] },
            { label: 'Woolwich', color: '#56d364', data: [26999, 26999, 28000, 29000, 30000, 31000] },
          ]
        }
      ]
    },

    access: {
      label: 'Pillar 3: Access',
      metrics: [
        {
          id: 'residents_without_family_doctor',
          label: 'Residents Without Family Doctor (2025)',
          display: '75,000*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'wait_times_weeks',
          label: 'Wait Times Weeks (2025)',
          display: '19.2*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'home_care_wait_days',
          label: 'Home Care Wait Days (2025)',
          display: '40*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 3: Access (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Residents Without Family Doctor', color: '#4facfe', data: [58100, 61500, 64900, 68000, 72000, 75000] },
            { label: 'Wait Times Weeks', color: '#3fb950', data: [18.5, 21.2, 23.1, 24.8, 23.6, 19.2] },
            { label: 'Home Care Wait Days', color: '#f0883e', data: [28, 32, 35, 38, 42, 40] },
          ]
        },
        {
          title: 'Residents Without Family Doctor by Municipality (2020–2025)',
          yLabel: 'Residents Without Family Doctor',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [28500, 30200, 32000, 34000, 36000, 37500] },
            { label: 'Waterloo', color: '#f0883e', data: [12800, 13500, 14200, 15000, 15800, 16500] },
            { label: 'Cambridge', color: '#4facfe', data: [14780, 15500, 16200, 17000, 17800, 18500] },
            { label: 'North Dumfries', color: '#e3b341', data: [1400, 1500, 1600, 1700, 1800, 1900] },
            { label: 'Wellesley', color: '#d2a8ff', data: [1500, 1600, 1700, 1800, 1900, 2000] },
            { label: 'Wilmot', color: '#79c0ff', data: [2800, 3000, 3200, 3400, 3600, 3800] },
            { label: 'Woolwich', color: '#56d364', data: [3500, 3700, 3900, 4100, 4300, 4500] },
          ]
        }
      ]
    },

    workforce: {
      label: 'Pillar 4: Workforce',
      metrics: [
        {
          id: 'doctors_per_100k',
          label: 'Doctors Per 100K (2025)',
          display: '245*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'nurses_per_1000',
          label: 'Nurses Per 1000 (2025)',
          display: '11.5*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'healthcare_workers_shortage',
          label: 'Healthcare Workers Shortage (2025)',
          display: '1,150*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 4: Workforce (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Doctors Per 100K', color: '#4facfe', data: [230, 235, 238, 240, 241, 245] },
            { label: 'Nurses Per 1000', color: '#3fb950', data: [10.8, 11, 11.1, 11.2, 11.3, 11.5] },
            { label: 'Healthcare Workers Shortage', color: '#f0883e', data: [450, 580, 720, 890, 1030, 1150] },
          ]
        },
        {
          title: 'Doctors Per 100K by Municipality (2020–2025)',
          yLabel: 'Doctors Per 100K',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [245, 248, 250, 252, 254, 258] },
            { label: 'Waterloo', color: '#f0883e', data: [220, 223, 225, 227, 229, 235] },
            { label: 'Cambridge', color: '#4facfe', data: [215, 218, 220, 222, 224, 230] },
            { label: 'North Dumfries', color: '#e3b341', data: [155, 158, 160, 162, 164, 170] },
            { label: 'Wellesley', color: '#d2a8ff', data: [145, 148, 150, 152, 154, 160] },
            { label: 'Wilmot', color: '#79c0ff', data: [165, 168, 170, 172, 174, 180] },
            { label: 'Woolwich', color: '#56d364', data: [170, 173, 175, 177, 179, 185] },
          ]
        }
      ]
    },

    outcomes: {
      label: 'Pillar 5: Outcomes',
      metrics: [
        {
          id: 'life_expectancy_years',
          label: 'Life Expectancy Years (2025)',
          display: '82.8*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'preventable_hospitalizations_rate',
          label: 'Preventable Hospitalizations Rate (2025)',
          display: '335.0%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
        {
          id: 'chronic_disease_burden_percentage',
          label: 'Chronic Disease Burden Percentage (2025)',
          display: '26.2%*',
          unit: '',
          status: 'in_progress',
          predicted: true,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 5: Outcomes (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Life Expectancy Years', color: '#4facfe', data: [82.1, 81.9, 82.3, 82.5, 82.6, 82.8] },
            { label: 'Preventable Hospitalizations Rate', color: '#3fb950', data: [285, 298, 312, 325, 340, 335] },
            { label: 'Chronic Disease Burden Percentage', color: '#f0883e', data: [22.5, 23.2, 24, 24.8, 25.5, 26.2] },
          ]
        },
        {
          title: 'Life Expectancy Years by Municipality (2020–2025)',
          yLabel: 'Life Expectancy Years',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [82.3, 82.1, 82.5, 82.7, 82.8, 83] },
            { label: 'Waterloo', color: '#f0883e', data: [83.2, 83, 83.4, 83.6, 83.7, 83.9] },
            { label: 'Cambridge', color: '#4facfe', data: [81.8, 81.6, 82, 82.2, 82.3, 82.5] },
            { label: 'North Dumfries', color: '#e3b341', data: [81.2, 81, 81.4, 81.6, 81.7, 81.9] },
            { label: 'Wellesley', color: '#d2a8ff', data: [82.5, 82.3, 82.7, 82.9, 83, 83.2] },
            { label: 'Wilmot', color: '#79c0ff', data: [82, 81.8, 82.2, 82.4, 82.5, 82.7] },
            { label: 'Woolwich', color: '#56d364', data: [82.8, 82.6, 83, 83.2, 83.3, 83.5] },
          ]
        }
      ]
    }

  }
};

// Per-city Healthcare metrics for map.js overlay
const healthcareCityMetrics = [
  {
    name: 'Kitchener',
    bedsPer1k2020: 2.4, facilitiesCount2020: 45, hospitalInvestment2020: 3, population2020: 256885, aging65Plus2020: 16.2, erVisits2020: 68000, withoutFamilyDr2020: 28500, waitTimes2020: 17.8, homeCareWait2020: 25, doctorsPer1k2020: 245, nursesPer1k2020: 11.2, workerShortage2020: 185, lifeExpectancy2020: 82.3, prevHosp2020: 275, chronicDisease2020: 23.8,  // 2020
    bedsPer1k2021: 2.4, facilitiesCount2021: 46, hospitalInvestment2021: 5, population2021: 256885, aging65Plus2021: 16.8, erVisits2021: 63000, withoutFamilyDr2021: 30200, waitTimes2021: 20.5, homeCareWait2021: 28, doctorsPer1k2021: 248, nursesPer1k2021: 11.4, workerShortage2021: 225, lifeExpectancy2021: 82.1, prevHosp2021: 288, chronicDisease2021: 24.5,  // 2021
    bedsPer1k2022: 2.4, facilitiesCount2022: 47, hospitalInvestment2022: 8, population2022: 265000, aging65Plus2022: 17.4, erVisits2022: 72000, withoutFamilyDr2022: 32000, waitTimes2022: 22.3, homeCareWait2022: 32, doctorsPer1k2022: 250, nursesPer1k2022: 11.5, workerShortage2022: 280, lifeExpectancy2022: 82.5, prevHosp2022: 302, chronicDisease2022: 25.2,  // 2022
    bedsPer1k2023: 2.5, facilitiesCount2023: 48, hospitalInvestment2023: 10, population2023: 275000, aging65Plus2023: 18, erVisits2023: 76000, withoutFamilyDr2023: 34000, waitTimes2023: 23.9, homeCareWait2023: 35, doctorsPer1k2023: 252, nursesPer1k2023: 11.6, workerShortage2023: 340, lifeExpectancy2023: 82.7, prevHosp2023: 315, chronicDisease2023: 26,  // 2023
    bedsPer1k2024: 2.6, facilitiesCount2024: 49, hospitalInvestment2024: 15, population2024: 285000, aging65Plus2024: 18.6, erVisits2024: 80000, withoutFamilyDr2024: 36000, waitTimes2024: 22.8, homeCareWait2024: 38, doctorsPer1k2024: 254, nursesPer1k2024: 11.7, workerShortage2024: 395, lifeExpectancy2024: 82.8, prevHosp2024: 328, chronicDisease2024: 26.7,  // 2024
    bedsPer1k2025: 2.8, facilitiesCount2025: 52, hospitalInvestment2025: 20, population2025: 295000, aging65Plus2025: 19.2, erVisits2025: 85000, withoutFamilyDr2025: 37500, waitTimes2025: 18.5, homeCareWait2025: 36, doctorsPer1k2025: 258, nursesPer1k2025: 12, workerShortage2025: 425, lifeExpectancy2025: 83, prevHosp2025: 320, chronicDisease2025: 27.4,  // 2025
  },
  {
    name: 'Waterloo',
    bedsPer1k2020: 1.8, facilitiesCount2020: 22, hospitalInvestment2020: 1, population2020: 121436, aging65Plus2020: 12.8, erVisits2020: 28000, withoutFamilyDr2020: 12800, waitTimes2020: 16.5, homeCareWait2020: 22, doctorsPer1k2020: 220, nursesPer1k2020: 10.2, workerShortage2020: 95, lifeExpectancy2020: 83.2, prevHosp2020: 245, chronicDisease2020: 20.5,  // 2020
    bedsPer1k2021: 1.8, facilitiesCount2021: 23, hospitalInvestment2021: 2, population2021: 121436, aging65Plus2021: 13.2, erVisits2021: 26000, withoutFamilyDr2021: 13500, waitTimes2021: 19.2, homeCareWait2021: 25, doctorsPer1k2021: 223, nursesPer1k2021: 10.4, workerShortage2021: 115, lifeExpectancy2021: 83, prevHosp2021: 255, chronicDisease2021: 21,  // 2021
    bedsPer1k2022: 1.9, facilitiesCount2022: 24, hospitalInvestment2022: 3, population2022: 125000, aging65Plus2022: 13.6, erVisits2022: 30000, withoutFamilyDr2022: 14200, waitTimes2022: 21, homeCareWait2022: 28, doctorsPer1k2022: 225, nursesPer1k2022: 10.5, workerShortage2022: 140, lifeExpectancy2022: 83.4, prevHosp2022: 265, chronicDisease2022: 21.5,  // 2022
    bedsPer1k2023: 2, facilitiesCount2023: 25, hospitalInvestment2023: 4, population2023: 128000, aging65Plus2023: 14, erVisits2023: 32000, withoutFamilyDr2023: 15000, waitTimes2023: 22.5, homeCareWait2023: 31, doctorsPer1k2023: 227, nursesPer1k2023: 10.6, workerShortage2023: 165, lifeExpectancy2023: 83.6, prevHosp2023: 275, chronicDisease2023: 22,  // 2023
    bedsPer1k2024: 2.1, facilitiesCount2024: 26, hospitalInvestment2024: 8, population2024: 132000, aging65Plus2024: 14.4, erVisits2024: 34000, withoutFamilyDr2024: 15800, waitTimes2024: 21.8, homeCareWait2024: 34, doctorsPer1k2024: 229, nursesPer1k2024: 10.7, workerShortage2024: 185, lifeExpectancy2024: 83.7, prevHosp2024: 285, chronicDisease2024: 22.5,  // 2024
    bedsPer1k2025: 2.5, facilitiesCount2025: 28, hospitalInvestment2025: 15, population2025: 136000, aging65Plus2025: 14.8, erVisits2025: 36000, withoutFamilyDr2025: 16500, waitTimes2025: 17.8, homeCareWait2025: 32, doctorsPer1k2025: 235, nursesPer1k2025: 11, workerShortage2025: 200, lifeExpectancy2025: 83.9, prevHosp2025: 280, chronicDisease2025: 23,  // 2025
  },
  {
    name: 'Cambridge',
    bedsPer1k2020: 2.1, facilitiesCount2020: 15, hospitalInvestment2020: 1, population2020: 138479, aging65Plus2020: 17.8, erVisits2020: 32000, withoutFamilyDr2020: 14780, waitTimes2020: 19.2, homeCareWait2020: 32, doctorsPer1k2020: 215, nursesPer1k2020: 10.5, workerShortage2020: 115, lifeExpectancy2020: 81.8, prevHosp2020: 295, chronicDisease2020: 24.2,  // 2020
    bedsPer1k2021: 2.1, facilitiesCount2021: 15, hospitalInvestment2021: 1.5, population2021: 138479, aging65Plus2021: 18.3, erVisits2021: 30000, withoutFamilyDr2021: 15500, waitTimes2021: 22, homeCareWait2021: 36, doctorsPer1k2021: 218, nursesPer1k2021: 10.7, workerShortage2021: 140, lifeExpectancy2021: 81.6, prevHosp2021: 308, chronicDisease2021: 24.9,  // 2021
    bedsPer1k2022: 2.2, facilitiesCount2022: 16, hospitalInvestment2022: 2, population2022: 142000, aging65Plus2022: 18.8, erVisits2022: 34000, withoutFamilyDr2022: 16200, waitTimes2022: 24.1, homeCareWait2022: 40, doctorsPer1k2022: 220, nursesPer1k2022: 10.8, workerShortage2022: 170, lifeExpectancy2022: 82, prevHosp2022: 322, chronicDisease2022: 25.6,  // 2022
    bedsPer1k2023: 2.3, facilitiesCount2023: 16, hospitalInvestment2023: 2.5, population2023: 145000, aging65Plus2023: 19.3, erVisits2023: 36000, withoutFamilyDr2023: 17000, waitTimes2023: 25.8, homeCareWait2023: 44, doctorsPer1k2023: 222, nursesPer1k2023: 10.9, workerShortage2023: 205, lifeExpectancy2023: 82.2, prevHosp2023: 335, chronicDisease2023: 26.3,  // 2023
    bedsPer1k2024: 2.5, facilitiesCount2024: 17, hospitalInvestment2024: 11.2, population2024: 148000, aging65Plus2024: 19.8, erVisits2024: 38000, withoutFamilyDr2024: 17800, waitTimes2024: 24.9, homeCareWait2024: 48, doctorsPer1k2024: 224, nursesPer1k2024: 11, workerShortage2024: 235, lifeExpectancy2024: 82.3, prevHosp2024: 348, chronicDisease2024: 27,  // 2024
    bedsPer1k2025: 2.7, facilitiesCount2025: 18, hospitalInvestment2025: 15, population2025: 152000, aging65Plus2025: 20.3, erVisits2025: 40000, withoutFamilyDr2025: 18500, waitTimes2025: 20.2, homeCareWait2025: 45, doctorsPer1k2025: 230, nursesPer1k2025: 11.3, workerShortage2025: 255, lifeExpectancy2025: 82.5, prevHosp2025: 340, chronicDisease2025: 27.7,  // 2025
  },
  {
    name: 'North Dumfries',
    bedsPer1k2020: 0.8, facilitiesCount2020: 2, hospitalInvestment2020: 0.1, population2020: 10790, aging65Plus2020: 19.5, erVisits2020: 2400, withoutFamilyDr2020: 1400, waitTimes2020: 22.5, homeCareWait2020: 45, doctorsPer1k2020: 155, nursesPer1k2020: 6.8, workerShortage2020: 15, lifeExpectancy2020: 81.2, prevHosp2020: 320, chronicDisease2020: 26.8,  // 2020
    bedsPer1k2021: 0.8, facilitiesCount2021: 2, hospitalInvestment2021: 0.2, population2021: 10790, aging65Plus2021: 20, erVisits2021: 2200, withoutFamilyDr2021: 1500, waitTimes2021: 25.8, homeCareWait2021: 50, doctorsPer1k2021: 158, nursesPer1k2021: 7, workerShortage2021: 18, lifeExpectancy2021: 81, prevHosp2021: 335, chronicDisease2021: 27.6,  // 2021
    bedsPer1k2022: 0.9, facilitiesCount2022: 2, hospitalInvestment2022: 0.3, population2022: 11200, aging65Plus2022: 20.5, erVisits2022: 2600, withoutFamilyDr2022: 1600, waitTimes2022: 28.2, homeCareWait2022: 55, doctorsPer1k2022: 160, nursesPer1k2022: 7.1, workerShortage2022: 22, lifeExpectancy2022: 81.4, prevHosp2022: 350, chronicDisease2022: 28.4,  // 2022
    bedsPer1k2023: 0.9, facilitiesCount2023: 3, hospitalInvestment2023: 0.4, population2023: 11600, aging65Plus2023: 21, erVisits2023: 2800, withoutFamilyDr2023: 1700, waitTimes2023: 30.1, homeCareWait2023: 60, doctorsPer1k2023: 162, nursesPer1k2023: 7.2, workerShortage2023: 26, lifeExpectancy2023: 81.6, prevHosp2023: 365, chronicDisease2023: 29.2,  // 2023
    bedsPer1k2024: 1, facilitiesCount2024: 3, hospitalInvestment2024: 0.5, population2024: 12000, aging65Plus2024: 21.5, erVisits2024: 3000, withoutFamilyDr2024: 1800, waitTimes2024: 29, homeCareWait2024: 65, doctorsPer1k2024: 164, nursesPer1k2024: 7.3, workerShortage2024: 30, lifeExpectancy2024: 81.7, prevHosp2024: 380, chronicDisease2024: 30,  // 2024
    bedsPer1k2025: 1.2, facilitiesCount2025: 4, hospitalInvestment2025: 0.8, population2025: 12500, aging65Plus2025: 22, erVisits2025: 3200, withoutFamilyDr2025: 1900, waitTimes2025: 24.5, homeCareWait2025: 62, doctorsPer1k2025: 170, nursesPer1k2025: 7.6, workerShortage2025: 33, lifeExpectancy2025: 81.9, prevHosp2025: 370, chronicDisease2025: 30.8,  // 2025
  },
  {
    name: 'Wellesley',
    bedsPer1k2020: 0.5, facilitiesCount2020: 1, hospitalInvestment2020: 0.05, population2020: 11260, aging65Plus2020: 18.2, withoutFamilyDr2020: 1500, waitTimes2020: 24, homeCareWait2020: 50, doctorsPer1k2020: 145, nursesPer1k2020: 6.2, workerShortage2020: 12, lifeExpectancy2020: 82.5, prevHosp2020: 280, chronicDisease2020: 24.5,  // 2020
    bedsPer1k2021: 0.5, facilitiesCount2021: 1, hospitalInvestment2021: 0.1, population2021: 11260, aging65Plus2021: 18.7, erVisits2021: 2000, withoutFamilyDr2021: 1600, waitTimes2021: 27.5, homeCareWait2021: 55, doctorsPer1k2021: 148, nursesPer1k2021: 6.4, workerShortage2021: 15, lifeExpectancy2021: 82.3, prevHosp2021: 292, chronicDisease2021: 25.2,  // 2021
    bedsPer1k2022: 0.6, facilitiesCount2022: 1, hospitalInvestment2022: 0.15, population2022: 11700, aging65Plus2022: 19.2, erVisits2022: 2400, withoutFamilyDr2022: 1700, waitTimes2022: 30, homeCareWait2022: 60, doctorsPer1k2022: 150, nursesPer1k2022: 6.5, workerShortage2022: 18, lifeExpectancy2022: 82.7, prevHosp2022: 305, chronicDisease2022: 25.9,  // 2022
    bedsPer1k2023: 0.6, facilitiesCount2023: 2, hospitalInvestment2023: 0.2, population2023: 12100, aging65Plus2023: 19.7, erVisits2023: 2600, withoutFamilyDr2023: 1800, waitTimes2023: 32.1, homeCareWait2023: 65, doctorsPer1k2023: 152, nursesPer1k2023: 6.6, workerShortage2023: 22, lifeExpectancy2023: 82.9, prevHosp2023: 317, chronicDisease2023: 26.6,  // 2023
    bedsPer1k2024: 0.7, facilitiesCount2024: 2, hospitalInvestment2024: 0.25, population2024: 12500, aging65Plus2024: 20.2, erVisits2024: 2800, withoutFamilyDr2024: 1900, waitTimes2024: 31, homeCareWait2024: 70, doctorsPer1k2024: 154, nursesPer1k2024: 6.7, workerShortage2024: 25, lifeExpectancy2024: 83, prevHosp2024: 330, chronicDisease2024: 27.3,  // 2024
    bedsPer1k2025: 0.9, facilitiesCount2025: 3, hospitalInvestment2025: 0.4, population2025: 13000, aging65Plus2025: 20.7, erVisits2025: 3000, withoutFamilyDr2025: 2000, waitTimes2025: 26, homeCareWait2025: 67, doctorsPer1k2025: 160, nursesPer1k2025: 7, workerShortage2025: 28, lifeExpectancy2025: 83.2, prevHosp2025: 322, chronicDisease2025: 28,  // 2025
  },
  {
    name: 'Wilmot',
    bedsPer1k2020: 0.6, facilitiesCount2020: 2, hospitalInvestment2020: 0.08, population2020: 21608, aging65Plus2020: 16.8, erVisits2020: 4800, withoutFamilyDr2020: 2800, waitTimes2020: 21.2, homeCareWait2020: 38, doctorsPer1k2020: 165, nursesPer1k2020: 7.5, workerShortage2020: 22, lifeExpectancy2020: 82, prevHosp2020: 300, chronicDisease2020: 23.8,  // 2020
    bedsPer1k2021: 0.6, facilitiesCount2021: 2, hospitalInvestment2021: 0.12, population2021: 21608, aging65Plus2021: 17.3, erVisits2021: 4400, withoutFamilyDr2021: 3000, waitTimes2021: 24.3, homeCareWait2021: 42, doctorsPer1k2021: 168, nursesPer1k2021: 7.7, workerShortage2021: 27, lifeExpectancy2021: 81.8, prevHosp2021: 313, chronicDisease2021: 24.5,  // 2021
    bedsPer1k2022: 0.7, facilitiesCount2022: 2, hospitalInvestment2022: 0.18, population2022: 22500, aging65Plus2022: 17.8, erVisits2022: 5200, withoutFamilyDr2022: 3200, waitTimes2022: 26.5, homeCareWait2022: 46, doctorsPer1k2022: 170, nursesPer1k2022: 7.8, workerShortage2022: 33, lifeExpectancy2022: 82.2, prevHosp2022: 327, chronicDisease2022: 25.2,  // 2022
    bedsPer1k2023: 0.7, facilitiesCount2023: 2, hospitalInvestment2023: 0.25, population2023: 23400, aging65Plus2023: 18.3, erVisits2023: 5600, withoutFamilyDr2023: 3400, waitTimes2023: 28.4, homeCareWait2023: 50, doctorsPer1k2023: 172, nursesPer1k2023: 7.9, workerShortage2023: 39, lifeExpectancy2023: 82.4, prevHosp2023: 340, chronicDisease2023: 25.9,  // 2023
    bedsPer1k2024: 0.8, facilitiesCount2024: 3, hospitalInvestment2024: 0.3, population2024: 24300, aging65Plus2024: 18.8, erVisits2024: 6000, withoutFamilyDr2024: 3600, waitTimes2024: 27.5, homeCareWait2024: 54, doctorsPer1k2024: 174, nursesPer1k2024: 8, workerShortage2024: 45, lifeExpectancy2024: 82.5, prevHosp2024: 354, chronicDisease2024: 26.6,  // 2024
    bedsPer1k2025: 1, facilitiesCount2025: 3, hospitalInvestment2025: 0.5, population2025: 25200, aging65Plus2025: 19.3, erVisits2025: 6400, withoutFamilyDr2025: 3800, waitTimes2025: 23, homeCareWait2025: 52, doctorsPer1k2025: 180, nursesPer1k2025: 8.3, workerShortage2025: 50, lifeExpectancy2025: 82.7, prevHosp2025: 345, chronicDisease2025: 27.3,  // 2025
  },
  {
    name: 'Woolwich',
    bedsPer1k2020: 0.4, facilitiesCount2020: 1, hospitalInvestment2020: 0.03, population2020: 26999, aging65Plus2020: 15.2, erVisits2020: 6000, withoutFamilyDr2020: 3500, waitTimes2020: 20.8, homeCareWait2020: 35, doctorsPer1k2020: 170, nursesPer1k2020: 8, workerShortage2020: 28, lifeExpectancy2020: 82.8, prevHosp2020: 270, chronicDisease2020: 22,  // 2020
    bedsPer1k2021: 0.4, facilitiesCount2021: 1, hospitalInvestment2021: 0.05, population2021: 26999, aging65Plus2021: 15.7, erVisits2021: 5500, withoutFamilyDr2021: 3700, waitTimes2021: 23.8, homeCareWait2021: 39, doctorsPer1k2021: 173, nursesPer1k2021: 8.2, workerShortage2021: 34, lifeExpectancy2021: 82.6, prevHosp2021: 282, chronicDisease2021: 22.6,  // 2021
    bedsPer1k2022: 0.5, facilitiesCount2022: 2, hospitalInvestment2022: 0.08, population2022: 28000, aging65Plus2022: 16.2, erVisits2022: 6500, withoutFamilyDr2022: 3900, waitTimes2022: 26, homeCareWait2022: 43, doctorsPer1k2022: 175, nursesPer1k2022: 8.3, workerShortage2022: 41, lifeExpectancy2022: 83, prevHosp2022: 295, chronicDisease2022: 23.2,  // 2022
    bedsPer1k2023: 0.5, facilitiesCount2023: 2, hospitalInvestment2023: 0.12, population2023: 29000, aging65Plus2023: 16.7, erVisits2023: 7000, withoutFamilyDr2023: 4100, waitTimes2023: 27.9, homeCareWait2023: 47, doctorsPer1k2023: 177, nursesPer1k2023: 8.4, workerShortage2023: 49, lifeExpectancy2023: 83.2, prevHosp2023: 307, chronicDisease2023: 23.8,  // 2023
    bedsPer1k2024: 0.6, facilitiesCount2024: 2, hospitalInvestment2024: 0.15, population2024: 30000, aging65Plus2024: 17.2, erVisits2024: 7500, withoutFamilyDr2024: 4300, waitTimes2024: 27, homeCareWait2024: 51, doctorsPer1k2024: 179, nursesPer1k2024: 8.5, workerShortage2024: 56, lifeExpectancy2024: 83.3, prevHosp2024: 320, chronicDisease2024: 24.4,  // 2024
    bedsPer1k2025: 0.8, facilitiesCount2025: 3, hospitalInvestment2025: 0.3, population2025: 31000, aging65Plus2025: 17.7, erVisits2025: 8000, withoutFamilyDr2025: 4500, waitTimes2025: 22.5, homeCareWait2025: 49, doctorsPer1k2025: 185, nursesPer1k2025: 8.8, workerShortage2025: 62, lifeExpectancy2025: 83.5, prevHosp2025: 312, chronicDisease2025: 25,  // 2025
  },
];

// Region-level Healthcare metrics for map sidebar (Region of Waterloo)
const healthcareRegionMetrics = {
  bedsPer1k2020: 2.3, facilitiesCount2020: 85, hospitalInvestment2020: 5, population2020: 623930, aging65Plus2020: 14.8, erVisits2020: 145000, withoutFamilyDr2020: 58100, waitTimes2020: 18.5, homeCareWait2020: 28, doctorsPer1k2020: 230, nursesPer1k2020: 10.8, workerShortage2020: 450, lifeExpectancy2020: 82.1, prevHosp2020: 285, chronicDisease2020: 22.5,  // 2020
  bedsPer1k2021: 2.3, facilitiesCount2021: 87, hospitalInvestment2021: 8, population2021: 614000, aging65Plus2021: 15.5, erVisits2021: 135000, withoutFamilyDr2021: 61500, waitTimes2021: 21.2, homeCareWait2021: 32, doctorsPer1k2021: 235, nursesPer1k2021: 11, workerShortage2021: 580, lifeExpectancy2021: 81.9, prevHosp2021: 298, chronicDisease2021: 23.2,  // 2021
  bedsPer1k2022: 2.3, facilitiesCount2022: 89, hospitalInvestment2022: 12, population2022: 645000, aging65Plus2022: 16.2, erVisits2022: 155000, withoutFamilyDr2022: 64900, waitTimes2022: 23.1, homeCareWait2022: 35, doctorsPer1k2022: 238, nursesPer1k2022: 11.1, workerShortage2022: 720, lifeExpectancy2022: 82.3, prevHosp2022: 312, chronicDisease2022: 24,  // 2022
  bedsPer1k2023: 2.3, facilitiesCount2023: 91, hospitalInvestment2023: 15, population2023: 665000, aging65Plus2023: 17, erVisits2023: 165000, withoutFamilyDr2023: 68000, waitTimes2023: 24.8, homeCareWait2023: 38, doctorsPer1k2023: 240, nursesPer1k2023: 11.2, workerShortage2023: 890, lifeExpectancy2023: 82.5, prevHosp2023: 325, chronicDisease2023: 24.8,  // 2023
  bedsPer1k2024: 2.4, facilitiesCount2024: 93, hospitalInvestment2024: 25, population2024: 678170, aging65Plus2024: 17.8, erVisits2024: 175000, withoutFamilyDr2024: 72000, waitTimes2024: 23.6, homeCareWait2024: 42, doctorsPer1k2024: 241, nursesPer1k2024: 11.3, workerShortage2024: 1030, lifeExpectancy2024: 82.6, prevHosp2024: 340, chronicDisease2024: 25.5,  // 2024
  bedsPer1k2025: 2.5, facilitiesCount2025: 95, hospitalInvestment2025: 30, population2025: 695000, aging65Plus2025: 18.5, erVisits2025: 185000, withoutFamilyDr2025: 75000, waitTimes2025: 19.2, homeCareWait2025: 40, doctorsPer1k2025: 245, nursesPer1k2025: 11.5, workerShortage2025: 1150, lifeExpectancy2025: 82.8, prevHosp2025: 335, chronicDisease2025: 26.2,  // 2025
};
