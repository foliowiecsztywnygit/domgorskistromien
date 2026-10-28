import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Mountain, BedDouble, Trees, Flame, Wifi } from 'lucide-react';
import { contact } from '../data/site';

const Hero = ({
  title = "Domek Górski Strumień",
  subtitle = "Wypoczynek o każdej porze roku w rejonie Czarnej Góry na Ziemi Kłodzkiej",
  isHome = false,
  bgImage = "/assets/images/ogrod-altana.webp",
  badge = "Stronie Śląskie – Wieś • 3 km do stacji narciarskiej Czarna Góra",
}) => {
  return (
    <div className={`relative ${isHome ? 'min-h-[90vh]' : 'min-h-[50vh]'} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Parallax-like scale */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        <div className="absolute inset-0 bg-[#2D4412]/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#AED864] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-fadeIn">
            <Mountain size={16} />
            <span>{badge}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          {subtitle}
        </p>

        {/* Homepage Feature Pills */}
        {isHome && (
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-white/90">
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <BedDouble size={16} className="text-[#AED864]" /> 16 miejsc noclegowych
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <Mountain size={16} className="text-[#AED864]" /> 5 pokoi z łazienkami
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <Flame size={16} className="text-[#AED864]" /> Salonik z kominkiem
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <Trees size={16} className="text-[#AED864]" /> Altana z grillem i wędzarnią
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
              <Wifi size={16} className="text-[#AED864]" /> Wi-Fi i bezpłatny parking
            </span>
          </div>
        )}

        {/* Action Buttons */}
        {isHome && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/rezerwacja"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#8BC030]/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              <span>Zarezerwuj pobyt</span>
            </Link>

            <Link
              to="/pokoje"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all"
            >
              <span>Zobacz pokoje</span>
            </Link>

            <a
              href={contact.phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-sm font-semibold transition-all"
            >
              <Phone size={17} className="text-[#AED864]" />
              <span>{contact.phone}</span>
            </a>
          </div>
        )}
      </div>

      {/* Decorative wave / curve transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAFBF8] to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
