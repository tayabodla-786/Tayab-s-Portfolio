import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

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

export default MarqueeQuote;
