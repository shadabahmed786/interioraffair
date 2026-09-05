import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  Sparkles,
  CheckCircle,
  Eye,
  Sliders,
  RotateCcw,
  MessageCircle,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SpaceCategory, MoodType, BudgetTier, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { SPACES, MOODS } from '../data/moods';
import { CURATED_ROOMS } from '../data/rooms';

interface DesignWizardProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const DesignWizard: React.FC<DesignWizardProps> = ({
  onSelectProduct,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedSpace, setSelectedSpace] = useState<SpaceCategory>('living');
  const [selectedMood, setSelectedMood] = useState<MoodType>('calm');
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier>('100k_300k');
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const [roomNotes, setRoomNotes] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingPhase, setProcessingPhase] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const budgetOptions: { id: BudgetTier; label: string; range: string; desc: string }[] = [
    { id: 'under_100k', label: 'Under 100K', range: '< PKR 100,000', desc: 'Essential Accent & Sculptural Statements' },
    { id: '100k_300k', label: '100K — 300K', range: 'PKR 100,000 — 300,000', desc: 'Focused Living & Dining Curations' },
    { id: '300k_500k', label: '300K — 500K', range: 'PKR 300,000 — 500,000', desc: 'Complete Room Interior Package' },
    { id: '500k_1m', label: '500K — 1M', range: 'PKR 500,000 — 1,000,000', desc: 'Multi-Room Spatial Suite' },
    { id: '1m_plus', label: '1M+ (Bespoke)', range: 'PKR 1,000,000+', desc: 'Full Architectural Turnkey Residence' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateMySpace = () => {
    setIsProcessing(true);
    setProcessingPhase(0);
    window.scrollTo({ top: 180, behavior: 'smooth' });

    setTimeout(() => setProcessingPhase(1), 900);
    setTimeout(() => setProcessingPhase(2), 1800);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 2700);
  };

  const handleReset = () => {
    setShowResult(false);
    setCurrentStep(1);
    setUploadedImagePreview(null);
    setRoomNotes('');
  };

  const processingMessages = [
    'Analyzing spatial layout, lighting vectors & proportion scale...',
    'Harmonizing Pakistani walnut, Rawal travertine & Belgian bouclé textures...',
    'Finalizing architectural ensemble presentation for your studio review...'
  ];

  // Find matching curated room concept
  const matchingRoom =
    CURATED_ROOMS.find((r) => r.spaceType === selectedSpace && r.mood === selectedMood) ||
    CURATED_ROOMS[0];

  // Selected products for this concept
  const curatedProducts = PRODUCTS.filter((p) => {
    return p.spaceCategories.includes(selectedSpace) || p.moods.includes(selectedMood);
  }).slice(0, 5);

  const totalCalculatedPrice = curatedProducts.reduce((sum, p) => sum + (p.price || 0), 0);
  const formattedTotal = `PKR ${totalCalculatedPrice.toLocaleString()}`;

  return (
    <section id="design-my-space-experience" className="w-full">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#756557] mb-3 font-medium">
          The Interior Affairs Interactive Studio
        </p>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] leading-tight mb-4">
          Curate Your Environment.
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed max-w-2xl mx-auto">
          Don&apos;t settle for disconnected contractors. Tell us how you want your space to feel, upload your room, and let Interior Affairs compose a tailored architectural sanctuary.
        </p>
      </div>

      {/* PROCESSING STATE */}
      <AnimatePresence mode="wait">
        {isProcessing && (
          <motion.div
            key="processing-state"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            id="wizard-processing-overlay"
            className="min-h-[500px] flex flex-col items-center justify-center p-8 glass-card border border-[#E2DACF] max-w-4xl mx-auto my-8 shadow-xl"
          >
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-[#D5C8B8] border-t-[#24221F] rounded-full animate-spin" />
              <Sparkles size={22} className="text-[#24221F] animate-pulse" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#756557] mb-2 font-medium">
              Spatial Synthesis Engine · Phase 0{processingPhase + 1}
            </p>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F] text-center max-w-lg">
              Curating your {selectedSpace.toUpperCase()} concept...
            </h3>
            <p className="text-xs text-[#756557] mt-3 text-center max-w-md italic transition-all duration-300">
              &ldquo;{processingMessages[processingPhase]}&rdquo;
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WIZARD FLOW STEPS */}
      {!isProcessing && !showResult && (
        <div className="max-w-5xl mx-auto bg-[#FAF8F5] border border-[#E2DACF] p-4 sm:p-10 lg:p-14 shadow-sm">
          {/* Step Indicators */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 mb-8 sm:mb-14 border-b border-[#E2DACF] pb-4 sm:pb-6">
            {[
              { num: 1, title: 'Space' },
              { num: 2, title: 'Mood' },
              { num: 3, title: 'Scale' },
              { num: 4, title: 'Room' },
            ].map((step) => {
              const isCurrent = currentStep === step.num;
              const isCompleted = currentStep > step.num;
              return (
                <div key={step.num} className="flex flex-col">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                    <span
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all shrink-0 ${
                        isCurrent
                          ? 'bg-[#24221F] ring-2 ring-[#24221F]/30'
                          : isCompleted
                          ? 'bg-[#756557]'
                          : 'bg-[#D5C8B8]'
                      }`}
                    />
                    <span
                      className={`text-[8px] xs:text-[10px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.16em] font-medium truncate ${
                        isCurrent ? 'text-[#24221F]' : 'text-[#756557]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <div
                    className={`h-0.5 w-full transition-all ${
                      isCurrent ? 'bg-[#24221F]' : isCompleted ? 'bg-[#756557]' : 'bg-[#E2DACF]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* STEP 1: SPACE */}
          {currentStep === 1 && (
            <div id="wizard-step-1" className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                  Step 01
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                  Which space are we designing?
                </h3>
                <p className="text-xs text-[#756557] mt-1">
                  Select the spatial volume or room you would like to transform.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SPACES.map((space) => {
                  const isSelected = selectedSpace === space.id;
                  return (
                    <div
                      key={space.id}
                      id={`wizard-space-option-${space.id}`}
                      onClick={() => setSelectedSpace(space.id)}
                      className={`cursor-pointer group relative overflow-hidden border transition-all duration-300 ${
                        isSelected
                          ? 'border-[#24221F] bg-[#F5F2EC]'
                          : 'border-[#E2DACF] bg-[#FAF8F5] hover:border-[#756557]'
                      }`}
                    >
                      <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden relative">
                        <img
                          src={space.image}
                          alt={space.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {isSelected && (
                          <div className="absolute top-3 right-3 bg-[#24221F] text-[#F5F2EC] rounded-full p-1 shadow-md">
                            <CheckCircle size={14} />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif-editorial text-lg text-[#24221F]">{space.name}</h4>
                        <p className="text-[11px] text-[#756557] mt-1 line-clamp-2">
                          {space.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#E2DACF] flex justify-end">
                <button
                  id="wizard-step1-continue-btn"
                  onClick={() => setCurrentStep(2)}
                  className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 px-10 flex items-center gap-2 hover:bg-[#3A3835] transition-colors"
                >
                  Continue to Mood <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: MOOD */}
          {currentStep === 2 && (
            <div id="wizard-step-2" className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                  Step 02
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                  How should your space feel?
                </h3>
                <p className="text-xs text-[#756557] mt-1">
                  Choose the emotional sensory atmosphere you wish to experience every day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {MOODS.map((m) => {
                  const isSelected = selectedMood === m.id;
                  return (
                    <div
                      key={m.id}
                      id={`wizard-mood-option-${m.id}`}
                      onClick={() => setSelectedMood(m.id)}
                      className={`cursor-pointer p-6 border transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#24221F] bg-[#24221F] text-[#F5F2EC]'
                          : 'border-[#D5C8B8] bg-[#FAF8F5] text-[#24221F] hover:border-[#24221F]'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span
                            className={`text-[9px] uppercase tracking-[0.2em] font-semibold ${
                              isSelected ? 'text-[#D5C8B8]' : 'text-[#756557]'
                            }`}
                          >
                            Interior Affairs Mood
                          </span>
                          {isSelected && <CheckCircle size={14} className="text-[#D5C8B8]" />}
                        </div>
                        <h4 className="font-serif-editorial text-2xl mb-2">{m.title}</h4>
                        <p
                          className={`text-xs italic leading-relaxed mb-4 ${
                            isSelected ? 'text-[#FAF8F5]/80' : 'text-[#756557]'
                          }`}
                        >
                          &ldquo;{m.quote}&rdquo;
                        </p>
                      </div>

                      <div className="pt-4 border-t border-current/20 flex gap-2">
                        {m.palette.map((swatch) => (
                          <div
                            key={swatch.name}
                            className="w-5 h-5 rounded-full border border-black/20"
                            style={{ backgroundColor: swatch.hex }}
                            title={swatch.name}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#E2DACF] flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs uppercase tracking-[0.14em] text-[#756557] hover:text-[#24221F] flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} /> Back
                </button>
                <button
                  id="wizard-step2-continue-btn"
                  onClick={() => setCurrentStep(3)}
                  className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 px-10 flex items-center gap-2 hover:bg-[#3A3835] transition-colors"
                >
                  Continue to Scale <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET */}
          {currentStep === 3 && (
            <div id="wizard-step-3" className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                  Step 03
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                  Investment Scale
                </h3>
                <p className="text-xs text-[#756557] mt-1 max-w-lg">
                  Our curations respect your investment boundaries. Selecting a scale ensures our furniture combinations align with your project scope.
                </p>
              </div>

              <div className="space-y-3">
                {budgetOptions.map((opt) => {
                  const isSelected = selectedBudget === opt.id;
                  return (
                    <label
                      key={opt.id}
                      id={`wizard-budget-option-${opt.id}`}
                      className={`cursor-pointer flex justify-between items-center p-5 border transition-all ${
                        isSelected
                          ? 'border-[#24221F] bg-[#F5F2EC]'
                          : 'border-[#E2DACF] bg-[#FAF8F5] hover:border-[#756557]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="budget"
                          checked={isSelected}
                          onChange={() => setSelectedBudget(opt.id)}
                          className="w-4 h-4 text-[#24221F] accent-[#24221F]"
                        />
                        <div>
                          <span className="font-serif-editorial text-lg sm:text-xl text-[#24221F] block">
                            {opt.label}
                          </span>
                          <span className="text-xs text-[#756557]">{opt.desc}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#24221F] hidden sm:block">
                        {opt.range}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-[#E2DACF] flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs uppercase tracking-[0.14em] text-[#756557] hover:text-[#24221F] flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} /> Back
                </button>
                <button
                  id="wizard-step3-continue-btn"
                  onClick={() => setCurrentStep(4)}
                  className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 px-10 flex items-center gap-2 hover:bg-[#3A3835] transition-colors"
                >
                  Show Us Your Room <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: ROOM PHOTO & NOTES */}
          {currentStep === 4 && (
            <div id="wizard-step-4" className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                  Step 04
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                  Show Us Your Space
                </h3>
                <p className="text-xs text-[#756557] mt-1 max-w-lg">
                  Upload a photo of your existing room or architectural blueprint. Our designers use this to analyze lighting, ceiling height, and circulation paths.
                </p>
              </div>

              {/* Upload Dropzone */}
              <div className="border-2 border-dashed border-[#D5C8B8] p-8 sm:p-12 text-center bg-[#F5F2EC] relative group hover:border-[#24221F] transition-colors">
                <input
                  id="room-photo-upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                {uploadedImagePreview ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={uploadedImagePreview}
                      alt="Uploaded room"
                      className="max-h-56 object-cover border border-[#E2DACF] mb-4 shadow-sm"
                    />
                    <p className="text-xs text-[#24221F] font-medium flex items-center gap-1.5">
                      <FileCheck size={15} className="text-emerald-700" /> Photo attached
                      successfully. Click or drop to replace.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E7E1D8] flex items-center justify-center text-[#24221F] mb-3">
                      <Upload size={20} strokeWidth={1.5} />
                    </div>
                    <p className="font-serif-editorial text-lg text-[#24221F] mb-1">
                      Drag & Drop or Click to Upload Room Photo
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-[#756557]">
                      JPG, PNG, WEBP up to 15MB (Optional for Prototype)
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-2">
                  Special Architecture Considerations or Preferences (Optional)
                </label>
                <textarea
                  rows={3}
                  value={roomNotes}
                  onChange={(e) => setRoomNotes(e.target.value)}
                  placeholder="e.g. Large north-facing windows in Islamabad, concrete floors, seeking high acoustic warmth and pet-friendly bouclé..."
                  className="w-full bg-[#F5F2EC] border border-[#E2DACF] p-3 text-xs text-[#24221F] placeholder:text-[#756557]/40 outline-none resize-none focus:border-[#24221F]"
                />
              </div>

              <div className="pt-6 border-t border-[#E2DACF] flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="text-xs uppercase tracking-[0.14em] text-[#756557] hover:text-[#24221F] flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} /> Back
                </button>
                <button
                  id="wizard-create-space-btn"
                  onClick={handleCreateMySpace}
                  className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 px-10 flex items-center gap-2 hover:bg-[#3A3835] transition-colors font-medium shadow-md"
                >
                  <Sparkles size={14} /> Create My Space Presentation
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DESIGN RESULT PRESENTATION */}
      {showResult && (
        <div id="design-wizard-result-presentation" className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-500">
          {/* Presentation Header */}
          <div className="text-center max-w-3xl mx-auto border-b border-[#E2DACF] pb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
              Concept Presentation · Interior Affairs Studio
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#24221F] mb-4">
              Your Interior Affairs Space Concept
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
              Tailored for your {selectedSpace.toUpperCase()} area, curated for a{' '}
              <span className="font-semibold text-[#24221F] uppercase">{selectedMood}</span>{' '}
              atmosphere, and balanced within your {selectedBudget.replace('_', ' ').toUpperCase()}{' '}
              scale.
            </p>
          </div>

          {/* Large Hero Visualization */}
          <div className="relative aspect-[16/9] w-full bg-[#E7E1D8] overflow-hidden border border-[#E2DACF]">
            <img
              src={matchingRoom.heroImage}
              alt="Your Interior Affairs Space Visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-[#24221F]/90 backdrop-blur-sm text-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] px-4 py-2 flex items-center gap-2">
              <Eye size={13} /> High-Fidelity Room Composition
            </div>
          </div>

          {/* Design Philosophy Rationale */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-[#FAF8F5] p-8 sm:p-12 border border-[#E2DACF]">
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                Design Statement
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#24221F]">
                The Architectural Philosophy
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#24221F] leading-relaxed">
                {matchingRoom.philosophy}
              </p>
              <div className="pt-4 border-t border-[#E2DACF] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#756557] block mb-1">
                    Tactile Materials
                  </span>
                  <span className="font-medium text-[#24221F]">
                    {matchingRoom.materialsSummary}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#756557] block mb-1">
                    Tone Harmony
                  </span>
                  <div className="flex gap-2 mt-1">
                    {matchingRoom.palette.map((c, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Pieces For Your Space */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 border-b border-[#E2DACF] pb-4 gap-2">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#756557]">
                  Curated Catalog
                </p>
                <h3 className="font-serif-editorial text-3xl text-[#24221F]">
                  Pieces Selected For Your Space
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#756557] uppercase tracking-wider block">
                  Curated Ensemble Total:
                </span>
                <span className="font-serif-editorial text-2xl text-[#24221F] font-semibold">
                  {formattedTotal}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {curatedProducts.map((item) => (
                <div
                  key={item.id}
                  id={`curated-product-${item.id}`}
                  className="bg-[#FAF8F5] p-4 border border-[#E2DACF] flex flex-col justify-between group hover:border-[#24221F] transition-all"
                >
                  <div>
                    <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden mb-4 relative">
                      <img
                        src={item.images.primary}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#756557]">
                      {item.collection}
                    </span>
                    <h4 className="font-serif-editorial text-xl text-[#24221F] mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#756557] line-clamp-2 mb-3">
                      {item.shortDescription}
                    </p>

                    {item.whyWeChoseThis && (
                      <div className="p-3 bg-[#F5F2EC] text-[11px] text-[#756557] italic border-l border-[#24221F] mb-3">
                        &ldquo;{item.whyWeChoseThis}&rdquo;
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#E2DACF] flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#24221F]">
                      {item.priceFormatted}
                    </span>
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="text-xs uppercase tracking-wider text-[#24221F] font-semibold hover:underline"
                    >
                      View Piece →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bottom Bar */}
          <div className="bg-[#24221F] text-[#F5F2EC] p-8 sm:p-12 text-center flex flex-col items-center">
            <h3 className="font-serif-editorial text-3xl sm:text-4xl mb-3">
              Ready to bring this room to life?
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C8B8] max-w-lg mx-auto mb-8">
              Our studio architects in Islamabad are ready to arrange finish swatches, verify room dimensions on-site, and schedule fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="result-request-room-btn"
                onClick={onOpenConsultation}
                className="bg-[#FAF8F5] text-[#24221F] text-xs uppercase tracking-[0.18em] py-4 px-10 font-medium hover:bg-[#E7E1D8] transition-colors"
              >
                Request This Complete Room Package
              </button>
              <button
                id="result-whatsapp-btn"
                onClick={() => {
                  const names = curatedProducts.map((p) => p.name).join(', ');
                  const text = `Hi Interior Affairs, I just generated my ${selectedSpace.toUpperCase()} concept in ${selectedMood.toUpperCase()} mood on your website (${names}). Total: ${formattedTotal}. I'd like to consult with an architect.`;
                  onWhatsAppEnquiry(text);
                }}
                className="border border-[#FAF8F5] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] py-4 px-8 hover:bg-[#FAF8F5]/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} /> WhatsApp Concept Review
              </button>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 text-xs uppercase tracking-widest text-[#D5C8B8] hover:text-[#FAF8F5] underline underline-offset-4 flex items-center gap-1"
            >
              <RotateCcw size={12} /> Design Another Space
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
