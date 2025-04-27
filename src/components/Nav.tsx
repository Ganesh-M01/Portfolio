import styled from 'styled-components';

const Button = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledWrapper>
      <div className="nav">
        <div className="container">
          <a className="btn" href="#home" onClick={handleSmoothScroll}>Home</a>
          <a className="btn" href="#projects" onClick={handleSmoothScroll}>Projects</a>
          <a className="btn" href="#about" onClick={handleSmoothScroll}>About</a>
          <a className="btn" href="#contact" onClick={handleSmoothScroll}>Contact</a>
          <svg className="outline" overflow="visible" width={400} height={60} viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="rect" pathLength={100} x={0} y={0} width={400} height={60} fill="transparent" strokeWidth={5} />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #fff;
  }

  .nav {
    position: fixed;
    top: 50px; /* Moved down */
    right: 50px; /* Moved to the left */
    width: 400px;
    height: 60px;
    z-index: 1000;
  }

  .container {
    position: relative;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .btn {
    padding: 0.5em 1.5em;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;
  }

  .btn:hover {
    background: #fff3;
  }
`;

export default Button;
