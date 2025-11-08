import React from 'react';
import styled from 'styled-components';

const Card = ({ image, title }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        <figure className="card">
          <img
            src={image}
            alt={title || "3D Effect"}
            className="card_image"
          />
          {title && <figcaption className="card_title">{title}</figcaption>}
        </figure>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    perspective: 600px;
  }

  .card {
    width: 480px;
    height: 300px;
    background: #111;
    // border: 2px solid #555;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: rotateY(15deg) rotateX(10deg) translateZ(15px);
    box-shadow: 0 0 35px rgba(255, 255, 255, 0.7),
      0 0 60px rgba(255, 255, 200, 0.4);
  }

  .card_image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    transform: translateZ(0);
    transition: transform 0.5s ease;
  }

  .card:hover .card_image {
    transform: translateZ(40px) scale(1.05);
  }

  .card_title {
    color: yellow;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s;
    font: 700 1.5rem monospace;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    text-align: center;
    white-space: nowrap;
  }

  .card:hover .card_title {
    transform: translateZ(50px);
  }
`;

export default Card;
