import React, { useState } from 'react';
import Hero from '../components/Hero';
import { contact } from '../data/site';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard, 
  Send, 
  CheckCircle2, 
  Navigation,
  MessageSquare,
  Clock,
  Car
} from 'lucide-react';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cabin_id: null,
          start_date: 'Wiadomość z formularza kontaktowego',
          end_date: '',
          guest_name: formData.name,
          guest_email: formData.email,
          guest_phone: formData.phone,
          guest_count: 1,
          children_under_3: 0,
          children_over_3: 0,
          message: `Temat: ${formData.subject}\n\n${formData.message}`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Kontakt i Dojazd"
        subtitle="Skontaktuj się z nami w sprawie rezerwacji, wolnych terminów lub wskazówek dojazdu. Chętnie odpowiemy na wszystkie pytania."
        isHome={false}
        bgImage="/assets/images/dojazd.webp"
        badge="Stronie Śląskie – Wieś • ul. Leśna 2"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Bank Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Dane Gospodarzy</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Domek Górski Strumień
              </h2>
              <p className="text-sm text-[#53721D] font-semibold">
                {contact.owners}
              </p>

              <div className="space-y-4 pt-2 text-sm text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">Adres:</span>
                    <p className="font-semibold text-gray-900">{contact.city}</p>
                    <p>{contact.street}</p>
                    <p className="text-xs text-gray-500">{contact.region}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">Telefon:</span>
                    <a href={contact.phoneHref} className="font-bold text-gray-900 hover:text-[#53721D] text-base">
                      {contact.phone}
                    </a>
                    <p className="text-xs text-gray-500">Odbieramy i odpisujemy także na SMS</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">Adresy e-mail:</span>
                    <a href={`mailto:${contact.emails[0]}`} className="font-semibold text-gray-900 hover:text-[#53721D] block">
                      {contact.emails[0]}
                    </a>
                    <a href={`mailto:${contact.emails[1]}`} className="text-xs text-gray-500 hover:text-[#53721D]">
                      {contact.emails[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={contact.phoneHref}
                  className="flex-1 bg-[#8BC030] hover:bg-[#74A425] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={15} />
                  <span>Zadzwoń</span>
                </a>
                <a
                  href={contact.smsHref}
                  className="flex-1 bg-[#F4F9EB] hover:bg-[#EAF3DC] text-[#53721D] py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={15} />
                  <span>Wyślij SMS</span>
                </a>
              </div>
            </div>

            {/* Bank Deposit Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#53721D]">
                <CreditCard size={18} className="text-[#8BC030]" />
                <span>Płatność za rezerwację</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Wpłata zadatku
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {contact.depositInfo} w {contact.bankName}:
              </p>
              <div className="p-3.5 bg-[#F4F9EB] rounded-xl border border-[#E1E9D5] font-mono text-sm sm:text-base font-bold text-[#2D4412] select-all break-all">
                {contact.bankAccount}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E9D5] shadow-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Napisz do nas</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-1 mb-6">
                Formularz kontaktowy
              </h2>

              {status === 'success' ? (
                <div className="p-8 bg-[#F4F9EB] border border-[#E1E9D5] rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-[#8BC030] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Dziękujemy za wiadomość!</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Twoja wiadomość została pomyślnie wysłana. Skontaktujemy się z Tobą najszybciej jak to możliwe.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-4 bg-[#53721D] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Imię i nazwisko <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="np. Jan Kowalski"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030] focus:ring-2 focus:ring-[#8BC030]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Adres e-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="np. jan@poczta.pl"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030] focus:ring-2 focus:ring-[#8BC030]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Numer telefonu
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="np. +48 600 000 000"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030] focus:ring-2 focus:ring-[#8BC030]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Temat wiadomości
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="np. Zapytanie o termin w lipcu"
                        className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030] focus:ring-2 focus:ring-[#8BC030]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Treść wiadomości <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wpisz treść wiadomości, np. planowany termin, liczba osób, pytania..."
                      className="w-full bg-[#FAFBF8] border border-[#E1E9D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8BC030] focus:ring-2 focus:ring-[#8BC030]/20 transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-xs border border-red-200">
                      Wystąpił błąd podczas wysyłania wiadomości. Skontaktuj się bezpośrednio pod numerem {contact.phone}.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#8BC030] hover:bg-[#74A425] text-white py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#8BC030]/25 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>{status === 'submitting' ? 'Wysyłanie...' : 'Wyślij wiadomość'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map and Road Directions Section */}
      <section className="py-20 bg-white border-t border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Lokalizacja na mapie</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">
              Jak dojechać do Domku Górski Strumień
            </h2>
            <p className="text-gray-600 font-light">
              Do domku prowadzi asfaltowa, oświetlona droga. Przed samym domkiem znajdują się bezpłatne miejsca postojowe na zamykanej posesji.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Directions Image */}
            <div className="lg:col-span-5 bg-[#FAFBF8] p-4 rounded-3xl border border-[#E1E9D5] shadow-soft">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/assets/images/dojazd.webp"
                  alt="Zjazd do Domku Górski Strumień z drogi wojewódzkiej DW392"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#53721D]">
                  <Car size={16} />
                  <span>Wskazówka dojazdu</span>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Jadąc drogą wojewódzką DW392 ze Stronia Śląskiego w kierunku Siennej (Czarnej Góry), skręć w prawo w oświetloną ulicę Leśną. Domek Górski Strumień znajduje się pod numerem 2.
                </p>
                <a
                  href={contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#53721D] hover:underline pt-2"
                >
                  <Navigation size={14} />
                  <span>Otwórz w nawigacji Google Maps →</span>
                </a>
              </div>
            </div>

            {/* Google Maps Iframe (Exact from domekgorskistrumien.pl) */}
            <div className="lg:col-span-7 h-[460px] rounded-3xl overflow-hidden border border-[#E1E9D5] shadow-xl">
              <iframe
                title="Mapa dojazdu Domek Górski Strumień"
                src={contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
