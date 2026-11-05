import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Clock, 
  Car, 
  Plane, 
  Building2, 
  Compass, 
  MessageCircle,
  Map as MapIcon,
  Layers
} from 'lucide-react';
import { companyContact, buildWhatsAppUrl } from '../data/ecosystem';
import { useClipboard } from '../hooks/useClipboard';

export default function LocationSection() {
  const { copied, copy } = useClipboard(2500);
  const [mapType, setMapType] = useState('m'); // 'm' for roadmap, 'k' for satellite

  const whatsappVisitUrl = buildWhatsAppUrl(
    "Hola Rafael, deseo coordinar una visita o reunión presencial en la sede central de AOL-DOMO en Jr. Humberto Luna 105, Cusco."
  );

  // Google Maps embed URL using the official Google Place ID for aol-domo (centered street zoom)
  const embedUrl = mapType === 'k'
    ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-71.9489099!3d-13.524152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f4bb46d96a9%3A0x28d69ba16952ccbe!2saol-domo!5e1!3m2!1ses!2spe!4v1730770000000!5m2!1ses!2spe'
    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-71.9489099!3d-13.524152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f4bb46d96a9%3A0x28d69ba16952ccbe!2saol-domo!5e0!3m2!1ses!2spe!4v1730770000000!5m2!1ses!2spe';

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-obsidian-950 relative border-t border-white/5 overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-forest-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amberGold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="badge-forest mb-3">
            <Compass className="w-3.5 h-3.5 text-amberGold" />
            <span>Sede Central & Taller Creativo</span>
          </div>
          <h2 className="section-title">
            Ubicación del Holding <span className="text-amberGold">AOL-DOMO</span>
          </h2>
          <p className="section-desc mt-2.5">
            Nuestra sede ejecutiva y centro de desarrollo de hábitats, arte textil y consultoría técnica se encuentra en la emblemática Urbanización Magisterial, en el corazón del Cusco.
          </p>
        </div>

        {/* Main Grid: Card Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sede Card & Logistics */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* Primary Address Card */}
            <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amberGold/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-amberGold/10" />
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-900/80 border border-forest-600/40 text-amberGold flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amberGold block">
                    Dirección Oficial de AOL
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                    {companyContact.streetAddress}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-200">
                    {companyContact.urbanization}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {companyContact.cityRegion}
                  </p>
                </div>
              </div>

              {/* Reference point badge */}
              <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-obsidian-900/90 border border-white/5 text-xs sm:text-sm text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-forest-300 font-bold">
                  <Building2 className="w-4 h-4 text-amberGold flex-shrink-0" />
                  <span>Referencia de llegada:</span>
                </div>
                <p className="text-slate-300 pl-6 leading-relaxed">
                  A solo 1 cuadra del <strong className="text-white">Parque El Mapa</strong> y a 2 minutos de la <strong className="text-white">Av. La Cultura</strong>. Zona segura, residencial y con facilidad de estacionamiento.
                </p>
              </div>

              {/* Quick Actions Bar */}
              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => copy(companyContact.fullAddress)}
                  className="btn-dark"
                  title="Copiar dirección para GPS o Waze"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-bold">¡Dirección Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amberGold" />
                      <span>Copiar Dirección</span>
                    </>
                  )}
                </button>

                <a
                  href={companyContact.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Cómo Llegar (GPS)</span>
                </a>
              </div>

              <div className="mt-3">
                <a
                  href={companyContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>Abrir ubicación en la app de Google Maps</span>
                </a>
              </div>
            </div>

            {/* Travel Times & Accessibility */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Car className="w-4 h-4 text-amberGold" />
                <span>Tiempos de Llegada Aproximados</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-obsidian-900/80 border border-white/5 flex items-center gap-2.5">
                  <Plane className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Aeropuerto Velasco A.</span>
                    <span className="text-white font-bold">7 minutos</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-obsidian-900/80 border border-white/5 flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Plaza de Armas Cusco</span>
                    <span className="text-white font-bold">10 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Appointment */}
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-950/70 border border-forest-700/40 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amberGold flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-forest-200 font-bold block">
                  Atención en Sede y Visitas Técnicas:
                </span>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Lunes a Sábado • Previa coordinación con la dirección ejecutiva de Rafael Francisco Ochoa.
                </p>
                <a
                  href={whatsappVisitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2.5 text-amberGold hover:underline font-bold text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Coordinar cita presencial vía WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Centered on AOL-DOMO */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-panel p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex-1 flex flex-col relative">
              
              {/* Map Toolbar Controls */}
              <div className="px-3 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Google Maps en Vivo
                  </span>
                  <span className="text-xs text-amberGold font-semibold">
                    • Sede Central AOL-DOMO
                  </span>
                </div>

                {/* View Mode Toggle: Street vs Satellite */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-obsidian-900 border border-white/10">
                  <button
                    onClick={() => setMapType('m')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      mapType === 'm'
                        ? 'bg-amberGold text-obsidian-950 font-bold shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <MapIcon className="w-3.5 h-3.5" />
                    <span>Calles</span>
                  </button>
                  <button
                    onClick={() => setMapType('k')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      mapType === 'k'
                        ? 'bg-amberGold text-obsidian-950 font-bold shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Satélite</span>
                  </button>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="relative w-full flex-grow min-h-[340px] xs:min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 bg-obsidian-900">
                <iframe
                  title="Mapa de Ubicación - AOL Sede Central Cusco"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-105 contrast-105"
                />

                {/* Floating Pin Badge for AOL */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none">
                  <div className="px-3.5 py-2 rounded-xl bg-obsidian-950/90 backdrop-blur-md border border-amberGold/40 shadow-xl flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amberGold text-obsidian-950 flex items-center justify-center font-black text-xs">
                      A
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">
                        AOL-DOMO
                      </span>
                      <span className="text-[11px] text-amberGold font-semibold block leading-tight">
                        Jr. Humberto Luna 105
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps External Button on top right */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <a
                    href={companyContact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-obsidian-950/95 hover:bg-obsidian-900 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-2xl transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-amberGold" />
                    <span>Abrir en Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Footer caption */}
              <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span>📍 Ubicación exacta: {companyContact.streetAddress}, {companyContact.urbanization}, Cusco</span>
                <span className="text-slate-500">Centrado en la sede de AOL-DOMO</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
