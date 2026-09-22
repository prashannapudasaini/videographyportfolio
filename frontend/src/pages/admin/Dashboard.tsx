import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2 } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // New Project Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [client, setClient] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchProjects();
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:8000/api.php?route=projects');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      await fetch(`http://localhost:8000/api.php?route=project&id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:8000/api.php?route=projects', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ title, category, client, youtube_url: youtubeUrl, description })
      });
      // Reset form
      setTitle(''); setCategory(''); setClient(''); setYoutubeUrl(''); setDescription('');
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-8 text-brand-copper">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-brand-deep-charcoal text-brand-warm-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-brand-warm-white/10 pb-6">
          <h1 className="text-3xl font-serif text-brand-copper">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-brand-warm-white/70 hover:text-brand-copper transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Add Project Form */}
          <div className="lg:col-span-1 bg-brand-soft-black p-6 rounded-lg border border-brand-warm-white/5 h-fit">
            <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
              <Plus size={20} className="text-brand-copper" /> Add New Project
            </h2>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-brand-warm-white/70">Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} required className="w-full bg-brand-deep-charcoal border border-brand-warm-white/10 rounded p-2 focus:border-brand-copper outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-brand-warm-white/70">Category (e.g. Commercial, Music Video)</label>
                <input type="text" value={category} onChange={e=>setCategory(e.target.value)} className="w-full bg-brand-deep-charcoal border border-brand-warm-white/10 rounded p-2 focus:border-brand-copper outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-brand-warm-white/70">Client</label>
                <input type="text" value={client} onChange={e=>setClient(e.target.value)} className="w-full bg-brand-deep-charcoal border border-brand-warm-white/10 rounded p-2 focus:border-brand-copper outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-brand-warm-white/70">YouTube URL</label>
                <input type="url" value={youtubeUrl} onChange={e=>setYoutubeUrl(e.target.value)} className="w-full bg-brand-deep-charcoal border border-brand-warm-white/10 rounded p-2 focus:border-brand-copper outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-brand-warm-white/70">Description</label>
                <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={4} className="w-full bg-brand-deep-charcoal border border-brand-warm-white/10 rounded p-2 focus:border-brand-copper outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-copper text-brand-soft-black font-semibold py-2 rounded hover:bg-brand-amber transition-colors">
                Publish Project
              </button>
            </form>
          </div>

          {/* Project List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-serif mb-6 border-b border-brand-warm-white/10 pb-2">Manage Projects</h2>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <p className="text-brand-warm-white/50 italic">No projects found. Add one to get started.</p>
              ) : (
                projects.map(project => (
                  <div key={project.id} className="bg-brand-soft-black p-4 rounded-lg border border-brand-warm-white/5 flex justify-between items-center group">
                    <div>
                      <h3 className="font-serif text-lg text-brand-copper">{project.title}</h3>
                      <p className="text-sm text-brand-warm-white/50">{project.category} • {project.client}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(project.id)}
                      className="text-red-400/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-2"
                      title="Delete Project"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
