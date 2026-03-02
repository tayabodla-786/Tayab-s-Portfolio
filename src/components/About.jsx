import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const image = imageContainerRef.current;
    const content = contentRef.current;
    if (image) gsap.set(image, { y: 50, opacity: 0 });
    if (content?.children?.length) gsap.set(content.children, { y: 40, opacity: 0 });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageContainerRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.to(content.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Avatar / Image */}
        <div
          ref={imageContainerRef}
          className="flex flex-col items-center md:items-start md:pl-12"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-teal-400 to-transparent mb-6">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a192f] border-4 border-[#0a192f]">
              <img
                src="https://i.ibb.co/4ZvyqFTQ/profile.jpg"
                alt="Tayyab Imran"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="md:pl-4 text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-3 tracking-wide">
              Tayyab Imran
            </h4>
            <div className="flex justify-center md:justify-start gap-6 text-teal-400 text-2xl">
              <a
                href="mailto:tayabodla786@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/tayabodla-786"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tayyabimran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-teal-400 rounded-sm"></div>
            <h2 className="text-lg font-bold text-white uppercase tracking-widest">
              About
            </h2>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Know a little more about me
          </h3>

          <p className="text-slate-400 leading-relaxed text-lg">
            I am a beginner <span className="text-white font-semibold">Full Stack Developer</span> with a strong focus on building scalable and performant web applications.
            I love solving complex problems and turning ideas into reality through code.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            With expertise in <span className="text-white font-semibold">MERN Stack</span> and modern web technologies, I deliver high-quality solutions tailored to client needs.
            Always eager to learn and adapt to new challenges.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
