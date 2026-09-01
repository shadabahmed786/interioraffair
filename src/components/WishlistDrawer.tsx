import React from 'react';
import { X, Trash2, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  savedProducts,
  onRemoveFromWishlist,
  onSelectProduct,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const totalEstimate = savedProducts.reduce((acc, p) => acc + (p.price || 0), 0);
  const formattedTotal = `PKR ${totalEstimate.toLocaleString()}`;

  const handleDiscussOnWhatsApp = () => {
    const names = savedProducts.map((p) => p.name).join(', ');
    const message = `Hi Nora Interiors, I have curated a selection of ${savedProducts.length} pieces on your website (${names}). I would like to discuss room pairing, finish options, and a tailored quote for my space.`;
    onWhatsAppEnquiry(message);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="wishlist-drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#24221F]/60 backdrop-blur-sm flex justify-end"
          onClick={onClose}
        >
          <motion.div
            id="wishlist-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md sm:max-w-lg bg-[#F5F2EC] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-[#E2DACF]"
          >
            {/* Top bar */}
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#E2DACF]">
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#756557]">
                    Saved Portfolio
                  </p>
                  <h3 className="font-serif-editorial text-2xl text-[#24221F]">
                    Pieces You&apos;ve Saved ({savedProducts.length})
                  </h3>
                </div>
                <button
                  id="close-wishlist-btn"
                  onClick={onClose}
                  className="p-2 text-[#24221F] hover:opacity-60 transition-opacity"
                  aria-label="Close Wishlist"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Items List */}
              {savedProducts.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif-editorial text-xl text-[#24221F] mb-2">
                    Your saved portfolio is empty.
                  </p>
                  <p className="text-xs text-[#756557]">
                    Click the heart icon on any piece while exploring our catalog to save it here.
                  </p>
                </div>
              ) : (
                <div className="py-6 space-y-4 max-h-[58vh] overflow-y-auto pr-1">
                  {savedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-3 border border-[#E2DACF] bg-[#FAF8F5] group hover:border-[#24221F] transition-all"
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
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] uppercase tracking-wider text-[#756557]">
                              {product.collection}
                            </span>
                            <button
                              onClick={() => onRemoveFromWishlist(product.id)}
                              className="text-[#756557] hover:text-red-800 transition-colors p-1"
                              title="Remove from wishlist"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <h4 className="font-serif-editorial text-base text-[#24221F] truncate leading-tight">
                            {product.name}
                          </h4>
                          <p className="text-xs font-semibold text-[#24221F] mt-1">
                            {product.priceFormatted}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            onSelectProduct(product);
                          }}
                          className="text-[10px] uppercase tracking-wider text-[#24221F] hover:underline self-start font-medium flex items-center gap-1 mt-2"
                        >
                          View Details <ArrowRight size={10} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            {savedProducts.length > 0 && (
              <div className="pt-6 border-t border-[#E2DACF]">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#756557]">
                    Estimated Portfolio Total
                  </span>
                  <span className="font-serif-editorial text-2xl text-[#24221F] font-semibold">
                    {formattedTotal}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <button
                    id="wishlist-whatsapp-btn"
                    onClick={handleDiscussOnWhatsApp}
                    className="w-full bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3.5 px-4 text-center font-medium hover:bg-[#3A3835] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} /> Discuss Portfolio on WhatsApp
                  </button>
                  <button
                    id="wishlist-consultation-btn"
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="w-full border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.16em] py-3 px-4 text-center hover:bg-[#24221F] hover:text-[#F5F2EC] transition-colors"
                  >
                    Book a Design Consultation
                  </button>
                </div>

                <p className="text-[10px] text-center text-[#756557] mt-3">
                  Crafted in Islamabad · Custom dimensions and textile swatches available on request
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
