import React, { Component, Fragment } from 'react';
import './single-input.css';
import classNames from 'classnames';

class SingleInput extends Component {
  render() {
    const {
      name,
      isRequired,
      type,
      shortWidth,
      placeholder,
    } = this.props;
    return (
      <input
        type={type || 'text'}
        name={name}
        id={name}
        className={classNames({
          'single-input': true,
          'single-input--shortWidth': shortWidth,
        })}
        placeholder={placeholder}
      />
    );
  }
}
export default SingleInput;
