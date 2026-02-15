import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
    const leftQuestions = [
        'How do we start working together?',
        'Do you work with international clients?',
        'What if I only need one service (like a website)?',
        'How much does a project usually cost?'
    ];

    const rightAnswers = [
        'How long does a typical project take?',
        'Do I need to have a strategy before we start?',
        'Will I be able to edit the website after launch?',
        'I had a rough experience before?'
    ];

    const testimonials = [
        {
            name: 'Sophie Langford',
            position: 'Founder, TechStart',
            text: 'We needed a set of guidance that felt clear, but also flexible. Nymera gave us a framework that made sense, but also left room for something new.',
            position_style: 'top-left'
        },
        {
            name: 'Ezgi Keon',
            position: 'CEO, Digital Ventures',
            text: 'Nymera helped us build a brand that stands out from the noise. They delivered comfort and structure without being rigid. Just what we needed.',
            position_style: 'top-center'
        },
        {
            name: 'Daniel Reyes',
            position: 'Marketing Director',
            text: 'They didn\'t just design a website — they helped us shape our entire digital presence. Smart, strategic, and the right fit for our business.',
            position_style: 'top-right'
        },
        {
            name: 'Matteo Bianchi',
            position: 'Product Manager',
            text: 'Working with Nymera felt different. They listened, adapted, and delivered exactly what we were looking for — clarity, structure, and quality.',
            position_style: 'bottom-left'
        },
        {
            name: 'Lucas Meyer',
            position: 'Startup Founder',
            text: 'We had goals but no clear path. Nymera gave us a system that speaks to our audience, fits our vision, and actually works. Pretty amazing result.',
            position_style: 'bottom-right'
        }
    ];

    const stats = [
        { number: '502', label: 'launched projects over last year' },
        { number: '682', label: 'clients who came back for more' }
    ];

    return (
        <section className="trust-section">
            <div className="trust-container">
                <div className="section-label">
                    <span className="plus-icon">+</span>
                    <p>Who we are and<br />why clients trust us</p>
                </div>

                <h2 className="trust-title">
                    <span className="highlight">Trust</span> that started<br />
                    with <span className="highlight">the first project</span>
                </h2>

                <div className="trust-content">
                    {/* Top Area: Eagle + Testimonials */}
                    <div className="top-visual-area">
                        {/* Eagle Background Image */}
                        <div className="eagle-center">
                            <img src="/Eagle.png" alt="Trust" className="eagle-image" />
                        </div>

                        {/* Testimonial Cards Floating Around */}
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={`testimonial-card ${testimonial.position_style}`}>
                                <div className="testimonial-header">
                                    <div className="avatar"></div>
                                    <div className="testimonial-name">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                        ))}

                        {/* Mid-floating text */}
                        <h3 className="floating-title left">You<br />asked</h3>
                        <h3 className="floating-title right">We<br />answered</h3>
                    </div>

                    {/* Bottom Area: Q&A Lists */}
                    <div className="bottom-qa-area">
                        {/* Left Side - You Asked List */}
                        <div className="qa-column">
                            {leftQuestions.map((question, index) => (
                                <div key={index} className="qa-item">
                                    <p>{question}</p>
                                    <div className="qa-arrow-box">
                                        <span className="qa-arrow">↓</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - We Answered List */}
                        <div className="qa-column">
                            {rightAnswers.map((answer, index) => (
                                <div key={index} className="qa-item answer-item">
                                    <p>{answer}</p>
                                    <div className="qa-arrow-box">
                                        <span className="qa-arrow">↓</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
