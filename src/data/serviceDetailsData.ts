export interface ServiceTypology {
  title: string;
  desc: string;
  iconType: 'home' | 'building' | 'layers' | 'grid' | 'compass' | 'shield' | 'hammer' | 'calculator' | 'file';
}

export interface ServiceProcessStage {
  stageNumber: string;
  title: string;
  desc: string;
}

export interface ServiceScopeItem {
  title: string;
  desc: string;
}

export interface ServiceCostFactor {
  number: string;
  title: string;
  desc: string;
}

export interface ServiceTimelineItem {
  durationBadge: string;
  title: string;
  desc: string;
}

export interface DetailedServiceData {
  typologiesTitle: string;
  typologiesSubtitle: string;
  typologies: ServiceTypology[];

  processTitle: string;
  processSubtitle: string;
  processStages: ServiceProcessStage[];

  scopeTitle: string;
  scopeSubtitle: string;
  detailedScope: ServiceScopeItem[];

  costTitle: string;
  costSubtitle: string;
  costDrivers: ServiceCostFactor[];

  timelineTitle: string;
  timelineSubtitle: string;
  timelineSchedule: ServiceTimelineItem[];
}

export const serviceDetailsLookup: Record<string, DetailedServiceData> = {
  'house-construction-bangalore': {
    typologiesTitle: "What We Build",
    typologiesSubtitle: "Custom residential building typologies tailored to your plot and lifestyle:",
    typologies: [
      {
        title: "Independent Houses",
        desc: "Custom standalone homes planned for privacy, ground-floor parking, pooja rooms, and future vertical expansion.",
        iconType: "home"
      },
      {
        title: "Villas",
        desc: "Spacious luxury villas with generous setbacks, landscaped gardens, modern elevations, and multi-car parking.",
        iconType: "building"
      },
      {
        title: "Duplex Homes",
        desc: "Connected multi-level duplex layouts with designer staircases, double-height living, and private suites.",
        iconType: "layers"
      },
      {
        title: "G+1 / G+2 / G+3 Homes",
        desc: "Multi-floor residential homes optimized for self-use or rental income with independent sub-meters and staircases.",
        iconType: "grid"
      }
    ],
    processTitle: "Our House Construction Process",
    processSubtitle: "Disciplined 10-stage engineering workflow from soil test to handover:",
    processStages: [
      { stageNumber: "01", title: "Planning & Soil Testing", desc: "Site inspection, boundary survey, soil strata review, and budget consultation." },
      { stageNumber: "02", title: "Floor Plan Drafting", desc: "Custom 2D floor plans with room dimensions, Vastu alignment, and setback compliance." },
      { stageNumber: "03", title: "Structural Engineering", desc: "Column grids, beam dimensions, footing calculations, and realistic 3D models." },
      { stageNumber: "04", title: "Foundation & Sump", desc: "Excavation, column footings, RCC plinth beams, anti-termite treatment, and water sump." },
      { stageNumber: "05", title: "RCC Frame & Slabs", desc: "RCC columns, beam shuttering, Fe550D steel binding, and concrete slabs with 21-day curing." },
      { stageNumber: "06", title: "Masonry & Brickwork", desc: "Solid concrete blocks or red bricks for 6\" outer and 4\" inner walls with door frames." },
      { stageNumber: "07", title: "Plumbing & Electrical", desc: "Concealed CPVC/PVC plumbing, sewage drainage lines, and electrical conduits." },
      { stageNumber: "08", title: "Plastering & Flooring", desc: "Cement plastering, multi-layer waterproofing, and vitrified tile or granite flooring." },
      { stageNumber: "09", title: "Painting & Fixtures", desc: "Wall putty, primer, and premium 2-coat weather-shield emulsion paints." },
      { stageNumber: "10", title: "Snag Check & Handover", desc: "Deep cleaning, snag clearance, line testing, and formal key handover with warranty." }
    ],
    scopeTitle: "What Is Included In Our Home Construction Service?",
    scopeSubtitle: "Turnkey coverage from bare land to a move-in ready residence:",
    detailedScope: [
      { title: "Architectural & Structural Drawings", desc: "2D floor plans, 3D front elevations, column/beam details, and MEP layout drawings." },
      { title: "Civil Construction & Structural Build", desc: "Excavation, foundation footings, RCC frame casting, masonry, and double-coat plastering." },
      { title: "Underground Sump & Overhead Tank", desc: "Reinforced concrete underground storage sump plus overhead water tank." },
      { title: "Electrical & Plumbing Networks", desc: "Concealed ISI copper wiring, modular switches, CPVC water pipes, and drainage lines." },
      { title: "Flooring & Wall Tiling", desc: "Vitrified tile or granite flooring, anti-skid bathroom tiles, and granite kitchen counter." },
      { title: "Doors, Windows & Painting", desc: "Teakwood main door frame, flush internal doors, UPVC windows, and Asian Paints emulsion." }
    ],
    costTitle: "House Construction Cost in Bangalore",
    costSubtitle: "Key parameters that influence your residential construction budget:",
    costDrivers: [
      { number: "1", title: "Soil Condition & Foundation Depth", desc: "Standard isolated footings for hard rock vs deeper excavation and raft foundations for loose soil." },
      { number: "2", title: "Number of Floors & Built-Up Area", desc: "Additional floors increase column sizing, steel tonnage, and lift/headroom requirements." },
      { number: "3", title: "Structural & Finishing Materials", desc: "Choice between solid blocks vs wire-cut bricks, and vitrified tiles vs imported marble." },
      { number: "4", title: "Plot Location & Site Accessibility", desc: "Road width affects transit mixer trucks, material unloading, and logistics." },
      { number: "5", title: "Elevation & Architectural Features", desc: "Glass facades, exterior louvers, and cantilever balconies add custom aesthetic value." }
    ],
    timelineTitle: "How Long Does It Take to Build a House?",
    timelineSubtitle: "Typical timeline for an independent house (G+1 or G+2) is 10 to 12 months:",
    timelineSchedule: [
      { durationBadge: "MONTHS 1–2", title: "Planning & Approvals", desc: "Soil testing, architectural plans, 3D elevations, and structural drawings." },
      { durationBadge: "MONTHS 2–3", title: "Foundation & Sump", desc: "Site excavation, column footings, plinth beam casting, and underground water sump." },
      { durationBadge: "MONTHS 4–6", title: "RCC Frame & Slabs", desc: "RCC column casting, beam shuttering, steel binding, and slabs with 21-day water curing." },
      { durationBadge: "MONTHS 6–8", title: "Masonry & MEP Lines", desc: "Solid block masonry, door frame fixing, concealed electrical and plumbing conduits." },
      { durationBadge: "MONTHS 9–10", title: "Waterproofing & Finishes", desc: "Terrace waterproofing, vitrified tile/granite flooring, and bathroom wall tiling." },
      { durationBadge: "MONTHS 11–12", title: "Painting & Handover", desc: "Putty, primer, premium emulsion painting, fixture testing, snag clearance, and handover." }
    ]
  },

  'commercial-construction-bangalore': {
    typologiesTitle: "Commercial Building Typologies",
    typologiesSubtitle: "Engineered for maximum usable floor area, heavy footfall, and high rental yields across Bengaluru commercial hubs:",
    typologies: [
      { title: "Corporate Offices & IT Parks", desc: "Open floor plate layouts with dedicated server rooms, VRV HVAC zones, DG backup integration, and acoustic partitions.", iconType: "building" },
      { title: "Retail Showrooms & Plazas", desc: "High-visibility street-facing frontage, structural glass elevations, heavy-traffic flooring, and dedicated customer parking.", iconType: "grid" },
      { title: "Healthcare & Diagnostic Clinics", desc: "Specialized clinical layouts with radiation shielding conduits, sterile air flow paths, and patient accessibility ramps.", iconType: "shield" },
      { title: "Commercial Mixed-Use Complexes", desc: "Multi-tier structures accommodating ground-floor retail and upper-floor corporate office suites with separate access cores.", iconType: "layers" }
    ],
    processTitle: "Commercial Construction Process",
    processSubtitle: "Critical-path project management ensuring phased delivery and zero operational downtime:",
    processStages: [
      { stageNumber: "01", title: "Zoning & FAR Feasibility", desc: "Floor Area Ratio optimization, municipal setback review, and traffic circulation planning." },
      { stageNumber: "02", title: "Heavy Structural Design", desc: "IS 875 commercial live load engineering, column-free grids, and post-tensioned slab options." },
      { stageNumber: "03", title: "Integrated MEP Schematics", desc: "3-Phase electrical distribution, centralized HVAC ducting, and fire sprinkler network modeling." },
      { stageNumber: "04", title: "Basement & Sub-Structure", desc: "Deep basement retention walls, dewatering systems, sump tanks, and commercial vehicle parking bays." },
      { stageNumber: "05", title: "Superstructure RCC Casting", desc: "Rapid casting cycles with high-grade ready-mix concrete and certified commercial formwork systems." },
      { stageNumber: "06", title: "Façade & Structural Glazing", desc: "High-performance acoustic double-glazed curtain walls, ACP cladding, and weatherproof entrance canopies." },
      { stageNumber: "07", title: "Fire Safety & Lift Installation", desc: "Fire stairwell pressurization, fire hydrant piping, and commercial passenger/service elevator setups." },
      { stageNumber: "08", title: "Handover for Fit-Outs", desc: "Warm shell or turnkey interior fit-out completion with compliance test certificates." }
    ],
    scopeTitle: "What Is Included In Commercial Construction?",
    scopeSubtitle: "Turnkey structural and MEP build packages designed for business tenants and property investors:",
    detailedScope: [
      { title: "Commercial Grade RCC Superstructure", desc: "Heavy column grids engineered for commercial live loads, vibration damping, and long spans." },
      { title: "Complete Façade & Curtain Glazing", desc: "DGU structural glazing, ACP paneling, entrance canopies, and architectural exterior lighting." },
      { title: "High-Capacity MEP Infrastructure", desc: "Dedicated electrical transformers, busduct risers, earthing grids, and main distribution panels." },
      { title: "Fire Detection & Suppression Systems", desc: "Fire hydrant rings, smoke detection arrays, emergency sprinkler grids, and fire-rated escape doors." },
      { title: "Heavy-Traffic Commercial Finishes", desc: "High-gloss vitrified tiles, granite lift lobbies, anti-skid stair treads, and durable exterior paving." },
      { title: "Basement Parking & Drainage", desc: "Epoxy/VDF basement flooring, ramp heating/grooving, stormwater sump pumps, and oil separators." }
    ],
    costTitle: "Commercial Construction Cost Factors",
    costSubtitle: "Key parameters that influence commercial development expenditure in Bangalore:",
    costDrivers: [
      { number: "1", title: "Column Grid Span & Live Load Capacity", desc: "Longer column-free spans require heavier PT slabs and steel tonnage compared to standard residential framing." },
      { number: "2", title: "Façade Glazing & Acoustic Specifications", desc: "Energy-efficient low-E glass and acoustic double glazing protect against traffic noise and reduce air conditioning loads." },
      { number: "3", title: "Connected Electrical Load & DG Backup", desc: "High-kVA industrial power lines, transformer installations, and 100% DG redundancy represent significant capital investment." },
      { number: "4", title: "Fire Compliance & Lift Capacity", desc: "High-rise commercial regulations mandate dedicated fire tanks, booster pumps, and multi-passenger high-speed elevators." },
      { number: "5", title: "Basement Depth & Retention Works", desc: "Multi-level basement parking in urban Bangalore plots requires contiguous piling and specialized soil anchoring." }
    ],
    timelineTitle: "Commercial Project Timeline",
    timelineSubtitle: "Structured critical-path delivery timeline for a typical commercial complex:",
    timelineSchedule: [
      { durationBadge: "MONTHS 1–3", title: "Planning, Sanctions & Soil Works", desc: "Architectural drawings, structural engineering, statutory municipal sanctions, and site excavation." },
      { durationBadge: "MONTHS 3–6", title: "Basement & Sub-Structure", desc: "Basement retaining walls, deep footings, sump casting, and ground floor transfer slab." },
      { durationBadge: "MONTHS 6–10", title: "Multi-Floor RCC Superstructure", desc: "Floor-by-floor column and slab casting with accelerated curing and formwork cycling." },
      { durationBadge: "MONTHS 10–13", title: "Façade Glazing & MEP Rough-in", desc: "Structural glass curtain walls, heavy electrical risers, plumbing shafts, and HVAC ducting." },
      { durationBadge: "MONTHS 13–15", title: "Lobbies, Elevators & Handover", desc: "Granite lobby finishes, passenger lift commissioning, fire safety testing, and tenant handover." }
    ]
  },

  'industrial-construction-bangalore': {
    typologiesTitle: "Industrial Infrastructure Typologies",
    typologiesSubtitle: "Heavy-duty industrial facilities built for high operational loads and machinery longevity:",
    typologies: [
      { title: "Pre-Engineered Buildings (PEB)", desc: "High-clearance steel portal frames, insulated sandwich panel roofing, and ridge ventilators for manufacturing.", iconType: "hammer" },
      { title: "Logistics & Warehouses", desc: "Automated distribution centers with high-bay clearance, dock levelers, and heavy truck loading bays.", iconType: "building" },
      { title: "Heavy Manufacturing Plants", desc: "Reinforced civil structures with overhead crane girders, vibration-damped machine foundations, and ETP pits.", iconType: "layers" },
      { title: "Industrial Sheds & Workshops", desc: "Cost-effective, expandable steel truss sheds with heavy VDF industrial flooring and secure compound perimeters.", iconType: "grid" }
    ],
    processTitle: "Industrial Construction Process",
    processSubtitle: "Precision execution tailored to industrial machinery, loading cycles, and safety standards:",
    processStages: [
      { stageNumber: "01", title: "Industrial Layout & Crane Clearance", desc: "Hook height calculations, machine placement zoning, and heavy forklift turning radii." },
      { stageNumber: "02", title: "Geotechnical & Soil Bearing Audit", desc: "Soil load testing to determine deep machine pad requirements and ground compaction standards." },
      { stageNumber: "03", title: "Heavy Civil Foundations", desc: "Isolated and raft foundations engineered to absorb dynamic equipment vibrations." },
      { stageNumber: "04", title: "PEB Steel Erection", desc: "Precision factory-fabricated steel portal frames, rafters, purlins, and crane runways." },
      { stageNumber: "05", title: "Industrial VDF Tremix Flooring", desc: "Laser-leveled vacuum dewatered concrete flooring with metallic hardeners for heavy wheel loads." },
      { stageNumber: "06", title: "Insulated Sheeting & Utilities", desc: "Galvalume roofing, skylight polycarbonate panels, industrial high-bay lighting, and fire loops." },
      { stageNumber: "07", title: "Loading Docks & Yards", desc: "Heavy-duty concrete aprons, container truck maneuver yards, and secure security gates." },
      { stageNumber: "08", title: "Inspection & Final Handover", desc: "Load testing, structural stability certification, and factory handover." }
    ],
    scopeTitle: "What Is Included In Industrial Construction?",
    scopeSubtitle: "Turnkey industrial civil, structural steel, and flooring infrastructure:",
    detailedScope: [
      { title: "Custom PEB Structural Steelwork", desc: "Engineered portal frames, crane girders, rafters, and thermal insulated roof sheeting." },
      { title: "Vibration-Damped Machine Pads", desc: "Specialized concrete foundations for heavy presses, CNC machines, and industrial generators." },
      { title: "Laser-Leveled VDF Concrete Flooring", desc: "Vacuum Dewatered Tremix flooring with ironite floor hardener (5 to 10 MT/sq.m load capacity)." },
      { title: "Heavy Utility & Drainage Networks", desc: "Dedicated transformer yards, industrial storm drains, ETP/STP civil works, and water sumps." },
      { title: "Loading Bays & Truck Docks", desc: "Integrated dock leveler pits, industrial rolling shutters, and heavy vehicle approach ramps." },
      { title: "Perimeter Security & Infrastructure", desc: "High compound boundary walls, security cabin, staff amenities, and street lighting." }
    ],
    costTitle: "Industrial Construction Cost Factors",
    costSubtitle: "Key parameters influencing industrial building estimates in Bengaluru industrial corridors:",
    costDrivers: [
      { number: "1", title: "Clear Height & Crane Capacity", desc: "Heights exceeding 9 meters and crane capacities (5T, 10T, 20T) increase steel column and rafter sizing." },
      { number: "2", title: "Floor Load Bearing Requirement", desc: "Heavy machinery and multi-tier racking demand thicker reinforced slabs (200mm–300mm) and metallic hardeners." },
      { number: "3", title: "Roof Insulation & Ventilation", desc: "Thermal glasswool/rockwool insulated sandwich panels maintain controlled factory temperatures." },
      { number: "4", title: "Machinery Foundation Complexity", desc: "Deep isolated equipment pits and vibration dampening require specialized civil excavation." },
      { number: "5", title: "Suburban Industrial Logistics", desc: "Proximity to industrial corridors (Peenya, Bommasandra, Hoskote, Bidadi) affects heavy material logistics." }
    ],
    timelineTitle: "Industrial Project Schedule",
    timelineSubtitle: "Rapid PEB fabrication and staged on-site civil delivery timeline:",
    timelineSchedule: [
      { durationBadge: "MONTH 1", title: "Design & Steel Fabrication", desc: "Structural PEB modeling, factory steel fabrication, and site earthwork excavation." },
      { durationBadge: "MONTHS 2–3", title: "Civil Foundations & Pedestals", desc: "Reinforced concrete footing casting, anchor bolt fixing, and machine foundation casting." },
      { durationBadge: "MONTHS 3–4", title: "PEB Steel Frame Erection", desc: "Crane erection of main portal frames, rafters, purlins, and wall girts." },
      { durationBadge: "MONTHS 4–5", title: "VDF Tremix Flooring & Sheeting", desc: "Laser leveling, vacuum dewatering concrete flooring, and insulated roof panel installation." },
      { durationBadge: "MONTH 6", title: "Utilities & Handover", desc: "Industrial electrical wiring, fire sprinkler network, loading bays, and formal project handover." }
    ]
  },

  'interior-design-bangalore': {
    typologiesTitle: "Interior Design & Fit-Out Typologies",
    typologiesSubtitle: "Bespoke interior architecture planned for ergonomic daily living and refined aesthetics:",
    typologies: [
      { title: "Turnkey Residential Interiors", desc: "Full-home interior design for independent villas and apartments with modular joinery, false ceilings, and lighting.", iconType: "home" },
      { title: "Modular Kitchens & Pantries", desc: "Ergonomic work triangles with boiling waterproof (BWP) ply, quartz countertops, and German soft-close fittings.", iconType: "layers" },
      { title: "Custom Wardrobes & Joinery", desc: "Floor-to-ceiling wardrobes with integrated profile lighting, concealed dressing vanities, and study consoles.", iconType: "grid" },
      { title: "Commercial & Office Fit-Outs", desc: "Reception desks, acoustic conference rooms, collaborative workstations, and executive cabins.", iconType: "building" }
    ],
    processTitle: "Our Interior Design Workflow",
    processSubtitle: "From initial concept sketches to factory pressing and final snag-free installation:",
    processStages: [
      { stageNumber: "01", title: "Lifestyle & Space Assessment", desc: "Detailed room measurement, family storage requirement mapping, and budget alignment." },
      { stageNumber: "02", title: "2D Spatial Layouts", desc: "Circulation corridors, furniture positioning, and appliance power point mapping." },
      { stageNumber: "03", title: "3D Photorealistic Views", desc: "High-definition renders exploring colors, textures, veneers, laminates, and lighting." },
      { stageNumber: "04", title: "Material & Hardware Selection", desc: "Selecting IS 710 marine ply, branded hardware (Hafele/Blum), and quartz stones." },
      { stageNumber: "05", title: "Factory Machine Fabrication", desc: "Precision CNC cutting and edge-banding in automated manufacturing facilities." },
      { stageNumber: "06", title: "On-Site Civil & Electrical Prep", desc: "False ceiling gypsum framing, electrical conduit shifts, and wall paint primer." },
      { stageNumber: "07", title: "Modular Installation & Fitment", desc: "On-site assembly, stone countertop installation, and hardware calibration." },
      { stageNumber: "08", title: "Deep Cleaning & Handover", desc: "Snag clearance, soft-close tuning, protective wrap removal, and client walkthrough." }
    ],
    scopeTitle: "What Is Included In Interior Design?",
    scopeSubtitle: "Comprehensive material, modular woodwork, lighting, and finish scope:",
    detailedScope: [
      { title: "Factory-Pressed Modular Woodwork", desc: "IS 710 BWP plywood carcasses with 1mm anti-scratch edge-banded laminates or acrylics." },
      { title: "Certified Hardware & Channels", desc: "Soft-close hinges, heavy-duty tandem drawer boxes, and lift-up mechanisms (Hafele, Hettich, Blum)." },
      { title: "False Ceiling & Architectural Lighting", desc: "Saint-Gobain gypsum boards with concealed warm LED strip channels and magnetic track lights." },
      { title: "Custom Media & Storage Units", desc: "TV consoles with hidden cable channels, fluted panel dividers, and foyer shoe credenzas." },
      { title: "Kitchen Countertops & Sinks", desc: "Precision stone cutting for quartz/granite countertops with undermount sink fitments." },
      { title: "Premium Surface Paints & Polishes", desc: "Royale luxury emulsion wall paints and PU/Melamine wood polish on veneer surfaces." }
    ],
    costTitle: "Interior Design Cost Drivers in Bangalore",
    costSubtitle: "Key parameters that define your interior budget and material choices:",
    costDrivers: [
      { number: "1", title: "Core Woodwork Material (BWP vs Commercial)", desc: "Boiling Waterproof (BWP IS 710) marine ply in wet zones costs more than commercial ply but prevents moisture swelling." },
      { number: "2", title: "Surface Finishes (Laminate vs Acrylic vs Veneer)", desc: "Matte laminates offer high value, high-gloss acrylics provide mirror finish, and natural veneers require PU polish." },
      { number: "3", title: "Hardware Mechanism Tier", desc: "Standard soft-close channels vs premium push-to-open and electronic lift systems impact cost per module." },
      { number: "4", title: "Ceiling & Lighting Complexity", desc: "Peripheral cove ceilings vs full-room false ceilings with magnetic track lighting channels." },
      { number: "5", title: "Civil & Electrical Modifications", desc: "Shifting plumbing lines, wall modifications, and additional switchboard conduits." }
    ],
    timelineTitle: "Interior Execution Timeline",
    timelineSubtitle: "Typical project milestones from 3D approval to move-in readiness:",
    timelineSchedule: [
      { durationBadge: "WEEKS 1–2", title: "Design & 3D Visualization", desc: "Detailed room measurements, 3D render iterations, and final BOQ sign-off." },
      { durationBadge: "WEEKS 3–4", title: "Civil & Ceiling Works", desc: "Electrical conduit routing, switch box additions, and false ceiling gypsum installation." },
      { durationBadge: "WEEKS 3–5", title: "Factory Machine Fabrication", desc: "CNC precision board cutting, edge banding, and modular carcass preparation in factory." },
      { durationBadge: "WEEKS 5–7", title: "On-Site Assembly & Fitting", desc: "Modular carcass installation, quartz counter fitting, and wardrobe door hanging." },
      { durationBadge: "WEEK 8", title: "Painting, Cleaning & Handover", desc: "Final coat of Royale paint, profile light testing, deep cleaning, and key handover." }
    ]
  },

  '2d-design-bangalore': {
    typologiesTitle: "2D Architectural Design Typologies",
    typologiesSubtitle: "Precision technical drafting and regulatory blueprints for seamless site execution:",
    typologies: [
      { title: "Architectural Floor Layouts", desc: "Dimensioned room plans, circulation corridors, door/window schedules, and Vastu orientation.", iconType: "compass" },
      { title: "Municipal Sanction Drawings", desc: "BBMP/BDA compliant sanction plans conforming to Floor Area Ratio (FAR) and setback rules.", iconType: "file" },
      { title: "Working Civil Blueprints", desc: "Centerline column grids, wall sectional elevations, and staircase geometry for site contractors.", iconType: "hammer" },
      { title: "MEP Conduit Schematics", desc: "Switchboard locations, plumbing drops, sanitary slopes, and AC core-cut markings.", iconType: "grid" }
    ],
    processTitle: "2D Architectural Design Process",
    processSubtitle: "A structured process to eliminate spatial errors before breaking ground:",
    processStages: [
      { stageNumber: "01", title: "Plot Survey & Orientation", desc: "Checking boundary dimensions, road width, cardinal orientation, and adjacent plot setbacks." },
      { stageNumber: "02", title: "Spatial Requirement Mapping", desc: "Listing family or commercial room requirements, parking needs, and privacy zoning." },
      { stageNumber: "03", title: "Conceptual Floor Plans", desc: "Exploring multiple layout options to optimize room proportions and natural daylight." },
      { stageNumber: "04", title: "Bylaw & Setback Verification", desc: "Validating setbacks, ground coverage, and FAR against local Bengaluru municipal rules." },
      { stageNumber: "05", title: "Detailed Working Drawings", desc: "Dimensioning every wall, door, window opening, and staircase riser/tread." },
      { stageNumber: "06", title: "MEP & Conduit Integration", desc: "Overlaying plumbing lines, wastewater conduits, and electrical switchboard placements." },
      { stageNumber: "07", title: "Final Blueprint Delivery", desc: "High-resolution PDF sets and laminated site working sheets for civil contractors." }
    ],
    scopeTitle: "What Is Included In 2D Architectural Design?",
    scopeSubtitle: "Complete technical drawing sets ready for construction and approvals:",
    detailedScope: [
      { title: "Dimensioned Floor Plans (All Levels)", desc: "Clear room-by-room internal dimensions, wall thicknesses, and hallway widths." },
      { title: "Column Centerline Grid Layout", desc: "Accurate excavation grid coordinates for site civil masons and engineers." },
      { title: "Sectional & Cross-Section Drawings", desc: "Floor-to-floor heights, plinth levels, lintel heights, and staircase sectional geometry." },
      { title: "Door & Window Schedule", desc: "Opening dimensions, sill heights, recommended shutter types, and hardware specifications." },
      { title: "Electrical & Plumbing Schematics", desc: "Concealed conduit routing, distribution board positions, and drainage drop shafts." },
      { title: "Municipal Plan Sanction Set", desc: "Standard format drawings formatted for BBMP/local urban authority submissions." }
    ],
    costTitle: "2D Design Cost Factors",
    costSubtitle: "Parameters that determine architectural drafting and sanction drawing fees:",
    costDrivers: [
      { number: "1", title: "Total Built-Up Area (BUA)", desc: "Larger multi-storey structures require more floor levels, cross-sections, and detailed drawing sheets." },
      { number: "2", title: "Scope Inclusions (Architectural vs Full MEP)", desc: "Combining architectural layouts with detailed electrical and plumbing conduit drawings." },
      { number: "3", title: "Municipal Sanction Formatting", desc: "Custom municipal sanction drawing sets formatted strictly to local town planning bylaws." },
      { number: "4", title: "Site Constraints & Irregular Plots", desc: "Triangular or skewed boundary sites require customized geometrical calculations." }
    ],
    timelineTitle: "2D Plan Delivery Timeline",
    timelineSubtitle: "Fast, accurate turnaround from initial consultation to final drawing handover:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Site Survey & Requirement Brief", desc: "Plot verification, setback calculation, and family requirement mapping." },
      { durationBadge: "DAYS 3–5", title: "Concept Layout Presentation", desc: "Initial floor plan layout options presented with room dimensions and Vastu notes." },
      { durationBadge: "DAYS 6–7", title: "Revisions & Refinement", desc: "Fine-tuning room sizes, door swings, and window placements based on feedback." },
      { durationBadge: "DAYS 8–10", title: "Working Drawings & MEP Delivery", desc: "Final dimensioned sheets, column centerline grid, door/window schedules, and PDF package." }
    ]
  },

  '3d-design-bangalore': {
    typologiesTitle: "3D Architectural Visualization Typologies",
    typologiesSubtitle: "Photorealistic 3D elevations and spatial models to see your project before building:",
    typologies: [
      { title: "Contemporary Exterior Elevations", desc: "Modern architectural façades featuring terracotta louvers, glass balustrades, and texture finishes.", iconType: "building" },
      { title: "Daylight & Night Lighting Studies", desc: "Realistic solar shadow casting and evening façade accent illumination modeling.", iconType: "compass" },
      { title: "Furnished 3D Isometric Plans", desc: "Bird's-eye furnished perspective showing room proportions and walkway flow.", iconType: "grid" },
      { title: "Virtual Walkthrough Animations", desc: "Cinematic 3D video tours through the exterior and interior spaces for complete spatial clarity.", iconType: "layers" }
    ],
    processTitle: "3D Design Workflow",
    processSubtitle: "Transforming 2D architectural lines into vivid photorealistic 3D visual studies:",
    processStages: [
      { stageNumber: "01", title: "2D CAD Import & Base Modeling", desc: "Importing approved 2D floor plans and building the 3D massing geometry." },
      { stageNumber: "02", title: "Architectural Styling", desc: "Adding cantilever balconies, roof parapets, window box projections, and pergola features." },
      { stageNumber: "03", title: "Material & Texture Mapping", desc: "Applying realistic Bangalore materials: terracotta tiles, exposed concrete, HPL, and stone." },
      { stageNumber: "04", title: "Lighting & Solar Simulation", desc: "Setting realistic sunlight angles based on cardinal orientation and evening wall washers." },
      { stageNumber: "05", title: "High-Resolution Rendering", desc: "Ultra HD perspective rendering with photorealistic reflections and landscape elements." },
      { stageNumber: "06", title: "Client Review & Refinement", desc: "Fine-tuning color palettes, texture combinations, and railing designs." },
      { stageNumber: "07", title: "Dimensioned Fabrication Sheets", desc: "Translating 3D visual renders into 2D dimensioned callouts for on-site execution." }
    ],
    scopeTitle: "What Is Included In 3D Design?",
    scopeSubtitle: "Complete visualization deliverables for homeowners and builders:",
    detailedScope: [
      { title: "High-Resolution 3D Exterior Views", desc: "Daytime and evening illumination perspectives in ultra high definition." },
      { title: "Material & Color Code Callout Sheet", desc: "Specific paint shades (Asian Paints codes), tile dimensions, and cladding material specifications." },
      { title: "3D Isometric Furnished Views", desc: "Top-down floor-by-floor furnished perspective showing bed, sofa, and kitchen placement." },
      { title: "Façade Detail Dimensions", desc: "Dimensioned projection drawings for site masons, fabricators, and glass railing vendors." }
    ],
    costTitle: "3D Visualization Cost Factors",
    costSubtitle: "Parameters influencing 3D elevation and modeling investment:",
    costDrivers: [
      { number: "1", title: "Building Scale & Number of Floors", desc: "Single villa vs multi-storey commercial complex with multiple viewing angles." },
      { number: "2", title: "Façade Detail Complexity", desc: "Intricate CNC jali work, curved surfaces, and multi-texture cladding require more 3D modeling time." },
      { number: "3", title: "Number of Render Angles & Lighting Views", desc: "Front perspective, corner perspective, daytime sunlight view, and evening illumination renders." },
      { number: "4", title: "Virtual Video Walkthrough", desc: "Full cinematic 3D video animation requires dedicated rendering compute." }
    ],
    timelineTitle: "3D Visualization Timeline",
    timelineSubtitle: "Fast, photorealistic turnaround for architectural designs:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "3D Geometry & Massing", desc: "Building 3D structural model from 2D architectural drawings." },
      { durationBadge: "DAYS 3–4", title: "Materials, Textures & Lighting", desc: "Applying realistic finishes, window glass, and sunlight illumination." },
      { durationBadge: "DAYS 5–6", title: "Draft Review & Color Selection", desc: "Presenting concept renders for client color and material refinement." },
      { durationBadge: "DAYS 7–8", title: "Final High-Res Delivery", desc: "Delivering Ultra-HD print-ready renders and execution material callout sheets." }
    ]
  },

  'structural-design-bangalore': {
    typologiesTitle: "Structural Engineering Services",
    typologiesSubtitle: "Certified RCC and steel framework engineering compliant with Indian Standard codes:",
    typologies: [
      { title: "Foundation & Footing Design", desc: "Soil-matched isolated, combined, and raft foundation sizing to prevent differential settlement.", iconType: "hammer" },
      { title: "RCC Frame Detailing", desc: "Column, beam, and slab reinforcement calculations conforming to IS 456:2000.", iconType: "building" },
      { title: "Bar Bending Schedules (BBS)", desc: "Precise rebar cutting and bending schedules to eliminate steel site wastage.", iconType: "file" },
      { title: "Structural Stability Certification", desc: "Engineering verification for additional floor additions and structural load audits.", iconType: "shield" }
    ],
    processTitle: "Structural Engineering Workflow",
    processSubtitle: "Rigorous mathematical load analysis and engineering verification:",
    processStages: [
      { stageNumber: "01", title: "Soil Report & Load Assessment", desc: "Reviewing soil bearing capacity (SBC) and calculating dead, live, and wind loads." },
      { stageNumber: "02", title: "Seismic Analysis (IS 1893)", desc: "Earthquake resistant structural modeling conforming to Bengaluru seismic zone criteria." },
      { stageNumber: "03", title: "Column Grid & Framing Layout", desc: "Optimizing column placements to avoid obstructing architectural room layouts." },
      { stageNumber: "04", title: "Foundation Sizing & Design", desc: "Calculating footing depths, rebar mesh, and plinth beam ties." },
      { stageNumber: "05", title: "Beam & Slab Reinforcement", desc: "Designing steel bar diameters, stirrup spacing, and cantilever reinforcements." },
      { stageNumber: "06", title: "Bar Bending Schedule (BBS)", desc: "Generating exact steel tonnage requirements and bar cutting lengths." },
      { stageNumber: "07", title: "Chartered Engineer Certification", desc: "Signing and sealing structural drawings for municipal and banking approvals." }
    ],
    scopeTitle: "What Is Included In Structural Design?",
    scopeSubtitle: "Complete certified structural drawing package for contractors and sanctions:",
    detailedScope: [
      { title: "Foundation & Footing Layout", desc: "Dimensioned footing sizes, reinforcement mesh details, and excavation depths." },
      { title: "Column Schedule & Tie Details", desc: "Column rebar diameters, longitudinal bar counts, and lateral tie spacing." },
      { title: "Plinth & Floor Beam Detailing", desc: "Beam cross-sections, top/bottom reinforcement bars, and shear stirrup spacing." },
      { title: "Slab Reinforcement Layout", desc: "One-way/two-way slab rebar spacing, crank bars, and cover block callouts." },
      { title: "Staircase & Sump Structural Details", desc: "Waist slab reinforcement, water pressure calculations, and cantilever details." },
      { title: "Certified Structural Stability Report", desc: "Official design calculation dossier signed by Registered Structural Engineer." }
    ],
    costTitle: "Structural Design Cost Factors",
    costSubtitle: "Parameters that influence structural engineering calculation fees:",
    costDrivers: [
      { number: "1", title: "Total Built-Up Area & Floor Count", desc: "Higher storeys (G+3, G+4, G+5) require multi-stage wind and seismic load computations." },
      { number: "2", title: "Soil Stratum Complexity", desc: "Challenging clay soils or filled land require specialized raft or pile foundation engineering." },
      { number: "3", title: "Architectural Cantilevers & Long Spans", desc: "Large column-free living halls or deep cantilever balconies require heavier reinforcement design." },
      { number: "4", title: "Physical Site Inspection & Rebar Audit", desc: "Adding on-site civil checks during column rebar tying and slab casting." }
    ],
    timelineTitle: "Structural Design Timeline",
    timelineSubtitle: "Turnaround schedule from architectural drawings to certified structural blueprints:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Architectural Review & Load Input", desc: "Reviewing 2D floor plans, soil test SBC, and structural grid mapping." },
      { durationBadge: "DAYS 3–5", title: "Foundation & Column Modeling", desc: "Mathematical load calculation and footing sizing in structural software." },
      { durationBadge: "DAYS 6–8", title: "Beam, Slab & BBS Detailing", desc: "Drafting reinforcement drawings and bar bending schedules." },
      { durationBadge: "DAYS 9–10", title: "Final Certification & Blueprint Handover", desc: "Registered engineer seal, stability certificate, and contractor drawing set." }
    ]
  },

  'property-valuation-bangalore': {
    typologiesTitle: "Property Valuation Services",
    typologiesSubtitle: "Certified asset appraisal and valuation reports for banks, transactions, and tax records:",
    typologies: [
      { title: "Bank Home Loan & Mortgage Valuation", desc: "Fair market value and realizable value appraisal compliant with nationalized and private bank criteria.", iconType: "calculator" },
      { title: "Capital Gains Tax Valuation (Sec 54)", desc: "Certified indexed cost of acquisition valuation reports for Income Tax department compliance.", iconType: "file" },
      { title: "Visa & Immigration Asset Certificates", desc: "Net-worth and real estate valuation certificates required for international visa processing.", iconType: "shield" },
      { title: "Family Settlement & Probate Records", desc: "Independent property valuation for ancestral partition, wills, and legal court documentation.", iconType: "home" }
    ],
    processTitle: "Our Property Valuation Process",
    processSubtitle: "A disciplined 4-step appraisal methodology conforming to professional valuation standards:",
    processStages: [
      { stageNumber: "01", title: "Document Review & Screening", desc: "Examining Sale Deed, mother deeds, e-Khata extract, tax paid receipts, and sanctioned building plans." },
      { stageNumber: "02", title: "On-Site Physical Inspection", desc: "Inspecting plot boundaries, approach road width, building age, construction quality, and physical condition." },
      { stageNumber: "03", title: "Comparative & Depreciated Cost Method", desc: "Benchmarking guideline values, micro-market sale trends, and CPWD building depreciation." },
      { stageNumber: "04", title: "Certified Valuation Dossier", desc: "Issuing formal stamped valuation documentation signed by Government-Registered Valuer." }
    ],
    scopeTitle: "What Is Included In Property Valuation?",
    scopeSubtitle: "Complete appraisal documentation accepted by financial institutions and courts:",
    detailedScope: [
      { title: "Physical Site Inspection & Measurements", desc: "Verification of site dimensions, built-up area measurements, and boundary road width." },
      { title: "Guideline Value vs Market Value Breakdown", desc: "Itemized calculation showing sub-registrar guidance value and realistic fair market value." },
      { title: "Building Replacement & Depreciation Assessment", desc: "CPWD/PWD replacement cost formula calculation based on construction age and maintenance." },
      { title: "Distress / Realizable Value Estimation", desc: "Bank-standard realizable value computation for loan security margin calculations." },
      { title: "Site Photographs & Boundary Audit", desc: "Geo-tagged photo documentation of the property, approach road, and neighborhood infrastructure." },
      { title: "Registered Valuer Stamp & Certification", desc: "Official valuation certificate compliant with Wealth Tax Act & IBBI regulations." }
    ],
    costTitle: "Property Valuation Cost Drivers",
    costSubtitle: "Parameters influencing professional valuation fees in Bengaluru:",
    costDrivers: [
      { number: "1", title: "Property Type & Asset Scale", desc: "Vacant residential plot vs multi-floor commercial building with multiple tenancy units." },
      { number: "2", title: "Statutory Purpose of Valuation", desc: "Standard banking mortgage appraisal vs complex Capital Gains / Court litigation documentation." },
      { number: "3", title: "Site Inspection Location in Bengaluru", desc: "Central BBMP zones vs outlying rural Bangalore / BMRDA peripheral areas." },
      { number: "4", title: "Turnaround Urgency", desc: "Express 24–48 hour delivery for urgent bank loan closing or visa interview appointments." }
    ],
    timelineTitle: "Valuation Delivery Timeline",
    timelineSubtitle: "Fast, certified turnaround for property valuation reports:",
    timelineSchedule: [
      { durationBadge: "DAY 1", title: "Document Submission & Review", desc: "Sharing title deed copy, e-Khata, tax receipts, and sanctioned drawings via WhatsApp/Email." },
      { durationBadge: "DAYS 1–2", title: "Physical Site Inspection", desc: "Valuer conducts on-site measurement, photography, and structural quality assessment." },
      { durationBadge: "DAYS 2–3", title: "Market Research & Computation", desc: "Guideline rate benchmarking, sales comparison, and CPWD depreciation calculation." },
      { durationBadge: "DAYS 3–4", title: "Report Handover & Stamping", desc: "Delivering signed and sealed original valuation report along with digital PDF copy." }
    ]
  },

  'land-valuation-bangalore': {
    typologiesTitle: "Land & Plot Valuation Services",
    typologiesSubtitle: "Certified land valuation and boundary appraisal across Bengaluru urban and rural districts:",
    typologies: [
      { title: "Residential Layout Plots", desc: "BDA, BMRDA, and DC-converted residential sites in gated layouts and independent revenue lands.", iconType: "grid" },
      { title: "Commercial Frontage Land", desc: "High-value commercial main road plots with road width multipliers and commercial FAR potential.", iconType: "building" },
      { title: "Industrial Estate Land", desc: "KIADB and industrial corridor land plots in Peenya, Bommasandra, Bidadi, and Hoskote.", iconType: "hammer" },
      { title: "Agricultural & Farm Land", desc: "Green belt, agricultural land parcels, and farmhouse plots on Bangalore outskirts.", iconType: "compass" }
    ],
    processTitle: "Our Land Valuation Process",
    processSubtitle: "Thorough revenue document verification and physical boundary inspection:",
    processStages: [
      { stageNumber: "01", title: "Revenue Document Audit", desc: "Checking RTC/Pahani, survey sketch, village map, mother deed chain, and e-Khata status." },
      { stageNumber: "02", title: "Physical Boundary Survey", desc: "Verifying physical boundary markers, approach road width, and electricity/water infrastructure." },
      { stageNumber: "03", title: "Guideline & Transaction Analysis", desc: "Cross-referencing sub-registrar guidance value against recent micro-market registered transactions." },
      { stageNumber: "04", title: "Certified Land Dossier", desc: "Issuing formal stamped land appraisal dossier accepted by national banks and tax authorities." }
    ],
    scopeTitle: "What Is Included In Land Valuation?",
    scopeSubtitle: "Complete land appraisal documentation for loans, sales, and statutory filings:",
    detailedScope: [
      { title: "Plot Boundary & Dimension Verification", desc: "On-site verification of actual plot dimensions against title deed and survey sketch." },
      { title: "Sub-Registrar Guideline Value Benchmark", desc: "Latest government guidance rate assessment factoring in road width additions." },
      { title: "Fair Market Value Computation", desc: "Analysis of prevailing buyer-seller open market rates in the immediate locality." },
      { title: "Encumbrance & Road Accessibility Audit", desc: "Assessment of legal access, municipal roads, and high-tension line clearances." },
      { title: "Geo-Tagged Photo Documentation", desc: "Clear photographic record of plot frontage, access roads, and surroundings." },
      { title: "Government-Registered Valuer Seal", desc: "Signed valuation certificate compliant with Wealth Tax and Banking standards." }
    ],
    costTitle: "Land Valuation Cost Factors",
    costSubtitle: "Parameters determining land appraisal fees in Bengaluru:",
    costDrivers: [
      { number: "1", title: "Plot Area & Scale", desc: "Standard 30x40/40x60 residential plots vs multi-acre land parcels." },
      { number: "2", title: "Zoning & Land Use Category", desc: "Residential vs Commercial vs Industrial KIADB land valuation." },
      { number: "3", title: "Jurisdiction & Location", desc: "BBMP central zone vs BDA layout vs rural BMRDA outskirts." },
      { number: "4", title: "Report Certification Purpose", desc: "Bank loan mortgage vs Section 54 Capital Gains Tax audit." }
    ],
    timelineTitle: "Land Valuation Timeline",
    timelineSubtitle: "Fast, accurate turnaround from inspection to certified report:",
    timelineSchedule: [
      { durationBadge: "DAY 1", title: "Document Review", desc: "Sharing survey sketch, deed, and tax receipt copies." },
      { durationBadge: "DAY 2", title: "On-Site Boundary Inspection", desc: "Physical inspection of plot boundaries and road width." },
      { durationBadge: "DAY 3", title: "Market Rate & Guideline Analysis", desc: "Local sub-registrar and market transaction calculations." },
      { durationBadge: "DAY 4", title: "Report Handover", desc: "Signed & stamped original land valuation dossier delivery." }
    ]
  },

  'business-valuation-bangalore': {
    typologiesTitle: "Business & Asset Valuation Typologies",
    typologiesSubtitle: "Certified commercial asset, plant machinery, and enterprise valuation:",
    typologies: [
      { title: "Plant & Machinery Valuation", desc: "Depreciated replacement value (DRV) of industrial machines, assembly lines, and factory equipment.", iconType: "hammer" },
      { title: "Commercial Fixed Asset Valuation", desc: "Appraisal of corporate office buildings, commercial showrooms, warehouses, and leasehold fixtures.", iconType: "building" },
      { title: "Merger & Acquisition (M&A) Dossiers", desc: "Discounted cash flow (DCF) and net asset value (NAV) valuation for equity transactions and partnership buyouts.", iconType: "calculator" },
      { title: "Statutory Financial Audit Compliance", desc: "Certified fixed asset registers and impairment testing for balance sheet reporting.", iconType: "file" }
    ],
    processTitle: "Business Valuation Process",
    processSubtitle: "Rigorous financial due diligence and physical asset verification methodology:",
    processStages: [
      { stageNumber: "01", title: "Financial & Asset Screening", desc: "Reviewing audited balance sheets, fixed asset registers, and machinery procurement invoices." },
      { stageNumber: "02", title: "Physical Plant & Machinery Inspection", desc: "Verifying physical existence, operational capacity, maintenance logs, and technological obsolescence." },
      { stageNumber: "03", title: "Valuation Methodology Execution", desc: "Applying Asset Approach, Income Approach (DCF), and Market Approach." },
      { stageNumber: "04", title: "Certified IBBI Valuation Report", desc: "Issuing formal stamped business valuation dossier compliant with statutory standards." }
    ],
    scopeTitle: "What Is Included In Business Valuation?",
    scopeSubtitle: "Comprehensive appraisal dossiers recognized by scheduled commercial banks and audit authorities:",
    detailedScope: [
      { title: "Physical Equipment & Asset Audit", desc: "Detailed inspection of plant machinery, commercial vehicles, and office infrastructure." },
      { title: "Depreciated Replacement Cost (DRC) Formula", desc: "CPWD/Income Tax depreciation calculations reflecting actual machine lifespan." },
      { title: "Discounted Cash Flow (DCF) Financial Model", desc: "Projection modeling of future cash flows, WACC, and terminal business value." },
      { title: "Net Tangible Asset Breakdown", desc: "Clear itemized summary of tangible and intangible business asset values." },
      { title: "IBBI / Wealth Tax Registered Valuer Seal", desc: "Official statutory certification recognized across India." }
    ],
    costTitle: "Business Valuation Cost Factors",
    costSubtitle: "Parameters that influence commercial enterprise valuation fees:",
    costDrivers: [
      { number: "1", title: "Scale of Fixed Asset Register", desc: "Number of plant equipment lines and commercial facilities to physically inspect." },
      { number: "2", title: "Valuation Methodology Complexity", desc: "Pure tangible asset valuation vs full DCF financial modeling." },
      { number: "3", title: "Statutory Regulatory Purpose", desc: "Bank credit security vs NCLT / M&A legal compliance." },
      { number: "4", title: "Multi-Location Inspection Needs", desc: "Single Bengaluru plant vs multiple warehouse/branch locations." }
    ],
    timelineTitle: "Business Valuation Schedule",
    timelineSubtitle: "Structured turnaround for commercial and industrial appraisals:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Data Room & Financial Review", desc: "Analyzing balance sheets, P&L, and fixed asset lists." },
      { durationBadge: "DAYS 3–4", title: "On-Site Plant & Machinery Inspection", desc: "Physical equipment verification and maintenance checks." },
      { durationBadge: "DAYS 5–6", title: "Financial Modeling & DRC Calculation", desc: "Executing DCF cash flow and depreciation calculations." },
      { durationBadge: "DAYS 7–8", title: "Final Dossier Delivery & Certification", desc: "Delivering signed and stamped IBBI-compliant valuation dossier." }
    ]
  }
};
