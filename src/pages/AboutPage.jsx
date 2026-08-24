import React from 'react';
import { ArrowRight, Code, MessageSquare, ShieldCheck, Sparkles, Target, Users, BookOpen, Terminal, Clipboard, Settings, HelpCircle, Send } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const values = [
    { title: 'Practicality', desc: 'We focus on building functional assets and repositories rather than reviewing abstract theories.', icon: <Code className="w-5 h-5 text-brand-orange" />, iconBg: 'bg-orange-50' },
    { title: 'Quality', desc: 'We coordinate code commits under standards ensuring clean styling, architectures, and configs.', icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, iconBg: 'bg-blue-50' },
    { title: 'Collaboration', desc: 'We operate as a single unified force, partnering with students to build portfolios and clients to build apps.', icon: <Users className="w-5 h-5 text-purple-600" />, iconBg: 'bg-purple-50' },
    { title: 'Transparency', desc: 'We maintain absolute clarity in scoping specifications, sandbox staging deployments, and repository access.', icon: <MessageSquare className="w-5 h-5 text-green-600" />, iconBg: 'bg-green-50' }
  ];

  const workflow = [
    { title: 'Understand', desc: 'Scope goals, target users, and establish functional scoping briefs.', icon: <BookOpen className="w-4 h-4 text-blue-600" /> },
    { title: 'Plan', desc: 'Select technical stack architectures and bi-weekly sprint milestones.', icon: <Clipboard className="w-4 h-4 text-blue-600" /> },
    { title: 'Build', desc: 'Write clean code commits and construct robust database integrations.', icon: <Terminal className="w-4 h-4 text-blue-600" /> },
    { title: 'Test', desc: 'Verify API endpoints, secure connections, and responsive layouts.', icon: <Settings className="w-4 h-4 text-blue-600" /> },
    { title: 'Deliver', desc: 'Deploy standard staging applications and coordinate codebase handoffs.', icon: <Send className="w-4 h-4 text-blue-600" /> },
    { title: 'Support', desc: 'Provide post-launch week technical monitoring and scoping updates.', icon: <HelpCircle className="w-4 h-4 text-blue-600" /> }
  ];

  const capabilities = [
    'Software Development',
    'Web Development',
    'Mobile Applications',
    'SaaS Solutions',
    'UI/UX Design',
    'AI & Digital Solutions',
    'Testing & QA',
    'Cloud Technologies'
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
              About Us
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5.5xl text-white leading-tight tracking-tight mb-6">
              Building Skills. Building Solutions. <br />
              <span className="text-brand-orange">Building Growth.</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Upscale is a collaborative six-member freelancing and career support service focused on two areas: helping students and fresh graduates build practical software projects and professional profiles, while providing businesses and individuals with modern software development and digital solutions.
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

      {/* Who We Are Section */}
      <section className="py-20 bg-white text-left animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                  Our Foundation
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy leading-tight mb-6">
                Who We Are
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                Upscale was created by six young technology professionals who combine their skills, ideas, creativity, and technical interests to build practical digital solutions and create meaningful opportunities for growth. Operating without individual biographies or personal spotlights, we coordinate as a unified technical agency dedicated to professional engineering outputs.
              </p>
            </div>
            
            {/* Real Statistics Box (No invented details) */}
            <div className="lg:col-span-5 bg-[#FCFDFF] border border-gray-150 rounded-3xl p-8 flex flex-col justify-center shadow-md">
              <span className="font-display font-bold text-xs tracking-wider text-brand-navy uppercase block mb-6">
                Upscale Metrics
              </span>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-brand-orange pl-4">
                  <span className="block font-display font-extrabold text-4xl text-brand-navy">6</span>
                  <span className="block font-sans text-xs font-semibold text-gray-500 mt-1">Team Members</span>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <span className="block font-display font-extrabold text-4xl text-brand-navy">10+</span>
                  <span className="block font-sans text-xs font-semibold text-gray-500 mt-1">Focus Tracks</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Two-Sided Model Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Platform Architecture
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Our Two-Sided Model
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We balance two distinct pathways under unified engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Student Pathway Panel */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="font-display font-bold text-xs text-brand-orange uppercase tracking-wider mb-2 block">
                  Track 1
                </span>
                <h3 className="font-display font-extrabold text-xl text-brand-navy mb-6">For Students & Graduates</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                  We assist freshers and graduates to build portfolio-ready project items, configure clean Git repositories, document APIs, audit resumes, and optimize search settings on recruiter platforms.
                </p>
              </div>
              <button
                onClick={() => onNavigate('Students')}
                className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-brand-orange hover:text-brand-orange-hover transition-colors self-start cursor-pointer focus:outline-none"
              >
                Explore Student Track
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Client Pathway Panel */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="font-display font-bold text-xs text-blue-600 uppercase tracking-wider mb-2 block">
                  Track 2
                </span>
                <h3 className="font-display font-extrabold text-xl text-brand-navy mb-6">For Clients & Businesses</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                  We coordinate development sprints to launch business landing pages, e-commerce storefronts, cloud-hosted SaaS frameworks, iOS/Android apps, and custom database web applications.
                </p>
              </div>
              <button
                onClick={() => onNavigate('Clients')}
                className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-blue-600 hover:text-blue-700 transition-colors self-start cursor-pointer focus:outline-none"
              >
                Explore Client Track
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#FFF6F2] border border-brand-orange/5 rounded-[24px] p-8">
              <span className="font-display font-bold text-xs tracking-wider text-brand-orange uppercase block mb-4">
                Our Focus
              </span>
              <h3 className="font-display font-extrabold text-xl text-brand-navy mb-4">Our Mission</h3>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                To help final-year students, graduates, and freshers construct the technical project credentials required for hiring, while helping clients scope, build, and deploy reliable digital software solutions.
              </p>
            </div>

            <div className="bg-brand-blue-light border border-blue-500/5 rounded-[24px] p-8">
              <span className="font-display font-bold text-xs tracking-wider text-blue-600 uppercase block mb-4">
                Our Target
              </span>
              <h3 className="font-display font-extrabold text-xl text-brand-navy mb-4">Our Vision</h3>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                To construct a trusted and collaborative technology brand that bridges the gap between technical capability, creativity, and real-world software product engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                Workflow Standard
              </span>
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              How We Work
            </h2>
            <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
              We execute sprint milestones through six coordinate lifecycle stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((stage, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {stage.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {idx + 1}. {stage.title}
                  </h4>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe In Core Values */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Pillars
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              What We Believe In
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              Our core values guide how we coordinate student projects and design commercial software codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-10 h-10 rounded-xl ${val.iconBg} flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-350`}>
                  {val.icon}
                </div>
                <h4 className="font-display font-bold text-base text-brand-navy mb-2">{val.title}</h4>
                <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities badge layout */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Skillsets
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Our Capabilities
            </h2>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">
              We leverage modern frameworks and deployment configurations to build robust web layouts and applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {capabilities.map((cap, idx) => (
              <span 
                key={idx} 
                className="px-5 py-3 rounded-xl bg-white border border-gray-100 text-brand-navy hover:border-brand-orange/30 hover:text-brand-orange transition-all duration-200 font-sans text-xs font-semibold tracking-wide shadow-sm"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final About CTA */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-brand-navy rounded-[32px] relative overflow-hidden p-8 md:p-14 border border-white/5 text-center shadow-2xl">
            <div className="absolute inset-0 grid-bg-pattern opacity-25 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-white leading-tight">
                Let's Build Something Meaningful Together.
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect with our technical coordinate leads to request project evaluation scopes or schedule custom consultations.
              </p>
              <div className="flex flex-row items-center gap-4">
                <button
                  onClick={() => onNavigate('Students')}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 shrink-0 cursor-pointer focus:outline-none"
                >
                  For Students
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('Clients')}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0 cursor-pointer focus:outline-none"
                >
                  For Clients
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
