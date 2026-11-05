import React, { useState } from 'react';
import { Award, Calendar, Building, ZoomIn, ChevronRight } from 'lucide-react';
import { holdingData } from '../data/ecosystem';
import ImageLightbox from './common/ImageLightbox';

export default function PatrimonialHeritage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activePhotoMap, setActivePhotoMap] = useState({}); // { [itemId]: 'primary' | 'secondary' }
  const milestones = holdingData.patrimonialMilestones;

  const getActiveImage = (item) => {
    const mode = activePhotoMap[item.id] || 'primary';
    return mode === 'secondary' && item.secondaryImage ? item.secondaryImage : item.image;
  };

  const toggleImage = (itemId, mode) => {
    setActivePhotoMap((prev) => ({ ...prev, [itemId]: mode }));
  };

  return (
    <section id="patrimonio" className="py-16 sm:py-24 bg-obsidian-900/80 relative border-t border-b border-white/5 overflow-hidden">
      
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(197,160,89,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amberGold/15 border border-amberGold/30 text-amberGold text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4" />
            <span>Autoridad & Trayectoria Institucional</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Hitos Patrimoniales & Señalética
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Rafael Francisco Ochoa Rodríguez y su equipo técnico han liderado proyectos emblemáticos de señalética monumental, preservación cartográfica y edificación en los principales patrimonios de la humanidad en el Perú.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {milestones.map((item) => {
            const currentImg = getActiveImage(item);
            const isSecondary = (activePhotoMap[item.id] === 'secondary');

            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-amberGold/40 transition-all duration-300 shadow-2xl"
              >
                <div>
                  {/* Image Stage: Clean presentation with blur backdrop to fit both vertical and horizontal scans */}
                  <div 
                    className="relative h-[260px] xs:h-[300px] sm:h-[360px] bg-obsidian-950 overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedPhoto({ src: currentImg, title: item.title, role: item.role })}
                  >
                    {/* Blurred background fill to prevent awkward letterboxing */}
                    <img
                      src={currentImg}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none"
                    />

                    {/* Main crisp image */}
                    <img
                      src={currentImg}
                      alt={item.title}
                      className="relative w-full h-full object-contain sm:object-cover sm:object-top transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />

                    {/* Subtle bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-obsidian-950/85 backdrop-blur-md text-amberGold border border-amberGold/40 uppercase tracking-wider shadow-md">
                        {item.tag}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-950/85 backdrop-blur-md text-xs text-slate-200 font-mono border border-white/10 shadow-md">
                      <Calendar className="w-3.5 h-3.5 text-forest-400" />
                      <span>{item.year}</span>
                    </div>

                    {/* Tap to Zoom Indicator Bar */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-950/85 backdrop-blur-md text-white text-xs font-semibold shadow-lg border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5 text-amberGold" />
                        <span>Toca para ver documento completo</span>
                      </span>
                    </div>
                  </div>

                  {/* Alternate Image Toggle Pills if secondary image exists */}
                  {item.secondaryImage && (
                    <div className="px-5 pt-3 pb-1 flex items-center gap-2 border-b border-white/5 bg-obsidian-950/40">
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                        Vistas:
                      </span>
                      <button
                        onClick={() => toggleImage(item.id, 'primary')}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          !isSecondary 
                            ? 'bg-amberGold text-obsidian-950 font-bold' 
                            : 'text-slate-400 hover:text-white bg-white/5'
                        }`}
                      >
                        Registro Principal
                      </button>
                      <button
                        onClick={() => toggleImage(item.id, 'secondary')}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          isSecondary 
                            ? 'bg-amberGold text-obsidian-950 font-bold' 
                            : 'text-slate-400 hover:text-white bg-white/5'
                        }`}
                      >
                        Detalle Técnico / Documental
                      </button>
                    </div>
                  )}

                  {/* Content Details */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                      <Building className="w-4 h-4 text-forest-400 flex-shrink-0" />
                      <span className="line-clamp-1">{item.organization}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-amberGold transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-amberGold/90 mt-1 mb-3">
                      {item.role}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-5 sm:px-7 pb-5 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs text-slate-400 font-sans">
                    Documentado en archivo histórico
                  </span>
                  <button
                    onClick={() => setSelectedPhoto({ src: currentImg, title: item.title, role: item.role })}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-amberGold hover:text-amberGold-light font-bold transition-colors py-1"
                  >
                    <span>Ver documento en alta resolución</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Viewer with mobile zoom support */}
      <ImageLightbox
        isOpen={Boolean(selectedPhoto)}
        onClose={() => setSelectedPhoto(null)}
        src={selectedPhoto?.src}
        title={selectedPhoto?.title}
        subtitle={selectedPhoto?.role}
        footerText="Puedes pellizcar para hacer zoom o desplazarte para ver todos los detalles del documento."
      />
    </section>
  );
}
