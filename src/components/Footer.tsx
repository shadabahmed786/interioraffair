import React from 'react';
import { ActivePage } from '../types';
import { ArrowUpRight, MapPin, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer id="main-footer" className="bg-[#1C1A17] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/15">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Logo roofColor="#C81E2B" textColor="#FAF8F5" isDarkHero={true} />
            </div>
            
            <p className="text-sm text-[#D5C8B8] font-serif italic text-lg">
              From Grey Structure to Finished Space.
            </p>

            <p className="text-xs text-[#FAF8F5]/70 max-w-md leading-relaxed">
              Complete interior solutions for modern spaces. Designer walls, custom kitchens, wardrobes, flooring, ceilings, blinds, wallpapers, and finishing details — coordinated by one team, nationwide across Pakistan.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#FAF8F5]/80">
              <MapPin size={15} className="text-[#C81E2B]" />
              <span>Nationwide Execution · Pakistan</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/75">
              {[
                'Designer Walls',
                'Kitchens',
                'Wardrobes',
                'Wallpapers',
                'Flooring',
                'PVC Panels',
                'Blinds',
                'Artificial Grass',
                'Ceilings',
                'Golden Strips'
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => navigateTo('services')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left py-0.5"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/75">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('our-process')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('our-work')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Start a Project */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8]">
              Start a Project
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('quote')}
                  className="bg-[#FAF8F5] text-[#1C1A17] hover:bg-[#E7E1D8] px-4 py-2.5 rounded text-[11px] uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center gap-2 cursor-pointer w-full justify-between"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight size={14} />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="border border-white/30 text-[#FAF8F5] hover:bg-white/10 px-4 py-2.5 rounded text-[11px] uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center gap-2 cursor-pointer w-full justify-between"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight size={14} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onWhatsAppEnquiry('Hi Interior Affairs, I want to discuss my space project.')}
                  className="border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 px-4 py-2.5 rounded text-[11px] uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center gap-2 cursor-pointer w-full justify-between"
                >
                  <span>WhatsApp Us</span>
                  <MessageSquare size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF8F5]/50">
          <p>© {new Date().getFullYear()} INTERIOR AFFAIRS. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Nationwide Turnkey Interior Architecture · Pakistan</span>
            <button onClick={scrollToTop} className="hover:text-[#FAF8F5] underline cursor-pointer">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
