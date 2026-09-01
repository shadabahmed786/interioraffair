import React from 'react';
import { Compass, CheckCircle, ShieldCheck, Layers, Sparkles, MapPin } from 'lucide-react';

interface OurStoryViewProps {
  onOpenConsultation: () => void;
}

export const OurStoryView: React.FC<OurStoryViewProps> = ({ onOpenConsultation }) => {
  return (
    <div id="our-story-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Interior Affairs · Nationwide Service
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Our Philosophy & Approach
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            Interior Affairs was established with a singular focused commitment: providing complete, uncompromising turnkey execution for everything after grey structure nationwide across Pakistan.
          </p>
        </div>

        {/* Narrative Section 1: The Core Idea */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] font-semibold block">
              The Mission
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] leading-tight">
              &ldquo;Everything after Grey Structure.&rdquo;
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#24221F] leading-relaxed">
              When grey structure construction finishes, homeowners face complex coordination between dozens of separate vendors—wall panel installers, kitchen carpenters, ceiling contractors, flooring suppliers, and window treatment providers.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
              Interior Affairs unifies all finishing disciplines under one roof. From 3D architectural modeling to execution of Designer Walls, Kitchens, Wardrobes, Wall Papers, Floors, PVC Panels, Blinds, Artificial Grass, Ceilings, and Golden Strips.
            </p>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
              alt="Interior Affairs Architecture RWP ISB"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative Section 2: 10 Core Services Scope */}
        <div className="bg-[#FAF8F5] border border-[#E2DACF] p-8 sm:p-14 lg:p-20 mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#756557] block mb-2 font-semibold">
              Turnkey Scope
            </span>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-3">
              Our 10 Specialized Finishing Categories
            </h3>
            <p className="text-xs sm:text-sm text-[#756557] leading-relaxed">
              Every detail engineered for durability, aesthetics, and precision across residential homes nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">01</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">Designer Walls</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Feature walls, 3D louvers, rock veneers, micro-cement, and wall moulding architecture.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">02</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">Custom Kitchens</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Modular acrylic/UV shutters, soft-close hardware, and seamless quartz countertops.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">03</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">Wardrobe Systems</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Walk-in closets, sliding tinted glass wardrobes, and smart sensor drawer storage.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">04</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">Wall Papers</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Luxury imported washable wallpapers, silk textures, and bespoke 3D murals.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">05</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">Flooring</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Waterproof SPC interlocking planks, hardwood, and polished marble tiles.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-serif italic text-[#756557]">06</span>
              <h4 className="font-serif-editorial text-xl text-[#24221F]">PVC & Golden Strips</h4>
              <p className="text-xs text-[#756557] leading-relaxed">
                Fluted PVC wall panels, louver cladding, and metallic brass golden inlay strips.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#24221F] text-[#FAF8F5] p-10 sm:p-16 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D5C8B8] mb-3">
            Nationwide Execution across Pakistan
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF8F5] mb-6">
            Ready for Everything After Grey Structure?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#FAF8F5] text-[#24221F] text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 hover:bg-[#E7E1D8] transition-colors cursor-pointer"
            >
              Book Site Survey & 3D Render
            </button>
            <a
              href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#FAF8F5] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 hover:bg-[#FAF8F5]/10 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={14} className="text-[#D5C8B8]" />
              <span>Google Maps Location</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
