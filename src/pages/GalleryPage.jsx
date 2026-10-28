import React, { useState } from 'react';
import Hero from '../components/Hero';
import { rooms, commonAreas, garden, surroundings } from '../data/site';
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Wszystkie zdjęcia' },
    { id: 'pokoje', label: 'Pokoje' },
    { id: 'wnetrza', label: 'Części wspólne i salon' },
    { id: 'ogrod', label: 'Ogród i altana' },
    { id: 'okolica', label: 'Okolica i krajobrazy' },
  ];

  // Prepare images with category tags
  const allImages = [
    ...rooms.flatMap(r => r.gallery.map(img => ({ ...img, category: 'pokoje', room: r.number }))),
    ...commonAreas.map(img => ({ ...img, category: 'wnetrza' })),
    ...garden.map(img => ({ ...img, category: 'ogrod' })),
    ...surroundings.map(img => ({ ...img, category: 'okolica' })),
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      <Hero
        title="Galeria Zdjęć"
        subtitle="Zobacz jak wygląda Domek Górski Strumień, nasze pokoje z łazienkami, salon z kominkiem oraz malowniczy ogród."
        isHome={false}
        bgImage="/assets/images/ogrod-woz.webp"
        badge="Domek Górski Strumień • Galeria"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#53721D] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#F4F9EB] hover:text-[#53721D] border border-[#E1E9D5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative h-64 rounded-2xl overflow-hidden bg-white border border-[#E1E9D5] shadow-sm hover:shadow-xl cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {img.room && (
                <div className="absolute top-3 left-3 bg-[#53721D]/90 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  {img.room}
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white text-xs opacity-90 group-hover:opacity-100">
                <p className="line-clamp-2">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#AED864] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-20"
            aria-label="Zamknij"
          >
            <X size={26} />
          </button>

          {/* Previous arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#AED864] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-20"
            aria-label="Poprzednie"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#AED864] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-20"
            aria-label="Następne"
          >
            <ChevronRight size={30} />
          </button>

          {/* Active Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full flex flex-col items-center select-none"
          >
            <img
              src={filteredImages[activeImageIndex].src}
              alt={filteredImages[activeImageIndex].caption}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            
            <div className="mt-4 text-center text-white">
              <p className="text-sm sm:text-base font-medium">
                {filteredImages[activeImageIndex].caption}
              </p>
              <span className="text-xs text-gray-400 mt-1 block">
                Zdjęcie {activeImageIndex + 1} z {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
