import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);
    const illustrationRef = useRef(null);
    const containerRef = useRef(null);

    // Start content hidden so it doesn’t flash before the animation
    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const children = [badgeRef.current, titleRef.current, descRef.current, ctaRef.current, illustrationRef.current].filter(Boolean);
        gsap.set(children, { y: 36, opacity: 0 });
        gsap.set(illustrationRef.current, { y: 0, x: 40, opacity: 0 });
    }, []);

    useEffect(() => {
        const badge = badgeRef.current;
        const title = titleRef.current;
        const desc = descRef.current;
        const cta = ctaRef.current;
        const illustration = illustrationRef.current;
        if (!badge || !title || !desc || !cta || !illustration) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.to(badge, { y: 0, opacity: 1, duration: 0.6 })
            .to(title, { y: 0, opacity: 1, duration: 0.7 }, '-=0.35')
            .to(desc, { y: 0, opacity: 1, duration: 0.6 }, '-=0.45')
            .to(cta, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
            .to(illustration, { x: 0, y: 0, opacity: 1, duration: 0.8 }, '-=1');
        return () => tl.kill();
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#0a192f] px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
        >
            <div ref={containerRef} className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Text – same contrast as your About section */}
                <div className="space-y-7 md:pr-12 text-center md:text-left">
                    <p ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-4 py-1 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.45)]">
                        <span className="h-[3px] w-6 rounded-full bg-teal-300" />
                        Full-Stack Developer
                    </p>

                    <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_18px_55px_rgba(15,23,42,0.9)]">
                        Tayyab Imran
                    </h1>

                    <p ref={descRef} className="text-slate-300/95 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                        Passionate Full Stack Developer crafting robust and improved web applications.
                        I turn ideas into high-quality, scalable code.
                    </p>

                    <div ref={ctaRef} className="pt-7">
                        <a
                            href="/Resume.pdf"
                            download="Resume.pdf"
                            className="relative inline-flex items-center justify-center px-9 py-4 rounded-xl border border-teal-400/70 bg-teal-500/10 text-teal-50 font-semibold tracking-wide uppercase text-xs md:text-sm shadow-[0_20px_60px_rgba(34,211,238,0.55)] transition-all duration-300 hover:bg-teal-400 hover:text-slate-900 hover:shadow-[0_26px_80px_rgba(34,211,238,0.7)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Illustration */}
                <div ref={illustrationRef} className="relative flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md md:max-w-xl">
                        <div className="pointer-events-none absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 opacity-80" />
                        <div className="relative rounded-[2.25rem] overflow-hidden bg-gradient-to-br from-slate-800/80 via-slate-900/95 to-slate-950/95 shadow-[0_32px_90px_rgba(15,23,42,0.9)] group">
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png"
                                alt="Full Stack Developer Illustration"
                                className="relative w-full h-auto object-contain brightness-110 contrast-110 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;