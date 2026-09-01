import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const text = interactive.getAttribute('data-cursor') || 'VIEW';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target.closest('button, a, input, select, textarea, [role="button"]');
        if (isClickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Trailing Soft Ring */}
      <motion.div
        className="fixed rounded-full border border-[#D5C8B8]/60 bg-[#D5C8B8]/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
        animate={{
          x: position.x - (isHovered ? 28 : 12),
          y: position.y - (isHovered ? 28 : 12),
          width: isHovered ? 56 : 24,
          height: isHovered ? 56 : 24,
          scale: isHovered ? 1.15 : 1
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[#FAF8F5] drop-shadow">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Central Precision Dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-[#FAF8F5] pointer-events-none shadow-sm"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovered ? 0.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </div>
  );
};
