import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Film, Sparkles, Image as ImageIcon, Aperture, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very subtle fade up
      gsap.utils.toArray('.reveal-element').forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-brand-primary-bg overflow-hidden pt-0">
      
      {/* SECTION 01 — HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-0 pb-[60px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
          <div className="w-full lg:w-[55%] reveal-element">
            <span className="text-brand-secondary-text text-[13px] font-bold tracking-[0.2em] uppercase mb-8 block">About Sunil Sharma</span>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-brand-primary-text leading-[1.05] tracking-tight">
              Editing Stories.<br />
              Shaping Emotion.<br />
              <span className="italic">Frame By Frame.</span>
            </h1>
          </div>
          <div className="w-full lg:w-[45%] reveal-element">
            <div className="space-y-6 text-[18px] text-brand-secondary-text font-light leading-[1.8] max-w-[65ch]">
              <p>
                With over 7 years of experience in the post-production industry, I specialize in video editing and cinematic color grading, driven by a deep understanding of visual storytelling.
              </p>
              <p>
                My work spans across high-end commercial campaigns, dynamic music videos, and compelling documentaries—helping directors and brands transform raw, unstructured footage into narratives that leave a lasting emotional impact.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Meta Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-brand-border reveal-element text-sm font-semibold tracking-widest text-brand-primary-text uppercase">
          <div>Kathmandu, Nepal</div>
          <div>Available Worldwide</div>
          <div>Video Editor & Colorist</div>
          <div>DaVinci Resolve Workflow</div>
        </div>
      </section>

      {/* SECTION 02 — THE STORY */}
      <section className="bg-brand-section-alt border-y border-brand-border py-[40px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left: Portrait */}
            <div className="w-full lg:w-1/2 reveal-element">
              <div className="aspect-[3/4] overflow-hidden rounded-[2px]">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Sunil Sharma Editing" 
                  className="w-full h-full object-cover grayscale contrast-75 brightness-110"
                />
              </div>
            </div>
            {/* Right: Story */}
            <div className="w-full lg:w-1/2 reveal-element">
              <span className="text-brand-secondary-text text-[13px] font-bold tracking-[0.2em] uppercase mb-6 block">The Person Behind The Timeline</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text leading-tight mb-8">From Curiosity to a Career</h2>
              <div className="space-y-6 text-[18px] text-brand-secondary-text font-light leading-[1.8] max-w-[65ch]">
                <p>
                  My love for films didn't start with a camera; it started with a timeline. I was instantly fascinated by how a simple cut could completely alter the meaning, tension, and emotion of a single scene.
                </p>
                <p>
                  That initial curiosity grew into a deep study of editorial rhythm. I spent years analyzing the musicality of pacing—learning precisely when to hold a frame to let a moment breathe, and when to cut aggressively to maintain relentless momentum.
                </p>
                <p>
                  As my understanding of narrative flow deepened, I naturally gravitated toward the psychological impact of color. Editing dictates the rhythm, but color dictates the feeling. Turning this passion into a full-time profession meant mastering both, allowing me to treat color grading as an integral extension of the editorial process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PHILOSOPHY */}
      <section className="py-[40px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal-element">
            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-brand-secondary-text block mb-6">Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-primary-text leading-[1.2] tracking-tight mb-4">
              The best edit is often invisible.
            </h2>
            <p className="text-2xl font-serif italic text-brand-secondary-text">
              You should feel it before you notice it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-element">
            <div className="border-t border-brand-border pt-8 text-center md:text-left">
              <h3 className="text-2xl font-serif text-brand-primary-text">Story First</h3>
            </div>
            <div className="border-t border-brand-border pt-8 text-center md:text-left">
              <h3 className="text-2xl font-serif text-brand-primary-text">Rhythm Matters</h3>
            </div>
            <div className="border-t border-brand-border pt-8 text-center md:text-left">
              <h3 className="text-2xl font-serif text-brand-primary-text">Emotion Through Color</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SKILLS & TOOLS */}
      <section className="bg-brand-section-alt border-y border-brand-border py-[50px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3 reveal-element">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text mb-6">Creative Toolkit</h2>
              <p className="text-[18px] text-brand-secondary-text font-light leading-[1.8] max-w-[65ch]">
                My post-production workflow relies on industry-standard tools designed for precision, speed, and uncompromising cinematic quality.
              </p>
            </div>
            <div className="w-full lg:w-2/3 reveal-element">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* DaVinci */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <Scissors strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">DaVinci Resolve</span>
                </div>
                {/* Premiere */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <Film strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">Premiere Pro</span>
                </div>
                {/* AE */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <Sparkles strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">After Effects</span>
                </div>
                {/* PS */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <ImageIcon strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">Photoshop</span>
                </div>
                {/* LR */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <Aperture strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">Lightroom</span>
                </div>
                {/* Frame */}
                <div className="flex flex-col items-center md:items-start text-brand-primary-text">
                  <MessageSquare strokeWidth={1} className="w-10 h-10 mb-4 text-brand-secondary-text" />
                  <span className="text-[18px] font-medium tracking-wide">Frame.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — WORKFLOW */}
      <section className="py-[50px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text mb-16 text-center reveal-element">How I Approach Every Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 reveal-element">
            <div className="border-t border-brand-border pt-6">
              <span className="text-[12px] font-bold text-brand-secondary-text tracking-widest uppercase mb-2 block">01</span>
              <h3 className="text-xl font-serif text-brand-primary-text">Discovery</h3>
            </div>
            <div className="border-t border-brand-border pt-6">
              <span className="text-[12px] font-bold text-brand-secondary-text tracking-widest uppercase mb-2 block">02</span>
              <h3 className="text-xl font-serif text-brand-primary-text">Assembly</h3>
            </div>
            <div className="border-t border-brand-border pt-6">
              <span className="text-[12px] font-bold text-brand-secondary-text tracking-widest uppercase mb-2 block">03</span>
              <h3 className="text-xl font-serif text-brand-primary-text">Refinement</h3>
            </div>
            <div className="border-t border-brand-border pt-6">
              <span className="text-[12px] font-bold text-brand-secondary-text tracking-widest uppercase mb-2 block">04</span>
              <h3 className="text-xl font-serif text-brand-primary-text">Color & Finishing</h3>
            </div>
            <div className="border-t border-brand-border pt-6">
              <span className="text-[12px] font-bold text-brand-secondary-text tracking-widest uppercase mb-2 block">05</span>
              <h3 className="text-xl font-serif text-brand-primary-text">Delivery</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — PROJECT TYPES */}
      <section className="bg-brand-section-alt border-y border-brand-border py-[50px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 reveal-element">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text mb-16 text-center">Industries & Project Types</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Commercial Campaigns</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">High-end product and service advertisements tailored for broadcast and premium digital distribution.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Brand Films</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Narrative-driven visual identities designed to communicate core company values and aesthetics.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Music Videos</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Fast-paced, highly stylized edits heavily dependent on rhythm, choreography, and bold color palettes.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Documentaries</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Long-form storytelling focusing on pacing, emotional character arcs, and cohesive narrative structures.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Corporate Films</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Clean, professional presentations, internal communications, and B2B marketing assets.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Social Content</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Vertical, high-retention short-form media optimized for Instagram, TikTok, and modern mobile feeds.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">YouTube Content</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Engaging, creator-focused edits designed to maximize audience retention and subscriber growth.</p>
              </div>
              <div className="border-b border-brand-border pb-6">
                <h3 className="text-2xl font-serif text-brand-primary-text mb-2">Short Films</h3>
                <p className="text-[16px] text-brand-secondary-text font-light">Fictional narrative works requiring precise dialogue pacing, spatial awareness, and cinematic grading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CINEMATIC IMAGE + CTA */}
      <section className="py-[50px] pb-[60px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left: Cinematic Image */}
            <div className="w-full lg:w-1/2 reveal-element">
              <div className="aspect-[16/9] overflow-hidden rounded-[2px]">
                <img 
                  src="/philosophy-bg.jpg" 
                  alt="Cinematic Editing Suite" 
                  className="w-full h-full object-cover saturate-150 contrast-125"
                />
              </div>
            </div>
            
            {/* Right: CTA */}
            <div className="w-full lg:w-1/2 reveal-element">
              <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-brand-secondary-text block mb-6">Let's Work Together</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-primary-text leading-[1.1] mb-6">
                Let's Create Something Worth Watching.
              </h2>
              <p className="text-[18px] text-brand-secondary-text font-light leading-[1.8] max-w-[65ch] mb-10">
                Whether you're producing a commercial campaign, music video, documentary, or narrative film, I'm always open to discussing new stories and meaningful collaborations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-primary-text text-white font-semibold text-[13px] uppercase tracking-[0.15em] rounded-full hover:bg-brand-accent transition-colors shadow-sm text-center">
                  Book A Project
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-primary-text text-brand-primary-text font-semibold text-[13px] uppercase tracking-[0.15em] rounded-full hover:bg-brand-primary-text hover:text-white transition-colors text-center">
                  View Selected Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
