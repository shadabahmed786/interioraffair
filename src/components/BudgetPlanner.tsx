import React, { useState } from 'react';
import { Check, Plus, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BudgetTier, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface BudgetPlannerProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({
  onSelectProduct,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [selectedTier, setSelectedTier] = useState<BudgetTier>('300k_500k');
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([
    'lahori-sofa',
    'monolith-coffee-table',
    'taxila-floor-lamp'
  ]);

  const tiers: { id: BudgetTier; name: string; budgetLimit: number; limitFormatted: string; tagline: string }[] = [
    {
      id: 'under_100k',
      name: 'Accent & Statement',
      budgetLimit: 100000,
      limitFormatted: 'PKR 100,000',
      tagline: 'Sculptural lighting, mirrors, and refined artisanal tables.'
    },
    {
      id: '100k_300k',
      name: 'Essential Living',
      budgetLimit: 300000,
      limitFormatted: 'PKR 300,000',
      tagline: 'Hero sectional or dining table paired with architectural accent.'
    },
    {
      id: '300k_500k',
      name: 'Complete Space Suite',
      budgetLimit: 500000,
      limitFormatted: 'PKR 500,000',
      tagline: 'Harmonized 3 to 4 piece living, dining, or master bedroom suite.'
    },
    {
      id: '500k_1m',
      name: 'Multi-Room Living + Dining',
      budgetLimit: 1000000,
      limitFormatted: 'PKR 1,000,000',
      tagline: 'Comprehensive living salon, monumental dining, and custom joinery.'
    },
    {
      id: '1m_plus',
      name: 'Turnkey Luxury Residence',
      budgetLimit: 2500000,
      limitFormatted: 'PKR 2,500,000+',
      tagline: 'Whole-home bespoke joinery, rare marble, custom upholstery.'
    }
  ];

  const currentTierObj = tiers.find((t) => t.id === selectedTier) || tiers[2];

  const toggleProductSelection = (id: string) => {
    if (selectedProductIds.includes(id)) {
      setSelectedProductIds(selectedProductIds.filter((item) => item !== id));
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const selectedProducts = selectedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const totalCalculated = selectedProducts.reduce((sum, p) => sum + (p.price || 0), 0);
  const remainingBudget = currentTierObj.budgetLimit - totalCalculated;
  const isOverBudget = remainingBudget < 0 && selectedTier !== '1m_plus';
  const percentageUsed = Math.min(100, Math.round((totalCalculated / currentTierObj.budgetLimit) * 100));

  const handleDiscussBudget = () => {
    const names = selectedProducts.map((p) => p.name).join(', ');
    const msg = `Hi Interior Affairs, I used your Budget Planner for the ${currentTierObj.name} scale (${currentTierObj.limitFormatted}). I selected: ${names}. Current estimated total: PKR ${totalCalculated.toLocaleString()}. I would like to discuss fabrication and custom sizing.`;
    onWhatsAppEnquiry(msg);
  };

  return (
    <div id="budget-planner-container" className="bg-[#FAF8F5] border border-[#E2DACF] p-4 sm:p-10 lg:p-14 shadow-sm">
      <div className="max-w-3xl mb-8 sm:mb-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#756557] mb-2 font-medium">
          Transparent Curation Tool
        </p>
        <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-3">
          I Have a Budget
        </h2>
        <p className="text-xs sm:text-sm text-[#756557] leading-relaxed">
          Select your target investment threshold. Explore how Interior Affairs finishes and solutions harmoniously combine within your boundary without sacrificing architectural materiality.
        </p>
      </div>

      {/* Tier Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
        {tiers.map((tier) => {
          const isSelected = selectedTier === tier.id;
          return (
            <button
              key={tier.id}
              id={`budget-tier-btn-${tier.id}`}
              onClick={() => setSelectedTier(tier.id)}
              className={`p-3 sm:p-3.5 text-left border transition-all duration-300 relative last:col-span-2 sm:last:col-span-1 cursor-pointer ${
                isSelected
                  ? 'border-[#24221F] bg-[#24221F] text-[#F5F2EC] shadow-md'
                  : 'border-[#E2DACF] bg-[#F5F2EC] text-[#24221F] hover:border-[#756557]'
              }`}
            >
              <span className={`text-[9px] uppercase tracking-wider block font-semibold ${isSelected ? 'text-[#D5C8B8]' : 'text-[#756557]'}`}>
                {tier.limitFormatted}
              </span>
              <span className="font-serif-editorial text-sm sm:text-base leading-tight block mt-1">
                {tier.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Budget Meter Card */}
      <div className="glass-card border border-[#D5C8B8] p-6 mb-10 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block font-medium">
              Investment Scale Target
            </span>
            <span className="font-serif-editorial text-2xl text-[#24221F]">
              {currentTierObj.name} · {currentTierObj.limitFormatted}
            </span>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block font-medium">
              Selected Pieces Total ({selectedProducts.length} Items)
            </span>
            <span
              className={`font-serif-editorial text-2xl font-semibold transition-colors duration-300 ${
                isOverBudget ? 'text-amber-900' : 'text-[#24221F]'
              }`}
            >
              PKR {totalCalculated.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Motion Animated Progress Bar */}
        <div className="w-full bg-[#E2DACF] h-2.5 overflow-hidden relative mb-2.5 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentageUsed}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className={`h-full rounded-full ${
              isOverBudget ? 'bg-amber-800' : 'bg-[#24221F]'
            }`}
          />
        </div>

        <div className="flex justify-between text-[11px] text-[#756557]">
          <span className="font-medium">
            {isOverBudget
              ? `Exceeds benchmark by PKR ${Math.abs(remainingBudget).toLocaleString()}`
              : `PKR ${remainingBudget.toLocaleString()} remaining in threshold`}
          </span>
          <span className="font-semibold">{percentageUsed}% Utilized</span>
        </div>
      </div>

      {/* Product Selection Grid */}
      <div className="mb-10">
        <div className="flex justify-between items-baseline mb-6 border-b border-[#E2DACF] pb-3">
          <h3 className="font-serif-editorial text-xl text-[#24221F]">
            Select Pieces for Your Composition
          </h3>
          <span className="text-xs text-[#756557]">Click any piece to toggle selection</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PRODUCTS.map((prod) => {
            const isSelected = selectedProductIds.includes(prod.id);
            return (
              <motion.div
                key={prod.id}
                id={`budget-product-toggle-${prod.id}`}
                onClick={() => toggleProductSelection(prod.id)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer p-3 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#24221F] bg-[#FAF8F5] shadow-md ring-1 ring-[#24221F]'
                    : 'border-[#E2DACF] bg-[#FAF8F5]/60 hover:border-[#756557]'
                }`}
              >
                <div>
                  <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden mb-3 relative">
                    <img
                      src={prod.images.primary}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      animate={{ scale: isSelected ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${
                        isSelected
                          ? 'bg-[#24221F] text-[#F5F2EC] shadow-sm'
                          : 'bg-[#F5F2EC]/80 text-[#756557]'
                      }`}
                    >
                      {isSelected ? <Check size={13} strokeWidth={2} /> : <Plus size={13} />}
                    </motion.div>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-[#756557]">
                    {prod.collection}
                  </span>
                  <h4 className="font-serif-editorial text-base text-[#24221F] leading-tight">
                    {prod.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#E2DACF] flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#24221F]">{prod.priceFormatted}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(prod);
                    }}
                    className="text-[10px] uppercase text-[#756557] hover:text-[#24221F] underline"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-[#E2DACF] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#756557]">
          * All Interior Affairs prices include finish selection and white-glove nationwide coordination.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            id="budget-discuss-whatsapp-btn"
            onClick={handleDiscussBudget}
            className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3.5 px-6 flex items-center justify-center gap-2 hover:bg-[#3A3835] transition-colors shadow-md"
          >
            <MessageCircle size={14} /> Discuss This Budget on WhatsApp
          </button>
          <button
            id="budget-book-consult-btn"
            onClick={onOpenConsultation}
            className="border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.16em] py-3.5 px-6 hover:bg-[#24221F] hover:text-[#F5F2EC] transition-colors"
          >
            Request Official Studio Quote
          </button>
        </div>
      </div>
    </div>
  );
};

