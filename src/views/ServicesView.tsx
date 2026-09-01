import React from 'react';
import { SERVICES_LIST } from '../data/services';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { ActivePage } from '../types';

interface ServicesViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  return (
    <div id="services-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-semibold">
            5. SERVICES · COMPLETE INTERIOR SOLUTIONS
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-4">
            EVERYTHING YOUR SPACE NEEDS. UNDER ONE ROOF.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light">
            Walls. Floors. Ceilings. Kitchens. Wardrobes. Windows. Details. Instead of hiring a separate contractor for every trade — and managing every handoff yourself — you work with one team that already knows how the pieces fit together.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              id={`service-${srv.id}`}
              className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-[#24221F] bg-[#E7E1D8] px-3 py-1 rounded">
                  SERVICE 0{idx + 1}
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] font-semibold">
                  {srv.title}
                </h2>
                <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#756557]">
                  {srv.headline}
                </h3>
                <p className="text-sm text-[#756557] leading-relaxed font-light">
                  {srv.description}
                </p>

                {srv.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#24221F]">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#756557] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      setActivePage('quote');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={() => onWhatsAppEnquiry(`Hi Interior Affairs, I am interested in ${srv.title}.`)}
                    className="border border-[#24221F] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded transition-all cursor-pointer"
                  >
                    Quick WhatsApp Enquiry
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
