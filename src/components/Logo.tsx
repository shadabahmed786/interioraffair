import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  className?: string;
  roofColor?: string; // Default red #C81E2B
  textColor?: string; // Default black #111111 / #24221F
  isDarkHero?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  roofColor = '#C81E2B',
  textColor,
  isDarkHero = false
}) => {
  // Determine text color based on dark hero state if not explicitly passed
  const effectiveTextColor = textColor || (isDarkHero ? '#FAF8F5' : '#111111');

  return (
    <div className={`inline-flex flex-col items-center justify-center pt-1 pb-1 ${className}`}>
      {/* Bold 3 Roof Gables SVG with Chimneys in Crimson Red */}
      <svg
        viewBox="0 0 280 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-8 sm:h-10 md:h-12 transition-all duration-300 overflow-visible"
        aria-label="Interior Affairs Roof Logo"
      >
        {/* Left Roof Gable with Chimney */}
        <path
          d="M 18 50 L 42 34 V 20 H 54 V 26 L 80 10 L 122 38"
          stroke={roofColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Roof Gable */}
        <path
          d="M 92 40 L 140 20 L 188 40"
          stroke={roofColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Roof Gable with Chimney */}
        <path
          d="M 158 38 L 200 10 L 226 26 V 20 H 238 V 34 L 262 50"
          stroke={roofColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Brand Text INTERIOR AFFAIRS in Black (or White on Dark Hero) */}
      {variant !== 'icon' && (
        <div className="text-center mt-1">
          <span
            className="block font-serif-editorial text-lg sm:text-2xl md:text-3xl tracking-[0.24em] uppercase font-bold leading-none transition-colors duration-300"
            style={{ color: effectiveTextColor }}
          >
            INTERIOR AFFAIRS
          </span>
        </div>
      )}
    </div>
  );
};
