import React, { useState } from 'react';
import './Projects.css';

const projectDetails = [
  {
    title: 'Recommendation Algorithm',
    date: 'February 2025',
    type: 'Hackathon',
    short: 'A real-time product recommendation system using hybrid filtering to boost personalization',
    long: `This project was developed during a hackathon and implements a real-time product recommendation system. It uses a hybrid filtering approach, combining collaborative and content-based filtering to provide highly personalized recommendations. The system is designed for scalability and fast response, and was shown to increase user engagement and sales in a simulated e-commerce environment. Technologies used: Python, scikit-learn, Node.js, MongoDB, React.`
  },
  {
    title: 'Title',
    date: 'From - to',
    type: 'Self / Intern / Hackathon',
    short: 'Short Description',
    long: `This is a placeholder for another project. Replace this with a detailed description of your project, including the technologies used, your role, and the impact or results achieved.`
  },
  {
    title: 'Title',
    date: 'From - to',
    type: 'self / Intern /Hackathon',
    short: 'Short Description',
    long: `This is a placeholder for a third project. Add your own detailed project description here.`
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="projects-wrapper">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="container">
        {projectDetails.map((proj, idx) => (
          <div className="box" key={idx}>
            <span></span>
            <div className="content">
              <small>{proj.date}</small>
              <h2>{proj.title}</h2>
              <p><strong>{proj.type}</strong><br /><hr />{proj.short}</p>
              <a href="#" onClick={e => { e.preventDefault(); setOpenIndex(idx); }}>Show More</a>
            </div>
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <div className="project-modal-overlay" onClick={() => setOpenIndex(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpenIndex(null)}>&times;</button>
            <h2>{projectDetails[openIndex].title}</h2>
            <small>{projectDetails[openIndex].date}</small>
            <p style={{ marginTop: '1em' }}>{projectDetails[openIndex].long}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
