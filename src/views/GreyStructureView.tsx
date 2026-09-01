import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ActivePage } from '../types';

interface GreyStructureViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
}

export const GreyStructureView: React.FC<GreyStructureViewProps> = ({
  setActivePage,
  onOpenConsultation
}) => {
  return (
    <div id="grey-structure-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-semibold">
            18. GREY STRUCTURE SERVICE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-6">
            STARTING WITH A BLANK CANVAS?
          </h1>
          <div className="space-y-4 text-sm sm:text-base text-[#756557] font-light leading-relaxed">
            <p>
              A grey structure is bare walls, exposed wiring points, and unfinished floors — and also the easiest starting point to get a coordinated interior right, because nothing has to be undone first.
            </p>
            <p>
              We take a property from that stage through to a complete, move-in-ready interior across every space that matters.
            </p>
          </div>
        </div>

        {/* Scope Matrix */}
        <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-12 mb-16">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F] font-semibold mb-6">
            Grey Structure Finishing Scope:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-[#24221F]">
            {['Walls', 'Ceilings', 'Flooring', 'Kitchen', 'Wardrobes', 'Blinds', 'Decorative Finishes'].map((item) => (
              <div key={item} className="bg-[#FAF8F5] p-4 rounded border border-[#E2DACF] flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#24221F] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Closing CTA */}
        <div className="bg-[#1C1A17] text-[#FAF8F5] p-10 sm:p-16 rounded text-center max-w-4xl mx-auto">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#FAF8F5] mb-4 italic">
            FROM BARE SPACE TO A PLACE THAT FEELS LIKE HOME.
          </h2>
          <p className="text-xs sm:text-sm text-[#D5C8B8] font-light mb-8 max-w-xl mx-auto">
            Let's plan your grey structure transformation with one coordinated team nationwide across Pakistan.
          </p>
          <button
            onClick={() => {
              setActivePage('quote');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#FAF8F5] text-[#1C1A17] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
