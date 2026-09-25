import React, { useState } from 'react';
import { ArrowRight, Smartphone, ShieldCheck, Zap, Layers, Server, CheckCircle, Plus, Minus, Cpu, Bell } from 'lucide-react';

export default function MobileAppPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const capabilities = [
    {
      title: 'Cross-Platform React Native Apps',
      desc: 'Build high-performance native iOS and Android mobile apps from a single clean codebase, significantly reducing development time and cost.',
      icon: <Smartphone className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Real-Time Sync & Offline Storage',
      desc: 'Integrate offline data caching, background syncing, and real-time WebSocket / Firebase streams for reliable on-the-go user experience.',
      icon: <Zap className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Backend API Integration',
      desc: 'Connect your mobile frontends to secure Node.js, Python, or Java backends with OAuth2/JWT authentication and encrypted payloads.',
      icon: <Server className="w-5 h-5 text-purple-600" />
    },
    {
      title: 'Push Notifications & Engagement',
      desc: 'Configure Firebase Cloud Messaging (FCM) and Apple APNs for transactional alerts, promotional notifications, and in-app messaging.',
      icon: <Bell className="w-5 h-5 text-green-600" />
    }
  ];

  const appFeatures = [
    'Cross-platform iOS and Android support',
    'Custom Figma-to-React Native UI/UX implementation',
    'Biometric authentication (Face ID / Fingerprint)',
    'Secure local storage with encrypted tokens',
    'Automated app store build configurations (TestFlight & Google Play)'
  ];

  const faqs = [
    {
      q: 'Why choose React Native over native iOS (Swift) and Android (Kotlin)?',
      a: 'React Native allows a single team to build and maintain both iOS and Android apps with 85%+ shared code, drastically cutting development costs and time-to-market while retaining near-native performance.'
    },
    {
      q: 'Do you assist with Google Play Store and Apple App Store publishing?',
      a: 'Yes. We prepare production build bundles, configure store assets, write release notes, and assist through the store review and submission process.'
    },
    {
      q: 'Can you integrate existing web backend APIs with a new mobile app?',
      a: 'Absolutely. We regularly build companion mobile apps for existing web platforms, connecting seamlessly to your REST or GraphQL endpoints.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-navy-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-left">
        <div className="absolute inset-0 grid-bg-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="font-display font-bold text-xs tracking-[0.2em] text-blue-400 mb-4 uppercase inline-block">
              Mobile App Engineering • Hyderabad & Remote
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white leading-tight tracking-tight mb-6">
              Mobile App Development <br />
              <span className="text-brand-orange">Services</span> in Hyderabad
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Cross-platform iOS and Android mobile app development with React Native. Build intuitive, responsive, and secure mobile products from concept through app store launch.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Discuss Your Mobile App
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('WebDevelopment')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Web Development Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[2px] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[80px] text-white fill-current">
            <path d="M0,60 C360,130 720,10 1080,20 C1260,25 1350,90 1440,80 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                Mobile Solutions
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              End-to-End Mobile App Development
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We engineer polished mobile experiences tailored for user retention, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="bg-[#FCFDFF] border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase block mb-3">
                Standards
              </span>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                Engineered for Fluid User Experience
              </h2>
              <div className="flex flex-col gap-4">
                {appFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-medium text-gray-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid-bg-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-4">
                  Ready to Launch on App Store & Google Play?
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8">
                  Share your mobile app requirements with our engineering team for an accurate estimate and timeline.
                </p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Request App Scoping
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base">
              Common questions regarding mobile app development.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-[#FCFDFF]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base text-brand-navy hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 font-sans text-sm text-gray-600 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h3 className="font-display font-bold text-lg text-brand-navy mb-6">
            Explore Related Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('WebDevelopment')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Web Development Services →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Custom React frontends, landing pages, and web application portals.
              </p>
            </button>
            <button
              onClick={() => onNavigate('SoftwareDevelopment')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Custom Software & SaaS MVPs →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Full-stack software architecture and rapid MVP development for startups.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Get in Touch →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Consult with our engineering leads via WhatsApp, phone, or email.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
