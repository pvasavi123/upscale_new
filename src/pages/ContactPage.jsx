import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Check, Plus, Minus, ExternalLink } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openHelp, setOpenHelp] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const element = document.getElementById('contact-form');
    if (element) {
      const timer = setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  setIsSending(true);
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyUCD904mnjwY3qmk1toi8weYmiAeYxc0j_5Uxe9p7LRje3HEZ3-CPKAVHAoHZH4sTmTA/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message
        })
      }
    );

    setSubmitted(true);

  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSending(false);
  }
};

  const helpFaqs = [
    {
      q: 'How fast will someone respond?',
      a: 'Our engineering managers and career advisors review all submissions daily. You can typically expect a detailed response to your scoping request or student application within 24 business hours.'
    },
    {
      q: 'Do you offer remote coordination or in-person meetings?',
      a: 'We operate remote-first to support developers and startups across all time zones. However, our main project management hub is in Hyderabad, India, and we support continuous client communication via Slack, Zoom, and MS Teams.'
    },
    {
      q: 'Is there any fee for student evaluations?',
      a: 'No. The initial profile analysis, resume review, and GitHub audit are 100% free of charge for students and graduates who register on the UpScale platform.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-navy-dark pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden text-left">
        <div className="absolute inset-0 grid-bg-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="font-display font-bold text-xs tracking-[0.2em] text-brand-orange mb-4 uppercase inline-block">
              Contact Us
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5.5xl text-white leading-tight tracking-tight mb-6">
              Let's Build <br />
              <span className="text-brand-orange">Something Great</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Have questions about our career tracks, or ready to kick off a software architecture project? Drop us a line, and we will get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[2px] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[80px] lg:h-[120px] text-white fill-current">
            <path d="M0,60 C360,130 720,10 1080,20 C1260,25 1350,90 1440,80 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            
            {/* Left Column: Channels */}
            <div className="lg:col-span-5">
              <h2 className="font-display font-extrabold text-2.5xl text-brand-navy mb-6">
                Get in Touch Directly
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed mb-10">
                Choose the channel that fits your goals, or complete the form on the right and we will reach out directly.
              </p>

              <div className="flex flex-col gap-6">
                {/* Channel 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      For Students / Careers
                    </span>
                    <a href="mailto:upscale.careersupport@gmail.com" className="font-sans text-sm md:text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                      upscale.careersupport@gmail.com
                    </a>
                  </div>
                </div>

                {/* Channel 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      For Clients / Scoping
                    </span>
                    <a href="mailto:upscale.freelancer@gmail.com" className="font-sans text-sm md:text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                      upscale.freelancer@gmail.com
                    </a>
                  </div>
                </div>

                {/* Channel 3 */}
                 {/* Channel 3 */}
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                     <Phone className="w-5 h-5 text-green-600" />
                   </div>
                   <div>
                     <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                       Phone Number
                     </span>
                     <a href="tel:+919063593070" className="font-sans text-sm md:text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                       +91 90635 93070
                     </a>
                   </div>
                 </div>

                 {/* Channel 4 */}
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                     <InstagramIcon />
                   </div>
                   <div>
                     <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                       Social Tag
                     </span>
                     <a href="https://instagram.com/upscale.services" target="_blank" rel="noopener noreferrer" className="font-sans text-sm md:text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                       upscale.services
                     </a>
                   </div>
                 </div>

                 {/* Channel 5 */}
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                     <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                       <rect x="2" y="9" width="4" height="12" />
                       <circle cx="4" cy="4" r="2" />
                     </svg>
                   </div>
                   <div>
                     <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                       LinkedIn Page
                     </span>
                     <a href="https://www.linkedin.com/company/upscale-it-services/posts/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm md:text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                       Upscale IT Services
                     </a>
                   </div>
                 </div>

                 {/* Channel 6 */}
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                     <svg className="w-5 h-5 text-green-600 fill-current" viewBox="0 0 24 24">
                       <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.63 2.012 14.15 1.012 11.95 1.012 6.57 1.012 2.2 5.378 2.196 10.793c-.001 1.704.469 3.372 1.36 4.866l-.995 3.635 3.782-.977c-.001-.001-.001-.001-.001-.001zm11.234-7.794c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.83 1.04-1.016 1.25-.187.21-.375.24-.696.08-.32-.16-1.353-.5-2.578-1.593-.952-.85-1.594-1.9-1.78-2.22-.187-.32-.02-.49.14-.65.144-.143.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.988-2.39-.26-.63-.53-.55-.72-.56-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.31 3.32c.16.21 2.26 3.45 5.48 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.15-1.48.27-.71.27-1.32.19-1.44-.08-.12-.29-.2-.61-.36z" />
                     </svg>
                   </div>
                   <div>
                     <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                       WhatsApp
                     </span>
                     <a 
                       href="https://wa.me/919063593070?text=Hi%20UpScale%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 font-sans text-sm md:text-base font-semibold text-brand-navy hover:text-brand-orange transition-colors group"
                     >
                       Chat on WhatsApp
                       <ExternalLink className="w-4 h-4 text-green-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                     </a>
                   </div>
                 </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div id="contact-form" className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-navy/8 relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-brand-navy">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-sans text-gray-500 text-sm max-w-sm">
                    Thank you for reaching out. A team member will respond to your email at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: 'Client', message: '' });
                    }}
                    className="mt-6 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover focus:outline-none cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                    Send Us a Message
                  </h3>
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-brand-orange focus:outline-none text-sm font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-brand-orange focus:outline-none text-sm font-sans"
                    />
                  </div>

                  {/* Role Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      I am a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-brand-orange focus:outline-none text-sm font-sans bg-white"
                    >
                      <option value="Student">Student / Graduate — Need Career & Project Support</option>
                      <option value="Client">Business / Startup — Need Software Development Services</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you're looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-brand-orange focus:outline-none text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-[1.01] cursor-pointer focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Quick Help / FAQ Accordion */}
          <div className="border-t border-gray-100 pt-20 max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy mb-12 text-center">
              Quick Help & Support
            </h2>
            <div className="flex flex-col gap-4">
              {helpFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-100 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenHelp(openHelp === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base md:text-lg text-brand-navy hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {openHelp === index ? (
                      <Minus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                    ) : (
                      <Plus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                    )}
                  </button>
                  {openHelp === index && (
                    <div className="p-6 pt-0 border-t border-gray-50 bg-[#FCFDFF] font-sans text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
