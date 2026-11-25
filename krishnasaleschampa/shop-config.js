/**
 * KRISHNA SALES - PAINTS & HARDWARE
 * Official Store Configuration File
 */

window.SHOP_CONFIG = {
  // Brand & Identity
  brand: {
    name: "Krishna Sales",
    legalName: "Krishna Sales - Paints & Hardware",
    shortName: "Krishna Sales",
    tagline: "Paints, Waterproofing & Architectural Hardware Store",
    heroHeadingMain: "VIBRANT SPACES WITH",
    heroHeadingAccent: "PREMIUM PAINTS & HARDWARE",
    heroDescription: "Champa's trusted destination for luxury interior emulsions, heavy-duty all-weather exterior shields, advanced Dr. Fixit waterproofing, wall putties, and durable architectural hardware supplies.",
    badge: "Birla Opus Authorised Franchise Store",
    locationBadge: "Manjhali Talab, Station Road Champa",
    establishedYear: "2015",
    logoUrl: "assets/krishna-sales-logo.jpg"
  },

  // Contact & Social Links
  contact: {
    phoneDisplay: "+91 70679 05867",
    phoneHref: "+917067905867",
    whatsappDisplay: "+91 70679 05867",
    whatsappNumber: "917067905867", // WhatsApp international number without +
    whatsappDefaultMessage: "Hello Krishna Sales, I am inquiring about paints, waterproofing, and hardware supplies from your Champa store.",
    email: "krishnasales.champa@gmail.com",
    instagramHandle: "@krishnasales.champa",
    instagramUrl: "https://instagram.com",
    googleReviewUrl: "https://share.google/AkY2RAW7u3YG5uquY"
  },

  // Store Location & Operating Hours
  location: {
    addressLine1: "Manjhali Talab, Station Road, Shankar Nagar",
    addressLine2: "Near Railway Station, Janjgir-Champa District",
    city: "Champa",
    district: "Janjgir-Champa",
    state: "Chhattisgarh",
    pincode: "495671",
    country: "India",
    hoursWeekday: "Monday – Saturday: 8:30 AM – 8:30 PM",
    hoursSunday: "Sunday: 9:00 AM – 6:00 PM",
    hoursBadge: "Open Daily · 8:30 AM – 8:30 PM",
    googleMapsDirectionsUrl: "https://share.google/AkY2RAW7u3YG5uquY",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.258902581622!2d82.64560417937409!3d22.04639504899564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a277989eb254bb7%3A0x64e0da13e31464ff!2sChampa%2C%20Chhattisgarh%20495671!5e0!3m2!1sen!2sin!4v1716500000000!5m2!1sen!2sin"
  },

  // Key Statistics
  stats: [
    { label: "Google Business Rating", value: "4.9 ★", subtext: "Top rated store in Champa" },
    { label: "Years of Trust", value: "10+", subtext: "Serving Champa & Janjgir" },
    { label: "Products in Stock", value: "1,500+", subtext: "Paints, Tools & Fittings" },
    { label: "Computerized Shades", value: "2,500+", subtext: "Instant Precision Tinting" }
  ],

  // Storefront & Showroom Gallery (100% Real Snapshots from Krishna Sales Walkthrough Video)
  storefrontGallery: [
    {
      title: "Krishna Sales Storefront & Entrance",
      subtitle: "Station Road, Shankar Nagar, Champa",
      video: "assets/krishna-sales-storefront.mp4",
      image: "assets/storefront-snapshot-1.jpg",
      tag: "Storefront Video Tour"
    },
    {
      title: "Color Experience & Finishes Display Studio",
      subtitle: "Live architectural texture panels, finish swatches & shade tiles",
      image: "assets/storefront-snapshot-5.jpg",
      tag: "Color Studio"
    },
    {
      title: "Computerized Precision Shade Tinting Station",
      subtitle: "Birla Opus automated tinting machine & inventory racks",
      image: "assets/storefront-snapshot-6.jpg",
      tag: "Tinting & Stock"
    },
    {
      title: "Allwood Luxury Wood & Metal Enamels Rack",
      subtitle: "Specialized wood polishes, architectural lacquers & designer finishes",
      image: "assets/storefront-snapshot-7.jpg",
      tag: "Wood & Metal Finishes"
    },
    {
      title: "Official Authorized Dealership Board",
      subtitle: "Birla Opus & Asian Paints authorized retailer in Champa (Ph: 7067905867)",
      image: "assets/storefront-snapshot-9.jpg",
      tag: "Authorized Dealer"
    },
    {
      title: "Calista Sparkle Gloss Enamel Showcase",
      subtitle: "Premium high-sheen interior & exterior enamels in stock",
      image: "assets/storefront-snapshot-8.jpg",
      tag: "Enamel Collection"
    }
  ],

  // Product Categories
  categories: [
    { id: "all", name: "All Products" },
    { id: "interior", name: "Interior Paints" },
    { id: "exterior", name: "Exterior Weather Shields" },
    { id: "waterproofing", name: "Waterproofing & Primers" },
    { id: "hardware", name: "Hardware & Tools" },
    { id: "wood-metal", name: "Wood & Metal Enamels" }
  ],

  // Featured Products Catalog
  products: [
    {
      id: "krishna-luxury-interior",
      title: "Royale Luxury Washable Emulsion",
      category: "interior",
      categoryLabel: "Interior Luxury Emulsion",
      family: "Luxury Living Series",
      badge: "Top Seller",
      sheen: "Silken High Sheen",
      scrubResistance: "50,000+ Wash Cycles",
      warranty: "8-Year Durability",
      coverage: "140 – 160 sq.ft / Litre (2 coats)",
      description: "Ultra-premium stain-resistant washable interior paint that creates a luminescent silken glow. Tea, crayon, and ketchup marks easily wipe clean.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      highlights: ["Tough stain washability", "Teflon surface protector", "Zero smell & low VOC", "Silky smooth finish"]
    },
    {
      id: "krishna-exterior-armor",
      title: "All-Weather Ultimate Exterior Shield",
      category: "exterior",
      categoryLabel: "Exterior Heavy-Duty Shield",
      family: "Weather Armor",
      badge: "Monsoon & Heat Proof",
      sheen: "High-Performance Sheen",
      scrubResistance: "Tropical Storm Proof",
      warranty: "10-Year Weather Protection",
      coverage: "60 – 70 sq.ft / Litre",
      description: "Heavy-duty exterior paint formulated for high humidity, tropical monsoons, and scorching Chhattisgarh summers. Resists black algae and dust.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      highlights: ["Anti-algal bio-pack technology", "Heat reflective cool wall formulation", "Bridges hairline plaster cracks", "10-year color freshness"]
    },
    {
      id: "drfixit-dampguard-2k",
      title: "Dr. Fixit Dampguard 2K Waterproofing",
      category: "waterproofing",
      categoryLabel: "Advanced Waterproofing",
      family: "Waterproof Shield",
      badge: "Zero Leakage",
      sheen: "Hydrophobic Membrane",
      scrubResistance: "Up to 4 Bar Water Pressure",
      warranty: "7-Year Anti-Damp Guarantee",
      coverage: "25 – 30 sq.ft / Kg (2 coats)",
      description: "Two-component polymer modified elastomeric coating that permanently stops rising dampness, peeling paint, and efflorescence on interior and exterior walls.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      highlights: ["Resists negative & positive water pressure", "Breathable vapour permeable coating", "Prevents paint blistering and chalking", "Ideal for bathrooms, terraces & parapets"]
    },
    {
      id: "white-cement-wall-putty",
      title: "Premium Acrylic White Cement Wall Putty",
      category: "waterproofing",
      categoryLabel: "Wall Preparation & Putty",
      family: "Substrate Base",
      badge: "Smooth Foundation",
      sheen: "Ultra Smooth White Matt",
      scrubResistance: "High Tensile Bond",
      warranty: "Crack-Resistant Base",
      coverage: "12 – 16 sq.ft / Kg (2 coats)",
      description: "Superior white polymer-modified putty that fills undulations in plaster and provides a mirror-smooth base that reduces paint consumption by up to 25%.",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
      highlights: ["Prevents hairline wall cracks", "True white brilliance", "High water resistance", "Reduces paint consumption"]
    },
    {
      id: "godrej-brass-hardware",
      title: "Architectural Mortise Handles & Locks",
      category: "hardware",
      categoryLabel: "Door Hardware & Security",
      family: "Architectural Fittings",
      badge: "High Security",
      sheen: "Antique Brass / Satin Chrome",
      scrubResistance: "Anti-Corrosion Finish",
      warranty: "15-Year Mechanical Warranty",
      coverage: "Main & Bedroom Doors",
      description: "Heavy forged brass and stainless steel 304 mortise lock sets with computer-keyed brass cylinders for maximum home security and elegance.",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
      highlights: ["Solid forged brass construction", "Anti-drill computer key cylinder", "Tested for 200,000 cycles", "Rust & moisture resistant"]
    },
    {
      id: "pro-painter-tools-spray",
      title: "Heavy-Duty Painting Tools & Roller Kit",
      category: "hardware",
      categoryLabel: "Painter Supplies & Tools",
      family: "Contractor Gear",
      badge: "Contractor Grade",
      sheen: "Precision Finish",
      scrubResistance: "Solvent Resistant",
      warranty: "Professional Durability",
      coverage: "Multi-Surface Application",
      description: "High-density microfiber rollers, stainless steel putty blades, heavy-duty masking tapes, and sanding pads designed for effortless application.",
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
      highlights: ["Lint-free microfiber rollers", "Flexible stainless steel blades", "Clean peeling masking tapes", "Anti-fatigue ergonomic grips"]
    },
    {
      id: "wood-pu-luxury-polish",
      title: "PU Wood Polish & Gloss Enamel",
      category: "wood-metal",
      categoryLabel: "Wood & Metal Finishes",
      family: "Lustre Protection",
      badge: "High Gloss Mirror",
      sheen: "High Gloss / Rich Matt",
      scrubResistance: "Hot Water & Stain Proof",
      warranty: "5-Year Polish Retention",
      coverage: "90 – 110 sq.ft / Litre",
      description: "Polyurethane clear wood coating and synthetic metal enamels that enhance the natural grain of teak and sal wood while protecting iron gates from rust.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      highlights: ["Scratch & heat resistant", "Highlights natural timber grain", "Anti-yellowing UV barrier", "Superior anti-rust on iron gates"]
    },
    {
      id: "upvc-plumbing-fittings",
      title: "Heavy-Duty UPVC Pipes & Fittings",
      category: "hardware",
      categoryLabel: "Plumbing & Drainage Supplies",
      family: "Infrastructure Supplies",
      badge: "Leak-Proof",
      sheen: "Lead-Free Sanitary Grade",
      scrubResistance: "Pressure Rated",
      warranty: "Lifetime Performance",
      coverage: "Residential & Commercial",
      description: "High-pressure certified UPVC and CPVC plumbing pipes, ball valves, brass threaded elbows, and solvent cements for flawless water flow.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      highlights: ["100% lead-free & food-grade", "Resists up to 500 PSI pressure", "Corrosion and scale-free", "Smooth internal surface for max flow"]
    }
  ],

  // Service Journey (Stack feature)
  services: [
    {
      step: "01",
      title: "In-Store Color & Finish Consultation",
      tagline: "Explore over 2,500+ shades in real illumination",
      description: "Visit our Shankar Nagar store in Champa to view large-format physical shade tiles, texture sample panels, and experience true color tones under balanced lighting.",
      icon: "palette"
    },
    {
      step: "02",
      title: "Free On-Site Site Measurement & Moisture Check",
      tagline: "Accurate quantification prevents costly waste",
      description: "Our technical specialists visit your site in Champa, Janjgir, or nearby areas to measure wall carpet area and perform digital moisture tests before painting.",
      icon: "ruler"
    },
    {
      step: "03",
      title: "Automated Computerized Color Tinting",
      tagline: "Precision dispensing down to 0.05 ml",
      description: "Every paint can is mixed in our computerized dispensing machine with genuine factory colorants, guaranteeing 100% color repeatability across all batches.",
      icon: "cpu"
    },
    {
      step: "04",
      title: "100% Genuine Supplies & Doorstep Delivery",
      tagline: "Direct factory-sealed supplies to your door",
      description: "Every bucket, lock, and tool arrives factory sealed with authentic manufacturer warranties. We provide prompt delivery across Champa and Janjgir district.",
      icon: "truck"
    }
  ],

  // Real Finished Room Inspiration
  ideas: [
    {
      title: "Modern Minimalist Living Room",
      shade: "Royale Warm Ivory & Soft Sand",
      room: "Living Area",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Contemporary Villa Facade",
      shade: "Weather Armor Slate Charcoal & Pearl White",
      room: "Exterior Elevation",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Natural Teak & Brass Accent Wall",
      shade: "PU Natural Teak Finish & Warm Gold",
      room: "Dining / Lounge",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Serene Master Suite",
      shade: "Royale Luxury Muted Sage & Off-White",
      room: "Master Bedroom",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Customer Reviews & Social Proof (Verified Feedback)
  reviewsSummary: {
    averageRating: "4.9",
    totalReviews: "380+",
    recommendRate: "98%",
    source: "Google Business Verified",
    googleReviewUrl: "https://share.google/AkY2RAW7u3YG5uquY"
  },
  reviews: [
    {
      id: "rev-1",
      name: "Ramesh Dewangan",
      role: "Homeowner",
      location: "Shankar Nagar, Champa",
      project: "Full House Interior & Exterior",
      rating: 5,
      date: "3 days ago",
      text: "Krishna Sales is hands-down the best paint and hardware store in Champa. They gave honest advice on waterproofing our terrace and calculated exact paint requirements. Saved us over ₹12,000 on excess material. Highly recommended!",
      verified: true,
      initials: "RD"
    },
    {
      id: "rev-2",
      name: "Deepak Agrawal",
      role: "Building Contractor",
      location: "Janjgir-Champa",
      project: "Multi-Unit Commercial Project",
      rating: 5,
      date: "1 week ago",
      text: "As a contractor, I have been buying paints, Dr. Fixit waterproofing, and UPVC fittings from Krishna Sales for years. Always 100% genuine factory sealed products with timely site delivery. Best wholesale rates in the district.",
      verified: true,
      initials: "DA"
    },
    {
      id: "rev-3",
      name: "Sanjay Rathore",
      role: "Property Developer",
      location: "Station Road, Champa",
      project: "Exterior All-Weather Shield",
      rating: 5,
      date: "2 weeks ago",
      text: "Their computerized tinting machine is super fast. Got 12 buckets of custom exterior shade mixed in 20 minutes with zero shade variation. Very polite owner and transparent pricing with proper GST billing.",
      verified: true,
      initials: "SR"
    },
    {
      id: "rev-4",
      name: "Preeti Sahu",
      role: "Homeowner",
      location: "Manjhali Talab, Champa",
      project: "Living Room & Kitchen Renovation",
      rating: 5,
      date: "3 weeks ago",
      text: "The Royale Luxury Washable emulsion they recommended is unbelievable. My kids drew crayons on the wall and it cleaned off with just water and a sponge! Their color consultation made picking living room shades so easy.",
      verified: true,
      initials: "PS"
    },
    {
      id: "rev-5",
      name: "Mahendra Patel",
      role: "Civil Engineer & Builder",
      location: "Naila - Janjgir",
      project: "Roof Waterproofing & Hardware",
      rating: 5,
      date: "1 month ago",
      text: "We had severe seepage in our terrace slab. Krishna Sales provided Dr. Fixit 2K Damp Shield and guided our painter step-by-step. Not a single drop of leakage even during heavy monsoons. True experts!",
      verified: true,
      initials: "MP"
    },
    {
      id: "rev-6",
      name: "Arvind Verma",
      role: "Master Painter",
      location: "Champa",
      project: "Contractor Supplies & Putty",
      rating: 5,
      date: "1 month ago",
      text: "Main pichle 8 saal se Krishna Sales se hi samaan leta hoon. Putty, primer aur roller tools sab top quality rehte hain. Kabhi bhi duplicate ya purana maal nahi milta. Champa ka no. 1 paint shop!",
      verified: true,
      initials: "AV"
    },
    {
      id: "rev-7",
      name: "Rajeshwari Kashyap",
      role: "Villa Owner",
      location: "Korba Road, Champa",
      project: "Designer Texture & PU Polish",
      rating: 5,
      date: "1 month ago",
      text: "Bought Godrej brass mortise locksets, door handles, and PU wood polish for our new bungalow. The finishing and shine on teak doors is breathtaking. Genuine products with full warranty.",
      verified: true,
      initials: "RK"
    },
    {
      id: "rev-8",
      name: "Vikas Sharma",
      role: "Plumbing & Sanitary Contractor",
      location: "Shankar Nagar, Champa",
      project: "UPVC Pipes & Hardware Fittings",
      rating: 5,
      date: "2 months ago",
      text: "Huge stock of heavy-duty UPVC pipes, brass fittings, and construction fasteners. Fast counter service and instant delivery to job sites. No need to go to Bilaspur or Raipur for supplies.",
      verified: true,
      initials: "VS"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "Where is Krishna Sales located in Champa?",
      a: "Krishna Sales is conveniently located at Manjhali Talab, Station Road, Shankar Nagar, Champa, Chhattisgarh (PIN: 495671), very close to the railway station. Direct walk-ins are welcome everyday!"
    },
    {
      q: "Which paint and waterproofing brands do you supply?",
      a: "We are authorized dealers for leading brands including Asian Paints, Birla Opus, Berger, Dr. Fixit construction chemicals, Birla White Putty, Godrej hardware locks, and certified UPVC plumbing fittings."
    },
    {
      q: "Can you help estimate how much paint or waterproofing my house needs?",
      a: "Yes! Use our interactive Paint & Cost Calculator right on this website, or message us on WhatsApp with your carpet area. We also provide free on-site measurements across Champa and Janjgir."
    },
    {
      q: "Do you offer computerized custom color mixing?",
      a: "Yes, we house an advanced computerized color dispenser machine. Choose any shade from over 2,500+ color codes, and we dispense exact matching shades in under 3 minutes."
    },
    {
      q: "Do you supply bulk orders for contractors and builders?",
      a: "Yes! We specialize in wholesale project supply for homebuilders, architects, and painting contractors with bulk discount pricing, GST invoices, and free site dispatch."
    }
  ]
};
