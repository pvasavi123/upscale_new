import React from 'react';
import { Users, Shield, Clock, MessageSquare, Heart, Trophy } from 'lucide-react';

export default function WhyChoose() {
  const items = [
    {
      icon: <Users className="w-5 h-5 text-orange-600" />,
      bgColor: 'bg-orange-50',
      title: 'Team of Experts',
      description: 'Skilled professionals dedicated to your success.',
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-blue-50',
      title: 'Quality You Can Trust',
      description: 'We follow best practices to deliver top-quality work.',
    },
    {
      icon: <Clock className="w-5 h-5 text-green-600" />,
      bgColor: 'bg-green-50',
      title: 'On Time, Every Time',
      description: 'We value your time and always meet clear deadlines.',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      bgColor: 'bg-purple-50',
      title: 'Transparent & Reliable',
      description: 'Clear communication and complete transparency.',
    },
    {
      icon: <Heart className="w-5 h-5 text-red-500" />,
      bgColor: 'bg-red-50',
      title: 'Consistent Support',
      description: 'Stay consistent, stay focused — we support daily.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      title: 'Real-World Outcomes',
      description: 'Career-ready students and scalable products for clients.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
          <h2 className="font-display font-extrabold text-xs sm:text-sm tracking-[0.25em] text-brand-navy uppercase">
            Why Choose <span className="text-brand-orange">Upscale?</span>
          </h2>
          <span className="h-[2px] w-8 md:w-16 bg-brand-orange/30 rounded-full" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Circular Icon background */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 ${item.bgColor}`}>
                {item.icon}
              </div>
              
              {/* Heading */}
              <h3 className="font-display font-bold text-lg text-brand-navy mb-3">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
