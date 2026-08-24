import React from 'react';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export default function Tracks({ onNavigate }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
          <h2 className="font-display font-extrabold text-xs sm:text-sm tracking-[0.25em] text-brand-navy uppercase">
            Our Two Tracks
          </h2>
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Careers for Students */}
          <div className="bg-[#FFF6F2] rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-brand-orange/5 shadow-lg shadow-brand-orange/2 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="md:col-span-7 text-left">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-brand-orange" />
                </div>
                {/* Heading */}
                <h3 className="font-display font-extrabold text-2xl text-brand-navy leading-tight mb-4">
                  1. Upscale <span className="text-brand-orange">Careers</span> <br />
                  for Students
                </h3>
                {/* Text */}
                <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  A guided path for students and final-year graduates to become job-ready with resumes, profiles, projects, portfolio websites, GitHub and active job-application support.
                </p>
                {/* Action Link */}
                <button 
                  onClick={() => onNavigate('Students')} 
                  className="inline-flex items-center gap-2 font-display font-bold text-sm text-brand-orange hover:text-brand-orange-hover transition-colors group-hover:translate-x-1 duration-300 cursor-pointer focus:outline-none"
                >
                  Explore for Students
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Image */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                    alt="Female student smiling while working on laptop" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Freelance Team for Clients */}
          <div className="bg-[#F4F8FD] rounded-[32px] p-8 md:p-10 flex flex-col justify-between border border-blue-500/5 shadow-lg shadow-blue-500/2 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="md:col-span-7 text-left">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                {/* Heading */}
                <h3 className="font-display font-extrabold text-2xl text-brand-navy leading-tight mb-4">
                  2. Upscale <span className="text-blue-700">Freelance</span> <br />
                  Team for Clients
                </h3>
                {/* Text */}
                <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  A team of expert developers and designers who build websites, apps, SaaS platforms and digital products from concept to deployment.
                </p>
                {/* Action Link */}
                <button 
                  onClick={() => onNavigate('Clients')} 
                  className="inline-flex items-center gap-2 font-display font-bold text-sm text-blue-700 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300 cursor-pointer focus:outline-none"
                >
                  Explore for Clients
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Image */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                    alt="Modern commercial glass office building skyscraper" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
