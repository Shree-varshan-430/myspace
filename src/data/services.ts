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
    heroImage: "/images/company/showroom-1.jpeg",
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
  }
];
