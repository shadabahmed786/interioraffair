import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'lahori-sofa',
    name: 'The Lahori Sectional',
    slug: 'the-lahori-sectional',
    collection: 'Aura Collection',
    category: 'sofas',
    price: 320000,
    priceFormatted: 'PKR 320,000',
    isPriceOnRequest: false,
    shortDescription: 'A study in proportion and restraint. Deep low-profile seating grounded on hand-carved solid walnut plinth.',
    story: 'Conceived to anchor a spacious contemporary living room without cluttering sightlines. Handcrafted in our Islamabad workshop using kiln-dried Pakistani walnut and upholstered in imported textured bouclé with feather-blend down cushions.',
    whyWeChoseThis: 'This piece complements the calm earth tones of your space while establishing structural grounding and inviting natural light circulation.',
    materials: ['Solid Pakistani Walnut', 'Textured Belgian Bouclé', 'Feather Down Blend', 'High-Resiliency Core'],
    dimensions: {
      width: 280,
      depth: 105,
      height: 74,
      unit: 'cm',
      description: 'W 280 × D 105 × H 74 cm (Seat Height: 42 cm)'
    },
    finishes: [
      { name: 'Warm Ivory Bouclé & Walnut', colorCode: '#F3EFEA' },
      { name: 'Oatmeal Linen & Ebonized Ash', colorCode: '#D9D2C7' },
      { name: 'Charcoal Wool & Smoked Oak', colorCode: '#43403D' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'complete'],
    moods: ['calm', 'timeless', 'warm'],
    tags: ['Best Seller', 'Signature', 'Plinth Base'],
    leadTime: '4–6 Weeks Custom Build',
    careInstructions: [
      'Vacuum regularly with a soft upholstery brush attachment.',
      'Professional organic dry cleaning recommended for bouclé textiles.',
      'Wipe solid walnut plinth with a soft, lint-free cloth conditioned with beeswax oil twice a year.'
    ],
    inStock: true,
    matchingProductIds: ['monolith-coffee-table', 'rawal-console', 'hunza-rug', 'taxila-floor-lamp']
  },
  {
    id: 'peshawar-table',
    name: 'Peshawar Monolith Dining Table',
    slug: 'peshawar-monolith-dining-table',
    collection: 'Heritage Stone & Wood',
    category: 'tables',
    price: 245000,
    priceFormatted: 'PKR 245,000',
    isPriceOnRequest: false,
    shortDescription: 'Solid ebonized oak top with monolithic pillared legs carved from porous Rawal travertine.',
    story: 'Inspired by the monumental architectural pillars of Gandhara civilization. The table pairs a 50mm hand-planed solid oak top with twin geometric travertine pedestals sourced from northern quarries.',
    whyWeChoseThis: 'Provides heavy tactile contrast against delicate chairs and serves as the architectural centerpiece for intimate evening gatherings.',
    materials: ['Solid Pakistani Ebonized Oak', 'Hand-Honed Travertine Pillars', 'Matte Polyurethane Seal'],
    dimensions: {
      width: 240,
      depth: 100,
      height: 76,
      unit: 'cm',
      description: 'W 240 × D 100 × H 76 cm (Seats 8–10)'
    },
    finishes: [
      { name: 'Ebonized Black Oak & Raw Travertine', colorCode: '#262422' },
      { name: 'Natural White Oak & Sand Limestone', colorCode: '#C8B9A6' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['dining', 'complete'],
    moods: ['bold', 'timeless', 'contemporary'],
    tags: ['Architectural', 'Solid Stone', 'Sculptural'],
    leadTime: '5–7 Weeks Made to Order',
    careInstructions: [
      'Use coasters and placemats to preserve the natural stone porosity.',
      'Wipe down immediately with mild pH-neutral soap and warm water.',
      'Do not use acidic cleaners or abrasive scrubbers.'
    ],
    inStock: true,
    matchingProductIds: ['karachi-lounge', 'swat-mirror', 'rawal-console']
  },
  {
    id: 'karachi-lounge',
    name: 'Karachi Atelier Lounge Chair',
    slug: 'karachi-atelier-lounge-chair',
    collection: 'Aura Collection',
    category: 'chairs',
    price: 115000,
    priceFormatted: 'PKR 115,000',
    isPriceOnRequest: false,
    shortDescription: 'Organic curved solid walnut frame with relaxed stone linen seat and exposed brass joinery.',
    story: 'A tribute to mid-century modernism reimagined through South Asian woodworking heritage. Features ergonomic lumbar pitch and hand-rubbed Danish oil finish.',
    whyWeChoseThis: 'Its sculpted silhouette introduces visual lightness and organic warmth into any reading corner or lounge ensemble.',
    materials: ['Solid Dark Walnut', 'Heavy Belgian Flax Linen', 'Solid Antiqued Brass Pins'],
    dimensions: {
      width: 78,
      depth: 88,
      height: 78,
      unit: 'cm',
      description: 'W 78 × D 88 × H 78 cm (Seat Height: 39 cm)'
    },
    finishes: [
      { name: 'Walnut & Stone Natural Linen', colorCode: '#B8A99A' },
      { name: 'Ebonized Ash & Cognac Saddle Leather', colorCode: '#7A482A' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1580481077195-c9a7c34d3bb0?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'office', 'bedroom', 'complete'],
    moods: ['calm', 'warm', 'timeless'],
    tags: ['Iconic', 'Hand-rubbed Walnut', 'Signature'],
    leadTime: '3–4 Weeks Custom Build',
    careInstructions: [
      'Fluff cushion weekly to maintain feather loft.',
      'Treat walnut wood frame with organic furniture wax semi-annually.'
    ],
    inStock: true,
    matchingProductIds: ['lahori-sofa', 'monolith-coffee-table', 'taxila-floor-lamp']
  },
  {
    id: 'monolith-coffee-table',
    name: 'Margalla Monolith Coffee Table',
    slug: 'margalla-monolith-coffee-table',
    collection: 'Stone & Earth',
    category: 'tables',
    price: 135000,
    priceFormatted: 'PKR 135,000',
    isPriceOnRequest: false,
    shortDescription: 'Monolithic low-profile coffee table carved from a single slab of honed charcoal travertine.',
    story: 'Carved with intentional mass, the Margalla Monolith creates an immutable focal point in large minimalist seating plans. The natural veining is preserved and finished to a smooth satin touch.',
    whyWeChoseThis: 'Grounds the soft textures of the bouclé seating and provides rich horizontal balance.',
    materials: ['Honed Charcoal Travertine', 'Integrated Felt Bottom Glides'],
    dimensions: {
      width: 140,
      depth: 80,
      height: 32,
      unit: 'cm',
      description: 'W 140 × D 80 × H 32 cm'
    },
    finishes: [
      { name: 'Charcoal Travertine', colorCode: '#3A3835' },
      { name: 'Warm Cream Limestone', colorCode: '#E5DEC9' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'complete'],
    moods: ['bold', 'calm', 'contemporary'],
    tags: ['Solid Stone', 'Low Profile', 'Sculptural'],
    leadTime: '3–5 Weeks Hand Carved',
    careInstructions: [
      'Dust with microfibre cloth.',
      'Clean spills immediately to avoid staining natural travertine veins.'
    ],
    inStock: true,
    matchingProductIds: ['lahori-sofa', 'karachi-lounge', 'hunza-rug']
  },
  {
    id: 'murree-shelf',
    name: 'Murree Modular Brass & Oak System',
    slug: 'murree-modular-brass-oak-system',
    collection: 'Architectural Line',
    category: 'cabinets',
    price: 215000,
    priceFormatted: 'PKR 215,000',
    isPriceOnRequest: false,
    shortDescription: 'Floor-to-ceiling architectural open shelving with hand-brushed raw brass uprights and solid white oak credenza base.',
    story: 'Engineered as a flexible room partition or statement feature wall. The open brass matrix allows natural light to filter through while displaying collected art, ceramics, and books.',
    whyWeChoseThis: 'Introduces vertical rhythm and architectural height without feeling dense or blocking daylight.',
    materials: ['Solid Northern White Oak', 'Hand-Brushed Untreated Brass', 'Push-to-Open Soft Close Hardware'],
    dimensions: {
      width: 180,
      depth: 42,
      height: 210,
      unit: 'cm',
      description: 'W 180 × D 42 × H 210 cm'
    },
    finishes: [
      { name: 'Pale Oak & Brushed Brass', colorCode: '#D8C6A5' },
      { name: 'Smoked Walnut & Dark Bronzed Brass', colorCode: '#4A3B32' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'office', 'dining', 'complete'],
    moods: ['contemporary', 'timeless', 'bold'],
    tags: ['Architectural', 'Modular', 'Statement'],
    leadTime: '4–6 Weeks Custom Sizing Available',
    careInstructions: [
      'Brass will develop a subtle natural patina over time. Polish gently with dry microfiber.',
      'Treat oak cabinetry with natural wood conditioner annually.'
    ],
    inStock: true,
    matchingProductIds: ['rawal-console', 'taxila-floor-lamp', 'karachi-lounge']
  },
  {
    id: 'rawal-console',
    name: 'Rawal Fluted Travertine Console',
    slug: 'rawal-fluted-travertine-console',
    collection: 'Stone & Earth',
    category: 'consoles',
    price: 165000,
    priceFormatted: 'PKR 165,000',
    isPriceOnRequest: false,
    shortDescription: 'Precision fluted solid walnut drawer fascia paired with an oversized bevelled travertine top.',
    story: 'Designed for entryways and gallery corridors, the Rawal Console combines hand-milled fluted woodwork with a 30mm bullnose stone slab.',
    whyWeChoseThis: 'Sets an immediate tone of quiet luxury in foyer spaces and hallway galleries.',
    materials: ['Pakistani Fluted Walnut', 'Honed Rawal Travertine Slab', 'Concealed Soft-Close Drawers'],
    dimensions: {
      width: 160,
      depth: 38,
      height: 82,
      unit: 'cm',
      description: 'W 160 × D 38 × H 82 cm'
    },
    finishes: [
      { name: 'Fluted Walnut & Warm Travertine', colorCode: '#6B4C38' },
      { name: 'Fluted Ebonized Oak & Grey Marble', colorCode: '#2B2927' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'dining', 'bedroom', 'complete'],
    moods: ['warm', 'calm', 'timeless'],
    tags: ['Fluted Detail', 'Entryway', 'Sleek'],
    leadTime: '3–4 Weeks',
    careInstructions: [
      'Wipe down stone top with damp cloth.',
      'Keep walnut flute recesses dust-free with soft brush.'
    ],
    inStock: true,
    matchingProductIds: ['swat-mirror', 'taxila-floor-lamp']
  },
  {
    id: 'swat-mirror',
    name: 'Swat Organic Sculpted Arch Mirror',
    slug: 'swat-organic-sculpted-arch-mirror',
    collection: 'Aura Collection',
    category: 'mirrors',
    price: 78000,
    priceFormatted: 'PKR 78,000',
    isPriceOnRequest: false,
    shortDescription: 'Asymmetric floor-standing or wall-mount mirror with hand-carved solid ash frame and smoked tint mirror glass.',
    story: 'Features an organic arch silhouette inspired by the mountain contours of northern Swat valley. Each frame is shaped individually by master wood turners.',
    whyWeChoseThis: 'Expands the perceived depth of the room while serving as an expressive wall sculpture.',
    materials: ['Solid Ash Wood Frame', 'High-Definition Smoked Tint Mirror Glass', 'Heavy Duty French Cleat Hardware'],
    dimensions: {
      width: 90,
      depth: 5,
      height: 195,
      unit: 'cm',
      description: 'W 90 × D 5 × H 195 cm'
    },
    finishes: [
      { name: 'Natural Ash & Smoked Grey Mirror', colorCode: '#CBBFA8' },
      { name: 'Charcoal Ash & Bronzed Mirror', colorCode: '#363432' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'bedroom', 'dining', 'complete'],
    moods: ['bold', 'calm', 'contemporary'],
    tags: ['Floor Mirror', 'Organic Shape', 'Artisan Glass'],
    leadTime: '2–3 Weeks',
    careInstructions: [
      'Clean mirror glass with ammonia-free spray applied to a microfiber cloth.',
      'Do not spray directly onto the wood frame joints.'
    ],
    inStock: true,
    matchingProductIds: ['rawal-console', 'lahori-sofa']
  },
  {
    id: 'hunza-rug',
    name: 'Hunza Hand-Spun Wool Flatweave',
    slug: 'hunza-hand-spun-wool-flatweave',
    collection: 'Textiles & Craft',
    category: 'rugs',
    price: 95000,
    priceFormatted: 'PKR 95,000',
    isPriceOnRequest: false,
    shortDescription: 'Heavyweight hand-knotted natural undyed Pakistani mountain wool with subtle geometric ribbing.',
    story: 'Woven on traditional pit-looms by generational artisans using raw highland sheep wool. Unbleached, undyed, and richly textured for warm acoustic dampening.',
    whyWeChoseThis: 'Softens hard stone and concrete flooring while anchoring all seating pieces in a cohesive boundary.',
    materials: ['100% Undyed Mountain Wool', 'Organic Cotton Warp Foundation'],
    dimensions: {
      width: 300,
      depth: 240,
      height: 2,
      unit: 'cm',
      description: '300 × 240 cm (Custom sizes up to 600 × 400 cm)'
    },
    finishes: [
      { name: 'Raw Ivory & Sand', colorCode: '#EFEBE3' },
      { name: 'Heather Charcoal & Greige', colorCode: '#8B837A' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'bedroom', 'dining', 'complete'],
    moods: ['calm', 'warm', 'timeless'],
    tags: ['Hand-Woven', 'Undyed Wool', 'Acoustic Comfort'],
    leadTime: '3–4 Weeks Hand Loomed',
    careInstructions: [
      'Vacuum with suction only; do not use rotating beater bars.',
      'Blot liquid spills immediately with clean dry towel.',
      'Professional rug clean only.'
    ],
    inStock: true,
    matchingProductIds: ['lahori-sofa', 'monolith-coffee-table', 'karachi-lounge']
  },
  {
    id: 'taxila-floor-lamp',
    name: 'Taxila Cast Bronze & Linen Floor Lamp',
    slug: 'taxila-cast-bronze-linen-floor-lamp',
    collection: 'Architectural Lighting',
    category: 'lighting',
    price: 68000,
    priceFormatted: 'PKR 68,000',
    isPriceOnRequest: false,
    shortDescription: 'Slender architectural solid brass stem on cast bronze plinth with oversized natural Belgian linen drum shade.',
    story: 'Emits a warm 2700K diffused glow designed to create evening ambiance without harsh glare. Includes foot-step dimmer switch and braided textile cord.',
    whyWeChoseThis: 'Introduces a sculptural vertical line and creates calm evening mood lighting.',
    materials: ['Solid Hand-Antiqued Brass', 'Weighted Cast Bronze Plinth', 'Raw Belgian Linen Shade'],
    dimensions: {
      width: 48,
      depth: 48,
      height: 165,
      unit: 'cm',
      description: 'W 48 × D 48 × H 165 cm (Shade Dia: 48 cm)'
    },
    finishes: [
      { name: 'Aged Brass & Natural Linen', colorCode: '#9C8860' },
      { name: 'Matte Black Steel & Charcoal Linen', colorCode: '#2B2A28' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['living', 'bedroom', 'office', 'complete'],
    moods: ['calm', 'warm', 'contemporary'],
    tags: ['Architectural', 'Warm Glow', 'Hand-Cast'],
    leadTime: 'In Stock (2–4 Days Delivery)',
    careInstructions: [
      'Dust shade with dry microfiber cloth.',
      'Unplug before changing E27 warm LED filament bulb.'
    ],
    inStock: true,
    matchingProductIds: ['lahori-sofa', 'karachi-lounge', 'monolith-coffee-table']
  },
  {
    id: 'kaghan-bed',
    name: 'Kaghan Low Platform Upholstered Bed',
    slug: 'kaghan-low-platform-upholstered-bed',
    collection: 'Sanctuary Suite',
    category: 'sofas', // or custom bedroom
    price: 285000,
    priceFormatted: 'PKR 285,000',
    isPriceOnRequest: false,
    shortDescription: 'Extended architectural headboard with integrated floating nightstands in natural oak and tailored linen wrap.',
    story: 'Designed as a complete sleeping sanctuary. The low platform honors serene Japanese aesthetic sensibilities while utilizing Pakistani ash timber and premium tactile linens.',
    whyWeChoseThis: 'Creates a clutter-free, tranquil master bedroom environment that elevates rest.',
    materials: ['Solid White Ash Frame', 'Textured Oat Linen Weave', 'Integrated Wireless Charging Inlay'],
    dimensions: {
      width: 290,
      depth: 225,
      height: 90,
      unit: 'cm',
      description: 'King Size: W 290 (with nightstands) × D 225 × H 90 cm'
    },
    finishes: [
      { name: 'Oat Linen & Natural Ash', colorCode: '#E4DDD3' },
      { name: 'Charcoal Bouclé & Smoked Walnut', colorCode: '#45423F' }
    ],
    images: {
      primary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1600&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1600&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1600&auto=format&fit=crop'
    },
    spaceCategories: ['bedroom', 'complete'],
    moods: ['calm', 'timeless', 'warm'],
    tags: ['Sanctuary', 'Integrated Nightstands', 'Low Profile'],
    leadTime: '4–6 Weeks',
    careInstructions: [
      'Vacuum headboard quarterly.',
      'Rotate mattress every 6 months on sprung timber slats.'
    ],
    inStock: true,
    matchingProductIds: ['taxila-floor-lamp', 'swat-mirror', 'hunza-rug']
  }
];
