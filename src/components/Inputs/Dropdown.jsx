import React from 'react';
import './inputs.css';

const Dropdown = ({ elements, placeholder, tip }) => (
  <div className="dropdown">
    <select>
      <option value="" disabled selected hidden>{placeholder}</option>
      {elements.map(el => <option value={el.id}> {el.name} </option>)}
    </select>
    {tip && (
    <div className="dropdown__tip">
      {tip}
    </div>
    )}
  </div>
);


export default Dropdown;
