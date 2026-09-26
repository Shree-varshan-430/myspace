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
    typologiesSubtitle: "Tailored residential typologies for your plot:",
    typologies: [
      { title: "Independent Houses", desc: "Private parking, pooja room, and custom layouts.", iconType: "home" },
      { title: "Villas", desc: "Expansive layouts with landscaped sit-outs.", iconType: "building" },
      { title: "Duplex Homes", desc: "Double-height living with private suites.", iconType: "layers" },
      { title: "G+1 to G+4 Homes", desc: "Optimized for self-use and rental income.", iconType: "grid" }
    ],
    processTitle: "Construction Process",
    processSubtitle: "Disciplined engineering workflow from soil to handover:",
    processStages: [
      { stageNumber: "01", title: "Soil & Feasibility", desc: "Site survey and soil testing." },
      { stageNumber: "02", title: "2D Floor Plans", desc: "Vastu-compliant architectural layouts." },
      { stageNumber: "03", title: "Structural Modeling", desc: "IS-compliant RCC column designs." },
      { stageNumber: "04", title: "Foundation & Sump", desc: "Excavation, footings, and RCC sump." },
      { stageNumber: "05", title: "RCC Framing & Slabs", desc: "Columns, beams, and 21-day curing." },
      { stageNumber: "06", title: "Masonry & Plaster", desc: "Solid blocks and double plastering." },
      { stageNumber: "07", title: "MEP Networks", desc: "Concealed electrical and plumbing lines." },
      { stageNumber: "08", title: "Flooring & Finishes", desc: "Vitrified tiles, granite, and painting." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Turnkey delivery from bare plot to move-in readiness:",
    detailedScope: [
      { title: "Design & Structural Drawings", desc: "2D plans, 3D elevations, and structural blueprints." },
      { title: "Civil Construction", desc: "Deep footings, RCC frame, and blockwork." },
      { title: "Waterproofing & Sump", desc: "RCC sump with multi-stage damp proofing." },
      { title: "Electrical & Plumbing", desc: "Concealed ISI copper wiring and CPVC piping." },
      { title: "Flooring & Joinery", desc: "Vitrified tiles, granite stairs, and UPVC windows." },
      { title: "Painting & Handover", desc: "Premium interior/exterior paints and snag clearance." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Key parameters that influence residential budgets:",
    costDrivers: [
      { number: "1", title: "Soil & Foundation Depth", desc: "Isolated footings vs deep raft excavation." },
      { number: "2", title: "Built-Up Area & Storeys", desc: "Higher floors increase structural framing sizing." },
      { number: "3", title: "Finishing Material Tier", desc: "Standard tiles vs imported marble finishes." },
      { number: "4", title: "Plot Location & Access", desc: "Road width impacts material transit logistics." }
    ],
    timelineTitle: "Project Timeline",
    timelineSubtitle: "Average timeline is 10 to 12 months from start to handover:",
    timelineSchedule: [
      { durationBadge: "MONTHS 1–2", title: "Planning & Design", desc: "Soil test, 2D/3D design, and structural plans." },
      { durationBadge: "MONTHS 2–3", title: "Foundation & Sump", desc: "Excavation, footings, and plinth casting." },
      { durationBadge: "MONTHS 4–6", title: "RCC Frame & Slabs", desc: "Columns, beams, and slab curing." },
      { durationBadge: "MONTHS 7–9", title: "Masonry & MEP", desc: "Block masonry and concealed conduits." },
      { durationBadge: "MONTHS 10–12", title: "Finishing & Handover", desc: "Flooring, painting, testing, and handover." }
    ]
  },

  'commercial-construction-bangalore': {
    typologiesTitle: "Commercial Typologies",
    typologiesSubtitle: "Engineered for maximum usable area and high rental yields:",
    typologies: [
      { title: "Corporate Offices", desc: "Open floor plates with HVAC and DG integration.", iconType: "building" },
      { title: "Retail Showrooms", desc: "High-visibility frontage and customer parking.", iconType: "grid" },
      { title: "Diagnostic Clinics", desc: "Specialized clinical layouts and access ramps.", iconType: "shield" },
      { title: "Mixed-Use Complexes", desc: "Ground retail with upper corporate office suites.", iconType: "layers" }
    ],
    processTitle: "Commercial Process",
    processSubtitle: "Phased project management ensuring on-time delivery:",
    processStages: [
      { stageNumber: "01", title: "FAR & Zoning Feasibility", desc: "Setback checks and floor-plate optimization." },
      { stageNumber: "02", title: "Heavy Structural Design", desc: "Commercial live load and column-free grids." },
      { stageNumber: "03", title: "MEP Schematics", desc: "3-Phase power, HVAC ducting, and fire lines." },
      { stageNumber: "04", title: "Basement & Sump", desc: "Retaining walls, sumps, and parking bays." },
      { stageNumber: "05", title: "Superstructure RCC", desc: "High-grade RMC casting and fast formwork." },
      { stageNumber: "06", title: "Façade & Glazing", desc: "DGU acoustic curtain walls and ACP cladding." },
      { stageNumber: "07", title: "Fire Safety & Lifts", desc: "Hydrants, sprinklers, and passenger elevators." },
      { stageNumber: "08", title: "Fit-Out Handover", desc: "Warm shell delivery with compliance certificates." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Turnkey structural and MEP build packages:",
    detailedScope: [
      { title: "Heavy RCC Superstructure", desc: "Heavy column grids engineered for live loads." },
      { title: "Façade & Curtain Glazing", desc: "DGU structural glazing and ACP paneling." },
      { title: "High-Capacity MEP Systems", desc: "Transformers, busducts, and distribution panels." },
      { title: "Fire Detection & Suppression", desc: "Hydrant rings, smoke detectors, and sprinklers." },
      { title: "Commercial Finishes & Lobbies", desc: "Granite lobbies and anti-skid stairways." },
      { title: "Basement Parking & Drainage", desc: "Epoxy/VDF flooring and stormwater pumps." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing commercial project investments:",
    costDrivers: [
      { number: "1", title: "Column Grid Span & Load", desc: "Long spans require heavier PT slabs." },
      { number: "2", title: "Façade Glazing Tier", desc: "Low-E DGU glass reduces cooling energy costs." },
      { number: "3", title: "Connected Power & DG", desc: "Transformer setup and 100% DG backup." },
      { number: "4", title: "Basement Retention Depth", desc: "Multi-level parking requires contiguous piling." }
    ],
    timelineTitle: "Project Timeline",
    timelineSubtitle: "Structured critical-path delivery schedule:",
    timelineSchedule: [
      { durationBadge: "MONTHS 1–3", title: "Planning & Earthwork", desc: "Sanctions, structural design, and excavation." },
      { durationBadge: "MONTHS 3–6", title: "Basement & Sump", desc: "Retaining walls, footings, and ground slab." },
      { durationBadge: "MONTHS 6–10", title: "RCC Superstructure", desc: "Floor-by-floor column and slab casting." },
      { durationBadge: "MONTHS 10–13", title: "Façade & MEP Works", desc: "Glass curtain walls, risers, and ducting." },
      { durationBadge: "MONTHS 13–15", title: "Finishes & Handover", desc: "Lobby finishes, lift testing, and handover." }
    ]
  },

  'industrial-construction-bangalore': {
    typologiesTitle: "Industrial Typologies",
    typologiesSubtitle: "Heavy-duty facilities built for operational loads:",
    typologies: [
      { title: "Pre-Engineered Buildings", desc: "High-clearance steel frames with insulated roofing.", iconType: "hammer" },
      { title: "Logistics Warehouses", desc: "High-bay clearance and truck dock levelers.", iconType: "building" },
      { title: "Manufacturing Plants", desc: "Crane girders and vibration-damped machine pads.", iconType: "layers" },
      { title: "Industrial Sheds", desc: "Cost-effective steel truss sheds with VDF floors.", iconType: "grid" }
    ],
    processTitle: "Industrial Process",
    processSubtitle: "Precision execution tailored to machinery and loading cycles:",
    processStages: [
      { stageNumber: "01", title: "Layout & Crane Clearance", desc: "Hook heights and machinery placement zoning." },
      { stageNumber: "02", title: "Soil Bearing Capacity", desc: "Soil testing to determine machine pad depths." },
      { stageNumber: "03", title: "Heavy Foundations", desc: "Isolated footings absorbing dynamic vibrations." },
      { stageNumber: "04", title: "PEB Steel Erection", desc: "Factory portal frames, rafters, and crane runways." },
      { stageNumber: "05", title: "VDF Industrial Flooring", desc: "Vacuum dewatered flooring with metallic hardeners." },
      { stageNumber: "06", title: "Insulated Roof Sheeting", desc: "Galvalume roofing, skylights, and high-bay lighting." },
      { stageNumber: "07", title: "Loading Docks & Yards", desc: "Concrete aprons and truck maneuver areas." },
      { stageNumber: "08", title: "Testing & Handover", desc: "Load tests, stability certificate, and handover." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Turnkey industrial civil, steel, and flooring infrastructure:",
    detailedScope: [
      { title: "PEB Structural Steelwork", desc: "Portal frames, crane girders, and insulated sheeting." },
      { title: "Machine Foundations", desc: "Heavy machine pads for CNCs and generators." },
      { title: "VDF Concrete Flooring", desc: "Laser-leveled Tremix flooring (5–10 MT/sq.m load)." },
      { title: "Utility & Drainage Networks", desc: "Transformers, storm drains, and water sumps." },
      { title: "Loading Bays & Docks", desc: "Dock levelers, rolling shutters, and ramps." },
      { title: "Perimeter Infrastructure", desc: "Compound boundary wall, security cabin, and gates." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing industrial facility investments:",
    costDrivers: [
      { number: "1", title: "Clear Height & Crane Load", desc: "Heights >9m and 10T cranes increase steel sizing." },
      { number: "2", title: "Floor Load Capacity", desc: "Heavy machinery demands thicker reinforced slabs." },
      { number: "3", title: "Roof Insulation & Skylights", desc: "Sandwich panels maintain indoor temperatures." },
      { number: "4", title: "Equipment Foundation Depth", desc: "Isolated pits require specialized excavation." }
    ],
    timelineTitle: "Project Timeline",
    timelineSubtitle: "Rapid PEB fabrication and staged civil delivery:",
    timelineSchedule: [
      { durationBadge: "MONTH 1", title: "Design & Steel Fabrication", desc: "PEB modeling and off-site steel fabrication." },
      { durationBadge: "MONTHS 2–3", title: "Civil Foundations", desc: "Reinforced footings and machine pads." },
      { durationBadge: "MONTHS 3–4", title: "PEB Steel Erection", desc: "Crane erection of main frames and rafters." },
      { durationBadge: "MONTHS 4–5", title: "VDF Flooring & Sheeting", desc: "Laser leveling and roof panel installation." },
      { durationBadge: "MONTH 6", title: "Utilities & Handover", desc: "Electricals, loading bays, and final handover." }
    ]
  },

  'civil-construction-bangalore': {
    typologiesTitle: "Civil Engineering Typologies",
    typologiesSubtitle: "Structural civil contracting engineered to IS standards:",
    typologies: [
      { title: "Sub-Structure & Footings", desc: "Soil-matched excavation, footings, and sumps.", iconType: "hammer" },
      { title: "RCC Superstructures", desc: "IS 456 columns, beams, and high-grade slabs.", iconType: "building" },
      { title: "Precision Masonry", desc: "Solid blocks and joint-reinforced plastering.", iconType: "grid" },
      { title: "Advanced Waterproofing", desc: "Elastomeric membranes and crystalline coatings.", iconType: "shield" }
    ],
    processTitle: "Civil Workflow",
    processSubtitle: "Disciplined engineering from soil excavation to cured slabs:",
    processStages: [
      { stageNumber: "01", title: "Soil SBC & Setting Out", desc: "Boundary survey and centerline grid marking." },
      { stageNumber: "02", title: "Earthwork & PCC", desc: "Excavation, anti-termite, and PCC sub-base." },
      { stageNumber: "03", title: "Rebar Tying & Footings", desc: "550D TMT reinforcement and footing casting." },
      { stageNumber: "04", title: "Plinth & Sump Casting", desc: "Plinth tie beams and waterproof RCC sump." },
      { stageNumber: "05", title: "Columns & Slab Formwork", desc: "Steel shuttering, cover blocks, and RMC pour." },
      { stageNumber: "06", title: "Water Curing Cycles", desc: "Enforced 21-day ponding and curing protocols." },
      { stageNumber: "07", title: "Masonry & Plaster", desc: "Solid block walls and chicken mesh plaster." },
      { stageNumber: "08", title: "Testing & Handover", desc: "Cube test verification and structural sign-off." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Certified civil engineering and structural build scope:",
    detailedScope: [
      { title: "Earthwork & Foundation Casting", desc: "Excavation, compaction, and footing casting." },
      { title: "Certified 550D Rebar Detailing", desc: "IS-compliant bar bending and lap lengths." },
      { title: "Batch-Controlled Concrete", desc: "M20/M25/M30 grade concrete with cube testing." },
      { title: "Masonry & Plastering", desc: "Crack-resistant blockwork with wire mesh." },
      { title: "Multi-Tier Waterproofing", desc: "Polymer membrane coating for sumps and slabs." },
      { title: "Structural Handover Dossier", desc: "As-built drawings and test certificates." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters defining civil construction budgets:",
    costDrivers: [
      { number: "1", title: "Soil Bearing Capacity (SBC)", desc: "Low SBC requires deeper raft/pile footings." },
      { number: "2", title: "Concrete Grade & Steel Brand", desc: "M25/M30 grades and primary steel brands." },
      { number: "3", title: "Waterproofing Specifications", desc: "Crystalline admixtures vs multi-layer coatings." },
      { number: "4", title: "Site Transit & Logistics", desc: "Transit mixer access in dense urban lanes." }
    ],
    timelineTitle: "Civil Timeline",
    timelineSubtitle: "Milestone-driven structural execution schedule:",
    timelineSchedule: [
      { durationBadge: "MONTHS 1–2", title: "Sub-Structure", desc: "Excavation, footings, and plinth casting." },
      { durationBadge: "MONTHS 3–5", title: "RCC Superstructure", desc: "Columns, beams, and slab curing." },
      { durationBadge: "MONTHS 6–7", title: "Masonry & Plaster", desc: "Blockwork, conduits, and double plastering." },
      { durationBadge: "MONTH 8", title: "Waterproofing & Sign-off", desc: "Terrace coatings and quality sign-off." }
    ]
  },

  'interior-design-bangalore': {
    typologiesTitle: "Interior Typologies",
    typologiesSubtitle: "Bespoke interior architecture for modern living:",
    typologies: [
      { title: "Turnkey Interiors", desc: "Full-home modular woodwork, ceilings, and lighting.", iconType: "home" },
      { title: "Modular Kitchens", desc: "Ergonomic BWP ply with quartz countertops.", iconType: "layers" },
      { title: "Custom Wardrobes", desc: "Floor-to-ceiling wardrobes with profile lighting.", iconType: "grid" },
      { title: "Commercial Fit-Outs", desc: "Reception desks, cabins, and workstations.", iconType: "building" }
    ],
    processTitle: "Interior Process",
    processSubtitle: "From 3D renders to factory pressing and installation:",
    processStages: [
      { stageNumber: "01", title: "Space Assessment", desc: "Room measurements and storage mapping." },
      { stageNumber: "02", title: "2D Layouts", desc: "Circulation paths and appliance points." },
      { stageNumber: "03", title: "3D Photorealistic Views", desc: "Color palettes, textures, and lighting renders." },
      { stageNumber: "04", title: "Material Selection", desc: "IS 710 marine ply and branded hardware." },
      { stageNumber: "05", title: "Factory Machine Fabrication", desc: "CNC precision board cutting and edge banding." },
      { stageNumber: "06", title: "On-Site Prep & Ceilings", desc: "False ceilings and electrical conduit routing." },
      { stageNumber: "07", title: "Modular Fitting", desc: "Carcass assembly and quartz countertop fitting." },
      { stageNumber: "08", title: "Cleaning & Handover", desc: "Snag clearance, hardware tuning, and walkthrough." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Modular woodwork, false ceilings, lighting, and finishes:",
    detailedScope: [
      { title: "Factory-Pressed Modular Units", desc: "IS 710 BWP plywood with anti-scratch laminates." },
      { title: "Certified Hardware & Channels", desc: "Soft-close hinges and tandem boxes (Hafele/Blum)." },
      { title: "False Ceiling & Lighting", desc: "Gypsum boards with concealed warm LED channels." },
      { title: "Custom TV & Storage Units", desc: "Media consoles with hidden cable channels." },
      { title: "Kitchen Quartz Counters", desc: "Precision stone cutting with undermount sinks." },
      { title: "Wall Paints & Polishes", desc: "Royale luxury emulsion and PU veneer polish." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Key parameters that define interior budgets:",
    costDrivers: [
      { number: "1", title: "Core Material (BWP vs Commercial)", desc: "Marine ply in wet zones prevents swelling." },
      { number: "2", title: "Surface Finishes (Laminate vs Acrylic)", desc: "Matte laminates vs high-gloss acrylics/veneers." },
      { number: "3", title: "Hardware Mechanism Tier", desc: "Standard soft-close vs push-to-open systems." },
      { number: "4", title: "Ceiling & Lighting Complexity", desc: "Cove lighting vs magnetic track channels." }
    ],
    timelineTitle: "Execution Timeline",
    timelineSubtitle: "Standard turnaround is 6 to 8 weeks from 3D sign-off:",
    timelineSchedule: [
      { durationBadge: "WEEKS 1–2", title: "Design & 3D Views", desc: "Measurements, 3D iterations, and BOQ sign-off." },
      { durationBadge: "WEEKS 3–4", title: "Civil & Ceilings", desc: "Conduit routing and false ceiling framing." },
      { durationBadge: "WEEKS 3–5", title: "Factory Fabrication", desc: "Precision CNC cutting and edge-banding." },
      { durationBadge: "WEEKS 5–7", title: "On-Site Fitting", desc: "Carcass assembly and quartz fitting." },
      { durationBadge: "WEEK 8", title: "Finishing & Handover", desc: "Final painting, cleaning, and key handover." }
    ]
  },

  '2d-design-bangalore': {
    typologiesTitle: "2D Drafting Typologies",
    typologiesSubtitle: "Precision technical drafting and sanction blueprints:",
    typologies: [
      { title: "Architectural Floor Plans", desc: "Dimensioned room plans and Vastu orientation.", iconType: "compass" },
      { title: "Municipal Sanction Drawings", desc: "BBMP/BDA compliant plans with FAR calculations.", iconType: "file" },
      { title: "Working Civil Blueprints", desc: "Column centerline grids and staircase geometry.", iconType: "hammer" },
      { title: "MEP Conduit Schematics", desc: "Electrical switchboards and plumbing drops.", iconType: "grid" }
    ],
    processTitle: "2D Drafting Process",
    processSubtitle: "Structured drafting to eliminate site layout errors:",
    processStages: [
      { stageNumber: "01", title: "Site Survey & Orientation", desc: "Boundary check, road width, and setbacks." },
      { stageNumber: "02", title: "Requirement Mapping", desc: "Room inventory, parking, and privacy zoning." },
      { stageNumber: "03", title: "Concept Layouts", desc: "Multiple floor plan options for daylight & flow." },
      { stageNumber: "04", title: "Bylaw Verification", desc: "Validating setbacks and FAR against BBMP rules." },
      { stageNumber: "05", title: "Working Drawings", desc: "Dimensioning walls, doors, windows, and stairs." },
      { stageNumber: "06", title: "MEP Integration", desc: "Overlaying plumbing lines and electrical conduits." },
      { stageNumber: "07", title: "Blueprint Delivery", desc: "High-resolution PDF sets and site drawing sheets." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Complete technical drawing sets ready for construction:",
    detailedScope: [
      { title: "Dimensioned Floor Plans", desc: "Room dimensions, wall widths, and circulation." },
      { title: "Column Centerline Grid", desc: "Accurate excavation coordinates for site engineers." },
      { title: "Cross-Section Drawings", desc: "Floor heights, plinth levels, and stair sections." },
      { title: "Door & Window Schedule", desc: "Opening sizes, sill heights, and shutter specs." },
      { title: "MEP Schematics", desc: "Conduit routing and drainage drop shafts." },
      { title: "Sanction Plan Set", desc: "Formatted drawings for local authority approval." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing architectural drafting fees:",
    costDrivers: [
      { number: "1", title: "Total Built-Up Area (BUA)", desc: "Multi-storey homes require more drawing sheets." },
      { number: "2", title: "Full MEP Inclusions", desc: "Adding electrical and plumbing conduit drawings." },
      { number: "3", title: "Municipal Sanction Set", desc: "Formatting strictly to town planning bylaws." },
      { number: "4", title: "Irregular Plot Boundaries", desc: "Skewed plots require custom geometry math." }
    ],
    timelineTitle: "Drafting Timeline",
    timelineSubtitle: "Turnaround from consultation to drawing delivery:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Site Survey & Brief", desc: "Plot verification and requirement mapping." },
      { durationBadge: "DAYS 3–5", title: "Concept Layouts", desc: "Initial options with Vastu alignment." },
      { durationBadge: "DAYS 6–7", title: "Revisions", desc: "Fine-tuning room sizes and openings." },
      { durationBadge: "DAYS 8–10", title: "Final Delivery", desc: "Dimensioned sheets, centerline grid, and PDF." }
    ]
  },

  '3d-design-bangalore': {
    typologiesTitle: "3D Visualization Typologies",
    typologiesSubtitle: "Photorealistic 3D models to see your project before building:",
    typologies: [
      { title: "Contemporary Elevations", desc: "Modern facades with louvers and glass railings.", iconType: "building" },
      { title: "Lighting Studies", desc: "Solar shadow casting and evening accent lighting.", iconType: "compass" },
      { title: "Furnished Isometric Plans", desc: "Top-down perspective showing walkway flow.", iconType: "grid" },
      { title: "Virtual 3D Walkthroughs", desc: "Cinematic video tours for spatial clarity.", iconType: "layers" }
    ],
    processTitle: "3D Design Workflow",
    processSubtitle: "Transforming 2D lines into photorealistic visual models:",
    processStages: [
      { stageNumber: "01", title: "CAD Import & Massing", desc: "Building 3D geometry from approved 2D plans." },
      { stageNumber: "02", title: "Architectural Styling", desc: "Adding cantilever balconies and pergolas." },
      { stageNumber: "03", title: "Materials & Textures", desc: "Applying terracotta, concrete, stone, and glass." },
      { stageNumber: "04", title: "Lighting Simulation", desc: "Sunlight angles and evening wall washers." },
      { stageNumber: "05", title: "HD Rendering", desc: "Ultra HD renders with reflections and landscapes." },
      { stageNumber: "06", title: "Color Refinement", desc: "Fine-tuning palettes and material textures." },
      { stageNumber: "07", title: "Fabrication Sheets", desc: "Dimensioned projection callouts for site teams." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Complete visualization deliverables for your project:",
    detailedScope: [
      { title: "High-Res 3D Exterior Views", desc: "Daytime and evening illumination perspectives." },
      { title: "Material & Color Code Sheet", desc: "Paint codes, tile sizes, and cladding specs." },
      { title: "3D Isometric Floor Views", desc: "Furnished perspective showing furniture layouts." },
      { title: "Façade Projection Drawings", desc: "Dimensioned drawings for masons and fabricators." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing 3D elevation investment:",
    costDrivers: [
      { number: "1", title: "Building Scale & Storeys", desc: "Single villa vs multi-storey commercial complex." },
      { number: "2", title: "Façade Complexity", desc: "CNC jali and curved cladding require more modeling." },
      { number: "3", title: "Number of Render Angles", desc: "Front view, corner view, and evening renders." },
      { number: "4", title: "Cinematic Walkthroughs", desc: "3D video animation requires dedicated compute." }
    ],
    timelineTitle: "Visualization Timeline",
    timelineSubtitle: "Fast turnaround from 2D plans to high-res renders:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "3D Massing", desc: "Building 3D model from 2D drawings." },
      { durationBadge: "DAYS 3–4", title: "Materials & Lighting", desc: "Applying realistic textures and sunlight." },
      { durationBadge: "DAYS 5–6", title: "Color Review", desc: "Client review and finish refinement." },
      { durationBadge: "DAYS 7–8", title: "Final HD Delivery", desc: "Ultra-HD renders and material callouts." }
    ]
  },

  'elevation-design-bangalore': {
    typologiesTitle: "Façade Typologies",
    typologiesSubtitle: "Architectural elevation styles tailored to your plot:",
    typologies: [
      { title: "Contemporary Minimalist", desc: "Clean lines, box frames, and wooden louvers.", iconType: "building" },
      { title: "Tropical Modern", desc: "Terracotta jali, planters, and wide overhangs.", iconType: "layers" },
      { title: "Commercial Frontage", desc: "Glass curtain walls and branded ACP bands.", iconType: "grid" },
      { title: "Modern Villa Elevation", desc: "Double-height glazing and stone cladding.", iconType: "home" }
    ],
    processTitle: "Elevation Process",
    processSubtitle: "Iterative 3D styling and fabrication blueprinting:",
    processStages: [
      { stageNumber: "01", title: "2D Plan Review", desc: "Studying floor heights and window openings." },
      { stageNumber: "02", title: "Style Exploration", desc: "Proposing contemporary and tropical concepts." },
      { stageNumber: "03", title: "Material Mapping", desc: "Applying realistic tiles, jali, and paint shades." },
      { stageNumber: "04", title: "Day & Night Renders", desc: "Generating daytime sunlight and dusk lighting views." },
      { stageNumber: "05", title: "Client Refinement", desc: "Fine-tuning colors, textures, and railings." },
      { stageNumber: "06", title: "Working Blueprints", desc: "Sectional dimensions for on-site fabricators." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Complete elevation visualization package:",
    detailedScope: [
      { title: "Day & Night 3D Perspectives", desc: "Photorealistic daytime and evening renders." },
      { title: "Material & Shade Specs", desc: "Exact paint codes, cladding types, and tile sizes." },
      { title: "Dimensioned Façade Blueprints", desc: "Millimeter measurements for balcony and box frames." },
      { title: "Lighting Placement Details", desc: "Positions for wall washers, profile LEDs, and lights." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters defining 3D elevation design fees:",
    costDrivers: [
      { number: "1", title: "Plot Width & Frontage", desc: "Corner plots require multi-angle 3D modeling." },
      { number: "2", title: "Cladding Complexity", desc: "CNC metal screens and curved concrete elements." },
      { number: "3", title: "Number of View Perspectives", desc: "Front view vs dual-road corner perspective." },
      { number: "4", title: "Working Drawing Details", desc: "Adding comprehensive fabrication blueprints." }
    ],
    timelineTitle: "Design Timeline",
    timelineSubtitle: "Turnaround from 2D input to final 3D deliverables:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "3D Massing & Style", desc: "Developing initial façade concept." },
      { durationBadge: "DAYS 3–4", title: "Textures & Lighting", desc: "Applying materials and sunlight simulation." },
      { durationBadge: "DAYS 5–6", title: "Refinement & Details", desc: "Client review and color fine-tuning." },
      { durationBadge: "DAY 7", title: "Final Delivery", desc: "High-resolution renders and fabrication sheets." }
    ]
  },

  '3d-floor-plan-design-bangalore': {
    typologiesTitle: "3D Floor Plan Typologies",
    typologiesSubtitle: "Furnished isometric perspectives for spatial clarity:",
    typologies: [
      { title: "Residential Isometric Views", desc: "Furnished room layouts showing walking clearance.", iconType: "home" },
      { title: "Duplex Cutaway Views", desc: "Visualizing stairwells, voids, and family lounges.", iconType: "layers" },
      { title: "Commercial Space Plans", desc: "Cabins, workstations, and reception flow.", iconType: "building" },
      { title: "Vastu Flow Layouts", desc: "Balancing traditional flow with modern ergonomics.", iconType: "compass" }
    ],
    processTitle: "3D Planning Process",
    processSubtitle: "Converting 2D CAD drawings into furnished 3D models:",
    processStages: [
      { stageNumber: "01", title: "CAD Import", desc: "Importing 2D plan and setting wall heights." },
      { stageNumber: "02", title: "Scale Furniture Placement", desc: "Adding true-to-scale beds, sofas, and counters." },
      { stageNumber: "03", title: "Door & Passage Check", desc: "Verifying clearances and door swing paths." },
      { stageNumber: "04", title: "Lighting & Materials", desc: "Applying flooring textures and natural daylight." },
      { stageNumber: "05", title: "Isometric Rendering", desc: "Generating high-res top-down cutaway views." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Deliverables provided in the 3D floor plan package:",
    detailedScope: [
      { title: "Furnished 3D Isometric View", desc: "High-resolution top-down perspective per floor." },
      { title: "True-to-Scale Furniture Layout", desc: "Standard Indian/international furniture dimensions." },
      { title: "Walkway Clearance Verification", desc: "Ensuring 3-foot minimum unobstructed corridors." },
      { title: "High-Resolution PDF Package", desc: "Formatted for easy viewing on mobile and tablet." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing 3D floor plan pricing:",
    costDrivers: [
      { number: "1", title: "Number of Floor Levels", desc: "Single-floor layout vs G+3 multi-storey residence." },
      { number: "2", title: "Duplex Void Complexity", desc: "Double-height cutaways and floating staircases." },
      { number: "3", title: "Commercial Furnishing Density", desc: "Detailed workstations and conference layouts." },
      { number: "4", title: "Turnaround Priority", desc: "Standard delivery vs 24-hour express turnaround." }
    ],
    timelineTitle: "Delivery Timeline",
    timelineSubtitle: "Fast turnaround from 2D drawings to furnished 3D:",
    timelineSchedule: [
      { durationBadge: "DAY 1", title: "CAD Import & Modeling", desc: "Building 3D walls and openings." },
      { durationBadge: "DAY 2", title: "Furniture & Materials", desc: "Placing furniture and applying textures." },
      { durationBadge: "DAY 3", title: "Rendering & Delivery", desc: "High-resolution isometric PDF delivery." }
    ]
  },

  'structural-design-bangalore': {
    typologiesTitle: "Structural Services",
    typologiesSubtitle: "Certified RCC and steel framework engineering:",
    typologies: [
      { title: "Foundation & Footings", desc: "Soil-matched foundation sizing.", iconType: "hammer" },
      { title: "RCC Frame Detailing", desc: "Column, beam, and slab calculations (IS 456).", iconType: "building" },
      { title: "Bar Bending Schedules (BBS)", desc: "Precise rebar cutting schedules to reduce waste.", iconType: "file" },
      { title: "Structural Certification", desc: "Load audits and stability certificates.", iconType: "shield" }
    ],
    processTitle: "Structural Workflow",
    processSubtitle: "Mathematical load analysis and engineering verification:",
    processStages: [
      { stageNumber: "01", title: "Soil Report & Loads", desc: "Soil SBC, dead, live, and seismic load inputs." },
      { stageNumber: "02", title: "Seismic Modeling (IS 1893)", desc: "Earthquake resistant frame analysis." },
      { stageNumber: "03", title: "Column Grid Optimization", desc: "Framing layout avoiding room obstruction." },
      { stageNumber: "04", title: "Foundation Sizing", desc: "Footing depths, rebar mesh, and plinth ties." },
      { stageNumber: "05", title: "Beam & Slab Detailing", desc: "Steel diameters, stirrups, and cantilevers." },
      { stageNumber: "06", title: "Bar Bending Schedule (BBS)", desc: "Steel tonnage and rebar cutting lengths." },
      { stageNumber: "07", title: "Engineer Certification", desc: "Signed drawings for municipal sanctions." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Complete certified structural drawing package:",
    detailedScope: [
      { title: "Foundation & Footing Layout", desc: "Footing dimensions and reinforcement mesh." },
      { title: "Column Schedule & Ties", desc: "Rebar diameters and lateral tie spacing." },
      { title: "Plinth & Floor Beam Details", desc: "Cross-sections and shear stirrup spacing." },
      { title: "Slab Reinforcement Layout", desc: "One-way/two-way rebar spacing and cover." },
      { title: "Staircase & Sump Details", desc: "Waist slab rebar and water pressure design." },
      { title: "Structural Stability Report", desc: "Official calculations signed by Chartered Engineer." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters that influence structural calculation fees:",
    costDrivers: [
      { number: "1", title: "Built-Up Area & Floors", desc: "Higher storeys require multi-stage seismic math." },
      { number: "2", title: "Soil Stratum Complexity", desc: "Loose soil requires raft or pile engineering." },
      { number: "3", title: "Long Spans & Cantilevers", desc: "Column-free halls require heavier design." },
      { number: "4", title: "On-Site Rebar Audits", desc: "Civil checks during rebar tying." }
    ],
    timelineTitle: "Engineering Timeline",
    timelineSubtitle: "Turnaround from architectural plans to certified blueprints:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Review & Load Input", desc: "2D plans, soil SBC, and grid mapping." },
      { durationBadge: "DAYS 3–5", title: "Foundation Modeling", desc: "Load calculations and footing sizing." },
      { durationBadge: "DAYS 6–8", title: "Beam, Slab & BBS", desc: "Reinforcement drafting and cutting lists." },
      { durationBadge: "DAYS 9–10", title: "Final Certification", desc: "Engineer seal and contractor drawing set." }
    ]
  },

  'property-valuation-bangalore': {
    typologiesTitle: "Valuation Services",
    typologiesSubtitle: "Certified asset appraisal and valuation reports:",
    typologies: [
      { title: "Bank Mortgage Valuation", desc: "Fair market value appraisal for home loans.", iconType: "calculator" },
      { title: "Capital Gains Tax (Sec 54)", desc: "Indexed acquisition cost reports for Income Tax.", iconType: "file" },
      { title: "Visa & Immigration Assets", desc: "Net-worth valuation for visa processing.", iconType: "shield" },
      { title: "Family Partition & Probate", desc: "Independent appraisal for legal documentation.", iconType: "home" }
    ],
    processTitle: "Valuation Process",
    processSubtitle: "4-step appraisal conforming to professional standards:",
    processStages: [
      { stageNumber: "01", title: "Document Review", desc: "Examining deeds, e-Khata, tax receipts, and plans." },
      { stageNumber: "02", title: "Physical Site Inspection", desc: "Inspecting boundaries, road width, and structure age." },
      { stageNumber: "03", title: "Cost & Market Computation", desc: "Guideline rates and CPWD building depreciation." },
      { stageNumber: "04", title: "Certified Report Handover", desc: "Issuing signed dossier by Registered Valuer." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Appraisal documentation accepted by banks and courts:",
    detailedScope: [
      { title: "Site Inspection & Dimensions", desc: "On-site measurements and road width check." },
      { title: "Guideline vs Market Value", desc: "Sub-registrar rate and fair market value." },
      { title: "CPWD Building Depreciation", desc: "Replacement cost formula based on building age." },
      { title: "Distress / Realizable Value", desc: "Bank-standard loan security margin calculation." },
      { title: "Geo-Tagged Photos", desc: "Photographic record of property and road frontage." },
      { title: "Registered Valuer Seal", desc: "Certificate compliant with IBBI regulations." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing professional valuation fees:",
    costDrivers: [
      { number: "1", title: "Property Type & Scale", desc: "Vacant plot vs multi-floor commercial building." },
      { number: "2", title: "Appraisal Purpose", desc: "Standard loan vs Capital Gains / Court litigation." },
      { number: "3", title: "Inspection Location", desc: "Central BBMP zones vs rural BMRDA outskirts." },
      { number: "4", title: "Turnaround Urgency", desc: "Express 24–48 hour delivery for bank deadlines." }
    ],
    timelineTitle: "Valuation Timeline",
    timelineSubtitle: "Turnaround from inspection to signed report:",
    timelineSchedule: [
      { durationBadge: "DAY 1", title: "Document Review", desc: "Reviewing title deeds, e-Khata, and tax receipts." },
      { durationBadge: "DAYS 1–2", title: "Site Inspection", desc: "On-site measurement and condition assessment." },
      { durationBadge: "DAYS 2–3", title: "Computations", desc: "Guideline benchmarking and depreciation math." },
      { durationBadge: "DAYS 3–4", title: "Report Handover", desc: "Signed and sealed original valuation report." }
    ]
  },

  'land-valuation-bangalore': {
    typologiesTitle: "Land Typologies",
    typologiesSubtitle: "Certified land valuation and boundary appraisal:",
    typologies: [
      { title: "Residential Layout Plots", desc: "BDA, BMRDA, and DC-converted sites.", iconType: "grid" },
      { title: "Commercial Frontage Land", desc: "Main road plots with commercial FAR potential.", iconType: "building" },
      { title: "Industrial Estate Land", desc: "KIADB plots in Peenya, Bommasandra, and Bidadi.", iconType: "hammer" },
      { title: "Agricultural & Farm Land", desc: "Green belt parcels on Bangalore outskirts.", iconType: "compass" }
    ],
    processTitle: "Land Valuation Process",
    processSubtitle: "Revenue document verification and boundary inspection:",
    processStages: [
      { stageNumber: "01", title: "Revenue Document Audit", desc: "Checking RTC/Pahani, survey sketch, and deeds." },
      { stageNumber: "02", title: "Physical Boundary Survey", desc: "Verifying physical markers and road access." },
      { stageNumber: "03", title: "Guideline Rate Analysis", desc: "Sub-registrar guidance vs registered transactions." },
      { stageNumber: "04", title: "Certified Land Dossier", desc: "Issuing formal stamped land appraisal dossier." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Complete land appraisal documentation:",
    detailedScope: [
      { title: "Plot Boundary Verification", desc: "Dimensions checked against deed and survey sketch." },
      { title: "Guideline Value Benchmark", desc: "Government guidance rates factoring road width." },
      { title: "Fair Market Value Analysis", desc: "Prevailing open market rates in locality." },
      { title: "Road & Accessibility Audit", desc: "Assessment of legal access and municipal roads." },
      { title: "Geo-Tagged Photos", desc: "Clear photographic record of plot frontage." },
      { title: "Registered Valuer Stamp", desc: "Certificate compliant with Wealth Tax standards." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters determining land appraisal fees:",
    costDrivers: [
      { number: "1", title: "Plot Area & Scale", desc: "Standard 30x40 plots vs multi-acre parcels." },
      { number: "2", title: "Zoning & Land Use", desc: "Residential vs Commercial vs KIADB land." },
      { number: "3", title: "Location & Distance", desc: "BBMP central zone vs rural BMRDA outskirts." },
      { number: "4", title: "Appraisal Purpose", desc: "Bank mortgage vs Capital Gains Tax audit." }
    ],
    timelineTitle: "Valuation Timeline",
    timelineSubtitle: "Fast turnaround from inspection to certified report:",
    timelineSchedule: [
      { durationBadge: "DAY 1", title: "Document Review", desc: "Survey sketch, title deed, and tax receipts." },
      { durationBadge: "DAY 2", title: "Boundary Survey", desc: "Physical inspection of plot boundaries." },
      { durationBadge: "DAY 3", title: "Rate Analysis", desc: "Guideline and market transaction calculations." },
      { durationBadge: "DAY 4", title: "Report Handover", desc: "Signed and stamped land valuation dossier." }
    ]
  },

  'business-valuation-bangalore': {
    typologiesTitle: "Asset & Enterprise Typologies",
    typologiesSubtitle: "Certified commercial asset and machinery appraisal:",
    typologies: [
      { title: "Plant & Machinery", desc: "Depreciated replacement value of equipment.", iconType: "hammer" },
      { title: "Commercial Fixed Assets", desc: "Appraisal of corporate offices and showrooms.", iconType: "building" },
      { title: "M&A Dossiers", desc: "DCF and NAV valuation for equity transactions.", iconType: "calculator" },
      { title: "Statutory Financial Audits", desc: "Fixed asset registers and impairment testing.", iconType: "file" }
    ],
    processTitle: "Business Valuation Process",
    processSubtitle: "Due diligence and physical asset verification methodology:",
    processStages: [
      { stageNumber: "01", title: "Financial Screening", desc: "Audited balance sheets and procurement invoices." },
      { stageNumber: "02", title: "Plant & Machinery Inspection", desc: "Operational capacity and maintenance logs." },
      { stageNumber: "03", title: "Methodology Execution", desc: "Asset Approach, DCF, and Market Approach." },
      { stageNumber: "04", title: "Certified Report", desc: "Formal stamped dossier signed by IBBI Valuer." }
    ],
    scopeTitle: "What Is Included",
    scopeSubtitle: "Appraisal dossiers recognized by banks and audit authorities:",
    detailedScope: [
      { title: "Physical Equipment Audit", desc: "Inspection of machinery and infrastructure." },
      { title: "Depreciated Cost (DRC)", desc: "Calculations reflecting actual machine lifespan." },
      { title: "Discounted Cash Flow (DCF)", desc: "Modeling future cash flows and terminal value." },
      { title: "Tangible Asset Breakdown", desc: "Itemized summary of tangible business assets." },
      { title: "IBBI Registered Valuer Seal", desc: "Statutory certification recognized across India." }
    ],
    costTitle: "Cost Factors",
    costSubtitle: "Parameters influencing enterprise valuation fees:",
    costDrivers: [
      { number: "1", title: "Scale of Fixed Asset Register", desc: "Number of equipment lines to physically inspect." },
      { number: "2", title: "Methodology Complexity", desc: "Tangible asset valuation vs full DCF modeling." },
      { number: "3", title: "Statutory Purpose", desc: "Bank credit security vs NCLT / M&A legal audit." },
      { number: "4", title: "Location Count", desc: "Single plant vs multiple branch facilities." }
    ],
    timelineTitle: "Valuation Timeline",
    timelineSubtitle: "Turnaround for commercial and industrial appraisals:",
    timelineSchedule: [
      { durationBadge: "DAYS 1–2", title: "Financial Review", desc: "Analyzing balance sheets and asset lists." },
      { durationBadge: "DAYS 3–4", title: "Site Inspection", desc: "Physical equipment and maintenance audit." },
      { durationBadge: "DAYS 5–6", title: "DCF & DRC Modeling", desc: "Executing cash flow and depreciation math." },
      { durationBadge: "DAYS 7–8", title: "Final Handover", desc: "Signed and stamped IBBI-compliant dossier." }
    ]
  }
};
