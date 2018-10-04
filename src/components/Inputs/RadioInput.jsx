import React, { Component, Fragment } from 'react';

const RadioInput = ({
  name, values, setRadioValue, valueChecked,
}) => (
  <div>
    { values.map(value => (
      <Fragment>
        <input name={name} value={value} type="radio" onClick={setRadioValue} checked={value === valueChecked} />
        <span>{value}</span>
      </Fragment>
    ))}
  </div>
);

export default RadioInput;
