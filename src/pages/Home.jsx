import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { 
  intro, 
  highlights, 
  rooms, 
  commonAreas, 
  garden, 
  distances, 
  contact,
  about 
} from '../data/site';
import { 
  BedDouble, 
  Mountain, 
  Flame, 
  CookingPot, 
  Gamepad2, 
  Wifi, 
  Car, 
  Home as HomeIcon,
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Trees,
  Compass
} from 'lucide-react';

const iconMap = {
  BedDouble: BedDouble,
  Mountain: Mountain,
  Flame: Flame,
  CookingPot: CookingPot,
  Gamepad2: Gamepad2,
  Wifi: Wifi,
  Car: Car,
  Home: HomeIcon,
};

const Home = () => {
  return (
    <div className="bg-[#FAFBF8]">
      {/* Hero Section */}
      <Hero
        title="Domek Górski Strumień"
        subtitle="Zapraszamy w góry o każdej porze roku w rejon Czarnej Góry na Ziemi Kłodzkiej. Cisza, czyste powietrze, potok Janówka i niezapomniane widoki."
        isHome={true}
        bgImage="/assets/images/ogrod-altana.webp"
        badge="Stronie Śląskie – Wieś • 3 km od stacji narciarskiej Czarna Góra"
      />

      {/* Search Bar (Floating) */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 sm:-mt-12 relative z-30 mb-20">
        <SearchBar />
      </div>

      {/* Witamy Serdecznie / About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3DC] text-[#53721D] text-xs font-bold uppercase tracking-wider">
              <Trees size={15} />
              <span>Ziemia Kłodzka • Masyw Śnieżnika</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {intro.title}
            </h2>

            <p className="text-lg text-[#53721D] font-medium leading-relaxed">
              {intro.lead}
            </p>

            <p className="text-gray-600 leading-relaxed font-light text-base">
              {intro.location} Wokół roztaczają się wspaniałe panoramy na pasmo Czarnej Góry i Żmijowca, górskie łąki i pachnące lasy. To idealne miejsce na ucieczkę od zgiełku miasta, gdzie jesienią słychać rykowiska jeleni, a zimą stoki narciarskie są na wyciągnięcie ręki.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/o-nas"
                className="inline-flex items-center gap-2 text-[#53721D] font-bold text-sm hover:underline"
              >
                <span>Przeczytaj naszą historię i poznaj gospodynię</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/ogrod-dziedziniec.webp"
                alt="Dziedziniec Domku Górski Strumień"
                className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-[#AED864] font-semibold">Gospodyni</span>
                  <h3 className="font-serif text-xl font-bold">{contact.owners}</h3>
                  <p className="text-xs text-gray-300">Stronie Śląskie – Wieś, ul. Leśna 2</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E1E9D5] hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#8BC030] text-white flex items-center justify-center font-bold text-lg">
                16
              </div>
              <div className="text-xs">
                <span className="block font-bold text-gray-900 text-sm">Miejsc noclegowych</span>
                <span className="text-gray-500">w 5 komfortowych pokojach</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-[#F4F9EB] border-y border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Komfort i Wygoda</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">
              Wszystko, czego potrzebujesz do udanego wypoczynku
            </h2>
            <p className="text-gray-600 font-light text-base">
              Domek stworzony dla osób szukających ciszy i regeneracji w górach, par oraz rodzin ze starszymi dziećmi (od 10 lat).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || HomeIcon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E1E9D5] shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3DC] text-[#53721D] group-hover:bg-[#8BC030] group-hover:text-white transition-colors flex items-center justify-center mb-5">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Pokoje z łazienkami</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-2">
              Nasze Pokoje
            </h2>
            <p className="text-gray-600 font-light mt-3 max-w-xl">
              Oferujemy 5 przytulnych pokoi z prywatnymi łazienkami, TV i Wi-Fi, w tym 3 pokoje z widokiem na stoki Czarnej Góry oraz studio z aneksem kuchennym i balkonem.
            </p>
          </div>
          <Link
            to="/pokoje"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#53721D] hover:bg-[#3E5C17] px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0"
          >
            <span>Wszystkie pokoje</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.slug}
              className="bg-white rounded-3xl overflow-hidden border border-[#E1E9D5] shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.cover.src}
                  alt={room.cover.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#53721D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {room.number}
                </div>
                <div className="absolute top-4 right-4 bg-[#8BC030] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
                  {room.capacityLabel}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[#53721D] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-5 line-clamp-2">
                    {room.short}
                  </p>
                  
                  <ul className="space-y-1.5 text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
                    {room.features.slice(1, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#8BC030] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    to={`/pokoje/${room.slug}`}
                    className="text-xs uppercase font-bold tracking-wider text-[#53721D] hover:text-[#8BC030] transition-colors flex items-center gap-1.5"
                  >
                    <span>Szczegóły pokoju</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to={`/rezerwacja?cabin=${room.id}`}
                    className="bg-[#EAF3DC] hover:bg-[#8BC030] text-[#53721D] hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
                  >
                    Rezerwuj
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Information Card - Quiet Stay & Policy */}
          <div className="bg-gradient-to-br from-[#2D4412] to-[#1C2B0B] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#AED864]">Komfortowy wypoczynek</span>
              <h3 className="text-3xl font-serif font-bold mt-2 mb-4">
                Oaza Spokoju i Ciszy
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                Domek Górski Strumień to kameralne miejsce stworzone z myślą o wypoczynku w harmonii z górską przyrodą. Wynajmujemy wyłącznie niezależne pokoje gościnne z prywatnymi łazienkami.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#AED864]" /> Przyjmujemy gości od 10. roku życia
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#AED864]" /> 5 niezależnych pokoi z łazienkami i TV
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#AED864]" /> Wspólna kuchnia z jadalnią, taras i ogród
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/rezerwacja"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white py-3.5 px-6 rounded-xl text-sm font-bold tracking-wide uppercase transition-all"
              >
                <Calendar size={16} />
                <span>Sprawdź wolne terminy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Areas & Garden Strip */}
      <section className="py-20 bg-white border-t border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Przestrzeń wspólna</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">
              Kuchnia, salon z kominkiem i piękny ogród
            </h2>
            <p className="text-gray-600 font-light">
              Do wyłącznej dyspozycji gości przygotowaliśmy przestronny parter z tarasem oraz zagospodarowany ogród z tradycyjną wędzarnią.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-2xl overflow-hidden group shadow-md h-64">
              <img
                src="/assets/images/wnetrze-kuchnia-jadalnia.webp"
                alt="W pełni wyposażona kuchnia z jadalnią"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-white">
                <div>
                  <h4 className="font-serif font-bold text-base">Kuchnia z jadalnią</h4>
                  <p className="text-xs text-gray-300">Duża lodówka, kuchenka gazowa, wyjście na taras</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group shadow-md h-64">
              <img
                src="/assets/images/wnetrze-salonik-pianino.webp"
                alt="Salonik z kominkiem i zabytkowym pianinem"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-white">
                <div>
                  <h4 className="font-serif font-bold text-base">Salonik z kominkiem</h4>
                  <p className="text-xs text-gray-300">Zabytkowe pianino, wygodne fotele i ciepło ognia</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group shadow-md h-64">
              <img
                src="/assets/images/wnetrze-pokoj-zabaw.webp"
                alt="Pokój zabaw z piłkarzykami i TV"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-white">
                <div>
                  <h4 className="font-serif font-bold text-base">Pokój zabaw</h4>
                  <p className="text-xs text-gray-300">Stół do piłkarzyków i TV na wspólne wieczory</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group shadow-md h-64">
              <img
                src="/assets/images/ogrod-altana.webp"
                alt="Ogród z altaną, grillem i wędzarnią"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 text-white">
                <div>
                  <h4 className="font-serif font-bold text-base">Altana z grillem</h4>
                  <p className="text-xs text-gray-300">Wędzarnia, kwiaty i widok na Masyw Śnieżnika</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#53721D] hover:text-[#8BC030] hover:underline"
            >
              <span>Zobacz pełną galerię zdjęć domku i ogrodu</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Distances & Surroundings Section */}
      <section className="py-24 bg-[#FAFBF8] border-t border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3DC] text-[#53721D] text-xs font-bold uppercase tracking-wider">
                <Compass size={15} />
                <span>Lokalizacja & Wycieczki</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
                Doskonała baza wypadowa na Ziemi Kłodzkiej
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Nasz domek usytuowany jest przy drodze ze Stronia Śląskiego na Sienną, skąd w kilka minut dotrzesz na stoki Czarnej Góry, nad zalew w Starej Morawie lub do słynnej Jaskini Niedźwiedziej w Kletnie.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-[#E1E9D5] shadow-sm">
                <h4 className="font-serif font-bold text-gray-900 mb-2">Zimą i latem:</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Zimą – raj dla narciarzy (Czarna Góra 3 km, trasy biegowe na Przełęczy Puchaczówka). Latem – kąpielisko z piaszczystą plażą, kryty basen, liczne szlaki rowerowe (Singletrack Glacensis) oraz wędrówki na Śnieżnik (1425 m n.p.m.).
                </p>
              </div>

              <Link
                to="/atrakcje"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#53721D] hover:underline"
              >
                <span>Więcej atrakcji w okolicy →</span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {distances.map((dist, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-[#E1E9D5] shadow-soft flex items-center gap-3.5 hover:border-[#8BC030] transition-colors"
                  >
                    <div className="w-12 h-10 rounded-lg bg-[#EAF3DC] text-[#53721D] font-bold text-sm flex items-center justify-center shrink-0">
                      {dist.km} km
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">
                      {dist.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote / Nature Section */}
      <section className="py-20 bg-[#2D4412] text-white text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#AED864] font-bold">Magia Górskiej Wsi</span>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic font-normal leading-relaxed text-gray-100">
            „Cisza taka, że słychać skrzekot derkaczy, kukanie kukułek, rykowiska jeleni w jesienną noc, cudowne widoki na Kotlinę Strońską oraz możliwość obserwacji gwiazd na czarnym nocnym niebie...”
          </blockquote>
          <p className="text-sm text-[#AED864] font-medium tracking-wider uppercase">
            — Łucja Kozińska, Domek Górski Strumień
          </p>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#53721D] to-[#8BC030] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold">
              Zaplanuj swój wypoczynek w górach
            </h3>
            <p className="text-white/90 text-sm sm:text-base font-light">
              Skontaktuj się z nami telefonicznie, wyślij zapytanie przez formularz lub zarezerwuj termin online. Czekamy na Ciebie o każdej porze roku!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/rezerwacja"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#53721D] hover:bg-gray-100 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <Calendar size={18} />
              <span>Zarezerwuj teraz</span>
            </Link>

            <a
              href={contact.phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2D4412] hover:bg-[#1C2B0B] text-white px-7 py-4 rounded-xl text-sm font-bold transition-all"
            >
              <Phone size={18} className="text-[#AED864]" />
              <span>{contact.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
