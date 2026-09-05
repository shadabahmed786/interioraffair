'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-[0.18em] uppercase transition-all duration-300 rounded cursor-pointer select-none text-center';

  const sizeStyles = {
    sm: 'text-[10px] py-2.5 px-4 gap-2',
    md: 'text-xs py-3.5 px-6 gap-2.5',
    lg: 'text-xs sm:text-sm py-4 px-8 gap-3',
  }[size];

  const variantStyles = {
    primary: 'bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] shadow-md',
    secondary: 'bg-[#FAF8F5] text-[#24221F] hover:bg-[#E7E1D8] border border-[#E2DACF] shadow-sm',
    outline: 'border border-[#24221F] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5]',
    'outline-light': 'border border-[#FAF8F5]/80 bg-black/20 text-[#FAF8F5] hover:bg-[#FAF8F5]/20 backdrop-blur-sm',
    whatsapp: 'bg-[#25D366] text-[#FAF8F5] hover:bg-[#1EBD59] shadow-md',
    ghost: 'text-[#24221F] hover:bg-[#E7E1D8]/60',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal || href.startsWith('https://wa.me') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          <span>{children}</span>
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
