import React from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
    const clientTypes = [
        {
            number: '01',
            title: 'Personal brands and influencers',
            description: 'We engage creatives and public figures who deliver their online identity, craft a strong message, and show up with clarity in the attention.'
        },
        {
            number: '02',
            title: 'Small & medium sized businesses',
            description: 'Teams that are lean, who need more than a decent homepage and a digital presence that actually supports their business.'
        },
        {
            number: '03',
            title: 'Founders and startup teams',
            description: 'Fast-paced companies searching for clarity, speed, and comfortable clarity across every touchpoint.'
        },
        {
            number: '04',
            title: 'Enterprise-level businesses',
            description: 'Companies navigating real-world complexity, multi-layer strategy, and high-stakes execution — without wasting you chaos or overcomplicated.'
        }
    ];

    return (
        <section className="clients-section">
            <div className="clients-container">
                <div className="clients-content">
                    <div className="header-label">
                        <span className="plus-icon">+</span>
                        <p>We're the<br />right fit for</p>
                    </div>

                    <h2 className="clients-title">
                        We <span className="highlight">do our best<br />work</span> with
                    </h2>

                    <div className="client-types-grid">
                        {clientTypes.map((client) => (
                            <div key={client.number} className="client-type-card">
                                <div className="client-number">{client.number}</div>
                                <div className="client-info">
                                    <h3>{client.title}</h3>
                                    <p>{client.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
