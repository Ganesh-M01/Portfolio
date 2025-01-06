import React from 'react';
import styled from 'styled-components';

const Button = ({ platform, url }) => {
  const renderIcon = () => {
    if (platform === "LinkedIn") {
      return (
        <svg viewBox="0 0 16 16" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="svgIcon">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
      );
    } else if (platform === "GitHub") {
      return (
        <svg viewBox="0 0 16 16" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="svgIcon">
          <path d="M8 0C3.577 0 0 3.577 0 8c0 3.536 2.292 6.538 5.47 7.591.4.074.55-.173.55-.385 0-.19-.007-.693-.011-1.362-2.25.489-2.726-1.083-2.726-1.083-.368-.933-.898-1.182-.898-1.182-.735-.5.056-.49.056-.49.815.057 1.244.836 1.244.836.724 1.239 1.898.88 2.358.673.073-.524.284-.88.516-1.082-1.83-.208-3.748-.915-3.748-4.066 0-.897.322-1.63.854-2.208-.086-.209-.37-1.047.079-2.184 0 0 .692-.222 2.27.847A7.91 7.91 0 018 3.066c.697.003 1.394.094 2.046.275 1.578-1.069 2.27-.847 2.27-.847.449 1.137.165 1.975.079 2.184.533.578.854 1.311.854 2.208 0 3.166-1.93 3.86-3.759 4.062.288.247.546.735.546 1.482 0 2.161-1.921 3.859-3.748 4.066.291.25.548.742.548 1.494 0 1.08-.01 1.95-.01 2.216 0 .215.146.463.55.384C13.708 14.538 16 11.536 16 8c0-4.423-3.577-8-8-8z" />
        </svg>
      );
    }
  };

  return (
    <StyledWrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="Btn">
          {renderIcon()}
          <span className="text">{platform}</span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;
    cursor: pointer;
    position: relative;
    background: #0274b3;
  }

  .svgIcon {
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition-duration: 0.4s;
  }

  .Btn:hover {
    width: 110px;
    transition-duration: 0.4s;
    border-radius: 30px;
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Btn:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }
`;

export default Button;
