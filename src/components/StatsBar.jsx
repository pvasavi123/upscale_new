import React from 'react';
import { GraduationCap, Rocket, Smile } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      iconBg: 'bg-blue-50',
      value: '10+',
      label: 'Focus Tracks',
    },
    {
      icon: <Rocket className="w-6 h-6 text-brand-orange" />,
      iconBg: 'bg-brand-orange-light',
      value: '100+',
      label: 'Projects Delivered',
    },
    {
      icon: <Smile className="w-6 h-6 text-green-600" />,
      iconBg: 'bg-brand-green-light',
      value: '100%',
      label: 'Client Satisfaction Goal',
    },
  ];

  return (
    <div className="relative z-30 px-6 max-w-7xl mx-auto -mt-8 sm:-mt-14 lg:-mt-20">
      <div className="bg-white rounded-3xl shadow-xl shadow-brand-navy/5 border border-gray-100 py-6 md:py-8 px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-5 justify-center md:justify-start ${
                index > 0 ? 'pt-6 md:pt-0 md:pl-8 lg:pl-16' : 'md:pr-8 lg:pr-16'
              }`}
            >
              {/* Circular Icon Background */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                {stat.icon}
              </div>
              
              {/* Stat text */}
              <div className="text-left">
                <span className="block font-display font-extrabold text-3xl md:text-4xl text-brand-navy tracking-tight">
                  {stat.value}
                </span>
                <span className="block font-sans text-xs md:text-sm font-medium text-gray-500 mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
