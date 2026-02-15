import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <div className="title-wrapper">
                        <h1 className="hero-title">
                            Digital that
                            <span className="hero-subtext-inline">From idea <br /> to launch</span>
                        </h1>
                        <h1 className="hero-title indent">
                            moves deeper <span className="plus">+</span>
                        </h1>
                    </div>

                    <div className="cta-section">
                        <button className="cta-btn">
                            Get a free consultation
                            <span className="arrow">→</span>
                        </button>
                        <p className="cta-hint">
                            Leave a request right now <br />
                            and get a free 30-minute consultation.
                        </p>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-card">
                            <h3>30+</h3>
                            <p>services</p>
                            <span>We close the cycle: from branding to development.</span>
                        </div>
                        <div className="stat-card">
                            <h3>120+</h3>
                            <p>projects</p>
                            <span>Collaboration with clients across 15+ countries.</span>
                        </div>
                    </div>
                </div>

                <div className="hero-center">
                    <div className="main-image-wrapper">
                        <video className="hero-main-image" autoPlay loop muted playsInline>
                            <source src="/video1.webm" type="video/webm" />
                        </video>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="info-text">
                        No noise, no templates — <br />
                        just thoughtful strategy, <br />
                        aesthetic precision, and <br />
                        a team that delivers.
                    </div>

                    <div className="budget-card">
                        <img src="/Eagle.png" alt="Card Preview" className="budget-img" />
                        <div className="budget-info">
                            <span className="budget-amount">$250K+</span>
                            <p>ad budget</p>
                            <div className="plus-icon">+</div>
                            <p className="budget-desc">We know how to get leads without blowing your budget</p>
                            <div className="user-avatars">
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                            </div>
                        </div>
                    </div>

                    <div className="social-grid">
                        <div className="social-item linkedin">In</div>
                        <div className="social-row">
                            <div className="social-item twitter">X</div>
                            <div className="social-label">Social media</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="arrow-down">↓</div>
            </div>
        </section>
    );
};

export default Hero;
