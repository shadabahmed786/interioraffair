'use client';

import React from 'react';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-semibold rounded border transition-all cursor-pointer select-none ${
        selected
          ? 'bg-[#24221F] text-[#FAF8F5] border-[#24221F] shadow-sm'
          : 'bg-[#FAF8F5] text-[#756557] border-[#E2DACF] hover:border-[#24221F] hover:text-[#24221F]'
      } ${className}`}
    >
      {label}
    </button>
  );
};
