import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Send, CheckCircle2 } from 'lucide-react';
import { ActivePage } from '../types';

interface ContactViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mb-16">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-4">
            LET'S TRANSFORM YOUR SPACE.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light mb-2">
            Starting from a grey structure or refreshing an interior that's already lived-in — either way, tell us where you're starting from.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#24221F]">
            NATIONWIDE · PAKISTAN
          </p>
        </div>

        {/* 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#24221F] font-semibold mb-2">
                HAVE A PROJECT IN MIND?
              </h3>
              <p className="text-xs text-[#756557] font-light">
                Submit project details for an accurate preliminary scope & quotation.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 sm:py-4 px-6 rounded text-center transition-all cursor-pointer"
            >
              GET A QUOTE
            </button>
          </div>

          <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#24221F] font-semibold mb-2">
                NEED A QUICK RESPONSE?
              </h3>
              <p className="text-xs text-[#756557] font-light">
                Direct chat with our team on WhatsApp for immediate site visit setup.
              </p>
            </div>
            <button
              onClick={() => onWhatsAppEnquiry('Hi Interior Affairs, I need quick assistance with my project.')}
              className="bg-[#25D366] text-[#FAF8F5] hover:bg-[#1ebd59] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 sm:py-4 px-6 rounded text-center transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>WHATSAPP US</span>
            </button>
          </div>

          <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#24221F] font-semibold mb-2">
                WANT TO DISCUSS YOUR PROJECT?
              </h3>
              <p className="text-xs text-[#756557] font-light">
                Book an in-person design consultation at our studio or on-site.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="border border-[#24221F] text-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 sm:py-4 px-6 rounded text-center transition-all cursor-pointer"
            >
              TALK TO OUR TEAM
            </button>
          </div>
        </div>

        {/* SHOWROOM / OFFICE CTA Spread & Map */}
        <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] font-semibold leading-tight">
              LET'S TAKE THIS CONVERSATION FURTHER.
            </h2>
            <p className="text-sm text-[#756557] font-light leading-relaxed">
              Photos and renders only tell you so much. Seeing a stone finish or a fabric swatch in person tells you the rest. Come discuss your project, look through material samples, and talk timeline with our team directly.
            </p>

            <div className="space-y-2 text-xs text-[#24221F] font-semibold pt-2">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#756557]" /> Nationwide Execution, Pakistan
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#756557]" /> +92 300 8504499
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/PKFYVzzRkpUqQ7YC6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <MapPin size={16} />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
                alt="Interior Affairs Showroom RWP ISB"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-[#F5F2EC] border border-[#E2DACF] rounded p-6 sm:p-12">
          <h2 className="font-serif-editorial text-3xl text-[#24221F] font-semibold mb-6">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="bg-[#FAF8F5] border border-[#24221F] p-8 rounded text-center space-y-4">
              <CheckCircle2 size={48} className="mx-auto text-[#24221F]" />
              <h3 className="font-serif-editorial text-2xl text-[#24221F]">Message Sent</h3>
              <p className="text-xs text-[#756557] font-light">
                Thank you for contacting Interior Affairs. Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                  Project Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your space..."
                  className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SEND MESSAGE</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
