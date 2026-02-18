import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                <div className="logo">
                    <span className="logo-icon">//</span>
                    <span className="logo-text">Nymera</span>
                </div>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#cases" onClick={() => setIsMenuOpen(false)}>Cases</a>
                    <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <button className="mobile-contact-btn">Contact Us</button>
                </div>

                <div className="nav-actions">
                    <button className="contact-btn desktop-only">
                        Contact Us
                    </button>

                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>

            <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        </nav>
    );
};

export default Navbar;
