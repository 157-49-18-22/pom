import React, { useState } from 'react';
import useScrollTransform from '../hooks/useScrollTransform';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const contentRef = useScrollTransform('left');

    const projects = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'NEO Home',
            description: 'Brand messaging, visual aesthetics, and landing page design for a complete storytelling B2B experience.',
            stats: null
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Launch Prime',
            description: 'Complete digital presence for modern fitness brand.',
            stats: null
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Sklava — Tech Services for the Digital Era',
            description: 'Brand messaging, visual aesthetics, and landing page design for a complete storytelling B2B experience.',
            stats: {
                projects: '260 launched projects over last year',
                rating: '3★ public user rating'
            }
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Master Build Wealth',
            description: 'Crypto investment platform with modern design.',
            stats: null
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-container" ref={contentRef}>
                <div className="projects-header">
                    <h2 className="projects-title">
                        Projects that <span className="highlight">speak<br />for themselves</span>
                    </h2>
                    <div className="navigation-buttons">
                        <button className="nav-btn prev">←</button>
                        <button className="nav-btn next">→</button>
                    </div>
                    <p className="projects-subtitle">
                        Selected work that shows<br />
                        what we bring to the table<br />
                        and what it looks like.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <div className="project-details">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                    {project.stats && (
                                        <div className="project-stats">
                                            <div className="stat">
                                                <span className="stat-number">260</span>
                                                <span className="stat-label">{project.stats.projects}</span>
                                            </div>
                                            <div className="stat">
                                                <span className="stat-number">3★</span>
                                                <span className="stat-label">{project.stats.rating}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
