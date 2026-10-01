import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

<<<<<<< HEAD
const bandA = ['Full-stack development', 'React & Three.js', 'Scalable architecture', 'Creative motion'];
const bandB = ['Innovation', 'Precision', 'Trust', 'Collaboration', 'Excellence'];

const Band = ({ words, reverse, className }) => {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const width = el.scrollWidth / 2;
    const tween = gsap.fromTo(el, { x: reverse ? -width : 0 }, { x: reverse ? 0 : -width, duration: 28, ease: 'none', repeat: -1 });
    return () => tween.kill();
  }, [reverse]);

  const loop = [...words, ...words, ...words, ...words];
  return (
    <div className={`marquee-band ${className}`}>
      <div ref={track} className="flex whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-10 px-10">
            <span>{w}</span>
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Two ribbons crossing in 3D space
const MarqueeQuote = () => (
  <section className="relative py-32 overflow-hidden select-none hud-font [perspective:1000px]" aria-hidden="true">
    <Band words={bandA} className="marquee-band--a" />
    <Band words={bandB} reverse className="marquee-band--b" />
  </section>
);

=======
const marqueeWords = ['Backend Development', 'FULL-STACK DEVELOPMENT', 'CYBERNETIC INTERACTION', 'REACT & THREE.JS', 'SCALABLE ARCHITECTURE'];

const MarqueeQuote = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.scrollWidth / 2;
    const animation = gsap.to(track, {
      x: `-=${width}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  const extendedWords = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="py-16 border-y border-white/10 bg-[#0a0a0c] overflow-hidden select-none">
      <div ref={trackRef} className="flex whitespace-nowrap text-3xl sm:text-5xl font-light tracking-widest text-white/30 uppercase">
        {extendedWords.map((word, idx) => (
          <span key={idx} className="flex items-center px-12 gap-12">
            <span>{word}</span>
            <span className="ux-step text-sm text-[#ff375f]"><em>/&bull;</em></span>
          </span>
        ))}
      </div>
    </section>
  );
};

>>>>>>> 5959f319b27dc12217886c5dd1392b79a78fd868
export default MarqueeQuote;
