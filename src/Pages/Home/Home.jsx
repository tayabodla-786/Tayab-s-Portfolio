import React from 'react';
import Hero from '../../components/Hero.jsx';
import About from '../../components/About.jsx';
import Skills from '../../components/Skills.jsx';
import Projects from '../../components/Projects.jsx';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;
