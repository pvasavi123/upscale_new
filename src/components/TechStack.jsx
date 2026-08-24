import React from 'react';
import { ArrowRight, Code2, Database, Brain, Settings, Cloud, Layers } from 'lucide-react';

export default function TechStack({ onNavigate }) {
  const categories = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-5 h-5 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      skills: ['SQL', 'PL/SQL', 'MongoDB']
    },
    {
      title: 'AI & Data',
      icon: <Brain className="w-5 h-5 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      skills: ['AI Engineering', 'Prompt Engineering', 'Pandas']
    },
    {
      title: 'Testing & QA',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-brand-blue-light',
      skills: ['Manual Testing', 'API Testing', 'Database Testing', 'Retesting']
    },
    {
      title: 'Tools & Cloud',
      icon: <Cloud className="w-5 h-5 text-brand-orange" />,
      bgColor: 'bg-brand-orange-light',
      skills: ['Git', 'GitHub', 'AWS', 'Office.js']
    }
  ];

  return (
    <section className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
            <h2 className="font-display font-extrabold text-xs sm:text-sm tracking-[0.25em] text-brand-navy uppercase">
              Our Technology Stack
            </h2>
            <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
          </div>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            We build using industry-standard engineering frameworks to deliver high-performance and scalable software architectures.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.bgColor}`}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy">
                  {cat.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg bg-gray-50 text-[11px] font-sans font-semibold text-gray-600 border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Services */}
        <div className="text-center">
          <button 
            onClick={() => onNavigate('Services')}
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-brand-orange hover:text-brand-orange-hover transition-colors focus:outline-none cursor-pointer"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
