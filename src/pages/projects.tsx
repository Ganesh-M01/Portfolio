import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>Projects</h1>
      <div className="cards">
        <div className="card-container">
          <div className="side-card">
            <img src="./src/assets/Neon-Haze-Backgrounds.png" alt="Side Image 1" />
          </div>
          <div className="card">
            <img src="/assets/project1.jpg" alt="Project 1" />
            <h2>Project 1</h2>
            <p>General details about Project 1...</p>
          </div>
          <div className="side-card">
            <img src="/assets/side-image2.jpg" alt="Side Image 2" />
          </div>
        </div>
        <div className="card-container">
          <div className="side-card">
            <img src="/assets/side-image3.jpg" alt="Side Image 3" />
          </div>
          <div className="card">
            <img src="/assets/project2.jpg" alt="Project 2" />
            <h2>Project 2</h2>
            <p>General details about Project 2...</p>
          </div>
          <div className="side-card">
            <img src="/assets/side-image4.jpg" alt="Side Image 4" />
          </div>
        </div>
        <div className="card-container">
          <div className="side-card">
            <img src="/assets/side-image5.jpg" alt="Side Image 5" />
          </div>
          <div className="card">
            <img src="/assets/project3.jpg" alt="Project 3" />
            <h2>Project 3</h2>
            <p>General details about Project 3...</p>
          </div>
          <div className="side-card">
            <img src="/assets/side-image6.jpg" alt="Side Image 6" />
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  color: #fff;

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .card-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .card, .side-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  .card {
    flex-grow: 1;
    text-align: left;

    img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0.5rem;
      color: #fff;
    }

    p {
      color: #ccc;
    }
  }

  .side-card {
    width: 150px; /* Adjust as needed */
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default Projects;
