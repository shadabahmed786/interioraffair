export type SpaceCategory = 'living' | 'bedroom' | 'dining' | 'office' | 'kitchen' | 'complete';

export type MoodType = 'calm' | 'warm' | 'bold' | 'timeless' | 'contemporary';

export type BudgetTier = 'under_100k' | '100k_300k' | '300k_500k' | '500k_1m' | '1m_plus';

export type ProductCategory = 'sofas' | 'tables' | 'consoles' | 'cabinets' | 'mirrors' | 'lighting' | 'rugs' | 'decor' | 'chairs' | 'living' | 'seating' | 'storage' | 'bedroom' | 'textiles' | 'objects';

export interface ProductFinish {
  name: string;
  colorCode: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  category: ProductCategory;
  price: number; // in PKR
  priceFormatted: string;
  isPriceOnRequest?: boolean;
  shortDescription: string;
  story: string;
  whyWeChoseThis?: string;
  materials: string[];
  dimensions: {
    width: number;
    depth: number;
    height: number;
    unit: string;
    description: string;
  };
  finishes: ProductFinish[];
  images: {
    primary: string;
    hover?: string;
    lifestyle?: string;
    detail?: string;
  };
  spaceCategories: SpaceCategory[];
  moods: MoodType[];
  tags: string[];
  leadTime: string;
  careInstructions: string[];
  inStock: boolean;
  matchingProductIds?: string[];
}

export interface RoomHotspot {
  id: string;
  productId: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  label: string;
}

export interface CuratedRoom {
  id: string;
  name: string;
  slug: string;
  spaceType: SpaceCategory;
  mood: MoodType;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  philosophy: string;
  palette: string[];
  materialsSummary: string;
  hotspots: RoomHotspot[];
  includedProductIds: string[];
  estimatedTotal: number;
  estimatedTotalFormatted: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  label: string; // e.g. "COMPLETE INTERIOR", "RESIDENTIAL", "KITCHEN & WARDROBES", "WALLS & CEILING"
  type: 'Residential' | 'Commercial' | 'Hospitality' | 'Office';
  year: string;
  heroImage: string;
  gallery: string[];
  brief: string;
  concept: string;
  materials: string;
  process: string;
  result: string;
  // Section 12 Project Detail fields
  startingCondition: string; // e.g. "an unfinished grey-structure apartment"
  concreteOutcomes: string; // e.g. "family gatherings and natural light"
  servicesUsed: string[]; // e.g. ["Designer Walls", "Custom Kitchen", "False Ceiling"]
  timeline: string; // e.g. "6 weeks, grey structure to handover"
  featuredProducts?: string[];
}

export interface ServiceDetail {
  id: string;
  title: string; // e.g. "DESIGNER WALLS"
  headline: string; // e.g. "MAKE YOUR WALLS THE FEATURE."
  description: string;
  ctaText: string; // e.g. "Explore Designer Walls →"
  image: string;
  badge?: string;
  features?: string[];
}

export interface SpaceItem {
  id: SpaceCategory;
  title: string; // e.g. "LIVING ROOM"
  tagline: string; // e.g. "Where comfort meets character."
  ctaText: string; // e.g. "Explore Living Rooms →"
  image: string;
  description: string;
}

export interface ProcessStepItem {
  step: string; // e.g. "01"
  title: string; // e.g. "CONSULTATION"
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DesignWizardState {
  space: SpaceCategory;
  mood: MoodType;
  budget: BudgetTier;
  roomPhotoUrl?: string;
  customNotes?: string;
}

export type ActivePage = 
  | 'home'
  | 'services'
  | 'spaces'
  | 'our-work'
  | 'projects'
  | 'our-process'
  | 'about'
  | 'our-story'
  | 'contact'
  | 'quote'
  | 'collections'
  | 'product-detail'
  | 'design-wizard'
  | 'shop-the-room'
  | 'custom'
  | 'interiors'
  | 'project-detail'
  | 'showroom'
  | 'wishlist'
  | 'budget'
  | 'budget-planner'
  | 'grey-structure';
