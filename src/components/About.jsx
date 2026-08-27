import React from 'react';
import { aboutData } from '../data/portfolioData.js';

const techClients = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js',
  'Three.js', 'Tailwind CSS', 'Vite', 'Vercel',
  'REST APIs', 'PostgreSQL', 'Stripe', 'Docker'
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* UX Machina Header */}
        <div className="flex flex-row justify-between items-baseline border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="ux-step text-base text-[#ff375f]"><em>/03</em></span>
            <h2 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wider">About</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50">Engineering Bio & Tech Stack</span>
        </div>

        {/* Sleek 2-Column Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Bio Narrative & Core Focus */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="ux-step text-2xl text-white/90">
                <em>Bio & Philosophy</em>
              </h3>
              
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                {aboutData.intro}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#ff375f]">Core Focus Areas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.highlights.map((highlight, index) => (
                  <div key={index} className="p-4 border border-white/10 bg-[#121216]/50 hover:border-white/30 transition-all flex items-start gap-3">
                    <span className="ux-step text-xs text-[#ff375f] shrink-0"><em>/0{index + 1}</em></span>
                    <span className="text-xs text-white/80 leading-relaxed font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack Grid */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
            <h3 className="ux-step text-xl text-white/90">
              <em>Technologies & Stack</em>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {techClients.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 border border-white/10 bg-[#121216]/50 hover:border-[#ff375f] transition-all text-xs font-medium uppercase tracking-wider text-white/80 flex items-center justify-between group cursor-default"
                >
                  <span className="group-hover:text-white transition-colors">{tech}</span>
                  <span className="ux-step text-[10px] text-white/30 group-hover:text-[#ff375f] transition-colors"><em>0{index + 1}</em></span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
