import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-white/5 pt-16 pb-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-br from-amberGold/60 to-forest-600/40">
                <img
                  src="/assets/circle_aol.png"
                  alt="AOL-DOMO Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider block">
                  AOL-DOMO
                </span>
                <span className="text-[11px] text-amberGold tracking-wide font-serif italic">
                  "Creer es crear!!!"
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Holding corporativo cusqueño que agrupa bioarquitectura, hábitats geodésicos, arte textil ancestral, consultoría técnica y desarrollo inmobiliario.
            </p>

            <div className="text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Dirección Ejecutiva:</p>
              <p>Rafael Francisco Ochoa Rodríguez ("Rafo8a")</p>
              <p>Jr. Humberto Luna 105, Urb. Magisterial 1era etapa • Cusco, Perú</p>
            </div>
          </div>

          {/* Division Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Divisiones del Holding
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • AOL-DOMO (Hábitats Geodésicos & Bioarquitectura)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • JyR CONSULT BB SS (Consultoría & Licitaciones)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • HANDELCON (Inmobiliaria & Constructora)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • TERRA (Casas de Campo & Sostenibilidad)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • ATAKAU / ALIEN PROJECT (Streetwear & Arte Ancestral)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors">
                  • PUKANAWI / KONTIKI (Herencia Textil 1986)
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Milestones Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Hitos de Señalética
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors">
                  • Santuario de Machu Picchu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors">
                  • Camino Inka & Wayna Picchu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors">
                  • Parque Nacional del Manu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors">
                  • Estación Biológica Wayqecha
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors">
                  • Universidad Andina del Cusco
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} AOL-DOMO Holding Corporativo. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 border border-white/5 text-slate-300 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-amberGold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
