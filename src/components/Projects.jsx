import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData.js';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="works"className="relative py-28 px-6 sm:px-12 lg:px-20 text-white select-none transition-colors hud-font">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Year Tag centered above line (Matching Screenshot) */}
        <div className="flex justify-center items-center text-xs font-mono uppercase tracking-widest text-white/50">
          <span>// FULL INDEX · 2026</span>
        </div>

        {/* UX Machina Capabilities / Works Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">

          {/* Left Column: Title (Matching Screenshot) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-3">
              <p className="ux-step text-[#2fd9c4]"><em>/04 Index</em></p>
              <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">ALL WORKS</h2>
            </div>
          </div>

          {/* Right Column: Interactive List (Matching Screenshot) */}
          <div className="lg:col-span-8 border-t border-b border-white/20 py-2 bg-[#050609]/40 backdrop-blur-sm">
            {projectsData.map((project, index) => {
              const isHovered = hoveredIndex === index;
              const tagsString = project.frameworks.map((fw) => fw.name).join(', ').toUpperCase();

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => window.open(project.href, '_blank')}
                  className={`relative cursor-pointer transition-all duration-300 border-b border-white/10 last:border-none ${
                    isHovered
                      ? 'bg-white text-[#0a0a0c] my-3 py-8 px-6 sm:px-8 rounded-sm shadow-2xl scale-[1.01]'
                      : 'text-white/80 py-7 px-4 hover:pl-6 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">

                    {/* Left Side: Counter + Project Title */}
                    <div className="flex items-center gap-6 shrink-0">
                      <span className={`ux-step text-xs tracking-wider ${isHovered ? 'text-[#ff375f]' : 'text-white/40'}`}>
                        <em>/0{index + 1}</em>
                      </span>
                      <h3 className="text-xl sm:text-2xl font-light tracking-wide">
                        {project.name}
                      </h3>
                    </div>

                    {/* Right Side: Framework / Capability Tags */}
                    <div className="sm:text-right shrink-0">
                      <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-widest ${isHovered ? 'text-[#0a0a0c]/60' : 'text-white/45'}`}>
                        {tagsString}
                      </span>
                    </div>

                  </div>

                  {/* Expanded details: hero screenshot, overview, and the problem solved */}
                  {isHovered && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-[16rem_1fr] gap-6 items-start">
                      <div className="w-full sm:w-64 aspect-video rounded-sm overflow-hidden border border-black/10 shadow-xl bg-black">
                        <img
                          src={project.image}
                          alt={`${project.name} website hero section`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="space-y-3 font-sans text-sm leading-relaxed">
                        <p className="text-[#0a0a0c]/50 text-xs font-mono uppercase tracking-widest">{project.tagline}</p>
                        <p className="text-[#0a0a0c]/80">{project.description}</p>
                        <p className="text-[#0a0a0c]/80">
                          <span className="font-semibold text-[#ff375f]">Problem solved: </span>
                          {project.solved}
                        </p>
                        <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#0a0a0c] underline underline-offset-4">
                          Visit site &#8599;
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;