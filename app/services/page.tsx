import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, PROCESS_STEPS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Turnkey Interior Services Islamabad & Rawalpindi',
  description: 'Explore all 10 interior finishing services by Interior Affairs: Designer Walls, Custom Kitchens, Wardrobes, Wallpapers, SPC Flooring, PVC Panels, Blinds, Artificial Grass, False Ceilings, and Golden Inlay Strips.',
  keywords: [
    'Kitchen Interior Design Islamabad',
    'False Ceiling Contractors Rawalpindi',
    'SPC Flooring Installation Pakistan',
    'Custom Wardrobe Fabrication Islamabad',
    'Designer Accent Walls Rawalpindi'
  ],
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#24221F] pb-24">
      {/* Header */}
      <section className="py-20 sm:py-24 bg-[#F5F2EC] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-3">
              WHAT WE DO
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-6">
              Complete Turnkey Interior Services
            </h1>
            <p className="text-sm sm:text-base text-[#756557] font-light leading-relaxed">
              Everything after grey structure, under one coordinated roof. No separate contractor wrangling, no scheduling misalignments, and no compromises on material craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (All 10 Services Detailed) */}
      <section className="py-20 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="space-y-16">
          {SERVICES_LIST.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#E2DACF] last:border-b-0"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF] shadow-lg relative group">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="dark">{srv.number}</Badge>
                    </div>
                  </div>
                </div>

                {/* Narrative Col */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                  <div>
                    <Badge variant="stone" className="mb-2">{srv.badge}</Badge>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#24221F] mb-2 font-semibold">
                      {srv.title}
                    </h2>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#756557]">
                      {srv.headline}
                    </h3>
                  </div>

                  <p className="text-sm text-[#756557] leading-relaxed font-light">
                    {srv.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {srv.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs text-[#24221F]">
                        <Check size={15} className="text-[#24221F] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      variant="whatsapp"
                      size="md"
                      href={`https://wa.me/923008504499?text=${encodeURIComponent(`Hi Interior Affairs, I would like to enquire about your ${srv.title} service.`)}`}
                      isExternal
                      icon={<MessageCircle size={15} />}
                    >
                      Enquire on WhatsApp
                    </Button>
                    <Button variant="outline" size="md" href="/contact">
                      Request a Quote
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6-Step Process Recap */}
      <section className="py-20 bg-[#F5F2EC] border-t border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
              SEAMLESS EXECUTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24221F] mb-4">
              How We Deliver Your Finished Interior
            </h2>
            <p className="text-xs sm:text-sm text-[#756557] font-light">
              From site inspection and physical sample review to final punch-list handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s) => (
              <Card key={s.step} variant="cream" className="p-6">
                <span className="font-serif italic text-2xl text-[#D5C8B8] block mb-2">{s.step}</span>
                <h3 className="font-serif text-lg font-semibold text-[#24221F] mb-1">{s.title}</h3>
                <p className="text-xs text-[#756557] font-light leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#24221F] mb-4">
          Ready to Coordinate Your Space?
        </h2>
        <p className="text-xs sm:text-sm text-[#756557] font-light max-w-xl mx-auto mb-8">
          Send us your floor plans or room photos. We will outline a realistic timeline and itemized budget range within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="/contact">
            Get Started
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            href={`https://wa.me/923008504499?text=${encodeURIComponent('Hi Interior Affairs, I am interested in turnkey interior execution for my property.')}`}
            isExternal
            icon={<MessageCircle size={16} />}
          >
            WhatsApp Team
          </Button>
        </div>
      </section>
    </div>
  );
}
