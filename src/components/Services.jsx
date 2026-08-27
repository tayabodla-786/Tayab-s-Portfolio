import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData.js';

const Services = () => {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section id="services" className="relative py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#0a0a0c] text-white select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* UX Machina Section Header */}
        <div className="flex flex-row justify-between items-baseline border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="ux-step text-base text-[#ff375f]"><em>/02</em></span>
            <h2 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wider">Services</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50">Capabilities & Architecture</span>
        </div>

        {/* Sleek Line-by-Line Interactive Services List */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {servicesData.map((service, index) => {
            const isActive = activeRow === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveRow(index)}
                className={`py-8 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/5 px-6 sm:px-10 border-l-2 border-[#ff375f]'
                    : 'hover:bg-white/[0.02] px-4'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Left Column: Counter + Title + Description */}
                  <div className="lg:col-span-6 space-y-2">
                    <div className="flex items-center gap-4">
                      <span className={`ux-step text-sm ${isActive ? 'text-[#ff375f]' : 'text-white/40'}`}>
                        <em>/0{index + 1}</em>
                      </span>
                      <h3 className={`text-xl sm:text-3xl font-light tracking-wide transition-colors ${isActive ? 'text-white' : 'text-white/80'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed pl-10">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Column: Itemized Capability Breakdown */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pl-10 lg:pl-0">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="size-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: service.color || '#ff375f' }}
                          />
                          <span className="text-xs font-medium text-white/90">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-relaxed font-light pl-3.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
