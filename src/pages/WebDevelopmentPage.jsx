import React, { useState } from 'react';
import { ArrowRight, Code, Layout, Globe, Smartphone, ShieldCheck, Zap, Server, CheckCircle, Plus, Minus, Layers } from 'lucide-react';

export default function WebDevelopmentPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const capabilities = [
    {
      title: 'Custom Web Applications',
      desc: 'Tailored SaaS dashboards, client portals, and workflow management systems built with scalable React and modern backend APIs.',
      icon: <Layout className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Business & Startup Websites',
      desc: 'High-converting marketing sites and company landing pages optimized for search engine visibility, fast load speeds, and mobile responsiveness.',
      icon: <Globe className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'E-Commerce Storefronts',
      desc: 'Secure digital storefronts with payment gateway integrations, order management, inventory catalogs, and customer checkout flows.',
      icon: <Server className="w-5 h-5 text-green-600" />
    },
    {
      title: 'API Engineering & Integration',
      desc: 'Robust RESTful API design using Node.js, Python FastAPI/Django, and Java Spring Boot with secure token-based authentication.',
      icon: <Code className="w-5 h-5 text-purple-600" />
    }
  ];

  const techStackItems = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js / Vite', category: 'Tooling' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'Python (Django / FastAPI)', category: 'Backend' },
    { name: 'Java Spring Boot', category: 'Enterprise Backend' },
    { name: 'PostgreSQL & MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'NoSQL' },
    { name: 'Vercel & AWS', category: 'Cloud Deployment' }
  ];

  const faqs = [
    {
      q: 'What is your typical web development turnaround time?',
      a: 'Standard business websites and landing pages typically take 1–3 weeks. Custom web applications and SaaS MVPs range from 4–8 weeks depending on database complexity and API requirements.'
    },
    {
      q: 'Do you provide post-launch maintenance and support?',
      a: 'Yes. Every project includes launch-week monitoring and bug-fix coverage, followed by optional monthly retainer support for updates and feature additions.'
    },
    {
      q: 'Can you develop web applications for businesses based in Hyderabad or internationally?',
      a: 'Yes. We operate remote-first with our core engineering hub in Hyderabad, serving startups and businesses across India, the US, UK, and the Middle East.'
    },
    {
      q: 'Who owns the source code once the project is finished?',
      a: 'You retain 100% full ownership of the source code, repositories, database configurations, and deployment credentials upon milestone completion.'
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
              Engineering Services • Hyderabad & Worldwide
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white leading-tight tracking-tight mb-6">
              Web Development <br />
              <span className="text-brand-orange">Services</span> in Hyderabad
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              From high-performance startup landing pages to scalable full-stack web applications. Our 6-member developer team builds modern, responsive, and secure web solutions using React, Node.js, and cloud platforms.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Discuss Your Web Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('SoftwareDevelopment')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Custom Software & MVPs
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

      {/* Web Capabilities Grid */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                What We Build
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Comprehensive Web Engineering Capabilities
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We design and develop fast, accessible, and responsive websites that turn visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="bg-[#FCFDFF] border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase block mb-3">
              Modern Tech Standards
            </span>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Battle-Tested Technologies
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We select lightweight, secure, and maintainable stacks ensuring clean architectures and smooth future scaling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStackItems.map((tech, idx) => (
              <div key={idx} className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-brand-navy font-sans text-xs font-semibold shadow-sm">
                <span className="text-gray-400 mr-2">{tech.category}:</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase block mb-3">
                Quality Assurance
              </span>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                Built for Speed, SEO, and Reliability
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Clean semantic HTML and mobile-first responsive design',
                  'Optimized Core Web Vitals (LCP, FID, CLS) for fast page loads',
                  'Search engine meta tags, Open Graph, and JSON-LD schema integration',
                  'Secure HTTPS headers, input validation, and protected API endpoints',
                  'Complete repository handoff with clean documentation'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid-bg-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-4">
                  Have a Website or Web App to Build?
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8">
                  Get a comprehensive scope and timeline breakdown from our technical lead within 24 business hours.
                </p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Request Web Scoping Brief
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-gray-100 text-left">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base">
              Common questions about our web development process and deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
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
                  <div className="p-6 pt-0 font-sans text-sm text-gray-600 leading-relaxed bg-[#FCFDFF]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Internal Links */}
      <section className="py-16 bg-white border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h3 className="font-display font-bold text-lg text-brand-navy mb-6">
            Explore Other Engineering Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('SoftwareDevelopment')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Custom Software & MVPs →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Custom web portals, admin dashboards, and scalable SaaS solutions.
              </p>
            </button>
            <button
              onClick={() => onNavigate('MobileAppDevelopment')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                Mobile App Development →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                React Native cross-platform mobile apps for iOS and Android.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Clients')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-blue-500/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-blue-600 transition-colors">
                All Client Solutions →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Overview of our dedicated freelance development team model.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
