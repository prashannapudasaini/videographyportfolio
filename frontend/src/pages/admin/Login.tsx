import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api.php?route=auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-deep-charcoal">
      <div className="bg-brand-soft-black p-8 rounded-lg shadow-xl w-full max-w-md border border-brand-warm-white/10">
        <h1 className="text-3xl font-serif text-brand-copper mb-6 text-center">Admin Login</h1>
        
        {error && (
          <div className="bg-red-900/50 text-red-200 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-brand-warm-white/70 mb-1">Username</label>
            <input 
              type="text" 
              className="w-full bg-brand-deep-charcoal border border-brand-warm-white/20 rounded p-3 text-brand-warm-white focus:outline-none focus:border-brand-copper"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-brand-warm-white/70 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full bg-brand-deep-charcoal border border-brand-warm-white/20 rounded p-3 text-brand-warm-white focus:outline-none focus:border-brand-copper"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-brand-copper hover:bg-brand-amber transition-colors text-brand-soft-black font-semibold p-3 rounded mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
