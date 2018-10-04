import React, { Component, Fragment } from 'react';
import './inputs.css';

const MultilineInput = ({
  maxLength,
  placeholder,
  value,
  onChangeValue,
  name,
  rows,
}) => (
  <div className="multiline-input">
    <textarea
      name={name}
      className="multiline-input__textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChangeValue}
      maxLength={maxLength}
      rows={rows}
    />
    <div className="multiline-input__characters-info">
      <div> Max length { maxLength } characters</div>
      <div>{value.length}/{maxLength}</div>
    </div>
  </div>

);


export default MultilineInput;
