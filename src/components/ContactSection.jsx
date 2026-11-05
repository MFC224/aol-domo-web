import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyContact, buildWhatsAppUrl } from '../data/ecosystem';

export default function ContactSection() {
  const [selectedDivision, setSelectedDivision] = useState("AOL-DOMO (Hábitats Geodésicos)");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const divisions = [
    "AOL-DOMO (Hábitats Geodésicos & Bioarquitectura)",
    "ATAKAU (Colección Textil & Moda Ancestral)",
    "JyR CONSULT (Ingeniería & Consultoría de Proyectos)",
    "HANDELCON (Inmobiliaria & Construcción)",
    "TERRA (Casas de Campo & Terrenos Sostenibles)",
    "PUBLIMARKET (Diseño & Señalética Patrimonial)",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola Rafael Ochoa,\n\nMi nombre es: ${formData.nombre}\nDivisión de interés: ${selectedDivision}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`;
    window.open(buildWhatsAppUrl(message), '_blank');
    setSubmitted(true);
  };

  const directWhatsAppUrl = buildWhatsAppUrl("Hola Rafael, deseo contactarme con AOL-DOMO");

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-obsidian-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="section-eyebrow">
                Atención Directa
              </span>
              <h2 className="section-title">
                Inicie su Proyecto con AOL-DOMO
              </h2>
              <p className="section-desc">
                Coordinación directa con la dirección ejecutiva de Rafael Francisco Ochoa Rodríguez para adquisiciones, desarrollo de hábitats, colecciones textiles y consultoría técnica.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-obsidian-950 border border-white/10 hover:border-amberGold/40 transition-colors group active:scale-98"
              >
                <div className="p-3.5 rounded-xl bg-forest-900/60 text-forest-300 group-hover:bg-amberGold group-hover:text-obsidian-950 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                    Teléfono & WhatsApp
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {companyContact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${companyContact.emailAol}`}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-obsidian-950 border border-white/10 hover:border-amberGold/40 transition-colors group active:scale-98"
              >
                <div className="p-3.5 rounded-xl bg-forest-900/60 text-forest-300 group-hover:bg-amberGold group-hover:text-obsidian-950 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                    Correos Electrónicos
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white block">
                    {companyContact.emailAol}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 block">
                    {companyContact.emailPersonal}
                  </span>
                </div>
              </a>

              <a
                href="#ubicacion"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-obsidian-950 border border-white/10 hover:border-amberGold/40 transition-colors group active:scale-98"
              >
                <div className="p-3.5 rounded-xl bg-forest-900/60 text-forest-300 group-hover:bg-amberGold group-hover:text-obsidian-950 transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                      Sede Central AOL
                    </span>
                    <span className="text-xs text-amberGold font-semibold group-hover:underline flex items-center gap-0.5">
                      Ver mapa ↓
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                    {companyContact.streetAddress}, Urb. Magisterial
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 block">
                    {companyContact.cityRegion}
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Badge */}
            <div className="p-4 rounded-2xl bg-forest-950/70 border border-forest-700/40">
              <span className="text-xs sm:text-sm font-semibold text-forest-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amberGold flex-shrink-0" />
                <span>Atención a clientes particulares, empresas e instituciones</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                Formulario de Consulta Directa
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Division Selector */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    División o Empresa de Interés
                  </label>
                  <select
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-base focus:outline-none focus:border-amberGold transition-colors"
                  >
                    {divisions.map((d, i) => (
                      <option key={i} value={d} className="bg-obsidian-950 text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-base focus:outline-none focus:border-amberGold transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+51 987 654 321"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-base focus:outline-none focus:border-amberGold transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-base focus:outline-none focus:border-amberGold transition-colors placeholder:text-slate-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Detalles de su Requerimiento *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describa su proyecto, ubicación (ej. Valle Sagrado, Cusco, etc.), medidas o dudas para que podamos orientarle adecuadamente..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-base focus:outline-none focus:border-amberGold transition-colors resize-none placeholder:text-slate-500"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amberGold hover:bg-amberGold-light text-obsidian-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amberGold/20 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta vía WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {submitted && (
                  <p className="text-xs sm:text-sm text-forest-300 text-center mt-2 font-semibold">
                    Redirigiendo a WhatsApp de Rafael Francisco Ochoa...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
