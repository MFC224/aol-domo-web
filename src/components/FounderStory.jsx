import React, { useState } from 'react';
import { GraduationCap, Award, Compass, Sparkles, MapPin, CheckCircle, ZoomIn, X } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function FounderStory() {
  const [fullscreenCurriculum, setFullscreenCurriculum] = useState(false);
  const founder = holdingData.founder;

  const timelineSteps = [
    {
      year: "1986",
      title: "Orígenes con KONTIKI",
      desc: "Creación del taller familiar de confección artesanal e indumentaria en Cusco y Lima, sentando las bases de más de 3 décadas de experiencia textil."
    },
    {
      year: "1994 - 1996",
      title: "Toulouse Lautrec & Pre-Prensa Digital",
      desc: "Graduación como Diseñador Gráfico Industrial y Master en Pre-Prensa Digital PC en Toulouse Lautrec, consolidando la maestría técnica en serigrafía e imagen corporativa."
    },
    {
      year: "2002 - 2004",
      title: "Hito Machu Picchu & Camino Inka",
      desc: "Dirección y ejecución de la señalética monumental para el Santuario Histórico de Machu Picchu y Camino Inka a través de PROFONANPE Perú - Finlandia."
    },
    {
      year: "2009 - 2017",
      title: "HANDELCON & Obras Inmobiliarias",
      desc: "Gerencia General de Handelcon S.R.L. y ejecución de proyectos residenciales de gran escala como Condominio Versalles y Condominio Manzanares en Cusco."
    },
    {
      year: "2016",
      title: "Nacimiento de ATAKAU",
      desc: "Fundación de ATAKAU en Cusco, fusionando el arte ancestral sudamericano y la iconografía andina con tecnología de impresión digital DTG y bordado computarizado."
    },
    {
      year: "Presente",
      title: "AOL-DOMO: Holding & Bioconstrucción",
      desc: "Consolidación de la matriz AOL-DOMO para el desarrollo de hábitats geodésicos, bioarquitectura, viviendas autosostenibles y la integración de todas sus divisiones."
    }
  ];

  return (
    <section id="fundador" className="py-16 sm:py-24 bg-obsidian-950 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amberGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Bio Card */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Portrait / Identity Stage */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div 
                onClick={() => setFullscreenCurriculum(true)}
                className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[3/4] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-br from-amberGold/50 via-forest-600/30 to-white/10 shadow-2xl overflow-hidden mb-4 cursor-pointer group"
              >
                <img
                  src="/assets/pdf_curriculum_page1.png"
                  alt="Rafael Francisco Ochoa Rodríguez"
                  className="w-full h-full object-cover object-top rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-950/90 text-white text-xs font-semibold shadow-lg border border-white/20 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-amberGold" />
                    <span>Ver documento oficial</span>
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-amberGold px-3.5 py-1 rounded-full bg-obsidian-950 border border-amberGold/30 mb-2">
                Fundador & Director Creativo
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {founder.name}
              </h3>

              <p className="text-sm text-slate-300 font-mono mt-0.5">
                "{founder.pseudonym}"
              </p>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 mt-2">
                <MapPin className="w-4 h-4 text-forest-400 flex-shrink-0" />
                <span>Cusco, Perú (Urb. Magisterial)</span>
              </div>
            </div>

            {/* Narrative & Credentials */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/60 border border-forest-600/30 text-forest-200 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                <span>Filosofía: "Creer es crear!!!"</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Creatividad, Raíces Andinas y Visión de Futuro
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {founder.bio} Formado académicamente en la prestigiosa Universidad Toulouse Lautrec y con una prolífica trayectoria en diseño gráfico industrial, señalética monumental y edificación, Rafael Francisco Ochoa ha concebido a <strong className="text-white">AOL-DOMO</strong> como el epicentro donde confluyen el respeto por la tierra, el misticismo andino y la ingeniería autosustentable.
              </p>

              {/* Academic & Professional Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-amberGold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Diseñador Gráfico Industrial
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">
                      {founder.almaMater}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-900/80 border border-white/10 flex items-start gap-3">
                  <Award className="w-5 h-5 text-forest-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Master en Pre-Prensa Digital
                    </h4>
                    <p className="text-xs text-slate-300 font-sans mt-0.5">
                      {founder.postgraduate}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Visual Timeline of Evolution */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-400 block mb-1">
              Trayectoria Histórica
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              De 1986 a la Era AOL-DOMO
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-8 sm:space-y-10">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-forest-500 group-hover:border-amberGold group-hover:scale-125 transition-all duration-300" />

                <div className="bg-obsidian-900/80 p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-colors">
                  <span className="text-xs font-mono font-bold text-amberGold px-2.5 py-1 rounded bg-amberGold/15 inline-block mb-1.5">
                    {step.year}
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for full curriculum document */}
      {fullscreenCurriculum && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fade"
          onClick={() => setFullscreenCurriculum(false)}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[92vh] bg-obsidian-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-obsidian-900 border-b border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  Currículum Vitae & Portafolio Oficial
                </h4>
                <p className="text-xs text-amberGold">
                  Rafael Francisco Ochoa Rodríguez ("Rafo8a")
                </p>
              </div>
              <button
                onClick={() => setFullscreenCurriculum(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-black flex-1 overflow-auto flex items-center justify-center min-h-[300px]">
              <img
                src="/assets/pdf_curriculum_page1.png"
                alt="Currículum Oficial Completo"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
