import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Lock, Play, Star } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // GSAP Scroll Animation for Projects
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray(".project-image-scene");
    const contentBlocks = gsap.utils.toArray(".project-info-block");

    // ==========================================
    // 1. BULLETPROOF GSAP PINNING
    // ==========================================
    // This ignores CSS overflow rules and forces the container to stick.
    ScrollTrigger.create({
      trigger: ".projects-wrapper", // The flex parent
      pin: ".pinned-media-container", // The left block we want to lock
      start: "top 120px", // Locks when parent hits 120px from top of screen
      end: "bottom bottom", // Unlocks when the bottom of the list hits bottom of screen
      pinSpacing: false, // Prevents GSAP from adding extra white space below
    });

    // 2. REVEAL ANIMATIONS
    contentBlocks.forEach((block: any, index) => {
      // Text Reveal
      gsap.fromTo(block.querySelectorAll(".reveal-text"),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 75%",
          }
        }
      );

      // Clip-Path Image Reveal (Scrubbing)
      if (index > 0) {
        gsap.to(images[index] as Element, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          }
        });

        const img = (images[index] as Element).querySelector("img");
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top 70%",
              end: "top 30%",
              scrub: true,
            }
          }
        );
      } else {
        const img = (images[0] as Element).querySelector("img");
        gsap.from(img, { scale: 1.1, duration: 1.5, ease: "power2.out" });
      }
    });

  }, { scope: containerRef });

  // Basic Hero Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Echoes of Craft",
      link: "/portfolio/1",
      desc: "A high-end commercial campaign focusing on the meticulous details of artisanal craftsmanship. I delivered a cohesive offline edit and cinematic color grade that elevated the brand's visual identity. By meticulously pacing the narrative, the final cut seamlessly highlighted the raw texture and authentic emotion of the artisans at work.",
      category: "Commercial Film",
      tags: ["Offline Edit", "Color Grading", "Sound Design"],
      isLive: true,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Midnight Rhythm",
      link: "/portfolio/2",
      desc: "Fast-paced, highly stylized music video that demanded an incredibly dynamic visual approach. I mastered the rhythm of the edit to perfectly match the complex choreography and rapid beat drops. The project was finished with an aggressive, high-contrast, and deeply saturated color grade to emphasize the bold aesthetics.",
      category: "Music Video",
      tags: ["Creative Edit", "VFX", "Color Grading"],
      isLive: true,
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Gallery House",
      link: "/portfolio/3",
      desc: "Brand identity film for a luxury real estate agency that required a sophisticated and elegant tone. The edit emphasized buttery smooth transitions, deliberate spatial pacing, and a bright, aspirational color palette. My focus was on establishing a luxurious atmosphere that allowed viewers to emotionally connect with the architecture.",
      category: "Brand Film",
      tags: ["Editing", "Color Grading", "Delivery"],
      isLive: true,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const reels = [
    { id: 1, img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, img: "/reel4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-brand-primary-bg overflow-hidden">

      {/* 01. HERO */}
      <section ref={heroRef} className="relative w-full min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
        >
          {/* Using local video from public folder */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 pt-8 pb-12 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center w-full">
            {/* Left Text Column */}
            <div className="lg:col-span-5 xl:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="hero-element flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-brand-secondary-text/40"></span>
                <span className="text-brand-secondary-text text-xs font-bold tracking-[0.2em] uppercase">Video Editor & Colorist</span>
              </div>

              <h1 className="hero-element text-[52px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] font-serif text-brand-primary-text leading-[0.9] max-w-[520px] mb-10 tracking-tight">
                <span className="block whitespace-nowrap">Editing Stories.</span>
                <span className="block italic text-brand-secondary-text whitespace-nowrap">Shaping Emotion.</span>
              </h1>

              <p className="hero-element text-brand-secondary-text text-lg md:text-xl font-light leading-relaxed max-w-[400px] mb-12">
                Crafting cinematic stories through editing, rhythm and color.
              </p>

              {/* CTAs */}
              <div className="hero-element flex flex-row gap-4 items-center mb-16">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-3 bg-[#111111] text-white pl-2 pr-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-md group shrink-0"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Play className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                  </div>
                  {isPlaying ? "Close Showreel" : "Watch Showreel"}
                </button>
                <a href="#projects" className="flex items-center justify-center gap-3 bg-transparent border border-[#d5d5d5] text-brand-primary-text px-6 py-[11px] rounded-full text-sm font-semibold hover:bg-brand-highlight transition-colors group shrink-0">
                  Selected Work
                </a>
              </div>

              {/* Credibility Info Row */}
              <div className="hero-element flex flex-row items-center gap-5 w-full max-w-lg">
                <div className="flex flex-col shrink-0">
                  <span className="text-brand-primary-text font-semibold text-sm">7+ Years</span>
                  <span className="text-brand-secondary-text text-[9px] uppercase tracking-[0.15em] font-semibold mt-0.5">Experience</span>
                </div>

                <div className="w-[1px] h-10 bg-brand-border/80 shrink-0"></div>

                <div className="flex flex-col shrink-0">
                  <span className="text-brand-primary-text font-semibold text-sm">DaVinci Resolve</span>
                  <span className="text-brand-secondary-text text-[9px] uppercase tracking-[0.15em] font-semibold mt-0.5">Certified</span>
                </div>

                <div className="w-[1px] h-10 bg-brand-border/80 shrink-0 hidden md:block"></div>

                <div className="hidden md:flex flex-col shrink-0">
                  <span className="text-brand-primary-text font-semibold text-sm">Kathmandu</span>
                  <span className="text-brand-secondary-text text-[9px] uppercase tracking-[0.15em] font-semibold mt-0.5">Nepal</span>
                </div>
              </div>

              <div className="hero-element mt-6">
                <span className="text-brand-secondary-text text-[11px] tracking-wider uppercase font-medium">Commercial Films • Music Videos • Brand Campaigns</span>
              </div>
            </div>

            {/* Right Video Column */}
            <div className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2 hero-element flex items-center justify-end w-full">
              <div
                className="aspect-[16/10] bg-brand-highlight rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative group cursor-pointer w-full md:w-[95%] lg:w-[95%] xl:max-w-[800px] ml-auto"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/PpcMPKgQL80?si=HeJ-p8FG_TvCkhJC&autoplay=1&controls=0&modestbranding=1&rel=0&cc_load_policy=3&iv_load_policy=3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                  ></iframe>
                ) : (
                  <img src="https://img.youtube.com/vi/PpcMPKgQL80/maxresdefault.jpg" alt="Showreel Poster" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]" />
                )}

                <div className={`absolute inset-0 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="absolute inset-0 bg-black/15"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full border-[1.5px] border-white/80 flex items-center justify-center bg-black/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-8 flex items-center gap-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] drop-shadow-md">Showreel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. TRUSTED BY */}
      <section className="py-6 border-y border-brand-border bg-brand-section-alt px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-brand-secondary-text text-xs font-bold uppercase tracking-widest">Trusted By</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-lg font-serif text-brand-primary-text">
            <span>B Star Films</span>
            <span>Wave Studio</span>
            <span>Gallery House</span>
            <span>Unique Movies</span>
          </div>
        </div>
      </section>

      {/* 03. PHILOSOPHY */}
      <section className="py-10 px-6 md:px-12 mt-10 relative overflow-hidden">
        {/* Abstract Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('/philosophy-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          <span className="text-brand-primary-text text-lg font-bold uppercase tracking-[0.2em] mb-12">Philosophy</span>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-brand-primary-text leading-[1.1] tracking-tight mb-8">
            I Don't Just Edit Videos.<br />
            I Build Experiences.
          </h2>
          <p className="text-lg md:text-xl text-brand-secondary-text font-light leading-relaxed max-w-2xl mx-auto">
            With over 7 years in post-production, I combine editing, pacing and color to create films that connect emotionally.<br /><br />
            Every cut serves rhythm.<br />
            Every grade serves emotion.
          </p>
        </div>
      </section>

      {/* 04. STATS */}
      <section className="py-10 px-6 md:px-12 border-y border-brand-border bg-brand-section-alt mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-serif text-brand-primary-text mb-2 tracking-tight">7+</span>
            <span className="text-sm font-medium uppercase tracking-widest text-brand-secondary-text">Years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-serif text-brand-primary-text mb-2 tracking-tight">150+</span>
            <span className="text-sm font-medium uppercase tracking-widest text-brand-secondary-text">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-serif text-brand-primary-text mb-2 tracking-tight">50+</span>
            <span className="text-sm font-medium uppercase tracking-widest text-brand-secondary-text">Clients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-serif text-brand-primary-text mb-2 tracking-tight">100%</span>
            <span className="text-sm font-medium uppercase tracking-widest text-brand-secondary-text">Focused On Post Production</span>
          </div>
        </div>
      </section>

      {/* 04. SELECTED WORKS (GSAP Pinned Scroll) */}
      <section id="projects" ref={containerRef} className="relative w-full bg-brand-section-alt text-brand-primary-text pt-12 pb-16 overflow-visible border-y border-brand-border mt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-4 md:mb-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-primary-text mb-6">
              Selected Works.
            </h2>
            <p className="text-brand-secondary-text max-w-2xl text-lg font-light">
              A curated selection of high-end commercial campaigns, music videos, and narrative films.
            </p>
          </div>

          <div className="projects-wrapper flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            {/* LEFT COLUMN: GSAP will pin the inner container */}
            <div className="hidden lg:block w-full lg:w-1/2 relative z-10">
              {/* Swapped CSS "sticky" for our target class "pinned-media-container" */}
              <div className="pinned-media-container h-[75vh] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-white border border-brand-border p-3">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-brand-primary-bg">
                  {projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="project-image-scene absolute inset-0 w-full h-full"
                      style={{
                        zIndex: idx + 10,
                        clipPath: idx === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)'
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Scrolls normally */}
            <div className="w-full lg:w-1/2 relative z-0 flex flex-col pt-0 lg:pt-12 lg:pb-12">
              {projects.map((project, idx) => (
                <div key={idx} className="project-info-block flex flex-col justify-center min-h-[60vh] lg:min-h-[85vh] last:lg:min-h-0 last:lg:pb-8 py-16 lg:py-0 border-b border-brand-border lg:border-none last:border-none">

                  <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-brand-border relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="reveal-text flex items-center gap-4 mb-6">
                    <span className="text-brand-accent font-serif text-lg italic">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-12 h-[1px] bg-brand-border" />
                    <span className="text-brand-secondary-text font-medium text-xs tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="reveal-text text-3xl md:text-4xl lg:text-5xl font-serif text-brand-primary-text leading-[1.15] mb-6">
                    {project.title}
                  </h3>

                  <p className="reveal-text text-brand-secondary-text text-base lg:text-lg font-light leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="reveal-text flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-brand-highlight border border-brand-border text-[11px] font-semibold text-brand-secondary-text uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="reveal-text">
                    {project.isLive ? (
                      <Link to={project.link} className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-primary-text text-white font-semibold text-xs uppercase tracking-[0.1em] rounded-full transition-all hover:bg-brand-accent hover:scale-[1.02] shadow-sm">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    ) : (
                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-brand-highlight border border-brand-border text-brand-secondary-text font-semibold text-xs uppercase tracking-[0.1em] rounded-full cursor-not-allowed">
                        <Lock className="w-4 h-4" />
                        <span>Private Client</span>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 06. REELS */}
      <section className="py-10 bg-brand-primary-bg overflow-hidden border-y border-brand-border mt-5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-md">
            <h2 className="text-brand-primary-text text-lg font-bold uppercase tracking-[0.2em] mb-4">Reels Editing</h2>
            <p className="text-brand-primary-text text-xl font-light">
              Short-form content engineered for retention, rhythm and platform performance.
            </p>
          </div>
          <Link to="/reels" className="text-brand-primary-text font-semibold text-sm underline underline-offset-4 hover:text-brand-accent transition-colors shrink-0">View All Reels</Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 max-w-full snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="w-[300px] md:w-[360px] aspect-[9/16] shrink-0 snap-center bg-brand-highlight rounded-[20px] overflow-hidden border border-brand-border relative group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <img src={reel.img} alt={`Reel ${reel.id}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-brand-primary-text border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07. COLOR IS EMOTION */}
      <section className="py-10 px-6 md:px-12 bg-brand-primary-text text-white mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Color Is Emotion.</h2>
              <p className="text-white/70 font-light leading-relaxed mb-12 text-lg">
                Color grading isn't about making images look pretty.
                <br /><br />
                It's about directing attention, building mood and creating emotional response.
              </p>

              <div className="flex flex-col gap-4 border-l border-white/20 pl-6">
                <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">Look Development</span>
                <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">Scene Matching</span>
                <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">Skin Tone Preservation</span>
                <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">Cinematic Finishing</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden border border-white/10 flex relative group cursor-ew-resize">
                {/* BEFORE (Left) */}
                <div className="w-1/2 h-full relative overflow-hidden border-r border-white/20 z-10 transition-all duration-500 ease-in-out group-hover:w-[15%]">
                  <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="RAW" className="absolute top-0 left-0 w-[200%] h-full max-w-none object-cover grayscale-[0.5] contrast-[0.8] brightness-[1.1] sepia-[0.2]" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-white/80">RAW</div>
                </div>

                {/* AFTER (Right) */}
                <div className="w-1/2 h-full relative overflow-hidden flex-grow transition-all duration-500 ease-in-out group-hover:w-[85%]">
                  <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Graded" className="absolute top-0 right-0 w-[200%] h-full max-w-none object-cover contrast-[1.1] saturate-[1.2]" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-brand-primary-text">Final Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. CAPABILITIES */}
      <section className="py-10 px-6 md:px-12 bg-brand-primary-bg mt-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-brand-primary-text text-lg font-bold uppercase tracking-[0.2em] mb-16">Capabilities</h2>

          <div className="w-full max-w-4xl flex flex-col gap-0 border-t border-brand-border">
            {[
              { title: "Video Editing", desc: "Crafting narratives with precision rhythm and pacing." },
              { title: "Color Grading", desc: "Developing cinematic looks that drive emotional impact." },
              { title: "Commercial Campaigns", desc: "High-end finishing for broadcast and web." },
              { title: "Music Videos", desc: "Stylized, dynamic cuts perfectly synced to the beat." },
              { title: "Short Films", desc: "Narrative-focused offline editing and final delivery." },
              { title: "Social Reels", desc: "Fast-paced vertical content designed for engagement." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-baseline justify-between py-8 border-b border-brand-border group">
                <div className="flex items-baseline gap-6 mb-4 md:mb-0">
                  <span className="text-brand-accent font-serif text-lg italic w-8 shrink-0">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-primary-text transition-colors group-hover:text-brand-accent">{item.title}</h3>
                </div>
                <p className="text-brand-secondary-text font-light text-base md:text-right max-w-sm ml-14 md:ml-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. TESTIMONIALS */}
      <section className="py-8 px-6 md:px-12 bg-brand-section-alt border-y border-brand-border mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-brand-primary-text text-base font-bold uppercase tracking-[0.2em]">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16">
            <div className="flex flex-col">
              <div className="flex gap-1 mb-4 text-brand-primary-text">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xl font-serif text-brand-primary-text italic leading-snug mb-6">
                "Sunil completely transformed our campaign. His understanding of pacing and his eye for color is unmatched. He didn't just edit the video; he found the soul of the story we were trying to tell."
              </p>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-primary-text mb-1">Sarah Jenkins</p>
                <p className="text-xs font-light text-brand-secondary-text">Director, B Star Films</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 mb-4 text-brand-primary-text">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xl font-serif text-brand-primary-text italic leading-snug mb-6">
                "We hand over all our high-end commercial finishing to Sunil. His Resolve workflow is bulletproof, and the cinematic looks he develops always exceed client expectations."
              </p>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-primary-text mb-1">Mark O'Connor</p>
                <p className="text-xs font-light text-brand-secondary-text">Producer, Gallery House</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-8 px-6 md:px-12 text-center border-y border-brand-border bg-brand-section-alt mt-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text mb-6 tracking-tight">Have A Story To Tell?</h2>
          <p className="text-lg md:text-xl text-brand-secondary-text font-light mb-8 leading-relaxed">
            Let's turn your footage<br />into something people remember.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <span className="text-brand-primary-text font-medium text-base">contact@sunilsharma.com</span>
            <div className="flex items-center gap-3 text-brand-secondary-text text-xs font-medium tracking-widest uppercase">
              <span>Kathmandu, Nepal</span>
              <span className="w-1 h-1 rounded-full bg-brand-border"></span>
              <span>Available Worldwide</span>
            </div>
          </div>

          <Link to="/contact" className="inline-block bg-[#111111] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
