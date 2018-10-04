import React, { Component } from 'react';
import './input-row.css';

const InputRow = ({ title, isRequired, children }) => (
  <div className="input-row">
    <div className="input-row__label">
      {title}
      { isRequired && <span>*</span>}
    </div>
    <div className="input-row__input-area">
      {children}
    </div>
  </div>
);

export default InputRow;
