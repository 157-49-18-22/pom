import React from 'react';
import useScrollTransform from '../hooks/useScrollTransform';
import './Hero.css';

const Hero = () => {
    const heroContentRef = useScrollTransform('left');

    return (
        <section className="hero">
            <div className="hero-content" ref={heroContentRef}>
                <div className="hero-left">
                    <div className="title-wrapper">
                        <h1 className="hero-title">
                            <span className="title-light">Digital</span>
                            <span className="title-italic"> that</span>
                        </h1>
                        <h1 className="hero-title">
                            <span className="title-light">moves</span>
                        </h1>
                        <h1 className="hero-title title-last">
                            <span className="title-italic-bold">deeper</span>
                        </h1>
                        <div className="hero-tag-row">
                            <div className="hero-tag">
                                <span className="tag-plus">+</span>
                                <span className="tag-text">From idea to launch</span>
                            </div>
                        </div>
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

                        <div className="social-row">
                            <div className="social-item twitter">X</div>
                            <div className="social-label">Social media</div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
