export const siteConfig = {
  name: "My Space Engineering, Construction & Valuers",
  shortName: "My Space",
  tagline: "Complete Building Solutions Under One Roof",
  location: "Bangalore / Bengaluru, Karnataka, India",
  address: {
    street: "14/2, 2nd Floor, Outer Ring Road, HSR Layout Sector 5",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560102",
    country: "India",
  },
  contact: {
    phone: "+91 98450 12345",
    phoneDisplay: "+91 98450 12345",
    whatsapp: "+919845012345",
    email: "enquiry@myspacebangalore.com",
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  },
  meta: {
    defaultTitle: "My Space | Complete Building Solutions Under One Roof | Bangalore",
    titleTemplate: "%s | My Space Bangalore",
    description: "Complete building solutions under one roof in Bangalore: Turnkey residential construction, 2D/3D architectural planning, modular interiors, and certified property valuation with fixed milestone pricing.",
    url: "https://www.myspacebangalore.com",
    ogImage: "/images/hero-banner.jpg",
  },
  navLinks: [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "How It Works", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],
  serviceCategories: [
    {
      group: "Build",
      description: "Engineering-led structural and physical construction",
      items: [
        { name: "Residential Construction", href: "/services/house-construction-bangalore", desc: "Turnkey home and villa construction for own plots" },
        { name: "Commercial Construction", href: "/services/commercial-construction-bangalore", desc: "Offices, retail, clinics, and commercial fit-outs" },
        { name: "Civil & Structural Construction", href: "/services/civil-construction-bangalore", desc: "RCC, foundations, structural execution, and works" },
      ]
    },
    {
      group: "Design & Visualize",
      description: "Spatial planning, 3D clarity, and custom finishes",
      items: [
        { name: "Interior Design & Execution", href: "/services/interior-design-bangalore", desc: "Space planning, storage, materials, and execution" },
        { name: "3D Elevation Design", href: "/services/elevation-design-bangalore", desc: "Façade design, material palettes, and lighting studies" },
        { name: "3D Floor Plan Design", href: "/services/3d-floor-plan-design-bangalore", desc: "Spatial flow, furniture layout, and dimensioned views" },
      ]
    },
    {
      group: "Assess",
      description: "Structured property and document review",
      items: [
        { name: "Property Valuation", href: "/services/property-valuation-bangalore", desc: "Valuation enquiries for bank, sale, tax, or record purposes" },
      ]
    }
  ],
  serviceAreas: [
    "HSR Layout", "Koramangala", "Indiranagar", "Whitefield", "Sarjapur Road",
    "Electronic City", "Bellandur", "JP Nagar", "Jayanagar", "Bannerghatta Road",
    "Hebbal", "Yelahanka", "Thanisandra", "Devanahalli", "Kanakapura Road"
  ]
};
