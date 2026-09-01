import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Sparkles, Check } from 'lucide-react';
import { Product, ProductCategory, MoodType, SpaceCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { MOODS } from '../data/moods';
import { ProductCard } from '../components/ProductCard';

interface CollectionsViewProps {
  onSelectProduct: (product: Product) => void;
  savedProductIds: string[];
  onToggleWishlist: (productId: string) => void;
  initialMood?: MoodType | null;
  initialCategory?: ProductCategory | 'all';
  onOpenConsultation: () => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  onSelectProduct,
  savedProductIds,
  onToggleWishlist,
  initialMood = null,
  initialCategory = 'all',
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(initialCategory || 'all');
  const [selectedMood, setSelectedMood] = useState<MoodType | 'all'>(initialMood || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Pieces' },
    { id: 'living', label: 'Living' },
    { id: 'seating', label: 'Seating' },
    { id: 'tables', label: 'Tables' },
    { id: 'storage', label: 'Storage & Consoles' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'textiles', label: 'Textiles & Rugs' },
    { id: 'objects', label: 'Mirrors & Objects' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedMood !== 'all') {
      list = list.filter((p) => p.moods.includes(selectedMood));
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list;
  }, [selectedCategory, selectedMood, sortBy]);

  return (
    <div id="collections-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Permanent Studio Collection
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Furniture Collections
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            Every piece is designed as an architectural anchor for the modern home. Hand-sculpted in Islamabad using local travertine stone, seasoned Pakistani timbers, and natural bouclé fabrics.
          </p>
        </div>

        {/* Filters and Control Bar */}
        <div className="border-y border-[#E2DACF] py-4 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Category Chips Desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-category-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs uppercase tracking-[0.14em] px-4 py-2 border transition-all ${
                    isSelected
                      ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                      : 'bg-transparent text-[#756557] border-[#D5C8B8] hover:border-[#24221F] hover:text-[#24221F]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full flex justify-between items-center">
            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="text-xs uppercase tracking-wider text-[#24221F] flex items-center gap-1.5 py-2 px-3 border border-[#24221F]"
            >
              <Filter size={13} /> Filter & Mood ({filteredProducts.length})
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border-b border-[#24221F] text-xs text-[#24221F] py-2 outline-none uppercase tracking-wider"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Mood Filter & Sorting Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#756557]">Mood:</span>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value as any)}
                className="bg-[#FAF8F5] border border-[#D5C8B8] text-xs text-[#24221F] px-3 py-1.5 outline-none uppercase tracking-wider"
              >
                <option value="all">All Atmospheres</option>
                {MOODS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 border-l border-[#E2DACF] pl-4">
              <span className="text-[10px] uppercase tracking-wider text-[#756557]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF8F5] border border-[#D5C8B8] text-xs text-[#24221F] px-3 py-1.5 outline-none uppercase tracking-wider"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters Accordion */}
        {showFiltersMobile && (
          <div className="md:hidden bg-[#FAF8F5] p-5 border border-[#E2DACF] mb-8 space-y-4 animate-in fade-in">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#756557] mb-2 font-semibold">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs uppercase px-3 py-1.5 border ${
                      selectedCategory === cat.id
                        ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                        : 'border-[#D5C8B8] text-[#756557]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#756557] mb-2 font-semibold">
                Atmosphere Mood
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedMood('all')}
                  className={`text-xs uppercase px-3 py-1.5 border ${
                    selectedMood === 'all'
                      ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                      : 'border-[#D5C8B8] text-[#756557]'
                  }`}
                >
                  All Moods
                </button>
                {MOODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMood(m.id)}
                    className={`text-xs uppercase px-3 py-1.5 border ${
                      selectedMood === m.id
                        ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                        : 'border-[#D5C8B8] text-[#756557]'
                    }`}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 text-xs text-[#756557] uppercase tracking-wider">
          <span>Showing {filteredProducts.length} Architecturally Crafted Pieces</span>
          {selectedCategory !== 'all' || selectedMood !== 'all' ? (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedMood('all');
              }}
              className="text-[#24221F] font-semibold underline underline-offset-4 hover:opacity-70"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center bg-[#FAF8F5] border border-[#E2DACF]">
            <p className="font-serif-editorial text-2xl text-[#24221F] mb-2">
              No matching pieces in this combination.
            </p>
            <p className="text-xs text-[#756557] max-w-sm mx-auto mb-6">
              Our workshop regularly produces custom commissions tailored to client specifications.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedMood('all');
              }}
              className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3 px-6"
            >
              View Full Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                isSaved={savedProductIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                layoutVariant={idx % 4 === 1 ? 'tall' : idx % 4 === 3 ? 'wide' : 'standard'}
              />
            ))}
          </div>
        )}

        {/* Bottom Bespoke Callout */}
        <div className="mt-24 p-8 sm:p-14 bg-[#FAF8F5] border border-[#E2DACF] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] block mb-2 font-medium">
              Bespoke Dimension Program
            </span>
            <h3 className="font-serif-editorial text-3xl text-[#24221F] mb-2">
              Every Piece Can Be Tailored For Your Space
            </h3>
            <p className="text-xs sm:text-sm text-[#756557] leading-relaxed">
              If your room requires a specific depth, higher seating, or alternate stone quarry slabs from Taxila or Swat, our Islamabad atelier will craft a 1-of-1 variation.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 px-8 whitespace-nowrap hover:bg-[#383633] transition-colors"
          >
            Consult With An Architect
          </button>
        </div>
      </div>
    </div>
  );
};
