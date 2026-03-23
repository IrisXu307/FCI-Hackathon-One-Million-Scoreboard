// PlaceMaking database
// Auto-generated from datasets/research/PlaceMaking.json
// predicted: false = measured actual; omitted/true = projected estimate

const placemakingDB = {
  label: 'PlaceMaking',
  pillars: {

    supply: {
      label: 'Pillar 1: Supply',
      metrics: [
        {
          id: 'parks_hectares_per_capita',
          label: 'Parks Hectares Per Capita (2025)',
          display: '0.75',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'public_plazas_count',
          label: 'Public Plazas Count (2025)',
          display: '15',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'public_amenities_per_1000',
          label: 'Public Amenities Per 1000 (2025)',
          display: '4.2',
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
            { label: 'Parks Hectares Per Capita', color: '#4facfe', data: [0.65, 0.67, 0.7, 0.72, 0.74, 0.75] },
            { label: 'Public Plazas Count', color: '#3fb950', data: [8, 9, 10, 12, 14, 15] },
            { label: 'Public Amenities Per 1000', color: '#f0883e', data: [3.2, 3.4, 3.6, 3.8, 4, 4.2] },
          ]
        },
        {
          title: 'Parks Hectares Per Capita by Municipality (2020–2025)',
          yLabel: 'Parks Hectares Per Capita',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [0.73, 0.75, 0.78, 0.8, 0.82, 0.84] },
            { label: 'Waterloo', color: '#f0883e', data: [0.82, 0.85, 0.88, 0.91, 0.93, 0.96] },
            { label: 'Cambridge', color: '#4facfe', data: [0.68, 0.7, 0.73, 0.75, 0.77, 0.79] },
            { label: 'North Dumfries', color: '#e3b341', data: [1.15, 1.18, 1.22, 1.25, 1.28, 1.32] },
            { label: 'Wellesley', color: '#d2a8ff', data: [1.08, 1.11, 1.15, 1.18, 1.21, 1.24] },
            { label: 'Wilmot', color: '#79c0ff', data: [1.22, 1.25, 1.29, 1.32, 1.35, 1.38] },
            { label: 'Woolwich', color: '#56d364', data: [1.05, 1.08, 1.12, 1.15, 1.18, 1.21] },
          ]
        }
      ]
    },

    accessibility: {
      label: 'Pillar 2: Accessibility',
      metrics: [
        {
          id: 'average_distance_parks_meters',
          label: 'Average Distance Parks Meters (2025)',
          display: '380',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'percent_within_400m_park',
          label: 'Percent Within 400M Park (2025)',
          display: '83.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'transit_accessibility_score',
          label: 'Transit Accessibility Score (2025)',
          display: '78.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 2: Accessibility (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Average Distance Parks Meters', color: '#4facfe', data: [420, 410, 400, 390, 385, 380] },
            { label: 'Percent Within 400M Park', color: '#3fb950', data: [74, 76, 78, 80, 82, 83] },
            { label: 'Transit Accessibility Score', color: '#f0883e', data: [67, 70, 72, 74, 76, 78] },
          ]
        },
        {
          title: 'Average Distance Parks Meters by Municipality (2020–2025)',
          yLabel: 'Average Distance Parks Meters',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [380, 370, 360, 350, 345, 340] },
            { label: 'Waterloo', color: '#f0883e', data: [340, 330, 320, 310, 305, 300] },
            { label: 'Cambridge', color: '#4facfe', data: [450, 440, 430, 420, 415, 410] },
            { label: 'North Dumfries', color: '#e3b341', data: [650, 640, 630, 620, 615, 610] },
            { label: 'Wellesley', color: '#d2a8ff', data: [620, 610, 600, 590, 585, 580] },
            { label: 'Wilmot', color: '#79c0ff', data: [680, 670, 660, 650, 645, 640] },
            { label: 'Woolwich', color: '#56d364', data: [600, 590, 580, 570, 565, 560] },
          ]
        }
      ]
    },

    vibrancy: {
      label: 'Pillar 3: Vibrancy',
      metrics: [
        {
          id: 'annual_events_count',
          label: 'Annual Events Count (2025)',
          display: '72',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'event_attendance_annual',
          label: 'Event Attendance Annual (2025)',
          display: '465,000',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'business_activity_index',
          label: 'Business Activity Index (2025)',
          display: '82.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 3: Vibrancy (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Annual Events Count', color: '#4facfe', data: [42, 38, 52, 58, 65, 72] },
            { label: 'Event Attendance Annual', color: '#3fb950', data: [285000, 198000, 325000, 385000, 420000, 465000] },
            { label: 'Business Activity Index', color: '#f0883e', data: [68, 64, 72, 76, 80, 82] },
          ]
        },
        {
          title: 'Annual Events Count by Municipality (2020–2025)',
          yLabel: 'Annual Events Count',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [24, 18, 28, 32, 36, 40] },
            { label: 'Waterloo', color: '#f0883e', data: [18, 14, 22, 26, 30, 34] },
            { label: 'Cambridge', color: '#4facfe', data: [12, 10, 15, 18, 21, 24] },
            { label: 'North Dumfries', color: '#e3b341', data: [4, 3, 5, 6, 7, 8] },
            { label: 'Wellesley', color: '#d2a8ff', data: [5, 4, 6, 8, 9, 10] },
            { label: 'Wilmot', color: '#79c0ff', data: [3, 2, 4, 5, 6, 7] },
            { label: 'Woolwich', color: '#56d364', data: [6, 5, 7, 9, 10, 11] },
          ]
        }
      ]
    },

    livability: {
      label: 'Pillar 4: Livability',
      metrics: [
        {
          id: 'safety_score',
          label: 'Safety Score (2025)',
          display: '75.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'cleanliness_maintenance_index',
          label: 'Cleanliness Maintenance Index (2025)',
          display: '76.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'noise_complaint_index',
          label: 'Noise Complaint Index (2025)',
          display: '40.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 4: Livability (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Safety Score', color: '#4facfe', data: [72, 71, 72, 73, 74, 75] },
            { label: 'Cleanliness Maintenance Index', color: '#3fb950', data: [71, 72, 73, 74, 75, 76] },
            { label: 'Noise Complaint Index', color: '#f0883e', data: [45, 46, 44, 42, 41, 40] },
          ]
        },
        {
          title: 'Safety Score by Municipality (2020–2025)',
          yLabel: 'Safety Score',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [70, 69, 70, 71, 72, 73] },
            { label: 'Waterloo', color: '#f0883e', data: [76, 75, 76, 77, 78, 79] },
            { label: 'Cambridge', color: '#4facfe', data: [74, 73, 74, 75, 76, 77] },
            { label: 'North Dumfries', color: '#e3b341', data: [78, 77, 78, 79, 80, 81] },
            { label: 'Wellesley', color: '#d2a8ff', data: [79, 78, 79, 80, 81, 82] },
            { label: 'Wilmot', color: '#79c0ff', data: [80, 79, 80, 81, 82, 83] },
            { label: 'Woolwich', color: '#56d364', data: [77, 76, 77, 78, 79, 80] },
          ]
        }
      ]
    },

    community_engagement: {
      label: 'Pillar 5: Community Engagement',
      metrics: [
        {
          id: 'community_events_participation_rate',
          label: 'Community Events Participation Rate (2025)',
          display: '55.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'local_programs_availability',
          label: 'Local Programs Availability (2025)',
          display: '195.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
        {
          id: 'volunteer_engagement_rate',
          label: 'Volunteer Engagement Rate (2025)',
          display: '31.0%',
          unit: '',
          status: 'in_progress',
          predicted: false,
          note: ''
        },
      ],
      charts: [
        {
          title: 'Region of Waterloo — Pillar 5: Community Engagement (2020–2025)',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Community Events Participation Rate', color: '#4facfe', data: [38, 28, 42, 48, 52, 55] },
            { label: 'Local Programs Availability', color: '#3fb950', data: [156, 148, 165, 175, 185, 195] },
            { label: 'Volunteer Engagement Rate', color: '#f0883e', data: [22, 19, 24, 27, 29, 31] },
          ]
        },
        {
          title: 'Community Events Participation Rate by Municipality (2020–2025)',
          yLabel: 'Community Events Participation Rate',
          years: [2020, 2021, 2022, 2023, 2024, 2025],
          series: [
            { label: 'Kitchener', color: '#3fb950', data: [36, 26, 40, 46, 50, 53] },
            { label: 'Waterloo', color: '#f0883e', data: [42, 32, 46, 52, 56, 59] },
            { label: 'Cambridge', color: '#4facfe', data: [34, 24, 38, 44, 48, 51] },
            { label: 'North Dumfries', color: '#e3b341', data: [28, 18, 32, 38, 42, 45] },
            { label: 'Wellesley', color: '#d2a8ff', data: [30, 20, 35, 41, 45, 48] },
            { label: 'Wilmot', color: '#79c0ff', data: [26, 16, 30, 36, 40, 43] },
            { label: 'Woolwich', color: '#56d364', data: [32, 22, 37, 43, 47, 50] },
          ]
        }
      ]
    }

  }
};

// Per-city PlaceMaking metrics for map.js overlay
const placemakingCityMetrics = [
  {
    name: 'Kitchener',
    parksHectaresPerCapita2020: 0.73, publicPlazasCount2020: 4, publicAmenitiesPer10002020: 3.8, averageDistanceParksMeters2020: 380, percentWithin400mPark2020: 78, transitAccessibilityScore2020: 72, annualEventsCount2020: 24, eventAttendanceAnnual2020: 145000, businessActivityIndex2020: 70, safetyScore2020: 70, cleanlinessMaintenanceIndex2020: 72, noiseComplaintIndex2020: 48, communityEventsParticipationRate2020: 36, localProgramsAvailability2020: 98, volunteerEngagementRate2020: 20,  // 2020
    parksHectaresPerCapita2021: 0.75, publicPlazasCount2021: 4, publicAmenitiesPer10002021: 3.9, averageDistanceParksMeters2021: 370, percentWithin400mPark2021: 80, transitAccessibilityScore2021: 74, annualEventsCount2021: 18, eventAttendanceAnnual2021: 98000, businessActivityIndex2021: 66, safetyScore2021: 69, cleanlinessMaintenanceIndex2021: 73, noiseComplaintIndex2021: 49, communityEventsParticipationRate2021: 26, localProgramsAvailability2021: 92, volunteerEngagementRate2021: 17,  // 2021
    parksHectaresPerCapita2022: 0.78, publicPlazasCount2022: 5, publicAmenitiesPer10002022: 4.1, averageDistanceParksMeters2022: 360, percentWithin400mPark2022: 82, transitAccessibilityScore2022: 76, annualEventsCount2022: 28, eventAttendanceAnnual2022: 168000, businessActivityIndex2022: 74, safetyScore2022: 70, cleanlinessMaintenanceIndex2022: 74, noiseComplaintIndex2022: 47, communityEventsParticipationRate2022: 40, localProgramsAvailability2022: 108, volunteerEngagementRate2022: 22,  // 2022
    parksHectaresPerCapita2023: 0.8, publicPlazasCount2023: 6, publicAmenitiesPer10002023: 4.3, averageDistanceParksMeters2023: 350, percentWithin400mPark2023: 84, transitAccessibilityScore2023: 78, annualEventsCount2023: 32, eventAttendanceAnnual2023: 195000, businessActivityIndex2023: 78, safetyScore2023: 71, cleanlinessMaintenanceIndex2023: 75, noiseComplaintIndex2023: 45, communityEventsParticipationRate2023: 46, localProgramsAvailability2023: 118, volunteerEngagementRate2023: 25,  // 2023
    parksHectaresPerCapita2024: 0.82, publicPlazasCount2024: 7, publicAmenitiesPer10002024: 4.5, averageDistanceParksMeters2024: 345, percentWithin400mPark2024: 85, transitAccessibilityScore2024: 80, annualEventsCount2024: 36, eventAttendanceAnnual2024: 215000, businessActivityIndex2024: 82, safetyScore2024: 72, cleanlinessMaintenanceIndex2024: 76, noiseComplaintIndex2024: 44, communityEventsParticipationRate2024: 50, localProgramsAvailability2024: 128, volunteerEngagementRate2024: 27,  // 2024
    parksHectaresPerCapita2025: 0.84, publicPlazasCount2025: 8, publicAmenitiesPer10002025: 4.7, averageDistanceParksMeters2025: 340, percentWithin400mPark2025: 86, transitAccessibilityScore2025: 82, annualEventsCount2025: 40, eventAttendanceAnnual2025: 238000, businessActivityIndex2025: 84, safetyScore2025: 73, cleanlinessMaintenanceIndex2025: 77, noiseComplaintIndex2025: 43, communityEventsParticipationRate2025: 53, localProgramsAvailability2025: 138, volunteerEngagementRate2025: 29,  // 2025
  },
  {
    name: 'Waterloo',
    parksHectaresPerCapita2020: 0.82, publicPlazasCount2020: 3, publicAmenitiesPer10002020: 4.2, averageDistanceParksMeters2020: 340, percentWithin400mPark2020: 82, transitAccessibilityScore2020: 78, annualEventsCount2020: 18, eventAttendanceAnnual2020: 98000, businessActivityIndex2020: 74, safetyScore2020: 76, cleanlinessMaintenanceIndex2020: 76, noiseComplaintIndex2020: 42, communityEventsParticipationRate2020: 42, localProgramsAvailability2020: 124, volunteerEngagementRate2020: 26,  // 2020
    parksHectaresPerCapita2021: 0.85, publicPlazasCount2021: 3, publicAmenitiesPer10002021: 4.4, averageDistanceParksMeters2021: 330, percentWithin400mPark2021: 84, transitAccessibilityScore2021: 80, annualEventsCount2021: 14, eventAttendanceAnnual2021: 68000, businessActivityIndex2021: 70, safetyScore2021: 75, cleanlinessMaintenanceIndex2021: 77, noiseComplaintIndex2021: 43, communityEventsParticipationRate2021: 32, localProgramsAvailability2021: 118, volunteerEngagementRate2021: 22,  // 2021
    parksHectaresPerCapita2022: 0.88, publicPlazasCount2022: 4, publicAmenitiesPer10002022: 4.6, averageDistanceParksMeters2022: 320, percentWithin400mPark2022: 86, transitAccessibilityScore2022: 82, annualEventsCount2022: 22, eventAttendanceAnnual2022: 115000, businessActivityIndex2022: 78, safetyScore2022: 76, cleanlinessMaintenanceIndex2022: 78, noiseComplaintIndex2022: 41, communityEventsParticipationRate2022: 46, localProgramsAvailability2022: 132, volunteerEngagementRate2022: 28,  // 2022
    parksHectaresPerCapita2023: 0.91, publicPlazasCount2023: 5, publicAmenitiesPer10002023: 4.8, averageDistanceParksMeters2023: 310, percentWithin400mPark2023: 88, transitAccessibilityScore2023: 84, annualEventsCount2023: 26, eventAttendanceAnnual2023: 138000, businessActivityIndex2023: 82, safetyScore2023: 77, cleanlinessMaintenanceIndex2023: 79, noiseComplaintIndex2023: 39, communityEventsParticipationRate2023: 52, localProgramsAvailability2023: 142, volunteerEngagementRate2023: 31,  // 2023
    parksHectaresPerCapita2024: 0.93, publicPlazasCount2024: 6, publicAmenitiesPer10002024: 5, averageDistanceParksMeters2024: 305, percentWithin400mPark2024: 89, transitAccessibilityScore2024: 86, annualEventsCount2024: 30, eventAttendanceAnnual2024: 155000, businessActivityIndex2024: 85, safetyScore2024: 78, cleanlinessMaintenanceIndex2024: 80, noiseComplaintIndex2024: 38, communityEventsParticipationRate2024: 56, localProgramsAvailability2024: 152, volunteerEngagementRate2024: 33,  // 2024
    parksHectaresPerCapita2025: 0.96, publicPlazasCount2025: 7, publicAmenitiesPer10002025: 5.2, averageDistanceParksMeters2025: 300, percentWithin400mPark2025: 90, transitAccessibilityScore2025: 88, annualEventsCount2025: 34, eventAttendanceAnnual2025: 175000, businessActivityIndex2025: 87, safetyScore2025: 79, cleanlinessMaintenanceIndex2025: 81, noiseComplaintIndex2025: 37, communityEventsParticipationRate2025: 59, localProgramsAvailability2025: 162, volunteerEngagementRate2025: 35,  // 2025
  },
  {
    name: 'Cambridge',
    parksHectaresPerCapita2020: 0.68, publicPlazasCount2020: 2, publicAmenitiesPer10002020: 3.4, averageDistanceParksMeters2020: 450, percentWithin400mPark2020: 70, transitAccessibilityScore2020: 62, annualEventsCount2020: 12, eventAttendanceAnnual2020: 68000, businessActivityIndex2020: 66, safetyScore2020: 74, cleanlinessMaintenanceIndex2020: 73, noiseComplaintIndex2020: 46, communityEventsParticipationRate2020: 34, localProgramsAvailability2020: 82, volunteerEngagementRate2020: 18,  // 2020
    parksHectaresPerCapita2021: 0.7, publicPlazasCount2021: 2, publicAmenitiesPer10002021: 3.6, averageDistanceParksMeters2021: 440, percentWithin400mPark2021: 72, transitAccessibilityScore2021: 65, annualEventsCount2021: 10, eventAttendanceAnnual2021: 52000, businessActivityIndex2021: 62, safetyScore2021: 73, cleanlinessMaintenanceIndex2021: 74, noiseComplaintIndex2021: 47, communityEventsParticipationRate2021: 24, localProgramsAvailability2021: 78, volunteerEngagementRate2021: 15,  // 2021
    parksHectaresPerCapita2022: 0.73, publicPlazasCount2022: 3, publicAmenitiesPer10002022: 3.8, averageDistanceParksMeters2022: 430, percentWithin400mPark2022: 74, transitAccessibilityScore2022: 68, annualEventsCount2022: 15, eventAttendanceAnnual2022: 82000, businessActivityIndex2022: 70, safetyScore2022: 74, cleanlinessMaintenanceIndex2022: 75, noiseComplaintIndex2022: 45, communityEventsParticipationRate2022: 38, localProgramsAvailability2022: 90, volunteerEngagementRate2022: 20,  // 2022
    parksHectaresPerCapita2023: 0.75, publicPlazasCount2023: 4, publicAmenitiesPer10002023: 4, averageDistanceParksMeters2023: 420, percentWithin400mPark2023: 76, transitAccessibilityScore2023: 71, annualEventsCount2023: 18, eventAttendanceAnnual2023: 105000, businessActivityIndex2023: 74, safetyScore2023: 75, cleanlinessMaintenanceIndex2023: 76, noiseComplaintIndex2023: 43, communityEventsParticipationRate2023: 44, localProgramsAvailability2023: 100, volunteerEngagementRate2023: 23,  // 2023
    parksHectaresPerCapita2024: 0.77, publicPlazasCount2024: 5, publicAmenitiesPer10002024: 4.2, averageDistanceParksMeters2024: 415, percentWithin400mPark2024: 78, transitAccessibilityScore2024: 73, annualEventsCount2024: 21, eventAttendanceAnnual2024: 125000, businessActivityIndex2024: 78, safetyScore2024: 76, cleanlinessMaintenanceIndex2024: 77, noiseComplaintIndex2024: 42, communityEventsParticipationRate2024: 48, localProgramsAvailability2024: 110, volunteerEngagementRate2024: 25,  // 2024
    parksHectaresPerCapita2025: 0.79, publicPlazasCount2025: 6, publicAmenitiesPer10002025: 4.4, averageDistanceParksMeters2025: 410, percentWithin400mPark2025: 79, transitAccessibilityScore2025: 75, annualEventsCount2025: 24, eventAttendanceAnnual2025: 148000, businessActivityIndex2025: 80, safetyScore2025: 77, cleanlinessMaintenanceIndex2025: 78, noiseComplaintIndex2025: 41, communityEventsParticipationRate2025: 51, localProgramsAvailability2025: 120, volunteerEngagementRate2025: 27,  // 2025
  },
  {
    name: 'North Dumfries',
    parksHectaresPerCapita2020: 1.15, publicPlazasCount2020: 1, publicAmenitiesPer10002020: 2.1, averageDistanceParksMeters2020: 650, percentWithin400mPark2020: 45, transitAccessibilityScore2020: 45, annualEventsCount2020: 4, eventAttendanceAnnual2020: 8500, businessActivityIndex2020: 52, safetyScore2020: 78, cleanlinessMaintenanceIndex2020: 74, noiseComplaintIndex2020: 35, communityEventsParticipationRate2020: 28, localProgramsAvailability2020: 35, volunteerEngagementRate2020: 14,  // 2020
    parksHectaresPerCapita2021: 1.18, publicPlazasCount2021: 1, publicAmenitiesPer10002021: 2.2, averageDistanceParksMeters2021: 640, percentWithin400mPark2021: 47, transitAccessibilityScore2021: 48, annualEventsCount2021: 3, eventAttendanceAnnual2021: 6200, businessActivityIndex2021: 48, safetyScore2021: 77, cleanlinessMaintenanceIndex2021: 75, noiseComplaintIndex2021: 36, communityEventsParticipationRate2021: 18, localProgramsAvailability2021: 32, volunteerEngagementRate2021: 12,  // 2021
    parksHectaresPerCapita2022: 1.22, publicPlazasCount2022: 1, publicAmenitiesPer10002022: 2.4, averageDistanceParksMeters2022: 630, percentWithin400mPark2022: 49, transitAccessibilityScore2022: 51, annualEventsCount2022: 5, eventAttendanceAnnual2022: 11000, businessActivityIndex2022: 56, safetyScore2022: 78, cleanlinessMaintenanceIndex2022: 76, noiseComplaintIndex2022: 34, communityEventsParticipationRate2022: 32, localProgramsAvailability2022: 38, volunteerEngagementRate2022: 16,  // 2022
    parksHectaresPerCapita2023: 1.25, publicPlazasCount2023: 2, publicAmenitiesPer10002023: 2.5, averageDistanceParksMeters2023: 620, percentWithin400mPark2023: 51, transitAccessibilityScore2023: 54, annualEventsCount2023: 6, eventAttendanceAnnual2023: 14500, businessActivityIndex2023: 60, safetyScore2023: 79, cleanlinessMaintenanceIndex2023: 77, noiseComplaintIndex2023: 32, communityEventsParticipationRate2023: 38, localProgramsAvailability2023: 42, volunteerEngagementRate2023: 19,  // 2023
    parksHectaresPerCapita2024: 1.28, publicPlazasCount2024: 2, publicAmenitiesPer10002024: 2.7, averageDistanceParksMeters2024: 615, percentWithin400mPark2024: 53, transitAccessibilityScore2024: 56, annualEventsCount2024: 7, eventAttendanceAnnual2024: 18000, businessActivityIndex2024: 64, safetyScore2024: 80, cleanlinessMaintenanceIndex2024: 78, noiseComplaintIndex2024: 31, communityEventsParticipationRate2024: 42, localProgramsAvailability2024: 46, volunteerEngagementRate2024: 21,  // 2024
    parksHectaresPerCapita2025: 1.32, publicPlazasCount2025: 2, publicAmenitiesPer10002025: 2.8, averageDistanceParksMeters2025: 610, percentWithin400mPark2025: 54, transitAccessibilityScore2025: 58, annualEventsCount2025: 8, eventAttendanceAnnual2025: 22000, businessActivityIndex2025: 66, safetyScore2025: 81, cleanlinessMaintenanceIndex2025: 79, noiseComplaintIndex2025: 30, communityEventsParticipationRate2025: 45, localProgramsAvailability2025: 50, volunteerEngagementRate2025: 23,  // 2025
  },
  {
    name: 'Wellesley',
    parksHectaresPerCapita2020: 1.08, publicPlazasCount2020: 1, publicAmenitiesPer10002020: 2.3, averageDistanceParksMeters2020: 620, percentWithin400mPark2020: 48, transitAccessibilityScore2020: 48, annualEventsCount2020: 5, eventAttendanceAnnual2020: 12000, businessActivityIndex2020: 55, safetyScore2020: 79, cleanlinessMaintenanceIndex2020: 75, noiseComplaintIndex2020: 38, communityEventsParticipationRate2020: 30, localProgramsAvailability2020: 42, volunteerEngagementRate2020: 16,  // 2020
    parksHectaresPerCapita2021: 1.11, publicPlazasCount2021: 1, publicAmenitiesPer10002021: 2.4, averageDistanceParksMeters2021: 610, percentWithin400mPark2021: 50, transitAccessibilityScore2021: 51, annualEventsCount2021: 4, eventAttendanceAnnual2021: 8500, businessActivityIndex2021: 51, safetyScore2021: 78, cleanlinessMaintenanceIndex2021: 76, noiseComplaintIndex2021: 39, communityEventsParticipationRate2021: 20, localProgramsAvailability2021: 38, volunteerEngagementRate2021: 13,  // 2021
    parksHectaresPerCapita2022: 1.15, publicPlazasCount2022: 1, publicAmenitiesPer10002022: 2.6, averageDistanceParksMeters2022: 600, percentWithin400mPark2022: 52, transitAccessibilityScore2022: 54, annualEventsCount2022: 6, eventAttendanceAnnual2022: 15000, businessActivityIndex2022: 59, safetyScore2022: 79, cleanlinessMaintenanceIndex2022: 77, noiseComplaintIndex2022: 37, communityEventsParticipationRate2022: 35, localProgramsAvailability2022: 46, volunteerEngagementRate2022: 18,  // 2022
    parksHectaresPerCapita2023: 1.18, publicPlazasCount2023: 2, publicAmenitiesPer10002023: 2.7, averageDistanceParksMeters2023: 590, percentWithin400mPark2023: 54, transitAccessibilityScore2023: 57, annualEventsCount2023: 8, eventAttendanceAnnual2023: 20000, businessActivityIndex2023: 63, safetyScore2023: 80, cleanlinessMaintenanceIndex2023: 78, noiseComplaintIndex2023: 35, communityEventsParticipationRate2023: 41, localProgramsAvailability2023: 52, volunteerEngagementRate2023: 21,  // 2023
    parksHectaresPerCapita2024: 1.21, publicPlazasCount2024: 2, publicAmenitiesPer10002024: 2.9, averageDistanceParksMeters2024: 585, percentWithin400mPark2024: 56, transitAccessibilityScore2024: 59, annualEventsCount2024: 9, eventAttendanceAnnual2024: 25000, businessActivityIndex2024: 67, safetyScore2024: 81, cleanlinessMaintenanceIndex2024: 79, noiseComplaintIndex2024: 34, communityEventsParticipationRate2024: 45, localProgramsAvailability2024: 58, volunteerEngagementRate2024: 24,  // 2024
    parksHectaresPerCapita2025: 1.24, publicPlazasCount2025: 2, publicAmenitiesPer10002025: 3, averageDistanceParksMeters2025: 580, percentWithin400mPark2025: 57, transitAccessibilityScore2025: 61, annualEventsCount2025: 10, eventAttendanceAnnual2025: 30000, businessActivityIndex2025: 69, safetyScore2025: 82, cleanlinessMaintenanceIndex2025: 80, noiseComplaintIndex2025: 33, communityEventsParticipationRate2025: 48, localProgramsAvailability2025: 64, volunteerEngagementRate2025: 26,  // 2025
  },
  {
    name: 'Wilmot',
    parksHectaresPerCapita2020: 1.22, publicPlazasCount2020: 1, publicAmenitiesPer10002020: 2, averageDistanceParksMeters2020: 680, percentWithin400mPark2020: 42, transitAccessibilityScore2020: 40, annualEventsCount2020: 3, eventAttendanceAnnual2020: 6500, businessActivityIndex2020: 50, safetyScore2020: 80, cleanlinessMaintenanceIndex2020: 76, noiseComplaintIndex2020: 40, communityEventsParticipationRate2020: 26, localProgramsAvailability2020: 28, volunteerEngagementRate2020: 12,  // 2020
    parksHectaresPerCapita2021: 1.25, publicPlazasCount2021: 1, publicAmenitiesPer10002021: 2.1, averageDistanceParksMeters2021: 670, percentWithin400mPark2021: 44, transitAccessibilityScore2021: 43, annualEventsCount2021: 2, eventAttendanceAnnual2021: 4500, businessActivityIndex2021: 46, safetyScore2021: 79, cleanlinessMaintenanceIndex2021: 77, noiseComplaintIndex2021: 41, communityEventsParticipationRate2021: 16, localProgramsAvailability2021: 24, volunteerEngagementRate2021: 10,  // 2021
    parksHectaresPerCapita2022: 1.29, publicPlazasCount2022: 1, publicAmenitiesPer10002022: 2.3, averageDistanceParksMeters2022: 660, percentWithin400mPark2022: 46, transitAccessibilityScore2022: 46, annualEventsCount2022: 4, eventAttendanceAnnual2022: 8500, businessActivityIndex2022: 54, safetyScore2022: 80, cleanlinessMaintenanceIndex2022: 78, noiseComplaintIndex2022: 39, communityEventsParticipationRate2022: 30, localProgramsAvailability2022: 32, volunteerEngagementRate2022: 14,  // 2022
    parksHectaresPerCapita2023: 1.32, publicPlazasCount2023: 1, publicAmenitiesPer10002023: 2.4, averageDistanceParksMeters2023: 650, percentWithin400mPark2023: 48, transitAccessibilityScore2023: 49, annualEventsCount2023: 5, eventAttendanceAnnual2023: 12000, businessActivityIndex2023: 58, safetyScore2023: 81, cleanlinessMaintenanceIndex2023: 79, noiseComplaintIndex2023: 37, communityEventsParticipationRate2023: 36, localProgramsAvailability2023: 36, volunteerEngagementRate2023: 17,  // 2023
    parksHectaresPerCapita2024: 1.35, publicPlazasCount2024: 2, publicAmenitiesPer10002024: 2.6, averageDistanceParksMeters2024: 645, percentWithin400mPark2024: 50, transitAccessibilityScore2024: 51, annualEventsCount2024: 6, eventAttendanceAnnual2024: 15000, businessActivityIndex2024: 62, safetyScore2024: 82, cleanlinessMaintenanceIndex2024: 80, noiseComplaintIndex2024: 36, communityEventsParticipationRate2024: 40, localProgramsAvailability2024: 40, volunteerEngagementRate2024: 19,  // 2024
    parksHectaresPerCapita2025: 1.38, publicPlazasCount2025: 2, publicAmenitiesPer10002025: 2.7, averageDistanceParksMeters2025: 640, percentWithin400mPark2025: 51, transitAccessibilityScore2025: 53, annualEventsCount2025: 7, eventAttendanceAnnual2025: 18000, businessActivityIndex2025: 64, safetyScore2025: 83, cleanlinessMaintenanceIndex2025: 81, noiseComplaintIndex2025: 35, communityEventsParticipationRate2025: 43, localProgramsAvailability2025: 44, volunteerEngagementRate2025: 21,  // 2025
  },
  {
    name: 'Woolwich',
    parksHectaresPerCapita2020: 1.05, publicPlazasCount2020: 1, publicAmenitiesPer10002020: 2.2, averageDistanceParksMeters2020: 600, percentWithin400mPark2020: 50, transitAccessibilityScore2020: 50, annualEventsCount2020: 6, eventAttendanceAnnual2020: 14000, businessActivityIndex2020: 58, safetyScore2020: 77, cleanlinessMaintenanceIndex2020: 74, noiseComplaintIndex2020: 39, communityEventsParticipationRate2020: 32, localProgramsAvailability2020: 48, volunteerEngagementRate2020: 17,  // 2020
    parksHectaresPerCapita2021: 1.08, publicPlazasCount2021: 1, publicAmenitiesPer10002021: 2.3, averageDistanceParksMeters2021: 590, percentWithin400mPark2021: 52, transitAccessibilityScore2021: 53, annualEventsCount2021: 5, eventAttendanceAnnual2021: 10000, businessActivityIndex2021: 54, safetyScore2021: 76, cleanlinessMaintenanceIndex2021: 75, noiseComplaintIndex2021: 40, communityEventsParticipationRate2021: 22, localProgramsAvailability2021: 44, volunteerEngagementRate2021: 14,  // 2021
    parksHectaresPerCapita2022: 1.12, publicPlazasCount2022: 1, publicAmenitiesPer10002022: 2.5, averageDistanceParksMeters2022: 580, percentWithin400mPark2022: 54, transitAccessibilityScore2022: 56, annualEventsCount2022: 7, eventAttendanceAnnual2022: 18000, businessActivityIndex2022: 62, safetyScore2022: 77, cleanlinessMaintenanceIndex2022: 76, noiseComplaintIndex2022: 38, communityEventsParticipationRate2022: 37, localProgramsAvailability2022: 54, volunteerEngagementRate2022: 19,  // 2022
    parksHectaresPerCapita2023: 1.15, publicPlazasCount2023: 2, publicAmenitiesPer10002023: 2.6, averageDistanceParksMeters2023: 570, percentWithin400mPark2023: 56, transitAccessibilityScore2023: 59, annualEventsCount2023: 9, eventAttendanceAnnual2023: 24000, businessActivityIndex2023: 66, safetyScore2023: 78, cleanlinessMaintenanceIndex2023: 77, noiseComplaintIndex2023: 36, communityEventsParticipationRate2023: 43, localProgramsAvailability2023: 62, volunteerEngagementRate2023: 22,  // 2023
    parksHectaresPerCapita2024: 1.18, publicPlazasCount2024: 2, publicAmenitiesPer10002024: 2.8, averageDistanceParksMeters2024: 565, percentWithin400mPark2024: 58, transitAccessibilityScore2024: 61, annualEventsCount2024: 10, eventAttendanceAnnual2024: 30000, businessActivityIndex2024: 70, safetyScore2024: 79, cleanlinessMaintenanceIndex2024: 78, noiseComplaintIndex2024: 35, communityEventsParticipationRate2024: 47, localProgramsAvailability2024: 70, volunteerEngagementRate2024: 25,  // 2024
    parksHectaresPerCapita2025: 1.21, publicPlazasCount2025: 2, publicAmenitiesPer10002025: 2.9, averageDistanceParksMeters2025: 560, percentWithin400mPark2025: 59, transitAccessibilityScore2025: 63, annualEventsCount2025: 11, eventAttendanceAnnual2025: 36000, businessActivityIndex2025: 72, safetyScore2025: 80, cleanlinessMaintenanceIndex2025: 79, noiseComplaintIndex2025: 34, communityEventsParticipationRate2025: 50, localProgramsAvailability2025: 78, volunteerEngagementRate2025: 27,  // 2025
  },
];

// Region-level PlaceMaking metrics for map sidebar (Region of Waterloo)
const placemakingRegionMetrics = {
  parksHectaresPerCapita2020: 0.65, publicPlazasCount2020: 8, publicAmenitiesPer10002020: 3.2, averageDistanceParksMeters2020: 420, percentWithin400mPark2020: 74, transitAccessibilityScore2020: 67, annualEventsCount2020: 42, eventAttendanceAnnual2020: 285000, businessActivityIndex2020: 68, safetyScore2020: 72, cleanlinessMaintenanceIndex2020: 71, noiseComplaintIndex2020: 45, communityEventsParticipationRate2020: 38, localProgramsAvailability2020: 156, volunteerEngagementRate2020: 22,  // 2020
  parksHectaresPerCapita2021: 0.67, publicPlazasCount2021: 9, publicAmenitiesPer10002021: 3.4, averageDistanceParksMeters2021: 410, percentWithin400mPark2021: 76, transitAccessibilityScore2021: 70, annualEventsCount2021: 38, eventAttendanceAnnual2021: 198000, businessActivityIndex2021: 64, safetyScore2021: 71, cleanlinessMaintenanceIndex2021: 72, noiseComplaintIndex2021: 46, communityEventsParticipationRate2021: 28, localProgramsAvailability2021: 148, volunteerEngagementRate2021: 19,  // 2021
  parksHectaresPerCapita2022: 0.7, publicPlazasCount2022: 10, publicAmenitiesPer10002022: 3.6, averageDistanceParksMeters2022: 400, percentWithin400mPark2022: 78, transitAccessibilityScore2022: 72, annualEventsCount2022: 52, eventAttendanceAnnual2022: 325000, businessActivityIndex2022: 72, safetyScore2022: 72, cleanlinessMaintenanceIndex2022: 73, noiseComplaintIndex2022: 44, communityEventsParticipationRate2022: 42, localProgramsAvailability2022: 165, volunteerEngagementRate2022: 24,  // 2022
  parksHectaresPerCapita2023: 0.72, publicPlazasCount2023: 12, publicAmenitiesPer10002023: 3.8, averageDistanceParksMeters2023: 390, percentWithin400mPark2023: 80, transitAccessibilityScore2023: 74, annualEventsCount2023: 58, eventAttendanceAnnual2023: 385000, businessActivityIndex2023: 76, safetyScore2023: 73, cleanlinessMaintenanceIndex2023: 74, noiseComplaintIndex2023: 42, communityEventsParticipationRate2023: 48, localProgramsAvailability2023: 175, volunteerEngagementRate2023: 27,  // 2023
  parksHectaresPerCapita2024: 0.74, publicPlazasCount2024: 14, publicAmenitiesPer10002024: 4, averageDistanceParksMeters2024: 385, percentWithin400mPark2024: 82, transitAccessibilityScore2024: 76, annualEventsCount2024: 65, eventAttendanceAnnual2024: 420000, businessActivityIndex2024: 80, safetyScore2024: 74, cleanlinessMaintenanceIndex2024: 75, noiseComplaintIndex2024: 41, communityEventsParticipationRate2024: 52, localProgramsAvailability2024: 185, volunteerEngagementRate2024: 29,  // 2024
  parksHectaresPerCapita2025: 0.75, publicPlazasCount2025: 15, publicAmenitiesPer10002025: 4.2, averageDistanceParksMeters2025: 380, percentWithin400mPark2025: 83, transitAccessibilityScore2025: 78, annualEventsCount2025: 72, eventAttendanceAnnual2025: 465000, businessActivityIndex2025: 82, safetyScore2025: 75, cleanlinessMaintenanceIndex2025: 76, noiseComplaintIndex2025: 40, communityEventsParticipationRate2025: 55, localProgramsAvailability2025: 195, volunteerEngagementRate2025: 31,  // 2025
};
