import { ServiceDetail, ProcessStepItem } from '../types';

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'designer-walls',
    title: 'DESIGNER WALLS',
    headline: 'MAKE YOUR WALLS THE FEATURE.',
    description: 'Textured plaster, fluted panels, stone-clad accent walls, or matte decorative finishes — walls designed to be looked at, not just painted.',
    ctaText: 'Explore Designer Walls →',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    badge: 'Accent Walls & Louvers',
    features: ['Textured Plaster & Micro-Cement', 'Fluted WPC & Wood Louvers', 'Backlit Stone-Clad Veneers', 'Matte Decorative Mouldings']
  },
  {
    id: 'kitchens',
    title: 'KITCHENS',
    headline: 'DESIGNED AROUND THE WAY YOU LIVE.',
    description: 'Walnut and matte-lacquer cabinetry, soft-close hardware, and stone or quartz countertops, laid out around how you actually cook and gather — not a showroom template.',
    ctaText: 'Explore Kitchens →',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Custom Cabinetry',
    features: ['Walnut & Matte-Lacquer Finish', 'Soft-Close Blum & Hettich Hardware', 'Seamless Quartz & Granite Countertops', 'Water-Resistant Marine Carcase']
  },
  {
    id: 'wardrobes',
    title: 'WARDROBES',
    headline: 'STORAGE THAT BELONGS TO THE ROOM.',
    description: "Built-in, sliding, or walk-in — wardrobes fitted to your room's exact dimensions, with interior organization planned around what you actually own.",
    ctaText: 'Explore Wardrobes →',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bespoke Storage',
    features: ['Floor-to-Ceiling Built-In Systems', 'Glass & Aluminum Sliding Doors', 'Custom Drawer Organizers & Shoe Racks', 'Integrated Motion-Sensor LED Strips']
  },
  {
    id: 'wallpapers',
    title: 'WALLPAPERS',
    headline: 'GIVE YOUR WALLS A NEW CHARACTER.',
    description: 'Textured, botanical, or architectural wallpaper designs that add depth to a room in an afternoon, without a full renovation.',
    ctaText: 'Explore Wallpapers →',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Imported Wall Coverings',
    features: ['Woven Silk & Fabric Textures', 'Architectural Geometric Patterns', 'Washable High-Durability Vinyl', 'Custom 3D Mural Wallpapers']
  },
  {
    id: 'flooring',
    title: 'FLOORING',
    headline: 'START FROM THE GROUND UP.',
    description: 'Engineered wood, natural stone, and modern tile finishes selected for how the room is actually used — high-traffic durability where you need it, warmth where you want it.',
    ctaText: 'Explore Flooring →',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Precision Surface Solutions',
    features: ['Engineered European Hardwood', 'Waterproof Interlocking SPC Planks', 'Polished Porcelain Tiles & Marble', 'High-Traffic Scratch-Resistant Finish']
  },
  {
    id: 'pvc-panels',
    title: 'PVC PANELS',
    headline: 'CLEAN LINES. MODERN FINISHES.',
    description: 'Moisture-resistant, low-maintenance wall and ceiling panels with a clean architectural look — practical for kitchens, bathrooms, and high-use spaces.',
    ctaText: 'Explore PVC Panels →',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    badge: 'Low-Maintenance Cladding',
    features: ['100% Waterproof & Termite-Proof', 'High-Gloss & Matte Timber Textures', 'Fast & Dust-Free On-Site Installation', 'Ideal for High-Humidity Zones']
  },
  {
    id: 'blinds',
    title: 'BLINDS',
    headline: 'CONTROL LIGHT. DEFINE THE SPACE.',
    description: 'Roller, motorized, and layered blind systems that manage light and privacy without hiding the view.',
    ctaText: 'Explore Blinds →',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Light & Privacy Control',
    features: ['Smart Motorized Remote Control', 'Dual-Shade Zebra Blinds', 'Thermal Blackout Roller Fabrics', 'Natural Timber Venetian Louvers']
  },
  {
    id: 'artificial-grass',
    title: 'ARTIFICIAL GRASS',
    headline: 'BRING A TOUCH OF GREEN IN.',
    description: 'Low-maintenance, all-season artificial grass for terraces, balconies, and indoor green walls — no watering, no upkeep.',
    ctaText: 'Explore Artificial Grass →',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    badge: 'Verdant Outdoor & Indoor Living',
    features: ['40mm Lush High-Density Pile', 'UV-Stabilized All-Weather Turf', 'Vertical Indoor Green Wall Panels', 'Zero Watering or Mowing Maintenance']
  },
  {
    id: 'false-ceilings',
    title: 'FALSE CEILINGS',
    headline: 'LOOK UP. SEE THE DIFFERENCE.',
    description: 'Cove lighting, layered gypsum profiles, and clean minimal ceilings that hide wiring and AC ducting while finishing the room properly.',
    ctaText: 'Explore Ceilings →',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    badge: 'Architectural Ceiling Design',
    features: ['Seamless Gyproc Gypsum Profiles', 'Concealed LED Cove & Magnetic Tracks', 'Integrated HVAC & Speaker Outlets', 'Layered Baffle & Acoustic Wooden Strips']
  },
  {
    id: 'golden-strips',
    title: 'GOLDEN STRIPS',
    headline: 'DETAILS THAT MAKE A STATEMENT.',
    description: 'Brass and gold-finish inlay strips used sparingly, along wall panels, ceiling lines, or joinery edges, to add definition without overdoing it.',
    ctaText: 'Explore Golden Finishes →',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    badge: 'Metallic Inlay Details',
    features: ['Electroplated Stainless Steel T-Profiles', 'Brushed Antique Brass Inlays', 'Wall Panel & Tile Joint Transitions', 'Subtle Architectural Edge Definition']
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    description: 'We talk through your space, your budget range, your timeline, and what "finished" actually looks like for you.'
  },
  {
    step: '02',
    title: 'SITE VISIT',
    description: 'We measure, photograph, and assess the property — structural condition, existing wiring and plumbing, natural light — before any design decision is made.'
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'We propose a direction: materials, layout, ceiling treatment, and finishing details that work together, not just individually.'
  },
  {
    step: '04',
    title: 'SELECTION',
    description: 'You choose from real material samples and finish swatches — not just renders — so there are no surprises on installation day.'
  },
  {
    step: '05',
    title: 'EXECUTION',
    description: 'Our team installs to the agreed design, with a single point of contact managing every trade so nothing falls through the cracks.'
  },
  {
    step: '06',
    title: 'HANDOVER',
    description: 'We walk the finished space with you, address any final punch-list items on the spot, and hand over a space that\'s actually ready to move into.'
  }
];

export const CUSTOM_FURNITURE_STEPS = PROCESS_STEPS.map((s) => ({
  number: s.step,
  title: s.title,
  tagline: s.title,
  description: s.description
}));

export const INTERIOR_DESIGN_PHASES = PROCESS_STEPS.map((s) => ({
  number: `Phase ${s.step}`,
  title: s.title,
  tagline: s.title,
  description: s.description
}));

export const SHOWROOM_INFO = {
  name: 'Interior Affairs Studio',
  location: 'Nationwide Execution · Pakistan',
  address: 'Turnkey Execution Nationwide, Pakistan',
  mapsUrl: 'https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6',
  phone: '+92 300 8504499',
  whatsapp: '+92 300 8504499',
  email: 'info@interioraffairs.pk',
  hours: [
    { days: 'Monday — Saturday', time: '10:00 AM — 08:00 PM' },
    { days: 'Sunday', time: 'By Appointment' }
  ],
  features: [
    'Everything after Grey Structure under one roof',
    'Designer Walls, Modular Kitchens & Walk-in Wardrobes',
    'Imported Wall Papers, SPC Flooring, PVC Panels & Blinds',
    'False Ceilings, Artificial Grass & Metallic Golden Strips',
    'On-site consultation & 3D spatial renders nationwide'
  ]
};

export const MATERIALS_CURATED_LIST = [
  'Walls',
  'Flooring',
  'Ceilings',
  'Kitchens',
  'Wardrobes',
  'Wallpapers',
  'PVC Panels',
  'Blinds',
  'Decorative Finishes'
];

export const GREY_STRUCTURE_SERVICES = SERVICES_LIST.map((s) => ({
  id: s.id,
  name: s.title,
  tagline: s.headline,
  description: s.description,
  image: s.image,
  ctaText: s.ctaText
}));
