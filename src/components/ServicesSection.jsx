import React, { useState } from 'react';
import useScrollTransform from '../hooks/useScrollTransform';
import './ServicesSection.css';

const ServicesSection = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const contentRef = useScrollTransform('left');

    const services = [
        {
            id: 1,
            title: 'Website Development',
            subtitle: 'Sites that lead to actions',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 90%, #ff2ea6 100%)',
            description: 'We create websites from scratch — structure, text, design, layout and basic SEO. From landing pages and portfolios to corporate sites, multi-page projects, blogs and e-commerce.'
        },
        {
            id: 2,
            title: 'Branding & Visual Identity',
            subtitle: 'Identity that reflects your meaning',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 90%, #ff2ea6 100%)',
            description: 'We build brands that stand out. From logo design and color palettes to full brand guidelines that ensure consistency across all touchpoints.'
        },
        {
            id: 3,
            title: 'Digital Marketing : SMM, Ads, Email',
            subtitle: 'Performance-driven digital presence',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 90%, #ff2ea6 100%)',
            description: 'We manage your social media, run targeted ad campaigns, and create email strategies that convert leads into loyal customers.'
        },
        {
            id: 4,
            title: 'Creative & Copywriting',
            subtitle: 'Texts and ideas that work for business',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 90%, #ff2ea6 100%)',
            description: 'We write copy for websites, presentations, socials, and key communications. We also develop creative ideas for visuals, ads, and content that people actually read.'
        },
        {
            id: 5,
            title: 'Full-Cycle Digital Launch',
            subtitle: 'From meaning to conversion',
            gradient: 'linear-gradient(180deg, #1a0033 0%, #4a0080 40%, #b024ff 90%, #ff2ea6 100%)',
            description: 'A complete package from idea to launch. We handle strategy, design, development, and marketing to get your product to market fast and effectively.'
        }
    ];

    const ServiceCard = ({ service }) => (
        <div
            className={`service-card ${hoveredService === service.id ? 'hovered' : ''} ${service.isLight ? 'light' : ''}`}
            style={{ background: service.gradient }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
        >
            <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                {hoveredService === service.id && service.description && (
                    <p className="service-description">{service.description}</p>
                )}
            </div>
        </div>
    );

    return (
        <section className="services-section">
            <div className="services-container" ref={contentRef}>
                <div className="services-header">
                    <h2 className="services-title">
                        We choose <span className="highlight">the tools for your<br />specific goals.</span>
                    </h2>
                </div>

                <div className="services-custom-layout">
                    {/* Row 1: Dev, Branding, Text, Marketing */}
                    <div className="services-row-top">
                        <ServiceCard service={services[0]} />
                        <ServiceCard service={services[1]} />
                        <div className="center-text-block">
                            <p>You don't need everything — just the right things.</p>
                        </div>
                        <ServiceCard service={services[2]} />
                    </div>

                    {/* Row 2: Info Block (Left), Creative + Full-Cycle (Right) */}
                    <div className="services-row-bottom">
                        {/* Left Side Info */}
                        <div className="bottom-left-info">
                            <div className="footer-logo">//Nymera</div>
                            <div className="footer-text">
                                <p>We don't believe in <span className="dim">one-size-fits-all solutions.</span> You bring the request — we bring the mix of tools that <span className="highlight-pink">will actually work.</span></p>
                            </div>
                            <button className="find-service-btn">
                                Find the right service
                                <span className="arrow">→</span>
                            </button>
                        </div>

                        {/* Right Side Cards */}
                        <div className="bottom-right-cards">
                            <ServiceCard service={services[3]} />
                            <ServiceCard service={services[4]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
