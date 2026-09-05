import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Compass,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  FileText,
  Ruler,
  Hammer,
  Eye
} from 'lucide-react';
import { ActivePage } from '../types';

interface ProcessViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry?: (msg: string) => void;
}

interface DetailedStage {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  experience: string;
  image: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const PROCESS_STAGES: DetailedStage[] = [
  {
    step: '01',
    number: 'Stage 01',
    title: 'CONSULTATION & DISCOVERY',
    subtitle: 'Mapping your vision, lifestyle & budget',
    description:
      'We sit down to understand how you actually live, cook, entertain, and relax. Rather than pushing pre-made design templates, we calibrate your aesthetic preferences, functional priorities, and realistic budget parameters.',
    experience:
      'You share your plans, reference photos, or wishlist; our team listens, defines project scope, and assigns your dedicated project director.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Comprehensive spatial & lifestyle requirements brief',
      'Preliminary budget bracket & scope definition',
      'Initial aesthetic moodboard & material direction',
      'Direct contact with your dedicated Project Director'
    ],
    icon: <Compass size={18} />
  },
  {
    step: '02',
    number: 'Stage 02',
    title: 'LASER SITE SURVEY & TECHNICAL AUDIT',
    subtitle: 'Precision measurements & structural inspection',
    description:
      'Before drawing a single wall or cabinet, our technical surveyors conduct millimeter-precise laser scans of your raw grey structure. We inspect conduit routing, plumbing stacks, floor levels, and daylight angles to eliminate unpleasant surprises later.',
    experience:
      'Our team handles the on-site technical inspection thoroughly; you receive a clean CAD status report and structural audit of your space.',
    image: '/images/transformation/grey-structure.jpg',
    deliverables: [
      'Millimeter-accurate laser CAD floor plans & elevations',
      'Electrical, plumbing, drainage & HVAC conduit audit',
      'Floor leveling, wall dampness & substrate testing',
      'High-resolution 360° site photo documentation'
    ],
    icon: <Ruler size={18} />
  },
  {
    step: '03',
    number: 'Stage 03',
    title: '3D SPATIAL DESIGN & LIGHTING',
    subtitle: 'Photorealistic perspective before anything is built',
    description:
      'Our architects craft 3D visual models showing how walls, ceilings, kitchens, wardrobes, and lighting harmony flow together. You see the exact interplay of materials, textures, and illumination before a single rupee is spent on manufacturing.',
    experience:
      'You review realistic 3D renderings of your future home, request refinements, and finalize the look with complete confidence.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Photorealistic 3D perspectives of every room and zone',
      'Integrated false ceiling coves & architectural lighting plan',
      'Detailed joinery drawings for kitchens, vanities & wardrobes',
      'Itemized transparent Bill of Quantities (BOQ)'
    ],
    icon: <Layers size={18} />
  },
  {
    step: '04',
    number: 'Stage 04',
    title: 'PHYSICAL MATERIAL & FINISH CURATION',
    subtitle: 'Touch real stone, seasoned veneers & fabrics',
    description:
      'Renders only show form; real spaces depend on tactile quality. In our design suite, you inspect and touch physical samples: Gandhara travertine, textured wood veneers, imported bouclé fabrics, soft-close Blum hardware, and fluted panel swatches.',
    experience:
      'You touch, compare, and approve the actual materials that will be installed inside your residence, ensuring zero mismatch in texture or color.',
    image:
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Curated physical material board for your home',
      'Cabinetry hardware, handle & drawer track approvals',
      'Designer wallpaper, SPC flooring plank & paint swatches',
      'Signed material specification and price lock-in'
    ],
    icon: <Sparkles size={18} />
  },
  {
    step: '05',
    number: 'Stage 05',
    title: 'TURNKEY MASTER EXECUTION',
    subtitle: 'Single-team installation with on-site supervision',
    description:
      'Our synchronized team enters the space: false ceiling framing, electrical track routing, custom cabinetry installation, wall panelling, flooring, and finishing trims. Because every trade works under one project director, there are zero trade clashes or scheduling delays.',
    experience:
      'No running around town or arbitrating between different contractors. You receive weekly milestone photos while our team handles daily on-site quality control.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    deliverables: [
      'Single on-site Project Supervisor managing all trades',
      'False ceilings, LED tracks & acoustic insulation',
      'Modular kitchens, quartz countertops & custom wardrobes',
      'SPC flooring, designer wall panels, wallpapers & blinds'
    ],
    icon: <Hammer size={18} />
  },
  {
    step: '06',
    number: 'Stage 06',
    title: 'WHITE-GLOVE HANDOVER & WARRANTY',
    subtitle: 'Immaculate punch-list clearance & move-in ready',
    description:
      'We perform an exhaustive walk-through with you, inspecting every joint, edge, drawer glide, and lighting circuit. Any punch-list adjustments are rectified on the spot. Once cleared, we perform deep cleaning and hand over a turnkey interior ready for immediate living.',
    experience:
      'You walk into a fully finished, dust-free home with all keys, hardware warranties, and maintenance guides organized in an elegant handover dossier.',
    image: '/images/transformation/finished-interior.jpg',
    deliverables: [
      'Comprehensive client walkthrough & punch-list resolution',
      'Post-installation deep cleaning & surface polishing',
      'Hardware & workmanship warranty certificates',
      'Turnkey move-in ready handover of your sanctuary'
    ],
    icon: <ShieldCheck size={18} />
  }
];

const COMPARISONS = [
  {
    aspect: 'Trade Coordination',
    traditional: 'You juggle 5 to 7 separate contractors (mason, electrician, carpenter, ceiling installer, painter).',
    interiorAffairs: 'Single accountable Project Director managing all trades under one synchronized timeline.'
  },
  {
    aspect: 'Measurement & Alignment',
    traditional: 'Carpenters blame electricians, electricians blame ceiling installers when fittings clash.',
    interiorAffairs: 'Full millimeter laser surveying and coordinated 3D CAD modeling so all elements align seamlessly.'
  },
  {
    aspect: 'Material Quality',
    traditional: 'Substitutions happen on-site without consent; low-grade core boards hidden behind laminates.',
    interiorAffairs: 'Physical material boards approved in advance with certified premium boards and branded hardware.'
  },
  {
    aspect: 'Pricing & Budget',
    traditional: 'Frequent surprise bills, undefined extras, and ballooning costs halfway through the project.',
    interiorAffairs: 'Itemized, transparent Bill of Quantities (BOQ) with fixed scope and agreed milestones.'
  },
  {
    aspect: 'Completion & Snagging',
    traditional: 'Trades abandon the job at 90%, leaving you to track down missing workers for unfinished snags.',
    interiorAffairs: 'White-glove handover with formal punch-list clearance and written craftsmanship warranties.'
  }
];

const PROCESS_FAQS = [
  {
    q: 'At what stage of construction should we contact Interior Affairs?',
    a: 'The ideal moment is when your grey structure construction is nearing completion (masonry, lintels, and roof slabs done). Engaging us before rough plumbing and electrical conduits are permanently plastered allows us to plan lighting coves, hidden AC lines, and kitchen island services without any costly dismantling.'
  },
  {
    q: 'Can you take over an interior that is already partially finished or lived-in?',
    a: 'Yes. While our core specialty is complete turnkey execution from grey structure, we regularly execute selective room transformations, custom modular kitchen fit-outs, luxury wardrobe installations, and designer wall overhauls for existing residential properties.'
  },
  {
    q: 'How do you guarantee that the finished room matches the 3D renders?',
    a: 'Unlike agencies that only produce concept pictures, our 3D design team works in direct collaboration with our workshop master craftsmen. The 3D render uses the exact dimensions from our laser survey and references real material swatches you physically approve before fabrication begins.'
  },
  {
    q: 'Do you execute projects outside Islamabad and Rawalpindi?',
    a: 'Yes, Interior Affairs provides turnkey interior finishing nationwide across Pakistan. We regularly service projects in Islamabad, Rawalpindi, Lahore, Peshawar, Faisalabad, and other major metropolitan areas with our dedicated mobile installation crews.'
  }
];

export const ProcessView: React.FC<ProcessViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeStage = PROCESS_STAGES[activeStageIndex];

  const handleWhatsApp = (stageTitle?: string) => {
    const text = stageTitle
      ? `Hi Interior Affairs, I'm reviewing your process page and have a question regarding "${stageTitle}". Could you please guide me?`
      : `Hi Interior Affairs, I would like to discuss your 6-stage turnkey process for my interior project.`;

    if (onWhatsAppEnquiry) {
      onWhatsAppEnquiry(text);
    } else {
      window.open(
        `https://wa.me/923008504499?text=${encodeURIComponent(text)}`,
        '_blank'
      );
    }
  };

  return (
    <div id="process-page" className="py-12 sm:py-20 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* ================================================================ */}
        {/* 1. EDITORIAL HERO HEADER                                          */}
        {/* ================================================================ */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F5F2EC] border border-[#E2DACF] mb-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557]">
            <Compass size={13} className="text-[#24221F]" />
            <span>Turnkey Methodology · Nationwide Pakistan</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-6 leading-[1.1] font-medium tracking-tight">
            FROM IDEA TO FINISHED SPACE.
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#756557] leading-relaxed font-light mb-8 max-w-3xl">
            Interior fit-outs fail when trades operate in silos. We unite architectural design, laser survey, material curation, structural finishing, and master joinery into a synchronized 6-stage journey — with one team accountable from day one to handover.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-4 rounded">
              <span className="font-mono text-xs text-[#756557] block mb-1">01 / PILLAR</span>
              <p className="font-serif-editorial text-base sm:text-lg text-[#24221F] font-semibold">
                Single Point
              </p>
              <p className="text-[11px] text-[#756557] font-light mt-0.5">
                Zero multi-trade finger pointing
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-4 rounded">
              <span className="font-mono text-xs text-[#756557] block mb-1">02 / PILLAR</span>
              <p className="font-serif-editorial text-base sm:text-lg text-[#24221F] font-semibold">
                Laser Cad Accuracy
              </p>
              <p className="text-[11px] text-[#756557] font-light mt-0.5">
                Millimeter-precise on-site survey
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-4 rounded">
              <span className="font-mono text-xs text-[#756557] block mb-1">03 / PILLAR</span>
              <p className="font-serif-editorial text-base sm:text-lg text-[#24221F] font-semibold">
                Tactile Material Swatches
              </p>
              <p className="text-[11px] text-[#756557] font-light mt-0.5">
                Touch physical stone, wood & fabrics
              </p>
            </div>

            <div className="bg-[#F5F2EC] border border-[#E2DACF] p-4 rounded">
              <span className="font-mono text-xs text-[#756557] block mb-1">04 / PILLAR</span>
              <p className="font-serif-editorial text-base sm:text-lg text-[#24221F] font-semibold">
                White-Glove Handover
              </p>
              <p className="text-[11px] text-[#756557] font-light mt-0.5">
                Immediate punch-list clearance
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 2. INTERACTIVE STAGE EXPLORER & SPOTLIGHT                        */}
        {/* ================================================================ */}
        <div className="mb-20 sm:mb-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-2">
                Interactive Stage Walkthrough
              </span>
              <h2 className="font-serif-editorial text-2xl sm:text-4xl text-[#24221F]">
                EXPLORE EACH STAGE OF THE JOURNEY
              </h2>
            </div>
            <p className="text-xs text-[#756557] font-light max-w-md">
              Select any stage below to inspect deliverables, on-site activities, and what you will experience.
            </p>
          </div>

          {/* Step Pill Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
            {PROCESS_STAGES.map((stg, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#24221F] text-[#FAF8F5] border-[#24221F] shadow-md scale-[1.02]'
                      : 'bg-[#F5F2EC] text-[#24221F] border-[#E2DACF] hover:border-[#24221F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isActive ? 'text-[#D5C8B8]' : 'text-[#756557]'
                      }`}
                    >
                      {stg.step}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold ${
                        isActive ? 'bg-[#FAF8F5]/20 text-[#FAF8F5]' : 'bg-[#E7E1D8] text-[#756557]'
                      }`}
                    >
                      Phase
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider line-clamp-2">
                    {stg.title.split('&')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Featured Detail Card */}
          <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#24221F] text-[#FAF8F5] text-xs font-mono font-semibold rounded">
                    {activeStage.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#24221F] mb-2 font-medium">
                    {activeStage.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#756557]">
                    {activeStage.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#24221F] font-light leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Experience Quote Callout */}
                <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#24221F] rounded-r space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#756557] block">
                    What You Experience
                  </span>
                  <p className="text-xs sm:text-sm text-[#24221F] font-normal leading-relaxed italic">
                    &ldquo;{activeStage.experience}&rdquo;
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#756557] block mb-3">
                    Concrete Stage Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 bg-[#FAF8F5] border border-[#E2DACF] rounded text-xs text-[#24221F]"
                      >
                        <CheckCircle2 size={15} className="text-[#24221F] shrink-0 mt-0.5" />
                        <span className="font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => handleWhatsApp(activeStage.title)}
                    className="bg-[#25D366] text-[#FAF8F5] hover:bg-[#1ebd59] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-6 rounded transition-all cursor-pointer flex items-center gap-2"
                  >
                    <MessageSquare size={14} />
                    <span>Enquire About {activeStage.step}</span>
                  </button>

                  {activeStageIndex < PROCESS_STAGES.length - 1 && (
                    <button
                      onClick={() => setActiveStageIndex((prev) => prev + 1)}
                      className="border border-[#E2DACF] text-[#24221F] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.18em] font-semibold py-3.5 px-5 rounded transition-all cursor-pointer"
                    >
                      Next: Stage {PROCESS_STAGES[activeStageIndex + 1].step} →
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-5 aspect-[4/3] sm:aspect-[16/11] bg-[#E7E1D8] rounded overflow-hidden border border-[#E2DACF] relative shadow-md group">
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#D5C8B8] block">
                      {activeStage.number} Execution
                    </span>
                    <span className="text-xs sm:text-sm font-serif-editorial font-semibold">
                      {activeStage.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5]/20 backdrop-blur-sm flex items-center justify-center text-[#FAF8F5]">
                    {activeStage.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. VISUAL 6-STAGE TIMELINE CARDS                                 */}
        {/* ================================================================ */}
        <div className="mb-24 sm:mb-32">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-2">
              End-to-End Roadmap
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-4">
              THE 6-STAGE TRANSFORMATION CYCLE
            </h2>
            <p className="text-xs sm:text-sm text-[#756557] font-light leading-relaxed">
              Every project follows this proven sequential architecture to safeguard quality, milestone completion, and financial clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-[#F5F2EC] border border-[#E2DACF] rounded overflow-hidden flex flex-col justify-between group hover:border-[#24221F] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Image Banner */}
                <div className="aspect-[16/10] bg-[#E7E1D8] relative overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#24221F]/90 backdrop-blur-sm text-[#FAF8F5] px-2.5 py-1 text-[10px] font-mono font-semibold rounded">
                    {stage.step}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#756557] block mb-1">
                      {stage.subtitle}
                    </span>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#24221F] font-semibold mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#756557] font-light leading-relaxed mb-4">
                      {stage.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#E2DACF]">
                      {stage.deliverables.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-[#24221F]">
                          <Check size={13} className="text-[#24221F] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveStageIndex(idx);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#24221F] hover:text-[#756557] pt-3 flex items-center justify-between border-t border-[#E2DACF] cursor-pointer"
                  >
                    <span>Inspect Full Stage Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 4. THE INTERIOR AFFAIRS DIFFERENCE (COMPARISON MATRIX)            */}
        {/* ================================================================ */}
        <div className="mb-24 sm:mb-32 bg-[#FAF8F5] border border-[#E2DACF] rounded p-6 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-2">
              Why Our Process Works
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-4">
              THE INTERIOR AFFAIRS DIFFERENCE
            </h2>
            <p className="text-xs sm:text-sm text-[#756557] font-light leading-relaxed">
              Managing an interior project yourself means coordinating dozens of vendors with conflicting interests. Here is how our turnkey methodology solves every traditional headache.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#E2DACF]">
                  <th className="py-4 px-4 text-xs font-mono uppercase tracking-wider text-[#756557] w-1/4">
                    Key Dimension
                  </th>
                  <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#9E3A2F] w-3/8 bg-[#FDF7F7] rounded-t">
                    The Traditional Way (5+ Vendors)
                  </th>
                  <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#24221F] w-3/8 bg-[#F5F2EC] rounded-t">
                    The Interior Affairs Process
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DACF] text-xs">
                {COMPARISONS.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F5F2EC]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#24221F]">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-4 text-[#756557] bg-[#FDF7F7]/60 leading-relaxed font-light">
                      <div className="flex items-start gap-2">
                        <X size={14} className="text-[#C2410C] shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#24221F] bg-[#F5F2EC]/60 leading-relaxed font-normal">
                      <div className="flex items-start gap-2">
                        <Check size={14} className="text-[#15803D] shrink-0 mt-0.5" />
                        <span>{row.interiorAffairs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 5. PROCESS ACCORDION FAQS                                         */}
        {/* ================================================================ */}
        <div className="mb-24 sm:mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-2">
              Common Questions
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F]">
              EVERYTHING YOU NEED TO KNOW ABOUT OUR PROCESS
            </h2>
          </div>

          <div className="space-y-4">
            {PROCESS_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F2EC] border border-[#E2DACF] rounded overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif-editorial text-base sm:text-lg text-[#24221F] font-semibold">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E2DACF] flex items-center justify-center shrink-0 text-[#24221F]">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#756557] font-light leading-relaxed border-t border-[#E2DACF] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 6. LUXURY DARK CTA BANNER                                         */}
        {/* ================================================================ */}
        <div className="bg-[#1C1A17] text-[#FAF8F5] p-8 sm:p-14 lg:p-20 rounded shadow-xl max-w-5xl mx-auto relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D5C8B8] font-semibold block">
              Stage 01 Begins Today
            </span>

            <h3 className="font-serif-editorial text-3xl sm:text-5xl font-medium leading-tight text-[#FAF8F5]">
              READY TO BRING YOUR SPACE TO LIFE?
            </h3>

            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
              Whether you are holding architectural grey structure blueprints or looking to renovate an existing home, talk through your project with our senior design team.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#FAF8F5] text-[#24221F] hover:bg-[#E7E1D8] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar size={15} />
                <span>BOOK A CONSULTATION</span>
              </button>

              <button
                onClick={() => handleWhatsApp()}
                className="w-full sm:w-auto bg-[#25D366] text-[#FAF8F5] hover:bg-[#1ebd59] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare size={15} />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] text-[#D5C8B8]/80 flex flex-wrap items-center justify-center gap-4">
              <span>Direct Hotline: +92 300 8504499</span>
              <span>·</span>
              <span>Nationwide Execution, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
