import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { holdingData } from '../data/ecosystem';
import { useSwipe } from '../hooks/useSwipe';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const banners = holdingData.banners;

  const SLIDE_DURATION = 7000; // 7 segundos continuos

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const swipeHandlers = useSwipe({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide
  });

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
          {...swipeHandlers}
        >
          
          {/* Main Panorama Stage: Centered 1600x581 canvas with 0% cropping & Ultra-Smooth Crossfade */}
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[1600/581] bg-black flex items-center justify-center overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
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
          </div>

          {/* 7-Second Animated Progress Bar */}
          <div className="w-full h-1 bg-white/10 relative overflow-hidden">
            <div
              key={currentSlide}
              className="h-full bg-amberGold"
              style={{
                animation: !isPaused ? `progress-fill ${SLIDE_DURATION}ms linear forwards` : 'none'
              }}
            />
          </div>

          {/* Docked Info Bar: Clean, Minimalist, No 'Paso 7s' label and No 'Ampliar' button */}
          <div className="p-4 sm:p-5 bg-obsidian-950/95 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amberGold block mb-1">
                {currentBanner.category}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                {currentBanner.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 leading-relaxed">
                {currentBanner.caption}
              </p>
            </div>

            {/* Carousel Dots & Counter */}
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
    </section>
  );
}
