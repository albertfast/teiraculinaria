import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Automatically redirect to admin panel if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin-auth');
    if (isLoggedIn === 'true') {
      navigate('/admin-panel');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation - in a real application this would come from a secure API
    if (username === 'admin' && password === 'denizsezer2023') {
      localStorage.setItem('admin-auth', 'true');
      navigate('/admin-panel');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">Deniz Sezer</h1>
          <p className="text-slate-300">Admin Panel Login</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-200 rounded-md text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-slate-300 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:border-amber-500 focus:ring focus:ring-amber-500/30 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:border-amber-500 focus:ring focus:ring-amber-500/30 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-md font-medium transition duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}