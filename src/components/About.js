import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            className="about-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>About Me</h1>
            <p>
                Hi! I'm Ganesh, a developer with experience in web development, data visualization,
                and AI/ML. I enjoy turning ideas into functional, user-friendly solutions.
            </p>
        </motion.div>
    );
};

export default About;
