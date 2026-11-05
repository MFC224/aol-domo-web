import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function CompanyModal({ company, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!company) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola Rafael, estoy interesado en conocer más detalles sobre los servicios y proyectos de ${company.name} del holding AOL-DOMO.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-obsidian-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10">
        
        {/* Top Decorative Header with Company Theme Gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${company.color} border-b border-white/10 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-950/60 hover:bg-obsidian-950 text-slate-300 hover:text-white transition-colors border border-white/10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-24 h-24 rounded-full p-1 bg-obsidian-950 border border-white/20 shadow-xl flex-shrink-0">
              <img
                src={company.iconImg}
                alt={company.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-center sm:text-left">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-amberGold px-2.5 py-0.5 rounded-full bg-black/40 border border-amberGold/30 inline-block mb-2">
                {company.badge}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {company.name}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                {company.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Propósito & Especialidad
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {company.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Capacidades & Servicios Clave
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {company.highlights.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-obsidian-950/50 p-2.5 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-sans">
              Consulta directa con Rafael Francisco Ochoa
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/51944100990?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amberGold hover:bg-amberGold-light text-obsidian-950 font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex-1 sm:flex-initial"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-obsidian-950 hover:bg-obsidian-800 text-slate-300 font-medium text-xs border border-white/10 transition-colors"
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
