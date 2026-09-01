import React, { useState, useRef, useCallback } from 'react';
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
  beforeLabel = 'YOUR SPACE (BEFORE)',
  afterLabel = 'NORA CONCEPT (AFTER)',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      id="before-after-slider-container"
      className={`relative select-none overflow-hidden cursor-ew-resize ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* After Image (Full Background) */}
      <img
        src={afterImage}
        alt="Nora Curated Concept"
        className="w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Original Space"
          className="absolute inset-0 w-full h-full object-cover max-w-none grayscale brightness-90 contrast-95"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          loading="lazy"
        />
      </div>

      {/* Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-[1.5px] h-full bg-[#FAF8F5] shadow-[0_0_10px_rgba(0,0,0,0.5)] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#24221F] text-[#F5F2EC] rounded-full flex items-center justify-center shadow-2xl border border-[#FAF8F5]/80 pointer-events-auto">
            <ChevronsLeftRight size={18} />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-10 bg-[#24221F]/80 backdrop-blur-sm text-[#FAF8F5] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 z-10 bg-[#24221F]/80 backdrop-blur-sm text-[#FAF8F5] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none">
        {afterLabel}
      </div>
    </div>
  );
};
