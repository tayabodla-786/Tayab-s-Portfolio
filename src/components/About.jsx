import React from 'react';
<<<<<<< HEAD
import { FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiThreedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiStripe,
  SiVite,
  SiVercel,
} from 'react-icons/si';
import { aboutData } from '../data/portfolioData.js';
import ScrambleText from './ui/ScrambleText.jsx';
import TiltCard from './ui/TiltCard.jsx';

const stack = [
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#5fa04e' },
  { name: 'Express', icon: SiExpress, color: '#d4d4d4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#6b9bd1' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Stripe', icon: SiStripe, color: '#8a7dff' },
  { name: 'Vite', icon: SiVite, color: '#bd8cff' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Docker', icon: FaDocker, color: '#2496ed' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
];

const stats = [
  { value: '04', label: 'Live products' },
  { value: 'MERN', label: 'Core stack' },
  { value: '3D', label: 'Motion & WebGL' },
=======
import { aboutData } from '../data/portfolioData.js';

const techClients = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js',
  'Three.js', 'Tailwind CSS', 'Vite', 'Vercel',
  'REST APIs', 'PostgreSQL', 'Stripe', 'Docker'
>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
];

const About = () => {
  return (
<<<<<<< HEAD
    <section id="about" className="relative min-h-screen py-28 px-6 sm:px-12 lg:px-20 text-white hud-font">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 lg:col-start-7 space-y-10">
          <header data-reveal className="space-y-3">
            <p className="ux-step text-[#ffb347]"><em>/03 About</em></p>
            <ScrambleText as="h2" text="CODE WITH PURPOSE" className="text-4xl sm:text-6xl font-bold tracking-tight" />
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-sans">{aboutData.intro}</p>
          </header>

          <div data-reveal className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="hud-chip text-center py-5">
                <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                <p className="text-[10px] tracking-[0.25em] text-white/45 uppercase pt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-3 [perspective:1000px]">
            {aboutData.highlights.map((h, i) => (
              <TiltCard key={h} data-reveal className="hud-panel !p-5">
                <span className="ux-step text-[#ff3fa4]"><em>/0{i + 1}</em></span>
                <p className="text-sm text-white/80 leading-relaxed font-sans pt-2">{h}</p>
              </TiltCard>
            ))}
          </div>

          <div data-reveal className="space-y-4">
            <p className="text-xs tracking-[0.3em] text-white/50">// STACK IN ORBIT</p>
            <ul className="flex flex-wrap gap-2 [perspective:800px]">
              {stack.map(({ name, icon, color }) => {
                const Glyph = icon;
                return (
                  <li key={name} className="stack-chip" style={{ '--chip': color }}>
                    <Glyph className="size-4" style={{ color }} aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
=======
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
>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
