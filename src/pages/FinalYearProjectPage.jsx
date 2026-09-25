import React, { useState } from 'react';
import { ArrowRight, Code, Terminal, FileText, CheckCircle, ShieldCheck, BookOpen, Layers, HelpCircle, Plus, Minus, Users, Sparkles } from 'lucide-react';

export default function FinalYearProjectPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const techDomains = [
    {
      title: 'Full-Stack Web & SaaS',
      stack: 'React.js, Node.js, Express, MongoDB / PostgreSQL, Tailwind CSS',
      desc: 'Build complete end-to-end web applications with authentication, responsive layouts, CRUD modules, and live cloud deployment.'
    },
    {
      title: 'Java Enterprise Systems',
      stack: 'Java, Spring Boot, Hibernate, MySQL, REST APIs',
      desc: 'Architect robust backend services with role-based access control, relational database design, and microservice patterns.'
    },
    {
      title: 'Python & AI / Machine Learning',
      stack: 'Python, Flask / FastAPI, Pandas, Scikit-learn, OpenCV',
      desc: 'Develop practical AI/ML models, data pipelines, predictive analytics, and computer vision projects with interactive web interfaces.'
    },
    {
      title: 'Mobile App Solutions',
      stack: 'React Native, Expo, Firebase, REST APIs',
      desc: 'Design cross-platform mobile apps for iOS and Android featuring real-time data sync, state management, and modern mobile UX.'
    }
  ];

  const mentorshipSteps = [
    {
      step: '01',
      title: 'Project Topic Selection & Scope',
      desc: 'We help you choose a unique, problem-solving project idea aligned with current industry standards rather than outdated academic templates.'
    },
    {
      step: '02',
      title: 'Architecture & Tech Stack Planning',
      desc: 'Design database schemas, system architecture diagrams, and API endpoint contracts before writing the first line of code.'
    },
    {
      step: '03',
      title: 'Hands-On Implementation Guidance',
      desc: 'Write clean, modular code with step-by-step mentoring, live debugging assistance, and best practices in error handling.'
    },
    {
      step: '04',
      title: 'Git Repository & Commit History',
      desc: 'Maintain a professional GitHub repository with meaningful commit messages, branch workflows, and clean README documentation.'
    },
    {
      step: '05',
      title: 'Documentation & Architecture Flowcharts',
      desc: 'Learn how to construct project reports, system flowcharts, ER diagrams, and API documentation for college submissions.'
    },
    {
      step: '06',
      title: 'Viva & Project Explanation Preparation',
      desc: 'Understand every component of your codebase thoroughly so you can confidently explain the architecture and answer technical viva questions.'
    }
  ];

  const faqs = [
    {
      q: 'Do you complete the project on behalf of the student?',
      a: 'No. Upscale provides ethical project mentoring, architecture guidance, debugging support, and technical instruction. Our mission is to ensure you understand every line of code so you can confidently present your project and speak about it in job interviews.'
    },
    {
      q: 'Which branches and degree programs do you support?',
      a: 'We support students pursuing B.Tech / BE in CSE, IT, ECE, AI/ML, Data Science, as well as MCA and M.Tech graduates seeking practical project credentials.'
    },
    {
      q: 'Can students in Hyderabad join for in-person or online sessions?',
      a: 'We support both online interactive mentoring across India and remote-first collaboration coordinated from our Hyderabad engineering hub.'
    },
    {
      q: 'Will this project help in technical job interviews?',
      a: 'Yes. Having a live deployed project with a clean GitHub commit history and clear architectural design gives you concrete engineering proof during technical screenings.'
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
              Student Project Mentorship • Hyderabad & Online
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white leading-tight tracking-tight mb-6">
              Final Year Engineering <br />
              <span className="text-brand-orange">Project Guidance</span> in Hyderabad
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Practical mentorship for B.Tech, BE, and MCA students. Build real-world major and minor software projects with clean GitHub commits, comprehensive documentation, and deep code understanding for your viva and technical interviews.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Get Project Guidance
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('ResumeAtsSupport')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Resume & ATS Support
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

      {/* Ethical Guidance Statement */}
      <section className="py-12 bg-white border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-brand-blue-light/50 border border-blue-500/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-1">
                Ethical Mentoring & Hands-On Learning Approach
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Upscale does not provide pre-packaged readymade projects. We guide you through the complete development lifecycle—from requirements analysis and API design to debugging and deployment—so you master the engineering skills required for top tech careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Technology Domains */}
      <section className="py-20 bg-[#FCFDFF] text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Supported Tracks
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Project Domains & Modern Tech Stacks
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              Choose from industry-demanded technology stacks with structured guidance tailored to your academic syllabus and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techDomains.map((domain, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-6">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2">{domain.title}</h3>
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-sans text-xs font-semibold mb-4">
                  {domain.stack}
                </span>
                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">{domain.desc}</p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-brand-orange hover:text-brand-orange-hover transition-colors focus:outline-none cursor-pointer"
                >
                  Inquire for this domain
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Mentorship Journey */}
      <section className="py-20 bg-white border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-blue-600 uppercase">
                Our Methodology
              </span>
              <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              How Project Guidance Works at Upscale
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              A structured 6-stage roadmap ensuring complete confidence from ideation to final submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorshipSteps.map((item, idx) => (
              <div key={idx} className="bg-[#FCFDFF] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:border-brand-orange/30 transition-all duration-300">
                <div>
                  <span className="font-display font-extrabold text-3xl text-brand-orange/40 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-[#FCFDFF] border-t border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
                <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                  Tangible Outcomes
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                What You Walk Away With
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                By working through guided milestones, you produce verifiable engineering artifacts that differentiate you from peers who rely on static college submissions.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Live, cloud-deployed web or mobile application link',
                  'Active GitHub repository with clean commit history and modular structure',
                  'Comprehensive documentation including system design, ER diagrams, and API docs',
                  'Deep understanding of project architecture for viva defense',
                  'Resume-ready project bullet points with quantifiable technical impact'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid-bg-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-4">
                  Need Help Choosing Your Project Idea?
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8">
                  Connect with our technical advisors to review your requirements, evaluate suitable topics, and schedule your kickoff session.
                </p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Schedule Project Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base">
              Common questions about final year engineering project guidance at Upscale.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
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
      <section className="py-16 bg-gray-50 border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h3 className="font-display font-bold text-lg text-brand-navy mb-6">
            Explore Related Support Tracks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('ResumeAtsSupport')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                Resume & ATS Optimization →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Format your technical resume and optimize your LinkedIn and Naukri search visibility.
              </p>
            </button>
            <button
              onClick={() => onNavigate('WebDevelopment')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                Web Development Services →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Custom web applications, responsive corporate sites, and React frontend engineering.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Students')}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                All Student Pathways →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Full overview of minor projects, major projects, GitHub audits, and job notifications.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
