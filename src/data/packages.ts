export interface ConstructionPackage {
  id: string;
  name: string;
  tier: 'Basic' | 'Premium' | 'Luxury';
  tagline: string;
  rate: string;
  rateUnit: string;
  popular: boolean;
  badgeColor: string;
  highlights: string[];
  civilWork: {
    steel: string;
    cement: string;
    aggregates: string;
    sand: string;
    masonry: string;
    rcc: string;
    curing: string;
  };
  flooring: {
    livingDining: string;
    bedrooms: string;
    kitchen: string;
    balconyUtility: string;
    staircase: string;
  };
  doorsWindows: {
    mainDoor: string;
    internalDoors: string;
    bathroomDoors: string;
    windows: string;
  };
  painting: {
    interior: string;
    exterior: string;
    ceiling: string;
    metalWood: string;
  };
  kitchenPlumbing: {
    countertop: string;
    sink: string;
    cpFittings: string;
    sanitaryware: string;
    pipes: string;
  };
  electrical: {
    wiring: string;
    switches: string;
    distribution: string;
    provisions: string;
  };
}

export const constructionPackagesData: ConstructionPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    tier: 'Basic',
    tagline: 'Affordable essential quality for rental homes, basic residential units & budget-focused duplexes',
    rate: '₹1,950',
    rateUnit: 'per sq.ft',
    popular: false,
    badgeColor: 'bg-slate-100 text-slate-700',
    highlights: [
      'Standard Grade Fe 500D / 550D TMT Steel (Kamdhenu / Meenakshi / Prime)',
      'UltraTech / ACC / Dalmia 43/53 Grade Cement',
      'Solid Concrete Block Masonry (6" External & 4" Internal)',
      'Double Charged Vitrified Tile Flooring (Up to ₹55/sq.ft)',
      'Standard CP & Sanitaryware Fittings (Cera / Parryware or equivalent)',
      'Modular Electrical Wiring (Anchor / Havells with Anchor Roma switches)',
      'Asian Paints Tractor Emulsion (Interior) & Apex Weatherproof (Exterior)',
      'Teak Wood Main Door Frame with Flush Door & 2-Track UPVC Windows',
      'Standard Underground Sump (4,000 L) & Sintex Overhead Tank (1,000 L)'
    ],
    civilWork: {
      steel: 'Fe 500D/550D TMT Rebar (Kamdhenu / Meenakshi / Sunvik)',
      cement: 'Grade 43/53 (UltraTech / ACC / Dalmia / Zuari)',
      aggregates: '20mm & 40mm machine crushed granite stone aggregate',
      sand: 'Certified M-Sand for RCC & Blockwork; P-Sand for wall plastering',
      masonry: 'Solid Concrete Blocks 6" thick external walls, 4" thick internal partition walls',
      rcc: 'M20 grade concrete mix designed as per IS 456 standards',
      curing: 'Continuous 14 to 21-day ponding on slabs and spray curing for vertical columns'
    },
    flooring: {
      livingDining: 'Double Charged Vitrified Tiles (2x2 ft) up to ₹55/sq.ft',
      bedrooms: 'Double Charged Vitrified Tiles (2x2 ft) up to ₹50/sq.ft',
      kitchen: 'Vitrified Tiles (2x2 ft) with 20mm Polished Granite Countertop & 2ft ceramic wall dado',
      balconyUtility: 'Anti-skid Ceramic Tiles (1x1 ft) up to ₹40/sq.ft',
      staircase: 'Sadarahalli Granite with chamfered edges and SS 202 handrails'
    },
    doorsWindows: {
      mainDoor: 'African Teak wood frame (5"x3") with 32mm OST flush door shutter and brass mortise lock',
      internalDoors: 'Sal / Hardwood frame (4"x2.5") with painted flush door shutters and cylindrical locks',
      bathroomDoors: 'Hardwood frame with waterproof FRP / PVC laminated shutter',
      windows: '2-Track UPVC sliding windows with 5mm clear float glass and MS safety grills'
    },
    painting: {
      interior: '2 Coats Asian Paints Tractor Emulsion over 2 coats Birla White Wallcare putty & 1 coat primer',
      exterior: '2 Coats Asian Paints Apex Weatherproof exterior emulsion over 1 coat exterior primer',
      ceiling: 'Tractor Emulsion white finish over smooth putty coat',
      metalWood: 'Enamel paint for MS window grills and synthetic varnish polish for main door'
    },
    kitchenPlumbing: {
      countertop: '20mm Black Granite platform with single-bowl Stainless Steel sink',
      sink: 'SS 304 Single Bowl Sink with drainboard (Diamond / Nirali or equivalent)',
      cpFittings: 'Parryware / Cera / Jaguar Continental quarter-turn CP fittings',
      sanitaryware: 'Cera / Parryware floor-mounted EWC with slim flushing cistern',
      pipes: 'Ashirvad / Supreme CPVC pipes for internal hot/cold water & PVC for drainage'
    },
    electrical: {
      wiring: 'Concealed flame-retardant copper wiring (Anchor / Finolex / Havells)',
      switches: 'Anchor Roma / GM modular switches and sockets with MCBs',
      distribution: 'Independent DB box with Legrand / Schneider isolators for each floor',
      provisions: 'AC points in Master Bedroom, Geyser points in all bathrooms, UPS wiring provision'
    }
  },
  {
    id: 'premium',
    name: 'Premium Package',
    tier: 'Premium',
    tagline: 'Balanced modern finishes — Our most chosen package for Bangalore family homes & contemporary villas',
    rate: '₹2,150',
    rateUnit: 'per sq.ft',
    popular: true,
    badgeColor: 'bg-brand-blue text-white',
    highlights: [
      'High-Grade TMT Steel (Tata Tiscon / JSW Neosteel 550D)',
      'UltraTech Super / ACC Gold 53-Grade Cement with Waterproofing Admixtures',
      'High-Density Solid Blocks (6" & 4") with Wire-Mesh Reinforced Plastering',
      'Premium Glazed Vitrified Tiles / GVT Slabs (4x2 ft, up to ₹85/sq.ft)',
      'Designer False Ceiling in Living & Dining with LED Cove Lighting',
      'Jaquar / Kohler Concealed Diverters & Wall-Hung Commode Fixtures',
      'Schneider / Legrand Modular Smart-Ready Switches & Fire-Safe Cabling',
      'First Quality Teak Wood Main Door (5"x4" frame) & 3-Track UPVC Windows with Mesh',
      '72-Hour Water Pond Tested Terrace & Toilet Waterproofing'
    ],
    civilWork: {
      steel: 'Tata Tiscon 550D / JSW Neosteel 550D High-Ductility Rebar exclusively',
      cement: 'UltraTech Super / Birla Super 53-grade with Dr. Fixit LW+ waterproofing admixture',
      aggregates: 'Triple-washed blue granite machine-crushed 20mm/40mm aggregate',
      sand: 'Certified washed M-Sand for RCC structural elements; triple-washed P-Sand for plastering',
      masonry: '6" high-density solid concrete blocks for external envelope; 4" blocks for internal partitions',
      rcc: 'M25 grade machine-mixed / RMC design with structural cube compression testing',
      curing: 'Full 21-day automated sprinkler and geotextile hessian ponding curing cycle'
    },
    flooring: {
      livingDining: 'Large Format 4x2 ft Glazed Vitrified Tiles (GVT) / PGVT (Somany/Kajaria) up to ₹85/sq.ft',
      bedrooms: '4x2 ft Premium Vitrified Tiles / Wooden texture tiles in Master Bedroom up to ₹75/sq.ft',
      kitchen: 'Anti-skid Vitrified Slabs with Jet Black / Black Pearl Granite & 2.5ft digital wall tiles',
      balconyUtility: 'Rustic Matte Anti-skid vitrified tiles (2x2 ft) with waterproofing skirtings',
      staircase: 'Full-slab Black Granite / Flamed Sadarahalli with SS 304 architectural glass handrails'
    },
    doorsWindows: {
      mainDoor: 'First-quality Burma/African Teak wood frame (5"x4") with BST Teak designer shutter & Yale brass lock',
      internalDoors: 'Honne / Red Miranti wood frames (4"x3") with 32mm flush doors finished in premium veneer/laminate',
      bathroomDoors: 'WPC / FRP waterproof frames and heavy-duty laminated moisture-proof doors',
      windows: '3-Track UPVC sliding windows (Kommerling/Finesta profile) with mosquito mesh & 6mm toughened glass'
    },
    painting: {
      interior: '2 Coats Asian Paints Royale Luxury Emulsion over 2 coats Asian Paints/Birla putty & primer',
      exterior: '2 Coats Asian Paints Apex Ultima Protek with 7-year anti-fading & weather guard warranty',
      ceiling: 'Asian Paints Royale White with integrated gypsum designer false ceiling in living/dining',
      metalWood: 'PU Polish for main door and Teak frames; Asian Paints PU enamel on all metal grills'
    },
    kitchenPlumbing: {
      countertop: '20mm Jet Black Premium Granite or Engineered Quartz with chamfered edge profiling',
      sink: 'Franke / Carysil Quartz or SS 304 satin finish double-bowl sink with swan-neck pull-out tap',
      cpFittings: 'Jaquar Artize / Kohler Alive concealed hot & cold diverters with overhead rain shower',
      sanitaryware: 'Kohler / Jaquar rimless wall-hung commodes with concealed pneumatic flush plates',
      pipes: 'Ashirvad SDR-11 CPVC internal pressure lines & Astral Silencio low-noise drainage lines'
    },
    electrical: {
      wiring: 'Finolex / Havells FRLS (Flame Retardant Low Smoke) 100% pure electrolytic copper cabling',
      switches: 'Schneider AvatarOn / Legrand Mylinc sleek modular switches with LED indicators',
      distribution: 'ABB / Schneider multi-tier DB box with RCCB and surge protection modules',
      provisions: 'AC points in all bedrooms & living, EV 16A car charger provision, Solar water heater line'
    }
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    tier: 'Luxury',
    tagline: 'High-end bespoke architectural design with Italian marble, home automation & designer specifications',
    rate: '₹2,600',
    rateUnit: 'per sq.ft',
    popular: false,
    badgeColor: 'bg-brand-gold text-navy-950 font-bold',
    highlights: [
      'Tata Tiscon 550D SD (Super Ductile) Rebar with Automated Bar Bending',
      'UltraTech M25/M30 RMC with Certified Laboratory Compressive Strength Testing',
      'Imported Italian Marble (Bottochino / Dyna / Michelangelo) in Living & Dining',
      'Engineered Hardwood / Herringbone Wooden Flooring in Master Bedroom Suites',
      'Kohler / Grohe / Duravit Concealed Thermostatic Shower Systems & Glass Partitions',
      'Complete False Ceiling with Magnetic Track Lights & Smart Automation Conduit Routing',
      'Full Burma Teak Main Door (6"x4" frame) with Smart Biometric Touch/RFID Lock',
      'Schuco / Thermal-Break Double Glazed Soundproof UPVC / Aluminium Windows',
      'Comprehensive 10-Year Multi-Tier Structural & Waterproofing Warranty Dossier'
    ],
    civilWork: {
      steel: 'Tata Tiscon 550D SD (Super Ductile) with automated structural bar bending detailing',
      cement: 'UltraTech M25/M30 Ready Mix Concrete (RMC) with computerized batch testing logs',
      aggregates: 'Washed basalt & high-density granite crushed stone with strict sieve grading',
      sand: 'High-purity washed robo-sand with automated silt-separator verification',
      masonry: 'High-thermal efficiency Porotherm Clay Bricks or Certified Class A Solid Dense Blocks',
      rcc: 'Seismic Zone compliant RCC frame design certified by Senior Structural Consultants',
      curing: '28-day curing regime using automated chemical curing compounds and geotextile membranes'
    },
    flooring: {
      livingDining: 'Imported Italian Marble (Bottochino / Perlato / Diana) mirror-polished with epoxy grout',
      bedrooms: 'Imported Engineered Hardwood or Quick-Step Belgian Laminated Wooden Planks',
      kitchen: 'Caesarstone / Silestone Engineered Quartz Countertop with seamless undermount sink',
      balconyUtility: 'Deck Wood / Anti-slip vitrified timber tiles with hidden trench drainage',
      staircase: 'Imported Marble treads with cantilevered glass balustrades & recessed LED step lights'
    },
    doorsWindows: {
      mainDoor: 'Solid Burma Teak (6"x4" frame) 45mm solid wood door with Yale/Häfele Biometric Smart Lock',
      internalDoors: '8-Foot Full Height Solid Core Doors with natural wood veneer and PU matte polish',
      bathroomDoors: 'Marine-grade BWP Flush doors with rear back-painted glass / stone cladding',
      windows: 'Schuco / Kommerling German Double Glazed (DGU) acoustic insulated systems'
    },
    painting: {
      interior: 'Asian Paints Royale Aspira / Oikos Italian Stucco decorative textures in highlight zones',
      exterior: 'Asian Paints Apex Ultima Protek Duralife with 10-Year Certified Anti-Weather Guarantee',
      ceiling: 'Complete Gyproc False Ceiling with shadow line details and magnetic low-voltage track lighting',
      metalWood: 'High-end PU (Polyurethane) automated spray polish on all timber elements'
    },
    kitchenPlumbing: {
      countertop: 'Imported Quartz / Neolith sintered stone countertop with full backsplash',
      sink: 'Häfele / Franke handmade 1.2mm SS 304 satin sink with built-in waste disposer provision',
      cpFittings: 'Grohe Euphoria / Hansgrohe thermostatic concealed shower systems with body jets',
      sanitaryware: 'Duravit / Toto wall-hung rimless toilets with sensor flush & concealed Geberit cisterns',
      pipes: 'Viega / Geberit multi-layer composite piping for silent zero-vibration water distribution'
    },
    electrical: {
      wiring: 'Finolex FRLS-H low-smoke zero-halogen high-conductivity copper wiring',
      switches: 'Legrand Arteor / Schneider Unica smart touch switches with home automation integration',
      distribution: 'Schneider Acti9 dual-RCD smart power distribution network',
      provisions: 'Full Smart Home ready wiring (lighting, motorized curtains, climate control, EV charging)'
    }
  }
];

export interface InteriorPackage {
  id: string;
  name: string;
  tier: 'Basic' | 'Premium' | 'Luxury';
  tagline: string;
  idealFor: string;
  woodGrade: string;
  hardware: string;
  finishType: string;
  warranty: string;
  roomEstimates: {
    oneBhk: string;
    twoBhk: string;
    threeBhk: string;
  };
  sqFtRates: {
    wardrobeCarpenter: string;
    wardrobeModular: string;
    kitchenCarpenter: string;
    kitchenModular: string;
    tvUnitCarpenter: string;
    tvUnitModular: string;
  };
  highlights: string[];
  scopeBreakdown: {
    foyerLiving: string;
    modularKitchen: string;
    masterBedroom: string;
    guestBedroom: string;
    lightingFalseCeiling: string;
  };
}

export const interiorPackagesData: InteriorPackage[] = [
  {
    id: 'interior-basic',
    name: 'Basic Interior Package',
    tier: 'Basic',
    tagline: 'Functional & Durable — Accessible quality with honest materials',
    idealFor: 'Furnishing a rental property, tight timelines, or clean functional homes without over-investing',
    woodGrade: 'Commercial / MR Grade Plywood (ISI 303 marked)',
    hardware: 'Standard hydraulic hinges & drawer channels (Ebco / Godrej basic)',
    finishType: '0.8mm Inner/Outer Matte Laminates (Century / Greenlam)',
    warranty: '1-Year On-Site Service Warranty',
    roomEstimates: {
      oneBhk: '₹1.80 – ₹2.50 Lakhs',
      twoBhk: '₹3.20 – ₹4.50 Lakhs',
      threeBhk: '₹4.80 – ₹6.20 Lakhs'
    },
    sqFtRates: {
      wardrobeCarpenter: '₹1,250/sq.ft',
      wardrobeModular: '₹1,450/sq.ft',
      kitchenCarpenter: '₹1,550/sq.ft',
      kitchenModular: '₹1,750/sq.ft',
      tvUnitCarpenter: '₹1,150/sq.ft',
      tvUnitModular: '₹1,350/sq.ft'
    },
    highlights: [
      'MR Grade ISI 303 Plywood for all dry areas',
      '0.8mm Matte finish laminates with PVC edge-banding',
      'Standard soft-close hinges on all cabinet shutters',
      'Basic modular kitchen with 3 wire baskets & SS handles',
      'Sleek TV entertainment unit for living room',
      '1-Year service warranty with post-handover support'
    ],
    scopeBreakdown: {
      foyerLiving: 'Clean TV unit with bottom drawers, cable grommet & open shelf ledge',
      modularKitchen: 'Base & wall cabinets in MR ply with 0.8mm laminate, 3 SS baskets & cutlery tray',
      masterBedroom: 'Hinged 2-door/3-door wardrobe (up to 7ft height) with internal hanging rod, drawers & lock',
      guestBedroom: 'Standard 2-door wardrobe with overhead loft storage provision',
      lightingFalseCeiling: 'Basic peripheral cove false ceiling in living room with LED strip lights'
    }
  },
  {
    id: 'interior-premium',
    name: 'Premium Interior Package',
    tier: 'Premium',
    tagline: 'The Sweet Spot — Our most chosen package for Bangalore homeowners',
    idealFor: 'Homeowners building their primary residence who want a refined, modern home with superior durability',
    woodGrade: 'Sainik 710 BWR / BWP Marine-Grade Plywood (Century / Greenply)',
    hardware: 'Soft-close tandem box drawers & hinges (Hettich / Ebco Pro)',
    finishType: '1.0mm High-Gloss & Suede Laminates + Fluted PVC Louvers',
    warranty: '5-Year Warranty on Plywood & Hardware',
    roomEstimates: {
      oneBhk: '₹2.80 – ₹3.80 Lakhs',
      twoBhk: '₹4.80 – ₹6.50 Lakhs',
      threeBhk: '₹7.20 – ₹9.80 Lakhs'
    },
    sqFtRates: {
      wardrobeCarpenter: '₹1,550/sq.ft',
      wardrobeModular: '₹1,850/sq.ft',
      kitchenCarpenter: '₹1,950/sq.ft',
      kitchenModular: '₹2,350/sq.ft',
      tvUnitCarpenter: '₹1,450/sq.ft',
      tvUnitModular: '₹1,750/sq.ft'
    },
    highlights: [
      'Century Sainik 710 BWP Boiling Waterproof Plywood for Kitchen & Vanities',
      '1.0mm Anti-Scratch Premium Laminates with 2mm seamless PUR Edge-Banding',
      'Hettich / Ebco Soft-Close Tandem Boxes with 30kg load capacity',
      'Full Modular Kitchen with Tandem Drawers, Bottle Pull-out & Corner Carousel',
      'Floor-to-Ceiling Wardrobes with Profile Handles & Integrated Sensor LED Strips',
      'Designer Gypsum False Ceiling with Warm White COB Spotlights across Living & Bedrooms'
    ],
    scopeBreakdown: {
      foyerLiving: 'Designer Foyer console + Accent Fluted Wall Paneling + Floating TV unit with LED backlit shelf',
      modularKitchen: 'BWP Grade Kitchen with Acrylic/1mm Gloss shutters, 5 Hettich Tandem boxes, Wicker basket & spice pull-out',
      masterBedroom: 'Sliding or Hinged 8ft Wardrobe with Tinted Glass/Laminate mix, dresser with mirror & study table',
      guestBedroom: '3-Door Wardrobe with internal organizer, bedside tables & upholstered headboard panel',
      lightingFalseCeiling: 'Complete Saint-Gobain Gyproc false ceiling in Living, Dining & Master Bedroom with COB spot lights'
    }
  },
  {
    id: 'interior-luxury',
    name: 'Luxury Interior Package',
    tier: 'Luxury',
    tagline: 'Refined Excellence — Bespoke luxury for forever homes & villas',
    idealFor: 'Forever villas and luxury apartments requiring imported materials, acrylics, veneer polish & Häfele/Blum systems',
    woodGrade: '100% Calibrated Gurjan Core BWP Marine Plywood (Century Club Prime / Green Club)',
    hardware: 'Blum Aventos lift-ups, Häfele Legrabox & Blumotion soft-close systems',
    finishType: 'Anti-Fingerprint Acrylic, Italian PU Lacquer, Natural Smoked Wood Veneer',
    warranty: '10-Year Comprehensive Warranty & Lifetime Hardware Warranty',
    roomEstimates: {
      oneBhk: '₹4.20 – ₹5.50 Lakhs',
      twoBhk: '₹7.80 – ₹11.50 Lakhs',
      threeBhk: '₹12.50 – ₹18.00+ Lakhs'
    },
    sqFtRates: {
      wardrobeCarpenter: '₹2,100/sq.ft',
      wardrobeModular: '₹2,600/sq.ft',
      kitchenCarpenter: '₹2,800/sq.ft',
      kitchenModular: '₹3,400/sq.ft',
      tvUnitCarpenter: '₹2,200/sq.ft',
      tvUnitModular: '₹2,700/sq.ft'
    },
    highlights: [
      '100% Calibrated Gurjan Marine Plywood (BWP IS 710)',
      'High-Gloss Acrylic / PU Matte Lacquer & Smoked Natural Wood Veneers',
      'Blum Aventos Bi-fold Lift-ups, Häfele Pantry Units & Magic Corner pullouts',
      'Walk-In Wardrobes with Rose Gold Aluminium Profiles & Fluted Toughened Glass',
      'Motorized Curtain Tracks & Smart Home Automation integration',
      '10-Year Warranty with Annual Preventive Maintenance Visits'
    ],
    scopeBreakdown: {
      foyerLiving: 'Italian Marble/Onyx backlit foyer feature wall, CNC brass inlays, bespoke acoustic TV unit with soundbar integration',
      modularKitchen: 'German Blum Tandembox setup, Quartz backsplash, Tall Pantry Pullout unit, Built-in Oven/Microwave cavity & Häfele magic corner',
      masterBedroom: 'Walk-in Wardrobe with rose gold profile glass doors, sensor illuminated hanger rods, vanity island & floating executive study',
      guestBedroom: 'Full height veneer/lacquered glass wardrobe with push-to-open lofts and integrated ambient bedside reading lights',
      lightingFalseCeiling: 'Architectural magnetic track lights, cove ambient lighting, frameless recessed spotlights & acoustic ceiling baffles'
    }
  }
];

export const constructionCostFactors = [
  {
    title: 'Number of Floors (G+1 vs G+2/G+3)',
    description: 'G+1 construction costs less per sq.ft compared to G+2 or G+3 because column load sizing, reinforcement steel tonnage, and concrete pumping logistics scale up with each additional level.'
  },
  {
    title: 'Material Grade & Finishes',
    description: 'Choice of cement, steel rebar, flooring tiles vs Italian marble, and sanitaryware brands can swing your overall construction budget by ₹300–₹600 per sq.ft.'
  },
  {
    title: 'Plot Location in Bengaluru',
    description: 'Site accessibility, road width for transit concrete mixers (RMC), municipal zonal regulations, and local labor logistics vary across Central, East (Whitefield/Sarjapur), and North/South Bengaluru.'
  },
  {
    title: 'Architectural & Elevation Complexity',
    description: 'Cantilever projections, curved walls, double-height living ceilings, vertical garden pockets, and intricate stone/HPL louvers require specialized shuttering and engineering supervision.'
  },
  {
    title: 'Electrical & Plumbing Specifications',
    description: 'Count of electrical points, concealed diverters, heat pump / solar lines, automated switchgear, and sound-insulated drainage pipes directly influence installation costs.'
  },
  {
    title: 'Stilt / Basement Parking Scope',
    description: 'Stilt floors and underground basement excavation with retaining RCC walls are quoted separately based on geotechnical soil reports and water-table depth.'
  }
];

export const packagesFaqs = [
  {
    question: 'What is the construction cost per sq ft in Bangalore?',
    answer: 'Residential house construction in Bangalore typically ranges from ₹1,850 to ₹3,000+ per sq.ft of built-up area. At My Space, our transparent packages cover three distinct quality tiers: Basic (₹1,950/sq.ft), Premium (₹2,150/sq.ft), and Luxury (₹2,600/sq.ft) — all-inclusive of architectural design, civil structure, MEP plumbing/electrical, and turnkey finishes.'
  },
  {
    question: 'Does the sq ft price include everything?',
    answer: 'Our turnkey packages cover 100% of the civil structure, architectural drawings, structural engineering, and finishing materials specified in the line-item BOQ. External scope items quoted separately include: BBMP/BDA plan sanction liaison fees, compound wall & main entrance gate, borewell drilling, and bespoke loose interior furniture. Full itemized inclusions and exclusions are documented before contract signing.'
  },
  {
    question: 'How do I estimate my total home construction cost?',
    answer: 'Multiply your planned built-up area by the package rate. For example: A 2,000 sq.ft home with the Premium Package (₹2,150/sq.ft) comes to approximately ₹43 Lakhs. Book a free site visit with our engineers to receive a site-specific, line-item BOQ tailored to your plot dimensions.'
  },
  {
    question: 'What is the difference between carpenter-made and factory modular interiors?',
    answer: 'Carpenter work is crafted on-site with manual cutting and laminate pressing. Factory-finished modular interiors use computerized CNC edge-banding, hot-melt PUR glues, and automated boring machines — ensuring 0.1mm joint precision, zero bubbling, waterproof edge seals, and rapid 15-day on-site assembly without dust and disruption.'
  },
  {
    question: 'Can I mix packages (e.g. Basic for bedrooms and Luxury for the kitchen)?',
    answer: 'Yes, absolutely. Our itemized BOQ structure allows complete customization. You can choose a Premium specification for the civil build and upgrade to Luxury acrylic finishes for the kitchen and master wardrobe.'
  }
];
