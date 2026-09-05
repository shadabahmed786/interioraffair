'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider';
import { BudgetCalculator } from '@/components/sections/BudgetCalculator';
import { FeedbackSlider } from '@/components/sections/FeedbackSlider';

export default function HomePage() {
  return (
    <div id="interior-affairs-homepage" className="w-full bg-[#FAF8F5] text-[#24221F]">
      {/* ------------------------------------------------------------------ */}
      {/* HERO SECTION                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#1C1A17]">
        {/* Background Image with Cinematic Editorial Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
            alt="Interior Affairs Grey Structure to Finished Space"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-90 contrast-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17] via-[#1C1A17]/65 to-[#1C1A17]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-36 lg:pt-44 pb-16 w-full flex-1 flex flex-col justify-center items-center my-auto">
          <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.15] sm:leading-[1.1] font-medium tracking-tight mb-4 text-center">
              FROM GREY STRUCTURE <br className="hidden sm:inline" />
              <span className="italic text-[#D5C8B8]">TO FINISHED SPACE.</span>
            </h1>

            {/* Subtitles */}
            <p className="text-sm sm:text-lg text-[#FAF8F5]/90 max-w-2xl leading-relaxed mb-4 font-normal tracking-wide text-center mx-auto">
              Complete interior solutions, from the first wall to the final finishing detail.
            </p>

            <p className="text-xs sm:text-sm text-[#D5C8B8] max-w-2xl leading-relaxed mb-8 font-light text-center mx-auto">
              Designer walls, custom kitchens, wardrobes, flooring, ceilings, blinds, and finishing touches — coordinated by one team, nationwide across Pakistan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mx-auto">
              <Button variant="secondary" size="lg" href="/services" icon={<ArrowRight size={15} />} className="w-full sm:w-auto max-w-sm sm:max-w-none">
                Explore Our Services
              </Button>
              <Button variant="outline-light" size="lg" href="/contact" className="w-full sm:w-auto max-w-sm sm:max-w-none">
                Get a Quote
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={`https://wa.me/923008504499?text=${encodeURIComponent('Hi Interior Affairs, I would like to consult about my grey structure property.')}`}
                isExternal
                icon={<MessageCircle size={15} />}
                className="w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                WhatsApp Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md py-3.5 px-6 sm:px-10 lg:px-16 flex items-center justify-between text-xs text-[#D5C8B8]">
          <span className="tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[9px] sm:text-[10px] font-semibold truncate">
            TURNKEY EXECUTION · RWP / ISB & NATIONWIDE
          </span>
          <span className="tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[9px] sm:text-[10px] flex items-center gap-2 shrink-0">
            <span>SCROLL TO TRANSFORM</span>
            <span className="w-8 h-[1px] bg-[#D5C8B8]" />
          </span>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INTRODUCTION SECTION                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#24221F] leading-tight font-medium">
                WE CLOSE THE GAP BETWEEN DESIGN & EXECUTION.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#756557] leading-relaxed font-light">
                <p>
                  Most interior fit-outs fail in the gaps — a wall contractor who does not coordinate with the kitchen fabricator, or a ceiling design decided after wiring is already locked in concrete.
                </p>
                <p>
                  Interior Affairs closes those gaps. We plan walls, floors, ceilings, kitchens, wardrobes, and finishing details together from day one — so nothing gets decided in isolation and nothing gets left half-finished.
                </p>
              </div>

              <div className="pt-4">
                <Button variant="primary" size="md" href="/services" icon={<ArrowRight size={15} />}>
                  Explore All 10 Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF] shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
                  alt="Interior Affairs Integrated Turnkey Fitout"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/90 backdrop-blur-md p-6 border border-[#E2DACF] rounded">
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24221F] mb-1">
                    Integrated Interior Coordination
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
      {/* SIGNATURE BEFORE & AFTER TRANSFORMATION                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-2">
              SEE THE TRANSFORMATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#24221F] mb-4">
              From Bare Structure to Finished Home.
            </h2>
            <p className="text-sm text-[#756557] font-light leading-relaxed">
              From concrete walls, conduit runs, and rough floors to a cohesive, move-in-ready residence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <BeforeAfterSlider
              beforeImage="/images/transformation/grey-structure.jpg"
              afterImage="/images/transformation/finished-interior.jpg"
              title="Raw Grey Structure vs. Finished Residence"
              beforeLabel="GREY STRUCTURE (RAW)"
              afterLabel="FINISHED INTERIOR"
              className="aspect-[16/10] sm:aspect-[16/9] max-h-[420px] md:max-h-[460px] shadow-2xl border border-[#E2DACF]"
            />
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" href="/contact" icon={<ArrowRight size={15} />}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* BUDGET ESTIMATOR SECTION                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DACF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <BudgetCalculator />
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* CLIENT FEEDBACK SLIDER                                             */}
      {/* ------------------------------------------------------------------ */}
      <FeedbackSlider />

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CONSULTATION CTA                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#F5F2EC]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block">
                LET US DISCUSS YOUR SPACE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#24221F] leading-tight">
                Visit Our Studio & Material Library.
              </h2>
              <p className="text-sm text-[#756557] leading-relaxed font-light">
                Digital renders only tell you so much. Experiencing stone veneers, lacquer boards, and brass inlay profiles in person gives you clarity on how your interior will feel.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="md" href="/contact">
                  Schedule Studio Consultation
                </Button>
                <Button
                  variant="whatsapp"
                  size="md"
                  href={`https://wa.me/923008504499?text=${encodeURIComponent('Hi Interior Affairs, I would like to schedule a site visit or consultation.')}`}
                  isExternal
                  icon={<MessageCircle size={15} />}
                >
                  Direct WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF] shadow-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior Affairs Studio Space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
