import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Import the CSS file
import Button from './Button'; // Import the Button component

const About = () => {
    return (
        <motion.div
            className="about-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>About Me</h1>
            <h1>⚠️Dev is Cooking..... Please Wait⚠️</h1>

            <h2>Connect with Me</h2>
            <div className="social-links">
                <Button platform="LinkedIn" url="https://linkedin.com/in/yourusername" />
                <Button platform="GitHub" url="https://github.com/yourusername" />
            </div>
        </motion.div>
    );
};

export default About;
