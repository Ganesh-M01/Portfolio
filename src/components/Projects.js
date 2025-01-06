import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Chatbot Integration",
        description: "A chatbot for a faculty appraisal system.",
        link: "https://github.com/ganesh/chatbot",
    },
    {
        title: "Motion Blur Detection",
        description: "Classified images into blurred and sharp categories.",
        link: "https://github.com/ganesh/motion-blur",
    },
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
