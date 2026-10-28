import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { rooms, houseInfo, contact } from '../data/site';
import { 
  Users, 
  Wifi, 
  Tv, 
  Bath, 
  CheckCircle2, 
  Calendar, 
  ArrowLeft, 
  ArrowRight,
  Phone,
  Maximize2,
  X
} from 'lucide-react';

const RoomDetail = () => {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);
  const [activeImage, setActiveImage] = useState(null);

  if (!room) {
    return <Navigate to="/pokoje" replace />;
  }

  // Find next and previous room
  const currentIndex = rooms.findIndex((r) => r.slug === slug);
  const prevRoom = rooms[(currentIndex - 1 + rooms.length) % rooms.length];
  const nextRoom = rooms[(currentIndex + 1) % rooms.length];

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title={room.fullName}
        subtitle={`${room.capacityLabel} • Prywatna łazienka, TV, Wi-Fi`}
        isHome={false}
        bgImage={room.cover.src}
        badge={`Domek Górski Strumień • ${room.number}`}
      />

      {/* Navigation breadcrumb */}
      <div className="bg-white border-b border-[#E1E9D5] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <Link
            to="/pokoje"
            className="inline-flex items-center gap-2 text-[#53721D] font-bold hover:underline"
          >
            <ArrowLeft size={16} />
            <span>Wróć do listy wszystkich pokoi</span>
          </Link>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <Link to={`/pokoje/${prevRoom.slug}`} className="hover:text-[#53721D]">
              ← {prevRoom.number}
            </Link>
            <span>|</span>
            <Link to={`/pokoje/${nextRoom.slug}`} className="hover:text-[#53721D]">
              {nextRoom.number} →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main content: gallery and details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Gallery grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Zdjęcia pokoju ({room.gallery.length})
                </h2>
                <span className="text-xs text-gray-500 font-light">
                  Kliknij zdjęcie, aby powiększyć
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group h-64 border border-[#E1E9D5]"
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Specs & Description */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Opis i wyposażenie {room.fullName}
              </h2>
              
              <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg">
                {room.short}
              </p>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                  Szczegółowa specyfikacja:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {room.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-[#F4F9EB] p-3 rounded-xl border border-[#E1E9D5]">
                      <CheckCircle2 size={16} className="text-[#8BC030] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Common parts in the house */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft">
              <h3 className="text-xl font-serif font-bold text-[#53721D] mb-6">
                Dostęp do części wspólnych na parterze i w ogrodzie
              </h3>
              <div className="space-y-4 text-sm text-gray-600 font-light leading-relaxed">
                <p>
                  • <strong>Duża kuchnia z jadalnią:</strong> do wyłącznej dyspozycji turystów (duża lodówka, 4-palnikowa kuchenka gazowa, czajnik, naczynia, garnki) z bezpośrednim wyjściem na taras z kącikiem jadalnym i miejscem zabaw dla dzieci.
                </p>
                <p>
                  • <strong>Salonik z kominkiem:</strong> miejsce na relaks przy cieple domowego ogniska, zabytkowe pianino, wygodne fotele.
                </p>
                <p>
                  • <strong>Pokój zabaw:</strong> stół do piłkarzyków i TV – wspaniała rozrywka w chłodniejsze lub deszczowe dni.
                </p>
                <p>
                  • <strong>Ogród i posesja:</strong> zadaszona altanka, grill, tradycyjna wędzarnia, trawniki, kwiaty i bezpieczny bezpłatny parking na ogrodzonej posesji.
                </p>
                <p>
                  • <strong>Stojak na narty:</strong> bezpieczne przechowywanie sprzętu zimowego w korytarzu na parterze.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar Booking Box */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-3xl border border-[#E1E9D5] shadow-xl sticky top-28 space-y-6">
              
              <div className="border-b border-gray-100 pb-5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8BC030]">Rezerwacja pokoju</span>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">{room.fullName}</h3>
                <p className="text-sm text-gray-500 mt-1">{room.capacityLabel}</p>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Miejsca:</span>
                  <span className="font-bold text-gray-900">do {room.capacity} osób</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Łazienka:</span>
                  <span className="font-bold text-gray-900">W pokoju</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Multimedia:</span>
                  <span className="font-bold text-gray-900">TV + szybkie Wi-Fi</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500">Parking:</span>
                  <span className="font-bold text-green-700">Bezpłatny na posesji</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <Link
                  to={`/rezerwacja?cabin=${room.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  <Calendar size={18} />
                  <span>Zarezerwuj ten pokój</span>
                </Link>

                <Link
                  to="/cennik"
                  className="w-full flex items-center justify-center gap-2 bg-[#F4F9EB] hover:bg-[#EAF3DC] text-[#53721D] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Sprawdź cennik sezonowy</span>
                </Link>

                <a
                  href={contact.phoneHref}
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Phone size={16} className="text-[#8BC030]" />
                  <span>Zadzwoń: {contact.phone}</span>
                </a>
              </div>

              {/* Deposit note */}
              <div className="bg-[#FAFBF8] p-4 rounded-xl border border-[#E1E9D5] text-[11px] text-gray-600 leading-relaxed">
                <strong>Zadatek:</strong> Preferujemy wpłatę zadatku min. 30% na konto mBank:<br />
                <span className="font-mono text-gray-900 select-all font-semibold block mt-1">{contact.bankAccount}</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black p-2 rounded-full z-10"
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.caption}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-sm sm:text-base font-medium mt-3 text-center">
              {activeImage.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default RoomDetail;
