import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CuratedRoom, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface RoomHotspotViewerProps {
  room: CuratedRoom;
  onSelectProduct: (product: Product) => void;
  onRequestRoomPackage?: (room: CuratedRoom) => void;
}

export const RoomHotspotViewer: React.FC<RoomHotspotViewerProps> = ({
  room,
  onSelectProduct,
  onRequestRoomPackage
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const getProductById = (id: string): Product | undefined => {
    return PRODUCTS.find((p) => p.id === id);
  };

  return (
    <div id={`room-hotspot-viewer-${room.id}`} className="relative w-full overflow-hidden bg-[#E7E1D8]">
      {/* Main Interactive Room Image */}
      <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden group">
        <img
          src={room.heroImage}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Hotspots */}
        {room.hotspots.map((spot) => {
          const product = getProductById(spot.productId);
          if (!product) return null;
          const isSelected = activeHotspotId === spot.id;

          return (
            <div
              key={spot.id}
              style={{
                top: `${spot.yPercent}%`,
                left: `${spot.xPercent}%`
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                {/* Radar Ring Indicator */}
                {!isSelected && (
                  <span className="absolute inset-0 rounded-full bg-[#FAF8F5]/50 hotspot-pulse-ring pointer-events-none" />
                )}

                {/* Hotspot Target Button */}
                <button
                  id={`hotspot-trigger-${spot.id}`}
                  onClick={() => setActiveHotspotId(isSelected ? null : spot.id)}
                  onMouseEnter={() => setActiveHotspotId(spot.id)}
                  className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                    isSelected
                      ? 'bg-[#24221F] text-[#F5F2EC] scale-110 ring-4 ring-[#FAF8F5]/80'
                      : 'bg-[#F5F2EC]/90 text-[#24221F] hover:bg-[#24221F] hover:text-[#F5F2EC] border border-[#24221F]/20'
                  }`}
                  aria-label={`View ${spot.label}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                </button>

                {/* Popover Product Information Card */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      id={`hotspot-popover-${spot.id}`}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 glass-card p-4 shadow-2xl border border-[#E2DACF] z-30"
                      onMouseLeave={() => setActiveHotspotId(null)}
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={product.images.primary}
                          alt={product.name}
                          className="w-16 h-16 object-cover bg-[#E7E1D8] flex-shrink-0 border border-[#E2DACF]"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] uppercase tracking-widest text-[#756557] block truncate">
                            {product.collection}
                          </span>
                          <h4 className="font-serif-editorial text-sm font-semibold text-[#24221F] leading-tight truncate">
                            {product.name}
                          </h4>
                          <p className="text-xs text-[#24221F] font-medium mt-1">
                            {product.priceFormatted}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#E2DACF] flex justify-between items-center text-[11px]">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="text-[#24221F] uppercase tracking-wider font-semibold hover:underline flex items-center gap-1"
                        >
                          Inspect Piece <ArrowRight size={11} />
                        </button>
                        <span className="text-[10px] text-[#756557] truncate max-w-[100px]">
                          {product.materials[0]}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}

        {/* View Badge */}
        <div className="absolute top-6 left-6 z-10 glass-dark text-[#FAF8F5] px-4 py-2 flex items-center gap-2 border border-[#FAF8F5]/10">
          <Eye size={14} />
          <span className="text-[10px] tracking-[0.2em] uppercase">Interactive Scene Hotspots</span>
        </div>

        {/* Room Title & Package CTA */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 bg-gradient-to-t from-[#24221F]/90 via-[#24221F]/40 to-transparent z-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D5C8B8] block mb-1 font-medium">
              Curated Space Curation · {room.mood.toUpperCase()}
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5]">
              {room.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-xl mt-1 hidden md:block">
              {room.description}
            </p>
          </div>

          {onRequestRoomPackage && (
            <button
              id={`request-room-package-btn-${room.id}`}
              onClick={() => onRequestRoomPackage(room)}
              className="bg-[#FAF8F5] text-[#24221F] text-xs uppercase tracking-[0.16em] font-medium py-3.5 px-6 hover:bg-[#E7E1D8] transition-all duration-300 shadow-md whitespace-nowrap self-start sm:self-auto"
            >
              Request Room ({room.estimatedTotalFormatted})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

