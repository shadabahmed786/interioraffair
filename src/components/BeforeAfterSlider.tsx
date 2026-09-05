import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'GREY STRUCTURE (RAW)',
  afterLabel = 'FINISHED INTERIOR',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      handleMove(e.touches[0].clientX);
    };

    const onTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      id="before-after-slider-container"
      className={`relative select-none overflow-hidden cursor-ew-resize rounded-lg touch-none ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches.length > 0) handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Full Background - Finished) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
      />

      {/* Before Image (Clipped Overlay - Grey Structure) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Divider Line & Center Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-[2px] h-full bg-[#FAF8F5] shadow-[0_0_12px_rgba(0,0,0,0.6)] relative -translate-x-1/2">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-[#24221F] text-[#FAF8F5] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#FAF8F5] pointer-events-auto transition-transform duration-150 ${
              isDragging ? 'scale-110 ring-4 ring-[#FAF8F5]/30' : 'hover:scale-105'
            }`}
          >
            <ChevronsLeftRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
        </div>
      </div>

      {/* Badges / Labels */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 bg-[#1C1A17]/85 backdrop-blur-md text-[#FAF8F5] text-[8.5px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.2em] uppercase font-semibold px-2.5 sm:px-3.5 py-1.5 rounded pointer-events-none border border-white/15">
        {beforeLabel}
      </div>
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 bg-[#1C1A17]/85 backdrop-blur-md text-[#FAF8F5] text-[8.5px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.2em] uppercase font-semibold px-2.5 sm:px-3.5 py-1.5 rounded pointer-events-none border border-white/15 text-right">
        {afterLabel}
      </div>
    </div>
  );
};
