import React from 'react';
import { Briefcase, Layout, Terminal, Cloud, Smartphone, HelpCircle, Code, ShieldCheck, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ClientsPage({ onNavigate }) {
  const services = [
    {
      title: 'Website Development',
      desc: 'Deploy premium corporate and marketing web presences.',
      bullets: ['Business Websites', 'Landing Pages', 'Portfolio Websites', 'Custom Websites'],
      icon: <Layout className="w-6 h-6 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      borderColor: 'border-brand-orange/5'
    },
    {
      title: 'E-Commerce Solutions',
      desc: 'Build high-converting online storefronts and shops.',
      bullets: ['Online Stores', 'Product Management', 'Payment Integration', 'Order Management'],
      icon: <Terminal className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      borderColor: 'border-blue-500/5'
    },
    {
      title: 'SaaS App Development',
      desc: 'Scale your business products on the cloud.',
      bullets: ['Custom SaaS Solutions', 'Multi-Tenant Architecture', 'Subscription Management', 'Scalable & Secure Apps'],
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      borderColor: 'border-blue-500/5'
    },
    {
      title: 'Mobile App Development',
      desc: 'Deploy responsive mobile apps on iOS and Android.',
      bullets: ['Android & iOS Apps', 'Cross-Platform Apps', 'Modern Mobile UI/UX', 'Secure API Integration'],
      icon: <Smartphone className="w-6 h-6 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      borderColor: 'border-brand-orange/5'
    },
    {
      title: 'UI/UX Design',
      desc: 'Create beautiful user-centric design layouts.',
      bullets: ['Modern UI Design', 'Responsive Wireframes', 'User Experience Audits', 'Interactive Prototypes'],
      icon: <Layout className="w-6 h-6 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      borderColor: 'border-brand-orange/5'
    },
    {
      title: 'Web Applications',
      desc: 'Build complex dashboards and custom systems.',
      bullets: ['Custom Web Apps', 'Dashboards & Admin Panels', 'Portal Systems', 'API Integrations'],
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      borderColor: 'border-blue-500/5'
    }
  ];

  const benefits = [
    {
      title: 'Experienced Team',
      desc: 'Our projects are scoped, reviewed, and finalized by senior technical leads with years of product experience.',
      icon: <Briefcase className="w-6 h-6 text-brand-orange" />,
      bgColor: 'bg-[#FFF6F2]'
    },
    {
      title: 'Clean & Scalable Code',
      desc: 'We follow robust coding standards, maintain active Git repositories, and structure clean architectures.',
      icon: <Code className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-brand-blue-light'
    },
    {
      title: 'On-Time Delivery',
      desc: 'We work in strict, bi-weekly sprint intervals, ensuring timeline milestones are hit predictably.',
      icon: <Clock className="w-6 h-6 text-green-600" />,
      bgColor: 'bg-green-50'
    },
    {
      title: 'Clear Communication',
      desc: 'We maintain absolute transparency, providing sandbox deployments and repository access to our clients.',
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Reliable Support',
      desc: 'From initial scoping to final deployment, code handoff, and post-launch maintenance cycles.',
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      bgColor: 'bg-yellow-50'
    }
  ];

  const steps = [
    { title: '1. Discuss', desc: 'We align on your product idea, target audience, technical requirements, and project scope.' },
    { title: '2. Plan', desc: 'We draft structural wireframes, establish the technical stack architectures, and define timelines.' },
    { title: '3. Develop', desc: 'Our developers build features in bi-weekly sprints under senior coordinator code reviews.' },
    { title: '4. Test', desc: 'We perform responsive layout checks, API validation, and functional verification.' },
    { title: '5. Deliver', desc: 'We coordinate production server deployments, git repository handoff, and launch support.' },
    { title: '6. Support', desc: 'We provide post-launch technical monitoring, issue resolution, and scoping updates for future iterations.' }
  ];

  const techGroups = [
    { title: 'Frontend', skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST APIs'] },
    { title: 'Databases', skills: ['SQL', 'PL/SQL', 'MongoDB'] },
    { title: 'AI & Data', skills: ['AI Engineering', 'Prompt Engineering', 'Pandas'] },
    { title: 'Testing & QA', skills: ['Manual Testing', 'API Testing', 'Database Testing', 'Retesting'] },
    { title: 'Tools & Cloud', skills: ['Git', 'GitHub', 'AWS', 'Office.js'] }
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
              For Clients / Businesses
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5.5xl text-white leading-tight tracking-tight mb-6">
              Building Solutions <br />
              <span className="text-brand-orange">That Grow Your Business</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Upscale works with businesses, startups, and individuals to turn ideas into reliable digital products through focused development teams.
            </p>
            <button
              onClick={() => onNavigate('Contact')}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[2px] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[80px] lg:h-[120px] text-white fill-current">
            <path d="M0,60 C360,130 720,10 1080,20 C1260,25 1350,90 1440,80 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Services We Offer Grid */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Services We Offer
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We assemble focused development teams to deliver functional web applications, platforms, and SaaS products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${service.bgColor} rounded-[24px] p-8 border ${service.borderColor} shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-sans font-semibold text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-brand-navy hover:text-brand-orange transition-colors mt-auto text-left self-start focus:outline-none cursor-pointer"
                >
                  Request Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white border-t border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Our Values
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Why Work With Us?
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We operate as a collaborative development partner focused on delivering scalable products under professional oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`${benefit.bgColor} border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h4 className="font-display font-bold text-base text-brand-navy mb-2">{benefit.title}</h4>
                <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Workflows
              </span>
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Our Work Process
            </h2>
            <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
              How we take your product requirements from initial concepts to launching builds.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-500/20 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-10 max-w-3xl md:mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[45px] md:-left-[61px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-xs border-4 border-white shadow-md">
                  {index + 1}
                </span>
                <h4 className="font-display font-extrabold text-base text-brand-navy mb-1 leading-snug">
                  {step.title}
                </h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                  Core Technologies
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
                Our Technology Stack
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                We select architectures based on performance, scalability, and lifecycle costs. We build digital solutions using modern frontend frameworks, backend runtimes, database layers, and cloud providers.
              </p>            </div>

            <div className="lg:col-span-6 bg-[#FCFDFF] border border-gray-100 rounded-3xl p-5 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {techGroups.map((group, index) => (
                  <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:border-brand-orange/20 transition-all duration-200">
                    <span className="block font-display font-bold text-xs sm:text-sm text-brand-orange uppercase tracking-wider mb-3">
                      {group.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1.5 rounded-lg bg-gray-50 text-xs font-sans font-semibold text-gray-600 border border-gray-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client CTA Banner */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-brand-navy rounded-[32px] relative overflow-hidden p-8 md:p-14 border border-white/5 text-center shadow-2xl">
            <div className="absolute inset-0 grid-bg-pattern opacity-25 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                Have an Idea? Let's Build It!
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect with our technical leads to map out your project architecture, requirements, scope, and timeline estimates.
              </p>
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-full shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              >
                Schedule Architecture Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
