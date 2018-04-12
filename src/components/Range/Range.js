import React, { Component } from 'react';
import './Range.css';

export class Range extends Component {
  changeHandler = event => {
    this.props.onChange(event.target.value, this.props.type);
  }

  render() {
    return (
      <div className="Range">
        <div className="range-header">
          <h2>{this.props.label}:</h2>
          {this.props.value}
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
