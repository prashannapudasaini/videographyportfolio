
export default function Reels() {
  const reels = [
    { id: 1, img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, img: "/reel4.jpg" },
    { id: 5, img: "https://img.magnific.com/premium-psd/instagram-reels-youtube-short-video-thumbnail-template-business-promotion_475351-817.jpg" }
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-2xl mb-10">
        <h1 className="text-5xl md:text-7xl font-serif text-brand-primary-text mb-6 tracking-tight">Short Form</h1>
        <p className="text-brand-secondary-text text-lg font-light leading-relaxed">High-impact vertical content optimized for modern social platforms.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {reels.map((reel) => (
          <div key={reel.id} className="aspect-[9/16] bg-brand-highlight rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-brand-border relative group cursor-pointer">
            <img src={reel.img} alt={`Reel ${reel.id}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />

            {/* Clean Hover State Overlay */}
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
  );
}
