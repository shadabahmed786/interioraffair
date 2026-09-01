import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, Navigation, MessageCircle } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/services';

interface ShowroomViewProps {
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const ShowroomView: React.FC<ShowroomViewProps> = ({
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  return (
    <div id="showroom-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Studio Location · Nationwide Service
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Interior Affairs Studio
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            Everything after Grey Structure. Experience our physical material swatches for Designer Walls, Modular Kitchens, Wardrobes, SPC Flooring, Wall Papers, Fluted PVC Panels, Blinds, Grass, Ceilings & Golden Strips in person.
          </p>
        </div>

        {/* Showroom Hero Image */}
        <div className="aspect-[16/9] bg-[#E7E1D8] overflow-hidden border border-[#E2DACF] mb-16 relative">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
            alt="Interior Affairs Studio Space RWP ISB"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[#24221F]/90 backdrop-blur-sm text-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] px-4 py-2">
            Main Design Suite · Interior Affairs (RWP/ISB)
          </div>
        </div>

        {/* Showroom Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-start">
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-8 bg-[#FAF8F5] p-8 sm:p-12 border border-[#E2DACF]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] font-semibold block mb-2">
                Studio Location
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F] mb-3">
                {SHOWROOM_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#756557] leading-relaxed mb-4">
                {SHOWROOM_INFO.address}
              </p>
              <a
                href={SHOWROOM_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#24221F] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#3D3A36] transition-colors rounded-sm"
              >
                <MapPin size={14} className="text-[#D5C8B8]" />
                <span>Open Google Maps Location →</span>
              </a>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E2DACF] text-xs">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#24221F]" />
                <span className="text-[#24221F] font-medium">{SHOWROOM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#24221F]" />
                <span className="text-[#24221F] font-medium">{SHOWROOM_INFO.whatsapp} (WhatsApp Studio)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#24221F]" />
                <span className="text-[#24221F]">{SHOWROOM_INFO.email}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DACF]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-3">
                Opening Hours
              </span>
              <div className="space-y-2 text-xs">
                {SHOWROOM_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-[#E2DACF]/60">
                    <span className="text-[#756557]">{h.days}</span>
                    <span className="font-medium text-[#24221F]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DACF]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-3">
                What You Will Experience
              </span>
              <ul className="space-y-2 text-xs text-[#24221F]">
                {SHOWROOM_INFO.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-[#756557] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-4 px-6 text-center hover:bg-[#383633] cursor-pointer"
              >
                Schedule Site Survey
              </button>
              <button
                onClick={() => onWhatsAppEnquiry('Hi Interior Affairs, I would like to get directions to your RWP/ISB studio or discuss my grey structure project.')}
                className="border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.16em] py-3.5 px-6 text-center hover:bg-[#24221F] hover:text-[#F5F2EC] cursor-pointer"
              >
                WhatsApp Directions
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Mockup Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="aspect-square bg-[#E7E1D8] border border-[#E2DACF] relative overflow-hidden flex flex-col justify-between p-6">
              {/* Stylized Architectural Map Background */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#756557_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 bg-[#FAF8F5] p-4 border border-[#E2DACF] shadow-md max-w-xs">
                <span className="text-[9px] uppercase tracking-widest text-[#756557] block mb-0.5 font-semibold">
                  RWP / ISB Headquarters
                </span>
                <h4 className="font-serif-editorial text-lg text-[#24221F]">
                  Interior Affairs Studio
                </h4>
                <p className="text-[11px] text-[#756557] mt-1">
                  Nationwide Service, Pakistan
                </p>
              </div>

              <div className="relative z-10 flex justify-center items-center my-auto">
                <a
                  href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-center"
                >
                  <div className="w-14 h-14 bg-[#24221F] text-[#FAF8F5] rounded-full flex items-center justify-center shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div className="mt-2 whitespace-nowrap bg-[#24221F] text-[#FAF8F5] text-[10px] uppercase tracking-wider px-3 py-1 rounded shadow">
                    Open Google Maps Link
                  </div>
                </a>
              </div>

              <div className="relative z-10 bg-[#FAF8F5] p-4 border border-[#E2DACF] flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-[#24221F] block">On-Site Survey & Studio Parking</span>
                  <span className="text-[#756557] text-[11px]">Serving residential and commercial projects nationwide</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-[#24221F] font-semibold underline underline-offset-4 hover:opacity-70"
                >
                  Open Maps →
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E2DACF] flex items-center gap-4">
              <Navigation size={20} className="text-[#24221F] flex-shrink-0" />
              <p className="text-xs text-[#756557] leading-relaxed">
                Building a house or commercial plaza? Contact our team at grey structure phase for seamless 3D planning of your ceiling, walls, kitchen, wardrobes & flooring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
