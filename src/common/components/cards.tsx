import React from 'react';

interface CardProps {
  title: string;
  text: string;
  imgSrc?: string;
  footer?: string;
}

export const Card: React.FC<CardProps> = ({ title, text, imgSrc, footer }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt={title} style={{ height: '30px', width: '40px'}}/>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
