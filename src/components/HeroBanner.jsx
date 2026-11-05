import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Eye, Maximize2, X } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const banners = holdingData.banners;

  // Touch swipe handling for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance carousel every 6 seconds unless paused
  useEffect(() => {
    if (isPaused || fullscreenImage) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, fullscreenImage, banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped left
      nextSlide();
    } else if (diff < -45) {
      // Swiped right
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-between pt-20 sm:pt-28 pb-10 overflow-hidden bg-obsidian-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,86,54,0.22),rgba(6,8,10,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Title Header - Scaled for high mobile readability */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-forest-600/40 text-forest-200 text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amberGold animate-pulse" />
            <span>Matriz Corporativa & Bioconstrucción</span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            AOL-DOMO
            <span className="block text-lg sm:text-2xl lg:text-3xl font-medium text-slate-200 font-sans mt-2">
              Hábitats Sostenibles, Arte Textil Ancestral e Ingeniería
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed px-2">
            El ecosistema empresarial liderado por el diseñador y creativo cusqueño 
            <strong className="text-white font-semibold"> Rafael Francisco Ochoa Rodríguez</strong>, integrando más de 35 años de innovación bajo una misma premisa:
            <span className="text-amberGold italic font-serif block sm:inline"> "Creer es crear!!!"</span>.
          </p>
        </div>

        {/* Panoramic Banner Carousel Frame */}
        <div 
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-obsidian-900 group select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Main Panorama Stage with generous mobile height so images are visible */}
          <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px] bg-black">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover sm:object-contain md:object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Gradients on edges for text legibility without blocking the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent sm:opacity-90 opacity-95" />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-obsidian-950/50 via-transparent to-obsidian-950/50" />

                {/* Banner Caption Overlay */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-8 right-3 sm:right-8 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                  <div className="max-w-xl bg-obsidian-950/85 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 shadow-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-amberGold block mb-1">
                      {banner.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-xl lg:text-2xl text-white tracking-wide">
                      {banner.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 font-sans">
                      {banner.caption}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {/* Expand full image button */}
                    <button
                      onClick={() => setFullscreenImage(banner)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 hover:bg-obsidian-900 border border-white/10 text-xs font-medium text-slate-200 hover:text-white backdrop-blur-sm transition-colors"
                      title="Ver imagen en tamaño completo"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-amberGold" />
                      <span className="hidden sm:inline">Ampliar</span>
                    </button>

                    <span className="text-xs text-slate-300 font-mono bg-obsidian-950/80 px-3 py-1.5 rounded-lg border border-white/10">
                      {String(index + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Buttons - Big touch target */}
          <button
            onClick={prevSlide}
            aria-label="Anterior banner"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-obsidian-950/80 hover:bg-obsidian-900 border border-white/15 text-white transition-all shadow-xl backdrop-blur-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Siguiente banner"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-obsidian-950/80 hover:bg-obsidian-900 border border-white/15 text-white transition-all shadow-xl backdrop-blur-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 bg-obsidian-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-6 h-2 bg-amberGold' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[10px] text-slate-300 font-medium">
            Desliza ↔ para navegar
          </div>
        </div>

        {/* Bottom CTA & Scroll Anchor - Responsive Grid on Mobile */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#empresas"
            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-forest-800 hover:bg-forest-700 text-slate-100 font-semibold text-sm transition-all duration-200 border border-forest-600/40 shadow-lg shadow-forest-950/50 active:scale-98"
          >
            <span>Explorar Nuestras Empresas</span>
            <ArrowDown className="w-4 h-4 text-forest-300 animate-bounce" />
          </a>

          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 border border-white/10 active:scale-98"
          >
            <span>Contacto Corporativo</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-obsidian-950 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-obsidian-900">
              <div>
                <span className="text-xs font-bold text-amberGold uppercase">{fullscreenImage.category}</span>
                <h4 className="text-white font-bold text-base">{fullscreenImage.title}</h4>
              </div>
              <button
                onClick={() => setFullscreenImage(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={fullscreenImage.image}
                alt={fullscreenImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-4 bg-obsidian-900 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              {fullscreenImage.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
