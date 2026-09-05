import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cream' | 'travertine' | 'sand' | 'dark';
  interactive?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'cream',
  interactive = false,
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    cream: 'bg-[#FAF8F5] text-[#24221F] border border-[#E2DACF]',
    travertine: 'bg-[#F5F2EC] text-[#24221F] border border-[#E2DACF]',
    sand: 'bg-[#E7E1D8] text-[#24221F] border border-[#D5C8B8]',
    dark: 'bg-[#1C1A17] text-[#FAF8F5] border border-white/10',
  }[variant];

  const interactiveStyles = interactive
    ? 'hover:border-[#24221F] transition-all duration-300 cursor-pointer group'
    : '';

  return (
    <div
      className={`rounded p-6 ${variantStyles} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
