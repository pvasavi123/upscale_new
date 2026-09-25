import React, { useState } from 'react';
import { ArrowRight, Code, Database, Server, ShieldCheck, Zap, Layers, CheckCircle, Plus, Minus, Cpu, Rocket } from 'lucide-react';

export default function SoftwareDevelopmentPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const solutions = [
    {
      title: 'Startup MVP Development',
      desc: 'Rapidly architect and deploy functional Minimum Viable Products (MVPs) to test product-market fit, onboard early adopters, and pitch to investors.',
      icon: <Rocket className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'Custom Portals & Admin Dashboards',
      desc: 'Build secure internal business tools, customer management portals, and data analytics dashboards with granular role-based permissions.',
      icon: <Layers className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'SaaS Platform Engineering',
      desc: 'Multi-tenant cloud architecture, automated subscription billing, user provisioning, and secure API gateways built for high concurrency.',
      icon: <Server className="w-5 h-5 text-purple-600" />
    },
    {
      title: 'Database & Backend Architecture',
      desc: 'Design normalized relational databases (PostgreSQL/MySQL) or scalable document stores (MongoDB) optimized for query speed and data integrity.',
      icon: <Database className="w-5 h-5 text-green-600" />
    }
  ];

  const faqs = [
    {
      q: 'How do you handle MVP scope and milestone planning?',
      a: 'We break your product down into core must-have features for Version 1.0, establishing bi-weekly sprint deliverables and sandbox staging environments so you can test features continuously.'
    },
    {
      q: 'Can you work with existing codebases or refactor legacy applications?',
      a: 'Yes. We conduct initial codebase audits to evaluate security, performance bottlenecks, and architectural debt before planning refactoring or feature extensions.'
    },
    {
      q: 'What backend and database technologies do you specialize in?',
      a: 'We specialize in Node.js/Express, Python (FastAPI/Django), Java Spring Boot, PostgreSQL, MySQL, MongoDB, and Redis caching layers.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-navy-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-left">
        <div className="absolute inset-0 grid-bg-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="font-display font-bold text-xs tracking-[0.2em] text-brand-orange mb-4 uppercase inline-block">
              Custom Engineering • Hyderabad & Global
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white leading-tight tracking-tight mb-6">
              Custom Software & <br />
              <span className="text-brand-orange">MVP Development</span> in Hyderabad
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Turn your business vision into scalable software. Our dedicated engineering team builds custom web portals, admin dashboards, SaaS platforms, and startup MVPs.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Schedule Software Scoping Call
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

      {/* Solutions Grid */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                Solutions
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Custom Software Engineered for Scalability
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We design modular architectures that evolve gracefully as your customer base expands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
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

      {/* MVP Engineering Approach */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase block mb-3">
                Sprint Process
              </span>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                From Concept to Production in Focused Sprints
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Requirements discovery, functional scoping, and technical architecture brief',
                  'Database modeling, schema normalization, and REST API contract drafting',
                  'Bi-weekly milestone demonstrations on live staging sandboxes',
                  'Rigorous automated endpoint testing and responsive UI verification',
                  'Production deployment on AWS / Vercel with complete documentation'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-medium text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid-bg-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-4">
                  Ready to Build Your Software MVP?
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8">
                  Get in touch with our engineering managers to discuss feasibility, architectures, and sprint estimates.
                </p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Request Technical Evaluation
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
              Common questions about custom software development and MVP engineering.
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
                Responsive business websites and React frontend applications.
              </p>
            </button>
            <button
              onClick={() => onNavigate('MobileAppDevelopment')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Mobile App Development →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                React Native cross-platform apps for iOS and Android.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Contact & Scoping →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Request a dedicated technical scoping session for your project.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
