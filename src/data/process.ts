export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyInputs: string[];
  keyOutputs: string[];
  clientRole: string;
  mySpaceRole: string;
  image: string;
}

export const constructionProcessStages: ProcessStage[] = [
  {
    number: "01",
    title: "Site & Goal Discovery",
    tagline: "Site Analysis, Requirements & Feasibility",
    description: "We evaluate your plot dimensions, soil context, family/commercial requirements, and municipal bylaws to establish project feasibility.",
    keyInputs: ["Plot dimensions & location", "Space requirements", "Target budget & timeline"],
    keyOutputs: ["Site feasibility report", "Zoning & setback guidelines", "Initial scope outline"],
    clientRole: "Share your vision, spatial needs, and budget boundaries.",
    mySpaceRole: "Conduct physical site audit and verify municipal feasibility.",
    image: "/images/company/real-project-01.jpeg"
  },
  {
    number: "02",
    title: "Planning & BOQ Estimation",
    tagline: "Itemized BOQ, Clear Specs & Stage Milestones",
    description: "Zero ambiguity. We build a line-item Bill of Quantities (BOQ) with defined material grades and stage-linked payment schedules.",
    keyInputs: ["Approved floor layout", "Structural engineering parameters", "Finish package selection"],
    keyOutputs: ["Line-item BOQ estimate", "Milestone payment schedule", "Execution contract agreement"],
    clientRole: "Review package specifications and confirm milestone schedule.",
    mySpaceRole: "Value-engineer specifications and fix transparent line-item pricing.",
    image: "/images/company/showroom-3.jpeg"
  },
  {
    number: "03",
    title: "3D Visualization & Design",
    tagline: "2D Working Drawings & Photorealistic 3D",
    description: "Visualize every angle before breaking ground with photorealistic 3D elevations, structural working drawings, and material boards.",
    keyInputs: ["Design preferences", "Façade style & exterior finishes", "Lighting & joinery brief"],
    keyOutputs: ["Photorealistic 3D elevations", "3D isometric floor layouts", "Complete 2D working drawing set"],
    clientRole: "Review renders and approve finish palettes in design review sessions.",
    mySpaceRole: "Refine 3D designs and prepare execution drawings for site team.",
    image: "/images/company/showroom-4.jpeg"
  },
  {
    number: "04",
    title: "Quality-Controlled Build",
    tagline: "On-Site Engineering & Weekly Progress Reports",
    description: "Strict on-site engineering supervision. We conduct regular concrete cube tests, rebar audits, and provide weekly digital photo reports.",
    keyInputs: ["Execution drawings", "Material delivery schedule", "Quality audit checklist"],
    keyOutputs: ["Stage-wise structural completion", "Material test certificates", "Weekly digital progress updates"],
    clientRole: "Review weekly progress and verify completed stage milestones.",
    mySpaceRole: "Full site engineering, material QA/QC, and adherence to IS standards.",
    image: "/images/company/real-project-18.jpeg"
  },
  {
    number: "05",
    title: "Snag Clearance & Handover",
    tagline: "Deep Clean, Warranty Pack & Key Handover",
    description: "Systematic room-by-room snag audit, as-built MEP drawings dossier, and certified waterproofing & structural warranty handover.",
    keyInputs: ["Pre-handover snag checklist", "Plumbing & electrical commissioning checks"],
    keyOutputs: ["Snag clearance certificate", "As-built drawing dossier", "Written warranty certificates"],
    clientRole: "Conduct final walkthrough verification with our project lead.",
    mySpaceRole: "Deliver deep-cleaned property with comprehensive documentation.",
    image: "/images/company/showroom-1.jpeg"
  }
];

// Backwards compatibility alias
export const processStages = constructionProcessStages;

export const valuationProcessStages: ProcessStage[] = [
  {
    number: "01",
    title: "Intake & Document Review",
    tagline: "Objective Verification & Title Documents",
    description: "We review your property documents (Sale Deed, Khata, Mother Deed, EC) and understand the appraisal purpose (Bank loan, Visa, Tax, Sale).",
    keyInputs: ["Sale Deed / Title copy", "e-Khata / Tax receipts", "Purpose of valuation report"],
    keyOutputs: ["Document verification checklist", "Valuation mandate confirmation", "Site inspection schedule"],
    clientRole: "Provide digital/physical copies of property ownership records.",
    mySpaceRole: "Verify document completeness and identify legal property bounds.",
    image: "/images/company/real-project-75.jpeg"
  },
  {
    number: "02",
    title: "Physical Site Inspection",
    tagline: "Boundary Audit, Measurements & Structural Health",
    description: "Our chartered valuer inspects the property, verifies physical boundaries, measures carpet/built-up area, and checks construction quality and age.",
    keyInputs: ["Site access coordination", "Floor layout & approved plans", "Existing structural modifications"],
    keyOutputs: ["Field inspection log", "As-measured area dimensions", "Structural condition & age audit"],
    clientRole: "Facilitate site access for physical measurement and photographic audit.",
    mySpaceRole: "Verify physical dimensions, road access width, and construction grade.",
    image: "/images/company/real-project-01.jpeg"
  },
  {
    number: "03",
    title: "Market & Guideline Analysis",
    tagline: "Kaveri 2.0 Guidance Rates & Real Micro-Market Data",
    description: "We cross-reference Karnataka Sub-Registrar guidance values with real transaction data and micro-market demand in Bengaluru.",
    keyInputs: ["Local sub-registrar boundary", "Recent neighborhood transaction data", "Micro-market infrastructure trends"],
    keyOutputs: ["Guidance rate comparative sheet", "Micro-market rate analysis", "Locality appreciation matrix"],
    clientRole: "Share any recent commercial lease rates or surrounding plot sales.",
    mySpaceRole: "Synthesize statutory guidance rates with realistic open-market comparables.",
    image: "/images/company/showroom-2.jpeg"
  },
  {
    number: "04",
    title: "Valuation Computations",
    tagline: "Cost Approach, Land+Building & Rental Yield Methods",
    description: "Rigorous mathematical valuation using Land & Building Method, Plinth Area Cost Method (CPWD/KPWD specs), and depreciation factoring.",
    keyInputs: ["Calculated built-up area", "Standard construction replacement rates", "Depreciation factor as per age"],
    keyOutputs: ["Land component valuation", "Depreciated building structure value", "Fair market & distress value computations"],
    clientRole: "Review draft computation figures and clarify any structural additions.",
    mySpaceRole: "Apply IBBI/statutory valuation algorithms and depreciation indices.",
    image: "/images/company/showroom-3.jpeg"
  },
  {
    number: "05",
    title: "Certified Report Handover",
    tagline: "Signed Govt/Bank-Approved Valuation Certificate",
    description: "Delivery of a comprehensive, legally certified Valuation Report signed by a Registered Government / IBBI Valuer, ready for Banks, Tax, or Court.",
    keyInputs: ["Draft report sign-off", "Specific bank/consulate submission format"],
    keyOutputs: ["Certified Valuation Report (Physical & PDF)", "Registered Valuer stamp & seal", "Fair Market & Realizable Value summary"],
    clientRole: "Submit certified report to bank, embassy, or tax authorities.",
    mySpaceRole: "Hand over sealed valuation dossier and answer bank queries if needed.",
    image: "/images/company/showroom-5.jpeg"
  }
];

export const consultationChecklist = [
  {
    category: "Construction Checklist",
    items: [
      "Plot dimensions (length x width) & location in Bengaluru",
      "Approach road width (minimum 25-30 ft for transit mixers)",
      "Occupancy profile: bedrooms, home office, rental units, parking",
      "Target timeline & budget preference (standard, premium, luxury)"
    ]
  },
  {
    category: "Valuation Checklist",
    items: [
      "Copy of registered Sale Deed / Title Deed",
      "Latest e-Khata certificate & recent tax paid receipt",
      "Approved building plan / layout drawing (if available)",
      "Clear appraisal objective (Bank loan, Visa, Capital Gains, Sale)"
    ]
  },
  {
    category: "Document Readiness",
    items: [
      "Encumbrance Certificate (EC) for past 13+ years",
      "Utility bills (BESCOM electricity & BWSSB water)",
      "Mother deed history (for land/commercial valuation)"
    ]
  }
];

