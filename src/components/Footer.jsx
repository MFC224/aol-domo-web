import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-amberGold/60 to-forest-600/40 flex-shrink-0">
                <img
                  src="/assets/circle_aol.png"
                  alt="AOL-DOMO Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-wider block">
                  AOL-DOMO
                </span>
                <span className="text-xs text-amberGold tracking-wide font-serif italic">
                  "Creer es crear!!!"
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Holding corporativo cusqueño que agrupa bioarquitectura, hábitats geodésicos, arte textil ancestral, consultoría técnica y desarrollo inmobiliario.
            </p>

            <div className="text-xs sm:text-sm text-slate-300 pt-2">
              <p className="font-bold text-white">Dirección Ejecutiva:</p>
              <p className="mt-0.5">Rafael Francisco Ochoa Rodríguez ("Rafo8a")</p>
              <a href="#ubicacion" className="hover:text-amberGold transition-colors inline-block mt-1 text-slate-300 hover:underline">
                📍 Jr. Humberto Luna 105, Urb. Magisterial 1era etapa • Cusco 05184, Perú
              </a>
            </div>
          </div>

          {/* Division Links */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
              Divisiones del Holding
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • AOL-DOMO (Hábitats Geodésicos & Bioarquitectura)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • JyR CONSULT BB SS (Consultoría & Licitaciones)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • HANDELCON (Inmobiliaria & Constructora)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • TERRA (Casas de Campo & Sostenibilidad)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • ATAKAU / ALIEN PROJECT (Streetwear & Arte Ancestral)
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • PUKANAWI / KONTIKI (Herencia Textil 1986)
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Milestones Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
              Hitos de Señalética
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • Santuario de Machu Picchu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • Camino Inka & Wayna Picchu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • Parque Nacional del Manu
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • Estación Biológica Wayqecha
                </a>
              </li>
              <li>
                <a href="#patrimonio" className="hover:text-amberGold transition-colors inline-block py-0.5">
                  • Universidad Andina del Cusco
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} AOL-DOMO Holding Corporativo. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 text-slate-200 hover:text-white transition-colors active:scale-95"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4 text-amberGold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
