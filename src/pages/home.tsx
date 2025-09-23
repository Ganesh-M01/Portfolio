import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <div className="content">
        <h1>Ganesh R</h1>
        <h2>
          <span>
            <Typewriter
              words={['Fullstack Developer', 'Data Analyst', 'ML Engineer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </h2>
        <StyledButton><br/><br/>
          <a
            href="https://drive.google.com/file/d/1HU4ZMo2DhXrgiR-HnqtplNnZvTCtytRC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Software Resume</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1znBfTC_NgAJRF8o6WR6I41mrowIHMDzG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '1.5rem' }}
          >
            <button>AI Resume</button>
          </a>
        </StyledButton>
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  text-align: center;

  .content {
    h1 {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      color: rgb(211, 255, 214); /* Green theme for the typewriter text */
      font-weight: normal;
      margin-left: 15px; /* Move slightly to the right */

      span {
        font-weight: bold;
      }
    }
  }
`;

const StyledButton = styled.div`
  margin-top: 1.5rem;

  a {
    text-decoration: none;
  }

  button {
    color: white;
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-top: 2rem;
    cursor: pointer;
  }

  button::before {
    margin-left: auto;
  }

  button::after,
  button::before {
    content: '';
    width: 0%;
    height: 2px;
    background:rgb(4, 184, 28);
    display: block;
    transition: 0.5s;
  }

  button:hover::after,
  button:hover::before {
    width: 100%;
  }
`;

export default Home;
