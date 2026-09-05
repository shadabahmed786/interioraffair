'use client';

import React, { useState } from 'react';
import { Calculator, Check, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ScopeTier {
  id: string;
  name: string;
  rangePKR: string;
  description: string;
  inclusions: string[];
}

const TIERS: ScopeTier[] = [
  {
    id: 'accent-room',
    name: 'Feature Room / Accent Scope',
    rangePKR: 'PKR 450,000 — 950,000',
    description: 'Targeted transformation for a living lounge, reception accent wall, or master bedroom.',
    inclusions: [
      'Textured plaster or fluted panel accent wall',
      'Gypsum false ceiling profile with warm LED cove',
      'Designer blinds or imported wallpaper treatment',
      'Brass / metallic golden strip details'
    ]
  },
  {
    id: 'modular-kitchen',
    name: 'Custom Kitchen & Island Fitout',
    rangePKR: 'PKR 1,200,000 — 2,400,000',
    description: 'Full modular kitchen fabrication built to exact measurements with heavy-duty German hardware.',
    inclusions: [
      'Walnut veneer or matte-lacquer cabinetry',
      'Seamless quartz or granite countertops',
      'Blum / Hettich soft-close runners and hinges',
      'Integrated under-cabinet LED task lighting'
    ]
  },
  {
    id: 'full-apartment',
    name: 'Complete Apartment Fitout',
    rangePKR: 'PKR 2,800,000 — 5,500,000',
    description: 'Turnkey interior finishing for a 2–3 bedroom apartment starting directly from bare grey structure.',
    inclusions: [
      'Complete false ceilings and recessed lighting',
      'Modular kitchen & master walk-in wardrobe',
      'SPC hardwood / porcelain surface flooring',
      'Accent walls, wallpapers, and window blinds throughout'
    ]
  },
  {
    id: 'luxury-villa',
    name: '1-Kanal Turnkey Residence',
    rangePKR: 'PKR 6,500,000 — 12,000,000+',
    description: 'Full luxury interior fit-out for a full residential residence with coordinated materials across every room.',
    inclusions: [
      'Complete grey-structure to move-in turnkey coordination',
      'Main kitchen, prep kitchen, and all bedroom wardrobes',
      'Architectural multi-tiered ceilings & micro-cement walls',
      'Full window treatments, terrace grass, and brass trims'
    ]
  }
];

export const BudgetCalculator: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('full-apartment');
  const activeTier = TIERS.find((t) => t.id === selectedTierId) || TIERS[0];

  const handleWhatsAppQuote = () => {
    const message = `Hi Interior Affairs, I used your online Budget Calculator for the "${activeTier.name}" tier (${activeTier.rangePKR}). I would like to discuss room dimensions and a customized quotation.`;
    const url = `https://wa.me/923008504499?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
          TRANSPARENT INVESTMENT ESTIMATOR
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#24221F] mb-4">
          Estimate Your Interior Investment
        </h2>
        <p className="text-xs sm:text-sm text-[#756557] font-light leading-relaxed">
          Select your project scope to see estimated investment ranges in PKR. Every project is quoted with zero hidden markups before on-site work begins.
        </p>
      </div>

      {/* Scope Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {TIERS.map((tier) => {
          const isSelected = tier.id === selectedTierId;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setSelectedTierId(tier.id)}
              className={`p-4 text-left rounded border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#24221F] text-[#FAF8F5] border-[#24221F] shadow-md'
                  : 'bg-[#FAF8F5] text-[#24221F] border-[#E2DACF] hover:border-[#24221F]'
              }`}
            >
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70 mb-1">
                SCOPE TIER
              </div>
              <div className="font-serif text-base font-semibold mb-2">{tier.name}</div>
              <div className={`text-xs font-semibold ${isSelected ? 'text-[#D5C8B8]' : 'text-[#756557]'}`}>
                {tier.rangePKR}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tier Summary Card */}
      <Card variant="travertine" className="p-8 sm:p-10 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E2DACF] mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-1">
              ESTIMATED BALLPARK RANGE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#24221F] font-semibold">
              {activeTier.rangePKR}
            </h3>
            <p className="text-xs text-[#756557] font-light mt-1 max-w-xl">
              {activeTier.description}
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            onClick={handleWhatsAppQuote}
            icon={<MessageCircle size={15} />}
          >
            Discuss on WhatsApp
          </Button>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24221F] mb-4">
            Included in this scope:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#756557]">
            {activeTier.inclusions.map((inc) => (
              <div key={inc} className="flex items-start gap-2.5">
                <Check size={15} className="text-[#24221F] shrink-0 mt-0.5" />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <p className="text-center text-[11px] text-[#756557] font-light">
        * Final quotation depends on exact site laser measurements, material grade selections, and custom cabinetry configurations.
      </p>
    </div>
  );
};
