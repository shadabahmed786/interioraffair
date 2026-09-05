import React, { useState } from 'react';
import { X, CheckCircle, Send, Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  initialSpace?: string;
  onWhatsAppDirect?: (msg: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialSpace,
  onWhatsAppDirect
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Nationwide (Pakistan)',
    interestType: initialProduct ? 'Single Piece Custom Quote' : initialSpace ? 'Room Design Package' : 'Comprehensive Interior Architecture',
    budgetRange: '300K — 500K',
    preferredDate: '',
    message: initialProduct
      ? `I am interested in acquiring or customizing "${initialProduct.name}" (${initialProduct.priceFormatted}). Please share lead time and finish samples.`
      : initialSpace
      ? `I would like to explore full interior curation and layout planning for my ${initialSpace}.`
      : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi Interior Affairs, my name is ${formData.name || 'a visitor'}. I would like to enquire about ${formData.interestType}. Location: ${formData.city}. Notes: ${formData.message || 'Please connect me with a design consultant.'}`;
    if (onWhatsAppDirect) {
      onWhatsAppDirect(text);
    } else {
      const url = `https://wa.me/923008504499?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#24221F]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
    >
      <div
        id="consultation-modal-container"
        className="w-full max-w-2xl bg-[#F5F2EC] border border-[#E2DACF] p-5 sm:p-10 relative shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-consultation-btn"
          onClick={() => {
            setIsSubmitted(false);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 text-[#24221F] hover:opacity-60 transition-opacity"
          aria-label="Close"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E7E1D8] border border-[#D5C8B8] flex items-center justify-center text-[#24221F] mb-6">
              <CheckCircle size={32} strokeWidth={1.5} />
            </div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#756557] mb-2">
              Inquiry Received
            </p>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-4">
              Thank you, {formData.name}.
            </h3>
            <p className="font-sans text-sm text-[#756557] max-w-md mx-auto leading-relaxed mb-8">
              A senior design consultant from Interior Affairs will review your brief for Everything after Grey Structure and contact you within 24 hours.
            </p>
            <div className="p-4 bg-[#FAF8F5] border border-[#E2DACF] max-w-md w-full text-left text-xs text-[#756557] mb-8 space-y-1">
              <p className="font-semibold text-[#24221F]">Interior Affairs Studio (RWP/ISB):</p>
              <p>Direct Phone / WhatsApp: +92 300 8504499</p>
              <a
                href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#24221F] underline font-medium inline-block pt-1"
              >
                📍 Open Studio Location in Google Maps →
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3.5 px-6 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={15} /> Instant WhatsApp Connect
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.16em] py-3.5 px-6 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#756557] block mb-1 font-semibold">
                Interior Affairs · Based in RWP / ISB
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#24221F]">
                Everything after Grey Structure.
              </h3>
              <p className="text-xs sm:text-sm text-[#756557] mt-1">
                Book a consultation for Designer Walls, Kitchens, Wardrobes, Wall Papers, Floors, PVC Panels, Blinds, Grass, Ceilings & Golden Strips.
              </p>
            </div>

            {initialProduct && (
              <div className="mb-6 p-3 bg-[#FAF8F5] border border-[#D5C8B8] flex items-center gap-4">
                <img
                  src={initialProduct.images.primary}
                  alt={initialProduct.name}
                  className="w-14 h-14 object-cover border border-[#E2DACF]"
                />
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#756557]">
                    Selected Piece
                  </span>
                  <h4 className="font-serif-editorial text-base text-[#24221F] leading-tight">
                    {initialProduct.name}
                  </h4>
                  <span className="text-xs font-medium text-[#24221F]">
                    {initialProduct.priceFormatted}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ayesha Malik"
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] placeholder:text-[#756557]/40 outline-none focus:border-[#756557]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] placeholder:text-[#756557]/40 outline-none focus:border-[#756557]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] placeholder:text-[#756557]/40 outline-none focus:border-[#756557]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Location / City
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] outline-none"
                  >
                    <option value="Nationwide (Pakistan)">Nationwide (Pakistan)</option>
                    <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="International / Overseas">International / Overseas</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Project Nature
                  </label>
                  <select
                    value={formData.interestType}
                    onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] outline-none"
                  >
                    <option value="Custom Furniture Commission">Custom Furniture Commission</option>
                    <option value="Living / Dining Room Curation">Living / Dining Room Curation</option>
                    <option value="Full Residence Architecture & Design">Full Residence Architecture & Design</option>
                    <option value="Commercial / Hospitality Space">Commercial / Hospitality Space</option>
                    <option value="Showroom Visit Appointment">Showroom Visit Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                    Approximate Investment Scale
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] outline-none"
                  >
                    <option value="Under 100K">Under PKR 100,000</option>
                    <option value="100K — 300K">PKR 100,000 — 300,000</option>
                    <option value="300K — 500K">PKR 300,000 — 500,000</option>
                    <option value="500K — 1M">PKR 500,000 — 1,000,000</option>
                    <option value="1M+ (Complete Luxury)">PKR 1,000,000+ (Full Residence)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#756557] mb-1.5">
                  Project Notes, Room Dimensions & Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your space, preferred materials, dimensions, or specific questions..."
                  className="w-full bg-transparent border-b border-[#24221F] py-2 text-sm text-[#24221F] placeholder:text-[#756557]/40 outline-none resize-none focus:border-[#756557]"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto text-xs uppercase tracking-[0.14em] text-[#24221F] hover:text-[#756557] flex items-center justify-center gap-1.5 py-2 underline underline-offset-4"
                >
                  <MessageCircle size={14} /> Skip form and chat on WhatsApp
                </button>

                <button
                  id="submit-consultation-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.16em] py-3.5 px-8 flex items-center justify-center gap-2 hover:bg-[#3A3835] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Transmitting Brief...'
                  ) : (
                    <>
                      <Send size={13} /> Send Inquiry to Studio
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const WhatsAppButton: React.FC<{
  onOpenContextualChat?: (msg?: string) => void;
}> = ({ onOpenContextualChat }) => {
  const handleClick = () => {
    const defaultMsg = 'Hi Interior Affairs, I am visiting your digital studio and would like to speak with an interior design consultant.';
    if (onOpenContextualChat) {
      onOpenContextualChat(defaultMsg);
    } else {
      const url = `https://wa.me/923008504499?text=${encodeURIComponent(defaultMsg)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        id="floating-whatsapp-btn"
        onClick={handleClick}
        className="group bg-[#24221F] text-[#F5F2EC] hover:bg-[#34322F] p-3 sm:px-5 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-2.5 transition-all duration-300 border border-[#D5C8B8]/40 hover:scale-[1.02] cursor-pointer"
        aria-label="Contact Interior Affairs on WhatsApp"
        title="WhatsApp Consultation"
      >
        <MessageCircle size={18} className="text-[#D5C8B8]" />
        <span className="hidden sm:inline text-[11px] uppercase tracking-[0.16em] font-medium">
          WhatsApp Studio
        </span>
      </button>
    </div>
  );
};
