export interface ServiceGalleryImage {
  url: string;
  title: string;
  caption: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Build" | "Design" | "Assess";
  h1: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroImage: string;
  galleryImages: ServiceGalleryImage[];
  eyebrow: string;
  primaryCta: string;
  summary: string;
  whoIsThisFor: string[];
  whatWeHelpWith: { title: string; desc: string }[];
  whatToPrepare: string[];
  scopeInclusions: string[];
  scopeExclusions: string[];
  disclaimer?: string;
  relatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential-construction",
    slug: "house-construction-bangalore",
    title: "Residential Construction",
    category: "Build",
    h1: "House Construction in Bangalore",
    primaryKeyword: "house construction company in Bangalore",
    metaTitle: "House Construction Company in Bangalore | My Space",
    metaDescription: "Plan and build your home in Bangalore with a clearer process for scope, design coordination, construction stages, and handover. Discuss your home project with My Space.",
    tagline: "Turnkey & Custom Residential Construction for Plots & Villas",
    heroImage: "/images/company/real-project-62.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-62.jpeg",
        title: "Turnkey Residential Villa Construction",
        caption: "Contemporary 4BHK duplex residence constructed with RCC framing in Bengaluru."
      },
      {
        url: "/images/company/real-project-69.jpeg",
        title: "Multi-Storey Villa Architecture",
        caption: "Turnkey residential villa execution with cantilevered balconies."
      },
      {
        url: "/images/company/real-project-05.jpeg",
        title: "RCC Framing & Column Casting",
        caption: "IS-standard rebar tying and structural casting."
      },
      {
        url: "/images/company/real-project-09.jpeg",
        title: "Exterior Plastering & Joinery",
        caption: "Double-coat weather-resistant exterior plastering."
      }
    ],
    eyebrow: "RESIDENTIAL CONSTRUCTION IN BENGALURU",
    primaryCta: "Discuss Your Home Project",
    summary: "Architectural planning, structural engineering, civil execution, and quality-controlled handover under single-point accountability.",
    whoIsThisFor: [
      "Duplex & Triplex House Construction",
      "Luxury Independent Villas & Bungalows",
      "G+2 / G+3 / G+4 Rental Income Units",
      "Turnkey Villa Construction on 30x40 / 40x60 Plots",
      "Complete RCC Framing, Masonry & Plastering",
      "End-to-End Civil, Electrical & Plumbing Execution"
    ],
    whatWeHelpWith: [
      {
        title: "Site & Soil Assessment",
        desc: "Soil testing, setback verification, and plot layout."
      },
      {
        title: "Architectural Design & Fixed BOQ",
        desc: "Coordinating 2D/3D plans and locked material pricing."
      },
      {
        title: "Milestone Civil Execution",
        desc: "IS-standard RCC casting, block masonry, and structured curing."
      },
      {
        title: "Quality Inspection & Handover",
        desc: "430+ QA checks, as-built blueprints, and warranty handover."
      }
    ],
    whatToPrepare: [
      "Plot dimensions and site location in Bengaluru",
      "Family room requirements and parking count",
      "Target timeline to start site work"
    ],
    scopeInclusions: [
      "Site excavation, foundation, and anti-termite treatment",
      "RCC framed structure conforming strictly to IS codes",
      "Solid block masonry and double-coat plastering",
      "Concealed electrical and plumbing installations",
      "Flooring, joinery, and weather-proof exterior painting"
    ],
    scopeExclusions: [
      "Statutory municipal plan sanction government fees",
      "Borewell drilling and utility connection deposits",
      "Movable furniture and decorative appliances"
    ],
    disclaimer: "Timelines and stage payments are directly linked to on-site physical milestones verified by engineers.",
    relatedServiceSlugs: ["elevation-design-bangalore", "3d-floor-plan-design-bangalore", "interior-design-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "How do you calculate residential construction costs in Bangalore?",
        answer: "Costs depend on built-up area, foundation depth, and material finish package (Standard, Premium, Luxury). We provide an itemized BOQ with fixed unit rates."
      },
      {
        question: "Can I bring my own architect's drawings to My Space?",
        answer: "Yes. We review external drawings for structural feasibility, prepare execution BOQs, and handle turnkey civil construction."
      },
      {
        question: "How do you ensure quality control during concrete casting and curing?",
        answer: "We perform slump and cube tests per batch, verify rebar spacing and cover blocks, and enforce 21-day water curing protocols."
      },
      {
        question: "What happens if I want to make changes during construction?",
        answer: "We issue a written variance note detailing cost and schedule impacts before any modification is executed on site."
      },
      {
        question: "What is the typical construction timeline for a house in Bangalore?",
        answer: "A standard 3,000 to 4,500 sq.ft home takes 10 to 12 months from foundation excavation to final painting and handover."
      }
    ]
  },
  {
    id: "commercial-construction",
    slug: "commercial-construction-bangalore",
    title: "Commercial Construction",
    category: "Build",
    h1: "Commercial Construction in Bangalore",
    primaryKeyword: "commercial construction company in Bangalore",
    metaTitle: "Commercial Construction Company in Bangalore | My Space",
    metaDescription: "Plan a commercial building, office, retail, clinic, or fit-out project in Bangalore with clearer scope, coordination, execution, and handover support from My Space.",
    tagline: "Commercial Complexes, Offices, Retail Spaces & Clinics",
    heroImage: "/images/company/showroom-2.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Multi-Storey Commercial Facade",
        caption: "Contemporary commercial building with structural glazing."
      },
      {
        url: "/images/company/Car_Showroom_View_1.jpeg",
        title: "Open Span Commercial Interior",
        caption: "Column-free floor plate for high footfall."
      },
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Heavy Civil Frame Execution",
        caption: "High live-load RCC commercial framing."
      },
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Commercial Glazing & Canopy",
        caption: "Entrance canopy with ACP cladding."
      }
    ],
    eyebrow: "COMMERCIAL CONSTRUCTION & FIT-OUTS IN BENGALURU",
    primaryCta: "Discuss a Commercial Project",
    summary: "Commercial complexes, offices, and retail spaces engineered for maximum usable carpet area, structural durability, and high rental yield.",
    whoIsThisFor: [
      "Commercial Rental Complexes & Office Hubs",
      "High-Street Retail Stores & Showrooms",
      "Diagnostic Centers & Specialty Clinics",
      "Turnkey Shell & Core Civil Execution",
      "Open-Span Column Grids & High Live-Load RCC",
      "Acoustic Curtain Glazing & Façade ACP Cladding"
    ],
    whatWeHelpWith: [
      {
        title: "Floor Plate Optimization",
        desc: "Maximizing open-span column grids and usable carpet area."
      },
      {
        title: "MEP & Electrical Infrastructure",
        desc: "3-phase power risers, transformer yards, and fire systems."
      },
      {
        title: "Façade & Curtain Glazing",
        desc: "High-performance DGU glazing and weather-sealed canopies."
      },
      {
        title: "Phased Project Handover",
        desc: "Critical-path scheduling enabling early tenant fit-out access."
      }
    ],
    whatToPrepare: [
      "Commercial plot dimensions and zoning clearances",
      "Occupancy type (office, retail, clinic, co-working)",
      "Target go-live operational date"
    ],
    scopeInclusions: [
      "Heavy RCC structural framing designed for commercial live loads",
      "High-traffic flooring, lobby finishes, and fire stairwells",
      "Electrical risers, distribution panels, and earthing pits",
      "Basement waterproofing, sump tanks, and stormwater drainage"
    ],
    scopeExclusions: [
      "Tenant IT server racks and custom software systems",
      "Branded retail display fixtures unless specified in fit-out",
      "Trade license statutory application fees"
    ],
    relatedServiceSlugs: ["civil-construction-bangalore", "interior-design-bangalore", "property-valuation-bangalore"],
    faqs: [
      {
        question: "Can My Space handle commercial projects in busy Bengaluru corridors?",
        answer: "Yes. We manage urban logistics, nocturnal material transport, noise barriers, and safety compliance across Bengaluru."
      },
      {
        question: "Do you build shell-and-core or turnkey commercial fit-outs?",
        answer: "We deliver both bare shell-and-core structural builds and complete turnkey interior fit-outs with MEP integration."
      },
      {
        question: "How do you optimize commercial floor plates for rental yield?",
        answer: "We design wide column grids and consolidate service cores along building edges to maximize open, contiguous usable space."
      },
      {
        question: "What MEP and fire safety systems are integrated?",
        answer: "We integrate 3-phase power risers, transformer yards, DG backups, HVAC sleeves, hydrants, and emergency lighting."
      },
      {
        question: "How do you ensure strict commercial handover deadlines?",
        answer: "We use critical-path scheduling with parallel civil, electrical, and glazing trades across multiple floor levels."
      }
    ]
  },
  {
    id: "industrial-construction",
    slug: "industrial-construction-bangalore",
    title: "Industrial Construction",
    category: "Build",
    h1: "Industrial Construction in Bangalore",
    primaryKeyword: "industrial construction company in Bangalore",
    metaTitle: "Industrial Construction Company in Bangalore | Warehouses & Factories | My Space",
    metaDescription: "Turnkey industrial construction in Bangalore. Heavy PEB structures, manufacturing plants, logistics warehouses, and industrial civil flooring.",
    tagline: "Pre-Engineered Buildings, Manufacturing Sheds & Logistics Warehouses",
    heroImage: "/images/company/real-project-18.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Industrial PEB Steel Structure",
        caption: "High-clearance portal frames for manufacturing."
      },
      {
        url: "/images/company/real-project-25.jpeg",
        title: "Heavy Machine Foundations",
        caption: "Vibration-damped civil footings for plant equipment."
      },
      {
        url: "/images/company/real-project-34.jpeg",
        title: "Tremix VDF Industrial Flooring",
        caption: "Laser-leveled flooring with metallic hardeners."
      },
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Industrial Logistics & Warehouse Hub",
        caption: "Turnkey warehouse infrastructure with loading docks."
      }
    ],
    eyebrow: "INDUSTRIAL CIVIL & PEB INFRASTRUCTURE",
    primaryCta: "Discuss an Industrial Project",
    summary: "Pre-Engineered steel buildings, factory sheds, and logistics hubs engineered for heavy floor loads, crane equipment, and rapid delivery.",
    whoIsThisFor: [
      "Pre-Engineered Steel Buildings (PEB)",
      "Manufacturing Plants & Factory Sheds",
      "Logistics Warehouses & Heavy Storage Hubs",
      "Industrial Heavy-Duty Tremix VDF Flooring",
      "Heavy Vibration-Isolated Machine Foundations",
      "Transformer Yards & Crane Runway Girders"
    ],
    whatWeHelpWith: [
      {
        title: "PEB Steel Fabrication",
        desc: "Clear-span portal frames, crane runways, and insulated roofing."
      },
      {
        title: "VDF Industrial Flooring",
        desc: "Laser-leveled Tremix concrete flooring supporting high-tonnage forklifts."
      },
      {
        title: "Heavy Machine Foundations",
        desc: "Vibration-isolated deep concrete pads for presses and generators."
      },
      {
        title: "Industrial Utilities",
        desc: "Transformer yards, fire sprinkler loops, and loading docks."
      }
    ],
    whatToPrepare: [
      "Plot boundaries and KIADB/BMRDA zoning approvals",
      "Clear height requirement and crane capacity (e.g. 5T, 10T)",
      "Target floor load capacity (MT/sq.m)"
    ],
    scopeInclusions: [
      "Earthwork, compaction, and machine foundation casting",
      "Factory-fabricated steel portal frames and galvanized sheeting",
      "Heavy-duty Tremix VDF concrete flooring with expansion joints",
      "Perimeter boundary walls, truck bays, and security cabins"
    ],
    scopeExclusions: [
      "Manufacturing process machinery procurement",
      "Statutory pollution control board operating clearances"
    ],
    relatedServiceSlugs: ["commercial-construction-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "What industrial corridors in Bengaluru do you cover?",
        answer: "We build across Peenya, Bommasandra, Electronic City, Bidadi, Dabaspet, Hoskote, and surrounding Karnataka industrial zones."
      },
      {
        question: "What is the advantage of PEB structures over conventional civil buildings?",
        answer: "PEB structures use factory-engineered steel bolted on site, offering 40% faster erection and column-free spans up to 60 meters."
      },
      {
        question: "How is industrial Tremix VDF flooring constructed?",
        answer: "We cast high-grade concrete, apply vacuum dewatering to remove excess moisture, and power-float metallic hardeners for abrasion resistance."
      },
      {
        question: "Can you build vibration-isolated foundations for heavy equipment?",
        answer: "Yes. We design isolated mass concrete pads separated by elastomeric dampening cork sheets to prevent vibration transfer."
      },
      {
        question: "What clear heights and crane capacities can be accommodated?",
        answer: "We engineer eave heights from 6m to 14m with crane runway girders supporting 3-ton to 25-ton EOT cranes."
      }
    ]
  },
  {
    id: "civil-construction",
    slug: "civil-construction-bangalore",
    title: "Civil & Structural Construction",
    category: "Build",
    h1: "Civil Construction in Bangalore",
    primaryKeyword: "civil contractors in Bangalore",
    metaTitle: "Civil Contractors in Bangalore | Structural Construction | My Space",
    metaDescription: "Dependable civil and structural engineering execution in Bangalore. Foundation engineering, RCC framing, masonry, and structural retrofitting with strict quality control.",
    tagline: "Engineering Precision, Foundation Mastery & Structural Integrity",
    heroImage: "/images/company/real-project-18.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Foundation & Sub-Structure Engineering",
        caption: "Deep excavation and RCC footing casting."
      },
      {
        url: "/images/company/real-project-05.jpeg",
        title: "Certified Rebar Fabrication",
        caption: "550D TMT steel rebar spacing conforming to IS 456."
      },
      {
        url: "/images/company/real-project-39.jpeg",
        title: "Reinforced Masonry & Plastering",
        caption: "Solid blockwork with joint mesh reinforcement."
      },
      {
        url: "/images/company/real-project-56.jpeg",
        title: "Advanced Terrace Waterproofing",
        caption: "Multi-layer elastomeric membrane coating."
      }
    ],
    eyebrow: "CIVIL & STRUCTURAL ENGINEERING CONTRACTORS",
    primaryCta: "Discuss Civil Construction",
    summary: "Engineering-governed civil contracting: soil-matched foundations, certified rebar placement, compacted concrete, and multi-tier waterproofing.",
    whoIsThisFor: [
      "RCC Framed Structure Construction",
      "Deep Foundation & Raft Footing Casting",
      "Solid Concrete Blockwork & Plastering",
      "Basement Retaining Walls & Multi-Tier Waterproofing",
      "Certified 550D TMT Steel Rebar Fabrication",
      "Terrace Waterproofing & Parapet Construction"
    ],
    whatWeHelpWith: [
      {
        title: "Foundation Engineering",
        desc: "Isolated footings, rafts, and pile caps matched to soil strata."
      },
      {
        title: "RCC Superstructure",
        desc: "Column, beam, and slab casting using steel formwork and RMC concrete."
      },
      {
        title: "Multi-Tier Waterproofing",
        desc: "Crystalline admixtures and elastomeric membrane coatings for wet zones."
      },
      {
        title: "Structural Masonry",
        desc: "Solid concrete block masonry with reinforced lintels and mesh."
      }
    ],
    whatToPrepare: [
      "Soil test investigation report if available",
      "Structural engineering drawings or floor plans",
      "Site access conditions and neighbouring plot setbacks"
    ],
    scopeInclusions: [
      "Earthwork, backfilling, PCC sub-base, and compaction",
      "550D TMT steel fabrication and shuttering works",
      "Machine batch-mixed or RMC concrete casting with cube testing",
      "Solid block masonry, lintels, chajjas, and parapet walls"
    ],
    scopeExclusions: [
      "Loose interior woodwork and soft furnishings",
      "Architectural fit-out accessories unless in combined scope"
    ],
    relatedServiceSlugs: ["house-construction-bangalore", "commercial-construction-bangalore", "property-valuation-bangalore"],
    faqs: [
      {
        question: "How do you prevent cracks in masonry and plaster?",
        answer: "We install GI wire chicken mesh at all RCC-to-blockwork joints, use polymer crack fillers, and enforce full wet-curing cycles."
      },
      {
        question: "Do you supply materials or work on labour-only contracts?",
        answer: "We primarily execute on a turnkey material + labour basis using certified 550D steel and 53-grade cement."
      },
      {
        question: "What concrete grades and TMT steel specifications do you use?",
        answer: "We use M20 to M30 concrete with batch cube testing, and branded Fe550D TMT bars (Tata Tiscon, JSW, SAIL)."
      },
      {
        question: "How do you handle low-bearing Bangalore clay soils?",
        answer: "We design deep raft foundations or under-reamed piles to eliminate differential settlement and foundation sinking."
      },
      {
        question: "What waterproofing systems are implemented?",
        answer: "We apply crystalline concrete admixtures, 2-coat elastomeric membranes, fiber-mesh corners, and pressure grouting."
      }
    ]
  },
  {
    id: "interior-design",
    slug: "interior-design-bangalore",
    title: "Interior Design & Execution",
    category: "Design",
    h1: "Interior Design & Execution in Bangalore",
    primaryKeyword: "interior design company in Bangalore",
    metaTitle: "Interior Design Company in Bangalore | Space Planning & Execution | My Space",
    metaDescription: "Tailored residential and commercial interior design in Bangalore. Space planning, modular joinery, custom woodwork, lighting design, and execution support.",
    tagline: "Ergonomic Layouts, Tactile Material Palettes & Direct Site Execution",
    heroImage: "/images/company/interior-design-hero.jpeg",
    galleryImages: [
      {
        url: "/images/company/interior-design-hero.jpeg",
        title: "Modular Kitchen & Living Interiors",
        caption: "BWP marine plywood cabinetry with quartz counters and ambient lighting."
      },
      {
        url: "/images/company/showroom-3.jpeg",
        title: "Living & Lounge Space Planning",
        caption: "Bespoke media units with concealed cabling."
      },
      {
        url: "/images/company/real-project-44.jpeg",
        title: "Floor-to-Ceiling Wardrobes",
        caption: "Acrylic finish joinery with internal profile lighting."
      },
      {
        url: "/images/company/real-project-51.jpeg",
        title: "False Ceiling & Ambient Lighting",
        caption: "Gypsum false ceilings with magnetic track lights."
      }
    ],
    eyebrow: "INTERIOR ARCHITECTURE & FIT-OUT EXECUTION",
    primaryCta: "Plan Your Interiors",
    summary: "Bespoke modular woodwork, ergonomic kitchens, false ceilings, and ambient lighting executed with factory precision and durable marine ply.",
    whoIsThisFor: [
      "Turnkey Apartment & Villa Interiors",
      "Custom Modular Kitchens with Quartz Counters",
      "Floor-to-Ceiling Wardrobes & Walk-In Closets",
      "Designer Living Room Paneling & TV Units",
      "Gypsum False Ceilings & Magnetic Track Lights",
      "IS 710 BWP Marine Plywood & German Hardware"
    ],
    whatWeHelpWith: [
      {
        title: "Space Planning & 3D Design",
        desc: "Room-by-room 3D layouts, storage ergonomics, and color palettes."
      },
      {
        title: "Material & Hardware Selection",
        desc: "IS 710 BWP marine plywood, quartz counters, and German soft-close fittings."
      },
      {
        title: "Factory Precision Joinery",
        desc: "CNC cutting and edge-banded carcass manufacturing."
      },
      {
        title: "On-Site Assembly & Handover",
        desc: "Dust-free installation, electrical fixture setup, and 10-year warranty."
      }
    ],
    whatToPrepare: [
      "Floor plan with room dimensions",
      "Family lifestyle requirements and storage needs",
      "Target move-in schedule"
    ],
    scopeInclusions: [
      "3D interior visualization views and 2D fabrication drawings",
      "Factory-pressed BWP marine plywood with 1mm edge-banded laminates",
      "Branded soft-close hardware (Hafele, Hettich, Blum)",
      "False ceiling framing, wiring, LED fixtures, and luxury paint finishes"
    ],
    scopeExclusions: [
      "Loose soft furnishings (curtains, loose rugs) unless specified",
      "Movable electronics and kitchen appliances"
    ],
    relatedServiceSlugs: ["house-construction-bangalore", "3d-floor-plan-design-bangalore", "elevation-design-bangalore"],
    faqs: [
      {
        question: "What core materials do you use for kitchens and wet zones?",
        answer: "We strictly use IS 710 certified Boiling Waterproof (BWP) marine plywood with calibrated thickness and waterproof laminates."
      },
      {
        question: "Can you handle civil modifications like shifting walls or electrical points?",
        answer: "Yes. Our in-house civil and electrical teams handle wall adjustments, plumbing shifts, and switchboard relocations directly."
      },
      {
        question: "What is the typical timeline for turnkey residential interiors?",
        answer: "A complete 3BHK interior project takes 45 to 60 days from 3D design freeze to on-site assembly and deep cleaning."
      },
      {
        question: "Do you manufacture cabinetry in a factory or on site?",
        answer: "All carcasses and shutters are CNC cut and edge-banded in our partner factory facility, with final assembly on site."
      },
      {
        question: "What hardware brands and warranties are included?",
        answer: "We use authentic German hardware (Hettich, Hafele, Blum) with up to 10-year manufacturer warranties."
      }
    ]
  },
  {
    id: "architectural-drawing",
    slug: "architectural-drawing-bangalore",
    title: "Architectural Drawing",
    category: "Design",
    h1: "Architectural Drawing & 2D/3D Design in Bangalore",
    primaryKeyword: "architectural drawings Bangalore",
    metaTitle: "Architectural Drawing & 2D/3D Design Bangalore | My Space",
    metaDescription: "Comprehensive architectural drawings, Vastu 2D floor plans, BBMP sanction blueprints, 3D elevations, and furnished isometric layouts in Bangalore.",
    tagline: "2D Working Blueprints, Municipal Sanctions, 3D Elevations & Spatial Layouts",
    heroImage: "/images/company/real-project-01.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        title: "2D Dimensional Floor Plans & Vastu Layouts",
        caption: "Precise working layouts conforming to BBMP setback bylaws."
      },
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Photorealistic 3D Exterior Elevation",
        caption: "Contemporary façade with terracotta louvers and architectural lighting."
      },
      {
        url: "/images/company/showroom-3.jpeg",
        title: "Furnished 3D Isometric Spatial View",
        caption: "Top-down perspective showing walkway flow and furniture clearances."
      },
      {
        url: "/images/company/real-project-21.jpeg",
        title: "Structural Column Centerline & MEP Layouts",
        caption: "Exact excavation grids and conduit routing for site engineers."
      }
    ],
    eyebrow: "ARCHITECTURAL DRAWING, 2D BLUEPRINTS & 3D VISUALIZATION",
    primaryCta: "Request Architectural Drawings",
    summary: "Complete architectural drafting and visualization: dimensioned 2D floor plans, BBMP sanction blueprints, photorealistic 3D exterior elevations, and furnished isometric layouts.",
    whoIsThisFor: [
      "2D Working Floor Plans & Vastu Layouts",
      "BBMP & BDA Municipal Sanction Blueprints",
      "Photorealistic 3D Elevations & Façade Views",
      "Civil Centerline Grids & Column Excavation Layouts",
      "Door, Window & Ventilation Schedules",
      "Concealed Electrical & Plumbing Conduit Schematics"
    ],
    whatWeHelpWith: [
      {
        title: "Site & Setback Evaluation",
        desc: "Analyzing plot dimensions, road widths, and BBMP FAR bylaws."
      },
      {
        title: "2D Vastu Spatial Planning",
        desc: "Drafting dimensioned room plans with optimized light and air flow."
      },
      {
        title: "3D Elevation Design",
        desc: "Façade textures, balcony styling, and lighting simulation."
      },
      {
        title: "Sanction & Working Blueprint Sets",
        desc: "Complete civil centerline, MEP, and sanction packages for site masons."
      }
    ],
    whatToPrepare: [
      "Plot survey sketch, boundary dimensions, and road width",
      "Family room inventory, vehicle parking, and Vastu preferences",
      "Architectural style references and preferred exterior finishes"
    ],
    scopeInclusions: [
      "2D conceptual architectural floor layout with dimensional grid and revision rounds",
      "High-resolution 3D daytime and evening perspective renders",
      "Detailed working drawings, column centerlines, and door/window schedules",
      "Furnished 3D isometric cutaways showing true-to-scale furniture clearances",
      "Digital high-resolution PDF package for mobile and on-site mason use"
    ],
    scopeExclusions: [
      "Statutory municipal sanction government fee deposits"
    ],
    disclaimer: "Architectural drawings and 3D visualizations communicate design intent and spatial aesthetics. Detailing aligns with local municipal setback rules.",
    relatedServiceSlugs: ["house-construction-bangalore", "interior-design-bangalore", "structural-design-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "What is included in the Architectural Drawing package?",
        answer: "The package includes dimensioned 2D floor layouts, BBMP sanction drawings, column centerline grids, door/window schedules, photorealistic 3D elevations, and furnished isometric layouts."
      },
      {
        question: "Do your architectural plans conform to Bengaluru building bylaws?",
        answer: "Yes, all plans comply strictly with BBMP/BDA setback rules, Floor Area Ratio (FAR), road width criteria, and light/ventilation norms."
      },
      {
        question: "How do you balance Vastu Shastra with modern spatial efficiency?",
        answer: "We align key zones according to Vastu (kitchen in South-East, master suite in South-West) while optimizing modern ergonomics, natural daylight, and circulation flow."
      },
      {
        question: "Can I get architectural drawings without giving construction to My Space?",
        answer: "Yes. You can engage My Space solely for architectural drawings, 2D working blueprints, and 3D design for your contractor to execute."
      },
      {
        question: "How long does it take to prepare complete architectural drawings and 3D elevations?",
        answer: "Conceptual 2D floor plans are delivered in 3 to 5 working days, followed by 3D elevations and final working drawings within 7 to 10 working days."
      }
    ]
  },
  {
    id: "2d-design",
    slug: "2d-design-bangalore",
    title: "2D Architectural Design",
    category: "Design",
    h1: "2D Architectural Design & Blueprints",
    primaryKeyword: "2D architectural design Bangalore",
    metaTitle: "2D Architectural Design & Floor Plans Bangalore | My Space",
    metaDescription: "Detailed 2D architectural plans, BBMP/BDA sanction drawings, working fabrication details, and electrical/plumbing conduit layouts.",
    tagline: "Working Fabrication Drawings, Municipal Sanction Plans & Dimensioned Layouts",
    heroImage: "/images/company/real-project-01.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        title: "Dimensional Floor Plans",
        caption: "Precise 2D layouts conforming to BBMP bylaws."
      },
      {
        url: "/images/company/real-project-21.jpeg",
        title: "Structural Centerline Grid",
        caption: "Column centerline coordinates for civil masons."
      },
      {
        url: "/images/company/real-project-38.jpeg",
        title: "MEP Conduit & Plumbing Plans",
        caption: "Concealed electrical and plumbing routing schematics."
      },
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Sectional Elevation Details",
        caption: "Door, window, and stair sectional drawings."
      }
    ],
    eyebrow: "ARCHITECTURAL SPATIAL PLANNING & WORKING DRAWINGS",
    primaryCta: "Request 2D Plan Review",
    summary: "Dimensioned floor plans, column centerline grids, door/window schedules, and sanction blueprints drafted for error-free site construction.",
    whoIsThisFor: [
      "Vastu Residential 2D Floor Plans",
      "BBMP & BDA Municipal Sanction Approvals",
      "Column Centerline & Excavation Grids",
      "Concealed Electrical & Plumbing Conduit Schematics",
      "Staircase Geometry & Setback Bylaw Blueprints",
      "True-to-Scale Room Dimension Schedules"
    ],
    whatWeHelpWith: [
      {
        title: "Dimensional Spatial Layouts",
        desc: "Room dimensions, wall thicknesses, and stair geometry."
      },
      {
        title: "MEP Conduit Schematics",
        desc: "Switchboard positions, plumbing shafts, and AC core-cut locations."
      },
      {
        title: "Centerline Grids",
        desc: "Accurate excavation and column coordinates for site engineers."
      },
      {
        title: "Municipal Sanction Sets",
        desc: "Drafted strictly to BBMP/BDA setback and FAR bylaws."
      }
    ],
    whatToPrepare: [
      "Plot survey sketch and boundary dimensions",
      "Family room inventory and parking requirements",
      "Orientation and cardinal directions"
    ],
    scopeInclusions: [
      "Architectural conceptual floor plans and revision rounds",
      "Detailed working drawings, centerline grids, and sectional elevations",
      "Door and window schedules with hardware specifications"
    ],
    scopeExclusions: [
      "Statutory municipal sanction fee deposits"
    ],
    relatedServiceSlugs: ["3d-floor-plan-design-bangalore", "elevation-design-bangalore", "house-construction-bangalore"],
    faqs: [
      {
        question: "Do your 2D plans conform to Bengaluru building bylaws?",
        answer: "Yes, all plans comply with BBMP/BDA setback rules, Floor Area Ratio (FAR), road width criteria, and ventilation norms."
      },
      {
        question: "What working drawings are included in the 2D set?",
        answer: "A complete set includes floor layouts, column centerlines, door/window schedules, stair sections, and MEP conduit diagrams."
      },
      {
        question: "How do you balance Vastu Shastra with spatial efficiency?",
        answer: "We incorporate core Vastu alignments (kitchen in SE, master bedroom in SW) while ensuring cross-ventilation and zero wasted space."
      },
      {
        question: "Can I order standalone 2D floor plans without construction?",
        answer: "Yes. You can engage My Space solely for architectural 2D concept design and working drawing sets for your contractor."
      },
      {
        question: "How many design revisions are included?",
        answer: "We provide iterative design rounds until you are completely satisfied with the room dimensions and circulation flow."
      }
    ]
  },
  {
    id: "3d-design",
    slug: "3d-design-bangalore",
    title: "3D Design & Visualization",
    category: "Design",
    h1: "3D Design & Architectural Visualization",
    primaryKeyword: "3D design services Bangalore",
    metaTitle: "3D Design & Façade Visualization Bangalore | My Space",
    metaDescription: "High-definition 3D elevations, spatial visualizations, and realistic exterior/interior 3D modeling for residential and commercial spaces.",
    tagline: "Photorealistic Textures, Lighting Studies & Virtual Walkthroughs",
    heroImage: "/images/company/front-elevation-hero.jpeg",
    galleryImages: [
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Photorealistic 3D Exterior Elevation",
        caption: "Contemporary façade with terracotta louvers."
      },
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Sunlight & Shadow Simulation",
        caption: "Solar orientation study for Bangalore climate."
      },
      {
        url: "/images/company/real-project-54.jpeg",
        title: "Evening Lighting & Atmosphere",
        caption: "Warm architectural exterior lighting study."
      },
      {
        url: "/images/company/showroom-1.jpeg",
        title: "Furnished 3D Isometric View",
        caption: "Top-down perspective showing walkway circulation."
      }
    ],
    eyebrow: "3D ARCHITECTURAL VISUALIZATION & ELEVATIONS",
    primaryCta: "Get 3D Design Quote",
    summary: "Photorealistic 3D elevations, furnished isometric layouts, and sunlight/dusk lighting simulations to experience your space before building.",
    whoIsThisFor: [
      "Photorealistic 3D Exterior Elevations",
      "Furnished 3D Isometric Floor Cutaways",
      "Daylight & Night Illumination Studies",
      "Architectural Façade Visualization",
      "Material & Texture Palette Rendering",
      "Virtual 3D Walkthrough Perspectives"
    ],
    whatWeHelpWith: [
      {
        title: "3D Exterior Façade Design",
        desc: "Louvers, cantilever balconies, textures, and architectural lighting."
      },
      {
        title: "Furnished Isometric Models",
        desc: "Isometric top-down perspectives showing furniture proportions."
      },
      {
        title: "Sunlight & Dusk Studies",
        desc: "Simulating daylight shadows and evening wall washer illumination."
      },
      {
        title: "Fabrication Callouts",
        desc: "Dimensioned projection sheets for site masons and fabricators."
      }
    ],
    whatToPrepare: [
      "2D floor layout with dimensions",
      "Preferred architectural style references and color tastes"
    ],
    scopeInclusions: [
      "High-resolution 3D perspective renders (Day and Dusk views)",
      "Material callout sheets for contractor site execution"
    ],
    scopeExclusions: [
      "Physical structural load alterations without civil approval"
    ],
    relatedServiceSlugs: ["elevation-design-bangalore", "interior-design-bangalore", "2d-design-bangalore"],
    faqs: [
      {
        question: "How long does a 3D elevation design take?",
        answer: "Initial 3D concepts are presented within 3 to 5 working days following 2D layout freeze."
      },
      {
        question: "What inputs are required to start 3D visualization?",
        answer: "We require approved 2D floor plans with floor heights, cardinal orientation, and exterior reference images."
      },
      {
        question: "Do you provide both daytime and evening illumination renders?",
        answer: "Yes, our package includes daylight sun-study renders and warm evening dusk views with lighting placement."
      },
      {
        question: "Will the 3D renders reflect locally available materials?",
        answer: "Yes. We texture models using real materials available in Bengaluru (terracotta jali, granite, HPL, Asian Paints shades)."
      },
      {
        question: "Can you provide furnished 3D floor plan cutaways?",
        answer: "Yes. We generate furnished 3D isometric floor cutaways and cinematic video walkthroughs upon request."
      }
    ]
  },
  {
    id: "structural-design",
    slug: "structural-design-bangalore",
    title: "Structural Design",
    category: "Design",
    h1: "Certified Structural Design & Engineering",
    primaryKeyword: "structural engineers in Bangalore",
    metaTitle: "Structural Design & Engineering Services Bangalore | My Space",
    metaDescription: "Certified structural engineering, RCC detailing, bar bending schedules, foundation design, and seismic analysis in Bangalore conforming to IS codes.",
    tagline: "IS Code Compliance, Foundation Optimization & Structural Stability",
    heroImage: "/images/company/real-project-05.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-05.jpeg",
        title: "Certified Rebar Detailing & Column Framing",
        caption: "IS 456 compliant structural rebar layout and bar bending schedules."
      },
      {
        url: "/images/company/real-project-18.jpeg",
        title: "RCC Frame & Column Design",
        caption: "IS 456 compliant reinforced concrete calculations."
      },
      {
        url: "/images/company/real-project-25.jpeg",
        title: "Soil-Matched Footing Design",
        caption: "Foundations tailored to Bangalore soil strata."
      },
      {
        url: "/images/company/real-project-39.jpeg",
        title: "Structural Inspection & Checking",
        caption: "Site checking of rebar placement and cover blocks."
      }
    ],
    eyebrow: "CERTIFIED STRUCTURAL ENGINEERING & RCC DESIGN",
    primaryCta: "Consult Structural Engineers",
    summary: "Certified structural load analysis, IS 456 RCC frame design, seismic engineering (IS 1893), and Bar Bending Schedules for safe construction.",
    whoIsThisFor: [
      "IS 456 RCC Column, Beam & Slab Design",
      "Soil-Matched Foundation & Raft Design",
      "Bar Bending Schedules (BBS) to Minimize Waste",
      "Chartered Structural Stability Certificates",
      "Seismic Resistance Analysis (IS 1893)",
      "Pre-Pour Site Checking of Rebar Spacing & Cover"
    ],
    whatWeHelpWith: [
      {
        title: "Soil Report & Load Calculations",
        desc: "Reviewing SBC values to prevent differential foundation sinking."
      },
      {
        title: "RCC Framework Modeling",
        desc: "Column, beam, and slab sizing under IS 456 & IS 1893 seismic codes."
      },
      {
        title: "Bar Bending Schedules (BBS)",
        desc: "Exact rebar cut-lengths and bending schedules for site engineers."
      },
      {
        title: "Pre-Pour Site Inspection",
        desc: "Verifying steel placement, laps, and cover blocks before casting."
      }
    ],
    whatToPrepare: [
      "Soil geotechnical investigation report",
      "Architectural 2D floor plans and floor heights"
    ],
    scopeInclusions: [
      "Structural calculation report and framing layouts",
      "Column centerline, footing details, and bar bending schedules",
      "Chartered Structural Engineer signed drawings"
    ],
    scopeExclusions: [
      "On-site geotechnical soil borehole drilling machinery"
    ],
    relatedServiceSlugs: ["civil-construction-bangalore", "house-construction-bangalore"],
    faqs: [
      {
        question: "Are your structural designs compliant with Indian Standards?",
        answer: "Yes, all designs strictly conform to IS 456:2000 (Concrete), IS 1893 (Seismic), and IS 875 (Design Loads)."
      },
      {
        question: "Why is a geotechnical soil investigation test essential?",
        answer: "A soil test determines Safe Bearing Capacity (SBC), preventing unsafe foundation sinking or costly over-design."
      },
      {
        question: "What are Bar Bending Schedules (BBS)?",
        answer: "A BBS provides exact cutting and bending lengths for every structural element, minimizing steel off-cut waste on site."
      },
      {
        question: "Can you certify structural stability for adding extra floors?",
        answer: "Yes. We perform non-destructive tests (Rebound Hammer), review drawings, and issue certified feasibility reports."
      },
      {
        question: "Do your structural engineers visit the site before casting?",
        answer: "Yes. Our engineers inspect rebar spacing, laps, and cover blocks before issuing concrete pour clearance."
      }
    ]
  },
  {
    id: "elevation-design",
    slug: "elevation-design-bangalore",
    title: "3D Elevation Design",
    category: "Design",
    h1: "3D Elevation & Façade Design",
    primaryKeyword: "3D elevation design Bangalore",
    metaTitle: "3D Elevation Design Bangalore | Façade Architecture | My Space",
    metaDescription: "Visualise the exterior character of your Bangalore building before construction. Modern, contemporary, and tropical elevation designs with realistic lighting and materials.",
    tagline: "Contemporary Façades, Material Harmony & Daytime/Nighttime Visuals",
    heroImage: "/images/company/showroom-4.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Contemporary Exterior Façade",
        caption: "Architectural exterior with wooden louvers and glass."
      },
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Material Harmony & Textures",
        caption: "Terracotta jali, concrete, and stone cladding."
      },
      {
        url: "/images/company/real-project-54.jpeg",
        title: "Façade Accent Night Illumination",
        caption: "Day and evening lighting placement studies."
      },
      {
        url: "/images/company/showroom-1.jpeg",
        title: "Fabrication Working Drawings",
        caption: "Dimensioned blueprints for on-site fabrication."
      }
    ],
    eyebrow: "ARCHITECTURAL FAÇADE & ELEVATION DESIGN",
    primaryCta: "Request a Design Consultation",
    summary: "Bespoke 3D exterior styling blending terracotta louvers, exposed concrete textures, glass balustrades, and night accent lighting.",
    whoIsThisFor: [
      "Contemporary & Modern Villa Elevations",
      "Terracotta Jali & HPL Louvered Façades",
      "Cantilever Balconies & Glass Railing Styling",
      "Façade Texture Palettes & Exterior Lighting",
      "Dimensioned 2D Blueprints for Site Fabricators",
      "Day & Evening Architectural Accent Illumination"
    ],
    whatWeHelpWith: [
      {
        title: "Multiple Façade Styles",
        desc: "Contemporary Minimalist, Tropical Modern, and Neo-Classical concepts."
      },
      {
        title: "Achievable Materials",
        desc: "Terracotta jali, HPL cladding, stone textures, and powder-coated louvers."
      },
      {
        title: "Night Lighting Studies",
        desc: "Designing warm up-down wall washers and profile LED accents."
      },
      {
        title: "Working Blueprints",
        desc: "Dimensioned 2D drawings for on-site masons and fabricators."
      }
    ],
    whatToPrepare: [
      "2D floor plans with floor-to-floor heights",
      "Plot orientation and cardinal directions for sunlight",
      "Façade style reference photos"
    ],
    scopeInclusions: [
      "High-resolution 3D daytime and evening perspective renders",
      "Detailed material callout specifications and paint codes",
      "2D sectional dimensions for architectural fabrication"
    ],
    scopeExclusions: [
      "Structural load changes without civil engineering clearance"
    ],
    disclaimer: "Visualizations communicate design intent and spatial aesthetics. Detailing aligns with local municipal setback rules.",
    relatedServiceSlugs: ["3d-floor-plan-design-bangalore", "house-construction-bangalore", "interior-design-bangalore"],
    faqs: [
      {
        question: "How many revisions are included in the elevation design?",
        answer: "We include 2 rounds of design refinement after the concept presentation to fine-tune materials and colors."
      },
      {
        question: "Can you provide elevation design if My Space is not doing construction?",
        answer: "Yes. You can engage My Space solely for 3D Elevation Design and dimensioned fabrication drawings."
      },
      {
        question: "How do you select exterior cladding materials?",
        answer: "We recommend materials based on weather orientation (e.g. UV-resistant HPL or terracotta jali for West sun exposure)."
      },
      {
        question: "Do you provide dimensioned fabrication drawings for site teams?",
        answer: "Yes. We deliver sectional drawings with exact millimeter measurements for balcony railings, CNC louvers, and box frames."
      },
      {
        question: "Can you redesign the elevation of an existing old house?",
        answer: "Yes. We specialize in exterior modernization—incorporating light framing, composite cladding, and modern textures onto existing frames."
      }
    ]
  },
  {
    id: "3d-floor-plans",
    slug: "3d-floor-plan-design-bangalore",
    title: "3D Floor Plan Design",
    category: "Design",
    h1: "3D Floor Plan Design & Spatial Flow",
    primaryKeyword: "3D floor plan design Bangalore",
    metaTitle: "3D Floor Plan Design Bangalore | Spatial Planning & 3D Views | My Space",
    metaDescription: "Understand room relationships, proportions, furniture layouts, and light flow with 3D floor plan design in Bangalore. Plan with complete visual clarity.",
    tagline: "Isometric Spatial Views, Furniture Proportions & Walkway Flow",
    heroImage: "/images/company/real-project-01.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        title: "Isometric Top-Down Layout",
        caption: "Furnished layout showing spatial room clearances."
      },
      {
        url: "/images/company/showroom-3.jpeg",
        title: "Proportional Furniture Placement",
        caption: "Verifying bedroom and living room walkways."
      },
      {
        url: "/images/company/interior-design-hero.jpeg",
        title: "Sunlight & Ventilation Study",
        caption: "Optimizing window placements for natural breeze."
      },
      {
        url: "/images/company/real-project-44.jpeg",
        title: "Multi-Level Spatial Connectivity",
        caption: "Visualization of stairwells and duplex lounges."
      }
    ],
    eyebrow: "SPATIAL 3D FLOOR PLANNING & LAYOUT CLARITY",
    primaryCta: "Request a Design Consultation",
    summary: "Furnished 3D isometric perspectives and cutaways that clarify room dimensions, furniture clearances, and natural daylight flow before construction.",
    whoIsThisFor: [
      "Furnished 3D Isometric Floor Plans",
      "Duplex Courtyard & Double-Height Void Views",
      "True-to-Scale Furniture Clearance Layouts",
      "Natural Light & Cross-Ventilation Studies",
      "Spatial Circulation Flow Optimization",
      "High-Resolution PDF Package for On-Site Masons"
    ],
    whatWeHelpWith: [
      {
        title: "Proportional Furniture Placement",
        desc: "Modeling true-to-scale beds, sofas, and islands to verify walking clearance."
      },
      {
        title: "Daylight & Cross-Breeze",
        desc: "Checking window depths for breezy, well-lit spaces."
      },
      {
        title: "Duplex & Void Connectivity",
        desc: "Visualizing double-height living rooms, stairwells, and skylights."
      },
      {
        title: "Vastu & Ergonomic Flow",
        desc: "Harmonizing practical spatial usage with orientation preferences."
      }
    ],
    whatToPrepare: [
      "Plot dimensions and boundary orientation",
      "Number of bedrooms, bathrooms, family lounge, and study",
      "Vehicle parking requirements"
    ],
    scopeInclusions: [
      "2D conceptual architectural floor layout with dimensional grid",
      "3D bird's-eye isometric view of each floor level with furnished layout",
      "Door and window schedule with recommended opening clearances",
      "Digital high-resolution PDF package for mobile and site use"
    ],
    scopeExclusions: [
      "Detailed civil bar-bending schedules (provided in Civil package)",
      "Plumbing and electrical conduit drawings unless part of MEP bundle"
    ],
    relatedServiceSlugs: ["elevation-design-bangalore", "house-construction-bangalore", "interior-design-bangalore"],
    faqs: [
      {
        question: "Why should I get a 3D floor plan before construction?",
        answer: "A 3D floor plan prevents expensive changes by revealing tight passages, awkward entries, and small rooms before casting begins."
      },
      {
        question: "How do 3D floor plans assist with furniture planning?",
        answer: "We render standard furniture to scale (king beds, dining sets), ensuring minimum 3-foot unobstructed walking corridors."
      },
      {
        question: "Can 3D floor plans depict duplex voids and double-height spaces?",
        answer: "Yes. Isometric cutaway views show open courtyards, floating staircases, and skylight voids with complete spatial depth."
      },
      {
        question: "How quickly can you convert a 2D CAD drawing into 3D?",
        answer: "Once you share your 2D CAD or PDF plan, we deliver high-resolution furnished 3D views within 2 to 4 working days."
      },
      {
        question: "Can I share the 3D plans with my family digitally?",
        answer: "Yes, we export high-resolution PDFs and JPEG packages formatted for easy sharing on mobile WhatsApp and tablets."
      }
    ]
  },
  {
    id: "land-valuation",
    slug: "land-valuation-bangalore",
    title: "Land Valuation",
    category: "Assess",
    h1: "Land & Plot Valuation in Bangalore",
    primaryKeyword: "land valuation in Bangalore",
    metaTitle: "Land Valuation Services in Bangalore | Plot Appraisal | My Space",
    metaDescription: "Certified land and plot valuation in Bangalore. Guidance value benchmarking, physical boundary survey, and bank-compliant land appraisal reports.",
    tagline: "Guideline Rate Benchmark, Real-Market Analysis & Boundary Inspection",
    heroImage: "/images/company/real-project-75.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-75.jpeg",
        title: "Physical Land Boundary Audit",
        caption: "On-site inspection of plot boundaries and road access."
      },
      {
        url: "/images/company/real-project-62.jpeg",
        title: "e-Khata & Revenue Records Review",
        caption: "Guideline rate benchmarking and sub-registrar checks."
      },
      {
        url: "/images/company/real-project-83.jpeg",
        title: "Micro-Market Real Estate Analytics",
        caption: "Analysis of actual sales trends across Bengaluru zones."
      },
      {
        url: "/images/company/real-project-86.jpeg",
        title: "Certified Valuation Dossier",
        caption: "Registered valuer report accepted by banks and courts."
      }
    ],
    eyebrow: "CERTIFIED LAND & PLOT VALUATION",
    primaryCta: "Request Land Valuation",
    summary: "Certified land and plot appraisals based on physical boundary surveys, sub-registrar guideline rates, and prevailing micro-market transactions.",
    whoIsThisFor: [
      "Plot buyers and sellers seeking fair market value appraisal",
      "Landowners applying for bank mortgage loans against vacant sites",
      "Property owners filing Capital Gains Tax (Section 54/54EC)"
    ],
    whatWeHelpWith: [
      {
        title: "Boundary & Road Audit",
        desc: "On-site verification of survey boundaries, road width, and frontage."
      },
      {
        title: "Guideline vs Market Analysis",
        desc: "Benchmarking government guidance rates against active market sales."
      },
      {
        title: "Revenue Document Review",
        desc: "Auditing e-Khata, tax receipts, and Encumbrance Certificates."
      },
      {
        title: "Comprehensive Valuation Dossier",
        desc: "Detailed valuation dossier with clear market data."
      }
    ],
    whatToPrepare: [
      "Land title deed and mother deed chain",
      "Latest e-Khata extract and tax paid receipt",
      "Survey sketch or layout map"
    ],
    scopeInclusions: [
      "Physical land inspection and boundary verification in Bengaluru",
      "Fair market value and realizable distress value breakdown",
      "Comprehensive valuation dossier and market assessment report"
    ],
    scopeExclusions: [
      "Litigation dispute advocacy in court"
    ],
    relatedServiceSlugs: ["property-valuation-bangalore", "business-valuation-bangalore"],
    faqs: [
      {
        question: "How is vacant land valued?",
        answer: "Valuation takes into account guideline value and market value, factoring in road access, legal dimensions, and locality infrastructure."
      },
      {
        question: "What documents are required for land valuation?",
        answer: "We require the registered Sale Deed, Mother Deed chain, latest e-Khata extract, tax paid receipt, and survey layout sketch."
      },
      {
        question: "How does Guideline Value differ from Market Value?",
        answer: "Guideline Value is the statutory minimum rate set by the government for stamp duty. Market Value is the actual price driven by locality demand."
      },
      {
        question: "How quickly is the valuation report issued?",
        answer: "Following site boundary inspection and document review, the report is issued within 2 to 4 business days."
      },
      {
        question: "How is the market value of land assessed?",
        answer: "Our reports follow structured Land & Building valuation methodologies and guideline rate benchmarks."
      }
    ]
  },
  {
    id: "property-valuation",
    slug: "property-valuation-bangalore",
    title: "Property Valuation",
    category: "Assess",
    h1: "Property Valuation in Bangalore",
    primaryKeyword: "property valuation in Bangalore",
    metaTitle: "Property Valuation in Bangalore | Bank, Property & Asset Enquiries | My Space",
    metaDescription: "Property valuation enquiries in Bangalore for banking, property decisions, capital gains, visa, and asset records. Clear document guidance, inspection, and assessment.",
    tagline: "Structured Assessment, Document Clarity & Professional Inspection",
    heroImage: "/images/company/real-project-75.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-75.jpeg",
        title: "Physical Property Inspection",
        caption: "On-site inspection of building age, quality, and amenities."
      },
      {
        url: "/images/company/real-project-70.jpeg",
        title: "Structural Depreciation Assessment",
        caption: "CPWD replacement cost depreciation calculation."
      },
      {
        url: "/images/company/real-project-81.jpeg",
        title: "Fair Market Value Computation",
        caption: "Combining land value with depreciated building cost."
      },
      {
        url: "/images/company/real-project-85.jpeg",
        title: "Bank & Statutory Valuation Report",
        caption: "Professional documentation recognized by banks and NBFCs."
      }
    ],
    eyebrow: "PROPERTY VALUATION & ASSET ASSESSMENT ENQUIRIES",
    primaryCta: "Request a Valuation Consultation",
    summary: "Professional property appraisals for private transactions, sales, asset documentation, and internal planning.",
    whoIsThisFor: [
      "Property buyers and sellers seeking fair market value assessment",
      "Property owners requiring asset assessment reports for record keeping",
      "Families planning property division and inheritance planning"
    ],
    whatWeHelpWith: [
      {
        title: "Physical Inspection",
        desc: "Checking building age, construction quality, specifications, and boundaries."
      },
      {
        title: "Depreciated Cost Math",
        desc: "Applying CPWD schedule of rates and age-based structural depreciation."
      },
      {
        title: "Guideline & Market Rates",
        desc: "Cross-referencing Sub-Registrar guideline values with prevailing locality sales."
      },
      {
        title: "Signed Dossier",
        desc: "Official valuation documentation and detailed property dossier."
      }
    ],
    whatToPrepare: [
      "Property Sale Deed / Title deed copy",
      "e-Khata certificate and latest tax paid receipts",
      "Approved building sanction drawing if available"
    ],
    scopeInclusions: [
      "Document checklist verification and physical on-site inspection",
      "Land market value, building replacement cost, and depreciation calculations",
      "Comprehensive property valuation dossier and market value calculations"
    ],
    scopeExclusions: [
      "Guaranteed loan approval (sole discretion of the lending bank)",
      "Title dispute litigation advocacy"
    ],
    disclaimer: "A property valuation does not guarantee loan approval. Reports reflect verified property documents and physical inspection findings.",
    relatedServiceSlugs: ["house-construction-bangalore", "commercial-construction-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "How long does a property valuation take in Bangalore?",
        answer: "Once documents are shared and site inspection is completed, the structured valuation report is prepared within 2 to 4 working days."
      },
      {
        question: "What is the difference between Guideline Value and Fair Market Value?",
        answer: "Guideline Value is the government minimum rate for stamp duty. Fair Market Value is the realistic price paid in the open market."
      },
      {
        question: "Does a valuation report guarantee my bank loan approval?",
        answer: "No. The valuation provides asset collateral estimation. Final loan approval depends on applicant credit eligibility and legal title clearance."
      },
      {
        question: "What types of built properties do you value across Bangalore?",
        answer: "We assess independent houses, residential villas, apartment flats, commercial complexes, and industrial factories."
      },
      {
        question: "How is building depreciation calculated in the valuation?",
        answer: "We calculate building replacement cost using CPWD rates and apply straight-line depreciation based on structural age and condition."
      }
    ]
  },
  {
    id: "business-valuation",
    slug: "business-valuation-bangalore",
    title: "Business Valuation",
    category: "Assess",
    h1: "Business & Asset Valuation in Bangalore",
    primaryKeyword: "business valuation in Bangalore",
    metaTitle: "Business Valuation Services Bangalore | Commercial Enterprise Valuation | My Space",
    metaDescription: "Comprehensive business asset valuation, commercial plant/machinery appraisal, and enterprise asset assessment in Bangalore.",
    tagline: "Enterprise Worth, Plant & Machinery Appraisal & Financial Due Diligence",
    heroImage: "/images/company/showroom-2.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Commercial Plant & Facility Appraisal",
        caption: "Tangible commercial asset inspection and building valuation."
      },
      {
        url: "/images/company/Car_Showroom_View_2.jpeg",
        title: "Enterprise Machinery & Equipment",
        caption: "Depreciated replacement value of plant equipment."
      },
      {
        url: "/images/company/real-project-65.jpeg",
        title: "Asset & Financial Due Diligence",
        caption: "Discounted cash flow modeling and net asset calculations."
      },
      {
        url: "/images/company/showroom-5.jpeg",
        title: "Comprehensive Asset Dossier",
        caption: "Detailed documentation for asset tracking and business planning."
      }
    ],
    eyebrow: "BUSINESS & COMMERCIAL ASSET VALUATION",
    primaryCta: "Request Business Valuation",
    summary: "Plant & machinery, commercial asset, and enterprise valuations using Discounted Cash Flow (DCF) and Net Asset Value (NAV) methodologies.",
    whoIsThisFor: [
      "Companies seeking assessment of commercial business assets",
      "Business owners preparing for partnership buyouts or internal restructuring",
      "Enterprises requiring plant and machinery registers with CPWD depreciation"
    ],
    whatWeHelpWith: [
      {
        title: "Fixed Asset Valuation",
        desc: "Physical audit and depreciated replacement value of plant, machinery, and facilities."
      },
      {
        title: "DCF & NAV Modeling",
        desc: "Discounted cash flow and net tangible asset calculations for enterprise worth."
      },
      {
        title: "Statutory Dossier",
        desc: "Detailed valuation documentation with complete asset registers."
      },
      {
        title: "Confidential Due Diligence",
        desc: "Complete NDA protection for proprietary financial and asset records."
      }
    ],
    whatToPrepare: [
      "Audited balance sheets and P&L statements for past 3 years",
      "Fixed asset register and plant machinery equipment list",
      "Purpose of the valuation"
    ],
    scopeInclusions: [
      "Physical site inspection of commercial/industrial assets",
      "Comprehensive valuation dossier and asset register",
      "Structured documentation for commercial asset assessment"
    ],
    scopeExclusions: [
      "Income tax filing (undertaken by Chartered Accountants)"
    ],
    relatedServiceSlugs: ["property-valuation-bangalore", "land-valuation-bangalore", "commercial-construction-bangalore"],
    faqs: [
      {
        question: "What standards are followed for asset valuation?",
        answer: "Our reports follow standard Net Asset Value (NAV) and Discounted Cash Flow (DCF) accounting principles."
      },
      {
        question: "What methodologies are used for commercial enterprise valuation?",
        answer: "We apply the Asset-Based Approach (Net Asset Value), Income Approach (Discounted Cash Flow), and Market Multiples."
      },
      {
        question: "What financial documents are needed to initiate business valuation?",
        answer: "We require audited balance sheets (last 3-5 years), fixed asset registers with purchase invoices, and existing lease agreements."
      },
      {
        question: "Can you perform plant and machinery valuation across Karnataka?",
        answer: "Yes, our technical team inspects machine make, installation year, rated capacity, and maintenance condition on site."
      },
      {
        question: "How do you ensure client data confidentiality?",
        answer: "We execute Non-Disclosure Agreements (NDAs) prior to data intake, ensuring all financial statements and records remain strictly private."
      }
    ]
  }
];
