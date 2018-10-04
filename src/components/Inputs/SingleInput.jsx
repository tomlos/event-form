import React, { Component, Fragment } from 'react';
import './inputs.css';
import classNames from 'classnames';

class SingleInput extends Component {
  render() {
    const {
      name,
      type,
      shortWidth,
      placeholder,
      value,
      onChangeValue,
    } = this.props;
    return (
      <input
        type={type || 'text'}
        name={name}
        id={name}
        value={value}
        className={classNames({
          'single-input': true,
          'single-input--shortWidth': shortWidth,
        })}
        placeholder={placeholder}
        onChange={onChangeValue}
      />
    );
  }
}
export default SingleInput;
