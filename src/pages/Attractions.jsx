import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { distances } from '../data/site';
import { 
  Mountain, 
  Trees, 
  Compass, 
  MapPin, 
  Sparkles, 
  ExternalLink,
  Waves,
  Sun,
  Snowflake,
  Bike
} from 'lucide-react';

const Attractions = () => {
  const featuredAttractions = [
    {
      title: "Ośrodek Narciarski Czarna Góra Resort",
      distance: "3 km",
      category: "Zima & Lato",
      desc: "Jeden z najnowocześniejszych ośrodków narciarskich w Polsce. Nowoczesne koleje linowe (m.in. Luxtorpeda), oświetlone trasy zjazdowe, snowpark oraz letni Bike Park i Alpine Coaster.",
      icon: Snowflake,
      badge: "Zaledwie 3 minuty autem!"
    },
    {
      title: "Zalew i Kąpielisko w Starej Morawie",
      distance: "2 km",
      category: "Woda & Rekreacja",
      desc: "Malowniczy zbiornik wodny z piaszczystą plażą, strzeżonym kąpieliskiem, molo, wieżą widokową, wypożyczalnią kajaków i rowerków wodnych oraz placem zabaw.",
      icon: Waves,
      badge: "Kąpielisko z plażą"
    },
    {
      title: "Jaskinia Niedźwiedzia i Kopalnia Uranu w Kletnie",
      distance: "7 km",
      category: "Geologia & Historia",
      desc: "Jedna z najpiękniejszych jaskiń krasowych w Europie z unikalnymi formami naciekowymi (stalaktyty, stalagmity) oraz podziemna trasa turystyczna w dawnej Kopalni Uranu.",
      icon: Compass,
      badge: "Cud natury"
    },
    {
      title: "Kryty Basen w Stroniu Śląskim",
      distance: "2 km",
      category: "Sport & Relaks",
      desc: "Kompleks sportowo-rekreacyjny w Stroniu Śląskim z pełnowymiarowym basenem, zjeżdżalnią, saunami i jacuzzi – idealny na każdą pogodę.",
      icon: Waves,
      badge: "Basen całoroczny"
    },
    {
      title: "Uzdrowisko Lądek-Zdrój",
      distance: "9 km",
      category: "Zdrowie & SPA",
      desc: "Jedno z najstarszych uzdrowisk w Europie ze słynnym Zakładem Przyrodoleczniczym „Wojciech” z marmurowym basenem termalnym, pijalnią wód i parkiem zdrojowym.",
      icon: Sparkles,
      badge: "Wody termalne"
    },
    {
      title: "Międzygórze – Wodospad Wilczki i Ogród Bajek",
      distance: "15 km",
      category: "Krajobraz & Natura",
      desc: "Klimatyczna wieś w stylu tyrolskim, drugi co do wysokości wodospad w polskich Sudetach (22 m) w głębokim wąwozie oraz uroczy Ogród Bajek na stoku Lesieńca.",
      icon: Trees,
      badge: "Klimat alpejski"
    },
    {
      title: "Dolna Morawa – Spacer w Chmurach i Most Sky Bridge 721",
      distance: "35 km",
      category: "Przygoda w Czechach",
      desc: "Widokowa wieża Sky Walk oraz najdłuższy na świecie wiszący most pieszy Sky Bridge 721, z którego roztaczają się zapierające dech w piersiach widoki na Masyw Śnieżnika.",
      icon: Mountain,
      badge: "Tuż za granicą"
    },
    {
      title: "Kopalnia Złota w Złotym Stoku",
      distance: "20 km",
      category: "Edukacja & Przygoda",
      desc: "Niezwykłe podziemne korytarze, jedyny w Polsce podziemny wodospad, spływ łodziami oraz płukanie prawdziwego złota – wspaniała atrakcja dla całej rodziny.",
      icon: Compass,
      badge: "Dla całej rodziny"
    },
    {
      title: "Szczeliniec Wielki i Błędne Skały (Góry Stołowe)",
      distance: "40 km",
      category: "Górskie Wędrówki",
      desc: "Skalne miasto i unikalny labirynt piaskowcowy w Parku Narodowym Gór Stołowych. Najwyższy szczyt Szczeliniec Wielki (919 m n.p.m.) z bajkowymi formacjami skalnymi.",
      icon: Mountain,
      badge: "Park Narodowy"
    }
  ];

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Okolica i Atrakcje"
        subtitle="Ziemia Kłodzka to jeden z najbogatszych turystycznie regionów w Polsce. Od stoków narciarskich po podziemne jaskinie i górskie kąpieliska."
        isHome={false}
        bgImage="/assets/images/ogrod-laki.webp"
        badge="Stronie Śląskie • Kotlina Kłodzka • Masyw Śnieżnika"
      />

      {/* Featured Attractions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Najciekawsze miejsca w pobliżu</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">
            Atrakcje na wyciągnięcie ręki
          </h2>
          <p className="text-gray-600 font-light">
            Domek Górski Strumień jest idealną bazą wypadową zarówno na krótki weekend, jak i dłuższy urlop z rodziną.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAttractions.map((att, idx) => {
            const Icon = att.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#E1E9D5] shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3DC] text-[#53721D] text-xs font-bold">
                      <Icon size={14} />
                      <span>{att.category}</span>
                    </span>
                    <span className="text-sm font-bold text-[#8BC030] bg-[#F4F9EB] px-3 py-1 rounded-lg">
                      {att.distance}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {att.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {att.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span className="text-[#53721D]">{att.badge}</span>
                  <span className="text-gray-400">Domek Górski Strumień</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comprehensive distances list from official site */}
      <section className="py-20 bg-[#F4F9EB] border-t border-[#E1E9D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Odległości od Domku Górski Strumień
            </h2>
            <p className="text-sm text-gray-600 mt-2 font-light">
              Praktyczna ściągawka odległości do kluczowych miejsc w regionie:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E9D5] shadow-soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {distances.map((dist, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F4F9EB] transition-colors">
                  <div className="w-14 h-11 rounded-xl bg-[#53721D] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {dist.km} km
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    {dist.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Trails and Nature note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Szlaki piesze, rowerowe i grzybobranie bezpośrednio z domku
          </h2>
          <p className="text-gray-600 font-light leading-relaxed">
            Wychodząc z domku, znajdziesz się od razu wśród malowniczych łąk i lasów. W rejonie przebiega gęsta sieć oznakowanych tras pieszych w Masywie Śnieżnika i Górach Bialskich oraz słynne singletracki rowerowe (Singletrack Glacensis).
          </p>
          <p className="text-gray-600 font-light leading-relaxed">
            W samym Stroniu Śląskim (ok. 2 km od domku) można zwiedzać Hutę Szkła Kryształowego „Violetta”, skorzystać z marketów (Biedronka, Dino, Polo Market, Pepco), aptek oraz przychodni.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/rezerwacja"
              className="bg-[#8BC030] hover:bg-[#74A425] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all"
            >
              Zarezerwuj pobyt w Stroniu Śląskim
            </Link>
            <Link
              to="/kontakt"
              className="bg-[#F4F9EB] hover:bg-[#EAF3DC] text-[#53721D] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Zobacz mapę dojazdu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
