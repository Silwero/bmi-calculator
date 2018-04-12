import React, { Component } from 'react';
import './Range.css';

export class Range extends Component {
  changeHandler = event => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/gi, '');

    if (value > this.props.max) {
      value = this.props.max;
    }

    if (!value || value === '0') {
      value = 1;
    }

    this.props.onChange(value, this.props.type);
  }

  render() {
    return (
      <div className="Range">
        <div className="range-header">
          <h2>{this.props.label}:</h2>
          <input type="text" onChange={this.changeHandler} value={this.props.value}/>
        </div>
        <input
          type="range"
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.changeHandler}
          />
      </div>
    );
  }
}

export default Range;
