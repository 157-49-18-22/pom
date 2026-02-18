import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Works for both window scroll and .app container scroll
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            const appEl = document.querySelector('.app');
            const appScrolled = appEl ? appEl.scrollTop : 0;
            setVisible(scrolled > 150 || appScrolled > 150);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Also listen on .app in case it's the scroll container
        const appEl = document.querySelector('.app');
        if (appEl) {
            appEl.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (appEl) appEl.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Scroll both window and .app to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const appEl = document.querySelector('.app');
        if (appEl) appEl.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const button = (
        <button
            className={`back-to-top ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <svg className="btn-ring" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" />
            </svg>
            <span className="btn-arrow">↑</span>
        </button>
    );

    return ReactDOM.createPortal(button, document.body);
};

export default BackToTopButton;
