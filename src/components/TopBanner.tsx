import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Sparkles, MapPin, Layers } from 'lucide-react';

interface AnnouncementItem {
  id: string;
  icon: React.ReactNode;
  text: string;
  mobileText: string;
  actionText?: string;
  actionType?: 'consultation' | 'showroom' | 'whatsapp' | 'maps';
}

interface TopBannerProps {
  onOpenConsultation: () => void;
  onOpenShowroom?: () => void;
  onWhatsAppEnquiry?: () => void;
  onDismiss?: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  onOpenConsultation,
  onOpenShowroom,
  onWhatsAppEnquiry,
  onDismiss
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const announcements: AnnouncementItem[] = [
    {
      id: 'grey-structure',
      icon: <Sparkles size={12} className="text-[#D5C8B8] shrink-0" />,
      text: 'Interior Affairs · Everything after Grey Structure',
      mobileText: 'Interior Affairs · Everything after Grey Structure',
      actionText: 'Consult Us',
      actionType: 'consultation'
    },
    {
      id: 'services-list',
      icon: <Layers size={12} className="text-[#D5C8B8] shrink-0" />,
      text: 'Designer Walls, Kitchens, Wardrobes, Wall Papers, Floors, PVC, Blinds, Ceilings & Golden Strips',
      mobileText: 'Kitchens, Wardrobes, PVC, Ceilings & Golden Strips',
      actionText: 'Explore',
      actionType: 'consultation'
    },
    {
      id: 'maps-location',
      icon: <MapPin size={12} className="text-[#D5C8B8] shrink-0" />,
      text: 'Visit Interior Affairs Design Studio · Turnkey Execution',
      mobileText: 'Interior Affairs Studio · View Map',
      actionText: 'Google Maps',
      actionType: 'maps'
    }
  ];

  // Auto-rotate announcement every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, announcements.length]);

  const handleActionClick = (type?: 'consultation' | 'showroom' | 'whatsapp' | 'maps') => {
    if (type === 'maps') {
      window.open('https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6', '_blank');
    } else if (type === 'consultation') {
      onOpenConsultation();
    } else if (type === 'showroom' && onOpenShowroom) {
      onOpenShowroom();
    } else if (type === 'whatsapp' && onWhatsAppEnquiry) {
      onWhatsAppEnquiry();
    } else {
      onOpenConsultation();
    }
  };

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div
      className="relative bg-[#1C1A17] text-[#FAF8F5] border-b border-[#36322D] overflow-hidden select-none z-50 transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1680px] mx-auto px-3 sm:px-6 py-1 sm:py-1.5 flex items-center justify-between min-h-[28px] sm:min-h-[32px] text-xs">
        {/* Left Arrow Controls */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1))
          }
          className="p-1 text-[#A89A8B] hover:text-[#FAF8F5] transition-colors rounded hover:bg-white/5 hidden sm:flex items-center justify-center cursor-pointer"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={13} />
        </button>

        {/* Center Announcement Content with Motion crossfade */}
        <div className="flex-1 flex items-center justify-center px-1 text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnnouncement.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex items-center justify-center gap-1.5"
            >
              {currentAnnouncement.icon}
              
              {/* Mobile text vs Desktop text */}
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] tracking-[0.03em] sm:tracking-[0.05em] font-normal text-[#E7E1D8] sm:hidden truncate max-w-[170px] xs:max-w-[220px]">
                {currentAnnouncement.mobileText}
              </span>
              <span className="text-[11px] sm:text-[12px] tracking-[0.06em] font-normal text-[#E7E1D8] hidden sm:inline">
                {currentAnnouncement.text}
              </span>

              {currentAnnouncement.actionText && (
                <button
                  onClick={() => handleActionClick(currentAnnouncement.actionType)}
                  className="ml-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.06em] text-[#D5C8B8] underline underline-offset-4 hover:text-[#FAF8F5] transition-all cursor-pointer shrink-0 inline-flex items-center gap-0.5"
                >
                  <span>{currentAnnouncement.actionText}</span>
                  <span className="text-[9px]">→</span>
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Controls: Indicator Dots & Close Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % announcements.length)
            }
            className="p-1 text-[#A89A8B] hover:text-[#FAF8F5] transition-colors rounded hover:bg-white/5 hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Next announcement"
          >
            <ChevronRight size={13} />
          </button>

          {/* Dots Indicator */}
          <div className="hidden md:flex items-center gap-1 px-1">
            {announcements.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-3.5 bg-[#D5C8B8]' : 'w-1.5 bg-[#524B43] hover:bg-[#8C7F72]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="p-1 text-[#A89A8B] hover:text-[#FAF8F5] transition-colors rounded hover:bg-white/5 cursor-pointer"
              aria-label="Dismiss top banner"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
