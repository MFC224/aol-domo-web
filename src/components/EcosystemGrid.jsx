import React, { useState } from 'react';
import { ArrowUpRight, Building2, Palette, Compass, Layers } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function EcosystemGrid({ onSelectCompany }) {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const companies = holdingData.companies;

  const categories = [
    { name: "Todas", icon: Layers },
    { name: "Arquitectura & Ecoturismo", icon: Compass },
    { name: "Moda, Arte & Textil", icon: Palette },
    { name: "Construcción & Obras", icon: Building2 },
    { name: "Ingeniería & Consultoría", icon: Building2 },
  ];

  const filteredCompanies = activeCategory === "Todas"
    ? companies
    : companies.filter((c) => c.category === activeCategory);

  return (
    <section id="ecosistema" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amberGold block mb-2">
              Ecosistema Integral
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Estructura Corporativa & Divisiones
            </h2>
            <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
              De la manufactura textil tradicional al desarrollo de hábitats bioclimáticos y obras de ingeniería civil.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-amberGold text-obsidian-950 border-amberGold font-semibold shadow-sm'
                      : 'bg-obsidian-900 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
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
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-full p-0.5 bg-obsidian-950 border border-white/10 group-hover:border-amberGold/50 transition-colors shadow-lg">
                    <img
                      src={company.iconImg}
                      alt={company.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded bg-obsidian-950 border border-white/10">
                    {company.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-amberGold transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-0.5 mb-3">
                  {company.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3 mb-5">
                  {company.description}
                </p>

                {/* Highlights tags */}
                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {company.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-forest-500" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectCompany(company)}
                className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-obsidian-950 hover:bg-forest-900/60 border border-white/10 hover:border-forest-600/40 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200"
              >
                <span>{company.linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amberGold" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
