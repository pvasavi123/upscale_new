import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, Layout, Terminal, Cloud, Smartphone, Briefcase, Code, BookOpen, FileText, CheckCircle, MessageSquare, Clock, Palette, Settings, Brain, Users } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 text-brand-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function ServicesPage({ onNavigate }) {
  const studentServices = [
    { title: 'Minor Project Development', desc: 'Guidance to build responsive layouts and initial CRUD applications.', icon: <Code className="w-5 h-5 text-brand-orange" /> },
    { title: 'Major Project Development', desc: 'Guidance to construct complex full-stack database integrations.', icon: <Terminal className="w-5 h-5 text-brand-orange" /> },
    { title: 'Real-World Project Development', desc: 'Guidance to build software products mimicking modern tech companies.', icon: <Sparkles className="w-5 h-5 text-brand-orange" /> },
    { title: 'Project Documentation', desc: 'Learn to write clean Readmes, architecture charts, and flow diagrams.', icon: <FileText className="w-5 h-5 text-brand-orange" /> },
    { title: 'GitHub & Portfolio Support', desc: 'Configure Git logs, clean repo architecture, and commit histories.', icon: <GithubIcon /> },
    { title: 'Resume & Profile Support', desc: 'Audit resume formats and optimize LinkedIn & Naukri search configs.', icon: <Briefcase className="w-5 h-5 text-brand-orange" /> },
    { title: 'Job Opportunity Updates', desc: 'Receive regular alerts on entry-level fresher openings and deadlines.', icon: <BookOpen className="w-5 h-5 text-brand-orange" /> }
  ];

  const clientServices = [
    { title: 'Website Development', desc: 'Deploy premium corporate and marketing web profiles.', deliverables: 'Business Websites, Landing Pages, Custom Web Pages', icon: <Layout className="w-5 h-5 text-blue-600" /> },
    { title: 'E-Commerce Solutions', desc: 'Build high-converting storefronts with checkouts.', deliverables: 'Online Stores, Payment Systems, Order Managers', icon: <Terminal className="w-5 h-5 text-blue-600" /> },
    { title: 'SaaS App Development', desc: 'Scale secure business products on cloud servers.', deliverables: 'Custom SaaS, Multi-Tenant Configs, Subscription Systems', icon: <Cloud className="w-5 h-5 text-blue-600" /> },
    { title: 'Mobile App Development', desc: 'Deploy Android & iOS apps from a single code base.', deliverables: 'Cross-Platform SDKs, Native Mobile UI/UX, API Syncs', icon: <Smartphone className="w-5 h-5 text-blue-600" /> },
    { title: 'UI/UX Design', desc: 'Create custom user-centric interface layouts.', deliverables: 'Modern UI Themes, Wireframes, Interactive Prototypes', icon: <Palette className="w-5 h-5 text-blue-600" /> },
    { title: 'Web Application Development', desc: 'Build complex dashboards and custom portal systems.', deliverables: 'Custom Portals, Admin Dashboards, API Connections', icon: <Briefcase className="w-5 h-5 text-blue-600" /> }
  ];

  const techGroups = [
    { title: 'Frontend', skills: ['React.js', 'React Native', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST APIs'] },
    { title: 'Databases', skills: ['SQL', 'MongoDB'] },
    { title: 'AI & Data', skills: ['AI Engineering', 'Prompt Engineering', 'Pandas'] },
    { title: 'Testing & QA', skills: ['Manual Testing', 'API Testing', 'Database Testing', 'Retesting'] },
    { title: 'Tools & Cloud', skills: ['Git', 'GitHub', 'AWS'] }
  ];

  const whyChooseItems = [
    { title: 'Collaborative Six-Member Team', desc: 'Operations coordinated by a core six-member team syncing tech, recruitment, and design.', icon: <Users className="w-5 h-5 text-brand-orange" />, bgColor: 'bg-brand-orange-light' },
    { title: 'Practical Approach', desc: 'We skip dry lectures and listing layouts, focusing entirely on hands-on project building.', icon: <Code className="w-5 h-5 text-blue-600" />, bgColor: 'bg-brand-blue-light' },
    { title: 'Modern Technology', desc: 'Built using secure backend frameworks, React frontends, database engines, and cloud setups.', icon: <Settings className="w-5 h-5 text-purple-600" />, bgColor: 'bg-purple-50' },
    { title: 'Transparent Communication', desc: 'Access client staging links, daily git updates, and transparent timeline scope briefs.', icon: <MessageSquare className="w-5 h-5 text-blue-600" />, bgColor: 'bg-brand-blue-light' },
    { title: 'Quality Development', desc: 'All code reviews are directly supervised and finalized by our senior technical architects.', icon: <ShieldCheck className="w-5 h-5 text-green-600" />, bgColor: 'bg-green-50' },
    { title: 'Timely Delivery', desc: 'Sprint planning and milestones coordinates bi-weekly updates on schedule.', icon: <Clock className="w-5 h-5 text-yellow-600" />, bgColor: 'bg-yellow-50' },
    { title: 'Ongoing Support', desc: 'Provides launch-week technical monitoring, handoffs, and monthly scoping retainers.', icon: <Sparkles className="w-5 h-5 text-brand-orange" />, bgColor: 'bg-brand-orange-light' }
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
              Our Services
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5.5xl text-white leading-tight tracking-tight mb-6">
              Practical Support. <br />
              <span className="text-brand-orange">Professional Solutions.</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Upscale helps students build practical software projects and professional profiles while also helping businesses and individuals turn ideas into high-quality digital products.
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

      {/* Visually Separated Services Tracks */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          {/* For Students Section */}
          <div className="mb-24">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                  Pathway 1
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
                For Students & Graduates
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed max-w-2xl">
                We assist early-career developers in building software portfolios and optimizing professional profiles. 
                <strong className="text-brand-orange block mt-2">*Important Platform Policy: UpScale does not teach courses and does not provide or guarantee jobs. Our role is strictly limited to project building, profile optimization, and opportunity sharing.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentServices.map((service, idx) => (
                <div key={idx} className="bg-[#FFF6F2] rounded-2xl p-6 border border-brand-orange/5 flex gap-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-navy mb-2">{service.title}</h4>
                    <p className="font-sans text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:text-left">
              <button 
                onClick={() => onNavigate('Students')}
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-brand-orange hover:text-brand-orange-hover transition-colors focus:outline-none cursor-pointer"
              >
                Learn More About Students Pathway
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* For Clients Section */}
          <div className="border-t border-gray-100 pt-20">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                  Pathway 2
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
                For Clients & Businesses
              </h2>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                We coordinate focused developer teams to turn requirements into scalable web apps, mobile builds, and SaaS platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientServices.map((service, idx) => (
                <div key={idx} className="bg-brand-blue-light rounded-2xl p-8 border border-blue-500/5 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 mb-6 shadow-sm">
                      {service.icon}
                    </div>
                    <h4 className="font-display font-bold text-lg text-brand-navy mb-2">{service.title}</h4>
                    <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">{service.desc}</p>
                    <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Deliverables</span>
                    <p className="font-sans text-[11px] font-semibold text-gray-600 leading-relaxed mb-6">{service.deliverables}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('Contact')}
                    className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-brand-navy hover:text-brand-orange transition-colors self-start cursor-pointer focus:outline-none"
                  >
                    Request Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center md:text-left">
              <button 
                onClick={() => onNavigate('Clients')}
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-blue-600 hover:text-blue-700 transition-colors focus:outline-none cursor-pointer"
              >
                Learn More About Clients Pathway
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Standard Stacks
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Our Technology Stack
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We configure software solutions using robust frontend runtimes, backend runtimes, database structures, cloud systems, and AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
                <span className="block font-display font-bold text-xs text-brand-orange uppercase tracking-wider mb-3">
                  {group.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1.5 rounded-lg bg-gray-50 text-[11px] font-sans font-semibold text-gray-600 border border-gray-100/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                Workflows
              </span>
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              How We Work
            </h2>
            <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
              Two pathways designed to support students and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Students Workflow */}
            <div className="bg-[#FFF6F2] rounded-3xl p-8 border border-brand-orange/5 shadow-md">
              <h3 className="font-display font-extrabold text-xl text-brand-navy mb-6">Students Workflow</h3>
              <div className="relative border-l border-brand-orange/20 ml-3 pl-8 flex flex-col gap-6">
                {[
                  { title: 'Understand', desc: 'Define target role and market expectations.' },
                  { title: 'Choose Projects', desc: 'Select unique major and minor project ideas.' },
                  { title: 'Build', desc: 'Write clean code, configure databases, and push Git commits.' },
                  { title: 'Profile', desc: 'Format resume and optimize LinkedIn/Naukri.' },
                  { title: 'Apply', desc: 'Prepare profiles to pass automated ATS screenings.' },
                  { title: 'Opportunity Updates', desc: 'Get daily alerts on fresher openings and deadlines.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border border-brand-orange/20 flex items-center justify-center font-display font-extrabold text-xs text-brand-orange shadow-sm">
                      {idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm text-brand-navy mb-1 leading-snug">{step.title}</h4>
                    <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Workflow */}
            <div className="bg-brand-blue-light rounded-3xl p-8 border border-blue-500/5 shadow-md">
              <h3 className="font-display font-extrabold text-xl text-brand-navy mb-6">Clients Workflow</h3>
              <div className="relative border-l border-blue-500/20 ml-3 pl-8 flex flex-col gap-7">
                {[
                  { title: 'Discuss', desc: 'Align on project ideas, requirements, and scoping.' },
                  { title: 'Plan', desc: 'Establish technology architecture and sprint timelines.' },
                  { title: 'Develop', desc: 'Code features with senior lead reviews.' },
                  { title: 'Test', desc: 'Verify layouts and check APIs for bugs.' },
                  { title: 'Deliver', desc: 'Launch staging builds and complete code handoffs.' },
                  { title: 'Support', desc: 'Provide maintenance and security updates post-launch.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border border-blue-500/20 flex items-center justify-center font-display font-extrabold text-xs text-blue-600 shadow-sm">
                      {idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm text-brand-navy mb-1 leading-snug">{step.title}</h4>
                    <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UpScale? */}
      <section className="py-20 bg-white border-t border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Platform Strengths
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Why Choose Upscale?
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We operate differently, combining custom project-based support with senior-managed code standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.bgColor}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-brand-navy mb-2">{item.title}</h4>
                  <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Deliverables
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              What You Get
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              A clean breakdown of outcomes delivered to both our student and client tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What Students Get */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
              <h3 className="font-display font-extrabold text-lg text-brand-navy mb-6">For Students</h3>
              <ul className="flex flex-col gap-4">
                {[
                  'Portfolio-ready minor and major software projects',
                  'Active commit log history on Git/GitHub repositories',
                  'Clean formatted resume optimized for ATS scanners',
                  'Recruiter-optimized search configuration on LinkedIn & Naukri',
                  'Custom hosted static developer portfolio page',
                  'Daily notifications on fresher openings and deadlines'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm font-sans font-semibold text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Clients Get */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
              <h3 className="font-display font-extrabold text-lg text-brand-navy mb-6">For Clients</h3>
              <ul className="flex flex-col gap-4">
                {[
                  'Clean, senior-reviewed repository source code',
                  'Comprehensive database charts and API Readmes',
                  'Staging server deployments for sandbox reviews',
                  'Credentials and code ownership handovers',
                  'Post-launch week technical monitoring and support'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm font-sans font-semibold text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Action CTA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-brand-navy rounded-[32px] relative overflow-hidden p-8 md:p-14 border border-white/5 text-center shadow-2xl">
            <div className="absolute inset-0 grid-bg-pattern opacity-25 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-white leading-tight">
                Have a Goal or an Idea? Let's Build It Together.
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether you want to build coding projects to grow your developer career or launch a product, we are ready to build with you.
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
