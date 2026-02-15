import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <span className="logo-icon">//</span>
                    <span className="logo-text">Nymera</span>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#cases">Cases</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#faq">FAQ</a>
                </div>

                <button className="contact-btn">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
