import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isSaved: boolean;
  onToggleWishlist: (productId: string) => void;
  layoutVariant?: 'standard' | 'tall' | 'wide';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isSaved,
  onToggleWishlist
}) => {
  return (
    <article
      id={`product-card-${product.id}`}
      className="group flex flex-col justify-between h-full cursor-pointer bg-[#FAF8F5]/40 border border-transparent hover:border-[#E2DACF] p-3 transition-all duration-300"
    >
      <div>
        {/* Product Image Stage - Standardized 4/3 Aspect Ratio */}
        <div
          className="w-full aspect-[4/3] bg-[#E7E1D8] overflow-hidden relative mb-4 border border-[#E2DACF]/60 group-hover:border-[#24221F] transition-all duration-500"
          onClick={() => onSelect(product)}
        >
          {/* Primary Image */}
          <img
            src={product.images.primary}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              product.images.hover ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
            }`}
            loading="lazy"
          />

          {/* Hover Alternate / Lifestyle Image */}
          {product.images.hover && (
            <img
              src={product.images.hover}
              alt={`${product.name} in space`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          )}

          {/* Wishlist Button */}
          <button
            id={`wishlist-toggle-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isSaved
                ? 'bg-[#24221F] text-[#F5F2EC]'
                : 'bg-[#F5F2EC]/85 text-[#24221F] hover:bg-[#24221F] hover:text-[#F5F2EC] backdrop-blur-sm'
            }`}
            aria-label={isSaved ? 'Remove from saved' : 'Save piece'}
            title={isSaved ? 'Saved to Wishlist' : 'Save Piece'}
          >
            <Heart size={14} fill={isSaved ? 'currentColor' : 'none'} strokeWidth={1.5} />
          </button>

          {/* Category Tag */}
          <div className="absolute bottom-2.5 left-2.5 bg-[#24221F]/80 backdrop-blur-sm text-[#FAF8F5] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1">
            {product.category}
          </div>
        </div>

        {/* Collection & Name */}
        <div onClick={() => onSelect(product)}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#756557] mb-1 font-medium">
            {product.collection}
          </p>
          <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#24221F] leading-snug group-hover:text-[#756557] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#756557] mt-1 line-clamp-1">
            {product.materials.slice(0, 2).join(' · ')}
          </p>
        </div>
      </div>

      {/* Meta Price & Inspect Bar */}
      <div className="pt-3 mt-4 border-t border-[#E2DACF]/60 flex justify-between items-center" onClick={() => onSelect(product)}>
        <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#24221F]">
          {product.priceFormatted}
        </span>
        <span className="text-[10px] text-[#756557] uppercase tracking-wider group-hover:text-[#24221F] font-semibold flex items-center gap-0.5">
          Inspect <ArrowUpRight size={12} />
        </span>
      </div>
    </article>
  );
};

