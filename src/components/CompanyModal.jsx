import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/ecosystem';

export default function CompanyModal({ company, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!company) return null;

  const whatsappUrl = buildWhatsAppUrl(
    `Hola Rafael, estoy interesado en conocer más detalles sobre los servicios y proyectos de ${company.name} del holding AOL-DOMO.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Decorative Header with Company Theme Gradient */}
        <div className={`p-5 sm:p-8 bg-gradient-to-r ${company.color} border-b border-white/10 relative flex-shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-obsidian-950/70 hover:bg-obsidian-950 text-slate-200 hover:text-white transition-colors border border-white/15 active:scale-95"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 pr-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-obsidian-950 border border-white/20 shadow-xl flex-shrink-0">
              <img
                src={company.iconImg}
                alt={company.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-amberGold px-3 py-0.5 rounded-full bg-black/50 border border-amberGold/30 inline-block mb-1.5">
                {company.badge}
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight">
                {company.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1">
                {company.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body - Smooth scroll on mobile */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amberGold mb-2">
              Propósito & Especialidad
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {company.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
              Capacidades & Servicios Clave
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {company.highlights.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-obsidian-950/70 p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-sans text-center sm:text-left">
              Consulta directa con la dirección ejecutiva
            </span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-amberGold hover:bg-amberGold-light text-obsidian-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-obsidian-950 hover:bg-obsidian-800 text-slate-300 font-medium text-xs sm:text-sm border border-white/10 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
