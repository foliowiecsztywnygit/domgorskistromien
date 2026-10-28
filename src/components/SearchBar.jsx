import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import { format, isAfter, isBefore } from 'date-fns';
import { Calendar as CalendarIcon, Users, ArrowRight, Search } from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const SearchBar = () => {
  const navigate = useNavigate();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('4');
  
  const [activeField, setActiveField] = useState(null); // 'checkIn' | 'checkOut' | 'guests'
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveField(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDateForDisplay = (date) => {
    if (!date) return { day: '', month: '', weekday: '' };
    const day = date.getDate();
    const month = date.toLocaleString('pl-PL', { month: 'short' }).replace('.', '');
    const weekday = date.toLocaleString('pl-PL', { weekday: 'long' });
    
    return { day, month, weekday };
  };

  const checkInDisplay = formatDateForDisplay(checkIn);
  const checkOutDisplay = formatDateForDisplay(checkOut);

  const handleSearchClick = (e) => {
    e.preventDefault();
    const startStr = format(checkIn, 'yyyy-MM-dd');
    const endStr = format(checkOut, 'yyyy-MM-dd');
    navigate(`/rezerwacja?start=${startStr}&end=${endStr}&guests=${guests}`);
  };

  const handleDateSelect = (date) => {
    if (activeField === 'checkIn') {
      setCheckIn(date);
      if (isAfter(date, checkOut) || date.getTime() === checkOut.getTime()) {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 2);
        setCheckOut(nextDay);
      }
      setActiveField('checkOut');
    } else if (activeField === 'checkOut') {
      if (isBefore(date, checkIn) || date.getTime() === checkIn.getTime()) {
        setCheckIn(date);
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 2);
        setCheckOut(nextDay);
      } else {
        setCheckOut(date);
      }
      setActiveField(null);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-white rounded-2xl shadow-xl shadow-[#53721D]/10 border border-[#E1E9D5] p-3 max-w-4xl mx-auto relative z-30"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        
        {/* Check In */}
        <div 
          onClick={() => setActiveField(activeField === 'checkIn' ? null : 'checkIn')}
          className={`md:col-span-4 p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
            activeField === 'checkIn' 
              ? 'border-[#8BC030] bg-[#F4F9EB] ring-2 ring-[#8BC030]/20' 
              : 'border-transparent hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-lg bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
            <CalendarIcon size={20} />
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500">Przyjazd</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-serif font-bold text-gray-900">{checkInDisplay.day}</span>
              <span className="text-sm font-semibold text-gray-700 capitalize">{checkInDisplay.month}</span>
              <span className="text-xs text-gray-400 capitalize">({checkInDisplay.weekday})</span>
            </div>
          </div>
        </div>

        {/* Check Out */}
        <div 
          onClick={() => setActiveField(activeField === 'checkOut' ? null : 'checkOut')}
          className={`md:col-span-4 p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
            activeField === 'checkOut' 
              ? 'border-[#8BC030] bg-[#F4F9EB] ring-2 ring-[#8BC030]/20' 
              : 'border-transparent hover:bg-gray-50'
          }`}
        >
          <div className="w-10 h-10 rounded-lg bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
            <CalendarIcon size={20} />
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500">Wyjazd</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-serif font-bold text-gray-900">{checkOutDisplay.day}</span>
              <span className="text-sm font-semibold text-gray-700 capitalize">{checkOutDisplay.month}</span>
              <span className="text-xs text-gray-400 capitalize">({checkOutDisplay.weekday})</span>
            </div>
          </div>
        </div>

        {/* Guests Count */}
        <div className="md:col-span-2 p-2 rounded-xl flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
            <Users size={20} />
          </div>
          <div className="flex-1">
            <label htmlFor="guest-select" className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500">Goście</label>
            <select
              id="guest-select"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent font-serif font-bold text-gray-900 focus:outline-none text-sm cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'osoba' : num < 5 ? 'osoby' : 'osób'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CTA Button */}
        <div className="md:col-span-2">
          <button 
            onClick={handleSearchClick}
            className="w-full bg-[#8BC030] hover:bg-[#74A425] text-white py-3.5 px-4 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#8BC030]/25 hover:shadow-lg"
          >
            <Search size={16} />
            <span>Szukaj</span>
          </button>
        </div>

      </div>

      {/* Calendar dropdown popup */}
      {(activeField === 'checkIn' || activeField === 'checkOut') && (
        <div className="absolute top-[102%] left-0 right-0 sm:left-4 sm:right-auto sm:w-96 z-50 mt-2 bg-white rounded-2xl shadow-2xl border border-[#E1E9D5] p-2 animate-fadeIn">
          <div className="p-3 bg-[#F4F9EB] rounded-xl mb-2 flex items-center justify-between text-xs font-semibold text-[#53721D]">
            <span>{activeField === 'checkIn' ? 'Wybierz datę przyjazdu' : 'Wybierz datę wyjazdu'}</span>
            <button 
              type="button"
              onClick={() => setActiveField(null)}
              className="text-gray-400 hover:text-gray-700 font-bold px-2 py-0.5"
            >
              Zamknij
            </button>
          </div>
          <Calendar 
            selectedDates={[checkIn, checkOut]}
            blockedDates={[]}
            onChange={handleDateSelect}
            monthsCount={1}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
