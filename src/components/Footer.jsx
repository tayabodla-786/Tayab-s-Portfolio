import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (content) gsap.set(content, { y: 36, opacity: 0 });
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;
    if (!footer || !content) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: footer, start: 'top 88%', toggleActions: 'play none none none' },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="py-20 border-t border-slate-800 bg-slate-900/50">
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-teal-400 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Contact</h2>
          </div>

          {/* Added short intro text */}
          <p className="text-slate-300 max-w-md leading-relaxed">
            Feel free to reach out to me for collaborations, job opportunities, project discussions, or just to say hi! 
            I'm always open to connecting and exploring new ideas. Reply usually within 24 hours.
          </p>

          <div className="flex flex-col space-y-5 pt-6">
            <a 
              href="tel:+923070436858" 
              className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <span className="p-3 bg-slate-800 rounded-lg group-hover:bg-teal-900/30 transition-colors">
                <FaPhone size={20} />
              </span>
              +92 307 0436858
            </a>

            <a 
              href="mailto:tayabodla786@gmail.com" 
              className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <span className="p-3 bg-slate-800 rounded-lg group-hover:bg-teal-900/30 transition-colors">
                <FaEnvelope size={20} />
              </span>
              tayabodla786@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col justify-between md:items-end space-y-8">
          <div className="flex flex-col space-y-5">
            <a 
              href="https://github.com/tayabodla-786" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <FaGithub size={28} className="group-hover:scale-110 transition-transform" />
              <span>github.com/tayabodla-786</span>
            </a>

            <a 
              href="https://linkedin.com/in/tayyabimran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
            >
              <FaLinkedin size={28} className="group-hover:scale-110 transition-transform" />
              <span>linkedin.com/in/tayyabimran</span>
            </a>
          </div>

          <div className="text-slate-600 text-sm mt-8 md:mt-0">
            © 2025 Tayyab Imran - Built with React & Tailwind
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;