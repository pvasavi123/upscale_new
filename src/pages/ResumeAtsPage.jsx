import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle, ShieldCheck, UserCheck, FolderGit, Search, Plus, Minus, AlertCircle } from 'lucide-react';

export default function ResumeAtsPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const pillars = [
    {
      title: 'ATS Resume Structuring',
      desc: 'Reformat dense academic resumes into clean, machine-readable single-page documents with proper typography, parseable tables, and standard headings.',
      icon: <FileText className="w-5 h-5 text-brand-orange" />
    },
    {
      title: 'GitHub Portfolio Cleanup',
      desc: 'Organize your pinned repositories, write comprehensive README markdown files, add setup instructions, and highlight live demo links.',
      icon: <FolderGit className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'LinkedIn & Naukri SEO',
      desc: 'Optimize your profile headline, about section, skill endorsements, and experience blocks with high-volume recruiter search keywords.',
      icon: <UserCheck className="w-5 h-5 text-green-600" />
    },
    {
      title: 'Technical Project Bullet Points',
      desc: 'Rewrite generic project descriptions into high-impact action bullets showcasing technologies used, architecture decisions, and measurable outcomes.',
      icon: <Search className="w-5 h-5 text-purple-600" />
    }
  ];

  const faqs = [
    {
      q: 'What is an ATS (Applicant Tracking System)?',
      a: 'An ATS is software used by recruiters and companies to automatically scan, parse, rank, and filter job applications based on keyword matching, standard headings, and formatting readability before a human recruiter reviews them.'
    },
    {
      q: 'Does Upscale guarantee job placement?',
      a: 'No. UpScale does not provide or guarantee jobs. Our role is strictly limited to helping you build practical software projects, formatting ATS-compliant resumes, optimizing online recruiter profiles, and sharing public fresher job opening alerts.'
    },
    {
      q: 'Is there a fee for the initial resume review?',
      a: 'No. The initial resume audit, GitHub repository evaluation, and profile review are 100% free for students and graduates who connect with Upscale.'
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
              Career Profile Optimization • Hyderabad & Online
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white leading-tight tracking-tight mb-6">
              Fresher Resume Support & <br />
              <span className="text-brand-orange">ATS Profile Optimization</span>
            </h1>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Turn your academic background into an interview-winning tech profile. We help engineering graduates format ATS-compliant resumes, polish GitHub repositories, and optimize LinkedIn search visibility.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Request Free Resume Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('FinalYearProject')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Project Guidance Track
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

      {/* Platform Policy Disclaimer */}
      <section className="py-10 bg-white border-b border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="bg-[#FFF6F2] border border-brand-orange/15 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong>Important Platform Policy:</strong> UpScale does not teach courses and does not provide or guarantee jobs. Our role is strictly limited to hands-on project building, profile optimization, and sharing publicly available career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Optimization Pillars */}
      <section className="py-20 bg-[#FCFDFF] text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-brand-orange rounded-full" />
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase">
                Core Support
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-4">
              Everything Needed for a Strong Recruiter Impression
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              We focus on the technical details recruiters and hiring managers look for in early-career developer profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
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

      {/* Checklist */}
      <section className="py-20 bg-white border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-display font-extrabold text-xs tracking-wider text-brand-orange uppercase block mb-3">
                Audit Checklist
              </span>
              <h2 className="font-display font-extrabold text-3xl text-brand-navy leading-tight mb-6">
                What We Review in Your Profile
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Clean single-column ATS layout with parseable section headers',
                  'Impact-driven project bullet points with tech stack tags',
                  'GitHub profile pinned repos, README clarity, and commit history',
                  'LinkedIn headline and keyword targeting for recruiter search algorithms',
                  'Identification and removal of fluff or outdated academic content'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 grid-bg-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-4">
                  Get Your Resume Audited by Engineers
                </h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8">
                  Submit your current resume draft for a detailed feedback breakdown on ATS readability and project presentation.
                </p>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
                >
                  Submit Resume for Review
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#FCFDFF] border-t border-gray-100 text-left">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-gray-600 text-sm sm:text-base">
              Common questions about our resume and profile optimization process.
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

      {/* Internal Links */}
      <section className="py-16 bg-white border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h3 className="font-display font-bold text-lg text-brand-navy mb-6">
            Explore Related Student Pathways
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('FinalYearProject')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                Final Year Project Guidance →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                End-to-end mentoring for major and minor engineering projects in Hyderabad.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Students')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                All Student Tracks →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Overview of project guidance, portfolio hosting, and job opportunity alerts.
              </p>
            </button>
            <button
              onClick={() => onNavigate('Contact')}
              className="p-6 rounded-2xl bg-[#FCFDFF] border border-gray-100 hover:border-brand-orange/40 transition-all text-left shadow-sm group cursor-pointer focus:outline-none"
            >
              <h4 className="font-display font-bold text-base text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                Contact Our Advisors →
              </h4>
              <p className="font-sans text-xs text-gray-500">
                Connect directly on WhatsApp (+91 90635 93070) or send a message.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
