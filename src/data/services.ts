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
    h1: "Building a home should feel clearer from the start.",
    primaryKeyword: "house construction company in Bangalore",
    metaTitle: "House Construction Company in Bangalore | My Space",
    metaDescription: "Plan and build your home in Bangalore with a clearer process for scope, design coordination, construction stages, and handover. Discuss your home project with My Space.",
    tagline: "Turnkey & Custom Residential Construction for Independent Plots & Villas",
    heroImage: "/images/company/turnkey-house-hero.jpeg",
    galleryImages: [
      {
        url: "/images/company/turnkey-house-hero.jpeg",
        title: "Contemporary Villa Execution",
        caption: "Turnkey multi-storey residential villa with contemporary elevation in Bengaluru."
      },
      {
        url: "/images/company/real-project-05.jpeg",
        title: "RCC Framing & Column Casting",
        caption: "Precision rebar reinforcement tying and high-grade concrete casting conforming to IS standards."
      },
      {
        url: "/images/company/real-project-09.jpeg",
        title: "Exterior Plastering & Joinery",
        caption: "Double-coat weather-resistant plastering and structural window framing."
      },
      {
        url: "/images/company/showroom-1.jpeg",
        title: "Architectural Handover & Finishes",
        caption: "Premium flooring, ceiling lighting, and quality-controlled snag clearance."
      }
    ],
    eyebrow: "RESIDENTIAL CONSTRUCTION IN BENGALURU",
    primaryCta: "Discuss Your Home Project",
    summary: "Whether you have just purchased a plot, have an architectural sketch, or are evaluating how to build on family land in Bengaluru, My Space coordinates architectural planning, structural engineering, civil execution, and quality-controlled handover into one transparent workflow.",
    whoIsThisFor: [
      "Plot owners planning a new independent house or duplex",
      "Families building a custom villa on own or gated-community plots",
      "Homeowners planning multi-storey residential units for personal use and rental",
      "Clients seeking a single accountable team for structural execution and finishes",
      "Home builders tired of ambiguous contractor quotations and hidden stage costs"
    ],
    whatWeHelpWith: [
      {
        title: "Site & Soil Assessment",
        desc: "Evaluating site levels, approach road access, soil characteristics, and municipal setback constraints before finalizing foundations."
      },
      {
        title: "Integrated Architectural & Structural Design",
        desc: "Coordinating 2D floor plans, 3D elevations, structural steel calculations, and plumbing/electrical conduits so nothing clashes on site."
      },
      {
        title: "Detailed Bill of Quantities (BOQ)",
        desc: "Transparent specification of cement grades, TMT steel, brickwork, waterproofing membranes, flooring, and joinery with clear unit rates."
      },
      {
        title: "Staged Civil Execution & Quality Checks",
        desc: "Systematic stage-wise milestone execution from foundation, plinth beam, RCC column casting, slab curing, masonry, plastering, to finishing."
      },
      {
        title: "Transparent Handover & Documentation",
        desc: "As-built drawings, electrical/plumbing routing maps, warranty certificates for waterproofing, and systematic snag rectifications."
      }
    ],
    whatToPrepare: [
      "Plot dimensions (e.g. 30x40, 30x50, 40x60) and site location in Bengaluru",
      "Intended family requirements (e.g., 3BHK + study, parking count, duplex layout, rental floors)",
      "Site photos or survey sketches if available",
      "Estimated timeline for beginning site preparation",
      "Known site constraints (narrow approach lane, low-lying area, existing structure to demolish)"
    ],
    scopeInclusions: [
      "Site clearing, layout marking, excavation, and anti-termite treatment",
      "RCC framed structure design & execution conforming to IS codes",
      "Masonry walls (wire-cut red bricks or solid concrete blocks as specified)",
      "Internal and external double-coat plastering with water curing cycles",
      "Complete concealed plumbing (CPVC/PVC) and electrical conduit works",
      "Flooring, wall tiling, joinery (main door, internal doors, UPVC/aluminium windows)",
      "Internal and external weather-resistant emulsion painting",
      "Multi-stage waterproofing for terrace, balconies, and wet areas"
    ],
    scopeExclusions: [
      "Statutory municipal plan sanction fees and government utility deposit charges (BESCOM/BWSSB)",
      "Borewell drilling, submersible pump installation, and solar water heater units unless specified",
      "Loose furniture, decorative soft furnishings, and movable electronic appliances",
      "Compound wall and exterior landscaping beyond contract perimeter"
    ],
    disclaimer: "All construction timelines and stage payments are aligned directly with physical stage completion milestones verified on-site. Educational estimates are illustrative and subject to final site-specific structural design and BOQ confirmation.",
    relatedServiceSlugs: ["elevation-design-bangalore", "3d-floor-plan-design-bangalore", "interior-design-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "How do you calculate residential construction costs in Bangalore?",
        answer: "Construction cost is derived from total built-up area (BUA), structural requirements (soil bearing capacity, basement needs), specification packages (Standard, Premium, Luxury finishes), and site logistical factors (road width, material unloading access). We provide an itemized BOQ so every rupee is clearly accounted for."
      },
      {
        question: "Can I bring my own architect's drawings to My Space?",
        answer: "Yes. If you already have approved architectural drawings, our civil and structural engineering team will review the structural feasibility, create the execution BOQ, and manage the turnkey construction with complete engineering accountability."
      },
      {
        question: "How do you ensure quality control during concrete casting and curing?",
        answer: "We perform slump tests and cube test sampling for concrete batches, ensure strictly measured water-cement ratios, verify steel rebar spacing and cover blocks prior to casting, and enforce minimum 14-21 day water curing protocols."
      },
      {
        question: "What happens if I want to make changes during construction?",
        answer: "We follow a formal change-management process. Before any structural or material change is initiated, we provide a written variance note outlining timeline and cost implications so there are never unapproved surprises on your bill."
      }
    ]
  },
  {
    id: "commercial-construction",
    slug: "commercial-construction-bangalore",
    title: "Commercial Construction",
    category: "Build",
    h1: "Build a commercial space around how your business works.",
    primaryKeyword: "commercial construction company in Bangalore",
    metaTitle: "Commercial Construction Company in Bangalore | My Space",
    metaDescription: "Plan a commercial building, office, retail, clinic, or fit-out project in Bangalore with clearer scope, coordination, execution, and handover support from My Space.",
    tagline: "Commercial Buildings, Corporate Offices, Retail Spaces & Healthcare Facilities",
    heroImage: "/images/company/showroom-2.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Multi-Storey Commercial Facade",
        caption: "Contemporary commercial showroom building with structural glazing and signage bands."
      },
      {
        url: "/images/company/Car_Showroom_View_1.jpeg",
        title: "Open Span Commercial Interior",
        caption: "Spacious column-free commercial floor plate engineered for high customer footfall."
      },
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Heavy Civil Frame Execution",
        caption: "High live-load RCC framing designed for commercial equipment and heavy occupancy."
      },
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Commercial Glazing & Canopy",
        caption: "Integrated entrance canopy, commercial lighting, and architectural ACP cladding."
      }
    ],
    eyebrow: "COMMERCIAL CONSTRUCTION & FIT-OUTS IN BENGALURU",
    primaryCta: "Discuss a Commercial Project",
    summary: "Commercial spaces demand strict timeline adherence, heavy service coordination (HVAC, fire, electrical, IT networking), structural durability, and high spatial efficiency. My Space builds commercial properties engineered for business operations and return on investment.",
    whoIsThisFor: [
      "Property owners developing multi-storey commercial complexes for lease or own business",
      "Corporate clients and growing companies establishing bespoke office headquarters",
      "Retail brands and showroom operators needing robust shell-and-core or interior fit-outs",
      "Healthcare practitioners, dental clinics, and diagnostic centres with specialized service requirements",
      "Industrialists and warehouse operators planning durable logistics hubs"
    ],
    whatWeHelpWith: [
      {
        title: "Spatial Efficiency & Floor Plate Optimization",
        desc: "Designing column grids and core circulation (elevators, staircases, restrooms) to maximize usable carpet area and rental yields."
      },
      {
        title: "MEP (Mechanical, Electrical & Plumbing) Integration",
        desc: "Coordinating heavy 3-phase power, DG backup lines, central VRV/HVAC ducting routes, fire sprinkler grids, and data cabling."
      },
      {
        title: "Commercial Grade Façade & Glazing",
        desc: "High-performance structural glazing, ACP cladding, acoustic louvers, and weather-sealed commercial entrance canopies."
      },
      {
        title: "Timeline & Phased Handover Management",
        desc: "Critical-path scheduling to enable early access for tenant fit-out teams or phased operational launches without business disruption."
      }
    ],
    whatToPrepare: [
      "Commercial plot or building floor plate dimensions",
      "Intended commercial occupancy type (IT office, retail showroom, clinic, co-working)",
      "Target go-live operational date and key regulatory deadlines",
      "Specialized service loads (connected power in kVA, air-conditioning tonnage, server room cooling)",
      "Parking and logistics loading/unloading requirements"
    ],
    scopeInclusions: [
      "Heavy RCC structural framing designed for commercial live loads (IS 875 Part 2)",
      "High-traffic vitrified/granite flooring and acoustic partitions",
      "Commercial grade fire stairwells with fire-rated door assemblies",
      "Concealed high-capacity electrical risers, distribution panels, and earthing pits",
      "Basement waterproofing, sump tanks, and commercial drainage systems"
    ],
    scopeExclusions: [
      "Specialized tenant IT server racks and custom software systems",
      "Branded retail display fixtures unless contracted under turnkey fit-out scope",
      "Trade license and commercial business operating certificates"
    ],
    relatedServiceSlugs: ["civil-construction-bangalore", "interior-design-bangalore", "property-valuation-bangalore"],
    faqs: [
      {
        question: "Can My Space handle commercial projects in busy Bengaluru commercial corridors?",
        answer: "Yes. We manage urban site logistics, nocturnal material transport where daytime traffic restrictions apply, noise mitigation barriers, and strict worker safety standards across central and suburban Bengaluru."
      },
      {
        question: "Do you build shell-and-core or turnkey commercial fit-outs?",
        answer: "We execute both: pure shell-and-core structural builds ready for tenant leasing, as well as comprehensive turnkey design-and-build fit-outs including MEP, glass partitions, ceilings, and workstations."
      }
    ]
  },
  {
    id: "industrial-construction",
    slug: "industrial-construction-bangalore",
    title: "Industrial Construction",
    category: "Build",
    h1: "Heavy-duty industrial infrastructure built for operational longevity.",
    primaryKeyword: "industrial construction company in Bangalore",
    metaTitle: "Industrial Construction Company in Bangalore | Warehouses & Factories | My Space",
    metaDescription: "Turnkey industrial construction in Bangalore. Heavy PEB structures, manufacturing plants, logistics warehouses, and industrial civil flooring.",
    tagline: "Pre-Engineered Buildings, Manufacturing Sheds & Logistics Warehouses",
    heroImage: "/images/company/real-project-18.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Industrial PEB Steel Structure",
        caption: "High-clearance portal frames and heavy structural steel framing for manufacturing."
      },
      {
        url: "/images/company/real-project-25.jpeg",
        title: "Heavy Machine Foundations",
        caption: "Vibration-damped civil footings and reinforced concrete pads for industrial plant equipment."
      },
      {
        url: "/images/company/real-project-34.jpeg",
        title: "Tremix VDF Industrial Flooring",
        caption: "Laser-leveled Vacuum Dewatered Flooring with metallic hardeners for forklift traffic."
      },
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Industrial Logistics & Warehouse Hub",
        caption: "Turnkey warehouse infrastructure with loading docks and high-bay lighting."
      }
    ],
    eyebrow: "INDUSTRIAL CIVIL & PEB INFRASTRUCTURE",
    primaryCta: "Discuss an Industrial Project",
    summary: "From heavy manufacturing sheds and Pre-Engineered Steel Buildings (PEB) to logistics hubs and cleanrooms, My Space delivers turnkey industrial construction engineered for heavy floor loads, high equipment vibration, and rapid project delivery.",
    whoIsThisFor: [
      "Factory and manufacturing plant owners needing expandable industrial sheds",
      "Logistics and e-commerce operators planning automated warehouse hubs",
      "Industrial estate plot owners developing custom rental units in Peenya, Bommasandra, or Hoskote",
      "Enterprises requiring heavy-duty industrial VDF (Vacuum Dewatered) concrete flooring"
    ],
    whatWeHelpWith: [
      {
        title: "PEB & Heavy Structural Steel Fabrication",
        desc: "High-clearance portal frames, crane girders, thermal insulated sandwich panel roofing, and turbo ventilators."
      },
      {
        title: "Heavy Load-Bearing Foundations & VDF Flooring",
        desc: "Laser-leveled Vacuum Dewatered Flooring (VDF/Tremix) with metallic hardeners capable of supporting high-tonnage forklifts."
      },
      {
        title: "Industrial Utilities & Safety Compliance",
        desc: "Dedicated transformer yard foundations, fire sprinkler loops, ETP/STP plant civil works, and stormwater retention."
      }
    ],
    whatToPrepare: [
      "Industrial plot boundaries and KIADB/BMRDA zoning approvals",
      "Clear height requirement under the hook and crane capacity (e.g. 5T, 10T)",
      "Floor load bearing requirements (e.g., 5 to 10 MT/sq.m)",
      "Target industrial machinery installation schedule"
    ],
    scopeInclusions: [
      "Heavy civil excavation, soil compaction, and machine foundation casting",
      "Factory fabricated structural steel trusses, purlins, and galvanized sheeting",
      "High-durability industrial Tremix flooring with expansion joints",
      "Perimeter security walls, security gatehouses, and high-clearance truck loading bays"
    ],
    scopeExclusions: [
      "Industrial manufacturing process machinery and plant assembly",
      "Pollution control board (KSPCB) statutory operating clearances"
    ],
    relatedServiceSlugs: ["commercial-construction-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "What industrial areas in Bengaluru do you cover?",
        answer: "We execute industrial projects across Peenya, Bommasandra, Electronic City, Bidadi, Dabaspet, Hoskote, and surrounding industrial corridors in Karnataka."
      }
    ]
  },
  {
    id: "civil-construction",
    slug: "civil-construction-bangalore",
    title: "Civil & Structural Construction",
    category: "Build",
    h1: "Civil construction planned for strength, function, and clarity.",
    primaryKeyword: "civil contractors in Bangalore",
    metaTitle: "Civil Contractors in Bangalore | Structural Construction | My Space",
    metaDescription: "Dependable civil and structural engineering execution in Bangalore. Foundation engineering, RCC framing, masonry, and structural retrofitting with strict quality control.",
    tagline: "Engineering Precision, Foundation Mastery & Structural Integrity",
    heroImage: "/images/company/real-project-18.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        title: "Foundation & Sub-Structure Engineering",
        caption: "Deep excavation, soil compaction, and RCC footing casting."
      },
      {
        url: "/images/company/real-project-05.jpeg",
        title: "Certified Rebar Fabrication",
        caption: "550D TMT steel rebar spacing and cover block placement conforming to IS 456."
      },
      {
        url: "/images/company/real-project-39.jpeg",
        title: "Reinforced Masonry & Plastering",
        caption: "High-density blockwork with chicken mesh joint reinforcement at concrete junctions."
      },
      {
        url: "/images/company/real-project-56.jpeg",
        title: "Advanced Terrace Waterproofing",
        caption: "Multi-layer elastomeric coating and screed protection for long-term damp prevention."
      }
    ],
    eyebrow: "CIVIL & STRUCTURAL ENGINEERING CONTRACTORS",
    primaryCta: "Discuss Civil Construction",
    summary: "The longevity of any building lies in what cannot be seen: soil-matched footings, precise rebar tying, vibration-compacted concrete, and structural load pathways. My Space provides engineering-governed civil contracting for new projects and structural expansions.",
    whoIsThisFor: [
      "Builders and developers needing a specialized civil contracting team",
      "Homeowners adding additional floors, rooftop structures, or cantilever extensions",
      "Clients requiring deep basement excavation, retaining walls, and waterproofing in water-logged soils",
      "Commercial entities undertaking heavy civil foundation works and equipment pads"
    ],
    whatWeHelpWith: [
      {
        title: "Foundation & Sub-structure Engineering",
        desc: "Isolated footings, combined footings, raft foundations, and pile caps engineered according to soil strata and groundwater depth."
      },
      {
        title: "RCC Superstructure Casting",
        desc: "High-grade concrete column, beam, and slab casting using steel formwork, precise cover blocks, and mechanical vibrators."
      },
      {
        title: "Advanced Waterproofing & Damp Proofing",
        desc: "Integral crystalline waterproofing, elastomeric membrane coatings, and injection grouting for basements, sumps, and wet zones."
      },
      {
        title: "Structural Masonry & Wall Systems",
        desc: "Precision solid block, AAC block, or wire-cut red brick masonry with reinforced lintels and bond beams to prevent settlement cracks."
      }
    ],
    whatToPrepare: [
      "Soil test report / Geotechnical investigation data if available",
      "Structural engineering drawings or architectural floor layouts",
      "Site access conditions and neighbouring structure clearances",
      "Specific concrete grade (e.g. M20, M25, M30) requirements"
    ],
    scopeInclusions: [
      "Excavation, earthwork, backfilling, and compaction",
      "PCC sub-base, shuttering, de-shuttering, and structural rebar fabrication",
      "Ready-Mix Concrete (RMC) or batch-controlled machine site mixing",
      "Structural masonry, lintels, chajjas, and parapet walls"
    ],
    scopeExclusions: [
      "Architectural interior woodwork and surface polishes",
      "Non-structural soft finishes unless requested under combined package"
    ],
    relatedServiceSlugs: ["house-construction-bangalore", "commercial-construction-bangalore", "property-valuation-bangalore"],
    faqs: [
      {
        question: "How do you prevent cracks in masonry and plaster?",
        answer: "We install chicken mesh (GI wire mesh) at all RCC-to-brickwork junctions, use crack-filler polymers in plaster mixes, enforce strict wet-curing cycles, and maintain expansion joints where required."
      },
      {
        question: "Do you supply the materials or work on labour-only contracts?",
        answer: "We primarily execute on a Material + Labour turnkey basis to guarantee structural material quality (certified 550D TMT steel, 53-grade OPC/PPC cement), but also evaluate structured project-management civil contracts."
      }
    ]
  },
  {
    id: "interior-design",
    slug: "interior-design-bangalore",
    title: "Interior Design & Execution",
    category: "Design",
    h1: "Make the inside of your space work better.",
    primaryKeyword: "interior design company in Bangalore",
    metaTitle: "Interior Design Company in Bangalore | Space Planning & Execution | My Space",
    metaDescription: "Tailored residential and commercial interior design in Bangalore. Space planning, modular joinery, custom woodwork, lighting design, and execution support.",
    tagline: "Ergonomic Layouts, Tactile Material Palettes & Direct Site Execution",
    heroImage: "/images/company/showroom-3.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-3.jpeg",
        title: "Living & Lounge Space Planning",
        caption: "Bespoke media units with concealed cabling and warm architectural profile lighting."
      },
      {
        url: "/images/company/interior-design-hero.jpeg",
        title: "Custom Modular Kitchen",
        caption: "BWP marine plywood cabinetry, quartz countertop, and soft-close German hardware."
      },
      {
        url: "/images/company/real-project-44.jpeg",
        title: "Floor-to-Ceiling Wardrobes",
        caption: "Anti-scratch acrylic and laminate finishes with integrated internal LED illumination."
      },
      {
        url: "/images/company/real-project-51.jpeg",
        title: "False Ceiling & Ambient Lighting",
        caption: "Layered ambient, task, and accent lighting with gypsum false ceilings and magnetic track lights."
      }
    ],
    eyebrow: "INTERIOR ARCHITECTURE & FIT-OUT EXECUTION",
    primaryCta: "Plan Your Interiors",
    summary: "Interior design at My Space is not about superficial trends or catalog copy-pastes. We design for daily movement, natural ventilation, durable materials, concealed cable routing, and built-in storage tailored to how you cook, rest, and work.",
    whoIsThisFor: [
      "Homeowners moving into newly constructed independent houses, villas, or apartments",
      "Families renovating dated kitchens, wardrobes, and living areas for modern ergonomics",
      "Commercial brands needing branded, welcoming, and high-durability reception and workspaces",
      "Clients who want 3D visual clarity followed by precise factory and on-site carpentry execution"
    ],
    whatWeHelpWith: [
      {
        title: "Modular Kitchen & Storage Ergonomics",
        desc: "Bespoke kitchen work triangles, boiling waterproof (BWP) marine ply cabinetry, soft-close German hardware, and anti-scratch acrylic/laminate finishes."
      },
      {
        title: "Custom Wardrobes & Space Saving Joinery",
        desc: "Floor-to-ceiling wardrobes with integrated profile lighting, concealed vanity units, study desks, and multifunctional storage benches."
      },
      {
        title: "False Ceiling & Architectural Lighting",
        desc: "Layered ambient, task, and accent lighting with gypsum false ceilings, magnetic track lights, and warm LED cove channels."
      },
      {
        title: "Living & Dining Spatial Zoning",
        desc: "TV media consoles with hidden wiring conduits, fluted panel dividers, stone-topped dining tables, and bespoke foyer credenzas."
      }
    ],
    whatToPrepare: [
      "Floor plan with room dimensions or current handover status",
      "Family lifestyle requirements (number of occupants, cooking habits, work-from-home needs)",
      "Preferred material preferences (natural veneer, matte laminate, quartz, fluted glass)",
      "Target move-in timeline"
    ],
    scopeInclusions: [
      "3D interior visualization views and 2D carpentry fabrication drawings",
      "Factory-pressed BWP / BWR plywood carcasses with 1mm edge-banded laminates",
      "Branded hardware (Hafele, Hettich, Blum or equivalent as approved)",
      "False ceiling framing, wiring, LED fixtures, and premium interior paint finishes",
      "On-site installation, stone countertop fitting, and deep pre-handover cleaning"
    ],
    scopeExclusions: [
      "Loose soft furnishings (curtains, loose rugs, wall art) unless specified in package",
      "Personal kitchen appliances (refrigerator, oven, hob) unless coordinated in order"
    ],
    relatedServiceSlugs: ["house-construction-bangalore", "3d-floor-plan-design-bangalore", "elevation-design-bangalore"],
    faqs: [
      {
        question: "What core materials do you use for wet areas like kitchens and bathrooms?",
        answer: "We strictly use IS 710 certified Boiling Waterproof (BWP) marine plywood with calibrated thickness and zero core gaps, paired with anti-fungal silicones and waterproof laminates or acrylics."
      },
      {
        question: "Can you coordinate interior civil modifications like moving a door or electrical points?",
        answer: "Yes. Because we have in-house civil and electrical teams, we handle wall shifts, plumbing rerouting, and switchboard additions directly without relying on outside sub-contractors."
      }
    ]
  },
  {
    id: "2d-design",
    slug: "2d-design-bangalore",
    title: "2D Architectural Design",
    category: "Design",
    h1: "Precision 2D architectural drawings and municipal sanction plans.",
    primaryKeyword: "2D architectural design Bangalore",
    metaTitle: "2D Architectural Design & Floor Plans Bangalore | My Space",
    metaDescription: "Detailed 2D architectural plans, BBMP/BDA sanction drawings, working fabrication details, and electrical/plumbing conduit layouts.",
    tagline: "Working Fabrication Drawings, Municipal Sanction Plans & Dimensioned Layouts",
    heroImage: "/images/company/real-project-01.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        title: "Dimensional Floor Plans",
        caption: "Precise 2D architectural drafting with room dimensions conforming to BBMP bylaws."
      },
      {
        url: "/images/company/real-project-21.jpeg",
        title: "Structural Centerline Grid",
        caption: "Accurate column centerlines and excavation drawings for site civil masons."
      },
      {
        url: "/images/company/real-project-38.jpeg",
        title: "MEP Conduit & Plumbing Plans",
        caption: "Concealed electrical conduit layouts, drainage drop shafts, and plumbing schematics."
      },
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Sectional Elevation Details",
        caption: "Door, window schedules, stair risers, and structural cross-section details."
      }
    ],
    eyebrow: "ARCHITECTURAL SPATIAL PLANNING & WORKING DRAWINGS",
    primaryCta: "Request 2D Plan Review",
    summary: "A successful build depends on uncompromising precision in 2D technical working drawings. We craft dimensioned floor plans, door/window schedules, structural grids, and sanction drawings that ensure seamless site execution without ambiguity.",
    whoIsThisFor: [
      "Plot owners requiring custom 2D floor plans optimized for light and Vastu",
      "Builders needing comprehensive working drawing sets for site masonry and carpenters",
      "Homeowners submitting architectural plans for BBMP or local authority sanction"
    ],
    whatWeHelpWith: [
      {
        title: "Dimensional Spatial Layouts",
        desc: "Clear room-by-room dimensions, wall thicknesses, door swing arcs, and stair riser/tread geometry."
      },
      {
        title: "MEP & Electrical Working Conduits",
        desc: "Precise switchboard positions, plumbing drop shafts, wastewater line slope angles, and AC core-cut locations."
      }
    ],
    whatToPrepare: [
      "Plot survey drawing and dimensions",
      "Specific family or commercial spatial requirements"
    ],
    scopeInclusions: [
      "Architectural conceptual floor plans",
      "Detailed working drawings and sectional elevations",
      "Door and window schedules with hardware specifications"
    ],
    scopeExclusions: [
      "Government plan sanction fee deposits"
    ],
    relatedServiceSlugs: ["3d-floor-plan-design-bangalore", "elevation-design-bangalore", "house-construction-bangalore"],
    faqs: [
      {
        question: "Do your 2D plans conform to Bengaluru building bylaws?",
        answer: "Yes, all our plans strictly consider BBMP/BDA setback rules, Floor Area Ratio (FAR), road width criteria, and light/ventilation requirements."
      }
    ]
  },
  {
    id: "3d-design",
    slug: "3d-design-bangalore",
    title: "3D Design & Visualization",
    category: "Design",
    h1: "Photorealistic 3D architectural models, elevations, and walkthroughs.",
    primaryKeyword: "3D design services Bangalore",
    metaTitle: "3D Design & Façade Visualization Bangalore | My Space",
    metaDescription: "High-definition 3D elevations, spatial visualizations, and realistic exterior/interior 3D modeling for residential and commercial spaces.",
    tagline: "Photorealistic Textures, Lighting Studies & Virtual Walkthroughs",
    heroImage: "/images/company/front-elevation-hero.jpeg",
    galleryImages: [
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Photorealistic 3D Exterior Elevation",
        caption: "Contemporary façade styling with textured terracotta louvers and concrete accents."
      },
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Daylight Sunlight & Shadow Simulation",
        caption: "Accurate solar orientation and shadow casting for Bangalore weather conditions."
      },
      {
        url: "/images/company/real-project-54.jpeg",
        title: "Evening Lighting & Atmosphere",
        caption: "Warm architectural up-down wall washers and balcony lighting visual study."
      },
      {
        url: "/images/company/showroom-1.jpeg",
        title: "Furnished 3D Isometric View",
        caption: "Top-down furnished perspective demonstrating seamless spatial circulation."
      }
    ],
    eyebrow: "3D ARCHITECTURAL VISUALIZATION & ELEVATIONS",
    primaryCta: "Get 3D Design Quote",
    summary: "Experience every architectural nuance before construction starts. Our 3D design services transform blueprints into vivid exterior façades, furnished isometric spatial layouts, and daylight/nighttime illumination models.",
    whoIsThisFor: [
      "Homeowners looking to approve exterior finishes, textures, and lighting before building",
      "Architects and developers seeking photorealistic marketing renders for clients",
      "Commercial entities seeking distinctive street-facing brand identity"
    ],
    whatWeHelpWith: [
      {
        title: "3D Exterior Façade Design",
        desc: "Terracotta louvers, cantilevered balconies, micro-cement textures, and architectural up-down wall lighting."
      },
      {
        title: "Furnished 3D Spatial Models",
        desc: "Isometric top-down views showing furniture proportions and circulation paths."
      }
    ],
    whatToPrepare: [
      "2D floor layout with dimensions",
      "Preferred architectural style references"
    ],
    scopeInclusions: [
      "High-resolution 3D perspective renders (Day and Dusk views)",
      "Material callout sheets for contractor site execution"
    ],
    scopeExclusions: [
      "Physical structural modifications without civil approval"
    ],
    relatedServiceSlugs: ["elevation-design-bangalore", "interior-design-bangalore", "2d-design-bangalore"],
    faqs: [
      {
        question: "How long does a 3D elevation design take?",
        answer: "Initial 3D design concepts are presented within 3 to 5 working days following 2D layout confirmation."
      }
    ]
  },
  {
    id: "structural-design",
    slug: "structural-design-bangalore",
    title: "Structural Design",
    category: "Design",
    h1: "Certified structural engineering and RCC framework design.",
    primaryKeyword: "structural engineers in Bangalore",
    metaTitle: "Structural Design & Engineering Services Bangalore | My Space",
    metaDescription: "Certified structural engineering, RCC detailing, bar bending schedules, foundation design, and seismic analysis in Bangalore conforming to IS codes.",
    tagline: "IS Code Compliance, Foundation Optimization & Structural Stability",
    heroImage: "/images/company/real-project-18.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-18.jpeg",
        title: "RCC Frame & Column Design",
        caption: "IS 456 compliant reinforced concrete framing calculations for seismic stability."
      },
      {
        url: "/images/company/real-project-05.jpeg",
        title: "Bar Bending Schedules (BBS)",
        caption: "Precise reinforcement cut and bend schedules preventing steel site wastage."
      },
      {
        url: "/images/company/real-project-25.jpeg",
        title: "Soil-Matched Footing Design",
        caption: "Foundation engineering tailored to soil-bearing capacity across Bangalore zones."
      },
      {
        url: "/images/company/real-project-39.jpeg",
        title: "Structural Inspection & Checking",
        caption: "Site verification of rebar placement, cover blocks, and concrete slump."
      }
    ],
    eyebrow: "CERTIFIED STRUCTURAL ENGINEERING & RCC DESIGN",
    primaryCta: "Consult Structural Engineers",
    summary: "Every safe building starts with rigorous structural engineering. We perform soil-bearing analysis, seismic load computations (IS 1893), frame design (IS 456), and bar bending schedules (BBS) to deliver strong, cost-effective structural drawings.",
    whoIsThisFor: [
      "Homeowners seeking certified structural drawings for new house construction",
      "Developers adding extra floors requiring structural stability verification",
      "Builders needing optimized steel reinforcement detailing to prevent over-design"
    ],
    whatWeHelpWith: [
      {
        title: "Footing & Raft Foundation Calculations",
        desc: "Soil-matched foundation sizing to prevent differential settlement in challenging Bangalore clay soils."
      },
      {
        title: "RCC Frame & Steel Detailing",
        desc: "Column, beam, and slab reinforcement drawings with bar-bending schedules for site contractors."
      }
    ],
    whatToPrepare: [
      "Soil investigation report",
      "Architectural floor plans and floor-to-floor heights"
    ],
    scopeInclusions: [
      "Structural calculation report and framing layouts",
      "Column center-line and footing detail drawings",
      "Structural engineer certification"
    ],
    scopeExclusions: [
      "Geotechnical soil borehole drilling equipment"
    ],
    relatedServiceSlugs: ["civil-construction-bangalore", "house-construction-bangalore"],
    faqs: [
      {
        question: "Are your structural designs compliant with Indian Standards?",
        answer: "Yes, all designs strictly conform to IS 456:2000 (Plain and Reinforced Concrete), IS 1893 (Earthquake Resistant Design), and IS 875 (Design Loads)."
      }
    ]
  },
  {
    id: "elevation-design",
    slug: "elevation-design-bangalore",
    title: "3D Elevation Design",
    category: "Design",
    h1: "See the character of your building before it is built.",
    primaryKeyword: "3D elevation design Bangalore",
    metaTitle: "3D Elevation Design Bangalore | Façade Architecture | My Space",
    metaDescription: "Visualise the exterior character of your Bangalore building before construction. Modern, contemporary, and tropical elevation designs with realistic lighting and materials.",
    tagline: "Contemporary Façades, Material Harmony & Daytime/Nighttime Visuals",
    heroImage: "/images/company/showroom-4.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-4.jpeg",
        title: "Contemporary Exterior Façade",
        caption: "Sleek architectural exterior with warm wooden rafters and glass balustrades."
      },
      {
        url: "/images/company/front-elevation-hero.jpeg",
        title: "Material Harmony & Textures",
        caption: "Terracotta jali, exposed concrete, and stone cladding texture mapping."
      },
      {
        url: "/images/company/real-project-54.jpeg",
        title: "Façade Accent Night Illumination",
        caption: "Day and evening lighting studies showing exterior light placement."
      },
      {
        url: "/images/company/showroom-1.jpeg",
        title: "Fabrication Working Drawings",
        caption: "Dimensioned elevation blueprints for on-site fabrication teams."
      }
    ],
    eyebrow: "ARCHITECTURAL FAÇADE & ELEVATION DESIGN",
    primaryCta: "Request a Design Consultation",
    summary: "An elevation is the architectural identity of your property. Our elevation design service blends sunlight angles, window placement, terracotta louvers, exposed concrete textures, wooden rafters, and landscape elements into photorealistic 3D studies.",
    whoIsThisFor: [
      "Plot owners who have a 2D floor plan but want to visualize how the exterior will look in 3D",
      "Existing building owners seeking a modern exterior facelift or vertical expansion design",
      "Commercial property owners needing attractive frontage design for street appeal and footfall",
      "Builders looking for high-resolution 3D renders to showcase to prospective buyers"
    ],
    whatWeHelpWith: [
      {
        title: "Multiple Architectural Styles",
        desc: "Exploring Contemporary Minimalist, Tropical Modern, Brutalist Exposed Concrete, Traditional Vernacular, or Neo-Classical façades."
      },
      {
        title: "Real-World Material Mapping",
        desc: "Selecting achievable local Bangalore materials: wire-cut terracotta jali, HPL cladding, stone cladding, fluted panels, and powder-coated MS/Aluminium louvers."
      },
      {
        title: "Lighting & Night Elevation Studies",
        desc: "Designing façade accent lighting, warm up-down wall washers, step lights, and landscape illumination for stunning evening aesthetics."
      },
      {
        title: "Execution-Ready Façade Drawings",
        desc: "Translating 3D visual renders into 2D dimensioned elevation drawings for site masons, fabricators, and cladding vendors."
      }
    ],
    whatToPrepare: [
      "Approved or draft 2D floor plans with floor-to-floor heights",
      "Plot orientation and cardinal direction (North, East, West, South sunlight exposure)",
      "Photographs of surrounding context and neighbouring plots",
      "Façade styles or reference images you appreciate"
    ],
    scopeInclusions: [
      "Initial concept exploration based on your floor plan",
      "High-resolution 3D photorealistic perspective renders (Day view & Evening lighting view)",
      "Detailed material callout specifications (paint codes, tile sizes, wood finishes)",
      "2D sectional dimensions for architectural fabrication"
    ],
    scopeExclusions: [
      "Physical structural load alterations without civil engineering clearance",
      "Statutory municipal sanction approvals unless enrolled in full architectural scope"
    ],
    disclaimer: "Visualizations communicate design intent and spatial aesthetics. Final construction detailing depends on structural verification and local municipal setback guidelines.",
    relatedServiceSlugs: ["3d-floor-plan-design-bangalore", "house-construction-bangalore", "interior-design-bangalore"],
    faqs: [
      {
        question: "How many revisions are included in the elevation design?",
        answer: "We include 2 rounds of design refinement after the initial concept presentation, allowing you to fine-tune material choices, colour schemes, and window proportions."
      },
      {
        question: "Can you provide the elevation design if My Space is not doing the construction?",
        answer: "Yes. You can engage My Space solely for 3D Elevation Design and dimensioned fabrication drawings for your own contractor to execute."
      }
    ]
  },
  {
    id: "3d-floor-plans",
    slug: "3d-floor-plan-design-bangalore",
    title: "3D Floor Plan Design",
    category: "Design",
    h1: "Understand the space before you build it.",
    primaryKeyword: "3D floor plan design Bangalore",
    metaTitle: "3D Floor Plan Design Bangalore | Spatial Planning & 3D Views | My Space",
    metaDescription: "Understand room relationships, proportions, furniture layouts, and light flow with 3D floor plan design in Bangalore. Plan with complete visual clarity.",
    tagline: "Isometric Spatial Views, Furniture Proportions & Walkway Flow",
    heroImage: "/images/company/real-project-01.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-01.jpeg",
        title: "Isometric Top-Down Layout",
        caption: "Bird's-eye furnished layout demonstrating spatial flow and room clearances."
      },
      {
        url: "/images/company/showroom-3.jpeg",
        title: "Proportional Furniture Placement",
        caption: "Verifying bedroom and living room furniture corridors without obstruction."
      },
      {
        url: "/images/company/interior-design-hero.jpeg",
        title: "Sunlight & Ventilation Study",
        caption: "Optimizing window placements for natural cross-breeze across rooms."
      },
      {
        url: "/images/company/real-project-44.jpeg",
        title: "Multi-Level Spatial Connectivity",
        caption: "Clear visualization of stairwells, duplex voids, and private family lounges."
      }
    ],
    eyebrow: "SPATIAL 3D FLOOR PLANNING & LAYOUT CLARITY",
    primaryCta: "Request a Design Consultation",
    summary: "2D blue lines on paper often fail to communicate how big a room really feels, whether a king-sized bed will block the balcony door, or how natural light enters the living room. Our 3D floor plans turn technical diagrams into intuitive, furnished spaces.",
    whoIsThisFor: [
      "First-time home builders struggling to visualize room dimensions from 2D architectural drawings",
      "Clients optimizing compact Bangalore plots (30x40, 20x30) to ensure zero wasted hallway space",
      "Joint families deciding room allocations and privacy zoning across duplex floors",
      "Commercial clients laying out reception, cabins, meeting rooms, and pantry flow"
    ],
    whatWeHelpWith: [
      {
        title: "Proportional Furniture Placement",
        desc: "Modeling true-to-scale beds, sofas, dining tables, and kitchen islands to verify clearance corridors and door swing paths."
      },
      {
        title: "Sunlight & Cross-Ventilation Analysis",
        desc: "Checking window positions against room depths to ensure breezy, well-lit spaces aligned with Bengaluru's climate."
      },
      {
        title: "Multi-Level Spatial Connectivity",
        desc: "Visualizing double-height living rooms, staircase cutouts, mezzanine studies, and skylight illumination."
      },
      {
        title: "Vastu & Functional Harmony",
        desc: "Aligning practical functional layouts with traditional orientation preferences without compromising modern usability."
      }
    ],
    whatToPrepare: [
      "Plot dimensions and boundary orientation",
      "Number of bedrooms, bathrooms, family lounge, and study requirements",
      "Special preferences (pooja room location, open vs closed kitchen, utility balcony)",
      "Vehicular parking requirements (e.g. 1 SUV + 2 two-wheelers)"
    ],
    scopeInclusions: [
      "2D conceptual architectural floor layout with dimensional grid",
      "3D bird's-eye isometric view of each floor level with furnished layout",
      "Door and window schedule with recommended opening clearances",
      "Digital high-resolution PDF and image package for site use"
    ],
    scopeExclusions: [
      "Detailed structural bar-bending schedules (provided in Civil package)",
      "Plumbing and electrical conduit drawings unless part of Full MEP bundle"
    ],
    relatedServiceSlugs: ["elevation-design-bangalore", "house-construction-bangalore", "interior-design-bangalore"],
    faqs: [
      {
        question: "Why should I get a 3D floor plan before starting construction?",
        answer: "A 3D floor plan prevents expensive on-site alterations. It reveals cramped passages, inconvenient bathroom entries, and inadequate wardrobe space before you cast a single column or lay a brick."
      }
    ]
  },
  {
    id: "land-valuation",
    slug: "land-valuation-bangalore",
    title: "Land Valuation",
    category: "Assess",
    h1: "Accurate land and plot valuation for bank loans, transactions, and tax.",
    primaryKeyword: "land valuation in Bangalore",
    metaTitle: "Land Valuation Services in Bangalore | Plot Appraisal | My Space",
    metaDescription: "Certified land and plot valuation in Bangalore. Guidance value benchmarking, physical boundary survey, and bank-compliant land appraisal reports.",
    tagline: "Guideline Rate Benchmark, Real-Market Analysis & Boundary Inspection",
    heroImage: "/images/company/real-project-75.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-75.jpeg",
        title: "Physical Land Boundary Audit",
        caption: "On-site physical inspection of plot boundaries, approach road width, and layout."
      },
      {
        url: "/images/company/real-project-62.jpeg",
        title: "e-Khata & Revenue Records Review",
        caption: "Guideline rate benchmarking and sub-registrar transaction cross-referencing."
      },
      {
        url: "/images/company/real-project-83.jpeg",
        title: "Micro-Market Real Estate Analytics",
        caption: "Analysis of actual sales trends across Bengaluru suburban and central zones."
      },
      {
        url: "/images/company/real-project-86.jpeg",
        title: "Certified Valuation Dossier",
        caption: "Government registered valuer stamped report accepted by leading banks and authorities."
      }
    ],
    eyebrow: "CERTIFIED LAND & PLOT VALUATION",
    primaryCta: "Request Land Valuation",
    summary: "Accurate land valuation requires deep understanding of local revenue records, sub-registrar guideline rates, road width multiplier factors, and active market transactions across Bengaluru. My Space delivers certified land appraisal reports within 3–5 days.",
    whoIsThisFor: [
      "Plot buyers and sellers needing an independent fair market value appraisal",
      "Landowners applying for bank mortgage loans against vacant sites",
      "Property owners assessing Capital Gains Tax (Section 54/54EC) on plot sales",
      "Families dividing ancestral land parcels or completing legal probate records"
    ],
    whatWeHelpWith: [
      {
        title: "Physical Boundary & Approach Road Audit",
        desc: "On-site verification of survey boundaries, approach road width, commercial frontage, and infrastructure."
      },
      {
        title: "Guideline vs Fair Market Value Analysis",
        desc: "Benchmarking government guidance rates against actual micro-market transaction values."
      }
    ],
    whatToPrepare: [
      "Land title deed and mother deed chain",
      "Latest e-Khata extract and Tax paid receipt",
      "Survey sketch / Village map extract"
    ],
    scopeInclusions: [
      "Physical land inspection and dimensional survey",
      "Valuation report stamped by Government-Registered Valuer"
    ],
    scopeExclusions: [
      "Litigation dispute legal arguments"
    ],
    relatedServiceSlugs: ["property-valuation-bangalore", "business-valuation-bangalore"],
    faqs: [
      {
        question: "How is vacant land valued for bank loans?",
        answer: "Banks evaluate the lesser of the guideline value and the assessed fair market value, factoring in road accessibility, legal title clarity, and locality infrastructure."
      }
    ]
  },
  {
    id: "property-valuation",
    slug: "property-valuation-bangalore",
    title: "Property Valuation",
    category: "Assess",
    h1: "Need a property valuation for a bank, decision, or record?",
    primaryKeyword: "property valuation in Bangalore",
    metaTitle: "Property Valuation in Bangalore | Bank, Property & Asset Enquiries | My Space",
    metaDescription: "Property valuation enquiries in Bangalore for banking, property decisions, capital gains, visa, and asset records. Clear document guidance, inspection, and assessment.",
    tagline: "Structured Assessment, Document Clarity & Professional Inspection",
    heroImage: "/images/company/real-project-75.jpeg",
    galleryImages: [
      {
        url: "/images/company/real-project-75.jpeg",
        title: "Physical Property Inspection",
        caption: "Comprehensive on-site inspection of building age, structural quality, and amenities."
      },
      {
        url: "/images/company/real-project-70.jpeg",
        title: "Structural Depreciation Assessment",
        caption: "CPWD replacement cost depreciation calculation based on age and maintenance."
      },
      {
        url: "/images/company/real-project-81.jpeg",
        title: "Fair Market Value Computation",
        caption: "Combining land market value with depreciated building replacement cost."
      },
      {
        url: "/images/company/real-project-85.jpeg",
        title: "Bank & Statutory Valuation Report",
        caption: "Signed and sealed professional documentation recognized by national banks and NBFCs."
      }
    ],
    eyebrow: "PROPERTY VALUATION & ASSET ASSESSMENT ENQUIRIES",
    primaryCta: "Request a Valuation Consultation",
    summary: "Whether you need a property valuation for bank mortgage requirements, sale/purchase decision-making, capital gains tax computation, visa asset proof, or partition records, My Space provides structured valuation guidance, thorough physical inspection, and documented assessment.",
    whoIsThisFor: [
      "Home loan and mortgage applicants requiring verified property assessment reports",
      "Property buyers and sellers wanting an independent fair market value evaluation",
      "Individuals requiring asset valuation certificates for visa/immigration proof",
      "Families and legal heirs evaluating property distribution, probate, or capital gains tax records"
    ],
    whatWeHelpWith: [
      {
        title: "Step 1: Purpose Identification & Document Check",
        desc: "Clarifying the specific purpose (bank, tax, sale, record) and outlining the exact title documents, sanctioned plans, and tax receipts required."
      },
      {
        title: "Step 2: Physical Site & Building Inspection",
        desc: "On-site verification of plot boundaries, road width, age of structure, construction quality, specifications, and physical condition."
      },
      {
        title: "Step 3: Comparative & Depreciated Cost Assessment",
        desc: "Applying land guideline rates, prevailing market trends, and CPWD/PWD replacement cost depreciation principles."
      },
      {
        title: "Step 4: Comprehensive Valuation Report",
        desc: "Clear documentation summarizing land value, building replacement value, physical depreciation, and final assessed fair market value."
      }
    ],
    whatToPrepare: [
      "Property Sale Deed / Title deed copy",
      "Khata certificate & latest Khata extract (A Khata / e-Khata)",
      "Latest property tax paid receipts",
      "Approved building plan / Sanction drawing (if building is constructed)",
      "Encumbrance Certificate (EC) for the relevant period"
    ],
    scopeInclusions: [
      "Document checklist review and preliminary enquiry screening",
      "Physical site inspection and dimensional verification in Bengaluru",
      "Fair market value and realizable value calculation breakdown",
      "Professional valuation documentation signed and sealed per applicable scope"
    ],
    scopeExclusions: [
      "Guaranteed loan sanction (loan approval is the sole discretion of the lending financial institution)",
      "Title dispute litigation legal opinions (handled by property advocates)"
    ],
    disclaimer: "A property valuation does not guarantee loan approval or bank sanction. The final valuation report depends on verified property documents, physical inspection findings, and applicable professional and statutory standards.",
    relatedServiceSlugs: ["house-construction-bangalore", "commercial-construction-bangalore", "civil-construction-bangalore"],
    faqs: [
      {
        question: "How long does a property valuation process take in Bangalore?",
        answer: "Once complete documents are shared and site inspection is completed, the structured valuation assessment report is typically prepared within 2 to 4 working days."
      },
      {
        question: "What is the difference between Guideline Value and Fair Market Value?",
        answer: "Guideline Value (Sub-Registrar rate) is the minimum government benchmark value for property registration and stamp duty in Karnataka. Fair Market Value is the realistic price a willing buyer would pay a willing seller in the open market based on locality demand, road width, and construction specifications."
      },
      {
        question: "Does a valuation report guarantee my bank loan approval?",
        answer: "No. The valuation report assesses the physical asset's collateral value. Final loan approval depends on the lender's credit appraisal, applicant income eligibility, and legal title clearance."
      }
    ]
  },
  {
    id: "business-valuation",
    slug: "business-valuation-bangalore",
    title: "Business Valuation",
    category: "Assess",
    h1: "Certified business, commercial asset, and enterprise valuation.",
    primaryKeyword: "business valuation in Bangalore",
    metaTitle: "Business Valuation Services Bangalore | Commercial Enterprise Valuation | My Space",
    metaDescription: "Comprehensive business asset valuation, commercial plant/machinery appraisal, and enterprise net-worth certification in Bangalore by registered valuers.",
    tagline: "Enterprise Worth, Plant & Machinery Appraisal & Financial Due Diligence",
    heroImage: "/images/company/showroom-2.jpeg",
    galleryImages: [
      {
        url: "/images/company/showroom-2.jpeg",
        title: "Commercial Plant & Facility Appraisal",
        caption: "Tangible commercial asset inspection, building valuation, and leasehold appraisals."
      },
      {
        url: "/images/company/Car_Showroom_View_2.jpeg",
        title: "Enterprise Machinery & Equipment",
        caption: "Depreciated replacement value of plant equipment and operational infrastructure."
      },
      {
        url: "/images/company/real-project-65.jpeg",
        title: "Asset & Financial Due Diligence",
        caption: "Discounted cash flow modeling and net tangible asset calculations."
      },
      {
        url: "/images/company/showroom-5.jpeg",
        title: "IBBI & Wealth Tax Valuation Dossier",
        caption: "Certified statutory documentation for business acquisitions, audits, and bank credit."
      }
    ],
    eyebrow: "BUSINESS & COMMERCIAL ASSET VALUATION",
    primaryCta: "Request Business Valuation",
    summary: "Whether evaluating an enterprise for merger/acquisition, partnership dissolution, bank credit facilities, or financial audit compliance, My Space provides rigorous asset-based and discounted cash flow business valuation dossiers recognized by financial institutions.",
    whoIsThisFor: [
      "Companies seeking credit sanction against commercial business assets",
      "Business owners preparing for partnership buyouts or equity restructuring",
      "Enterprises requiring plant and machinery asset registers with CPWD depreciation",
      "Firms conducting balance sheet compliance audits and statutory reporting"
    ],
    whatWeHelpWith: [
      {
        title: "Tangible Fixed Asset Valuation",
        desc: "Physical inspection and depreciated replacement value of commercial buildings, plant setups, and fixtures."
      },
      {
        title: "Statutory Valuation Dossier",
        desc: "Certified valuation documentation stamped by IBBI / Wealth Tax Act registered valuers."
      }
    ],
    whatToPrepare: [
      "Financial statements and audited balance sheets for past 3 years",
      "Fixed asset register and physical plant equipment list",
      "Specific statutory purpose of the valuation"
    ],
    scopeInclusions: [
      "Site physical inspection of commercial/industrial assets",
      "Comprehensive valuation report compliant with IBBI standards"
    ],
    scopeExclusions: [
      "Tax filing and audit certifications (undertaken by Chartered Accountants)"
    ],
    relatedServiceSlugs: ["property-valuation-bangalore", "land-valuation-bangalore", "commercial-construction-bangalore"],
    faqs: [
      {
        question: "Are your valuation reports accepted by nationalized banks?",
        answer: "Yes, our reports are prepared by registered valuers under the Wealth Tax Act and IBBI, accepted by all major scheduled commercial banks and NBFCs."
      }
    ]
  }
];
