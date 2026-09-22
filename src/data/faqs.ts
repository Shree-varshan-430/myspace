export interface FaqItem {
  id: string;
  category: "General" | "Construction & Cost" | "Design & 3D" | "Valuation" | "Execution & Approvals";
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FaqItem[] = [
  // --- GENERAL (5 FAQs) ---
  {
    id: "faq-1",
    category: "General",
    question: "I am not sure where to start. Can I still contact My Space?",
    answer: "Yes, absolutely. You do not need to have architectural drawings or full project specifications ready before contacting us. Tell us what you are planning to build or value, what is currently unclear, and our team will guide you through the first logical steps.",
    featuredOnHome: true
  },
  {
    id: "faq-2",
    category: "General",
    question: "Do you handle both residential and commercial construction?",
    answer: "Yes. We execute turnkey independent homes, duplexes, and villas, as well as commercial buildings, corporate offices, retail spaces, and clinics across Bengaluru.",
    featuredOnHome: true
  },
  {
    id: "faq-6",
    category: "General",
    question: "What information is useful for a first consultation?",
    answer: "Basic plot dimensions (e.g. 30x40, 40x60), site location in Bengaluru, your family or business functional requirements, any existing sketches/photos, and your intended start timeline.",
    featuredOnHome: true
  },
  {
    id: "faq-9",
    category: "General",
    question: "Which areas of Bengaluru do you serve?",
    answer: "We serve clients across Greater Bengaluru, including HSR Layout, Koramangala, Indiranagar, Whitefield, Sarjapur Road, Electronic City, JP Nagar, Jayanagar, Bannerghatta Road, Hebbal, Yelahanka, and Kanakapura Road.",
    featuredOnHome: true
  },
  {
    id: "faq-13",
    category: "General",
    question: "Do you offer integrated design and construction under a single contract?",
    answer: "Yes. Our turnkey design-and-build model combines architectural drafting, 3D visualization, structural engineering, civil execution, and interior joinery under a single accountable team with unified warranties.",
    featuredOnHome: true
  },

  // --- CONSTRUCTION & COST (5 FAQs) ---
  {
    id: "faq-5",
    category: "Construction & Cost",
    question: "How are construction scope and estimates explained?",
    answer: "We provide an itemized Bill of Quantities (BOQ) detailing specific material brands, concrete grades, steel specifications, plumbing fittings, and stage-wise payment schedules. We never present ambiguous lump-sum figures.",
    featuredOnHome: true
  },
  {
    id: "faq-11",
    category: "Construction & Cost",
    question: "What factors cause construction costs in Bangalore to vary?",
    answer: "Key cost drivers include soil bearing capacity (which dictates foundation depth/raft foundation needs), site approach width (affecting RMC and transport logistics), structural complexity (cantilevers, double-height voids), and choice of interior/exterior finishes.",
    featuredOnHome: false
  },
  {
    id: "faq-14",
    category: "Construction & Cost",
    question: "Are stage payments tied to physical site milestones or calendar dates?",
    answer: "All stage payments are strictly tied to verified physical on-site milestones (e.g., Plinth completion, Slab casting, Masonry completion, Plastering, Painting) and are only requested after engineering inspection and approval.",
    featuredOnHome: false
  },
  {
    id: "faq-15",
    category: "Construction & Cost",
    question: "What concrete and steel brands are included in your turnkey packages?",
    answer: "We use primary certified steel brands (Tata Tiscon, JSW Neosteel, SAIL Fe550D) and 53-grade OPC/PPC cements (Ultratech, ACC, Dalmia) with batch test certificates provided for every casting phase.",
    featuredOnHome: false
  },
  {
    id: "faq-16",
    category: "Construction & Cost",
    question: "Is there a price escalation clause if material costs rise during construction?",
    answer: "Our contracted unit rates for contracted specifications remain locked during the agreed project execution timeline, protecting clients against interim market material price surges.",
    featuredOnHome: false
  },

  // --- DESIGN & 3D (5 FAQs) ---
  {
    id: "faq-3",
    category: "Design & 3D",
    question: "Can I request only a floor plan, elevation, or 3D visualization?",
    answer: "Yes. You can engage My Space solely for standalone architectural 2D floor plans, 3D photorealistic elevations, or 3D interior renders with dimensioned execution drawings for your own contractor.",
    featuredOnHome: true
  },
  {
    id: "faq-4",
    category: "Design & 3D",
    question: "Do you provide interior design with execution support?",
    answer: "Yes. We design and execute complete residential and commercial interiors—including custom BWP modular kitchens, wardrobes, false ceilings, architectural lighting, and bespoke joinery.",
    featuredOnHome: true
  },
  {
    id: "faq-17",
    category: "Design & 3D",
    question: "How do 3D floor plans and isometric cutaways help in spatial planning?",
    answer: "3D floor plans show true-to-scale furniture clearances, door swings, and natural light pathways from a bird's-eye perspective, preventing costly on-site layout changes after walls are cast.",
    featuredOnHome: false
  },
  {
    id: "faq-18",
    category: "Design & 3D",
    question: "Do your architectural plans conform to Bangalore building bylaws and Vastu principles?",
    answer: "Yes. All plans strictly incorporate BBMP/BDA setback rules, Floor Area Ratio (FAR), height restrictions, and road width limits while optimizing Vastu orientations and natural cross-ventilation.",
    featuredOnHome: false
  },
  {
    id: "faq-19",
    category: "Design & 3D",
    question: "How many design revisions are included for 3D elevations and interior layouts?",
    answer: "We provide 2 structured refinement rounds following initial concept presentations, allowing you to fine-tune material textures, color palettes, and lighting before final drawing freeze.",
    featuredOnHome: false
  },

  // --- VALUATION (5 FAQs) ---
  {
    id: "faq-7",
    category: "Valuation",
    question: "How does a property or bank valuation enquiry work?",
    answer: "We follow a 5-step sequence: Enquire → Share documents (Sale Deed, Khata, tax receipts) → Physical site inspection → Technical assessment (land rate + depreciated structure value) → Detailed valuation report.",
    featuredOnHome: true
  },
  {
    id: "faq-8",
    category: "Valuation",
    question: "Does a property valuation guarantee bank loan approval?",
    answer: "No. A valuation assesses the fair market collateral value of the property. Loan sanction remains the sole decision of the lending bank or financial institution based on applicant eligibility and legal title clearance.",
    featuredOnHome: true
  },
  {
    id: "faq-20",
    category: "Valuation",
    question: "Are your valuation reports accepted by nationalized and private banks?",
    answer: "Yes. Our valuation dossiers are signed by Government-Registered Valuers under Section 34AB of the Wealth Tax Act and IBBI, recognized by all major scheduled commercial banks, NBFCs, and courts.",
    featuredOnHome: false
  },
  {
    id: "faq-21",
    category: "Valuation",
    question: "What is the turnaround time for a certified land or property valuation report?",
    answer: "Once complete title documents are shared and site inspection is completed, the certified valuation dossier is typically delivered within 2 to 4 business days.",
    featuredOnHome: false
  },
  {
    id: "faq-22",
    category: "Valuation",
    question: "Can property valuation reports be used for visa asset proof and Capital Gains Tax?",
    answer: "Yes. Our reports fulfill statutory requirements for Embassy visa financial proof, probate court filings, family property partitions, and Income Tax Capital Gains calculations (Section 54/54EC).",
    featuredOnHome: false
  },

  // --- EXECUTION & APPROVALS (5 FAQs) ---
  {
    id: "faq-10",
    category: "Execution & Approvals",
    question: "Can I view examples of completed or ongoing work?",
    answer: "Yes. You can explore our verified projects on our website, and for serious enquiries, we can arrange guided site visits to ongoing or recently completed projects in Bengaluru.",
    featuredOnHome: true
  },
  {
    id: "faq-12",
    category: "Execution & Approvals",
    question: "How do you handle changes requested during active construction?",
    answer: "All scope modifications follow a documented variation protocol. We evaluate structural impact, calculate exact cost/timeline differences, and seek written approval before initiating any changes on site.",
    featuredOnHome: false
  },
  {
    id: "faq-23",
    category: "Execution & Approvals",
    question: "How do you ensure waterproofing integrity for basements and rooftop slabs?",
    answer: "We apply multi-stage waterproofing: integral crystalline admixtures in concrete, double-layer elastomeric polymer membranes for sunken zones and terraces, and fiber mesh reinforced screeds with pond testing.",
    featuredOnHome: false
  },
  {
    id: "faq-24",
    category: "Execution & Approvals",
    question: "Do you provide dedicated site engineers and regular progress updates?",
    answer: "Yes. Every project has a dedicated site engineer conducting daily quality checks, with weekly progress reports, site photographs, and milestone tracking shared with you.",
    featuredOnHome: false
  },
  {
    id: "faq-25",
    category: "Execution & Approvals",
    question: "What documentation and warranties are handed over upon project completion?",
    answer: "We provide complete as-built architectural drawings, structural calculation dossiers, MEP conduit routing maps, manufacturer warranty cards, and our written structural and waterproofing warranties.",
    featuredOnHome: false
  }
];
