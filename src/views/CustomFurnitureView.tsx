import React, { useState } from 'react';
import { Sparkles, CheckCircle, Ruler, Layers, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { CUSTOM_FURNITURE_STEPS } from '../data/services';

interface CustomFurnitureViewProps {
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const CustomFurnitureView: React.FC<CustomFurnitureViewProps> = ({
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [customForm, setCustomForm] = useState({
    pieceType: 'Sectional Sofa / Modular Seating',
    dimensions: '',
    materials: 'Kiln-Dried Walnut & Gandhara Travertine',
    notes: '',
  });

  const handleCustomWhatsApp = () => {
    const msg = `Hi Interior Affairs, I would like to request a bespoke custom piece for: ${customForm.pieceType}. Desired materials: ${customForm.materials}. Dimensions: ${customForm.dimensions || 'To be measured'}. Details: ${customForm.notes || 'Please connect me with a design consultant.'}`;
    onWhatsAppEnquiry(msg);
  };

  return (
    <div id="custom-furniture-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Interior Affairs Atelier · Pakistan
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Custom Furniture Craftsmanship
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            When standard retail catalog pieces fail your architectural proportions. We build 1-of-1 bespoke pieces tailored to the exact millimeter of your home in Islamabad, Lahore, and Karachi.
          </p>
        </div>

        {/* Feature Hero Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          <div className="lg:col-span-8 aspect-[16/10] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop"
              alt="Artisanal Workshop Joinery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 space-y-6 bg-[#FAF8F5] p-8 sm:p-10 border border-[#E2DACF]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] font-semibold block">
              Architectural Joinery
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
              Handmade in Islamabad. Built for Generations.
            </h3>
            <p className="text-xs sm:text-sm text-[#756557] leading-relaxed">
              Every commission begins with kiln-dried solid Pakistani timber, Gandhara mountain travertine, unlacquered brass, and heavy Belgian flax upholstery.
            </p>
            <div className="pt-4 border-t border-[#E2DACF] space-y-2 text-xs text-[#24221F]">
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> Millimeter-precise CAD 3D modeling
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> Physical timber & stone swatch selection
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> 5-Year Master Structural Warranty
              </p>
            </div>
          </div>
        </div>

        {/* 6-Step Bespoke Process */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#756557] block mb-2 font-medium">
              From Concept to Finished Joinery
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#24221F]">
              Our 6-Stage Commissioning Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUSTOM_FURNITURE_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#FAF8F5] border border-[#E2DACF] p-5 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F]">
                      {step.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#756557]">
                      Interior Affairs Atelier
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-xl text-[#24221F] mb-1 font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#756557] font-semibold mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-xs text-[#756557] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Commission Inquiry Form */}
        <div className="bg-[#24221F] text-[#F5F2EC] p-6 sm:p-14 lg:p-20 border border-[#3B3835]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D5C8B8] block mb-2 font-medium">
                Direct Atelier Inquiry
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF8F5] mb-3">
                Commission a Bespoke Piece
              </h2>
              <p className="text-xs sm:text-sm text-[#D5C8B8]/80 leading-relaxed">
                Tell us about the furniture piece you envision. We will review dimensions, prepare material swatches, and quote within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#D5C8B8] mb-2">
                    Piece Type
                  </label>
                  <select
                    value={customForm.pieceType}
                    onChange={(e) => setCustomForm({ ...customForm, pieceType: e.target.value })}
                    className="w-full bg-[#1F1D1A] border border-[#3B3835] text-xs text-[#FAF8F5] p-3 outline-none"
                  >
                    <option value="Sectional Sofa / Modular Seating">Sectional Sofa / Modular Seating</option>
                    <option value="Monumental Travertine Dining Table">Monumental Travertine Dining Table</option>
                    <option value="Architectural Credenza / Console">Architectural Credenza / Console</option>
                    <option value="Low-Profile Platform Bed & Headboard">Low-Profile Platform Bed & Headboard</option>
                    <option value="Full-Height Library & Wall Matrix">Full-Height Library & Wall Matrix</option>
                    <option value="Bespoke Executive Desk">Bespoke Executive Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#D5C8B8] mb-2">
                    Approximate Dimensions (if known)
                  </label>
                  <input
                    type="text"
                    value={customForm.dimensions}
                    onChange={(e) => setCustomForm({ ...customForm, dimensions: e.target.value })}
                    placeholder="e.g. 300cm W x 110cm D x 75cm H"
                    className="w-full bg-[#1F1D1A] border border-[#3B3835] text-xs text-[#FAF8F5] p-3 outline-none placeholder:text-[#D5C8B8]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#D5C8B8] mb-2">
                  Materiality & Finish Preference
                </label>
                <input
                  type="text"
                  value={customForm.materials}
                  onChange={(e) => setCustomForm({ ...customForm, materials: e.target.value })}
                  placeholder="e.g. Gandhara Raw Travertine, Walnut, Bouclé, Unlacquered Brass"
                  className="w-full bg-[#1F1D1A] border border-[#3B3835] text-xs text-[#FAF8F5] p-3 outline-none placeholder:text-[#D5C8B8]/40"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#D5C8B8] mb-2">
                  Project Notes & Reference Details
                </label>
                <textarea
                  rows={3}
                  value={customForm.notes}
                  onChange={(e) => setCustomForm({ ...customForm, notes: e.target.value })}
                  placeholder="Share details about room layout, photos or inspiration links..."
                  className="w-full bg-[#1F1D1A] border border-[#3B3835] text-xs text-[#FAF8F5] p-3 outline-none resize-none placeholder:text-[#D5C8B8]/40"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button
                  id="custom-discuss-whatsapp-btn"
                  onClick={handleCustomWhatsApp}
                  className="bg-[#FAF8F5] text-[#24221F] text-xs uppercase tracking-[0.18em] py-4 px-8 font-medium hover:bg-[#E7E1D8] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={15} /> Transmit Brief via WhatsApp
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="border border-[#FAF8F5] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] py-4 px-8 hover:bg-[#FAF8F5]/10 transition-colors"
                >
                  Book In-Person Atelier Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
