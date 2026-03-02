import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "EDU-CARE-LMS",
    description: "A sleek real estate platform built with React + Vite, featuring property listings, advanced filters (price, location, type), detailed property views, responsive design and smooth user experience.",
    tags: ["Javascript", "React", "Tailwind CSS", "mongodbAtlas", "Node.js", "Express.js", "React Router"],
    image: "/img3.png",
    link: "https://lms-frontend-nine-kappa.vercel.app"   // ← your real Vercel link
  },
  {
    title: "Rent a Car",
    description: "A full-stack Rent-a-Car web application with user authentication, car listings, and online booking system. Includes an admin dashboard for managing cars, users, and bookings, built using modern web technologies.",
    tags: ["Javascript", "React", "Tailwind CSS", "mongodbAtlas", "Node.js", "Express.js"],
    image: "/img2.png",
    link: "https://rent-a-car-frontend-private.vercel.app"   // ← your real Vercel link
    // no link → shows default button
  },
  {
    title: "Website - MRL Real Estate",
    description: "A sleek real estate platform built with React + Vite, featuring property listings, advanced filters (price, location, type), detailed property views, responsive design and smooth user experience.",
    tags: ["Javascript", "React", "Tailwind CSS"],
    image: "/img1.png",
    link: "https://mrl-real-estate-psi.vercel.app"   // ← your real Vercel link
    // no link → shows default button
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const grid = gridRef.current;
    if (header) gsap.set(header, { y: 30, opacity: 0 });
    if (grid?.children?.length) gsap.set(grid.children, { y: 50, opacity: 0 });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      gsap.to(header, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.to(grid.children, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 text-teal-400 mb-4">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Work</h2>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/20"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 bg-slate-800 text-teal-400 rounded-full border border-slate-700"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* Button with real link or placeholder */}
                <div className="pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-all duration-300 uppercase text-sm tracking-wider text-center shadow-md hover:shadow-teal-500/30"
                    >
                      Open Project
                    </a>
                  ) : (
                    <button className="w-full py-3 bg-slate-800 hover:bg-teal-500 text-teal-400 hover:text-slate-900 font-bold rounded-lg transition-all duration-300 uppercase text-sm tracking-wider">
                      Acessar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;