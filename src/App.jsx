import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CompaniesLoop from './components/CompaniesLoop';
import EcosystemGrid from './components/EcosystemGrid';
import PatrimonialHeritage from './components/PatrimonialHeritage';
import FounderStory from './components/FounderStory';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CompanyModal from './components/CompanyModal';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-amberGold selection:text-obsidian-950">
      
      {/* Global Fixed Navbar */}
      <Navbar onSelectCompany={handleSelectCompany} />

      <main className="flex-grow">
        {/* Hero Banner with Panoramic Carousel */}
        <HeroBanner />

        {/* Las 5 Estrellas / Empresas en Infinite Loop con fondo verde difuminado */}
        <CompaniesLoop onSelectCompany={handleSelectCompany} />

        {/* Ecosistema Detallado y Grid de Divisiones */}
        <EcosystemGrid onSelectCompany={handleSelectCompany} />

        {/* Vitrina de Hitos Patrimoniales: Machu Picchu, Manu, Universidad Andina */}
        <PatrimonialHeritage />

        {/* Historia del Fundador: Rafael Francisco Ochoa Rodríguez ("Rafo8a") */}
        <FounderStory />

        {/* Sección de Contacto Corporativo & Cotización WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer Unificado */}
      <Footer />

      {/* Modal de Detalle de Empresa al hacer clic en las estrellas */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}
