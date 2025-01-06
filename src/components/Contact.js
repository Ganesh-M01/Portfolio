import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
                <label>Message</label>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="btn-primary">Send</button>
            </form>
        </div>
    );
};

export default Contact;
