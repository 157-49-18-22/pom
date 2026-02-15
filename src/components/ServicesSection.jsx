import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            id: 1,
            title: 'Website Development',
            subtitle: 'Sites that lead to actions',
            gradient: 'linear-gradient(180deg, #0a0015 0%, #1a0033 40%, #4a0080 70%, #b024ff 100%)',
            description: ''
        },
        {
            id: 2,
            title: 'Branding & Visual Identity',
            subtitle: 'Identity that reflects your meaning',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 70%, #ff2ea6 100%)',
            description: ''
        },
        {
            id: 3,
            title: 'Digital Marketing : SMM, Ads, Email',
            subtitle: 'Performance-driven digital presence',
            smallText: 'You don\'t need everything — just the right things.',
            gradient: 'linear-gradient(180deg, #0a0015 0%, #2a0050 40%, #6a0dad 70%, #b024ff 100%)',
            description: ''
        },
        {
            id: 4,
            title: 'Creative & Copywriting',
            subtitle: 'Texts and ideas that work for business',
            gradient: 'linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)',
            isLight: true,
            description: 'We write copy for websites, presentations, socials, and key communications. We also develop creative ideas for visuals, ads, and content that people actually read.'
        },
        {
            id: 5,
            title: 'Full-Cycle Digital Launch',
            subtitle: 'From meaning to conversion',
            gradient: 'linear-gradient(180deg, #0a0015 0%, #2a0050 40%, #6a0dad 70%, #b024ff 100%)',
            description: ''
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2 className="services-title">
                        We choose <span className="highlight">the tools for your<br />specific goals.</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-card ${hoveredService === service.id ? 'hovered' : ''} ${service.isLight ? 'light' : ''}`}
                            style={{ background: service.gradient }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-subtitle">{service.subtitle}</p>
                                {service.smallText && (
                                    <p className="service-small-text">{service.smallText}</p>
                                )}
                                {hoveredService === service.id && service.description && (
                                    <p className="service-description">{service.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-footer">
                    <div className="footer-content">
                        <div className="footer-logo">//Nymera</div>
                        <div className="footer-text">
                            <p>We don't believe in <span className="dim">one-size-fits-all solutions.</span> You bring the request — we bring the mix of tools that <span className="highlight-pink">will actually work.</span></p>
                        </div>
                        <button className="find-service-btn">
                            Find the right service
                            <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
