import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const banners = holdingData.banners;

  // Auto-advance carousel every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-obsidian-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background subtle radial glow (organic andean dark slate) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,86,54,0.18),rgba(6,8,10,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-700/40 text-forest-300 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amberGold animate-pulse" />
            Matriz Corporativa & Bioconstrucción
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.15]">
            AOL-DOMO
            <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 font-sans mt-2">
              Hábitats Sostenibles, Arte Textil Ancestral e Ingeniería
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            El ecosistema empresarial liderado por el diseñador y creativo cusqueño 
            <span className="text-slate-200 font-medium"> Rafael Francisco Ochoa Rodríguez</span>, integrando más de 35 años de innovación bajo una misma premisa:
            <span className="text-amberGold italic font-serif"> "Creer es crear!!!"</span>.
          </p>
        </div>

        {/* Panoramic Banner Carousel Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-obsidian-900 group">
          
          {/* Main Panorama Stage (Aspect Ratio ~ 16:6) */}
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5.8] bg-black">
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
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Subtle vignette on banner edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/60 via-transparent to-obsidian-950/60" />

                {/* Banner Caption Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                  <div className="max-w-xl bg-obsidian-950/75 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amberGold block mb-1">
                      {banner.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-xl text-white tracking-wide">
                      {banner.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                      {banner.caption}
                    </p>
                  </div>

                  <span className="hidden sm:inline-block text-xs text-slate-400 font-mono bg-obsidian-950/70 px-3 py-1.5 rounded-lg border border-white/5">
                    {String(index + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Anterior banner"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-obsidian-950/75 hover:bg-obsidian-900 border border-white/10 text-white/80 hover:text-white transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Siguiente banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-obsidian-950/75 hover:bg-obsidian-900 border border-white/10 text-white/80 hover:text-white transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-obsidian-950/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-6 h-1.5 bg-amberGold' 
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA & Scroll Anchor */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#empresas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-slate-100 font-medium text-sm transition-all duration-200 border border-forest-600/40 shadow-lg shadow-forest-950/50 hover:shadow-forest-900/40"
          >
            <span>Explorar Nuestras Empresas</span>
            <ArrowDown className="w-4 h-4 text-forest-300 animate-bounce" />
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 border border-white/10"
          >
            <span>Contacto Corporativo</span>
          </a>
        </div>

      </div>
    </section>
  );
}
