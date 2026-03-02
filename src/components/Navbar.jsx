import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import gsap from 'gsap';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (isOpen) {
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="bg-[#0a192f] border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="text-teal-400 text-2xl font-bold">&lt;/</span>
              <span className="text-white text-xl font-bold tracking-wider">Tayyab Imran</span>
              <span className="text-teal-400 text-2xl font-bold">&gt;</span>
            </ScrollLink>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  duration={600}
                  activeClass="text-teal-400"
                  className="text-gray-300 hover:text-teal-400 text-sm font-medium tracking-wider uppercase transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-teal-400"
            >
              {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - GSAP animated */}
      <div
        ref={menuRef}
        style={{ height: 0, overflow: 'hidden' }}
        className="md:hidden bg-[#0a192f] border-t border-teal-500/20"
      >
        <div className="px-6 py-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setIsOpen(false)}
              className="block text-xl text-gray-300 hover:text-teal-400 uppercase tracking-wider"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;