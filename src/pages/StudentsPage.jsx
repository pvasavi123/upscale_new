import React, { useState } from 'react';
import { GraduationCap, Code, FileText, CheckCircle, ArrowRight, Users, Target, FolderGit, UserCheck, Briefcase, HelpCircle, Send, Terminal, Plus, Minus } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-5 h-5 text-brand-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function StudentsPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const techGroups = [
    { title: 'Frontend', skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST APIs'] },
    { title: 'Databases', skills: ['SQL', 'PL/SQL', 'MongoDB'] },
    { title: 'AI & Data', skills: ['AI Engineering', 'Prompt Engineering', 'Pandas'] },
    { title: 'Testing & QA', skills: ['Manual Testing', 'API Testing', 'Database Testing', 'Retesting'] },
    { title: 'Tools & Cloud', skills: ['Git', 'GitHub', 'AWS', 'Office.js'] }
  ];

  const journeySteps = [
    { title: '1. Understand Your Goal', desc: 'Identify your target role (Frontend, Backend, Fullstack) and analyze market expectations.' },
    { title: '2. Choose the Right Projects', desc: 'Select unique major and minor project ideas that address real-world business challenges.' },
    { title: '3. Build Real Projects', desc: 'Write clean code, configure databases, configure APIs, and push continuous GitHub commits.' },
    { title: '4. Build Your Profile', desc: 'Format your resume, configure your LinkedIn and Naukri settings, and launch your portfolio.' },
    { title: '5. Get Application Ready', desc: 'Prepare your profiles to pass automated ATS screenings and recruiter audits.' },
    { title: '6. Job Application Updates', desc: 'Receive daily updates on internships, entry-level openings, and application deadlines.' }
  ];

  const requirements = [
    {
      id: 1,
      title: 'Updated Resume',
      desc: 'Formated structure optimized to pass automated ATS parser screenings and highlight technical skills.',
      icon: <FileText className="w-5 h-5 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light'
    },
    {
      id: 2,
      title: 'Strong LinkedIn & Naukri Profiles',
      desc: 'Optimized search visibility keywords, featured project blocks, and professional profiles.',
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      desc: 'Custom hosted static portfolio page demonstrating coding capabilities and deployed projects.',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light'
    },
    {
      id: 4,
      title: 'Minor & Major Projects',
      desc: 'Multiple responsive frontend layouts and comprehensive full-stack database integrations.',
      icon: <FolderGit className="w-5 h-5 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light'
    },
    {
      id: 5,
      title: 'GitHub Profile',
      desc: 'Active commit logs, clean repository architectures, and detailed project readmes.',
      icon: <GithubIcon />,
      bgColor: 'bg-brand-orange-light'
    },
    {
      id: 6,
      title: 'Active Job Applications',
      desc: 'Consistent daily tracking and applying to relevant opening channels with structured applications.',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light'
    }
  ];

  const faqs = [
    {
      q: 'Does Upscale teach coding courses?',
      a: 'No. Upscale is not a training institute. We do not provide lectures or tutorials on coding languages. Instead, we guide you to apply your existing knowledge by building portfolio-ready projects and setting up your profiles.'
    },
    {
      q: 'Does Upscale provide or guarantee jobs?',
      a: 'No. We do not offer job placement, job guarantees, or direct matchmaking. We help you stay informed by sharing relevant job openings, internships, and application deadlines, and we optimize your profiles so you stand a better chance when applying.'
    },
    {
      q: 'Who can join Upscale?',
      a: 'Our platform is designed for final-year college students, recent college graduates, and freshers looking to build their first technical portfolio pieces and optimize their professional profiles.'
    },
    {
      q: 'What technologies are used in the projects?',
      a: 'You can build projects using any technology relevant to your career goal. Most of our students build projects using Java, Spring Boot, React.js, Python, SQL, AWS, and Git/GitHub.'
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
              For Students & Graduates
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5.5xl text-white leading-tight tracking-tight mb-6">
              Level Up. <br />
              Build Projects. <span className="text-brand-orange">Grow Careers.</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Upscale helps final-year students, fresh graduates, and freshers build practical software projects, strengthen their professional profiles, and stay informed about relevant career opportunities.
            </p>
            <button
              onClick={() => onNavigate('Contact')}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              Get Started Free
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

      {/* Who We Help Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Who We Help
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Designed for Early-Career Candidates
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We focus on building practical experience for developers entering the competitive job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Final-Year Students</h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">
                Assemble your academic minor/major projects and build up your profiles before your campus placement drives begin.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Recent Graduates</h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">
                Bridge the gap between theoretical graduation degrees and the practical, repository-based experience hiring teams expect.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Freshers</h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">
                Clean up your coding history, write comprehensive project documentation, and organize your job application strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Things Every Student Needs */}
      <section className="py-20 bg-white border-t border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Essential Foundations
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy leading-tight uppercase">
              6 Things Every Student <span className="text-brand-orange">Needs</span>
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
              We help you audit, refine, and check off these six crucial assets so that you are fully prepared for the recruitment process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((item) => (
              <div 
                key={item.id}
                className={`${item.bgColor} rounded-[24px] p-8 border border-gray-100 shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-display font-extrabold text-sm text-gray-400">
                      0{item.id}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Development Focus */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                  Main Platform Focus
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                Hands-On Project Development
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                We do not teach coding syntax or host courses. Instead, we guide you to build portfolio-ready minor and major projects that show you can write production-level software.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-navy mb-1">Minor & Major Projects</h4>
                    <p className="font-sans text-gray-500 text-xs leading-relaxed">Build functional utilities, APIs, and complex database integrations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-navy mb-1">Documentation & Git</h4>
                    <p className="font-sans text-gray-500 text-xs leading-relaxed">Write clean readmes, architecture charts, and deploy live links.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200/80">
                <h4 className="font-display font-bold text-xs text-brand-navy mb-4 uppercase tracking-wider">
                  Technologies You Will Build With
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {techGroups.map((group, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-md hover:border-brand-orange/20 transition-all duration-200">
                      <span className="block font-display font-bold text-[10px] text-brand-orange uppercase mb-1">
                        {group.title}
                      </span>
                      <p className="font-sans text-[11px] font-semibold text-gray-500 leading-snug">
                        {group.skills.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-blue-600" />
                <h4 className="font-display font-bold text-lg text-brand-navy">Portfolio Projects</h4>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  'Frontend responsive interface design systems',
                  'REST API creation and routing structures',
                  'Database query optimizations (SQL/NoSQL)',
                  'Hosting configs and cloud storage pipelines'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm font-sans font-semibold text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-display font-extrabold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Build Your Professional Profile */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Outreach Optimization
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Build Your Professional Profile
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We help you polish and configure your professional profiles to catch the eye of recruiter teams and hiring managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { name: 'Resume', desc: 'Clear formatting, ATS-friendly keyword placement, and skills focus.' },
              { name: 'LinkedIn', desc: 'Headline copywriting, featured project setup, and network configs.' },
              { name: 'Naukri', desc: 'Profile completeness checks, key descriptors, and search optimization.' },
              { name: 'GitHub', desc: 'Repositories organization, clean readme documentations, and commit timelines.' },
              { name: 'Portfolio Site', desc: 'Hosted static websites presenting projects, skills, and direct contact options.' }
            ].map((profile, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <span className="block font-display font-extrabold text-brand-orange text-lg mb-3">0{idx + 1}</span>
                <h4 className="font-display font-bold text-base text-brand-navy mb-2">{profile.name}</h4>
                <p className="font-sans text-gray-500 text-xs leading-relaxed">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Career Journey */}
      <section className="py-20 bg-white border-t border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                The Path
              </span>
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Our 6-Step Career Journey
            </h2>
            <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
              A structured workflow to construct your coding portfolio and ready your profiles.
            </p>
          </div>

          <div className="relative border-l-2 border-brand-orange/20 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12 max-w-3xl md:mx-auto">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[45px] md:-left-[61px] top-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-display font-extrabold text-sm border-4 border-white shadow-md animate-pulse">
                  {index + 1}
                </span>
                <h4 className="font-display font-extrabold text-lg text-brand-navy mb-2">
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

      {/* Job Application Support */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Application Feeds
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
              Job Application Support
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              We actively monitor and share relevant entry-level job openings, internships, fresher opportunities, and application deadlines. We provide the details and links you need to apply correctly.
            </p>
            <div className="bg-white border border-brand-orange/10 rounded-2xl p-6 max-w-2xl">
              <h4 className="font-display font-bold text-sm text-brand-navy mb-2 uppercase tracking-wide">
                * Important Platform Policy Notice
              </h4>
              <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
                Upscale is not a recruitment agency. We do not provide jobs, job guarantees, placement assistance, or direct job matching. Our goal is to prepare candidates to stand out in the general recruitment pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Outputs
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              What You Walk Away With
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              Once you complete your portfolio milestones, you possess a complete set of hiring-ready materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Real Software Projects', desc: 'Custom built minor and major project repositories pushed to Git.' },
              { title: 'GitHub Portfolio Grid', desc: 'Active commit logs verifying hands-on coding capability.' },
              { title: 'Professional Resume', desc: 'Clear formatting structures, optimized for ATS scanners.' },
              { title: 'LinkedIn & Naukri setups', desc: 'Keyword alignments and profile setups for recruiter search feeds.' },
              { title: 'Portfolio Website', desc: 'A custom deployed landing page showcasing skills and links.' },
              { title: 'Opportunity Updates', desc: 'Regular alerts on deadlines, internship slots, and entry-level positions.' }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 text-brand-orange">
                  <CheckCircle className="w-4 h-4" />
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-50 text-left">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-100 bg-white rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base md:text-lg text-brand-navy hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 border-t border-gray-50 bg-[#FCFDFF] font-sans text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Action Banner */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-brand-navy rounded-[32px] relative overflow-hidden p-8 md:p-14 border border-white/5 text-center shadow-2xl">
            <div className="absolute inset-0 grid-bg-pattern opacity-25 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                Ready to Build Your Career?
              </h3>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Audit your profiles and start building your development portfolio today.
              </p>
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-4 rounded-full shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
