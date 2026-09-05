'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Islamabad',
    scope: 'Full Grey-Structure Turnkey',
    budget: 'PKR 2.5M — 5.0M',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Interior Affairs, my name is ${formData.name || 'a visitor'}. Location: ${formData.city}. Scope: ${formData.scope}. Estimated Budget: ${formData.budget}. Notes: ${formData.notes || 'I would like to schedule a site visit or consultation.'}`;
    const url = `https://wa.me/923008504499?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#24221F] pb-24">
      {/* Header */}
      <section className="py-20 sm:py-24 bg-[#F5F2EC] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-3">
              START THE CONVERSATION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-6">
              Contact Interior Affairs
            </h1>
            <p className="text-sm sm:text-base text-[#756557] font-light leading-relaxed">
              Whether you are starting from raw brick grey structure or remodeling a signature room, tell us about your project and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-2">
                DIRECT CHANNELS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#24221F] mb-4">
                We Are One Message Away
              </h2>
              <p className="text-xs sm:text-sm text-[#756557] font-light leading-relaxed mb-6">
                Direct WhatsApp provides the fastest turnaround for layout review and preliminary pricing. You can also visit our studio by appointment.
              </p>

              <div className="space-y-4">
                <Card variant="travertine" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#25D366]/20 text-[#137A38] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-0.5">
                      WhatsApp Studio
                    </h4>
                    <p className="text-xs text-[#756557] mb-2">{SITE_CONFIG.whatsapp}</p>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-xs font-semibold text-[#137A38] hover:underline cursor-pointer"
                    >
                      Open WhatsApp Chat →
                    </button>
                  </div>
                </Card>

                <Card variant="travertine" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#24221F]/10 text-[#24221F] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-0.5">
                      Phone Consultation
                    </h4>
                    <p className="text-xs text-[#756557] mb-2">{SITE_CONFIG.phone}</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-xs font-semibold text-[#24221F] hover:underline">
                      Call Studio Directly →
                    </a>
                  </div>
                </Card>

                <Card variant="travertine" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#24221F]/10 text-[#24221F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-0.5">
                      Studio & Materials Library
                    </h4>
                    <p className="text-xs text-[#756557] mb-2">{SITE_CONFIG.location}</p>
                    <a
                      href={SITE_CONFIG.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#24221F] hover:underline"
                    >
                      Open Google Maps Location →
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DACF]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#756557] block mb-2">
                WORKING HOURS
              </span>
              <p className="text-xs text-[#24221F] font-medium">{SITE_CONFIG.hours}</p>
              <p className="text-xs text-[#756557]">Sunday: By Prior Appointment Only</p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <Card variant="cream" className="p-8 sm:p-12 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={48} className="text-[#25D366] mx-auto" />
                  <h3 className="font-serif text-3xl text-[#24221F]">Thank You for Reaching Out.</h3>
                  <p className="text-sm text-[#756557] max-w-md mx-auto font-light">
                    An interior architect from Interior Affairs will review your project requirements and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <Button variant="whatsapp" size="md" onClick={handleWhatsAppDirect} icon={<MessageCircle size={15} />}>
                      Accelerate via WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#756557] block mb-1">
                      PROJECT INQUIRY FORM
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#24221F]">
                      Tell Us About Your Property
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asad Malik"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                        Property City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                      >
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Other Pakistan City">Other City in Pakistan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                        Project Scope *
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                      >
                        <option value="Full Grey-Structure Turnkey">Full Grey-Structure Turnkey</option>
                        <option value="Custom Kitchen & Wardrobes">Custom Kitchen & Wardrobes</option>
                        <option value="False Ceilings & Lighting">False Ceilings & Lighting</option>
                        <option value="Designer Walls & Flooring">Designer Walls & Flooring</option>
                        <option value="Single Room / Renovation">Single Room / Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                      Target Investment Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    >
                      <option value="Under PKR 1.0M">Under PKR 1.0M (Accent Scope)</option>
                      <option value="PKR 1.0M — 2.5M">PKR 1.0M — 2.5M (Targeted Fitout)</option>
                      <option value="PKR 2.5M — 5.0M">PKR 2.5M — 5.0M (Apartment Scale)</option>
                      <option value="PKR 5.0M — 10.0M+">PKR 5.0M — 10.0M+ (Full Residence)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-[#24221F] mb-2">
                      Project Notes / Current State
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your room dimensions, current grey structure condition, or desired completion date..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E2DACF] rounded px-4 py-3 text-xs text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2DACF]">
                    <Button type="submit" variant="primary" size="lg" icon={<Send size={14} />}>
                      Submit Brief
                    </Button>
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="md"
                      onClick={handleWhatsAppDirect}
                      icon={<MessageCircle size={15} />}
                    >
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
