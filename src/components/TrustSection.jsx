import React, { useState } from 'react';
import './TrustSection.css';

const TrustSection = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const leftQuestions = [
        {
            id: 'l1',
            question: 'How do we start working together?',
            answer: 'We start with a discovery call to understand your needs, followed by a proposal and kickoff meeting.'
        },
        {
            id: 'l2',
            question: 'Do you work with international clients?',
            answer: 'Yes, we work with clients globally and are accustomed to managing different time zones.'
        },
        {
            id: 'l3',
            question: 'What if I only need one service (like a website)?',
            answer: 'That works. We can jump in at any stage — full cycle or just design, copy, development, or strategy.'
        },
        {
            id: 'l4',
            question: 'How much does a project usually cost?',
            answer: 'Costs vary based on scope and complexity. We provide custom quotes after our initial consultation.'
        }
    ];

    const rightAnswers = [
        {
            id: 'r1',
            question: 'How long does a typical project take?',
            answer: 'Timelines depend on the project size, but typically range from 4-8 weeks for a standard website.'
        },
        {
            id: 'r2',
            question: 'Do I need to have a strategy before we start?',
            answer: 'No. If you already have one — great. If not, we\'ll help shape it together before jumping into design or development.'
        },
        {
            id: 'r3',
            question: 'Will I be able to edit the website after launch?',
            answer: 'Absolutely. We build sites that are easy for you to manage and update on your own.'
        },
        {
            id: 'r4',
            question: 'Had a rough experience before?',
            answer: 'We prioritize clear communication and transparency to ensure a smooth and positive experience.'
        }
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
                            <video className="eagle-image" autoPlay loop muted playsInline>
                                <source src="/video2.webm" type="video/webm" />
                            </video>
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
                            {leftQuestions.map((item) => (
                                <div
                                    key={item.id}
                                    className={`qa-item ${expandedId === item.id ? 'expanded' : ''}`}
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    <div className="qa-header">
                                        <p>{item.question}</p>
                                        <div className="qa-arrow-box">
                                            <span className="qa-arrow">{expandedId === item.id ? '↑' : '↓'}</span>
                                        </div>
                                    </div>
                                    {expandedId === item.id && (
                                        <div className="qa-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side - We Answered List */}
                        <div className="qa-column">
                            {rightAnswers.map((item) => (
                                <div
                                    key={item.id}
                                    className={`qa-item ${expandedId === item.id ? 'expanded' : ''}`}
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    <div className="qa-header">
                                        <p>{item.question}</p>
                                        <div className="qa-arrow-box">
                                            <span className="qa-arrow">{expandedId === item.id ? '↑' : '↓'}</span>
                                        </div>
                                    </div>
                                    {expandedId === item.id && (
                                        <div className="qa-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
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
