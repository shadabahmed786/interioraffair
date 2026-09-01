import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Layers, Sparkles, MessageCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectLightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onOpenConsultation
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];
  const currentImage = images[activeImageIndex] || project.heroImage;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          id="project-lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9990] bg-[#1C1A17]/95 backdrop-blur-xl flex flex-col justify-between text-[#FAF8F5] overflow-hidden select-none"
        >
          {/* Top Bar Controls */}
          <div className="p-4 sm:p-6 flex justify-between items-center border-b border-white/10 relative z-20 bg-black/30">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#D5C8B8] font-semibold">
                <MapPin size={12} />
                <span>{project.location} · {project.year}</span>
              </div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#FAF8F5] leading-none mt-0.5">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] text-[#24221F] text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#E7E1D8] transition-colors cursor-pointer"
              >
                <span>Request Similar Design</span>
                <span>→</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Center Main Stage Image View */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={currentImage}
                alt={project.title}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-sm"
              />
            </AnimatePresence>

            {/* Left / Right Arrow Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                  }
                  className="absolute left-4 sm:left-10 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-4 sm:right-10 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition-all cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Details Footer */}
          <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-6 text-[#D5C8B8]">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#FAF8F5]/60 block">Scope</span>
                <span className="font-medium text-[#FAF8F5]">Everything after Grey Structure</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#FAF8F5]/60 block">Timeline</span>
                <span className="font-medium text-[#FAF8F5]">{project.timeline || '6–8 Weeks'}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#FAF8F5]/60 block">Category</span>
                <span className="font-medium text-[#FAF8F5] uppercase">{project.category}</span>
              </div>
            </div>

            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-9 rounded overflow-hidden border transition-all cursor-pointer ${
                      idx === activeImageIndex ? 'border-[#D5C8B8] ring-2 ring-[#D5C8B8]/40 scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
