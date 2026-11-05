import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onSelectCompany }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero", desc: "Portada & Visión" },
    { name: "Empresas", href: "#empresas", desc: "La Constelación de Marcas" },
    { name: "Ecosistema", href: "#ecosistema", desc: "Estructura Corporativa" },
    { name: "Patrimonio", href: "#patrimonio", desc: "Machu Picchu & Señalética" },
    { name: "Fundador", href: "#fundador", desc: "Rafael Francisco Ochoa" },
    { name: "Ubicación", href: "#ubicacion", desc: "Sede Central en Cusco" },
    { name: "Contacto", href: "#contacto", desc: "Atención & Cotizaciones" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3 bg-obsidian-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80' 
          : 'py-4 sm:py-5 bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name - Strictly non-wrapping */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-br from-amberGold/60 via-forest-600/40 to-white/10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img 
                src="/assets/circle_aol.png" 
                alt="AOL-DOMO Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white">
                  AOL-DOMO
                </span>
                <span className="text-[9px] font-sans font-bold px-1.5 py-0.5 rounded bg-amberGold/15 text-amberGold border border-amberGold/30 uppercase tracking-widest">
                  Holding
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-sans tracking-tight">
                Creer es crear!!!
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Clean, one-line, elegant spacing */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-300 hover:text-amberGold transition-colors tracking-wide py-1 whitespace-nowrap relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amberGold transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Button - Single line pill with no wrap */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/51944100990?text=Hola%20Rafael,%20deseo%20informaci%C3%B3n%20sobre%20el%20holding%20AOL-DOMO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-obsidian-950 bg-amberGold hover:bg-amberGold-light rounded-xl transition-all duration-200 shadow-md shadow-amberGold/15 whitespace-nowrap active:scale-95 flex-shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Contactar WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white active:scale-95 transition-all flex-shrink-0"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amberGold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/98 border-b border-white/10 px-5 pt-3 pb-8 backdrop-blur-2xl animate-fade shadow-2xl">
          <div className="flex flex-col space-y-1.5 max-w-lg mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:text-amberGold hover:bg-white/5 border-b border-white/5 transition-all"
              >
                <div>
                  <span className="text-base font-bold block">{link.name}</span>
                  <span className="text-xs text-slate-400 font-sans">{link.desc}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amberGold/70" />
              </a>
            ))}

            <div className="pt-4">
              <a
                href="https://wa.me/51944100990?text=Hola%20Rafael,%20deseo%20informaci%C3%B3n%20sobre%20el%20holding%20AOL-DOMO"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold uppercase tracking-wider text-obsidian-950 bg-amberGold hover:bg-amberGold-light rounded-xl shadow-lg active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
