import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <div className="card">
        <h1>About Me</h1>
        <p>
          A passionate and quick-learning pre-final year B.Tech student in <span>Artificial Intelligence & Data Science</span> with a keen interest in problem-solving, automation, and data-driven solutions. Experienced in <span>Android development, DevOps, and cloud infrastructure</span> with a focus on optimizing systems for efficiency and scalability. Skilled in <span>Infrastructure as Code (IaC), Terraform, CI/CD pipelines (CircleCI, Jenkins), and Datadog monitoring</span>, aiming to contribute innovative and impactful solutions to the technology community.
        </p>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .card {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid transparent;
    border-radius: 15px;
    padding: 2rem;
    max-width: 700px;
    text-align: center;
    color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);

    h1 {
      margin-bottom: 1rem;
      color: #d8b4ff; /* Green theme for the title */
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      text-align: justify;

      span {
        color: #d8b4ff; /* Light purple for highlighted text */
        font-weight: bold;
      }
    }

    /* Animated glowing borders */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      border: 2px solid transparent;
      box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
      animation: borderGlow 2s infinite alternate;
      pointer-events: none;
      mask: linear-gradient(to bottom right, #000 50%, transparent 50%);
      -webkit-mask: linear-gradient(to bottom right, #000 50%, transparent 50%);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      border: 2px solid transparent;
      box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
      animation: borderGlow 2s infinite alternate;
      pointer-events: none;
      mask: linear-gradient(to top left, #000 50%, transparent 50%);
      -webkit-mask: linear-gradient(to top left, #000 50%, transparent 50%);
    }
  }

  @keyframes borderGlow {
    0% {
      box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
    }
    100% {
      box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
    }
  }
`;

export default About;
