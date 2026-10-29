import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { pricing, contact } from '../data/site';
import { Calendar, CreditCard, Info, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Cennik Sezonowy"
        subtitle="Przejrzyste zasady i atrakcyjne ceny wypoczynku w rejonie Czarnej Góry."
        isHome={false}
        bgImage="/assets/images/ogrod-altana-wnetrze.webp"
        badge="Domek Górski Strumień • Cennik"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Intro notice */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E9D5] shadow-soft mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF3DC] text-[#53721D] flex items-center justify-center shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-gray-900">
                Informacje o cenniku i zasadach wynajmu
              </h2>
              <p className="text-sm text-gray-600 font-light mt-1">
                {pricing.validity}. Ceny dotyczą wynajmu poszczególnych pokoi. Obiekt nie jest wynajmowany w całości.
              </p>
              <p className="text-xs text-[#53721D] font-semibold mt-1">
                • Zapraszamy osoby dorosłe oraz dzieci od 10. roku życia (brak możliwości pobytu dzieci poniżej 10 lat).
              </p>
            </div>
          </div>

          <Link
            to="/rezerwacja"
            className="shrink-0 bg-[#8BC030] hover:bg-[#74A425] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all"
          >
            Sprawdź dostępność
          </Link>
        </div>

        {/* Pricing Tables for each seasonal group */}
        <div className="space-y-12">
          {pricing.groups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E1E9D5] shadow-soft"
            >
              {/* Season banner header */}
              <div className="bg-[#53721D] p-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#AED864]">Okres / Sezon:</span>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  {group.periods.map((period, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-white/15 px-3 py-1 rounded-lg text-sm sm:text-base font-semibold"
                    >
                      {period}
                    </span>
                  ))}
                </div>
              </div>

              {/* Table of rooms */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#F4F9EB] text-[#2D4412] uppercase text-xs font-bold tracking-wider border-b border-[#E1E9D5]">
                      <th className="py-4 px-6 w-1/3">Pokój</th>
                      <th className="py-4 px-6">Stawka za pobyt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricing.rooms.map((room, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-6 font-serif font-bold text-gray-900">
                          {room.label}
                        </td>
                        <td className="py-4 px-6 text-gray-700 font-medium">
                          {group.prices[rIdx]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Deposit & Bank account details */}
        <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#53721D]">
                <CreditCard size={16} className="text-[#8BC030]" />
                <span>Płatność i rezerwacja</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                Wpłata zadatku
              </h3>
              <p className="text-sm text-gray-600 font-light max-w-xl">
                {contact.depositInfo}:
              </p>
              <div className="p-4 bg-[#F4F9EB] rounded-2xl border border-[#E1E9D5] inline-block">
                <span className="text-xs text-gray-500 uppercase tracking-wider block font-semibold mb-1">
                  Konto w {contact.bankName}:
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#2D4412] select-all">
                  {contact.bankAccount}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/rezerwacja"
                className="bg-[#8BC030] hover:bg-[#74A425] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all text-center"
              >
                Przejdź do formularza rezerwacji
              </Link>
              <a
                href={contact.phoneHref}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3.5 rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-[#53721D]" />
                <span>Zadzwoń: {contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Pricing;
