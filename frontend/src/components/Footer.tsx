import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-2xl border-t border-white/60 py-12 px-6 md:px-12 mt-auto shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Brand */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-primary-text mb-3 tracking-tight">Sunil Sharma.</h2>
          <p className="text-brand-secondary-text text-sm font-light leading-relaxed max-w-xs mb-6">
            A premium post-production studio specializing in editorial storytelling and cinematic color grading.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-primary-text text-white font-semibold text-[10px] uppercase tracking-[0.15em] rounded-full hover:bg-brand-accent transition-colors shadow-sm">
            Book A Project
          </Link>
        </div>
        
        {/* Navigation & Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <span className="text-brand-primary-text text-[10px] font-bold uppercase tracking-[0.25em] mb-1">Work</span>
            <a href="/portfolio" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">Selected Work</a>
            <a href="/reels" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">Short Form</a>
            <a href="/about" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">About</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-brand-primary-text text-[10px] font-bold uppercase tracking-[0.25em] mb-1">Socials</span>
            <a href="#" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">Instagram</a>
            <a href="#" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">Vimeo</a>
            <a href="#" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">LinkedIn</a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 items-center sm:items-start">
            <span className="text-brand-primary-text text-[10px] font-bold uppercase tracking-[0.25em] mb-1">Contact</span>
            <a href="mailto:contact@sunilsharma.com" className="text-brand-secondary-text hover:text-brand-primary-text transition-colors text-xs font-medium">hello@sunilsharma.com</a>
            <p className="text-brand-secondary-text text-xs font-medium">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-brand-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-secondary-text font-medium tracking-wide">
        <p>&copy; {new Date().getFullYear()} Sunil Sharma. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-primary-text transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary-text transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
