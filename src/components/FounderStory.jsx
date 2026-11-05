import React from 'react';
import { GraduationCap, Award, Compass, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { holdingData } from '../data/ecosystem';

export default function FounderStory() {
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
    <section id="fundador" className="py-24 bg-obsidian-950 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amberGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Bio Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Portrait / Identity Stage */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-br from-amberGold/50 via-forest-600/30 to-white/10 shadow-2xl overflow-hidden mb-5">
                <img
                  src="/assets/pdf_curriculum_page1.png"
                  alt="Rafael Francisco Ochoa Rodríguez"
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>

              <span className="text-[11px] font-semibold tracking-widest uppercase text-amberGold px-3 py-1 rounded-full bg-obsidian-950 border border-amberGold/30 mb-2">
                Fundador & Director Creativo
              </span>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                {founder.name}
              </h3>

              <p className="text-sm text-slate-400 font-mono mt-0.5">
                "{founder.pseudonym}"
              </p>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3">
                <MapPin className="w-3.5 h-3.5 text-forest-400" />
                <span>Cusco, Perú (Urb. Magisterial)</span>
              </div>
            </div>

            {/* Narrative & Credentials */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/30 text-forest-200 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amberGold" />
                <span>Filosofía: "Creer es crear!!!"</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Creatividad, Raíces Andinas y Visión de Futuro
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {founder.bio} Formado académicamente en la prestigiosa Universidad Toulouse Lautrec y con una prolífica trayectoria en diseño gráfico industrial, señalética monumental y edificación, Rafael Francisco Ochoa ha concebido a <strong>AOL-DOMO</strong> como el epicentro donde confluyen el respeto por la tierra, el misticismo andino y la ingeniería autosustentable.
              </p>

              {/* Academic & Professional Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-amberGold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Diseñador Gráfico Industrial
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                      {founder.almaMater}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 flex items-start gap-3">
                  <Award className="w-5 h-5 text-forest-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Master en Pre-Prensa Digital
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans mt-0.5">
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
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-400 block mb-1">
              Trayectoria Histórica
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              De 1986 a la Era AOL-DOMO
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 sm:space-y-10">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-forest-500 group-hover:border-amberGold group-hover:scale-125 transition-all duration-300" />

                <div className="bg-obsidian-900/60 p-5 rounded-2xl border border-white/5 hover:border-white/15 transition-colors">
                  <span className="text-xs font-mono font-bold text-amberGold px-2 py-0.5 rounded bg-amberGold/10 inline-block mb-1.5">
                    {step.year}
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
