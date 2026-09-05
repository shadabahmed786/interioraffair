import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ActivePage } from '../types';

interface AboutViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  setActivePage,
  onOpenConsultation
}) => {
  return (
    <div id="about-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-6">
            BUILT AROUND BETTER SPACES.
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-[#756557] font-light leading-relaxed">
            <p>
              Interior Affairs started from a frustration we kept hearing from clients: managing an interior fit-out meant juggling five or six separate contractors, none of whom talked to each other.
            </p>
            <p>
              So we built a team that handles walls, ceilings, kitchens, wardrobes, flooring, blinds, and finishing details together — under one plan, with one person accountable for how it all comes together.
            </p>
            <p>
              Whether you're starting from a grey structure, renovating an existing property, or finishing a single room, the goal is the same: a space that feels complete, not assembled piece by piece.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-12 mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-8 font-semibold">
            OUR APPROACH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] p-6 rounded border border-[#E2DACF] space-y-2">
              <span className="font-mono text-xs text-[#756557]">01</span>
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">UNDERSTAND</h3>
              <p className="text-xs text-[#756557] font-light leading-relaxed">
                We listen to how you actually use the space before proposing anything.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded border border-[#E2DACF] space-y-2">
              <span className="font-mono text-xs text-[#756557]">02</span>
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">PLAN</h3>
              <p className="text-xs text-[#756557] font-light leading-relaxed">
                We map your requirements, your budget, and your materials into one coherent plan.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded border border-[#E2DACF] space-y-2">
              <span className="font-mono text-xs text-[#756557]">03</span>
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">CREATE</h3>
              <p className="text-xs text-[#756557] font-light leading-relaxed">
                We execute with the same team from day one to handover.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded border border-[#E2DACF] space-y-2">
              <span className="font-mono text-xs text-[#756557]">04</span>
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">COMPLETE</h3>
              <p className="text-xs text-[#756557] font-light leading-relaxed">
                We check that every room feels like part of the same home — not six separate projects stitched together.
              </p>
            </div>
          </div>
        </div>

        {/* CRAFTSMANSHIP */}
        <div className="mb-20">
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-6">
            THE DIFFERENCE IS IN THE DETAILS.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#F5F2EC] p-6 rounded border border-[#E2DACF]">
              <p className="text-xs text-[#24221F] font-semibold flex items-center gap-2">
                <Check size={16} /> A clean edge where two panels meet.
              </p>
            </div>
            <div className="bg-[#F5F2EC] p-6 rounded border border-[#E2DACF]">
              <p className="text-xs text-[#24221F] font-semibold flex items-center gap-2">
                <Check size={16} /> A ceiling profile that lines up exactly with the wall below it.
              </p>
            </div>
            <div className="bg-[#F5F2EC] p-6 rounded border border-[#E2DACF]">
              <p className="text-xs text-[#24221F] font-semibold flex items-center gap-2">
                <Check size={16} /> A drawer that closes the same way on day one and day one thousand.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#756557] font-light leading-relaxed max-w-3xl">
            None of it demands attention on its own. But leave one of them out, and the whole room feels slightly off — even to someone who couldn't tell you why. At Interior Affairs, these are the details we don't skip.
          </p>
        </div>

        {/* WHY INTERIOR AFFAIRS */}
        <div className="mb-20">
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-8">
            MORE THAN FINISHING. A COMPLETE APPROACH.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">COMPLETE SOLUTIONS</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                From grey structure to final finishing, one team handles the full scope — so you're not coordinating separate contractors for walls, kitchen, and ceilings.
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">ONE COORDINATED TEAM</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                A single point of contact manages every trade on-site, so scheduling conflicts and miscommunication between contractors aren't your problem to solve.
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">DESIGN-LED APPROACH</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                Every material and finish decision is made in context — how it looks next to what's already in the room, not in isolation.
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">CUSTOM SOLUTIONS</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                Kitchens and wardrobes are built to your room's actual dimensions, not adapted from a standard size.
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">ATTENTION TO DETAIL</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                Panel alignment, edge finishing, and hardware quality are checked before handover, not left for you to discover later.
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded space-y-2">
              <h3 className="font-serif-editorial text-xl font-semibold text-[#24221F]">NATIONWIDE COVERAGE</h3>
              <p className="text-xs text-[#756557] leading-relaxed font-light">
                We manage project timelines, logistics, and material procurement across Pakistan — delivering smooth execution with zero delays.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer"
          >
            TALK TO OUR TEAM →
          </button>
        </div>
      </div>
    </div>
  );
};
