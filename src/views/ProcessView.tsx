import React from 'react';
import { PROCESS_STEPS } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ActivePage } from '../types';

interface ProcessViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({
  setActivePage,
  onOpenConsultation
}) => {
  return (
    <div id="process-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-semibold">
            10. OUR PROCESS · METHODOLOGY
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-4">
            FROM IDEA TO FINISHED SPACE.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light">
            Interior projects go wrong when steps get skipped or reordered. Ours don't.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-serif italic text-3xl text-[#D5C8B8] block mb-2">{step.step}</span>
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold mb-3">
                  {step.title}
                </h2>
                <p className="text-xs text-[#756557] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DACF] flex items-center gap-2 text-xs font-semibold text-[#24221F]">
                <CheckCircle2 size={16} className="text-[#24221F]" />
                <span>Verified Process Stage</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#24221F] text-[#FAF8F5] p-10 sm:p-14 rounded text-center max-w-4xl mx-auto">
          <h3 className="font-serif-editorial text-3xl sm:text-4xl mb-4">
            Ready to start Step 01?
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C8B8] mb-8 font-light max-w-xl mx-auto">
            Book a consultation to talk through your space, budget range, and timeline with our team nationwide across Pakistan.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-[#FAF8F5] text-[#24221F] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded cursor-pointer"
          >
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};
