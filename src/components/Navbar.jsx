import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Calendar, MapPin } from 'lucide-react';
import { contact, rooms } from '../data/site';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setRoomsDropdownOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E1E9D5] py-3'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
      }`}
    >
      {/* Top info strip - on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/logo.png"
              alt="Domek Górski Strumień"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg font-bold tracking-tight transition-colors ${
                  scrolled || !isHome ? 'text-[#2D4412]' : 'text-white'
                }`}
              >
                Domek Górski Strumień
              </span>
              <span
                className={`text-[11px] tracking-wider uppercase font-medium flex items-center gap-1 ${
                  scrolled || !isHome ? 'text-[#5A6251]' : 'text-gray-200'
                }`}
              >
                <MapPin size={11} className="text-[#8BC030]" /> Stronie Śląskie • Czarna Góra
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Strona Główna
            </Link>

            <Link
              to="/o-nas"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/o-nas'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              O nas
            </Link>

            {/* Pokoje with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRoomsDropdownOpen(true)}
              onMouseLeave={() => setRoomsDropdownOpen(false)}
            >
              <Link
                to="/pokoje"
                className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/pokoje')
                    ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                    : scrolled || !isHome
                    ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                Pokoje
                <ChevronDown size={14} className={`transition-transform duration-200 ${roomsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {roomsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E1E9D5] py-2 overflow-hidden animate-fadeIn">
                    <Link
                      to="/pokoje"
                      className="block px-4 py-2.5 text-xs uppercase font-bold tracking-wider text-[#53721D] bg-[#F4F9EB] hover:bg-[#EAF3DC] border-b border-[#E1E9D5]"
                    >
                      Wszystkie pokoje (16 miejsc) →
                    </Link>
                    {rooms.map((room) => (
                      <Link
                        key={room.slug}
                        to={`/pokoje/${room.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F4F9EB] hover:text-[#53721D] transition-colors"
                      >
                        <div className="font-medium">{room.fullName}</div>
                        <div className="text-[11px] text-gray-500">{room.capacityLabel}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/cennik"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/cennik'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Cennik
            </Link>

            <Link
              to="/galeria"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/galeria'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Galeria
            </Link>

            <Link
              to="/atrakcje"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/atrakcje'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Okolica i Atrakcje
            </Link>

            <Link
              to="/kontakt"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/kontakt'
                  ? 'text-[#53721D] font-semibold bg-[#EAF3DC]'
                  : scrolled || !isHome
                  ? 'text-gray-700 hover:text-[#53721D] hover:bg-gray-100/60'
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Quick Contact & Rezerwuj CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={contact.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                scrolled || !isHome
                  ? 'text-[#53721D] hover:bg-[#F4F9EB]'
                  : 'text-white hover:bg-white/15'
              }`}
              title="Zadzwoń do nas"
            >
              <Phone size={16} className="text-[#8BC030]" />
              <span>{contact.phone}</span>
            </a>

            <Link
              to="/rezerwacja"
              className="flex items-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Calendar size={16} />
              <span>Rezerwacja</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={contact.phoneHref}
              className={`p-2 rounded-lg ${scrolled || !isHome ? 'text-[#53721D]' : 'text-white'}`}
              aria-label="Telefon"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                scrolled || !isHome ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E1E9D5] shadow-2xl px-4 pt-3 pb-6 mt-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Strona Główna
          </Link>
          <Link
            to="/o-nas"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/o-nas' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            O nas
          </Link>
          <Link
            to="/pokoje"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/pokoje' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Pokoje (16 miejsc)
          </Link>
          <div className="pl-4 space-y-1 border-l-2 border-[#8BC030] my-1">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                to={`/pokoje/${room.slug}`}
                className="block py-1.5 text-sm text-gray-600 hover:text-[#53721D]"
              >
                {room.fullName} ({room.capacity} os.)
              </Link>
            ))}
          </div>
          <Link
            to="/cennik"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/cennik' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Cennik
          </Link>
          <Link
            to="/galeria"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/galeria' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Galeria
          </Link>
          <Link
            to="/atrakcje"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/atrakcje' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Okolica i Atrakcje
          </Link>
          <Link
            to="/kontakt"
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              location.pathname === '/kontakt' ? 'bg-[#F4F9EB] text-[#53721D]' : 'text-gray-800'
            }`}
          >
            Kontakt
          </Link>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link
              to="/rezerwacja"
              className="w-full flex items-center justify-center gap-2 bg-[#8BC030] text-white py-3 rounded-lg font-semibold text-center"
            >
              <Calendar size={18} />
              <span>Zarezerwuj pobyt</span>
            </Link>
            <a
              href={contact.phoneHref}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-[#53721D] py-3 rounded-lg font-semibold text-center"
            >
              <Phone size={18} />
              <span>Zadzwoń: {contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
