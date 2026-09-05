// Central Design System & Site Tokens

export const DESIGN_TOKENS = {
  colors: {
    primaryBase: '#FAF8F5',    // Pristine Cream
    pageBase: '#F5F2EC',       // Warm Travertine
    mutedSurface: '#E7E1D8',   // Warm Sandstone
    deepDarkBase: '#1C1A17',   // Obsidian Espresso
    primaryText: '#24221F',    // Charcoal Espresso
    secondaryText: '#756557',  // Warm Umber/Walnut
    warmAccent: '#D5C8B8',     // Champagne Brass
    borders: '#E2DACF',        // Stone Sand
    buttonHover: '#3D3A36',    // Deep Umber
    actionAccent: '#25D366',   // WhatsApp Emerald (Reserved exclusively for WhatsApp CTAs)
  },
  fonts: {
    heading: 'var(--font-playfair), var(--font-cormorant), serif',
    body: 'var(--font-jakarta), sans-serif',
  },
  glass: {
    light: 'rgba(245, 242, 236, 0.82)',
    dark: 'rgba(36, 34, 31, 0.88)',
  }
} as const;

export const SITE_CONFIG = {
  name: 'Interior Affairs',
  tagline: 'From Grey Structure to Finished Space',
  description: 'Complete turnkey interior solutions nationwide across Pakistan. Designer walls, custom kitchens, bespoke wardrobes, flooring, false ceilings, blinds, and architectural finishing.',
  url: 'https://interioraffairs.pk',
  phone: '+92 300 8504499',
  whatsapp: '+92 300 8504499',
  email: 'info@interioraffairs.pk',
  location: 'Nationwide Execution · Rawalpindi / Islamabad Studio',
  mapsUrl: 'https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6',
  hours: 'Mon — Sat: 10:00 AM — 08:00 PM',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  image: string;
  badge: string;
  features: string[];
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'designer-walls',
    number: '01',
    title: 'DESIGNER WALLS',
    headline: 'MAKE YOUR WALLS THE FEATURE.',
    description: 'Textured plaster, fluted panels, stone-clad accent walls, or matte decorative finishes — walls designed to be looked at, not just painted.',
    ctaText: 'Explore Designer Walls',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    badge: 'Accent Walls & Louvers',
    features: ['Textured Plaster & Micro-Cement', 'Fluted WPC & Wood Louvers', 'Backlit Stone-Clad Veneers', 'Matte Decorative Mouldings']
  },
  {
    id: 'kitchens',
    number: '02',
    title: 'KITCHENS',
    headline: 'DESIGNED AROUND THE WAY YOU LIVE.',
    description: 'Walnut and matte-lacquer cabinetry, soft-close hardware, and stone or quartz countertops, laid out around how you actually cook and gather — not a showroom template.',
    ctaText: 'Explore Kitchens',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Custom Cabinetry',
    features: ['Walnut & Matte-Lacquer Finish', 'Soft-Close Blum & Hettich Hardware', 'Seamless Quartz & Granite Countertops', 'Water-Resistant Marine Carcase']
  },
  {
    id: 'wardrobes',
    number: '03',
    title: 'WARDROBES',
    headline: 'STORAGE THAT BELONGS TO THE ROOM.',
    description: "Built-in, sliding, or walk-in — wardrobes fitted to your room's exact dimensions, with interior organization planned around what you actually own.",
    ctaText: 'Explore Wardrobes',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bespoke Storage',
    features: ['Floor-to-Ceiling Built-In Systems', 'Glass & Aluminum Sliding Doors', 'Custom Drawer Organizers & Shoe Racks', 'Integrated Motion-Sensor LED Strips']
  },
  {
    id: 'wallpapers',
    number: '04',
    title: 'WALLPAPERS',
    headline: 'GIVE YOUR WALLS A NEW CHARACTER.',
    description: 'Textured, botanical, or architectural wallpaper designs that add depth to a room in an afternoon, without a full renovation.',
    ctaText: 'Explore Wallpapers',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Imported Wall Coverings',
    features: ['Woven Silk & Fabric Textures', 'Architectural Geometric Patterns', 'Washable High-Durability Vinyl', 'Custom 3D Mural Wallpapers']
  },
  {
    id: 'flooring',
    number: '05',
    title: 'FLOORING',
    headline: 'START FROM THE GROUND UP.',
    description: 'Engineered wood, natural stone, and modern tile finishes selected for how the room is actually used — high-traffic durability where you need it, warmth where you want it.',
    ctaText: 'Explore Flooring',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Surface Precision',
    features: ['Engineered European Hardwood', 'Waterproof Interlocking SPC Planks', 'Polished Porcelain Tiles & Marble', 'High-Traffic Scratch-Resistant Finish']
  },
  {
    id: 'pvc-panels',
    number: '06',
    title: 'PVC PANELS',
    headline: 'CLEAN LINES. MODERN FINISHES.',
    description: 'Moisture-resistant, low-maintenance wall and ceiling panels with a clean architectural look — practical for kitchens, bathrooms, and high-use spaces.',
    ctaText: 'Explore PVC Panels',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    badge: 'Moisture-Resistant Cladding',
    features: ['100% Waterproof & Termite-Proof', 'High-Gloss & Matte Timber Textures', 'Fast & Dust-Free On-Site Installation', 'Ideal for High-Humidity Zones']
  },
  {
    id: 'blinds',
    number: '07',
    title: 'BLINDS',
    headline: 'CONTROL LIGHT. DEFINE THE SPACE.',
    description: 'Roller, motorized, and layered blind systems that manage light and privacy without hiding the view.',
    ctaText: 'Explore Blinds',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Light & Privacy Systems',
    features: ['Smart Motorized Remote Control', 'Dual-Shade Zebra Blinds', 'Thermal Blackout Roller Fabrics', 'Natural Timber Venetian Louvers']
  },
  {
    id: 'artificial-grass',
    number: '08',
    title: 'ARTIFICIAL GRASS',
    headline: 'BRING A TOUCH OF GREEN IN.',
    description: 'Low-maintenance, all-season artificial grass for terraces, balconies, and indoor green walls — no watering, no upkeep.',
    ctaText: 'Explore Artificial Grass',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    badge: 'Verdant Living Solutions',
    features: ['40mm Lush High-Density Pile', 'UV-Stabilized All-Weather Turf', 'Vertical Indoor Green Wall Panels', 'Zero Watering or Mowing Maintenance']
  },
  {
    id: 'false-ceilings',
    number: '09',
    title: 'FALSE CEILINGS',
    headline: 'LOOK UP. SEE THE DIFFERENCE.',
    description: 'Cove lighting, layered gypsum profiles, and clean minimal ceilings that hide wiring and AC ducting while finishing the room properly.',
    ctaText: 'Explore Ceilings',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Architectural Ceiling Design',
    features: ['Seamless Gyproc Gypsum Profiles', 'Concealed LED Cove & Magnetic Tracks', 'Integrated HVAC & Speaker Outlets', 'Layered Baffle & Acoustic Wooden Strips']
  },
  {
    id: 'golden-strips',
    number: '10',
    title: 'GOLDEN STRIPS',
    headline: 'DETAILS THAT MAKE A STATEMENT.',
    description: 'Brass and gold-finish inlay strips used sparingly, along wall panels, ceiling lines, or joinery edges, to add definition without overdoing it.',
    ctaText: 'Explore Golden Finishes',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop',
    badge: 'Metallic Inlays & Trim',
    features: ['Electroplated Stainless Steel T-Profiles', 'Brushed Antique Brass Inlays', 'Wall Panel & Tile Joint Transitions', 'Subtle Architectural Edge Definition']
  }
];

export interface SpaceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const SPACES_LIST: SpaceItem[] = [
  {
    id: 'living',
    title: 'LIVING ROOM',
    tagline: 'Where comfort meets character.',
    description: 'Designed as the central anchor of your home — combining acoustic cove ceilings, stone accent feature walls, custom seating layouts, and glare-free light control.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'bedroom',
    title: 'BEDROOM',
    tagline: 'Designed for comfort, calm and effortless organization.',
    description: 'A serene private sanctuary featuring built-in floor-to-ceiling wardrobes, tactile upholstered acoustic panels, warm indirect lighting, and blackout blinds.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'kitchen',
    title: 'KITCHEN',
    tagline: 'Where everyday living meets thoughtful design.',
    description: 'Custom walnut and matte-lacquer cabinetry engineered around how you cook, featuring durable quartz islands, water-resistant carcases, and Blum soft-close runners.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'dining',
    title: 'DINING',
    tagline: 'Spaces made for conversations and gatherings.',
    description: 'Atmospheric dining environments with statement cove lighting, brass golden inlay details, wood paneling, and stone surface finishes.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'office',
    title: 'OFFICE & STUDY',
    tagline: 'Functional environments designed to inspire productivity.',
    description: 'High-focus work environments engineered with integrated cable management, ergonomic custom shelving, acoustic wall treatments, and motorized window shades.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'complete',
    title: 'COMPLETE RESIDENCE',
    tagline: 'One vision, applied consistently from entryway to the last room.',
    description: 'Turnkey interior finishing from grey structure to move-in condition — walls, floors, ceilings, kitchens, wardrobes, and window treatments designed as one unified residence.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop'
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  timeline: string;
  heroImage: string;
  gallery: string[];
  brief: string;
  concept: string;
  materials: string;
  services: string[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'margalla-view-penthouse',
    title: 'Margalla View Penthouse',
    slug: 'margalla-view-penthouse',
    category: 'Complete Turnkey',
    location: 'Islamabad',
    year: '2024',
    timeline: '6 weeks from grey structure',
    heroImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
    ],
    brief: 'A 5,200 sq ft high-floor residence in Islamabad requiring end-to-end execution directly after raw grey structure hand-over.',
    concept: 'Warm contemporary luxury incorporating acoustic gypsum ceilings, walnut cabinetry, natural marble floors, and golden inlay accents.',
    materials: 'Gandhara Travertine, Solid Walnut Veneer, Electroplated Brass Strips, SPC Flooring, Imported Silk Wallpapers',
    services: ['Designer Walls', 'Custom Kitchen', 'False Ceilings', 'Flooring', 'Golden Strips', 'Blinds']
  },
  {
    id: 'bahria-heights-duplex',
    title: 'Bahria Heights Duplex',
    slug: 'bahria-heights-duplex',
    category: 'Residential',
    location: 'Rawalpindi',
    year: '2024',
    timeline: '5 weeks from grey structure',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop'
    ],
    brief: 'Complete multi-room residential fit-out for a young family transitioning from bare grey structure to a refined home.',
    concept: 'Clean architectural lines utilizing moisture-resistant PVC paneling, blackout motorized blinds, and custom wardrobes.',
    materials: 'Fluted PVC Louvers, Soft-Touch Matte Lacquer, SPC Hardwood Planks, Motorized Blackout Fabric',
    services: ['PVC Panels', 'Custom Wardrobes', 'Flooring', 'Blinds', 'False Ceilings']
  },
  {
    id: 'sector-e7-villa-suite',
    title: 'Sector E-7 Villa Suite',
    slug: 'sector-e7-villa-suite',
    category: 'Kitchen & Wardrobes',
    location: 'Islamabad',
    year: '2023',
    timeline: '4 weeks from design',
    heroImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop'
    ],
    brief: 'Targeted custom cabinetry intervention focusing on a high-spec main kitchen, prep kitchen, and master walk-in wardrobe.',
    concept: 'Seamless German hardware integration with dark walnut, quartz counter slabs, and golden T-strip accents.',
    materials: 'American Walnut Veneer, Quartz Slabs, Blum Soft-Close Runners, Electroplated Brass T-Strips',
    services: ['Custom Kitchens', 'Custom Wardrobes', 'Golden Strips']
  },
  {
    id: 'dha-phase2-executive-residence',
    title: 'DHA Phase 2 Executive Residence',
    slug: 'dha-phase2-executive-residence',
    category: 'Walls & Ceilings',
    location: 'Rawalpindi',
    year: '2024',
    timeline: '3 weeks execution',
    heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'
    ],
    brief: 'Statement wall and ceiling transformation for living, dining, and master reception areas.',
    concept: 'Sculptural false ceilings with indirect warm cove LEDs paired with micro-cement walls and brass inlay strips.',
    materials: 'Gyproc Gypsum, Micro-Cement Plaster, Imported Textured Wallpaper, Electroplated Gold Trim',
    services: ['Designer Walls', 'False Ceilings', 'Golden Strips', 'Wallpapers']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'CONSULTATION',
    description: 'We talk through your space, budget range, timeline, and what "finished" actually looks like for you.'
  },
  {
    step: '02',
    title: 'SITE VISIT',
    description: 'We measure, photograph, and assess structural condition, conduit routing, and natural light before design work starts.'
  },
  {
    step: '03',
    title: 'DESIGN & SPECIFICATION',
    description: 'We propose a unified direction: materials, ceiling profiles, modular cabinetry, and finishing details that work together.'
  },
  {
    step: '04',
    title: 'MATERIAL SELECTION',
    description: 'You review real physical material swatches and stone/lacquer samples — no guessing from 3D renders alone.'
  },
  {
    step: '05',
    title: 'COORDINATED EXECUTION',
    description: 'A single point of contact manages every trade on-site, preventing scheduling gaps and contractor conflicts.'
  },
  {
    step: '06',
    title: 'SNAGGING & HANDOVER',
    description: 'We walk the finished property with you, clear punch-list items on the spot, and hand over a space ready to live in.'
  }
];

export const FAQ_LIST = [
  {
    id: 'faq-1',
    question: 'Do you handle complete interior projects from grey structure?',
    answer: "Yes, that is our primary expertise. Walls, false ceilings, flooring, kitchens, wardrobes, blinds, and decorative finishes are coordinated under one team, so you're not managing five separate contractors."
  },
  {
    id: 'faq-2',
    question: 'Can I request execution for just a kitchen or single room?',
    answer: 'Absolutely. Single-room and targeted services — such as an accent wall, modular kitchen, or walk-in closet — receive the exact same precision and finish quality.'
  },
  {
    id: 'faq-3',
    question: 'Which cities do you serve in Pakistan?',
    answer: 'We provide turnkey execution nationwide across Pakistan, with active on-ground teams in Islamabad, Rawalpindi, Lahore, Peshawar, and Karachi.'
  },
  {
    id: 'faq-4',
    question: 'How do you quote and structure project pricing?',
    answer: 'We provide transparent, itemized estimates based on measured room dimensions and chosen material grades before work starts — with zero hidden site markups.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer site visits and 3D mockups?',
    answer: 'Yes. After our initial consultation, our architects conduct a detailed site inspection, take exact laser measurements, and generate layout directions.'
  },
  {
    id: 'faq-6',
    question: 'How quickly can I get a quotation?',
    answer: 'You can use our online Budget Calculator for an immediate ballpark range, or contact us directly on WhatsApp (+92 300 8504499) with floor plans for a 24-hour turnaround.'
  }
];
