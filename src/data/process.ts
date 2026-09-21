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

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "Goals, Site, Context & Practical Constraints",
    description: "Every successful project starts with listening. We analyze your plot dimensions, family or commercial space requirements, budget parameters, and Bengaluru municipal regulations before suggesting solutions.",
    keyInputs: ["Plot dimensions & location", "Family or business requirements", "Budget parameters", "Timeline expectations"],
    keyOutputs: ["Site feasibility assessment", "Zoning & setback verification", "Preliminary scope boundary document"],
    clientRole: "Share your vision, current situation, site photos, and what is currently unclear.",
    mySpaceRole: "Conduct site inspection, verify physical access, and outline initial feasibility.",
    image: "/images/company/real-project-01.jpeg"
  },
  {
    number: "02",
    title: "Plan",
    tagline: "Scope Definition, Material Packages & Transparent Estimates",
    description: "Unclear scope is the number one cause of construction disputes. We formulate an itemized Bill of Quantities (BOQ), define exact material grades, articulate assumptions, and outline stage-wise payment milestones.",
    keyInputs: ["Approved functional layout", "Structural engineering calculations", "Selected finish specifications"],
    keyOutputs: ["Transparent Itemized BOQ", "Milestone-based Stage Payment Schedule", "Project Timeline & Execution Agreement"],
    clientRole: "Review scope inclusions/exclusions and confirm material specifications.",
    mySpaceRole: "Engineer cost-effective solutions and lock in fixed line-item pricing.",
    image: "/images/company/showroom-3.jpeg"
  },
  {
    number: "03",
    title: "Visualize",
    tagline: "2D Plans, 3D Elevations, Furniture Layouts & Material Samples",
    description: "Never build blindly. We create realistic 3D exterior elevations, 3D isometric floor plans, and material sample boards so you see and approve every detail before construction begins on site.",
    keyInputs: ["Approved room sizes", "Façade aesthetic preferences", "Lighting & interior requirements"],
    keyOutputs: ["Photorealistic 3D Elevations (Day & Night)", "3D Isometric Furnished Floor Plans", "Detailed 2D Working Fabrication Drawings"],
    clientRole: "Review visual renders and make design refinements in guided review sessions.",
    mySpaceRole: "Iterate 3D models and provide physical material swatches for tactile verification.",
    image: "/images/company/showroom-4.jpeg"
  },
  {
    number: "04",
    title: "Build",
    tagline: "Staged Civil Execution, Engineering Supervision & Live Updates",
    description: "Execution is managed with strict engineering governance. We conduct regular site quality audits, slump/cube tests for concrete, rebar alignment checks, and send you weekly photo/video progress reports.",
    keyInputs: ["2D working drawings", "Material delivery schedules", "Inspection checklists"],
    keyOutputs: ["Stage-wise milestone completions", "Quality test compliance reports", "Weekly digital progress updates"],
    clientRole: "Track weekly digital updates and verify stage milestones for milestone releases.",
    mySpaceRole: "Full site engineering supervision, material quality control, and safety adherence.",
    image: "/images/company/real-project-18.jpeg"
  },
  {
    number: "05",
    title: "Handover",
    tagline: "Snag Rectification, As-Built Drawings & Warranty Handover",
    description: "A smooth, confident transition into your new space. We conduct systematic room-by-room snag audits, provide complete as-built electrical/plumbing routing maps, and hand over certified waterproofing warranty documentation.",
    keyInputs: ["Pre-handover snag checklist", "Commissioning tests for plumbing/electrical"],
    keyOutputs: ["Completed Snag Clearance Certificate", "As-Built Drawing Dossier", "Waterproofing & Structural Warranty Documents"],
    clientRole: "Walk through the completed space with our project lead for final snag verification.",
    mySpaceRole: "Deliver deep-cleaned handover package with complete operational documentation.",
    image: "/images/company/showroom-1.jpeg"
  }
];

export const consultationChecklist = [
  {
    category: "Site & Plot Details",
    items: [
      "Exact plot dimensions (length x width in feet or meters)",
      "Site location and landmark in Bengaluru",
      "Approach road width (minimum 25-30 ft recommended for concrete transit mixers)",
      "Existing structure on site (vacant plot vs demolition required)"
    ]
  },
  {
    category: "Functional Requirements",
    items: [
      "Occupancy profile (number of bedrooms, attached baths, living zones)",
      "Special zones: Home office, pooja room, home theatre, utility balcony, lift provision",
      "Rental or tenant floors (separate electrical meters, external staircase access)",
      "Vehicle parking capacity (SUV + two-wheelers)"
    ]
  },
  {
    category: "Target Timeline & Approvals",
    items: [
      "Desired start month and target move-in / completion date",
      "Status of property documents (Sale deed, e-Khata, tax paid receipt)",
      "Budget expectations (standard, premium, or luxury finish specification)"
    ]
  }
];
