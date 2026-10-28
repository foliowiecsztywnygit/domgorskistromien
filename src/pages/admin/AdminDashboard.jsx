import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import { format, addDays } from 'date-fns';
import { LogOut, RefreshCw, Calendar as CalendarIcon, ShieldAlert } from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const AdminDashboard = () => {
  const [cabins, setCabins] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [selectionStart, setSelectionStart] = useState({ cabinId: null, date: null });
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const fetchData = async () => {
    try {
      const cabinsRes = await fetch(`${API_URL}/api/cabins`);
      const cabinsData = await cabinsRes.json();
      setCabins(cabinsData);

      const blocksRes = await fetch(`${API_URL}/api/admin/blocks`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (blocksRes.status === 401 || blocksRes.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }
      const blocksData = await blocksRes.json();
      setBlocks(blocksData);

      const inqRes = await fetch(`${API_URL}/api/admin/inquiries`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const refreshSession = async () => {
      try {
        const res = await fetch(`${API_URL}/api/admin/refresh`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem('adminToken', data.token);
        }
      } catch (err) {
        console.error('Failed to refresh session', err);
      }
    };

    refreshSession();
    fetchData();

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleDateToggle = async (cabinId, date) => {
    if (selectionStart.cabinId === cabinId && selectionStart.date) {
      const start = selectionStart.date < date ? selectionStart.date : date;
      const end = selectionStart.date > date ? selectionStart.date : date;
      
      const datesToToggle = [];
      let current = start;
      while (current <= end) {
        datesToToggle.push(format(current, 'yyyy-MM-dd'));
        current = addDays(current, 1);
      }

      const startStr = format(selectionStart.date, 'yyyy-MM-dd');
      const wasBlocked = blocks.some(b => b.cabin_id === cabinId && b.start_date === startStr);

      try {
        if (wasBlocked) {
          for (const d of datesToToggle) {
            const b = blocks.find(x => x.cabin_id === cabinId && x.start_date === d);
            if (b) {
              await fetch(`${API_URL}/api/admin/blocks/${b.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
              });
            }
          }
        } else {
          for (const d of datesToToggle) {
            const b = blocks.find(x => x.cabin_id === cabinId && x.start_date === d);
            if (!b) {
              await fetch(`${API_URL}/api/admin/blocks`, {
                method: 'POST',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                  cabin_id: cabinId,
                  start_date: d,
                  end_date: d,
                  reason: 'manual'
                })
              });
            }
          }
        }
      } catch (err) {
        console.error('Error toggling dates:', err);
      }

      setSelectionStart({ cabinId: null, date: null });
      fetchData();
    } else {
      setSelectionStart({ cabinId, date });
    }
  };

  return (
    <div className="min-h-screen bg-[#141C0C] text-gray-200 p-4 sm:p-8 pt-28">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#1F2C14] p-6 rounded-3xl border border-[#344820] shadow-xl">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#AED864]">Domek Górski Strumień</span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">Panel Zarządzania Rezerwacjami</h1>
            <p className="text-xs text-gray-400 mt-1">Kliknij datę początkową i końcową, aby zablokować/odblokować termin w danym pokoju.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-3 bg-[#2D3E1C] hover:bg-[#3D5426] text-white rounded-xl transition-colors"
              title="Odśwież"
            >
              <RefreshCw size={18} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-3 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 rounded-xl transition-all font-semibold text-xs uppercase tracking-wider"
            >
              <LogOut size={16} />
              <span>Wyloguj</span>
            </button>
          </div>
        </div>
        
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabins.map(cabin => {
            const cabinBlocks = blocks
              .filter(b => b.cabin_id === cabin.id)
              .map(b => b.start_date);

            const selectedDates = selectionStart.cabinId === cabin.id && selectionStart.date 
              ? [selectionStart.date] 
              : [];

            return (
              <div key={cabin.id} className="bg-[#1C2712] p-5 rounded-3xl border border-[#2E411C] shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b border-[#2E411C] pb-3">
                  <h2 className="text-lg font-serif font-bold text-white">{cabin.name}</h2>
                  <span className="text-[11px] font-mono text-[#AED864] bg-[#2A3B1B] px-2 py-0.5 rounded">
                    Zablokowanych dni: {cabinBlocks.length}
                  </span>
                </div>
                <Calendar 
                  blockedDates={cabinBlocks}
                  selectedDates={selectedDates}
                  onChange={(date) => handleDateToggle(cabin.id, date)}
                  allowAdminBlocks={true}
                  monthsCount={1}
                  className="bg-transparent text-gray-200"
                />
              </div>
            );
          })}
        </div>

        {/* Recent Inquiries List */}
        {inquiries.length > 0 && (
          <div className="bg-[#1C2712] p-6 rounded-3xl border border-[#2E411C] shadow-lg">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Ostatnie zapytania ze strony</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#2E411C] text-gray-400 uppercase tracking-wider">
                    <th className="py-2.5 px-3">Data</th>
                    <th className="py-2.5 px-3">Gość</th>
                    <th className="py-2.5 px-3">Telefon</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Termin</th>
                    <th className="py-2.5 px-3">Wiadomość</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2E411C]">
                  {inquiries.slice(0, 10).map((inq) => (
                    <tr key={inq.id} className="hover:bg-[#253518] transition-colors">
                      <td className="py-2.5 px-3 text-gray-400">{inq.created_at?.slice(0, 10)}</td>
                      <td className="py-2.5 px-3 font-semibold text-white">{inq.guest_name}</td>
                      <td className="py-2.5 px-3 font-mono">{inq.guest_phone}</td>
                      <td className="py-2.5 px-3">{inq.guest_email}</td>
                      <td className="py-2.5 px-3 text-[#AED864] font-medium">{inq.start_date} {inq.end_date ? `do ${inq.end_date}` : ''}</td>
                      <td className="py-2.5 px-3 text-gray-300 max-w-xs truncate">{inq.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
