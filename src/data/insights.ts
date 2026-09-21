export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  h1: string;
  category: "Construction Guides" | "Design & Planning" | "Property Valuation" | "Cost & Budgeting";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string;
  }[];
}

export const insightsData: InsightArticle[] = [
  {
    id: "insight-1",
    slug: "house-construction-cost-bangalore-guide",
    title: "Understanding House Construction Costs in Bangalore: Factors, Variables & Budgeting",
    h1: "How House Construction Costs Work in Bangalore: A Practical Guide for Plot Owners",
    category: "Cost & Budgeting",
    readTime: "7 min read",
    publishDate: "January 2025",
    author: {
      name: "Er. Ramesh Kumar",
      role: "Lead Structural Engineer, My Space"
    },
    summary: "A transparent breakdown of what drives residential construction rates in Bengaluru—from soil conditions and foundation engineering to material specifications and finishing tiers.",
    heroImage: "/images/company/real-project-18.jpeg",
    metaTitle: "House Construction Cost in Bangalore Guide | My Space",
    metaDescription: "Understand the realistic variables governing house construction costs in Bangalore. Soil conditions, RCC structure, material tiers, and transparent budgeting.",
    keyTakeaways: [
      "Quoted per-sq.ft rates are meaningless without an itemized Bill of Quantities (BOQ).",
      "Foundation depth and soil bearing capacity can shift structural costs by 12-18%.",
      "Material quality tiers (cement grades, TMT steel, CPVC plumbing, joinery) determine long-term durability.",
      "Clear upfront architectural drawings prevent expensive mid-construction revisions."
    ],
    sections: [
      {
        heading: "1. The Myth of the Flat Per-Square-Foot Rate",
        content: "When plot owners begin planning a house in Bengaluru, the most common question asked is: 'What is your per square foot rate?' While standard turnkey ranges in Bangalore typically span between ₹1,800 to ₹3,200+ per sq.ft depending on specifications, treating construction as a single flat rate often leads to severe misunderstandings.\n\nA flat rate does not explain whether the foundation is designed for two floors or four floors, what grade of steel is used, whether terrace waterproofing uses single or triple-coat elastomeric membranes, or how electrical points are counted. True cost clarity requires an itemized Bill of Quantities (BOQ)."
      },
      {
        heading: "2. Key Drivers of Construction Costs in Bengaluru",
        content: "Several site-specific and design parameters dictate the final investment:\n\n• Soil & Sub-surface Conditions: Black cotton soil or filled land in areas like Sarjapur or Thanisandra requires deeper column footings or raft foundations compared to rocky soil in south Bengaluru.\n• Road Access & Urban Logistics: Narrow 20-ft lanes restrict large Ready-Mix Concrete (RMC) trucks, necessitating manual transit or smaller batches, which affects labour productivity.\n• Built-up Area & Structural Geometry: Large double-height living spaces, long cantilevered balconies, and curved architectural walls require heavier steel reinforcement and specialized shuttering formwork."
      },
      {
        heading: "3. Specifications: Standard, Premium, and Luxury",
        content: "The choice of finishes accounts for nearly 40% of the overall expenditure:\n\n• Structural Envelope: Certified 550D TMT rebars (Tata Tiscon / JSW Neosteel) and 53-grade OPC/PPC cement (UltraTech/ACC).\n• Flooring & Tiling: Vitrified tiles (₹60-₹110/sq.ft) vs. Italian Statuario marble (₹350-₹800/sq.ft).\n• Joinery & Windows: Standard UPVC vs. thermally broken aluminium systems or solid Burma Teakwood frames.\n• Plumbing & Sanitary: Standard Hindware/Parryware fittings vs. concealed diverters from Kohler, Grohe, or Toto."
      },
      {
        heading: "4. Protecting Your Project Against Hidden Overruns",
        content: "To ensure your home remains within budget:\n1. Lock in 2D floor plans and 3D elevations before casting the first footing.\n2. Ensure the contract clearly lists what is included (waterproofing, sump tank, compound wall) and excluded (BESCOM meter deposits, borewell).\n3. Enforce stage-wise payment milestones linked strictly to physical quality audits on-site."
      }
    ]
  },
  {
    id: "insight-2",
    slug: "elevation-design-vs-3d-floor-plans-explained",
    title: "3D Elevation vs 3D Floor Plan: What Each Delivers Before You Build",
    h1: "Why You Need Both 3D Elevation and 3D Floor Plans Before Breaking Ground",
    category: "Design & Planning",
    readTime: "5 min read",
    publishDate: "February 2025",
    author: {
      name: "Ar. Priya Natarajan",
      role: "Senior Architectural Visualizer, My Space"
    },
    summary: "Explore how 3D elevations shape your building's exterior character while 3D floor plans resolve internal ergonomics, furniture clearances, and natural ventilation.",
    heroImage: "/images/company/showroom-4.jpeg",
    metaTitle: "3D Elevation vs 3D Floor Plan Differences | My Space Bangalore",
    metaDescription: "Learn how 3D elevation design and 3D floor plan visualization work together to eliminate spatial uncertainty and costly site errors in Bangalore.",
    keyTakeaways: [
      "2D drawings show dimensions; 3D visualizations reveal human experience and proportion.",
      "3D Elevations verify sun shading, window balance, and exterior material combinations.",
      "3D Floor Plans reveal tight hallways, door-swing conflicts, and kitchen work triangle flow.",
      "Making design modifications in 3D software costs a fraction of breaking finished concrete on site."
    ],
    sections: [
      {
        heading: "1. The Limitation of 2D Blueprint Drawings",
        content: "While 2D architectural drawings are essential for municipal sanction and civil execution, they require spatial training to interpret. Most property owners struggle to gauge whether an 11x14 bedroom will feel spacious once a wardrobe and king-size bed are placed, or how a cantilevered roof will shade morning sunlight."
      },
      {
        heading: "2. What 3D Elevation Design Solves",
        content: "3D Elevation focuses on the exterior architectural envelope. It allows you to:\n• Evaluate façade textures: Balancing exposed brick, concrete micro-cement, timber louvers, and glass railings.\n• Study day and night illumination: Placing architectural downlights and wall-washers to highlight architectural volumes after sunset.\n• Coordinate municipal setbacks: Ensuring the exterior looks balanced and proportionate within plot boundaries."
      },
      {
        heading: "3. What 3D Floor Plans Solve",
        content: "3D Floor Plans provide an isometric cutaway view of the interior layout. Key benefits include:\n• Walking flow & spatial zoning: Ensuring clear movement between kitchen, dining, and living areas.\n• Furniture clearance checks: Verifying that bedside tables do not block balcony sliding doors or wardrobe shutters.\n• Natural light pathways: Confirming that internal courtyards or stairwell skylights illuminate dark central corridors."
      }
    ]
  },
  {
    id: "insight-3",
    slug: "property-valuation-documents-checklist-bangalore",
    title: "Property Valuation Checklist in Bangalore: Required Documents & Process",
    h1: "What You Need to Know for a Property Valuation in Bengaluru",
    category: "Property Valuation",
    readTime: "6 min read",
    publishDate: "February 2025",
    author: {
      name: "S. Venkatesh",
      role: "Senior Property Valuer, My Space"
    },
    summary: "A practical guide to the documents, physical inspection parameters, and valuation methodology used for bank loan collateral, capital gains tax, and property asset records in Bengaluru.",
    heroImage: "/images/company/real-project-75.jpeg",
    metaTitle: "Property Valuation Document Checklist Bangalore | My Space",
    metaDescription: "Essential guide to property valuation in Bangalore. Required title documents, physical inspection criteria, and fair market value assessment methods.",
    keyTakeaways: [
      "Valuation determines fair market and realizable asset value based on physical inspection and documentation.",
      "Key documents include Registered Sale Deed, e-Khata certificate, and latest tax receipts.",
      "Guideline value is the government stamp benchmark; Fair Market Value reflects true open-market demand.",
      "Valuation reports do not guarantee bank loan sanction; credit appraisal remains with the financial institution."
    ],
    sections: [
      {
        heading: "1. Common Purposes for Property Valuation",
        content: "Property valuation enquiries typically arise in several contexts:\n• Bank Mortgage / Home Loan Collateral: Financial institutions require an independent technical appraisal of the property value.\n• Purchase or Sale Decision: Buyers and sellers seeking an objective baseline valuation.\n• Capital Gains Tax Calculation: Determining the fair market value as of a specific cut-off date (e.g., April 1, 2001 indexation).\n• Visa / Overseas Immigration: Documenting net family asset worth.\n• Partition & Legal Succession: Equitable distribution of ancestral or family estate assets."
      },
      {
        heading: "2. Document Checklist for Bangalore Properties",
        content: "To facilitate a swift and accurate valuation, property owners should prepare:\n1. Copy of Registered Title Deed / Sale Deed / Partition Deed.\n2. Latest Khata Certificate and Khata Extract (e-Khata / BBMP 'A' Khata).\n3. Latest Property Tax Paid Receipt with PID/SAS number.\n4. Approved Building Plan Sanction (if an existing structure is on-site).\n5. Encumbrance Certificate (EC) covering minimum 15-30 years.\n6. Layout plan showing plot demarcation and approach road width."
      },
      {
        heading: "3. The Physical Inspection & Methodology",
        content: "During the inspection, the valuer records:\n• Physical plot boundaries and road width.\n• Age, structural quality, and maintenance condition of the building.\n• Built-up area measurement and verification against sanctioned plans.\n• Locality infrastructure: proximity to metro stations, tech parks, arterial roads, and Civic amenities.\n\nThe valuation applies the Land and Building Method: Land Value is calculated from prevailing market transactions and guideline rates, while Building Value is derived from replacement cost minus physical age depreciation (straight-line or sinking-fund method)."
      }
    ]
  }
];
