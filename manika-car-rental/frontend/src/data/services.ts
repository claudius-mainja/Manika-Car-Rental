export interface Service {
  id: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  features: string[];
  requiresPickupDropoff: boolean;
  image: string;
}

export const services: Service[] = [
  {
    id: "vehicle-rental",
    name: "Vehicle Rental",
    icon: "Car",
    shortDesc: "Premium vehicles for every occasion",
    description:
      "Choose from our diverse fleet of well-maintained vehicles for any occasion. Whether you need a compact sedan for Harare city or a spacious SUV for a family adventure, we have the perfect car waiting for you.",
    features: [
      "Wide range of premium vehicles",
      "Flexible rental periods - daily to monthly",
      "24/7 roadside assistance",
      "Comprehensive insurance included",
      "Well-maintained, clean fleet",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/images.jfif",
  },
  {
    id: "outstation-trips",
    name: "Outstation Trips",
    icon: "MapPin",
    shortDesc: "Explore beyond Harare",
    description:
      "Planning a trip outside the city? Our outstation packages include well-equipped vehicles with experienced drivers who know Zimbabwe's roads inside out. Travel to Bulawayo, Victoria Falls, Masvingo, Mutare, and beyond with comfort and safety.",
    features: [
      "Experienced long-distance drivers",
      "Vehicles suited for all terrains",
      "Flexible scheduling - one-way or return",
      "Multi-day trip packages available",
      "Luggage space for all your needs",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/images (2).jfif",
  },
  {
    id: "international-trips",
    name: "International Long Trips",
    icon: "Globe",
    shortDesc: "Cross-border journeys",
    description:
      "Experience seamless international travel with our professional drivers. We offer long-trip services to destinations across Southern Africa including South Africa, Botswana, Zambia, Mozambique, Tanzania, and more.",
    features: [
      "Cross-border expertise (SA, Botswana, Zambia, Mozambique)",
      "Professional, licensed drivers",
      "Customized itineraries",
      "Comfortable vehicles for extended journeys",
      "Border crossing assistance included",
      "Flexible routing and stops",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/images (3).jfif",
  },
  {
    id: "international-drivers",
    name: "International Driver Assignment",
    icon: "UserPlus",
    shortDesc: "Professional drivers for your vehicle",
    description:
      "Have your own car but need a professional driver? We provide experienced, licensed drivers who can accompany you on international journeys across borders.",
    features: [
      "Licensed professional drivers",
      "Experience with cross-border routes",
      "Knowledge of multiple road conditions",
      "Route planning and navigation",
      "Flexible hours and scheduling",
      "Available for short and long-term",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/download (1).jfif",
  },
  {
    id: "airport-transfers",
    name: "Airport Pickup & Drop Off",
    icon: "Plane",
    shortDesc: "R.G. Mugabe Airport transfers",
    description:
      "Start or end your journey stress-free with our reliable airport transfer service. Our drivers monitor flight schedules and ensure timely pickup and drop off at R.G. Mugabe International Airport.",
    features: [
      "Flight tracking & monitoring",
      "Meet and greet service at arrivals",
      "Luggage assistance included",
      "Available 24/7, 365 days",
      "Multiple vehicle options",
      "Instant booking confirmation",
    ],
    requiresPickupDropoff: true,
    image: "/images/hero/96541192_3001514956599958_7128221362765692928_n.jpg",
  },
  {
    id: "self-drive",
    name: "Self Drive Car Rental",
    icon: "Key",
    shortDesc: "Drive yourself, your freedom",
    description:
      "Experience the freedom of driving yourself. Our self-drive rental service provides you with a well-maintained vehicle — just you and the open road. Explore Zimbabwe at your own pace.",
    features: [
      "No driver included - complete freedom",
      "Unlimited mileage on all rentals",
      "GPS navigation available on request",
      "Full insurance coverage",
      "24/7 support hotline",
      "Quick pickup and drop-off",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/c2726e6984f1189b287f36bee05c8ab2.webp",
  },
  {
    id: "chauffeur-service",
    name: "Chauffeur Car Rental",
    icon: "UserCheck",
    shortDesc: "Professional driver at your service",
    description:
      "Sit back, relax, and let our professional chauffeurs handle the driving. Our chauffeur service provides experienced drivers who ensure a safe, comfortable, and punctual journey.",
    features: [
      "Professional, uniformed drivers",
      "Impeccably presented vehicles",
      "Door-to-door service",
      "Multi-stop itineraries supported",
      "Corporate & VIP packages",
      "Privacy and discretion guaranteed",
    ],
    requiresPickupDropoff: true,
    image: "/images/hero/images.jfif",
  },
  {
    id: "safari-trips",
    name: "Safari Trips Booking",
    icon: "Compass",
    shortDesc: "Adventure in Zimbabwe's wild",
    description:
      "Discover the incredible wildlife of Zimbabwe with our safari trip service. We arrange complete safari packages including transport to Hwange, Mana Pools, Gonarezhou, and other world-renowned parks.",
    features: [
      "Safari-ready 4x4 vehicles",
      "Knowledgeable driver-guides",
      "Multi-day safari packages",
      "Park entry guidance and assistance",
      "Accommodation booking support",
      "Customized safari itineraries",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/images (2).jfif",
  },
  {
    id: "business-trips",
    name: "Business Trips",
    icon: "Briefcase",
    shortDesc: "Corporate transport excellence",
    description:
      "Impress your clients and partners with our premium business trip service. We provide executive vehicles and professional service tailored for corporate needs in Harare and beyond.",
    features: [
      "Executive vehicle fleet",
      "Corporate billing available",
      "Dedicated account manager",
      "Multi-vehicle coordination",
      "Conference & event transport",
      "Punctuality guaranteed",
    ],
    requiresPickupDropoff: false,
    image: "/images/hero/images (3).jfif",
  },
  {
    id: "luxury-rentals",
    name: "Luxury Car Rentals",
    icon: "Crown",
    shortDesc: "Arrive in ultimate style",
    description:
      "Make a statement with our luxury car rental service. From high-end sedans to premium SUVs, experience the finest automobiles for weddings, galas, VIP events, and any occasion.",
    features: [
      "Premium luxury vehicles",
      "Red carpet presentation service",
      "Complimentary refreshments",
      "Professional chauffeur included",
      "Custom decorations for events",
      "Premium sound system available",
    ],
    requiresPickupDropoff: true,
    image: "/images/hero/download (1).jfif",
  },
];
