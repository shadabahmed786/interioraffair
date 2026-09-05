import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { SERVICES_LIST, SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1A17] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium tracking-[0.2em] uppercase text-[#FAF8F5] block mb-1">
                INTERIOR AFFAIRS
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#D5C8B8]">
                EVERYTHING AFTER GREY STRUCTURE
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed font-light max-w-sm">
              Complete turnkey interior solutions nationwide across Pakistan. From the first wall to the final finishing detail — coordinated under one single team.
            </p>
            <div className="pt-2 text-xs text-[#D5C8B8] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#D5C8B8] shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D5C8B8] shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#D5C8B8] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Services Directory */}
          <div className="lg:col-span-5">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8] mb-6">
              Specialized Services
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#FAF8F5]/80">
              {SERVICES_LIST.map((srv) => (
                <Link
                  key={srv.id}
                  href="/services"
                  className="hover:text-[#FAF8F5] hover:underline underline-offset-4 py-1 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#D5C8B8] font-mono">{srv.number}</span>
                  <span>{srv.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8] mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#FAF8F5] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D5C8B8] mb-2">
                Studio Hours
              </h4>
              <p className="text-xs text-[#FAF8F5]/70 font-light">{SITE_CONFIG.hours}</p>
              <p className="text-xs text-[#FAF8F5]/70 font-light">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF8F5]/50 gap-4">
          <p>© {new Date().getFullYear()} INTERIOR AFFAIRS. All Rights Reserved.</p>
          <p className="tracking-widest uppercase">Nationwide Execution · Islamabad · Rawalpindi · Lahore</p>
        </div>
      </div>
    </footer>
  );
};
