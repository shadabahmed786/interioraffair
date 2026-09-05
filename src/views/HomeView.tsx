import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActivePage, Project } from '../types';
import { MATERIALS_CURATED_LIST } from '../data/services';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { FeedbackSlider } from '../components/FeedbackSlider';

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onOpenProjectLightbox?: (project: Project) => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onOpenProjectLightbox,
  onWhatsAppEnquiry
}) => {
  return (
    <div id="interior-affairs-homepage" className="w-full bg-[#FAF8F5] text-[#24221F]">
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2. HOMEPAGE HERO                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="hero-section"
        className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#1C1A17]"
      >
        {/* Background Image with Editorial Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
            alt="Interior Affairs Grey Structure to Finished Space"
            className="w-full h-full object-cover brightness-90 contrast-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17] via-[#1C1A17]/60 to-[#1C1A17]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1680px] mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 w-full flex-1 flex flex-col justify-center items-center my-auto">
          <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
            {/* Main Headline */}
            <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#FAF8F5] leading-[1.15] sm:leading-[1.1] font-medium tracking-tight mb-3 sm:mb-4 text-center">
              FROM GREY STRUCTURE <br className="hidden sm:inline" />
              <span className="italic text-[#D5C8B8] font-serif">TO FINISHED SPACE.</span>
            </h1>

            {/* Subtitles & Copy */}
            <p className="font-sans text-xs sm:text-base lg:text-lg text-[#FAF8F5]/90 max-w-2xl leading-relaxed mb-2.5 sm:mb-3.5 font-normal tracking-wide text-center mx-auto">
              Complete interior solutions, from the first wall to the final finishing detail.
            </p>

            <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-[#D5C8B8] max-w-2xl leading-relaxed mb-6 sm:mb-7 font-light text-center mx-auto">
              Designer walls, custom kitchens, wardrobes, flooring, ceilings, blinds, and finishing touches — coordinated by one team, nationwide across Pakistan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mx-auto">
              <button
                onClick={() => {
                  setActivePage('our-work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto max-w-sm sm:max-w-none bg-[#FAF8F5] text-[#24221F] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded text-center transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  setActivePage('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto max-w-sm sm:max-w-none border border-[#FAF8F5]/80 bg-black/30 backdrop-blur-md text-[#FAF8F5] hover:bg-[#FAF8F5]/20 text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded text-center transition-all duration-300 cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-10 lg:px-16 flex flex-row items-center justify-between gap-2 text-xs text-[#D5C8B8]">
          <span className="tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[8.5px] sm:text-[10px] font-semibold truncate">
            NATIONWIDE · PAKISTAN
          </span>
          <span className="tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[8.5px] sm:text-[10px] flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span>SCROLL TO TRANSFORM</span>
            <span className="w-5 sm:w-8 h-[1px] bg-[#D5C8B8]" />
          </span>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3. INTRODUCTION                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="introduction" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] leading-tight font-medium">
                WE CLOSE THE GAP BETWEEN DESIGN & EXECUTION.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#756557] leading-relaxed font-light">
                <p>
                  Most interior projects fall apart in the gaps — a wall contractor who doesn't talk to the kitchen fabricator, a ceiling design decided after the lighting is already installed.
                </p>
                <p>
                  Interior Affairs closes those gaps. We plan walls, floors, ceilings, kitchens, wardrobes, and finishing details together, from day one — so nothing gets decided in isolation and nothing gets left half-finished.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>Discover Interior Affairs</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded-sm border border-[#E2DACF] shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
                  alt="Interior Affairs Integrated Expertise"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/90 backdrop-blur-md p-6 border border-[#E2DACF] rounded">
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24221F] mb-1">
                    Integrated Interior Execution
                  </p>
                  <p className="text-xs text-[#756557]">
                    Single point of contact for walls, ceilings, kitchens, and finishing details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7. SIGNATURE TRANSFORMATION SECTION                      */}
      {/* ------------------------------------------------------------------ */}
      <section id="signature-transformation" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
              SEE THE TRANSFORMATION.
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-4">
              From Bare Structure to Finished Home.
            </h2>
            <p className="text-sm text-[#756557] font-light leading-relaxed">
              From bare walls and unfinished floors to a space that's ready to live in — here's how we get there.
            </p>
          </div>

          {/* Transformation Workflow Diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 mb-12 sm:mb-16">
            {['GREY STRUCTURE', 'DESIGN', 'MATERIALS', 'CRAFTSMANSHIP', 'FINISHING', 'YOUR SPACE'].map(
              (step, idx) => (
                <div
                  key={step}
                  className="bg-[#F5F2EC] border border-[#E2DACF] p-3 sm:p-4 text-center rounded flex flex-col justify-center items-center"
                >
                  <span className="text-[10px] font-mono text-[#756557] mb-1">0{idx + 1}</span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold text-[#24221F]">
                    {step}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Interactive Before & After Comparison Slider */}
          <div className="max-w-4xl mx-auto mb-10">
            <BeforeAfterSlider
              beforeImage="/images/transformation/grey-structure.jpg"
              afterImage="/images/transformation/finished-interior.jpg"
              beforeLabel="GREY STRUCTURE (RAW)"
              afterLabel="FINISHED INTERIOR"
              className="aspect-[16/10] sm:aspect-[16/9] max-h-[420px] md:max-h-[460px] shadow-2xl border border-[#E2DACF]"
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setActivePage('quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all inline-flex items-center gap-3 cursor-pointer"
            >
              <span>START YOUR TRANSFORMATION →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INTEGRATED APPROACH                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="complete-home-section" className="py-20 sm:py-24 bg-[#1C1A17] text-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#FAF8F5] mb-5 font-medium">
            ONE TEAM. ONE VISION. ONE FINISHED SPACE.
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Walls, floors, ceilings, kitchens, wardrobes, and blinds shouldn't feel like separate decisions made by separate contractors. We plan them together from the start — so materials, tones, and detailing carry seamlessly through your entire home.
          </p>

          <button
            onClick={() => {
              setActivePage('quote');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#FAF8F5] text-[#1C1A17] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all inline-flex items-center gap-3 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 9. DESIGN YOUR SPACE — INTERACTIVE PLANNING TOOLS         */}
      {/* ------------------------------------------------------------------ */}
      <section id="interactive-tools" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
              NOT SURE WHERE TO START?
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-3 font-medium">
              PLAN BEFORE YOU BUILD.
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#756557] mb-3">
              Design Wizard + Budget Planner
            </p>
            <p className="text-sm text-[#756557] font-light leading-relaxed max-w-xl mx-auto">
              Explore spatial layouts and calculate transparent PKR investment estimates before committing to a single material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Design Wizard Card */}
            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded flex flex-col justify-between">
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#24221F] mb-3 font-semibold">
                  DESIGN WIZARD
                </h3>
                <p className="text-xs text-[#756557] leading-relaxed mb-6 font-light">
                  Answer a few questions about your space, your style, and your priorities. We'll put together a starting direction for materials, layout, and finishes — a real starting point, not a blank page.
                </p>
              </div>
              <button
                onClick={() => {
                  setActivePage('design-wizard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded text-center transition-all cursor-pointer"
              >
                Try the Design Wizard →
              </button>
            </div>

            {/* Budget Planner Card */}
            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded flex flex-col justify-between">
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#24221F] mb-3 font-semibold">
                  BUDGET PLANNER
                </h3>
                <p className="text-xs text-[#756557] leading-relaxed mb-6 font-light">
                  Tell us your investment range — from an accent wall to a full multi-room fit-out — and see which combinations of pieces and finishes actually fit inside it, in real PKR figures, before you request a quote.
                </p>
              </div>
              <button
                onClick={() => {
                  setActivePage('budget-planner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded text-center transition-all cursor-pointer"
              >
                Open the Budget Planner →
              </button>
            </div>
          </div>

          {/* Manual Combinations List */}
          <div className="bg-[#F5F2EC] border border-[#E2DACF] p-8 rounded max-w-5xl mx-auto">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24221F] mb-4">
              Explore Combinations Manually:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-[#756557]">
              <div><strong className="text-[#24221F]">WALLS</strong> — Textures · Panels · Wallpapers · Decorative Finishes</div>
              <div><strong className="text-[#24221F]">FLOORS</strong> — Wood · Stone · Modern Finishes</div>
              <div><strong className="text-[#24221F]">CEILINGS</strong> — Minimal · Layered · Cove Lighting · Decorative</div>
              <div><strong className="text-[#24221F]">KITCHENS</strong> — Modern · Minimal · Contemporary · Custom</div>
              <div><strong className="text-[#24221F]">WARDROBES</strong> — Built-in · Sliding · Walk-in · Custom</div>
              <div><strong className="text-[#24221F]">WINDOWS</strong> — Blinds · Light Control · Privacy</div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setActivePage('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-8 rounded transition-all cursor-pointer"
              >
                CREATE YOUR INTERIOR →
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* SECTION 13. MATERIALS & FINISHES                                  */}
      {/* ------------------------------------------------------------------ */}
      <section id="materials-section" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block">
                MATERIALS & FINISHES
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] leading-tight">
                THE RIGHT MATERIAL <br />
                <span className="italic font-serif">CHANGES EVERYTHING.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#756557] leading-relaxed font-light">
                Run a hand along a poorly finished panel edge and you feel it immediately — even if you can't name what's wrong. The same is true in reverse.
              </p>

              <p className="text-xs sm:text-sm text-[#756557] leading-relaxed font-light">
                We work with a curated range of materials — walnut and matte-lacquer joinery, natural stone and engineered wood flooring, textured plaster and PVC panel systems, brass and gold-finish inlay details — selected for how they perform daily, not just how they photograph.
              </p>

              {/* Material Categories Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {MATERIALS_CURATED_LIST.map((mat) => (
                  <span
                    key={mat}
                    className="text-[11px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 bg-[#F5F2EC] border border-[#E2DACF] text-[#24221F] rounded"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>EXPLORE MATERIALS →</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior Affairs Premium Materials"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* GREY STRUCTURE SERVICE                                            */}
      {/* ------------------------------------------------------------------ */}
      <section id="grey-structure-section" className="py-24 sm:py-32 bg-[#F5F2EC] border-b border-[#E2DACF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-3 font-medium">
            GREY STRUCTURE FINISHING
          </h2>

          <p className="text-sm sm:text-base text-[#756557] max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            From bare structure to a finished, move-in-ready space. A raw grey structure is the cleanest starting point to get an interior right from day one — with zero demolition or rework.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs font-semibold text-[#24221F]">
            {['Walls', 'Ceilings', 'Flooring', 'Kitchen', 'Wardrobes', 'Blinds', 'Decorative Finishes'].map(
              (item) => (
                <span key={item} className="px-4 py-2 bg-[#FAF8F5] border border-[#E2DACF] rounded">
                  {item}
                </span>
              )
            )}
          </div>

          <button
            onClick={() => {
              setActivePage('quote');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONSULTATION CTA                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section id="consultation-section" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-6 font-medium">
            LET'S TALK ABOUT YOUR SPACE.
          </h2>

          <p className="text-sm sm:text-base text-[#756557] max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            New home, existing renovation, or raw grey structure — tell us where you're starting from. We'll outline your realistic next steps, transparent budget brackets, and design options.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer"
            >
              BOOK A CONSULTATION
            </button>
            <button
              onClick={() => onWhatsAppEnquiry('Hi Interior Affairs, I would like to enquire about my space.')}
              className="bg-[#25D366] text-[#FAF8F5] hover:bg-[#1ebd59] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer"
            >
              WHATSAPP US
            </button>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* CLIENT FEEDBACK SLIDER                                             */}
      {/* ------------------------------------------------------------------ */}
      <FeedbackSlider onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
