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
    tagline: "Site Analysis & Feasibility",
    description: "Evaluating plot dimensions, soil conditions, client brief, and local bylaws.",
    keyInputs: ["Plot dimensions & location", "Space requirements", "Target budget"],
    keyOutputs: ["Feasibility report", "Setback guidelines", "Scope outline"],
    clientRole: "Share spatial needs and budget preferences.",
    mySpaceRole: "Conduct physical site audit and verify feasibility.",
    image: "/images/company/real-project-01.jpeg"
  },
  {
    number: "02",
    title: "Planning & BOQ Estimation",
    tagline: "Itemized BOQ & Milestone Schedule",
    description: "Line-item Bill of Quantities (BOQ) with defined material grades and stage payments.",
    keyInputs: ["Approved floor layout", "Structural parameters", "Package selection"],
    keyOutputs: ["Itemized BOQ estimate", "Milestone schedule", "Contract agreement"],
    clientRole: "Review package specifications and confirm milestone plan.",
    mySpaceRole: "Provide transparent line-item pricing with zero hidden costs.",
    image: "/images/company/showroom-3.jpeg"
  },
  {
    number: "03",
    title: "3D Visualization & Design",
    tagline: "2D Working Drawings & 3D Elevations",
    description: "Photorealistic 3D elevations, structural drawings, and material selection boards.",
    keyInputs: ["Design preferences", "Façade style", "Joinery brief"],
    keyOutputs: ["3D photorealistic elevations", "Isometric layouts", "2D working drawings"],
    clientRole: "Approve 3D concepts and material palettes.",
    mySpaceRole: "Prepare detailed execution drawings for site engineers.",
    image: "/images/company/showroom-4.jpeg"
  },
  {
    number: "04",
    title: "Quality-Controlled Build",
    tagline: "On-Site Supervision & Weekly Reports",
    description: "Rigorous site supervision, concrete cube testing, and weekly progress photo reports.",
    keyInputs: ["Execution drawings", "Material delivery schedule", "QA checklist"],
    keyOutputs: ["Structural milestones", "Material test certificates", "Weekly digital updates"],
    clientRole: "Review weekly updates and verify stage milestones.",
    mySpaceRole: "Full site supervision and IS-compliant material testing.",
    image: "/images/company/real-project-18.jpeg"
  },
  {
    number: "05",
    title: "Snag Clearance & Handover",
    tagline: "Deep Clean & Key Handover",
    description: "Complete room-by-room snag clearance, MEP as-built drawings, and warranty packs.",
    keyInputs: ["Snag checklist", "Plumbing & electrical commissioning"],
    keyOutputs: ["Handover certificate", "As-built drawings", "Warranty certificates"],
    clientRole: "Conduct final walkthrough verification.",
    mySpaceRole: "Hand over deep-cleaned property with written warranties.",
    image: "/images/company/showroom-1.jpeg"
  }
];

// Backwards compatibility alias
export const processStages = constructionProcessStages;

export const valuationProcessStages: ProcessStage[] = [
  {
    number: "01",
    title: "Intake & Document Review",
    tagline: "Document Audit & Objective",
    description: "Reviewing title deeds, e-Khata, and appraisal purpose (Bank, Visa, Tax, Sale).",
    keyInputs: ["Sale Deed / Title copy", "e-Khata & tax receipts", "Valuation purpose"],
    keyOutputs: ["Document checklist", "Mandate confirmation", "Site visit schedule"],
    clientRole: "Provide copies of property ownership records.",
    mySpaceRole: "Verify document completeness and property bounds.",
    image: "/images/company/real-project-75.jpeg"
  },
  {
    number: "02",
    title: "Physical Site Inspection",
    tagline: "Boundary Audit & Measurements",
    description: "Physical boundary verification, carpet area measurement, and structural age audit.",
    keyInputs: ["Site access coordination", "Approved floor layout", "Existing modifications"],
    keyOutputs: ["Field inspection log", "As-measured dimensions", "Condition & age audit"],
    clientRole: "Facilitate site access for physical inspection.",
    mySpaceRole: "Verify physical dimensions and construction grade.",
    image: "/images/company/real-project-01.jpeg"
  },
  {
    number: "03",
    title: "Market & Guideline Analysis",
    tagline: "Guidance Values & Micro-Market Trends",
    description: "Cross-referencing government guidance rates with real micro-market transaction data.",
    keyInputs: ["Sub-registrar boundary", "Neighborhood transactions", "Locality trends"],
    keyOutputs: ["Guidance rate comparison", "Micro-market analysis", "Locality matrix"],
    clientRole: "Share surrounding sale/rental comparables.",
    mySpaceRole: "Analyze statutory guidance rates against open-market rates.",
    image: "/images/company/showroom-2.jpeg"
  },
  {
    number: "04",
    title: "Valuation Computations",
    tagline: "Land+Building & Cost Methods",
    description: "Mathematical appraisal using Land & Building method with standard depreciation factoring.",
    keyInputs: ["Built-up area measurements", "Standard replacement rates", "Age depreciation"],
    keyOutputs: ["Land component value", "Depreciated structure value", "Fair market valuation"],
    clientRole: "Review draft computation figures.",
    mySpaceRole: "Apply standard valuation algorithms and depreciation indices.",
    image: "/images/company/showroom-3.jpeg"
  },
  {
    number: "05",
    title: "Final Valuation Report Handover",
    tagline: "Comprehensive Valuation Dossier",
    description: "Detailed property valuation report including physical audit notes, market analysis, and depreciation calculations.",
    keyInputs: ["Draft sign-off", "Client usage requirements"],
    keyOutputs: ["Comprehensive Valuation Report", "Property summary dossier", "Market value assessment"],
    clientRole: "Receive final valuation documentation.",
    mySpaceRole: "Hand over comprehensive dossier and assist with clarifications.",
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

