import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import Services from '../../components/Services.jsx';
import About from '../../components/About.jsx';
import Projects from '../../components/Projects.jsx';
import MarqueeQuote from '../../components/MarqueeQuote.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] text-white selection:bg-[#ff375f] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <MarqueeQuote />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
