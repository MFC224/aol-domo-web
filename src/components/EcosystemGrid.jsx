import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Building2, Palette, Compass, Layers } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

const CATEGORIES = [
  { name: "Todas", icon: Layers },
  { name: "Arquitectura & Ecoturismo", icon: Compass },
  { name: "Moda, Arte & Textil", icon: Palette },
  { name: "Construcción & Obras", icon: Building2 },
  { name: "Ingeniería & Consultoría", icon: Building2 },
];

export default function EcosystemGrid({ onSelectCompany }) {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const companies = holdingData.companies;

  const filteredCompanies = useMemo(() => {
    return activeCategory === "Todas"
      ? companies
      : companies.filter((c) => c.category === activeCategory);
  }, [activeCategory, companies]);

  return (
    <section id="ecosistema" className="py-16 sm:py-24 bg-obsidian-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="section-eyebrow">
              Ecosistema Integral
            </span>
            <h2 className="section-title">
              Estructura Corporativa & Divisiones
            </h2>
            <p className="section-desc mt-2 max-w-xl">
              De la manufactura textil tradicional al desarrollo de hábitats bioclimáticos y obras de ingeniería civil.
            </p>
          </div>

          {/* Category Filter Pills - Horizontal touch-friendly scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border flex-shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-amberGold text-obsidian-950 border-amberGold shadow-md shadow-amberGold/20 font-bold'
                      : 'bg-obsidian-900 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-obsidian-950 border border-white/15 group-hover:border-amberGold/50 transition-colors shadow-lg">
                    <img
                      src={company.iconImg}
                      alt={company.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 px-3 py-1 rounded-full bg-obsidian-950 border border-white/10">
                    {company.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-amberGold transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amberGold/90 mt-1 mb-3">
                  {company.subtitle}
                </p>

                <p className="text-sm text-slate-300 font-sans leading-relaxed line-clamp-3 mb-5">
                  {company.description}
                </p>

                {/* Highlights tags */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  {company.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-400 flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectCompany(company)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-obsidian-950 hover:bg-forest-900/80 border border-white/10 hover:border-amberGold/40 text-slate-100 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-sm"
              >
                <span>{company.linkText}</span>
                <ArrowUpRight className="w-4 h-4 text-amberGold" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
