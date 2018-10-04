import React, { Component, Fragment } from 'react';

const RadioInput = ({
  name, value, values, onChangeValue,
}) => (
  <div>
    { values.map(el => (
      <Fragment>
        <input name={name} value={el} type="radio" onClick={onChangeValue} checked={el === value} />
        <span>{el}</span>
      </Fragment>
    ))}
  </div>
);

export default RadioInput;
