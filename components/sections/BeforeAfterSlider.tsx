'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'GREY STRUCTURE (RAW)',
  afterLabel = 'INTERIOR AFFAIRS (AFTER)',
  title,
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

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#756557] mb-3">
          {title}
        </h4>
      )}
      <div
        ref={containerRef}
        className={`relative select-none overflow-hidden cursor-ew-resize rounded aspect-[16/10] sm:aspect-[16/9] border border-[#E2DACF] shadow-lg ${className}`}
        onMouseMove={(e) => {
          if (isDraggingRef.current) handleMove(e.clientX);
        }}
        onTouchMove={handleTouchMove}
        onMouseDown={() => (isDraggingRef.current = true)}
        onMouseUp={() => (isDraggingRef.current = false)}
        onMouseLeave={() => (isDraggingRef.current = false)}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Full Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover pointer-events-none"
            priority={false}
          />
          <div className="absolute bottom-4 right-4 bg-[#24221F]/90 backdrop-blur-sm text-[#FAF8F5] text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold rounded">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover pointer-events-none"
              priority={false}
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-[#24221F]/90 backdrop-blur-sm text-[#FAF8F5] text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold rounded">
            {beforeLabel}
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#FAF8F5] shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#24221F] border-2 border-[#FAF8F5] shadow-xl flex items-center justify-center text-[#FAF8F5] text-[10px]">
            ⇄
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-[#756557] font-light mt-3 tracking-wide">
        Drag slider or tap anywhere to compare raw grey structure with finished execution
      </p>
    </div>
  );
};
