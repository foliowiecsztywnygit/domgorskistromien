import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { about, contact, houseInfo } from '../data/site';
import { Trees, Mountain, Sparkles, Heart, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="O Nas"
        subtitle="Poznaj historię Domku Górski Strumień i urok malowniczej wsi Stronie Śląskie Wieś w dolinie potoku Janówka."
        isHome={false}
        bgImage="/assets/images/ogrod-laki.webp"
        badge="Łucja Kozińska • Gospodyni"
      />

      {/* Main Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg font-light">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#53721D]">Nasza Oaza Spokoju</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2">
              Dolina potoku Janówka
            </h2>
            <div className="w-16 h-1 bg-[#8BC030] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E1E9D5] shadow-soft space-y-6">
            <p className="text-xl font-serif text-[#53721D] leading-relaxed">
              {about.paragraphs[0]}
            </p>

            <p className="leading-relaxed">
              {about.paragraphs[1]}
            </p>

            <p className="leading-relaxed">
              {about.paragraphs[2]}
            </p>
          </div>

        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-16 bg-[#F4F9EB] border-y border-[#E1E9D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-[#E1E9D5]">
              <div className="h-60 overflow-hidden">
                <img
                  src="/assets/images/ogrod-altana-skalniak.webp"
                  alt="Altana i skalniak w ogrodzie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Ogród z altanką i wędzarnią</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Posesja otoczona jest kwitnącymi krzewami, kwiatami i drzewami. Na gości czeka zadaszona altana, murowany grill oraz tradycyjna wędzarnia.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-[#E1E9D5]">
              <div className="h-60 overflow-hidden">
                <img
                  src="/assets/images/okolica-grzyby.webp"
                  alt="Kanie i grzyby w okolicznych lasach"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Raj dla grzybiarzy i smakoszy</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Na łąkach wokół domku obficie rosną słynne kanie, a w pobliskich lasach pasma Śnieżnika grzybiarze i zbieracze jagód czują się jak w raju.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-[#E1E9D5]">
              <div className="h-60 overflow-hidden">
                <img
                  src="/assets/images/okolica-zima.webp"
                  alt="Zimowy krajobraz Czarnej Góry"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Piękne zimy i sporty śnieżne</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Tylko 3 km dzielą nas od jednego z najlepszych w Polsce ośrodków narciarskich Czarna Góra Resort z nowoczesnymi kanapami i trasami zjazdowymi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Standard and Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Udogodnienia i wyposażenie domku
        </h2>

        <div className="space-y-6">
          {houseInfo.map((info, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E9D5] shadow-soft">
              <h3 className="text-xl font-serif font-bold text-[#53721D] mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8BC030]"></span>
                {info.title}
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600 font-light">
                {info.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#8BC030] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/pokoje"
            className="inline-flex items-center gap-2 bg-[#8BC030] hover:bg-[#74A425] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
          >
            <span>Zobacz nasze pokoje i ofertę</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
