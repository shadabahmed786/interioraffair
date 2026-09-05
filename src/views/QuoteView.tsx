import React, { useState } from 'react';
import { Upload, CheckCircle2, ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { ActivePage } from '../types';

interface QuoteViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (msg?: string) => void;
}

export const QuoteView: React.FC<QuoteViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'House',
    currentStage: 'Grey Structure',
    approxArea: '',
    neededServices: [] as string[],
    message: '',
    files: [] as File[]
  });

  const availableServices = [
    'Designer Walls',
    'Kitchen',
    'Wardrobes',
    'Wallpapers',
    'Flooring',
    'PVC Panels',
    'Blinds',
    'Artificial Grass',
    'False Ceiling',
    'Golden Strips',
    'Complete Interior'
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.neededServices.includes(service);
      if (exists) {
        return { ...prev, neededServices: prev.neededServices.filter((s) => s !== service) };
      } else {
        return { ...prev, neededServices: [...prev.neededServices, service] };
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...fileList] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="quote-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* If Submitted: SUCCESS MESSAGE */}
        {submitted ? (
          <div className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-16 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#24221F] text-[#FAF8F5] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-5xl text-[#24221F] font-semibold">
              YOUR PROJECT STARTS HERE.
            </h1>

            <div className="space-y-3 text-sm text-[#756557] font-light leading-relaxed max-w-xl mx-auto">
              <p>Thank you for sharing your requirements with Interior Affairs.</p>
              <p>
                We've received your enquiry. A member of our team will review the details and reach out — typically within 24 hours — to confirm next steps.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>BOOK A SITE VISIT</span>
              </button>
              <button
                onClick={() => onWhatsAppEnquiry('Hi Interior Affairs, I submitted a quote request and would like to chat.')}
                className="bg-[#25D366] text-[#FAF8F5] hover:bg-[#1ebd59] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded transition-all cursor-pointer flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-3xl mb-12">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-3">
                TELL US ABOUT YOUR SPACE.
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light">
                A few details now save a lot of back-and-forth later.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-12 space-y-12">
              {/* YOUR DETAILS */}
              <div className="space-y-6">
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold border-b border-[#E2DACF] pb-3">
                  YOUR DETAILS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Hammad Khan"
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. DHA Phase 2, Islamabad"
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>
                </div>
              </div>

              {/* ABOUT YOUR PROPERTY */}
              <div className="space-y-6">
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold border-b border-[#E2DACF] pb-3">
                  ABOUT YOUR PROPERTY
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Property Type:
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    >
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Office">Office</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Current Stage:
                    </label>
                    <select
                      value={formData.currentStage}
                      onChange={(e) => setFormData({ ...formData, currentStage: e.target.value })}
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    >
                      <option value="Grey Structure">Grey Structure</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Ready for Interior">Ready for Interior</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                      Approximate Area:
                    </label>
                    <input
                      type="text"
                      value={formData.approxArea}
                      onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                      placeholder="e.g. 1 Kanal / 4500 sq ft"
                      className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                    />
                  </div>
                </div>
              </div>

              {/* WHAT DO YOU NEED? */}
              <div className="space-y-6">
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold border-b border-[#E2DACF] pb-3">
                  WHAT DO YOU NEED?
                </h2>
                <p className="text-xs text-[#756557]">Select one or more:</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {availableServices.map((srv) => {
                    const isChecked = formData.neededServices.includes(srv);
                    return (
                      <label
                        key={srv}
                        className={`p-3.5 border rounded flex items-center gap-3 cursor-pointer text-xs font-semibold transition-all ${
                          isChecked
                            ? 'bg-[#24221F] text-[#FAF8F5] border-[#24221F]'
                            : 'bg-[#FAF8F5] text-[#24221F] border-[#E2DACF] hover:border-[#24221F]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(srv)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#FAF8F5] border-[#FAF8F5]' : 'border-[#756557]'
                          }`}
                        >
                          {isChecked && <div className="w-2 h-2 bg-[#24221F] rounded-xs" />}
                        </div>
                        <span>{srv}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* YOUR PROJECT */}
              <div className="space-y-6">
                <h2 className="font-serif-editorial text-2xl text-[#24221F] font-semibold border-b border-[#E2DACF] pb-3">
                  YOUR PROJECT
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                    Tell us a little about what you have in mind — rough dimensions, style references, or specific concerns.
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="[ Message ]"
                    className="w-full p-4 bg-[#FAF8F5] border border-[#E2DACF] rounded text-sm text-[#24221F] focus:outline-none focus:border-[#24221F]"
                  />
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] mb-2">
                    Upload: Floor Plan / Room Images / Reference Images
                  </label>
                  <div className="border-2 border-dashed border-[#E2DACF] bg-[#FAF8F5] p-8 rounded text-center cursor-pointer hover:border-[#24221F] transition-all relative">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload size={24} className="mx-auto text-[#756557] mb-2" />
                    <p className="text-xs text-[#24221F] font-semibold">
                      Click or drag files here to upload floor plans or photo references
                    </p>
                    {formData.files.length > 0 && (
                      <p className="text-xs text-[#24221F] mt-2 font-mono">
                        {formData.files.length} file(s) selected: {formData.files.map((f) => f.name).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA & Disclaimer Note */}
              <div className="pt-6 space-y-4 text-center sm:text-left">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-10 rounded transition-all cursor-pointer inline-flex items-center justify-center gap-3"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight size={15} />
                </button>
                <p className="text-[11px] text-[#756557] font-light">
                  "Your information will only be used to understand your project and contact you regarding your enquiry."
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
