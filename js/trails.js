// Durango MTB Trail Data Store
// Single source of truth for all trail information

const TRAILS = [
  {
    id: "horse-gulch",
    name: "Horse Gulch / Telegraph",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced", "expert"],
    difficultyLabel: "Novice \u2013 Expert",
    lat: 37.2653,
    lng: -107.8672,
    trailhead: "E 8th Ave & 3rd St",
    distanceFromTown: 0,
    miles: null,
    elevationGain: null,
    description: "Durango's iconic backyard trail system with miles of well-marked singletrack. From smooth, fast cruisers to rugged, technical terrain\u2014this system has it all. The Anasazi descent and Raiders Ridge loop are local favorites.",
    features: ["singletrack", "technical", "flow", "views"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Main trailhead at corner of 8th Ave and 3rd St. Trails dry out early in spring.",
    trailforksUrl: "https://www.trailforks.com/region/horse-gulch/"
  },
  {
    id: "grandview",
    name: "Grandview Trails",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced", "expert"],
    difficultyLabel: "Novice \u2013 Expert",
    lat: 37.2580,
    lng: -107.8650,
    trailhead: "Multiple southern access points",
    distanceFromTown: 0,
    miles: null,
    elevationGain: null,
    description: "A versatile trail network accessible from Horse Gulch or three southern trailheads. Connects to the Spur Line system, making it easy to build longer rides linking multiple trail systems.",
    features: ["singletrack", "flow", "connector"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Connects to Horse Gulch and Spur Line systems for extended rides.",
    trailforksUrl: "https://www.trailforks.com/region/grandview/"
  },
  {
    id: "fort-lewis",
    name: "Fort Lewis College (Rim Trail)",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced"],
    difficultyLabel: "Novice \u2013 Advanced",
    lat: 37.2735,
    lng: -107.8580,
    trailhead: "Fort Lewis College campus",
    distanceFromTown: 1,
    miles: null,
    elevationGain: null,
    description: "Scenic trail surrounding the \"Campus in the Sky.\" Generally easy riding with some exposed and rocky sections offering panoramic views of the La Plata Mountains and Animas Valley.",
    features: ["views", "singletrack", "scenic"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Respect campus rules and share trail with pedestrians.",
    trailforksUrl: "https://www.trailforks.com/region/fort-lewis-college/"
  },
  {
    id: "overend",
    name: "Overend Mountain Park",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced", "expert"],
    difficultyLabel: "Novice \u2013 Expert",
    lat: 37.2820,
    lng: -107.8520,
    trailhead: "West side of Durango",
    distanceFromTown: 0,
    miles: null,
    elevationGain: null,
    description: "300 acres of shale hills in pine, juniper, and oak forest. Known locally as \"Test Tracks\" for its punchy climbs and fast, flowy downhills. A favorite among Durango locals for quick after-work laps.",
    features: ["flow", "technical", "climbs"],
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: "Dries out faster than other in-town trails due to shale soil.",
    trailforksUrl: "https://www.trailforks.com/region/overend-mountain-park-19234/"
  },
  {
    id: "animas-dalla",
    name: "Animas Mtn / Dalla Mtn Park",
    category: "in-town",
    difficulty: ["advanced", "expert"],
    difficultyLabel: "Advanced \u2013 Expert",
    lat: 37.2950,
    lng: -107.8800,
    trailhead: "North end of Durango",
    distanceFromTown: 1,
    miles: null,
    elevationGain: null,
    description: "Durango's most difficult in-town trails. Steep climbing with rocky, loose, and chunky terrain that will test your technical skills. Not for the faint of heart.",
    features: ["technical", "climbs", "expert"],
    bestMonths: [5, 6, 7, 8, 9, 10],
    notes: "Seasonal closures late-fall to mid-spring for wildlife. Additional closure for falcon nesting habitat.",
    trailforksUrl: "https://www.trailforks.com/region/animas-mountain/"
  },
  {
    id: "twin-buttes",
    name: "Twin Buttes",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced"],
    difficultyLabel: "Novice \u2013 Advanced",
    lat: 37.2400,
    lng: -107.8950,
    trailhead: "1.5mi west on HWY 160",
    distanceFromTown: 2,
    miles: null,
    elevationGain: null,
    description: "Home to the beloved Ed & Flo descents\u2014some of the best flow trails in the region. Ride counterclockwise for the optimal experience. Great for all levels with options to dial up the difficulty.",
    features: ["flow", "singletrack", "descents"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Counterclockwise riding strongly recommended for Ed & Flo descents.",
    trailforksUrl: "https://www.trailforks.com/region/twin-buttes/"
  },
  {
    id: "three-springs",
    name: "Three Springs / Spur Line",
    category: "in-town",
    difficulty: ["novice"],
    difficultyLabel: "Novice",
    lat: 37.2350,
    lng: -107.9050,
    trailhead: "Three Springs neighborhood",
    distanceFromTown: 3,
    miles: null,
    elevationGain: null,
    description: "Durango's truest beginner trails. Two flowing loops with self-educating terrain and moderate grades designed for riders building confidence. Enjoyable for all abilities as a mellow cruise.",
    features: ["beginner", "flow", "family"],
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: "Perfect for first-timers and families with kids learning to ride.",
    trailforksUrl: "https://www.trailforks.com/region/three-springs/"
  },
  {
    id: "hidden-valley",
    name: "Hidden Valley / Church Camp",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced"],
    difficultyLabel: "Novice \u2013 Advanced",
    lat: 37.2500,
    lng: -107.8500,
    trailhead: "East of Durango",
    distanceFromTown: 2,
    miles: null,
    elevationGain: null,
    description: "Meadow trails suitable for kids and novice riders, with a ridge section that ramps up the technical challenge. A nice mix of mellow and spicy in one outing.",
    features: ["family", "singletrack", "technical"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Lower meadow trails are great for kids; ridge section is more advanced.",
    trailforksUrl: "https://www.trailforks.com/region/hidden-valley/"
  },
  {
    id: "log-chutes",
    name: "Log Chutes",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced", "expert"],
    difficultyLabel: "Novice \u2013 Expert",
    lat: 37.2750,
    lng: -107.9300,
    trailhead: "5.7mi west on 25th St from Main Ave",
    distanceFromTown: 6,
    miles: null,
    elevationGain: null,
    description: "Located near the Colorado Trailhead, this system offers trails for every skill level in a beautiful forested setting. A great launching point for longer backcountry adventures.",
    features: ["singletrack", "forest", "connector"],
    bestMonths: [5, 6, 7, 8, 9, 10],
    notes: "Near the Colorado Trail trailhead\u2014combine with CT sections for epic rides.",
    trailforksUrl: "https://www.trailforks.com/region/log-chutes/"
  },
  {
    id: "lower-ct",
    name: "Lower Colorado Trail",
    category: "in-town",
    difficulty: ["advanced", "expert"],
    difficultyLabel: "Advanced \u2013 Expert",
    lat: 37.2600,
    lng: -107.9100,
    trailhead: "Two main trailheads west of town",
    distanceFromTown: 5,
    miles: null,
    elevationGain: null,
    description: "A local's favorite offering classic Colorado singletrack through pine and aspen forest. Technical, rewarding, and never boring. Two trailhead options for different ride lengths.",
    features: ["singletrack", "technical", "classic"],
    bestMonths: [5, 6, 7, 8, 9, 10],
    notes: "Iconic Durango ride. Expect technical rock gardens and root sections.",
    trailforksUrl: "https://www.trailforks.com/trails/colorado-trail-durango/"
  },
  {
    id: "durango-mesa",
    name: "Durango Mesa Park",
    category: "in-town",
    difficulty: ["novice", "intermediate", "advanced", "expert"],
    difficultyLabel: "Novice \u2013 Expert",
    lat: 37.2300,
    lng: -107.9200,
    trailhead: "South of Durango",
    distanceFromTown: 4,
    miles: null,
    elevationGain: null,
    description: "Durango's newest trail addition, built through collaboration between the City and Durango Mesa Park Foundation. Modern trail design with options for every skill level.",
    features: ["flow", "singletrack", "new"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Newest system\u2014check for ongoing construction and new trail openings.",
    trailforksUrl: "https://www.trailforks.com/region/durango-mesa-park-60849/"
  },
  {
    id: "engineer",
    name: "Engineer Mountain Trail",
    category: "high-country",
    difficulty: ["expert"],
    difficultyLabel: "Expert",
    lat: 37.5500,
    lng: -107.7800,
    trailhead: "Coal Bank Pass / Engineer Mtn TH",
    distanceFromTown: 25,
    miles: 10,
    elevationGain: 4000,
    description: "One of Durango's legendary descents\u20144,000 feet of dropping over 10 miles from Coal Bank Pass. Climb past tree line for quad-burning satisfaction, then descend through alpine meadows and forest. An absolute bucket-list ride.",
    features: ["alpine", "descent", "epic", "views"],
    bestMonths: [7, 8, 9],
    notes: "Start early to avoid afternoon thunderstorms. Shuttle options available.",
    trailforksUrl: "https://www.trailforks.com/trails/engineer-mountain-trail/"
  },
  {
    id: "purgatory",
    name: "Purgatory Resort",
    category: "high-country",
    difficulty: ["intermediate", "advanced"],
    difficultyLabel: "Intermediate \u2013 Advanced",
    lat: 37.6300,
    lng: -107.8100,
    trailhead: "Purgatory Resort base area",
    distanceFromTown: 25,
    miles: 7,
    elevationGain: 1200,
    description: "Seven miles of singletrack on unique clay-based soil\u2014the only clay soil in the Rockies. 1,200 feet of climbing with lift-served descents available via Diggler's trail. Summer operations make this a gravity rider's playground.",
    features: ["lift-served", "singletrack", "resort"],
    bestMonths: [6, 7, 8, 9],
    notes: "Check resort schedule for lift-served bike park hours and passes.",
    trailforksUrl: "https://www.trailforks.com/region/purgatory-resort/"
  },
  {
    id: "ct-25",
    name: "Colorado Trail: Section 25",
    category: "high-country",
    difficulty: ["advanced", "expert"],
    difficultyLabel: "Advanced \u2013 Expert",
    lat: 37.5800,
    lng: -107.7500,
    trailhead: "Molas Pass",
    distanceFromTown: 24,
    miles: null,
    elevationGain: null,
    description: "Molas Pass to Engineer Mountain\u2014a stunning alpine section of the Colorado Trail. Wildflower panoramas, 13,000-foot peak views, and high-altitude singletrack that defines mountain biking in the San Juans.",
    features: ["alpine", "views", "epic", "wildflowers"],
    bestMonths: [7, 8, 9],
    notes: "High altitude\u2014acclimate before riding. Afternoon storms are common.",
    trailforksUrl: "https://www.trailforks.com/trails/colorado-trail-segment-25/"
  },
  {
    id: "ct-28",
    name: "Colorado Trail: Section 28",
    category: "high-country",
    difficulty: ["advanced", "expert"],
    difficultyLabel: "Advanced \u2013 Expert",
    lat: 37.4600,
    lng: -107.8300,
    trailhead: "Dry Fork trailhead",
    distanceFromTown: 15,
    miles: null,
    elevationGain: null,
    description: "A classic Colorado Trail section with the popular Dry Forks loop option. Dense forest, rocky terrain, and that unmistakable CT singletrack feel. Can be combined with other sections for multi-day adventures.",
    features: ["singletrack", "forest", "classic"],
    bestMonths: [6, 7, 8, 9, 10],
    notes: "Dry Forks loop is a popular day-ride option from this section.",
    trailforksUrl: "https://www.trailforks.com/trails/colorado-trail-segment-28/"
  },
  {
    id: "hogsback",
    name: "Hogsback Mountain",
    category: "mid-country",
    difficulty: ["intermediate"],
    difficultyLabel: "Intermediate",
    lat: 37.4100,
    lng: -107.8500,
    trailhead: "Overend Mountain Park area",
    distanceFromTown: 10,
    miles: 1.7,
    elevationGain: 700,
    description: "A punchy 1.7-mile trail with nearly 700 feet of climbing and 600 feet of descent. Located in Overend Mountain Park, it's a great intermediate challenge with rewarding views at the top.",
    features: ["climbs", "views", "singletrack"],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    notes: "Short but steep\u2014a great fitness test for intermediate riders.",
    trailforksUrl: "https://www.trailforks.com/trails/hogsback/"
  }
];

// Helper functions
function getTrailsByDifficulty(level) {
  return TRAILS.filter(t => t.difficulty.includes(level));
}

function getTrailsByCategory(cat) {
  if (cat === "all") return TRAILS;
  return TRAILS.filter(t => t.category === cat);
}

function getTrailById(id) {
  return TRAILS.find(t => t.id === id);
}

function getMaxDifficulty(trail) {
  const order = ["novice", "intermediate", "advanced", "expert"];
  for (let i = order.length - 1; i >= 0; i--) {
    if (trail.difficulty.includes(order[i])) return order[i];
  }
  return "novice";
}

function getDifficultyColor(level) {
  const colors = {
    novice: "#4CAF50",
    intermediate: "#2196F3",
    advanced: "#333",
    expert: "#333"
  };
  return colors[level] || "#333";
}

function getDifficultyIcon(level) {
  const icons = {
    novice: "\u25CF",
    intermediate: "\u25A0",
    advanced: "\u25C6",
    expert: "\u25C6\u25C6"
  };
  return icons[level] || "";
}
