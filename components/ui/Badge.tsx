import React from 'react';

export interface BadgeProps {
  variant?: 'dark' | 'champagne' | 'stone' | 'emerald';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'dark',
  children,
  className = '',
}) => {
  const variantStyles = {
    dark: 'bg-[#24221F]/85 backdrop-blur-sm text-[#FAF8F5]',
    champagne: 'bg-[#D5C8B8]/30 border border-[#D5C8B8] text-[#24221F]',
    stone: 'bg-[#F5F2EC] border border-[#E2DACF] text-[#756557]',
    emerald: 'bg-[#25D366]/20 border border-[#25D366] text-[#137A38]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-semibold rounded ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
