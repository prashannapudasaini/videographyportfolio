import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Echoes of Craft",
      link: "/portfolio/1",
      desc: "A high-end commercial campaign focusing on the meticulous details of artisanal craftsmanship. I delivered a cohesive offline edit and cinematic color grade that elevated the brand's visual identity. By meticulously pacing the narrative, the final cut seamlessly highlighted the raw texture and authentic emotion of the artisans at work.",
      category: "Commercial Film",
      tags: ["Offline Edit", "Color Grading", "Sound Design"],
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      year: "2024",
      client: "Artisan Co."
    },
    {
      id: 2,
      title: "Midnight Rhythm",
      link: "/portfolio/2",
      desc: "Fast-paced, highly stylized music video that demanded an incredibly dynamic visual approach. I mastered the rhythm of the edit to perfectly match the complex choreography and rapid beat drops. The project was finished with an aggressive, high-contrast, and deeply saturated color grade to emphasize the bold aesthetics.",
      category: "Music Video",
      tags: ["Creative Edit", "VFX", "Color Grading"],
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      year: "2024",
      client: "Night Records"
    },
    {
      id: 3,
      title: "Gallery House",
      link: "/portfolio/3",
      desc: "Brand identity film for a luxury real estate agency that required a sophisticated and elegant tone. The edit emphasized buttery smooth transitions, deliberate spatial pacing, and a bright, aspirational color palette. My focus was on establishing a luxurious atmosphere that allowed viewers to emotionally connect with the architecture.",
      category: "Brand Film",
      tags: ["Editing", "Color Grading", "Delivery"],
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      year: "2023",
      client: "Gallery House"
    }
  ];

  const reels = [
    { id: 1, img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, img: "/reel4.jpg" },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-6 md:px-12 animate-in fade-in duration-700">
      
      {/* 01. SELECTED WORKS */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-brand-primary-text mb-10 tracking-tight">Selected Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-16">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className={`group block ${index % 2 !== 0 ? 'md:mt-32' : ''}`} // Offset odd items for editorial feel
            >
              <div className="aspect-[4/3] bg-brand-highlight w-full mb-8 overflow-hidden rounded-[20px] border border-brand-border shadow-[0_10px_30px_rgba(0,0,0,0.04)] relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <p className="text-brand-secondary-text text-sm font-medium mb-3 uppercase tracking-wider">{project.client} &mdash; {project.category}</p>
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-serif text-brand-primary-text group-hover:text-brand-accent transition-colors leading-snug">{project.title}</h3>
                  <span className="text-brand-secondary-text text-sm font-semibold mt-2">{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 02. REELS */}
      <div className="pt-16 border-t border-brand-border">
        <h2 className="text-5xl md:text-7xl font-serif text-brand-primary-text mb-10 tracking-tight">Short Form</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {reels.map((reel) => (
            <div key={reel.id} className="aspect-[9/16] bg-brand-highlight rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-brand-border relative group cursor-pointer">
              <img src={reel.img} alt={`Reel ${reel.id}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-brand-primary-text/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-brand-primary-text border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="mt-4 text-white font-medium text-sm tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">0:30</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
