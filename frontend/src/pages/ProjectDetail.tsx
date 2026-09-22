import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  cover_image: string;
  youtube_url: string;
  description: string;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api.php?route=project&id=${id}`);
        const data = await res.json();
        if (data.id) setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="min-h-[50vh] flex items-center justify-center text-brand-secondary-text font-serif text-2xl">Loading...</div>;
  if (!project) return <div className="min-h-[50vh] flex items-center justify-center text-brand-primary-text text-xl">Project not found.</div>;

  // Extract YouTube ID for embed
  let ytId = '';
  if (project.youtube_url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = project.youtube_url.match(regExp);
    if (match && match[2].length === 11) ytId = match[2];
  }

  return (
    <div className="py-[160px] max-w-7xl mx-auto px-6 md:px-12 animate-in fade-in duration-700">
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary-text hover:text-brand-accent transition-colors mb-16">
        <ArrowLeft size={16} /> Back to Work
      </Link>

      <div className="max-w-4xl mb-16">
        <p className="text-brand-secondary-text text-sm font-medium uppercase tracking-wider mb-4">{project.client} &mdash; {project.category}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-primary-text leading-[1.05] tracking-tight">{project.title}</h1>
      </div>
      
      {/* Video / Hero Section */}
      <div className="w-full aspect-video bg-brand-highlight mb-24 rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-brand-border">
        {ytId ? (
          <iframe 
            src={`https://www.youtube.com/embed/${ytId}?autoplay=0&rel=0&modestbranding=1`} 
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : project.cover_image ? (
          <img src={project.cover_image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-secondary-text font-serif text-2xl">No Media Available</div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-brand-border pt-16">
        <div className="md:col-span-4 space-y-8">
          <div>
            <h4 className="text-brand-secondary-text text-xs font-semibold uppercase tracking-widest mb-2">Client</h4>
            <p className="text-brand-primary-text font-medium">{project.client || '—'}</p>
          </div>
          <div>
            <h4 className="text-brand-secondary-text text-xs font-semibold uppercase tracking-widest mb-2">Role</h4>
            <p className="text-brand-primary-text font-medium">{project.role || '—'}</p>
          </div>
          <div>
            <h4 className="text-brand-secondary-text text-xs font-semibold uppercase tracking-widest mb-2">Category</h4>
            <p className="text-brand-primary-text font-medium">{project.category || '—'}</p>
          </div>
          <div>
            <h4 className="text-brand-secondary-text text-xs font-semibold uppercase tracking-widest mb-2">Year</h4>
            <p className="text-brand-primary-text font-medium">{project.year || '—'}</p>
          </div>
        </div>
        
        <div className="md:col-span-8 max-w-3xl">
          <h4 className="text-brand-secondary-text text-xs font-semibold uppercase tracking-widest mb-6">About The Project</h4>
          <div className="prose prose-lg max-w-none text-brand-secondary-text font-light leading-relaxed">
            {project.description ? (
              <p className="whitespace-pre-wrap">{project.description}</p>
            ) : (
              <p className="italic">No description provided.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
