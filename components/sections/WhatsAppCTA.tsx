'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const WhatsAppCTA: React.FC = () => {
  const handleClick = () => {
    const message = 'Hi Interior Affairs, I am visiting your website and would like to speak with an interior consultant regarding my space.';
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        id="floating-whatsapp-cta"
        type="button"
        onClick={handleClick}
        className="group bg-[#25D366] hover:bg-[#1EBD59] text-[#FAF8F5] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
        aria-label="Direct WhatsApp Consultation with Interior Affairs"
        title="Direct WhatsApp Consultation"
      >
        <MessageCircle size={20} className="text-[#FAF8F5] shrink-0" />
        <span className="hidden sm:inline text-xs uppercase tracking-[0.16em] font-semibold">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
