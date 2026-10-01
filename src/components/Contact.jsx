import React from 'react';
import { Icon } from '@iconify/react';
import { contactInfo, socialLinks } from '../data/portfolioData.js';
<<<<<<< HEAD
import ScrambleText from './ui/ScrambleText.jsx';
import TiltCard from './ui/TiltCard.jsx';

const echoes = ['STILL HERE?!', 'SERIOUS?', 'STRONG.'];

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen py-28 px-6 sm:px-12 lg:px-20 text-white hud-font">
      <div className="max-w-7xl mx-auto space-y-16">
        <header data-reveal className="space-y-2 text-center">
          <p className="ux-step text-[#ff3fa4]"><em>/05 Contact</em></p>
          {echoes.map((line, i) => (
            <p
              key={line}
              className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight transition-colors duration-300 hover:text-white/70"
              style={{ color: `rgba(255,255,255,${0.08 + i * 0.1})` }}
            >
              {line}
            </p>
          ))}
          <ScrambleText
            as="h2"
            text="LET'S TALK"
            duration={1100}
            className="glitch-soft block text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#ff3fa4] drop-shadow-[0_0_40px_rgba(255,63,164,0.45)]"
          />
          <p className="text-sm text-white/55 font-sans max-w-md mx-auto pt-4 whitespace-pre-line">{contactInfo.text}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 [perspective:1200px]">
          <TiltCard data-reveal className="hud-panel md:col-span-7 space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] text-white/40">// DIRECT CHANNEL</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-xl sm:text-3xl lg:text-4xl font-semibold break-all hover:text-[#3ee8ff] transition-colors"
=======

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
>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
              >
                {contactInfo.email}
              </a>
            </div>
<<<<<<< HEAD
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] text-white/40">// VOICE LINE</p>
              <a href={`tel:${contactInfo.phone}`} className="block text-lg sm:text-2xl text-white/80 hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <a href={`mailto:${contactInfo.email}`} className="btn-neon btn-neon--solid inline-flex">
              Start a project &rarr;
            </a>
          </TiltCard>

          <div className="md:col-span-5 grid gap-4">
            {socialLinks.map((link) => (
              <TiltCard key={link.name} data-reveal className="hud-panel !p-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 text-sm font-semibold tracking-[0.2em] uppercase group"
                >
                  <span>{link.name}</span>
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="size-5 text-white/40 group-hover:text-[#3ee8ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </a>
              </TiltCard>
            ))}
=======

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
>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
