import React, { Component } from 'react';
import './form-card.css';

const FormCard = ({ title, children }) => (

  <div className="form-card">
    <div className="form-card__header">
      <span>{title || 'Title'}</span>
    </div>
    <div className="form-card__content">
      {children}
    </div>
  </div>
);

export default FormCard;
