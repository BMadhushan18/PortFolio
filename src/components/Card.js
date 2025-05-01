import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, description, image, link, iconClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay"></div>
        {iconClass && <i className={`card-icon ${iconClass}`}></i>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-link">
          <span>Explore</span>
          <svg className="card-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      <div className="card-shine"></div>
    </div>
  );
};

export default Card;