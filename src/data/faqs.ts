export interface FaqItem {
  id: string;
  category: "General" | "Construction & Cost" | "Design & 3D" | "Valuation" | "Execution & Approvals";
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FaqItem[] = [
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
    id: "faq-5",
    category: "Construction & Cost",
    question: "How are construction scope and estimates explained?",
    answer: "We provide an itemized Bill of Quantities (BOQ) detailing specific material brands, concrete grades, steel specifications, plumbing fittings, and stage-wise payment schedules. We never present ambiguous lump-sum figures.",
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
    id: "faq-9",
    category: "General",
    question: "Which areas of Bengaluru do you serve?",
    answer: "We serve clients across Greater Bengaluru, including HSR Layout, Koramangala, Indiranagar, Whitefield, Sarjapur Road, Electronic City, JP Nagar, Jayanagar, Bannerghatta Road, Hebbal, Yelahanka, and Kanakapura Road.",
    featuredOnHome: true
  },
  {
    id: "faq-10",
    category: "Execution & Approvals",
    question: "Can I view examples of completed or ongoing work?",
    answer: "Yes. You can explore our verified projects on our website, and for serious enquiries, we can arrange guided site visits to ongoing or recently completed projects in Bengaluru.",
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
    id: "faq-12",
    category: "Execution & Approvals",
    question: "How do you handle changes requested during active construction?",
    answer: "All scope modifications follow a documented variation protocol. We evaluate structural impact, calculate exact cost/timeline differences, and seek written approval before initiating any changes on site.",
    featuredOnHome: false
  }
];
