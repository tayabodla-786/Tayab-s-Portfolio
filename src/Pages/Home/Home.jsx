import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import Hero from '../../components/Hero.jsx';
import About from '../../components/About.jsx';
import Skills from '../../components/Skills.jsx';
import Projects from '../../components/Projects.jsx';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import ParticleBackground from '../../components/three/ParticleBackground.jsx';

const Home = () => {
    const cursorRef = useRef(null);
    const cursorRingRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorRing = cursorRingRef.current;
        const progress = progressRef.current;
        if (!cursor || !cursorRing || !progress) return;

        const moveCursor = (event) => {
            gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.12, ease: 'power2.out' });
            gsap.to(cursorRing, { x: event.clientX, y: event.clientY, duration: 0.45, ease: 'power3.out' });
        };
        const updateProgress = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
            gsap.to(progress, { scaleX: amount, duration: 0.2, ease: 'power2.out' });
        };
        const setHoverState = (event) => {
            const target = event.target.closest('a, button');
            cursorRing.classList.toggle('is-hovering', Boolean(target));
        };

        window.addEventListener('pointermove', moveCursor);
        window.addEventListener('pointermove', setHoverState);
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => {
            window.removeEventListener('pointermove', moveCursor);
            window.removeEventListener('pointermove', setHoverState);
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen">
            <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
            <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
            <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
            {/* Global 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                    <ParticleBackground />
                </Canvas>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
