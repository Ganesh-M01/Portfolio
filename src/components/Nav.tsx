import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = () => {
  const [proximity, setProximity] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const proximityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!proximityRef.current) return;
      const rect = proximityRef.current.getBoundingClientRect();
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        setProximity(true);
      } else {
        setProximity(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <div className={`nav${proximity ? ' nav-green-outline' : ''}`} ref={navRef}>
        <div className="container">
          <a className="btn" href="#home" onClick={handleSmoothScroll}><span>Home</span></a>
          <a className="btn" href="#about" onClick={handleSmoothScroll}><span>About</span></a>
          <a className="btn" href="#projects" onClick={handleSmoothScroll}><span>Projects</span></a>
          <a className="btn" href="#contact" onClick={handleSmoothScroll}><span>Contact</span></a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .nav {
    position: fixed;
    top: 30px;
    right: 30px;
    width: auto;
    min-width: 320px;
    height: 56px;
    z-index: 1000;
    background: rgba(20, 20, 30, 0.85);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border: 2.5px solid transparent;
    transition: border 0.3s;
  }
  .nav.nav-green-outline {
    border: 2.5px solid #33ac00;
    box-shadow: none;
  }

  .container {
    position: relative;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    padding: 0;
  }

  .btn {
    padding: 0.5em 1.2em;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1.1rem;
    background: transparent;
    border: none;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .btn::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    background: rgba(100,255,100,0.18);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s cubic-bezier(0.4,0,0.2,1), height 0.4s cubic-bezier(0.4,0,0.2,1);
    z-index: 0;
  }

  .btn:hover::before {
    width: 220%;
    height: 500%;
  }

  .btn span {
    position: relative;
    z-index: 2;
  }

  .btn:hover {
    background: rgba(100, 255, 100, 0.15);
    color: #baffc9;
    box-shadow: 0 2px 8px 0 rgba(0,255,100,0.08);
    transform: translateY(-3px) scale(1.07) rotate(-2deg);
  }

  .outline {
    display: none;
  }
`;

export default Button;
