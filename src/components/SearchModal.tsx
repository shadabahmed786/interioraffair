import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, CornerDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onNavigateCategory: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigateCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedQueries = [
    'Sofas',
    'Travertine Tables',
    'Consoles',
    'Bouclé',
    'Lounge Chairs',
    'Architectural Shelving',
    'Custom Joinery',
    'Islamabad Residence'
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((product) => {
      return (
        product.name.toLowerCase().includes(q) ||
        product.collection.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.materials.some((m) => m.toLowerCase().includes(q)) ||
        product.moods.some((m) => m.toLowerCase().includes(q)) ||
        product.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="search-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#24221F]/80 backdrop-blur-md flex flex-col justify-start items-center p-4 sm:p-8 md:p-12 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[#F5F2EC] p-6 sm:p-10 md:p-14 shadow-2xl relative border border-[#E2DACF] my-auto min-h-[500px] flex flex-col"
          >
            {/* Close Button */}
            <button
              id="close-search-btn"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#24221F] hover:opacity-60 transition-opacity"
              aria-label="Close Search"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] mb-2 font-medium">
              Instant Architectural Search
            </span>

            {/* Input Header */}
            <div className="relative mb-8">
              <input
                id="search-modal-input"
                type="text"
                autoFocus
                placeholder="Search sofas, travertine, walnut, bouclé, or Islamabad projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF8F5] border-b-2 border-[#24221F] py-4 pr-12 text-lg sm:text-2xl font-serif-editorial text-[#24221F] placeholder:text-[#756557]/40 outline-none transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#756557]">
                <Search size={24} strokeWidth={1.5} />
              </div>
            </div>

            {/* Suggested Searches */}
            {!searchQuery && (
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-3 font-medium">
                  Popular Curations
                </span>
                <div className="flex flex-wrap gap-2">
                  {suggestedQueries.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="text-xs text-[#24221F] bg-[#FAF8F5] border border-[#E2DACF] px-3.5 py-1.5 hover:border-[#24221F] hover:bg-[#24221F] hover:text-[#F5F2EC] transition-all duration-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Grid */}
            <div className="flex-1 overflow-y-auto max-h-[50vh]">
              {searchQuery && searchResults.length === 0 && (
                <div className="py-12 text-center text-[#756557]">
                  <p className="font-serif-editorial text-xl text-[#24221F] mb-1">
                    No matching pieces found for &ldquo;{searchQuery}&rdquo;
                  </p>
                  <p className="text-xs">
                    Try searching for materials like &lsquo;walnut&rsquo;, &lsquo;marble&rsquo;, or categories like &lsquo;chairs&rsquo;.
                  </p>
                </div>
              )}

              {searchResults.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(product);
                      }}
                      className="cursor-pointer bg-[#FAF8F5] p-3 border border-[#E2DACF] hover:border-[#24221F] transition-all flex gap-4 group"
                    >
                      <div className="w-20 h-20 bg-[#E7E1D8] flex-shrink-0 overflow-hidden relative">
                        <img
                          src={product.images.primary}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-[#756557]">
                            {product.collection}
                          </span>
                          <h4 className="font-serif-editorial text-base text-[#24221F] truncate group-hover:text-[#756557] transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-[#756557] truncate mt-0.5">
                            {product.materials.join(' · ')}
                          </p>
                        </div>
                        <div className="flex justify-between items-center text-xs mt-2">
                          <span className="font-semibold text-[#24221F]">
                            {product.priceFormatted}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-[#24221F] font-semibold flex items-center gap-1 group-hover:underline">
                            Inspect <ArrowRight size={10} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-[#E2DACF] flex flex-col sm:flex-row justify-between items-center text-xs text-[#756557]">
              <span>Need custom dimensions? Request bespoke joinery from Interior Affairs.</span>
              <button
                onClick={() => {
                  onClose();
                  onNavigateCategory('custom');
                }}
                className="text-[#24221F] font-semibold underline underline-offset-4 mt-2 sm:mt-0 hover:opacity-70"
              >
                Explore Custom Commissions →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
