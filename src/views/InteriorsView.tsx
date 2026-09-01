import React from 'react';
import { Sparkles, CheckCircle, Compass, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { INTERIOR_DESIGN_PHASES } from '../data/services';

interface InteriorsViewProps {
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const InteriorsView: React.FC<InteriorsViewProps> = ({
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  return (
    <div id="interiors-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Interior Affairs · Nationwide Service
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Everything after Grey Structure
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            Complete turnkey interior finishing for homes and offices nationwide across Pakistan. Designer Walls, Kitchens, Wardrobes, Wall Papers, Floors, PVC Panels, Blinds, Artificial Grass, Ceilings & Golden Strips.
          </p>
        </div>

        {/* Feature Hero Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          <div className="lg:col-span-7 aspect-[16/10] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Interior Affairs RWP ISB Grey Structure"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 sm:p-12 border border-[#E2DACF] space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] font-semibold block">
              Execution Promise
            </span>
            <h3 className="font-serif-editorial text-3xl text-[#24221F] leading-tight">
              Single Point Responsibility from Grey to Move-In.
            </h3>
            <p className="text-xs sm:text-sm text-[#756557] leading-relaxed">
              Eliminate multi-vendor friction. Our studio manages gypsum ceiling framing, SPC flooring fitment, PVC wall panel louvers, imported wallpaper application, custom kitchens, and golden inlay strips under 1 warranty.
            </p>
            <div className="pt-4 border-t border-[#E2DACF] space-y-2 text-xs text-[#24221F]">
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> Designer Walls, PVC Panels & Golden Strips
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> Custom Modular Kitchens & Walk-in Wardrobes
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#756557]" /> Wall Papers, SPC Flooring, Blinds & Grass
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3.5 px-6 text-center hover:bg-[#3D3A36] cursor-pointer"
              >
                Book Site Audit
              </button>
              <a
                href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.16em] py-3.5 px-6 text-center hover:bg-[#24221F] hover:text-[#FAF8F5] transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin size={13} />
                <span>Google Maps Location</span>
              </a>
            </div>
          </div>
        </div>

        {/* Process Phases */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#756557] block mb-2 font-semibold">
              Workflow Method
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F]">
              Turnkey Execution Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERIOR_DESIGN_PHASES.map((phase, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-[#E2DACF] p-8 space-y-4">
                <span className="text-xs font-serif italic text-[#756557] block">{phase.number}</span>
                <h3 className="font-serif-editorial text-2xl text-[#24221F]">{phase.title}</h3>
                <p className="text-xs font-medium text-[#24221F] uppercase tracking-wider">{phase.tagline}</p>
                <p className="text-xs text-[#756557] leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
