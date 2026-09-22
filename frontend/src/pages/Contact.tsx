import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="py-20 md:py-[120px] px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Side: Info */}
        <div>
          <span className="text-brand-secondary-text text-[13px] font-bold tracking-[0.2em] uppercase mb-8 block">Start A Conversation</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-primary-text leading-[1.05] tracking-tight mb-8">
            Let's build<br />
            something<br />
            exceptional.
          </h1>
          <p className="text-lg text-brand-secondary-text font-light leading-relaxed max-w-md mb-12">
            Whether you have a fully formed brief or just the seed of an idea, I'm always open to discussing new projects and creative collaborations.
          </p>

          <div className="space-y-6 text-brand-primary-text font-medium text-sm tracking-wide">
            <div>
              <span className="block text-brand-secondary-text text-xs uppercase tracking-widest mb-1">Email</span>
              <a href="mailto:hello@sunilsharma.com" className="hover:text-brand-accent transition-colors">hello@sunilsharma.com</a>
            </div>
            <div>
              <span className="block text-brand-secondary-text text-xs uppercase tracking-widest mb-1">Location</span>
              <p>Kathmandu, Nepal<br />Available Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-brand-section-alt p-8 md:p-12 rounded-[20px] border border-brand-border shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
              <div className="w-16 h-16 bg-brand-primary-text rounded-full flex items-center justify-center text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-brand-primary-text">Message Received.</h3>
              <p className="text-brand-secondary-text font-light text-lg max-w-sm mx-auto">Thank you for reaching out. I'll get back to you within 24-48 hours to discuss your project.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-bold uppercase tracking-widest text-brand-primary-text border-b border-brand-primary-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary-text">Name</label>
                  <input required type="text" id="name" className="bg-transparent border-b border-brand-border py-3 text-brand-primary-text focus:outline-none focus:border-brand-primary-text transition-colors" placeholder="Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary-text">Email</label>
                  <input required type="email" id="email" className="bg-transparent border-b border-brand-border py-3 text-brand-primary-text focus:outline-none focus:border-brand-primary-text transition-colors" placeholder="Email Address" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary-text">Project Type</label>
                <div className="relative">
                  <select required id="project" className="w-full bg-transparent border-b border-brand-border py-3 text-brand-primary-text focus:outline-none focus:border-brand-primary-text transition-colors appearance-none cursor-pointer rounded-none relative z-10">
                    <option value="" disabled selected className="text-brand-secondary-text">Select a project type</option>
                    <option value="commercial">Commercial / Brand Film</option>
                    <option value="music-video">Music Video</option>
                    <option value="documentary">Documentary</option>
                    <option value="social">Social Media Content</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-secondary-text pointer-events-none z-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary-text">Estimated Budget</label>
                <input required type="text" id="budget" className="bg-transparent border-b border-brand-border py-3 text-brand-primary-text focus:outline-none focus:border-brand-primary-text transition-colors" placeholder="NPR" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary-text">Project Details</label>
                <textarea required id="message" rows={4} className="bg-transparent border-b border-brand-border py-3 text-brand-primary-text focus:outline-none focus:border-brand-primary-text transition-colors resize-none" placeholder="Tell me about your vision, timeline, and goals..."></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-brand-primary-text text-white font-bold text-[13px] uppercase tracking-[0.15em] rounded-full hover:bg-brand-accent transition-all duration-300 disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
