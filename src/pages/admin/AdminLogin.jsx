import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        setError('Nieprawidłowe hasło administratora');
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem');
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
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1A2510] border border-[#3E5C17] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8BC030] text-sm transition-colors"
              placeholder="Wprowadź hasło..."
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#8BC030] hover:bg-[#74A425] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Zaloguj się</span>
            <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
