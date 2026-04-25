import React from 'react';
import { Canvas } from '@react-three/fiber';
import Hero from '../../components/Hero.jsx';
import About from '../../components/About.jsx';
import Skills from '../../components/Skills.jsx';
import Projects from '../../components/Projects.jsx';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import ParticleBackground from '../../components/three/ParticleBackground.jsx';

const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
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
