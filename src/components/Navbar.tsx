import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from '../types';
import { TopBanner } from './TopBanner';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onNavigateQuote?: () => void;
  isDarkHero?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  wishlistCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenConsultation,
  onNavigateQuote,
  isDarkHero = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Items
  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Spaces', page: 'spaces' },
    { label: 'Our Work', page: 'our-work' },
    { label: 'Our Process', page: 'our-process' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const isTransparentOverHero = !isScrolled && isDarkHero && activePage === 'home';
  const textColor = isTransparentOverHero ? 'text-[#FAF8F5]' : 'text-[#24221F]';
  
  const navBg = isScrolled
    ? 'glass-header border-b border-[#E2DACF]/80 shadow-[0_8px_30px_rgba(36,34,31,0.06)]'
    : isTransparentOverHero
    ? 'bg-gradient-to-b from-[#1C1A17]/90 via-[#1C1A17]/40 to-transparent backdrop-blur-[6px]'
    : 'glass-header border-b border-[#E2DACF]/50';

  const handleQuoteAction = () => {
    if (onNavigateQuote) {
      onNavigateQuote();
    } else {
      setActivePage('quote');
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 flex flex-col ${navBg}`}
      >
        {/* Top Announcement Banner */}
        {showTopBanner && (
          <TopBanner
            onOpenConsultation={onOpenConsultation}
            onOpenShowroom={() => {
              setActivePage('showroom');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onDismiss={() => setShowTopBanner(false)}
          />
        )}

        {/* Main Navbar Container with Increased Padding & Height for Full Logo Visibility */}
        <div className="max-w-[1680px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-2 min-h-[76px] sm:min-h-[88px] lg:min-h-[96px] flex items-center justify-between gap-4">
          {/* Mobile Left Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 -ml-1 rounded-lg transition-all duration-300 ${textColor} hover:bg-black/5 active:scale-95 flex items-center gap-1.5 cursor-pointer`}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium hidden sm:inline">Menu</span>
            </button>
          </div>

          {/* Official Brand Logo: Red Rooflines + Black/White Text */}
          <div className="flex items-center py-1">
            <button
              id="brand-logo-btn"
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group cursor-pointer flex items-center py-1 transition-transform hover:scale-[1.02] overflow-visible"
              aria-label="Interior Affairs Home"
            >
              <Logo
                roofColor="#C81E2B"
                textColor={isTransparentOverHero ? '#FAF8F5' : '#111111'}
                isDarkHero={isTransparentOverHero}
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.page || 
                (link.page === 'our-work' && activePage === 'projects') ||
                (link.page === 'about' && activePage === 'our-story');

              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => {
                    setActivePage(link.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-[12px] xl:text-[13px] tracking-[0.16em] uppercase transition-all duration-300 relative px-3.5 py-2 rounded-md font-medium cursor-pointer ${
                    isActive
                      ? isTransparentOverHero
                        ? 'text-[#FAF8F5] bg-white/10 font-semibold'
                        : 'text-[#24221F] bg-[#24221F]/5 font-semibold'
                      : isTransparentOverHero
                      ? 'text-[#FAF8F5]/85 hover:text-[#FAF8F5] hover:bg-white/10'
                      : 'text-[#756557] hover:text-[#24221F] hover:bg-[#24221F]/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full ${
                        isTransparentOverHero ? 'bg-[#FAF8F5]' : 'bg-[#C81E2B]'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls & Primary CTA: GET A QUOTE */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isTransparentOverHero
                  ? 'border-[#FAF8F5]/30 bg-black/20 text-[#FAF8F5] hover:bg-black/40'
                  : 'border-[#E2DACF] bg-[#FAF8F5]/80 text-[#24221F] hover:bg-[#E7E1D8]'
              }`}
              aria-label="Search"
              title="Search Services & Spaces"
            >
              <Search size={16} strokeWidth={1.75} />
            </button>

            {/* Wishlist Button */}
            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className={`p-2.5 rounded-full relative transition-all duration-300 cursor-pointer ${textColor} ${
                isTransparentOverHero ? 'hover:bg-white/10' : 'hover:bg-[#24221F]/5'
              }`}
              aria-label="View Saved Pieces"
              title="Saved Items"
            >
              <Heart size={18} strokeWidth={1.75} />
              {wishlistCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={wishlistCount}
                  className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C81E2B] text-[#FAF8F5] text-[9px] font-semibold flex items-center justify-center shadow-md border border-[#FAF8F5]/30"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </button>

            {/* Primary CTA: GET A QUOTE */}
            <button
              id="header-get-quote-btn"
              onClick={handleQuoteAction}
              className={`inline-flex items-center gap-2 text-[11px] xl:text-[12px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded-md transition-all duration-300 shadow-md cursor-pointer group ${
                isTransparentOverHero
                  ? 'bg-[#FAF8F5] text-[#24221F] hover:bg-[#E7E1D8] hover:shadow-lg'
                  : 'bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] hover:shadow-md'
              }`}
            >
              <span>GET A QUOTE</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#F5F2EC] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Mobile Header with Official Logo */}
            <div className="flex justify-between items-center pb-5 border-b border-[#E2DACF]">
              <Logo roofColor="#C81E2B" textColor="#111111" />

              <button
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-[#24221F] hover:bg-[#24221F]/5 rounded-full transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick Search */}
            <div className="mt-6 mb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-3 px-4 bg-[#FAF8F5] border border-[#E2DACF] rounded-lg text-left flex items-center justify-between text-xs text-[#756557]"
              >
                <span className="flex items-center gap-2">
                  <Search size={16} />
                  <span>Search Designer Walls, Kitchens, PVC...</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#24221F]">Search</span>
              </button>
            </div>

            {/* Menu Links */}
            <div className="my-auto py-6 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.page}
                  id={`mobile-nav-${link.page}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => {
                    setActivePage(link.page);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left font-serif-editorial text-2xl sm:text-3xl text-[#24221F] hover:text-[#C81E2B] transition-all flex items-center justify-between group py-1 cursor-pointer"
                >
                  <span className="flex items-center">
                    <span className="text-[11px] font-sans tracking-[0.2em] text-[#756557] mr-4 w-6">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#C81E2B]"
                  />
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-[#E2DACF] flex flex-col gap-3">
              <button
                id="mobile-menu-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteAction();
                }}
                className="w-full bg-[#24221F] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 rounded-md text-center shadow-md hover:bg-[#3D3A36] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>GET A QUOTE</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
