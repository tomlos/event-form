import React, { Component, Fragment } from 'react';

class EmployesDropdown extends Component {
  render() {
    const { elements, userId } = this.props;
    return (
      <div>
        <select>
          <optgroup label="Me">
            {elements.map(el => el.id === userId && (
            <option value={el.email}>
              { el.name}
            </option>
            ))}
          </optgroup>
          <optgroup label="Others">
            {elements.map(el => el.id !== userId && <option value={el.email}>{el.name}</option>)}
          </optgroup>
        </select>
      </div>
    );
  }
}

export default EmployesDropdown;
