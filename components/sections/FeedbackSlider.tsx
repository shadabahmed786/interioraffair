'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  MapPin,
  Play,
  Pause,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';

export interface FeedbackItem {
  id: string;
  clientName: string;
  initials: string;
  location: string;
  projectType: string;
  rating: number;
  highlight: string;
  quote: string;
  scope: string[];
  year: string;
  image: string;
}

export const FEEDBACK_DATA: FeedbackItem[] = [
  {
    id: 'review-1',
    clientName: 'Barrister Daniyal & Sarah Jahangir',
    initials: 'DJ',
    location: 'Sector E-7, Islamabad',
    projectType: 'Turnkey 1-Kanal Villa Fit-Out (2026)',
    rating: 5,
    highlight: 'Flawless translation of our vision into physical stone and wood.',
    quote:
      'We handed Interior Affairs our bare grey structure in mid-2025 and moved into our home in early 2026. Having one lead team orchestrate the acoustic wood slats, concealed magnetic door frames, and double-height marble feature wall removed every ounce of typical contractor stress. Absolute master-class finishing.',
    scope: ['Concealed Doors', 'Acoustic Ceilings', 'Marble Feature Wall', 'Bespoke Kitchen'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'review-2',
    clientName: 'Dr. Haris & Mahnoor Qureshi',
    initials: 'HQ',
    location: 'DHA Phase 5, Lahore',
    projectType: 'Luxury Penthouse Joinery & Ceilings (2026)',
    rating: 4,
    highlight: 'Superb joinery and craftsmanship — well worth the slight material wait.',
    quote:
      'The finishing on our matte-lacquer cabinetry, fluted wall cladding, and cove lighting is second to none. We had a slight one-week delay waiting on the imported charcoal veneer profiles, but the site supervisor kept us updated daily with progress videos. The end result is stunning and built to last.',
    scope: ['Matte-Lacquer Cabinets', 'Fluted Cladding', 'Cove Lighting', 'SPC Flooring'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'review-3',
    clientName: 'Tariq & Ayesha Malik',
    initials: 'TM',
    location: 'Margalla View Penthouse, Islamabad',
    projectType: 'Turnkey Grey Structure Finishing (5,200 sq ft)',
    rating: 5,
    highlight: 'Zero contractor disputes and millimeter-precision joinery.',
    quote:
      'Taking over from a raw concrete structure seemed daunting until Interior Affairs stepped in. Having one dedicated team handle our acoustic false ceilings, fluted wall panels, and bespoke kitchen saved us countless hours of contractor disputes. The precision and detailing truly set them apart.',
    scope: ['False Ceilings', 'Designer Walls', 'Modular Kitchen', 'SPC Flooring'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'review-4',
    clientName: 'Zainab Khurram & Bilal Tariq',
    initials: 'ZK',
    location: 'Gulberg III, Lahore',
    projectType: 'Master Suite & Modular Kitchen Overhaul (2025)',
    rating: 4,
    highlight: 'Exceptional material library and finishes; punch-list took slight patience.',
    quote:
      'Being able to touch real travertine and test Blum hardware in person gave us complete confidence. The final kitchen and master suite look straight out of Architectural Digest. Final punch-list snagging took three extra days before handover, but the team rectified every millimeter until it was immaculate.',
    scope: ['Modular Kitchen', 'Designer Wall', 'Blinds', 'Golden Trims'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'review-5',
    clientName: 'Brig. (R) Nadeem Akhtar',
    initials: 'NA',
    location: 'DHA Phase 2, Islamabad',
    projectType: 'Ground-Up Turnkey Interior after Grey Structure (2025)',
    rating: 5,
    highlight: 'Disciplined execution with zero cost escalations.',
    quote:
      'Disciplined execution, exceptional finishing, and no surprise cost escalations. Their team took our bare grey structure shell and turned it into an elegant, warm home. I unreservedly recommend Interior Affairs to any homeowner who values professionalism and peace of mind.',
    scope: ['Complete Home Finishing', 'Flooring', 'Kitchen', 'Wardrobes'],
    year: '2025',
    image: '/images/transformation/finished-interior.jpg'
  },
  {
    id: 'review-6',
    clientName: 'Hamza & Maria Abbasi',
    initials: 'HA',
    location: 'Bahria Town Phase 8, Rawalpindi',
    projectType: 'Living Hall & Double-Height Feature Wall (2025)',
    rating: 5,
    highlight: 'Single project manager supervised every trade daily.',
    quote:
      'Managing multiple vendors in Pakistan usually results in endless finger-pointing. Interior Affairs provided a single project manager who supervised electricians, carpenters, and ceiling fitters on-site every day. The backlit stone feature wall and brass inlays are stunning.',
    scope: ['Designer Feature Walls', 'Golden Strips', 'False Ceilings', 'Custom Blinds'],
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  })
};

const AUTOPLAY_INTERVAL = 6000;

export const FeedbackSlider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const total = FEEDBACK_DATA.length;
  const currentIndex = ((page % total) + total) % total;
  const current = FEEDBACK_DATA[currentIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
      setProgress(0);
    },
    []
  );

  const jumpToSlide = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, paginate]);

  return (
    <section
      id="feedback-section"
      className={`py-20 sm:py-28 bg-[#F5F2EC] border-y border-[#E2DACF] overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#FAF8F5] border border-[#E2DACF] mb-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557]">
              <Sparkles size={13} className="text-[#24221F]" />
              <span>Verified Homeowner Handover Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#24221F] font-medium leading-tight">
              WORDS FROM OUR CLIENTS.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#756557] font-light leading-relaxed mt-2 max-w-xl">
              From bare grey structures to finished sanctuaries — see what homeowners experience with single-team turnkey execution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start md:self-end">
            <div className="hidden sm:flex items-center gap-2.5 bg-[#FAF8F5] border border-[#E2DACF] px-4 py-2 rounded shadow-2xs">
              <div className="flex text-[#B89758]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < 4 ? '#B89758' : 'url(#gold-half) || #B89758'}
                    className="text-[#B89758]"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#24221F]">4.8 Rating</span>
              <span className="text-[11px] text-[#756557]">· 120+ Homes Handed Over</span>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E2DACF] px-3 py-2 rounded text-xs font-mono text-[#24221F] font-medium">
              <span className="font-semibold text-[#24221F]">0{currentIndex + 1}</span>
              <span className="text-[#756557] mx-1">/</span>
              <span className="text-[#756557]">0{total}</span>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              className="w-10 h-10 rounded border border-[#E2DACF] bg-[#FAF8F5] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] transition-all flex items-center justify-center cursor-pointer shadow-2xs"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous review"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded border border-[#E2DACF] bg-[#FAF8F5] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next review"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded border border-[#E2DACF] bg-[#FAF8F5] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Animated Stage */}
        <div className="relative overflow-hidden rounded bg-[#FAF8F5] border border-[#E2DACF] shadow-sm mb-8">
          <div className="w-full h-1 bg-[#E2DACF]/60 overflow-hidden">
            <div
              className="h-full bg-[#24221F] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-14 min-h-[460px] flex items-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[#B89758]">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill={i < current.rating ? '#B89758' : 'none'}
                            className={i < current.rating ? 'text-[#B89758]' : 'text-[#D5C8B8]'}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-[#756557] ml-2 font-semibold">
                        {current.rating}.0 Verified Score
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] border border-[#DCFCE7] px-2.5 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
                      <span>Verified Handover · {current.year}</span>
                    </div>
                  </div>

                  <div className="relative pl-6 sm:pl-8 border-l-2 border-[#24221F]">
                    <Quote
                      size={28}
                      className="text-[#E2DACF] absolute -top-1 -left-2 -translate-x-1/2 opacity-70"
                    />
                    <h3 className="font-serif text-xl sm:text-3xl text-[#24221F] font-medium leading-snug">
                      &ldquo;{current.highlight}&rdquo;
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#756557] font-light leading-relaxed">
                    {current.quote}
                  </p>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#756557] block mb-2">
                      Executed Scope:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.scope.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#F5F2EC] border border-[#E2DACF] rounded text-[11px] font-medium text-[#24221F]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2DACF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#24221F] text-[#FAF8F5] flex items-center justify-center font-mono font-semibold text-xs border border-[#D5C8B8]">
                        {current.initials}
                      </div>
                      <div>
                        <h4 className="font-serif text-base sm:text-lg text-[#24221F] font-semibold">
                          {current.clientName}
                        </h4>
                        <p className="text-xs text-[#756557] flex items-center gap-1 mt-0.5 font-light">
                          <MapPin size={12} className="text-[#24221F]" />
                          <span>{current.location}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#756557] self-start sm:self-center">
                      {current.projectType}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] sm:aspect-[16/11] bg-[#E7E1D8] rounded overflow-hidden border border-[#E2DACF] relative shadow-md group">
                    <motion.img
                      key={current.image}
                      initial={{ scale: 1.05, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      src={current.image}
                      alt={current.projectType}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5]">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#D5C8B8] block mb-1">
                        Finished Project Showcase
                      </span>
                      <p className="text-xs sm:text-sm font-serif font-semibold line-clamp-1">
                        {current.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {FEEDBACK_DATA.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpToSlide(idx)}
                className={`p-3 sm:p-4 rounded border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#24221F] text-[#FAF8F5] border-[#24221F] shadow-sm scale-[1.02]'
                    : 'bg-[#FAF8F5] text-[#24221F] border-[#E2DACF] hover:border-[#24221F]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] font-semibold ${
                      isActive ? 'text-[#D5C8B8]' : 'text-[#756557]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#B89758]">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={10}
                        fill={starIdx < item.rating ? '#B89758' : 'none'}
                        className={starIdx < item.rating ? 'text-[#B89758]' : 'text-[#D5C8B8]'}
                      />
                    ))}
                  </div>
                </div>

                <p
                  className={`text-[11px] font-serif font-semibold line-clamp-1 mb-1 ${
                    isActive ? 'text-[#FAF8F5]' : 'text-[#24221F]'
                  }`}
                >
                  {item.clientName}
                </p>

                <span
                  className={`text-[10px] font-light truncate ${
                    isActive ? 'text-[#D5C8B8]' : 'text-[#756557]'
                  }`}
                >
                  {item.location.split(',')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Consultation Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2DACF]">
          <p className="text-xs text-[#756557] font-light text-center sm:text-left">
            Have an upcoming interior project in Pakistan? Let&apos;s discuss your space with our design team.
          </p>
          <Button variant="secondary" size="sm" href="/contact">
            Schedule A Site Consultation <ArrowRight size={14} className="ml-1 inline" />
          </Button>
        </div>
      </div>
    </section>
  );
};
