import React from 'react';
import { GraduationCap, Briefcase, Rocket, Smile } from 'lucide-react';
import heroTeamImg from '../assets/hero-team.jpg';

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

var socialLinks = [
  { key: 'instagram', href: 'https://instagram.com/upscale.services' },
  { key: 'linkedin', href: 'https://www.linkedin.com/company/upscale-it-services/posts/' },
  { key: 'twitter', href: '#' },
  { key: 'github', href: '#' }
];

function SocialIcon(props) {
  var iconKey = props.iconKey;
  if (iconKey === 'instagram') return <InstagramIcon />;
  if (iconKey === 'linkedin') return <LinkedinIcon />;
  if (iconKey === 'twitter') return <TwitterIcon />;
  if (iconKey === 'github') return <GithubIcon />;
  return null;
}

var statsData = [
  { key: 'tracks', value: '10+', label: 'Focus Tracks', iconBg: 'bg-blue-50' },
  { key: 'projects', value: '100+', label: 'Projects Delivered', iconBg: 'bg-brand-orange-light' },
  { key: 'satisfaction', value: '100%', label: 'Client Satisfaction Goal', iconBg: 'bg-brand-green-light' }
];

function StatIcon(props) {
  var iconKey = props.iconKey;
  if (iconKey === 'tracks') return <GraduationCap className="w-6 h-6 text-blue-600" />;
  if (iconKey === 'projects') return <Rocket className="w-6 h-6 text-brand-orange" />;
  if (iconKey === 'satisfaction') return <Smile className="w-6 h-6 text-green-600" />;
  return null;
}

export default function Hero(props) {
  var onNavigate = props.onNavigate;

  return (
    <section className="relative bg-brand-navy-dark pt-32 pb-24 lg:pt-40 lg:pb-20 overflow-visible">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-5 text-left flex flex-col justify-center relative">
            <span className="font-display font-bold text-xs lg:text-sm tracking-[0.2em] text-brand-orange mb-4 uppercase inline-block">
              I Build. You Grow.
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.1] tracking-tight mb-6">
              Real Support. <br />
              Real <span className="text-brand-orange">Growth</span>.
            </h1>

            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Upscale is a two-sided platform helping students become career-ready and businesses build powerful digital solutions with our freelance experts.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={function () { onNavigate('Students'); }}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-sans text-sm font-semibold px-5 py-3.5 rounded-2xl shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto shrink-0 cursor-pointer focus:outline-none"
              >
                <GraduationCap className="w-5 h-5" />
                <span>I'm a Student</span>
              </button>
              <button
                onClick={function () { onNavigate('Clients'); }}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans text-sm font-semibold px-5 py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto shrink-0 cursor-pointer focus:outline-none"
              >
                <Briefcase className="w-5 h-5" />
                <span>I'm a Client</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-display font-bold text-[10px] tracking-[0.25em] text-gray-400 uppercase">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(function (social) {
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-brand-orange text-gray-400 hover:text-brand-orange transition-all duration-300 hover:scale-110"
                    >
                      <SocialIcon iconKey={social.key} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[560px] aspect-[4/3]">
              <div className="w-full h-full overflow-hidden rounded-tl-[260px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl shadow-2xl relative">
                <img
                  src={heroTeamImg}
                  alt="Team of young professionals collaborating"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>

      <div className="relative lg:absolute lg:-bottom-20 lg:-right-20 lg:left-auto lg:w-[62%] max-w-4xl z-50 mt-14 lg:mt-0">
          <div className="relative z-50 bg-white rounded-3xl border border-gray-100 py-6 md:py-8 px-6 md:px-12 shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {statsData.map(function (stat, index) {
                var itemClass = index > 0
                  ? 'flex items-center gap-4 justify-center md:justify-start pt-5 md:pt-0 md:pl-6 lg:pl-10'
                  : 'flex items-center gap-4 justify-center md:justify-start md:pr-6 lg:pr-10';
                return (
                  <div key={stat.key} className={itemClass}>
                    <div className={'w-12 h-12 rounded-full flex items-center justify-center shrink-0 ' + stat.iconBg}>
                      <StatIcon iconKey={stat.key} />
                    </div>
                    <div className="text-left">
                      <span className="block font-display font-extrabold text-2xl md:text-3xl text-brand-navy tracking-tight leading-none">
                        {stat.value}
                      </span>
                      <span className="block font-sans text-[11px] md:text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

     <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[2px] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[100px] lg:h-[150px] text-white fill-current"
        >
          <path d="M0,90 C240,150 480,20 760,40 C1000,58 1200,110 1440,60 L1440,150 L0,150 Z"></path>
        </svg>
      </div>
    </section>
  );
}