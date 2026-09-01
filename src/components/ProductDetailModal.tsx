import React, { useState } from 'react';
import {
  X,
  Heart,
  MessageCircle,
  Sparkles,
  Ruler,
  Layers,
  ShieldCheck,
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleWishlist: (productId: string) => void;
  onOpenConsultationWithProduct: (product: Product) => void;
  onSelectMatchingProduct: (product: Product) => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isSaved,
  onToggleWishlist,
  onOpenConsultationWithProduct,
  onSelectMatchingProduct,
  onWhatsAppEnquiry
}) => {
  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'materials' | 'dimensions' | 'care'>('details');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleWhatsApp = () => {
    if (!product) return;
    const finishName = product.finishes[selectedFinishIndex]?.name || 'Standard Finish';
    const message = `Hi Nora Interiors, I am interested in "${product.name}" in the "${finishName}" finish (${product.priceFormatted}). Could you please share availability, customization options, and delivery timeline for my room?`;
    onWhatsAppEnquiry(message);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const matchingProducts = product ? (product.matchingProductIds || [])
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p)) : [];

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          id="product-detail-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#24221F]/80 backdrop-blur-md flex justify-center items-start overflow-y-auto p-2 sm:p-6 lg:p-10"
        >
          <motion.div
            id="product-detail-modal-card"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="w-full max-w-6xl bg-[#F5F2EC] border border-[#E2DACF] shadow-2xl relative my-auto min-h-[90vh] overflow-hidden"
          >
        {/* Sticky Close Bar */}
        <div className="sticky top-0 z-30 bg-[#F5F2EC]/95 backdrop-blur-sm border-b border-[#E2DACF] px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#756557]">
            <span>{product.collection}</span>
            <span>·</span>
            <span>{product.category}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="p-2 text-[#24221F] hover:opacity-70 transition-opacity"
              title="Share piece"
              aria-label="Share piece"
            >
              {copiedLink ? <Check size={18} className="text-emerald-700" /> : <Share2 size={18} strokeWidth={1.5} />}
            </button>
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-2 transition-all ${
                isSaved ? 'text-[#24221F]' : 'text-[#756557] hover:text-[#24221F]'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save piece'}
              aria-label="Toggle Wishlist"
            >
              <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} strokeWidth={1.5} />
            </button>
            <button
              id="close-product-detail-btn"
              onClick={onClose}
              className="p-2 text-[#24221F] hover:opacity-60 transition-opacity border-l border-[#E2DACF] pl-4 ml-2"
              aria-label="Close detail modal"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Asymmetric Gallery */}
            <div className="lg:col-span-7 space-y-6">
              <div className="aspect-[4/3] sm:aspect-[4/3] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
                <img
                  src={product.images.primary}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.lifestyle && (
                <div className="aspect-[16/10] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
                  <img
                    src={product.images.lifestyle}
                    alt={`${product.name} lifestyle`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {product.images.detail && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
                    <img
                      src={product.images.hover || product.images.primary}
                      alt={`${product.name} alternate view`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
                    <img
                      src={product.images.detail}
                      alt={`${product.name} material detail`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Narrative & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#756557] mb-2">
                  {product.collection} · Nora Studio
                </p>
                <h1 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#24221F] leading-[1.1] mb-4">
                  {product.name}
                </h1>
                <p className="text-xl sm:text-2xl font-serif-editorial text-[#24221F] mb-6">
                  {product.priceFormatted}
                </p>

                <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* "Why We Chose This" Design Consultant Rationale */}
                {product.whyWeChoseThis && (
                  <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#24221F] mb-8">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#24221F] font-semibold mb-1">
                      <Sparkles size={13} />
                      Why Our Architects Chose This
                    </div>
                    <p className="text-xs text-[#756557] leading-relaxed italic">
                      &ldquo;{product.whyWeChoseThis}&rdquo;
                    </p>
                  </div>
                )}

                {/* Available Finishes Selector */}
                {product.finishes && product.finishes.length > 0 && (
                  <div className="mb-8">
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-3">
                      Selected Finish:{' '}
                      <span className="text-[#24221F] font-semibold">
                        {product.finishes[selectedFinishIndex].name}
                      </span>
                    </label>
                    <div className="flex gap-3">
                      {product.finishes.map((finish, idx) => (
                        <button
                          key={finish.name}
                          onClick={() => setSelectedFinishIndex(idx)}
                          className={`flex items-center gap-2 p-2 border transition-all text-xs ${
                            selectedFinishIndex === idx
                              ? 'border-[#24221F] bg-[#FAF8F5]'
                              : 'border-[#D5C8B8] hover:border-[#24221F]'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-black/20"
                            style={{ backgroundColor: finish.colorCode }}
                          />
                          <span className="text-[11px] text-[#24221F]">{finish.name.split('&')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dimensions Quick Reference */}
                <div className="py-3 border-y border-[#E2DACF] mb-8 flex justify-between items-center text-xs">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#756557]">
                    Standard Dimensions
                  </span>
                  <span className="font-medium text-[#24221F]">
                    {product.dimensions.description}
                  </span>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-3 mb-10">
                  <button
                    id="product-request-quote-btn"
                    onClick={() => {
                      onOpenConsultationWithProduct(product);
                    }}
                    className="w-full bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] font-medium py-4 px-6 hover:bg-[#383633] transition-colors flex items-center justify-center gap-2"
                  >
                    Request a Customized Quote
                  </button>

                  <button
                    id="product-whatsapp-inquire-btn"
                    onClick={handleWhatsApp}
                    className="w-full border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.18em] font-medium py-3.5 px-6 hover:bg-[#24221F] hover:text-[#F5F2EC] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    Inquire via WhatsApp Studio
                  </button>
                </div>

                {/* Specification Tabs */}
                <div className="border-t border-[#E2DACF] pt-6">
                  <div className="flex border-b border-[#E2DACF] gap-6 text-xs uppercase tracking-[0.14em]">
                    {(['details', 'materials', 'dimensions', 'care'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2.5 transition-colors relative ${
                          activeTab === tab
                            ? 'text-[#24221F] font-semibold'
                            : 'text-[#756557] hover:text-[#24221F]'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#24221F]" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="py-4 text-xs text-[#756557] leading-relaxed">
                    {activeTab === 'details' && (
                      <div className="space-y-2">
                        <p>{product.story}</p>
                        <p className="pt-2 text-[11px]">
                          <strong>Lead Time:</strong> {product.leadTime}
                        </p>
                      </div>
                    )}

                    {activeTab === 'materials' && (
                      <ul className="space-y-1.5 list-disc list-inside">
                        {product.materials.map((mat) => (
                          <li key={mat}>{mat}</li>
                        ))}
                      </ul>
                    )}

                    {activeTab === 'dimensions' && (
                      <div className="space-y-2">
                        <p>
                          <strong>Dimensions:</strong> {product.dimensions.description}
                        </p>
                        <p className="text-[11px] text-[#756557]">
                          Custom architectural scaling available upon request for residential and commercial commissions.
                        </p>
                      </div>
                    )}

                    {activeTab === 'care' && (
                      <ul className="space-y-1.5 list-disc list-inside">
                        {product.careInstructions.map((instruction) => (
                          <li key={instruction}>{instruction}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* White Glove Banner */}
              <div className="mt-8 pt-4 border-t border-[#E2DACF] flex items-center gap-3 text-[11px] text-[#756557]">
                <ShieldCheck size={16} className="text-[#24221F] flex-shrink-0" />
                <span>
                  Crafted in Pakistan with full 5-year structural warranty & white-glove Islamabad/Lahore installation.
                </span>
              </div>
            </div>
          </div>

          {/* Section: Complete The Room */}
          {matchingProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#E2DACF]">
              <div className="flex justify-between items-baseline mb-8">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#756557]">
                    Curated Ensemble
                  </p>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                    Complete The Room
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#756557]">
                  Designed to Live Beautifully Together
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matchingProducts.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => onSelectMatchingProduct(match)}
                    className="group cursor-pointer bg-[#FAF8F5] p-3 border border-[#E2DACF] hover:border-[#24221F] transition-all"
                  >
                    <div className="aspect-square bg-[#E7E1D8] overflow-hidden mb-3">
                      <img
                        src={match.images.primary}
                        alt={match.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-[#756557]">
                      {match.collection}
                    </p>
                    <h4 className="font-serif-editorial text-base text-[#24221F] group-hover:text-[#756557] transition-colors">
                      {match.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#24221F] mt-1">
                      {match.priceFormatted}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
);
};

