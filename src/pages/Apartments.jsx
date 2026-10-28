import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { rooms, houseInfo, contact } from '../data/site';
import { 
  Users, 
  Wifi, 
  Tv, 
  Bath, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  CookingPot, 
  Sparkles,
  Mountain,
  Flame,
  Trees
} from 'lucide-react';

const Apartments = () => {
  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Pokoje Gościnne"
        subtitle="16 miejsc noclegowych w 5 pokojach z łazienkami. 3 pokoje z bezpośrednim widokiem na trasy zjazdowe Czarnej Góry."
        isHome={false}
        bgImage="/assets/images/siwka-2.webp"
        badge="Domek Górski Strumień • 5 Pokoi z Łazienkami"
      />

      {/* Intro info bar */}
      <section className="py-12 bg-white border-b border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-[#F4F9EB] border border-[#E1E9D5]">
              <span className="block text-3xl font-serif font-bold text-[#53721D]">16</span>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-600 mt-1 block">Miejsc noclegowych</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F9EB] border border-[#E1E9D5]">
              <span className="block text-3xl font-serif font-bold text-[#53721D]">5</span>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-600 mt-1 block">Pokoi z łazienkami</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F9EB] border border-[#E1E9D5]">
              <span className="block text-3xl font-serif font-bold text-[#53721D]">3 km</span>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-600 mt-1 block">Czarna Góra Resort</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F4F9EB] border border-[#E1E9D5]">
              <span className="block text-3xl font-serif font-bold text-[#53721D]">100%</span>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-600 mt-1 block">Cisza i czyste powietrze</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Wybierz pokój idealny dla siebie</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2">
            Oferta naszych pokoi
          </h2>
          <p className="text-gray-600 font-light mt-3">
            Każdy pokój wyposażony jest w prywatną łazienkę, telewizor oraz dostęp do szybkiego Wi-Fi. Na parterze do Twojej dyspozycji jest kuchnia, salonik z kominkiem oraz strefa zabawy z piłkarzykami.
          </p>
        </div>

        {rooms.map((room, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={room.slug}
              id={room.slug}
              className="bg-white rounded-3xl overflow-hidden border border-[#E1E9D5] shadow-soft hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Images preview (Primary + 3 thumbnails) */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative h-80 sm:h-96 overflow-hidden">
                    <img
                      src={room.cover.src}
                      alt={room.cover.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#53721D] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                      {room.number}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 text-[#2D4412] px-3.5 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Users size={14} className="text-[#8BC030]" />
                      <span>{room.capacityLabel}</span>
                    </div>
                  </div>

                  {/* Thumbnail strip */}
                  <div className="grid grid-cols-4 gap-1 p-2 bg-[#F4F9EB]">
                    {room.gallery.slice(1, 5).map((img, i) => (
                      <div key={i} className="h-20 sm:h-24 overflow-hidden rounded-lg">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content description */}
                <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest text-[#8BC030] mb-2">
                      {room.number}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-3">
                      {room.fullName}
                    </h3>
                    <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                      {room.short}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                      Wyposażenie pokoju:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600 mb-8">
                      {room.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#8BC030] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/pokoje/${room.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#EAF3DC] hover:bg-[#8BC030] text-[#53721D] hover:text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors text-center"
                    >
                      <span>Wszystkie zdjęcia ({room.gallery.length})</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      to={`/rezerwacja?cabin=${room.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
                    >
                      <Calendar size={15} />
                      <span>Rezerwuj</span>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* House Common Areas & Technical Info */}
      <section className="py-20 bg-[#F4F9EB] border-t border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Do dyspozycji gości</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">
              Części wspólne i otoczenie
            </h2>
            <p className="text-gray-600 font-light">
              Niezależnie od wybranego pokoju, każdy nasz gość ma swobodny dostęp do bogatego zaplecza rekreacyjnego i kuchennego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseInfo.map((info, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E1E9D5] shadow-soft">
                <h3 className="text-lg font-serif font-bold text-[#53721D] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
                  {info.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
                  {info.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8BC030] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick links to pricing & contact */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-[#E1E9D5] shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">Sprawdź aktualny cennik lub zapytaj o wolny termin</h3>
              <p className="text-sm text-gray-600 font-light mt-1">Ceny różnią się w zależności od sezonu (Wielkanoc, Majówka, Boże Ciało, Weekendy, Sylwester).</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/cennik"
                className="bg-[#53721D] hover:bg-[#3E5C17] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Cennik Sezonowy
              </Link>
              <Link
                to="/kontakt"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Kontakt i zadatek
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Apartments;
