export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Civil" | "Interiors" | "Elevation & 3D";
  status: "Completed" | "Ongoing" | "Concept";
  location: string;
  builtUpArea: string;
  clientBrief: string;
  mySpaceContribution: string[];
  keyFeatures: string[];
  heroImage: string;
  galleryImages: { url: string; caption: string; type: "photo" | "blueprint" | "render" }[];
  materialsUsed: string[];
  year: string;
  summary: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "serene-courtyard-villa",
    slug: "serene-courtyard-villa-hsr",
    title: "The Courtyard Residence",
    category: "Residential",
    status: "Completed",
    location: "HSR Layout Sector 2, Bengaluru",
    builtUpArea: "4,200 sq.ft (G+2 Duplex)",
    summary: "A contemporary tropical home centered around an internal double-height courtyard that maximizes natural light and cross-ventilation on a 40x60 plot.",
    heroImage: "/images/company/real-project-62.jpeg",
    clientBrief: "The client wanted a spacious 4BHK family residence with ample natural greenery, dedicated home-office space, private terraces, and intuitive flow between common areas while maintaining bedroom privacy.",
    mySpaceContribution: [
      "2D Architectural spatial planning & 3D Isometric floor planning",
      "Contemporary 3D elevation design with terracotta jali screens and cantilevered balconies",
      "Turnkey civil construction with M25 grade RCC framing and solid block masonry",
      "Concealed electrical, HVAC duct provision, and 3-stage terrace waterproofing",
      "Full interior execution for modular kitchen, wardrobes, and living room acoustics"
    ],
    keyFeatures: [
      "Internal double-height landscaped courtyard with skylight illumination",
      "Perforated terracotta brick jali façade for glare-free natural ventilation",
      "Engineered rainwater harvesting tank integrated into foundation",
      "Direct indoor-outdoor living connection with floor-to-ceiling glass sliders"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-62.jpeg",
        caption: "Main façade showing cantilevered upper decks and vertical greens",
        type: "photo"
      },
      {
        url: "/images/company/real-project-69.jpeg",
        caption: "Multi-storey contemporary residential villa",
        type: "photo"
      },
      {
        url: "/images/company/interior-design-hero.jpeg",
        caption: "Master bedroom suite with integrated warm lighting",
        type: "photo"
      },
      {
        url: "/images/company/real-project-01.jpeg",
        caption: "Ground floor structural layout and dimensional grid",
        type: "photo"
      }
    ],
    materialsUsed: ["Sadahalli Granite", "Terracotta Jali", "Teakwood Joinery", "Tata Tiscon 550D Rebar", "Saint-Gobain Glass"],
    year: "2024"
  },
  {
    id: "horizon-tech-workspace",
    slug: "horizon-tech-workspace-whitefield",
    title: "Horizon Commercial Hub",
    category: "Commercial",
    status: "Completed",
    location: "Whitefield, Bengaluru",
    builtUpArea: "12,500 sq.ft (G+3 Commercial)",
    summary: "A modern commercial building designed for flexible IT work environments, clinic suites, and high-street retail on the ground floor.",
    heroImage: "/images/company/showroom-2.jpeg",
    clientBrief: "Create a high-efficiency commercial building with maximum column-free floor plates, energy-efficient glazing, dedicated elevator shafts, and provision for 100% DG power backup.",
    mySpaceContribution: [
      "Commercial column grid optimization and structural load calculations",
      "Structural glazing and ventilated aluminium composite panel (ACP) façade execution",
      "High-traffic lobby finishes, granite stairwells, and ADA-compliant accessibility ramps",
      "Coordinated MEP risers, fire hydrants, and basement retention drainage"
    ],
    keyFeatures: [
      "Open-span 8.5-meter column grids for customizable tenant layouts",
      "Double-glazed acoustic façade cutting exterior traffic noise by 38dB",
      "Basement parking with high-clearance ramp and epoxy-coated flooring",
      "Dedicated rooftop terrace break-out zone with panoramic views"
    ],
    galleryImages: [
      {
        url: "/images/company/showroom-2.jpeg",
        caption: "Exterior commercial façade with structural glazing and signage canopy",
        type: "photo"
      },
      {
        url: "/images/company/showroom-3.jpeg",
        caption: "Open-plan corporate workspace fit-out on level 2",
        type: "photo"
      },
      {
        url: "/images/company/showroom-4.jpeg",
        caption: "Executive boardroom with acoustic wood-slat paneling",
        type: "photo"
      }
    ],
    materialsUsed: ["Acoustic Double Glazing", "ACP Cladding", "Steel Frame Formwork", "Polished Flamed Granite", "VRV Air Conditioning"],
    year: "2024"
  },
  {
    id: "canopy-house-sarjapur",
    slug: "canopy-house-sarjapur",
    title: "The Canopy House",
    category: "Residential",
    status: "Ongoing",
    location: "Sarjapur Road, Bengaluru",
    builtUpArea: "3,600 sq.ft (G+1 Villa)",
    summary: "A sustainable contemporary villa featuring prominent cantilevered roof canopies, parking porch, and courtyard gardens.",
    heroImage: "/images/company/turnkey-house-hero.jpeg",
    clientBrief: "A custom villa incorporating sheltered overhangs for Bengaluru's monsoon and summer sun, open living spaces, and secure compound gates.",
    mySpaceContribution: [
      "Concept sketch to 3D photorealistic elevation modeling",
      "Turnkey structural civil execution and roof canopy construction",
      "High-grade block masonry and weather-resistant external wall finishes"
    ],
    keyFeatures: [
      "Prominent architectural tile canopy shading ground entry and porch",
      "Cantilevered upper floor balcony decks",
      "Integrated rainwater drainage and landscaped courtyard perimeter"
    ],
    galleryImages: [
      {
        url: "/images/company/turnkey-house-hero.jpeg",
        caption: "3D architectural visual render of canopy villa elevation",
        type: "render"
      },
      {
        url: "/images/company/real-project-18.jpeg",
        caption: "Current site progress: Civil frame and footing reinforcement",
        type: "photo"
      }
    ],
    materialsUsed: ["Roof Tile Canopy", "Form-finish Concrete", "Weathering Steel", "Teak Accents"],
    year: "2025"
  },
  {
    id: "zenith-penthouse-interiors",
    slug: "zenith-penthouse-interiors-indiranagar",
    title: "Zenith Penthouse Interiors",
    category: "Interiors",
    status: "Completed",
    location: "Indiranagar, Bengaluru",
    builtUpArea: "2,800 sq.ft",
    summary: "Refined minimalist interior transformation featuring warm wood veneers, fluted paneling, and customized concealed storage.",
    heroImage: "/images/company/interior-design-hero.jpeg",
    clientBrief: "Transform an empty shell apartment into a warm, clutter-free home with dedicated reading nooks, customized pantry ergonomics, and warm ambient lighting.",
    mySpaceContribution: [
      "Detailed 3D walkthroughs and material finish boards",
      "Custom cabinetry fabrication with IS 710 marine ply and imported natural oak veneers",
      "Architectural false ceiling with magnetic track and low-glare spotlighting",
      "Concealed electrical rerouting and bespoke vanity counters"
    ],
    keyFeatures: [
      "Full-height custom cabinetry and floating workstation desk",
      "Integrated architectural warm LED cove wall washers",
      "Bespoke upholstered headboard with fluted floral accent panels"
    ],
    galleryImages: [
      {
        url: "/images/company/interior-design-hero.jpeg",
        caption: "Primary bedroom suite with custom study and cove illumination",
        type: "photo"
      },
      {
        url: "/images/company/real-project-50.jpeg",
        caption: "Executive suite interior with floor-to-ceiling wardrobes",
        type: "photo"
      }
    ],
    materialsUsed: ["Natural Oak Veneer", "Italian Statuario Marble", "Fluted Toughened Glass", "Hafele Soft-Close Hardware", "Asian Paints Royale Matte"],
    year: "2024"
  },
  {
    id: "koramangala-elevation-concept",
    slug: "modern-minimalist-elevation-koramangala",
    title: "Urban Minimalist Façade Study",
    category: "Elevation & 3D",
    status: "Concept",
    location: "Koramangala 4th Block, Bengaluru",
    builtUpArea: "3,800 sq.ft (G+3)",
    summary: "A clean geometric 3D façade design proposal utilizing floating concrete planes, timber louvers, and vertical decorative screens.",
    heroImage: "/images/company/real-project-54.jpeg",
    clientBrief: "Develop an architectural elevation concept that provides privacy from a busy street while allowing morning sunlight into the primary living spaces.",
    mySpaceContribution: [
      "Day and Night 3D architectural perspective renders",
      "Sun-path solar shadow analysis for optimum louvre angle calculation",
      "2D exterior working drawings with cladding grid dimensions"
    ],
    keyFeatures: [
      "CNC cut geometric privacy jali screen on first and second floors",
      "Warm faux wood exterior texture and floating grey frame accents",
      "Recessed entryway with warm architectural downlighting"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-54.jpeg",
        caption: "3D Perspective render of street façade with jali screen and louvers",
        type: "render"
      },
      {
        url: "/images/company/real-project-69.jpeg",
        caption: "Contemporary vertical elevation perspective",
        type: "render"
      }
    ],
    materialsUsed: ["Timber Finish Aluminium Louvers", "Concrete Micro-cement", "Grey Quartzite Stone", "Linear LED Profiles"],
    year: "2025"
  },
  {
    id: "jp-nagar-foundation-structure",
    slug: "jp-nagar-deep-foundation-structure",
    title: "JP Nagar Structural Execution & Raft Foundation",
    category: "Civil",
    status: "Completed",
    location: "JP Nagar 7th Phase, Bengaluru",
    builtUpArea: "5,500 sq.ft Sub & Superstructure",
    summary: "Heavy civil contracting including basement excavation, soil shoring, raft foundation casting, and multi-storey RCC frame construction.",
    heroImage: "/images/company/real-project-18.jpeg",
    clientBrief: "Execute deep basement civil works in high-moisture clay soil with neighbouring buildings on three sides, followed by complete RCC framed superstructure.",
    mySpaceContribution: [
      "Soil shoring and sheet piling coordination for safe deep excavation",
      "High-density M30 grade concrete raft foundation with crystalline waterproofing",
      "Precision structural column and shear wall casting with mechanical vibrators",
      "Independent 3rd-party concrete cube strength testing and compliance reports"
    ],
    keyFeatures: [
      "Dual-layer basement membrane waterproofing with 10-year integrity guarantee",
      "Heavy load-bearing columns accommodating future rooftop solar installations",
      "Zero settlement or structural crack propagation in adjoining properties"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        caption: "Basement raft foundation rebar cage before concrete pour",
        type: "photo"
      },
      {
        url: "/images/company/real-project-85.jpeg",
        caption: "Structural column reinforcement and footing engineering schematics",
        type: "photo"
      }
    ],
    materialsUsed: ["Fe 550D TMT Steel", "M30 Ready-Mix Concrete", "Crystalline Waterproofing Additives", "High-Yield Shuttering Plywood"],
    year: "2024"
  },
  {
    id: "luxury-car-showroom-bangalore",
    slug: "luxury-car-showroom-bangalore",
    title: "Luxury Automotive Showroom & Experience Hub",
    category: "Commercial",
    status: "Completed",
    location: "Outer Ring Road, Bengaluru",
    builtUpArea: "18,000 sq.ft Commercial Complex",
    summary: "State-of-the-art commercial showroom architecture featuring double-height frameless glass façade, heavy load-bearing structural slabs, and high-lux architectural illumination.",
    heroImage: "/images/company/showroom-1.jpeg",
    clientBrief: "Design and build an iconic flagship commercial showroom with expansive open-span column spacing, vehicle ramp access, customer lounge, and daylight-balanced illumination.",
    mySpaceContribution: [
      "Comprehensive architectural spatial planning and commercial elevation modeling",
      "Reinforced heavy-duty floor slab execution designed for multi-vehicle dynamic loads",
      "Frameless structural glass curtain wall installation and perimeter MEP lighting channels",
      "Turnkey civil construction and premium industrial interior fit-out delivery"
    ],
    keyFeatures: [
      "12-meter column-free display floor with polished high-gloss vitrified tiles",
      "Custom overhead geometric light-grid providing 1200 lux uniform vehicle illumination",
      "Dedicated mezzanine executive conference room overlooking the central display",
      "Integrated fire suppression sprinkler grid and concealed HVAC air diffusion"
    ],
    galleryImages: [
      {
        url: "/images/company/showroom-1.jpeg",
        caption: "Central showroom display floor with luxury vehicles and custom lighting grid",
        type: "photo"
      },
      {
        url: "/images/company/showroom-2.jpeg",
        caption: "Showroom perspective view featuring mezzanine lounge and customer delivery bay",
        type: "photo"
      },
      {
        url: "/images/company/showroom-3.jpeg",
        caption: "Corner architectural perspective showing illuminated display vehicles",
        type: "photo"
      },
      {
        url: "/images/company/showroom-4.jpeg",
        caption: "Wide-angle panoramic view of commercial entrance and display vehicles",
        type: "photo"
      },
      {
        url: "/images/company/showroom-5.jpeg",
        caption: "Evening showroom view with warm architectural lighting and glass façade",
        type: "photo"
      }
    ],
    materialsUsed: ["Structural Toughened Glass", "High-Load Industrial Concrete", "Powder-Coated Steel Truss", "3000K Linear LED Profiles", "Acoustic Stretch Ceiling"],
    year: "2024"
  },
  {
    id: "bespoke-multi-deck-villa",
    slug: "bespoke-multi-deck-villa",
    title: "The Multi-Deck Contemporary Villa",
    category: "Residential",
    status: "Completed",
    location: "Sarjapur Road, Bengaluru",
    builtUpArea: "4,800 sq.ft (G+2 Duplex)",
    summary: "An expansive modern residence designed with cantilevered terrace decks, double-height living spaces, and natural cross-ventilation.",
    heroImage: "/images/company/real-project-62.jpeg",
    clientBrief: "A spacious turnkey 5-BHK luxury home with private family decks on each level, master bedroom suites, home office, and secure parking.",
    mySpaceContribution: [
      "Full architectural concept to 3D working drawings and MEP coordination",
      "Turnkey RCC civil execution with earthquake-resistant frame and monolithic cantilevers",
      "Custom woodwork, false ceiling execution, and bathroom marble tiling"
    ],
    keyFeatures: [
      "Staggered private cantilevered decks with safety glass railings",
      "Open-concept family lounge connecting directly to the kitchen and dining area",
      "100% Vastu-compliant layout with optimal North-East light orientation"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-62.jpeg",
        caption: "Completed multi-storey villa façade with terrace decks",
        type: "photo"
      },
      {
        url: "/images/company/real-project-69.jpeg",
        caption: "Spacious interior living space with natural daylight",
        type: "photo"
      },
      {
        url: "/images/company/real-project-80.jpeg",
        caption: "Master bedroom suite with custom wooden headboard and warm lighting",
        type: "photo"
      }
    ],
    materialsUsed: ["Sadahalli Flamed Granite", "Teak Joinery", "Tata Tiscon 550D Rebar", "Saint-Gobain Glass", "Asian Paints Royale"],
    year: "2024"
  },
  {
    id: "hebbal-reinforced-superstructure",
    slug: "hebbal-reinforced-superstructure",
    title: "Hebbal RCC Superstructure & Civil Core",
    category: "Civil",
    status: "Completed",
    location: "Hebbal, Bengaluru",
    builtUpArea: "8,500 sq.ft (Commercial & Residential Civil)",
    summary: "Heavy-duty reinforced concrete framed structure executing deep column footings, high-strength M30 mix design, and high-tolerance shuttering.",
    heroImage: "/images/company/real-project-85.jpeg",
    clientBrief: "Execute structural civil works for a multi-storey development near Hebbal with high load-bearing capacity and seismic safety conformance.",
    mySpaceContribution: [
      "IS 456 compliant column shuttering, starter marking, and laser leveling",
      "Fe550D TMT rebar bending, spacing, and cover block assurance",
      "Third-party batch plant concrete quality checks and 28-day cube strength audits"
    ],
    keyFeatures: [
      "Seismic Zone II compliant structural frame detailing",
      "High-clearance commercial ceiling spans with column optimization",
      "Precision basement retaining walls and sump waterproofing"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-85.jpeg",
        caption: "Heavy RCC framing and column reinforcement in progress",
        type: "photo"
      },
      {
        url: "/images/company/real-project-18.jpeg",
        caption: "Raft foundation shuttering and rebar tying",
        type: "photo"
      }
    ],
    materialsUsed: ["UltraTech 53G Cement", "Tata Tiscon 550D Rebar", "RoboSand Manufactured Sand", "Fosroc Waterproofing Additives"],
    year: "2024"
  },
  {
    id: "yelahanka-deep-raft-foundation",
    slug: "yelahanka-deep-raft-foundation",
    title: "Yelahanka Foundation & Structural Civil",
    category: "Civil",
    status: "Completed",
    location: "Yelahanka, Bengaluru",
    builtUpArea: "6,200 sq.ft (Civil Foundation)",
    summary: "Comprehensive soil strata stabilization, deep raft excavation, and engineered structural foundation pour for high-durability residential apartments.",
    heroImage: "/images/company/real-project-01.jpeg",
    clientBrief: "Execute complex foundation and structural core on uneven soil strata with strict waterproofing and drainage guarantees.",
    mySpaceContribution: [
      "Soil bearing capacity (SBC) testing and foundation depth optimization",
      "Heavy rebar cage fabrication and continuous monolithic raft concrete pour",
      "Integral crystalline waterproofing for underground water tanks and sump"
    ],
    keyFeatures: [
      "Engineered raft foundation preventing differential settlement",
      "Anti-termite soil treatment conforming to IS 6313 standards",
      "Concealed PVC rainwater harvesting recharge well integration"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        caption: "Foundation rebar inspection and dimensional check",
        type: "photo"
      },
      {
        url: "/images/company/real-project-18.jpeg",
        caption: "Basement civil excavation and shuttering",
        type: "photo"
      }
    ],
    materialsUsed: ["Tata Tiscon 550D", "Ready Mix Concrete M30", "Dr. Fixit Integral Waterproofing", "Sadahalli Granite Base"],
    year: "2024"
  },
  {
    id: "koramangala-modern-3d-elevation",
    slug: "koramangala-modern-3d-elevation",
    title: "Koramangala Modernist 3D Façade & Villa",
    category: "Elevation & 3D",
    status: "Completed",
    location: "Koramangala, Bengaluru",
    builtUpArea: "5,400 sq.ft (Villa & Elevation)",
    summary: "Architectural 3D elevation modeling, solar shading louvers, and turnkey execution featuring contemporary wood-finish aluminium cladding.",
    heroImage: "/images/company/front-elevation-hero.jpeg",
    clientBrief: "Transform a dated exterior into a stunning contemporary landmark with geometric cantilevered forms and warm ambient lighting.",
    mySpaceContribution: [
      "Photorealistic 3D day and night elevation simulations with ray-traced lighting",
      "Engineering fabrication drawings for CNC louvers and cantilevered planters",
      "On-site execution of exterior ACP louvers, stone cladding, and weatherproof texture paint"
    ],
    keyFeatures: [
      "Precision solar louvers cutting afternoon heat by 4°C inside living areas",
      "Concealed architectural cove lighting on exterior balconies",
      "Zero-maintenance aluminium composite wood-grain finish cladding"
    ],
    galleryImages: [
      {
        url: "/images/company/front-elevation-hero.jpeg",
        caption: "Main 3D architectural façade with cantilevered louvers",
        type: "photo"
      },
      {
        url: "/images/company/real-project-39.jpeg",
        caption: "Exposed brick jali screen and exterior textures",
        type: "photo"
      }
    ],
    materialsUsed: ["Weatherproof Wood-grain ACP", "Saint-Gobain Solar Glass", "Asian Paints Apex Ultima", "Sadahalli Granite Plinth"],
    year: "2024"
  },
  {
    id: "jayanagar-structural-retrofit",
    slug: "jayanagar-structural-retrofit",
    title: "Jayanagar Structural Inspection & Audit",
    category: "Civil",
    status: "Completed",
    location: "Jayanagar, Bengaluru",
    builtUpArea: "3,800 sq.ft (Audit & Civil Retrofit)",
    summary: "Non-destructive testing (NDT), structural strength audit, column beam retrofitting, and certified valuation appraisal for a heritage residential home.",
    heroImage: "/images/company/real-project-75.jpeg",
    clientBrief: "Assess structural safety of an existing G+2 building for additional floor construction and obtain a certified civil engineer load clearance.",
    mySpaceContribution: [
      "Rebound hammer test and ultrasonic pulse velocity structural testing",
      "Micro-concrete column jacketing and rebar epoxy anchoring",
      "Chartered valuation appraisal report for bank mortgage approval"
    ],
    keyFeatures: [
      "Seismic reinforcement and beam strengthening without complete reconstruction",
      "Comprehensive structural stability certificate issued by registered valuer",
      "Detailed structural load calculation report conforming to NBC standards"
    ],
    galleryImages: [
      {
        url: "/images/company/real-project-75.jpeg",
        caption: "Senior engineer on-site rebar and structural verification",
        type: "photo"
      },
      {
        url: "/images/company/showroom-2.jpeg",
        caption: "Restored and strengthened commercial floor plate",
        type: "photo"
      }
    ],
    materialsUsed: ["Fosroc Conbextra GP2 Grout", "Micro-Concrete M40", "Chemical Anchors", "High-Yield Rebar"],
    year: "2024"
  }
];

export interface ProjectGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  workType: string;
  category: "Residential" | "Commercial" | "Civil" | "Interiors" | "Elevation & 3D";
  location: string;
  description: string;
}

export const allProjectGalleryImages: ProjectGalleryItem[] = [
  {
    id: "gal-01",
    imageUrl: "/images/company/turnkey-house-hero.jpeg",
    title: "Turnkey Contemporary Residential Villa",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "Sarjapur Road, Bengaluru",
    description: "Complete turnkey civil execution and multi-level villa construction built to BBMP setback standards."
  },
  {
    id: "gal-02",
    imageUrl: "/images/company/interior-design-hero.jpeg",
    title: "Bespoke Living & Dining Interior Architecture",
    workType: "Bespoke Interior & Joinery",
    category: "Interiors",
    location: "Indiranagar, Bengaluru",
    description: "Custom fluted oak wood wall paneling, architectural false ceiling with warm magnetic track lighting."
  },
  {
    id: "gal-03",
    imageUrl: "/images/company/front-elevation-hero.jpeg",
    title: "Architectural 3D Façade & Front Elevation",
    workType: "3D Elevation & Façade Design",
    category: "Elevation & 3D",
    location: "Koramangala 4th Block, Bengaluru",
    description: "Modern geometric 3D elevation modeling with solar shading louvers and vertical balcony planters."
  },
  {
    id: "gal-04",
    imageUrl: "/images/company/real-project-62.jpeg",
    title: "Multi-Deck Independent Family Residence",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "HSR Layout Sector 2, Bengaluru",
    description: "Turnkey G+2 RCC frame execution with cantilevered glass balconies and Sadahalli granite entry steps."
  },
  {
    id: "gal-05",
    imageUrl: "/images/company/real-project-83.jpeg",
    title: "Sustainable Brick & Concrete Villa",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "Sarjapur Road, Bengaluru",
    description: "Exposed wire-cut clay brick masonry with monolithic concrete form-finish ceilings."
  },
  {
    id: "gal-06",
    imageUrl: "/images/company/real-project-54.jpeg",
    title: "Minimalist Island Kitchen & Breakfast Bar",
    workType: "Custom Modular Kitchen",
    category: "Interiors",
    location: "Koramangala, Bengaluru",
    description: "IS 710 calibrated marine ply cabinetry with anti-scratch matte acrylic and engineered quartz countertop."
  },
  {
    id: "gal-07",
    imageUrl: "/images/company/real-project-18.jpeg",
    title: "Deep Basement Raft Foundation & Shuttering",
    workType: "RCC Raft & Foundation Civil",
    category: "Civil",
    location: "JP Nagar 7th Phase, Bengaluru",
    description: "Heavy rebar cage alignment, column starter verification, and high-density M30 concrete pour."
  },
  {
    id: "gal-08",
    imageUrl: "/images/company/showroom-1.jpeg",
    title: "Flagship Commercial Display Complex",
    workType: "Commercial Fit-out & Glazing",
    category: "Commercial",
    location: "Outer Ring Road, Bengaluru",
    description: "Expansive column-free commercial showroom with double-height frameless structural glazing."
  },
  {
    id: "gal-09",
    imageUrl: "/images/company/showroom-2.jpeg",
    title: "Commercial Mezzanine & Executive Lounge",
    workType: "Commercial Fit-out & Glazing",
    category: "Commercial",
    location: "Whitefield, Bengaluru",
    description: "Precision steel truss mezzanine, safety glass balustrades, and high-traffic granite flooring."
  },
  {
    id: "gal-10",
    imageUrl: "/images/company/showroom-3.jpeg",
    title: "Factory-Manufactured Architectural Joinery",
    workType: "Bespoke Interior & Joinery",
    category: "Interiors",
    location: "Indiranagar, Bengaluru",
    description: "Bespoke millwork display featuring acoustic timber battens and customized display cases."
  },
  {
    id: "gal-11",
    imageUrl: "/images/company/showroom-4.jpeg",
    title: "Corporate Meeting Room & Acoustic Wall Paneling",
    workType: "Living Room Acoustics & Paneling",
    category: "Interiors",
    location: "Whitefield, Bengaluru",
    description: "Acoustic fluted wood paneling with integrated recessed linear lighting and concealed wiring."
  },
  {
    id: "gal-12",
    imageUrl: "/images/company/showroom-5.jpeg",
    title: "Commercial Façade at Dusk with Warm Architectural Illumination",
    workType: "3D Elevation & Façade Design",
    category: "Commercial",
    location: "Outer Ring Road, Bengaluru",
    description: "Night lighting façade study with warm 3000K linear architectural washers and backlit signage."
  },
  {
    id: "gal-13",
    imageUrl: "/images/company/real-project-61.jpeg",
    title: "Turnkey Independent Duplex House",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "Electronic City Phase 1, Bengaluru",
    description: "Complete turnkey residential delivery with covered parking, utility area, and landscaped terrace."
  },
  {
    id: "gal-14",
    imageUrl: "/images/company/real-project-39.jpeg",
    title: "Wire-Cut Brick Exterior & Jali Screen",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "Sarjapur Road, Bengaluru",
    description: "Natural wire-cut clay bricks laid in stretcher bond with decorative perforation for passive cooling."
  },
  {
    id: "gal-15",
    imageUrl: "/images/company/real-project-75.jpeg",
    title: "On-Site Structural Inspection & Valuation Audit",
    workType: "Site Structural Inspection",
    category: "Civil",
    location: "Jayanagar 4th Block, Bengaluru",
    description: "Structural engineer site verification of RCC beam rebars, cover blocks, and dimensional conformity."
  },
  {
    id: "gal-16",
    imageUrl: "/images/company/real-project-85.jpeg",
    title: "Reinforced Concrete Frame Superstructure",
    workType: "RCC Raft & Foundation Civil",
    category: "Civil",
    location: "Hebbal, Bengaluru",
    description: "Fe550D TMT rebar tying and column shuttering inspection adhering to IS:456 standards."
  },
  {
    id: "gal-17",
    imageUrl: "/images/company/real-project-69.jpeg",
    title: "Double-Height Living Space & Skylight",
    workType: "Turnkey House Construction",
    category: "Residential",
    location: "HSR Layout Sector 2, Bengaluru",
    description: "Expansive double-height living lounge connecting interior courtyard with natural vertical sunlight."
  },
  {
    id: "gal-18",
    imageUrl: "/images/company/real-project-80.jpeg",
    title: "Master Suite with Custom Wooden Headboard",
    workType: "Bespoke Interior & Joinery",
    category: "Interiors",
    location: "Sarjapur Road, Bengaluru",
    description: "Custom teakwood upholstered headboard with warm cove backlighting and acoustic wall treatment."
  },
  {
    id: "gal-19",
    imageUrl: "/images/company/real-project-40.jpeg",
    title: "Ergonomic Modular Kitchen Pantry System",
    workType: "Custom Modular Kitchen",
    category: "Interiors",
    location: "Koramangala, Bengaluru",
    description: "Tall pantry storage unit with tandem pull-out wire baskets and soft-close German hardware."
  },
  {
    id: "gal-20",
    imageUrl: "/images/company/real-project-28.jpeg",
    title: "Living Room Floating Media Console",
    workType: "Bespoke Interior & Joinery",
    category: "Interiors",
    location: "Indiranagar, Bengaluru",
    description: "Low-profile floating television unit with Italian marble backing and integrated cable raceways."
  },
  {
    id: "gal-21",
    imageUrl: "/images/company/real-project-01.jpeg",
    title: "On-Site Rebar Cage & Foundation Supervision",
    workType: "Site Structural Inspection",
    category: "Civil",
    location: "Yelahanka, Bengaluru",
    description: "Foundation footing depth inspection and soil strata verification prior to mass concrete pour."
  }
];
