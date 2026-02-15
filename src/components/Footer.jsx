import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Left Section: Logo & Copyright */}
                    <div className="footer-left">
                        <h2 className="footer-logo">
                            <span className="logo-icon">///</span> Nymera
                        </h2>
                        <div className="footer-meta">
                            <div className="social-icons">
                                <a href="#" className="social-icon">In</a>
                                <a href="#" className="social-icon">X</a>
                            </div>
                            <p className="copyright">© 2025 Nymera.<br />All rights reserved.</p>
                        </div>
                    </div>

                    {/* Center Section: Tagline */}
                    <div className="footer-center">
                        <h2>You bring the idea.<br />We'll bring the plan.</h2>
                    </div>

                    {/* Right Section: Navigation & Contact */}
                    <div className="footer-right">
                        <div className="nav-column">
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Services</a>
                        </div>
                        <div className="nav-column">
                            <a href="#">Cases</a>
                            <a href="#">Reviews</a>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="contact-column">
                            <a href="mailto:nymera.studio@gmail.com" className="contact-email">nymera.studio@gmail.com</a>
                            <button className="consultation-btn">
                                <span>Get a consultation</span>
                                <div className="btn-circle">→</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
