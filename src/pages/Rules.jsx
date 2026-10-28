import React from 'react';
import Hero from '../components/Hero';
import { contact } from '../data/site';
import { Clock, ShieldCheck, Flame, Trees, Sparkles, Phone, CreditCard } from 'lucide-react';

const Rules = () => {
  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Regulamin Pobytu"
        subtitle="Zasady i wskazówki dla zapewnienia komfortowego i bezpiecznego wypoczynku wszystkim gościom Domku Górski Strumień."
        isHome={false}
        bgImage="/assets/images/ogrod-altana.webp"
        badge="Domek Górski Strumień • Regulamin"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
        
        {/* Hours Box */}
        <div className="bg-white p-8 rounded-3xl border border-[#E1E9D5] shadow-soft">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Clock className="text-[#8BC030]" size={26} />
            <span>Doba hotelowa i zameldowanie</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="p-4 bg-[#F4F9EB] rounded-2xl border border-[#E1E9D5]">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block mb-1">Przyjazd (Check-in)</span>
              <span className="text-2xl font-serif font-bold text-[#53721D]">od 15:00</span>
              <p className="text-xs text-gray-600 mt-2 font-light">
                Prosimy o orientacyjne poinformowanie gospodarzy o planowanej godzinie przyjazdu pod numerem {contact.phone}.
              </p>
            </div>

            <div className="p-4 bg-[#F4F9EB] rounded-2xl border border-[#E1E9D5]">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-500 block mb-1">Wyjazd (Check-out)</span>
              <span className="text-2xl font-serif font-bold text-[#53721D]">do 11:00</span>
              <p className="text-xs text-gray-600 mt-2 font-light">
                Wymeldowanie i zwrot kluczy następuje w godzinach porannych. W miarę dostępności możliwy jest późniejszy wyjazd po uzgodnieniu.
              </p>
            </div>
          </div>
        </div>

        {/* Rules Sections */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-8">
          
          <div>
            <h3 className="text-lg font-serif font-bold text-[#53721D] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Rezerwacja i płatność
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-light leading-relaxed">
              <li>• Potwierdzeniem rezerwacji pobytu jest wpłata zadatku w wysokości minimum 30% wartości pobytu na rachunek mBank: <strong className="font-mono text-gray-800">{contact.bankAccount}</strong>.</li>
              <li>• Pozostała kwota rozliczana jest w dniu przyjazdu.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-serif font-bold text-[#53721D] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Cisza nocna i szacunek dla innych gości
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-light leading-relaxed">
              <li>• W domku obowiązuje cisza nocna w godzinach <strong>22:00 – 06:00</strong>.</li>
              <li>• Goście zobowiązani są do kulturalnego zachowania, niezakłócającego spokoju innych wypoczywających osób i okolicznych mieszkańców.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-serif font-bold text-[#53721D] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Bezpieczeństwo przeciwpożarowe
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-light leading-relaxed">
              <li>• Wewnątrz całego domku oraz w pokojach obowiązuje <strong>bezwzględny zakaz palenia tytoniu i e-papierosów</strong>. Miejsca do palenia wyznaczone są na zewnątrz na tarasie i w ogrodzie.</li>
              <li>• Korzystanie z kominka w saloniku oraz grilla i wędzarni w altanie wymaga zachowania szczególnych środków ostrożności.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-serif font-bold text-[#53721D] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Części wspólne i wyposażenie
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-light leading-relaxed">
              <li>• Kuchnia na parterze jest do wspólnego użytku – prosimy o pozostawianie naczyń i blatów w czystości po przygotowaniu posiłków.</li>
              <li>• Pokój zabaw z piłkarzykami i TV służy wszystkim gościom. Dzieci powinny przebywać pod opieką dorosłych.</li>
              <li>• Sprzęt narciarski prosimy pozostawiać na specjalnym stojaku w korytarzu na parterze.</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-serif font-bold text-[#53721D] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8BC030]"></span>
              Posesja, parking i zwierzęta
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-light leading-relaxed">
              <li>• Przed domkiem znajdują się bezpłatne miejsca postojowe dla gości na ogrodzonej posesji. Prosimy o zamykanie bramy wjazdowej.</li>
              <li>• Przyjazd ze zwierzętami domowymi jest możliwy wyłącznie po wcześniejszym uzgodnieniu z gospodarzami w momencie rezerwacji.</li>
            </ul>
          </div>

        </div>

        {/* Contact box */}
        <div className="p-6 bg-[#F4F9EB] rounded-2xl border border-[#E1E9D5] flex items-center justify-between text-xs sm:text-sm text-gray-700">
          <span>Masz pytania dotyczące regulaminu lub szczególnych ustaleń?</span>
          <a
            href={contact.phoneHref}
            className="text-[#53721D] font-bold hover:underline shrink-0"
          >
            Zadzwoń: {contact.phone}
          </a>
        </div>

      </section>
    </div>
  );
};

export default Rules;
