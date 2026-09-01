import { MoodType, SpaceCategory } from '../types';

export interface MoodData {
  id: MoodType;
  title: string;
  subtitle: string;
  quote: string;
  heroImage: string;
  palette: { name: string; hex: string }[];
  materialsText: string;
  recommendedProductIds: string[];
}

export const MOODS: MoodData[] = [
  {
    id: 'calm',
    title: 'Calm & Grounded',
    subtitle: 'Quiet Forms. Woven Textures. Soft Light.',
    quote: 'Woven textures. Natural tones. Quiet forms designed for pause and introspection.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    palette: [
      { name: 'Warm Ivory', hex: '#F5F2EC' },
      { name: 'Muted Taupe', hex: '#D8CFC4' },
      { name: 'Soft Greige', hex: '#C2B9AC' },
      { name: 'Raw Sand', hex: '#E2DACF' }
    ],
    materialsText: 'Textured Bouclé, Honed Travertine, Raw Linen, Bleached White Oak',
    recommendedProductIds: ['lahori-sofa', 'karachi-lounge', 'hunza-rug', 'taxila-floor-lamp']
  },
  {
    id: 'warm',
    title: 'Warm & Tactile',
    subtitle: 'Wood. Earth Tones. Welcoming Shapes.',
    quote: 'Rich timbers. Terracotta undertones. Tactile finishes that reward touch and age with grace.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    palette: [
      { name: 'Honey Walnut', hex: '#7A5230' },
      { name: 'Warm Sandstone', hex: '#D5C8B8' },
      { name: 'Earthy Ochre', hex: '#A87C51' },
      { name: 'Cognac Leather', hex: '#633B20' }
    ],
    materialsText: 'Kiln-Dried Walnut, Saddle Leather, Aged Brass, Hand-Spun Wool',
    recommendedProductIds: ['karachi-lounge', 'rawal-console', 'lahori-sofa', 'kaghan-bed']
  },
  {
    id: 'bold',
    title: 'Bold & Architectural',
    subtitle: 'Sculptural Pieces. Contrast. Character.',
    quote: 'Sculptural mass. High-contrast silhouettes. Confident architectural volumes that command attention.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    palette: [
      { name: 'Charcoal Noir', hex: '#24221F' },
      { name: 'Honed Black Marble', hex: '#35322E' },
      { name: 'Stark Plaster', hex: '#FAF8F5' },
      { name: 'Cast Bronze', hex: '#584C3F' }
    ],
    materialsText: 'Ebonized Oak, Charcoal Travertine, Cast Bronze, Smoked Glass',
    recommendedProductIds: ['peshawar-table', 'monolith-coffee-table', 'swat-mirror', 'murree-shelf']
  },
  {
    id: 'timeless',
    title: 'Timeless & Curated',
    subtitle: 'Noble Materials. Enduring Proportions.',
    quote: 'Enduring silhouettes. Natural stone and heirloom joinery that transcend passing design cycles.',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
    palette: [
      { name: 'Alabaster', hex: '#F7F4EE' },
      { name: 'Limestone Grey', hex: '#B5ACA1' },
      { name: 'Smoked Walnut', hex: '#4E4037' },
      { name: 'Antiqued Brass', hex: '#9E8865' }
    ],
    materialsText: 'Gandhara Travertine, Solid Ash, Brushed Brass, Heavy Belgian Flax',
    recommendedProductIds: ['lahori-sofa', 'peshawar-table', 'murree-shelf', 'rawal-console']
  },
  {
    id: 'contemporary',
    title: 'Contemporary & Clean',
    subtitle: 'Clean Lines. Modern Silhouettes.',
    quote: 'Low-profile geometry. Uncluttered sightlines. Light-filled spaces designed for refined modern living.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    palette: [
      { name: 'Pure Chalk', hex: '#FAF9F6' },
      { name: 'Raw Travertine', hex: '#DDD4C7' },
      { name: 'Graphite Metal', hex: '#3B3835' },
      { name: 'Muted Linen', hex: '#ECE6DC' }
    ],
    materialsText: 'Matte Steel, Fluted Ash, Polished Travertine, Geometric Weaves',
    recommendedProductIds: ['monolith-coffee-table', 'murree-shelf', 'taxila-floor-lamp', 'swat-mirror']
  }
];

export interface SpaceCategoryData {
  id: SpaceCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const SPACES: SpaceCategoryData[] = [
  {
    id: 'living',
    name: 'Living Room',
    tagline: 'The Anchor of the Home',
    description: 'Generous low-profile sectionals, monolithic travertine coffee tables, and tactile textiles designed for effortless entertaining and deep repose.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'bedroom',
    name: 'Bedroom Sanctuary',
    tagline: 'Quiet Architecture for Rest',
    description: 'Low platform timber beds, tailored linen headboards, and soothing ambient lighting crafted to foster stillness.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'dining',
    name: 'Dining & Gathering',
    tagline: 'Monumental Tables & Sculptural Seating',
    description: 'Solid ebonized oak tops with travertine pedestal pillars, paired with handcrafted dining chairs for memorable culinary evenings.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'office',
    name: 'The Study & Office',
    tagline: 'Focused Proportion & Material Restraint',
    description: 'Floating walnut executive desks, architectural shelving matrices, and ergonomic leather seating tailored for high-focus work.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'complete',
    name: 'Complete Home Curation',
    tagline: 'Holistic Spatial Architecture',
    description: 'End-to-end bespoke interior architecture, custom joinery, cohesive palette mapping, and white-glove turnkey installation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
  }
];
