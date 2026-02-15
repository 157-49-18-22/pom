import React, { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const features = [
        {
            number: '01',
            title: 'Structured flow and open dialogue',
            subtitle: 'every step of the way.',
            description: 'We combine strategy, design, and content to build solutions that truly align and deliver results.'
        },
        {
            number: '02',
            title: 'Up to $1500 in savings per project',
            subtitle: 'no double spend',
            description: 'Every structure, block, and line of copy is built from scratch — tailored to your product, audience and real business goals.'
        },
        {
            number: '03',
            title: 'No templates — just what your business really needs',
            subtitle: '',
            description: 'Every structure, block, and line of copy is built from scratch — tailored to your product, audience and real business goals.'
        },
        {
            number: '04',
            title: 'A flexible approach without cutting corners',
            subtitle: '',
            description: 'We adapt to your workflow while maintaining the highest standards of quality and attention to detail.'
        }
    ];

    const handlePrevious = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
        setCurrentIndex(newIndex);
        setHoveredCard(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
        setHoveredCard(newIndex);
    };

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-left">
                    <div className="tagline">
                        <span className="star-icon">✦</span>
                        <p>Who we are and <br /> why clients trust us</p>
                    </div>

                    <div className="feature-description">
                        <p>{features[currentIndex].description}</p>
                        <div className="nav-arrows">
                            <button className="arrow-btn" onClick={handlePrevious}>←</button>
                            <button className="arrow-btn" onClick={handleNext}>→</button>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <h2 className="about-text">
                        We're a <span className="highlight">full-cycle</span> digital agency that dives
                        deep into your business and <span className="highlight">works as a</span>
                        <br />
                        <span className="highlight">partner</span>, not just a provider.
                    </h2>

                    <div className="feature-cards">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card ${hoveredCard === index ? 'expanded' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-number">{feature.number}</div>
                                <div className="card-content">
                                    <h3>{feature.title}</h3>
                                    {feature.subtitle && <p className="card-subtitle">{feature.subtitle}</p>}
                                    {hoveredCard === index && (
                                        <p className="card-description">{feature.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
