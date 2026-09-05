'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3.5 border-b border-[#E2DACF]/80 shadow-xs'
          : 'bg-[#FAF8F5]/90 sm:bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Architectural Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 select-none">
          <div className="w-8 h-8 rounded-sm bg-[#24221F] text-[#FAF8F5] flex items-center justify-center font-serif text-sm font-semibold tracking-wider group-hover:bg-[#3D3A36] transition-colors">
            IA
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.24em] text-sm sm:text-base font-semibold text-[#24221F] uppercase">
              INTERIOR AFFAIRS
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#756557]">
              TURNKEY EXECUTION · PAKISTAN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                  isActive
                    ? 'text-[#24221F] underline underline-offset-8 decoration-1 decoration-[#24221F]'
                    : 'text-[#756557] hover:text-[#24221F]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="whatsapp"
            size="sm"
            href={`https://wa.me/923008504499?text=${encodeURIComponent('Hi Interior Affairs, I would like to enquire about my space.')}`}
            isExternal
            icon={<MessageCircle size={14} />}
          >
            WhatsApp
          </Button>
          <Button variant="primary" size="sm" href="/contact">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#24221F] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-[#E2DACF] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.2em] font-semibold py-2 ${
                    isActive ? 'text-[#24221F] font-bold' : 'text-[#756557]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3">
            <Button
              variant="whatsapp"
              size="md"
              href={`https://wa.me/923008504499?text=${encodeURIComponent('Hi Interior Affairs, I would like to enquire about my space.')}`}
              isExternal
              icon={<MessageCircle size={15} />}
              className="w-full"
            >
              Chat on WhatsApp
            </Button>
            <Button variant="primary" size="md" href="/contact" className="w-full">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
