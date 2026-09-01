import { CuratedRoom } from '../types';

export const CURATED_ROOMS: CuratedRoom[] = [
  {
    id: 'margalla-sanctuary-living',
    name: 'The Margalla Minimalist Living Salon',
    slug: 'the-margalla-minimalist-living-salon',
    spaceType: 'living',
    mood: 'calm',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    description: 'A light-bathed living environment where architectural proportion and tactile material depth take precedence over ornamentation.',
    philosophy: 'To achieve the requested "Calm & Grounded" atmosphere, we prioritized materiality over ornamentation. The structural lines of the space are softened through the introduction of bouclé textiles and matte stone finishes, creating an environment that feels both curated and inherently livable.',
    palette: ['#F5F2EC', '#E7E1D8', '#615E57', '#24221F'],
    materialsSummary: 'Belgian Bouclé, Honed Rawal Travertine, Undyed Mountain Wool, Solid Pakistani Walnut',
    hotspots: [
      {
        id: 'spot-sofa',
        productId: 'lahori-sofa',
        xPercent: 36,
        yPercent: 62,
        label: 'The Lahori Sectional'
      },
      {
        id: 'spot-table',
        productId: 'monolith-coffee-table',
        xPercent: 62,
        yPercent: 74,
        label: 'Margalla Monolith Table'
      },
      {
        id: 'spot-chair',
        productId: 'karachi-lounge',
        xPercent: 82,
        yPercent: 58,
        label: 'Karachi Atelier Lounge'
      },
      {
        id: 'spot-lamp',
        productId: 'taxila-floor-lamp',
        xPercent: 18,
        yPercent: 44,
        label: 'Taxila Floor Lamp'
      }
    ],
    includedProductIds: ['lahori-sofa', 'monolith-coffee-table', 'karachi-lounge', 'hunza-rug', 'taxila-floor-lamp'],
    estimatedTotal: 733000,
    estimatedTotalFormatted: 'PKR 733,000'
  },
  {
    id: 'f8-executive-dining',
    name: 'Sector F-8 Architectural Dining Gallery',
    slug: 'f8-architectural-dining-gallery',
    spaceType: 'dining',
    mood: 'bold',
    heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop',
    description: 'Monumental travertine pedestals meeting ebonized oak and sculpted brass for a theatrical dining ambiance.',
    philosophy: 'Designed to foster conversation and celebration, contrasting organic natural light with rich charcoal wood grains and brushed brass accents.',
    palette: ['#24221F', '#D5C8B8', '#F5F2EC', '#7A5230'],
    materialsSummary: 'Ebonized Oak, Gandhara Travertine, Hand-Spun Wool, Antiqued Brass',
    hotspots: [
      {
        id: 'spot-dining-table',
        productId: 'peshawar-table',
        xPercent: 50,
        yPercent: 65,
        label: 'Peshawar Monolith Table'
      },
      {
        id: 'spot-console',
        productId: 'rawal-console',
        xPercent: 15,
        yPercent: 55,
        label: 'Rawal Travertine Console'
      },
      {
        id: 'spot-mirror',
        productId: 'swat-mirror',
        xPercent: 88,
        yPercent: 40,
        label: 'Swat Organic Mirror'
      }
    ],
    includedProductIds: ['peshawar-table', 'rawal-console', 'swat-mirror', 'hunza-rug'],
    estimatedTotal: 583000,
    estimatedTotalFormatted: 'PKR 583,000'
  },
  {
    id: 'kaghan-suite-bedroom',
    name: 'The Murree Pine Bedroom Suite',
    slug: 'the-murree-pine-bedroom-suite',
    spaceType: 'bedroom',
    mood: 'calm',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    description: 'A soothing private retreat wrapped in textured oatmeal linen, dark walnut floating side tables, and gentle indirect light.',
    philosophy: 'Stripping away modern visual clutter to prioritize sensory rest, tactile fabrics, and uninterrupted circulation around the sleeping pavilion.',
    palette: ['#F5F2EC', '#E2DACF', '#756557', '#363432'],
    materialsSummary: 'Textured Oatmeal Linen, Solid White Ash, Antiqued Brass, Raw Wool',
    hotspots: [
      {
        id: 'spot-bed',
        productId: 'kaghan-bed',
        xPercent: 50,
        yPercent: 60,
        label: 'Kaghan Low Platform Bed'
      },
      {
        id: 'spot-lamp-bed',
        productId: 'taxila-floor-lamp',
        xPercent: 20,
        yPercent: 48,
        label: 'Taxila Floor Lamp'
      },
      {
        id: 'spot-rug-bed',
        productId: 'hunza-rug',
        xPercent: 50,
        yPercent: 85,
        label: 'Hunza Wool Flatweave'
      }
    ],
    includedProductIds: ['kaghan-bed', 'taxila-floor-lamp', 'hunza-rug', 'swat-mirror'],
    estimatedTotal: 526000,
    estimatedTotalFormatted: 'PKR 526,000'
  }
];
