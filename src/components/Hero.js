import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const [currentText, setCurrentText] = useState(0);
    const [animate, setAnimate] = useState(true);
    const roles = ['Fullstack Developer', 'DevOps Engineer', 'Data Analyst'];

    useEffect(() => {
        // Trigger reanimation
        setAnimate(false);
        const reanimateTimeout = setTimeout(() => setAnimate(true), 50);

        // Cycle through text
        const textTimeout = setTimeout(() => {
            setCurrentText((prev) => (prev + 1) % roles.length);
        }, 5000); // Change text every 3 seconds

        return () => {
            clearTimeout(textTimeout);
            clearTimeout(reanimateTimeout);
        };
    }, [currentText]);

    return (
        <motion.div
            className="hero-section"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <span style={{ fontSize: '100px' }}>GANESH</span>
            <div className={`typewriter ${animate ? 'animate' : ''}`}>
                <h1>{roles[currentText]}</h1>
            </div>
            <div class="container py-5 text-center">
                <a href="/projects" class="link pop-on-hover">View Projectsa</a>
            </div>
        </motion.div>
    );
};

export default Hero;
