import React from 'react';
import { ArrowRight, Code, Palette, GraduationCap, Briefcase } from 'lucide-react';

export default function TeamPreview({ onNavigate }) {
  const pillars = [
    {
      icon: <Code className="w-5 h-5 text-orange-600" />,
      bgColor: 'bg-orange-50',
      title: 'Technology & Code',
      desc: 'Developing robust, scalable web applications, mobile architectures, and secure cloud pipelines.'
    },
    {
      icon: <Palette className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-blue-50',
      title: 'Design & Experience',
      desc: 'Crafting clean, responsive user interfaces and interactive Figma design systems.'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-purple-600" />,
      bgColor: 'bg-purple-50',
      title: 'Mentorship & Career',
      desc: 'Guiding final-year graduates with resume audits, profiles, and tech mock interview drills.'
    },
    {
      icon: <Briefcase className="w-5 h-5 text-green-600" />,
      bgColor: 'bg-green-50',
      title: 'Business & Launch',
      desc: 'Scoping custom startup requirements and coordinating bi-weekly agile development cycles.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFDFF] border-t border-b border-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
          <h2 className="font-display font-extrabold text-xs sm:text-sm tracking-[0.25em] text-brand-navy uppercase">
            The Minds Behind <span className="text-brand-orange">UpScale</span>
          </h2>
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
        </div>

        {/* Tagline & Statement */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-display font-bold text-xs sm:text-sm tracking-wide text-brand-orange uppercase mb-4">
            Six minds. One vision. Building technology that delivers.
          </p>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            Upscale is built by a collaborative team of six members who combine their skills, ideas, and creativity to build practical digital solutions. By merging our expertise across engineering, design, recruitment, and strategy, we operate as a single unified force focused on driving real-world outcomes.
          </p>
        </div>

        {/* Pillars Grid - Replicating identical WhyChoose styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Circular Icon background */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 ${pillar.bgColor}`}>
                {pillar.icon}
              </div>
              
              {/* Heading */}
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-[240px]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Link to About */}
        <div className="text-center">
          <button 
            onClick={() => onNavigate('About')}
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-brand-orange hover:text-brand-orange-hover transition-colors focus:outline-none cursor-pointer"
          >
            Learn More About Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
