import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function CompaniesLoop({ onSelectCompany }) {
  const companies = holdingData.companies;

  // Duplicate items for a seamless continuous CSS loop
  const loopItems = [...companies, ...companies];

  return (
    <section 
      id="empresas" 
      className="relative py-20 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 90% 70% at 50% 50%, #0c2b1a 0%, #071910 45%, #06080a 100%)`
      }}
    >
      {/* Top and Bottom soft edge fades to pure obsidian */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-obsidian-950 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian-950 to-transparent pointer-events-none" />

      {/* Side Vignettes for cinematic fade */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/80 border border-forest-600/30 text-forest-200 text-xs font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amberGold" />
          <span>La Constelación de Marcas</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Nuestras Empresas
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans">
          Cinco divisiones especializadas unificadas bajo la dirección y matriz de <strong className="text-white font-medium">AOL-DOMO</strong>.
          Pasa el cursor para pausar y haz clic para explorar los detalles.
        </p>
      </div>

      {/* Infinite Moving Loop Ticker */}
      <div className="relative w-full overflow-hidden pause-marquee cursor-pointer py-4">
        <div className="flex gap-8 sm:gap-12 w-max animate-marquee">
          {loopItems.map((company, idx) => (
            <div
              key={`${company.id}-${idx}`}
              onClick={() => onSelectCompany(company)}
              className="group flex flex-col items-center text-center w-52 sm:w-60 flex-shrink-0 transition-transform duration-300 hover:-translate-y-2 select-none"
            >
              {/* Star Circle with Ambient Glow */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-forest-600/40 via-white/10 to-transparent border border-white/15 shadow-xl shadow-black/70 group-hover:border-amberGold/60 transition-all duration-300 group-hover:scale-105">
                <img
                  src={company.iconImg}
                  alt={company.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 rounded-full bg-obsidian-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amberGold text-obsidian-950 text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Ver más <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-4 px-2">
                <span className="text-[10px] font-semibold tracking-wider text-forest-300 uppercase block mb-1">
                  {company.badge}
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-100 group-hover:text-amberGold transition-colors tracking-tight line-clamp-1">
                  {company.name}
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-1">
                  {company.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Helper Indicator */}
      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-sans">
          <span className="w-2 h-2 rounded-full bg-amberGold/80 animate-ping" />
          Desplazamiento interactivo continuo • Haz clic en cualquiera para expandir su ficha
        </span>
      </div>
    </section>
  );
}
