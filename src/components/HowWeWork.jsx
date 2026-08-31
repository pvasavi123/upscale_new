import React, { useState } from 'react';
import { BookOpen, PenTool, Terminal, MessageSquare, Clipboard, Settings, Send, HelpCircle, Users, Briefcase, ShieldCheck, Clock } from 'lucide-react';

export default function HowWeWork() {
  const [activeTab, setActiveTab] = useState('students');

  const studentSteps = [
    { title: 'Understand Your Goal', desc: 'Define your target role and market expectations.', icon: <BookOpen className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' },
    { title: 'Choose the Right Projects', desc: 'Select unique major and minor project ideas.', icon: <PenTool className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' },
    { title: 'Build Real Projects', desc: 'Write clean code, configure databases, and push Git commits.', icon: <Terminal className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' },
    { title: 'Build Your Profile', desc: 'Format your resume and optimize LinkedIn/Naukri.', icon: <Users className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' },
    { title: 'Get Application Ready', desc: 'Prepare your profiles to pass ATS screenings.', icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' },
    { title: 'Job Application Updates', desc: 'Get daily alerts on fresher openings and deadlines.', icon: <HelpCircle className="w-5 h-5 text-brand-orange" />, badgeBg: 'bg-brand-orange-light' }
  ];

  const clientSteps = [
    { title: 'Discuss', desc: 'Align on project ideas, requirements, and scoping.', icon: <MessageSquare className="w-5 h-5 text-blue-600" />, badgeBg: 'bg-brand-blue-light' },
    { title: 'Plan', desc: 'Establish technology architecture and sprint timelines.', icon: <Clipboard className="w-5 h-5 text-blue-600" />, badgeBg: 'bg-brand-blue-light' },
    { title: 'Develop', desc: 'Code features under senior architect reviews.', icon: <Settings className="w-5 h-5 text-blue-600" />, badgeBg: 'bg-brand-blue-light' },
    { title: 'Test', desc: 'Verify layouts and check APIs for bugs.', icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, badgeBg: 'bg-brand-blue-light' },
    { title: 'Deliver', desc: 'Launch staging builds and complete code handoffs.', icon: <Send className="w-5 h-5 text-blue-600" />, badgeBg: 'bg-brand-blue-light' }
  ];

  const activeSteps = activeTab === 'students' ? studentSteps : clientSteps;

  return (
    <section className="py-20 bg-white text-left relative overflow-hidden">
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
            <h2 className="font-display font-extrabold text-xs sm:text-sm tracking-[0.25em] text-brand-navy uppercase">
              How We Work
            </h2>
            <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
          </div>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose a pathway below to view our step-by-step project delivery workflow.
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer ${
              activeTab === 'students'
                ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-[1.02]'
                : 'bg-white border-gray-200 text-gray-500 hover:text-brand-orange hover:border-brand-orange/30'
            }`}
          >
            <Users className="w-4 h-4" />
            For Students
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer ${
              activeTab === 'clients'
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]'
                : 'bg-white border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-600/30'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            For Clients
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
          {activeSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Giant Background Number Watermark */}
              <span className="absolute right-4 bottom-2 font-display font-extrabold text-7xl text-gray-50/70 select-none group-hover:text-gray-100/80 transition-colors pointer-events-none">
                0{idx + 1}
              </span>

              <div className="relative z-10">
                {/* Icon in Badge */}
                <div className={`w-10 h-10 rounded-xl ${step.badgeBg} flex items-center justify-center mb-6 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <h4 className="font-display font-bold text-base sm:text-lg text-brand-navy mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[90%]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
