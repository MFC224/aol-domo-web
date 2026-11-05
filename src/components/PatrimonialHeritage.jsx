import React, { useState } from 'react';
import { Award, Eye, Calendar, MapPin, Building, X } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function PatrimonialHeritage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const milestones = holdingData.patrimonialMilestones;

  return (
    <section id="patrimonio" className="py-24 bg-obsidian-900/60 relative border-t border-b border-white/5">
      
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(197,160,89,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amberGold/15 border border-amberGold/30 text-amberGold text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Autoridad & Trayectoria Institucional</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Hitos Patrimoniales & Señalética
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Rafael Francisco Ochoa Rodríguez y su equipo han sido los responsables de proyectos emblemáticos de señalética monumental, preservación cartográfica y edificación en los principales patrimonios de la humanidad en el Perú.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {milestones.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-amberGold/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image Stage with Zoom trigger */}
                <div 
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPhoto(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-70" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-obsidian-950/80 backdrop-blur-md text-amberGold border border-amberGold/40 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-950/80 backdrop-blur-md text-[11px] text-slate-300 font-mono border border-white/10">
                    <Calendar className="w-3 h-3 text-forest-400" />
                    <span>{item.year}</span>
                  </div>

                  {/* Hover view hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-obsidian-950 text-white text-xs font-semibold shadow-lg border border-white/20">
                      <Eye className="w-4 h-4 text-amberGold" />
                      Ampliar Evidencia
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                    <Building className="w-3.5 h-3.5 text-forest-400" />
                    <span>{item.organization}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-amberGold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-300 mt-1 mb-3">
                    {item.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Secondary thumbnail trigger */}
              {item.secondaryImage && (
                <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-[11px] text-slate-400 font-sans">
                    Documentado en currículum oficial
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(item.secondaryImage)}
                    className="inline-flex items-center gap-1.5 text-xs text-amberGold hover:text-amberGold-light font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver detalle técnico</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Viewer */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-obsidian-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors border border-white/20"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="Evidencia fotográfica ampliada"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
