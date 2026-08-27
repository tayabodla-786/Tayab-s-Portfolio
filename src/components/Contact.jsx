import React from 'react';
import { Icon } from '@iconify/react';
import { contactInfo, socialLinks } from '../data/portfolioData.js';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* UX Machina Section Header */}
        <div className="flex flex-row justify-between items-baseline border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="ux-step text-base text-[#ff375f]"><em>/05</em></span>
            <h2 className="text-xl sm:text-2xl font-light text-white uppercase tracking-wider">Contact</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50">Get In Touch</span>
        </div>

        {/* UX Machina Stacked Bold Headline Statements */}
        <div className="space-y-2 border-b border-white/10 pb-16">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white/10 tracking-tight hover:text-white/30 transition-colors">
            T x still here?!
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white/20 tracking-tight hover:text-white/40 transition-colors">
            T x serious?
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white/40 tracking-tight hover:text-white/60 transition-colors">
            T x strong
          </h1>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-[#ff375f] tracking-tight hover:brightness-125 transition-all">
            T x let's talk
          </h1>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Email & Phone */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="ux-step text-xs text-white/40"><em>/Direct Email</em></span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-2xl sm:text-4xl font-light text-white hover:text-[#ff375f] transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="space-y-2">
              <span className="ux-step text-xs text-white/40"><em>/Direct Phone</em></span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="block text-xl sm:text-3xl font-light text-white/80 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Social Links & Resumes */}
          <div className="md:col-span-5 space-y-6 md:border-l md:border-white/10 md:pl-12">
            <span className="ux-step text-xs text-white/40"><em>/Networks & Files</em></span>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-white/10 bg-[#121216]/50 hover:border-[#ff375f] transition-all text-sm font-medium uppercase tracking-wider text-white flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <Icon icon="lucide:arrow-up-right" className="size-4 text-white/40 group-hover:text-[#ff375f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
