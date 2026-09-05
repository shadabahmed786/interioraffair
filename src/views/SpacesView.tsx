import React from 'react';
import { SPACES_LIST } from '../data/spaces';
import { ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface SpacesViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const SpacesView: React.FC<SpacesViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  return (
    <div id="spaces-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-4">
            WHERE ARE WE TRANSFORMING?
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light">
            Every room is used differently, so we design each one on its own terms — not from a single template applied room to room.
          </p>
        </div>

        {/* Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPACES_LIST.map((space) => (
            <div
              key={space.id}
              className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded mb-6">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold mb-1">
                  {space.title}
                </h2>
                <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#756557] mb-3">
                  {space.tagline}
                </h3>
                <p className="text-xs text-[#756557] leading-relaxed mb-6 font-light">
                  {space.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setActivePage('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-4 rounded text-center transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{space.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
