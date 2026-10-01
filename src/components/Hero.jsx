import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
<<<<<<< HEAD
import { Link as ScrollLink } from 'react-scroll';
import { heroData } from '../data/portfolioData.js';
import ScrambleText from './ui/ScrambleText.jsx';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Starts as the preloader lifts and the particle name assembles
      gsap.fromTo(
        '[data-hero-in]',
        { opacity: 0, y: 30, rotateX: -35 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 2.1 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 lg:px-20 select-none hud-font [perspective:900px]"
    >
      {/* The name itself is drawn by the particle field behind this section */}
      <h1 className="sr-only">Tayyab Imran — Full-Stack Developer</h1>

      <div className="flex items-start justify-between text-[10px] sm:text-xs tracking-[0.3em] text-white/50 uppercase">
        <p data-hero-in>
          <span className="text-[#3ee8ff]">●</span> Signal acquired
          <br />
          <span className="text-white/30">31.52°N / 74.35°E</span>
        </p>
        <p data-hero-in className="text-right">
          Full-stack developer
          <br />
          <span className="text-white/30">Portfolio v.26</span>
        </p>
      </div>

      <div className="pointer-events-none flex-1" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7 space-y-4">
          <p data-hero-in className="ux-step text-white/50"><em>/01 Introduction</em></p>
          <ScrambleText
            as="h2"
            data-hero-in
            text="FULL-STACK PRODUCTS WITH MOTION, CLARITY & PURPOSE."
            duration={1400}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.02] tracking-tight max-w-3xl"
          />
          <p data-hero-in className="text-sm text-white/60 leading-relaxed max-w-md font-sans">
            {heroData.description}
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col items-start md:items-end gap-6">
          <div data-hero-in className="flex flex-wrap items-center gap-3">
            <a href={heroData.resumeLink} download="Tayyab_Imran_Resume.txt" className="btn-neon btn-neon--solid">
              Download CV
            </a>
            <ScrollLink to="work" smooth offset={0} duration={900} className="btn-neon cursor-pointer">
              Enter the archive &rarr;
            </ScrollLink>
          </div>
          <p data-hero-in className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
            Move to disturb · click to shock
          </p>
        </div>
      </div>

      <div data-hero-in className="scroll-cue" aria-hidden="true">
        <span />
=======
import { Canvas } from '@react-three/fiber';
import Hero3DObject from './three/Hero3DObject.jsx';
import { Link as ScrollLink } from 'react-scroll';
import { heroData } from '../data/portfolioData.js';

const Hero = () => {
  const heroRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  const textGroupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [titleLeftRef.current, titleRightRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 }
      ).fromTo(
        textGroupRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        '-=0.8'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden ux-hero-bg select-none"
    >
      {/* Background Interactive 3D Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Hero3DObject />
        </Canvas>
      </div>

      {/* UX Machina Floating Central Brand Name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full flex items-center justify-between px-8 sm:px-20 max-w-7xl">
        <div ref={titleLeftRef} className="text-white/20 text-5xl sm:text-7xl lg:text-9xl font-light tracking-tighter">
          Tayyab
        </div>
        <div ref={titleRightRef} className="text-white/20 text-5xl sm:text-7xl lg:text-9xl font-light tracking-tighter">
          Imran
        </div>
      </div>

      {/* Top Gap Spacer */}
      <div className="relative z-10" />

      {/* UX Machina Bottom Split Hero Grid */}
      <div
        ref={textGroupRef}
        className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
      >
        {/* Left Column: Primary UX Headline */}
        <div className="md:col-span-6 space-y-4">
          <p className="ux-step text-white/50"><em>/01 Introduction</em></p>
           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[0.98] tracking-tight max-w-2xl">
             Full-stack products with motion, clarity, and purpose.
          </h1>
          <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
            {heroData.description}
          </p>
        </div>

        {/* Right Column: Mission Statement & Actions */}
        <div className="md:col-span-6 md:col-start-7 space-y-6">
          <div className="space-y-2">
            <h2 className="ux-step text-xl text-[#ff375f]">
              <em>Our Mission</em>
            </h2>
            <p className="text-lg sm:text-xl font-light text-white/90 leading-snug">
              Create full-stack solutions that inspire, delight, and elevate every interaction.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={heroData.resumeLink}
              download="Tayyab_Imran_Resume.txt"
              className="px-6 py-3 rounded-full border border-white/20 bg-white text-[#0a0a0c] text-xs uppercase font-medium tracking-wider hover:bg-white/90 transition-all shadow-lg"
            >
              Download CV
            </a>

            <ScrollLink
              to="work"
              smooth={true}
              offset={-80}
              duration={600}
              className="px-6 py-3 rounded-full border border-white/20 bg-transparent text-white text-xs uppercase font-medium tracking-wider hover:border-[#ff375f] hover:text-[#ff375f] transition-all cursor-pointer"
            >
              Explore Works &rarr;
            </ScrollLink>
          </div>
        </div>
>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
      </div>
    </section>
  );
};

export default Hero;
