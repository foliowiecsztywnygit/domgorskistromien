import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CreditCard, Clock, Trees, Mountain } from 'lucide-react';
import { contact, rooms } from '../data/site';

const Footer = () => {
  return (
    <footer className="bg-[#1C2612] text-gray-300 border-t border-[#2F401C]">
      {/* Upper green highlight strip */}
      <div className="bg-[#53721D] py-4 text-white text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Mountain size={18} className="text-[#AED864]" />
            <span>Domek Górski Strumień • Zaledwie 3 km od stacji narciarskiej Czarna Góra</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:underline">
              <Phone size={15} />
              <span>{contact.phone}</span>
            </a>
            <span className="opacity-50">|</span>
            <a href={`mailto:${contact.emails[0]}`} className="inline-flex items-center gap-2 hover:underline">
              <Mail size={15} />
              <span>{contact.emails[0]}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About Domek */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="Domek Górski Strumień"
                className="h-14 w-auto object-contain brightness-0 invert opacity-95"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Domek Górski Strumień</h3>
                <p className="text-xs text-[#AED864] font-medium">{contact.owners}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Przytulny wypoczynek o każdej porze roku w dolinie potoku Janówka. 16 miejsc noclegowych w 5 pokojach z łazienkami, kominek, w pełni wyposażona kuchnia z tarasem i piękny ogród z altaną.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#2A3B18] text-[#AED864] border border-[#3E5C17]">
                <Trees size={14} /> Posesja ogrodzona • Bezpłatny parking
              </span>
            </div>
          </div>

          {/* Column 2: Rooms */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Nasze Pokoje
            </h4>
            <ul className="space-y-2.5 text-sm">
              {rooms.map((room) => (
                <li key={room.slug}>
                  <Link
                    to={`/pokoje/${room.slug}`}
                    className="text-gray-400 hover:text-[#AED864] transition-colors flex items-center justify-between"
                  >
                    <span>{room.fullName}</span>
                    <span className="text-xs text-gray-500 font-mono">{room.capacity} os.</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  to="/pokoje"
                  className="text-xs uppercase tracking-wider font-bold text-[#8BC030] hover:text-[#AED864]"
                >
                  Zobacz zestawienie pokoi →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Na skróty
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Strona Główna</Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-gray-400 hover:text-white transition-colors">O nas i historia domku</Link>
              </li>
              <li>
                <Link to="/cennik" className="text-gray-400 hover:text-white transition-colors">Cennik sezonowy</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-white transition-colors">Galeria zdjęć</Link>
              </li>
              <li>
                <Link to="/atrakcje" className="text-gray-400 hover:text-white transition-colors">Atrakcje w okolicy</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt i dojazd</Link>
              </li>
              <li>
                <Link to="/rezerwacja" className="text-[#AED864] hover:underline font-semibold">Rezerwacja online / SMS</Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-gray-400 hover:text-white transition-colors">Regulamin pobytu</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Bank Info */}
          <div className="space-y-4">
            <h4 className="text-white font-serif text-base font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Dane kontaktowe
            </h4>

            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={18} className="text-[#8BC030] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{contact.city}</p>
                <p>{contact.street}</p>
                <p className="text-xs text-gray-500">woj. dolnośląskie (Ziemia Kłodzka)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={18} className="text-[#8BC030] shrink-0" />
              <a href={contact.phoneHref} className="text-white font-medium hover:text-[#AED864]">
                {contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={18} className="text-[#8BC030] shrink-0" />
              <div className="flex flex-col">
                <a href={`mailto:${contact.emails[0]}`} className="hover:text-[#AED864]">
                  {contact.emails[0]}
                </a>
                <a href={`mailto:${contact.emails[1]}`} className="text-xs text-gray-500 hover:text-gray-400">
                  {contact.emails[1]}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-white font-semibold mb-1">
                <CreditCard size={15} className="text-[#8BC030]" />
                <span>Numer konta do zadatku ({contact.bankName}):</span>
              </div>
              <p className="font-mono text-white/90 bg-[#253315] p-2 rounded border border-[#3E5C17] text-[11px] select-all break-all">
                {contact.bankAccount}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                {contact.depositInfo}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Domek Górski Strumień. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <Link to="/regulamin" className="hover:text-gray-400">Regulamin</Link>
            <Link to="/kontakt" className="hover:text-gray-400">Dojazd</Link>
            <Link to="/admin/login" className="hover:text-gray-400">Panel administracyjny</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
