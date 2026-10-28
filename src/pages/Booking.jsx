import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { format, parseISO, isBefore } from 'date-fns';
import { pl } from 'date-fns/locale';
import SearchBar from '../components/SearchBar';
import Calendar from '../components/Calendar';
import Hero from '../components/Hero';
import { rooms, contact } from '../data/site';
import { 
  Calendar as CalendarIcon, 
  Users, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  CreditCard, 
  ShieldCheck,
  Home as HomeIcon,
  Send
} from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const wholeHouseOption = {
  id: 6,
  name: "Cały domek na wyłączność",
  fullName: "Wynajem całego domku (do 16 osób)",
  capacity: 16,
  capacityLabel: "Cały dom do 16 osób",
  desc: "5 pokoi z łazienkami, kuchnia z jadalnią i tarasem, salonik z kominkiem, pokój zabaw z piłkarzykami, ogród z altaną i wędzarnią.",
  cover: { src: "/assets/images/ogrod-altana.webp", caption: "Cały Domek Górski Strumień" },
  features: [
    "Wszystkie 5 pokoi z prywatnymi łazienkami",
    "Duża kuchnia z jadalnią i wyjściem na taras",
    "Salonik z kominkiem i zabytkowym pianinem",
    "Pokój zabaw z piłkarzykami i TV",
    "Ogród z altaną, grillem i tradycyjną wędzarnią",
    "Ogrodzona posesja z bezpłatnym parkingiem"
  ]
};

const allCabinOptions = [...rooms, wholeHouseOption];

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const startParam = searchParams.get('start');
  const endParam = searchParams.get('end');
  const guestsParam = searchParams.get('guests') || '2';
  const cabinParam = searchParams.get('cabin');

  const [availableCabins, setAvailableCabins] = useState([]);
  const [fullyBookedDates, setFullyBookedDates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestCount, setGuestCount] = useState(guestsParam);
  const [childrenUnder3, setChildrenUnder3] = useState('0');
  const [childrenOver3, setChildrenOver3] = useState('0');
  const [message, setMessage] = useState('');
  const [selectedCabin, setSelectedCabin] = useState(cabinParam ? parseInt(cabinParam, 10) : 1);
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending' | 'success' | 'error'
  
  const navigate = useNavigate();
  const [selectionPhase, setSelectionPhase] = useState('start');
  const [tempStart, setTempStart] = useState(null);

  useEffect(() => {
    if (cabinParam) {
      setSelectedCabin(parseInt(cabinParam, 10));
    }
  }, [cabinParam]);

  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const cabinsRes = await fetch(`${API_URL}/api/cabins`);
        const cabinsData = await cabinsRes.json();
        
        const blocksRes = await fetch(`${API_URL}/api/availability`);
        const blocks = await blocksRes.json();

        // Calculate blocked dates
        const cabinCount = cabinsData.length || 6;
        const blockCountsByDate = {};
        blocks.forEach(b => {
          const d = b.start_date;
          blockCountsByDate[d] = (blockCountsByDate[d] || 0) + 1;
        });
        
        const fullyBooked = Object.keys(blockCountsByDate).filter(date => blockCountsByDate[date] >= cabinCount);
        setFullyBookedDates(fullyBooked);

        if (!startParam || !endParam) {
          setAvailableCabins(allCabinOptions);
          setLoading(false);
          return;
        }

        // Filter available cabins
        const available = allCabinOptions.filter(cabin => {
          const cabinBlocks = blocks.filter(b => b.cabin_id === cabin.id);
          const isBlocked = cabinBlocks.some(block => {
            return (
              (startParam <= block.end_date && startParam >= block.start_date) ||
              (endParam <= block.end_date && endParam >= block.start_date) ||
              (startParam <= block.start_date && endParam >= block.end_date)
            );
          });
          return !isBlocked;
        });

        setAvailableCabins(available);
      } catch (err) {
        console.error("Failed to fetch availability", err);
        setAvailableCabins(allCabinOptions);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [startParam, endParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCabin) {
      alert("Proszę wybrać pokój lub cały domek");
      return;
    }
    
    setSubmitStatus('sending');
    try {
      const selectedOption = allCabinOptions.find(c => c.id === selectedCabin);
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cabin_id: selectedCabin,
          start_date: startParam || 'Do uzgodnienia',
          end_date: endParam || '',
          guest_name: guestName,
          guest_email: guestEmail,
          guest_phone: guestPhone,
          guest_count: guestCount,
          children_under_3: childrenUnder3,
          children_over_3: childrenOver3,
          message: `Wybrany pokój: ${selectedOption?.fullName || selectedCabin}\n\n${message}`
        })
      });
      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const displayDate = (isoStr) => {
    if (!isoStr) return '';
    try {
      return format(parseISO(isoStr), 'dd MMMM yyyy', { locale: pl });
    } catch {
      return isoStr;
    }
  };

  const handleCalendarClick = (day) => {
    if (selectionPhase === 'start') {
      setTempStart(day);
      setSelectionPhase('end');
    } else {
      if (isBefore(day, tempStart) || day.getTime() === tempStart.getTime()) {
         setTempStart(day);
      } else {
         const startStr = format(tempStart, 'yyyy-MM-dd');
         const endStr = format(day, 'yyyy-MM-dd');
         navigate(`/rezerwacja?start=${startStr}&end=${endStr}&guests=${guestCount}${selectedCabin ? `&cabin=${selectedCabin}` : ''}`);
         setTempStart(null);
         setSelectionPhase('start');
      }
    }
  };

  const currentSelectedDates = tempStart 
    ? [tempStart] 
    : [startParam ? parseISO(startParam) : null, endParam ? parseISO(endParam) : null].filter(Boolean);

  const currentOption = allCabinOptions.find(c => c.id === selectedCabin) || allCabinOptions[0];

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Rezerwacja Pobytu"
        subtitle="Zarezerwuj pokój lub cały domek na wyłączność. Szybki kontakt, bez pośredników i ukrytych opłat."
        isHome={false}
        bgImage="/assets/images/ogrod-altana.webp"
        badge="Domek Górski Strumień • Rezerwacja Bezpośrednia"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Selected date overview banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E9D5] shadow-soft mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Wybrany termin:</span>
            <div className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mt-1">
              {startParam && endParam ? (
                <span>{displayDate(startParam)} — {displayDate(endParam)}</span>
              ) : (
                <span className="text-gray-500 font-sans text-lg font-normal">Wybierz daty w kalendarzu poniżej</span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Zalecany minimalny czas pobytu: 3-4 doby w okresach świątecznych i długich weekendach.
            </p>
          </div>

          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 bg-[#F4F9EB] hover:bg-[#EAF3DC] text-[#53721D] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            <Phone size={16} />
            <span>Zadzwoń: {contact.phone}</span>
          </a>
        </div>

        {/* Interactive Calendar Section */}
        <div className="mb-16 bg-white p-6 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Kalendarz terminów
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
              Kliknij datę przyjazdu, a następnie datę wyjazdu, aby zaktualizować termin.
            </p>
          </div>

          <div className="flex justify-center">
            <Calendar
              selectedDates={currentSelectedDates}
              blockedDates={fullyBookedDates}
              publicStyles={true}
              readOnly={false}
              onChange={handleCalendarClick}
              monthsCount={1}
              className="max-w-md w-full shadow-none border border-[#E1E9D5]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-[#8BC030]"></div>
              <span>Twój wybrany pobyt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-red-100 border border-red-200"></div>
              <span>Brak wolnych miejsc</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-lg bg-white border border-gray-200"></div>
              <span>Dostępne</span>
            </div>
          </div>
        </div>

        {/* Form and Room Picker */}
        {submitStatus === 'success' ? (
          <div className="bg-white border border-[#E1E9D5] shadow-xl p-10 rounded-3xl text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-[#8BC030] text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-3xl text-gray-900 font-serif font-bold">Dziękujemy za zapytanie!</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Twoje zgłoszenie rezerwacyjne zostało przekazane gospodarzom Domku Górski Strumień. Skontaktujemy się z Tobą telefonicznie lub mailowo w celu potwierdzenia rezerwacji i uzgodnienia wpłaty zadatku.
            </p>
            <div className="p-4 bg-[#F4F9EB] rounded-2xl border border-[#E1E9D5] text-xs text-gray-700">
              <strong>Zadatek (30%):</strong> mBank {contact.bankAccount}
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-4 bg-[#53721D] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Wyślij kolejne zapytanie
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Rooms list selection */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Wybierz pokój lub cały domek
                </h2>
                <span className="text-xs text-[#53721D] font-bold">
                  {allCabinOptions.length} opcji
                </span>
              </div>

              {allCabinOptions.map((opt) => {
                const isSelected = selectedCabin === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedCabin(opt.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-4 ${
                      isSelected
                        ? 'border-[#8BC030] bg-[#F4F9EB] ring-2 ring-[#8BC030]/20 shadow-md'
                        : 'border-[#E1E9D5] bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="w-24 sm:w-32 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={opt.cover.src}
                        alt={opt.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs uppercase font-bold text-[#8BC030]">
                            {opt.number || 'Opcja specjalna'}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#E1E9D5] text-gray-700">
                            {opt.capacityLabel}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 mt-0.5">
                          {opt.fullName}
                        </h3>
                        <p className="text-xs text-gray-600 font-light line-clamp-2 mt-1">
                          {opt.desc || opt.short}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                        <span>Prywatna łazienka • TV • Wi-Fi</span>
                        <span className={`font-bold ${isSelected ? 'text-[#53721D]' : 'text-gray-400'}`}>
                          {isSelected ? '✓ Wybrany' : 'Wybierz'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#E1E9D5] shadow-xl p-8 rounded-3xl sticky top-28 space-y-6">
                
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Formularz rezerwacji</span>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">
                    Prześlij dane do rezerwacji
                  </h3>
                  <div className="mt-3 p-3 bg-[#F4F9EB] rounded-xl border border-[#E1E9D5] text-xs text-[#53721D]">
                    Wybrana opcja: <strong>{currentOption.fullName}</strong>
                  </div>
                </div>

                {/* Instant SMS Quick Button for Smartphoners */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                    📱 <strong>Najszybsza rezerwacja przez SMS:</strong> Kliknij przycisk poniżej, aby otworzyć gotową wiadomość w telefonie!
                  </p>
                  <a
                    href={`sms:+48509725055?body=${encodeURIComponent(
                      `Dzień dobry, chciał(a)bym zarezerwować ${currentOption.fullName} w Domku Górski Strumień w terminie od ${displayDate(startParam) || '...'} do ${displayDate(endParam) || '...'} dla ${guestCount} osób. Czy termin jest dostępny?`
                    )}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all text-center"
                  >
                    <MessageSquare size={16} />
                    <span>Wyślij SMS z zapytaniem (+48 509 725 055)</span>
                  </a>
                </div>

                {/* Web form */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Imię i nazwisko <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder="np. Anna Nowak"
                      className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={guestEmail}
                        onChange={e => setGuestEmail(e.target.value)}
                        placeholder="np. anna@wp.pl"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Telefon kontaktowy <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        placeholder="np. +48 500 000 000"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                        Liczba osób
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="16"
                        value={guestCount}
                        onChange={e => setGuestCount(e.target.value)}
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                        Dzieci do 3 lat
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={childrenUnder3}
                        onChange={e => setChildrenUnder3(e.target.value)}
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                        Dzieci pow. 3 lat
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={childrenOver3}
                        onChange={e => setChildrenOver3(e.target.value)}
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-3 py-2.5 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Wiadomość / uwagi do rezerwacji
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Pytania o dostawkę, orientacyjną godzinę przyjazdu, łóżeczko dla dziecka..."
                      className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="w-full bg-[#53721D] hover:bg-[#3E5C17] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>{submitStatus === 'sending' ? 'Wysyłanie zgłoszenia...' : 'Wyślij zapytanie o rezerwację'}</span>
                  </button>
                </form>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default BookingPage;
