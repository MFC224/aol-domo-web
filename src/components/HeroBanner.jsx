import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Maximize2, X, Clock } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const banners = holdingData.banners;

  const SLIDE_DURATION = 7000; // Exactamente 7 segundos

  // Touch swipe handling for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    if (isPaused || fullscreenImage) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, SLIDE_DURATION);
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
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentBanner = banners[currentSlide];

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
        
        {/* Title Header */}
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

        {/* Panoramic Banner Carousel Frame with Clean Centered Composition */}
        <div 
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-obsidian-900 group select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Main Panorama Stage: Centered 1600x581 canvas with 0% cropping */}
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[1600/581] bg-black flex items-center justify-center overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-contain object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* Carousel Navigation Buttons - Positioned vertically centered */}
            <button
              onClick={prevSlide}
              aria-label="Anterior banner"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-obsidian-950/75 hover:bg-obsidian-900 border border-white/15 text-white/90 hover:text-white transition-all shadow-xl backdrop-blur-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              aria-label="Siguiente banner"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-obsidian-950/75 hover:bg-obsidian-900 border border-white/15 text-white/90 hover:text-white transition-all shadow-xl backdrop-blur-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Quick mobile zoom button on top right of the image */}
            <button
              onClick={() => setFullscreenImage(currentBanner)}
              className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/75 hover:bg-obsidian-900 border border-white/15 text-xs font-medium text-slate-200 hover:text-white backdrop-blur-sm transition-colors shadow-lg"
              title="Ver imagen en tamaño completo"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amberGold" />
              <span className="hidden sm:inline">Ampliar</span>
            </button>
          </div>

          {/* 7-Second Animated Progress Bar */}
          <div className="w-full h-1 bg-white/10 relative overflow-hidden">
            <div
              key={currentSlide}
              className="h-full bg-amberGold"
              style={{
                animation: !isPaused && !fullscreenImage ? `progress-fill ${SLIDE_DURATION}ms linear forwards` : 'none'
              }}
            />
          </div>

          {/* Docked Info Bar: Keeps the banner 100% visible with zero text overlap */}
          <div className="p-4 sm:p-5 bg-obsidian-950/95 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amberGold">
                  {currentBanner.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amberGold/80" />
                  Paso cada 7s
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                {currentBanner.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 leading-relaxed">
                {currentBanner.caption}
              </p>
            </div>

            {/* Carousel Dots & Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
              <div className="flex items-center gap-1.5 bg-obsidian-900 px-3 py-1.5 rounded-full border border-white/10">
                {banners.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ir al banner ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide 
                        ? 'w-6 h-2 bg-amberGold' 
                        : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs text-slate-300 font-mono bg-obsidian-900 px-3 py-1.5 rounded-lg border border-white/10">
                {String(currentSlide + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom CTA & Scroll Anchor */}
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
          <div 
            className="relative max-w-6xl w-full bg-obsidian-950 rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-obsidian-900">
              <div>
                <span className="text-xs font-bold text-amberGold uppercase">{fullscreenImage.category}</span>
                <h4 className="text-white font-bold text-base sm:text-lg">{fullscreenImage.title}</h4>
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
