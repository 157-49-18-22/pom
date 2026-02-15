import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ProjectsSection from './components/ProjectsSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <ClientsSection />
            <ProjectsSection />
            <TrustSection />
            <Footer />
        </div>
    );
}

export default App;
