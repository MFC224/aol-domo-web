import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onSelectCompany }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nuestras Empresas", href: "#empresas" },
    { name: "Ecosistema", href: "#ecosistema" },
    { name: "Hitos Patrimoniales", href: "#patrimonio" },
    { name: "Fundador", href: "#fundador" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3 sm:py-3.5 bg-obsidian-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/70' 
          : 'py-4 sm:py-5 bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo AOL-DOMO */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-br from-amberGold/60 via-forest-600/40 to-white/10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img 
                src="/assets/circle_aol.png" 
                alt="AOL-DOMO Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-slate-100 flex items-center gap-1.5">
                AOL-DOMO
                <span className="text-[10px] font-sans font-bold px-1.5 py-0.5 rounded bg-amberGold/15 text-amberGold border border-amberGold/30 uppercase tracking-widest">
                  Holding
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-sans tracking-tight">
                Creer es crear!!!
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amberGold transition-colors tracking-wide py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/51944100990?text=Hola%20Rafael,%20deseo%20informaci%C3%B3n%20sobre%20el%20holding%20AOL-DOMO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-obsidian-950 bg-amberGold hover:bg-amberGold-light rounded-xl transition-all duration-200 shadow-md shadow-amberGold/15"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contactar WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Hamburger Button with large tap area */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white active:scale-95 transition-all"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amberGold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950/98 border-b border-white/10 px-5 pt-4 pb-8 backdrop-blur-2xl animate-fade shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-amberGold active:bg-white/5 px-4 py-3 rounded-xl transition-colors border-b border-white/5"
              >
                {link.name}
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
