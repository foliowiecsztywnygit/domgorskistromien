import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const cleanPassword = password.trim();

    if (!cleanPassword) {
      setError('Wprowadź hasło');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: cleanPassword })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else if (res.status === 405) {
        setError('Błąd 405 (Method Not Allowed): Serwer nie przekazuje zapytań POST do Node.js. Sprawdź w Coolify czy Build Pack to Dockerfile i port to 3001.');
      } else if (res.status === 401) {
        setError('Nieprawidłowe hasło administratora');
      } else {
        setError(`Błąd serwera (kod ${res.status})`);
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2612] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#273818] border border-[#3E5C17] p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-[#53721D] text-[#AED864] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-serif text-white font-bold">Domek Górski Strumień</h2>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Panel Zarządzania Rezerwacjami</p>
        </div>

        {error && (
          <div className="p-3 bg-red-900/40 border border-red-700 text-red-200 text-xs rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-1.5">
              Hasło dostępowe
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                className="w-full bg-[#1A2510] border border-[#3E5C17] text-white px-4 py-3 pr-12 rounded-xl focus:outline-none focus:border-[#8BC030] text-sm transition-colors"
                placeholder="Wprowadź hasło..."
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#AED864] transition-colors p-1"
                title={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#8BC030] hover:bg-[#74A425] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{loading ? 'Logowanie...' : 'Zaloguj się'}</span>
            <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
