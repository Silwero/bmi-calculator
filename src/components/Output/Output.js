import React, { Component } from 'react';
import './Output.css';

export class Output extends Component {
  render() {
    return (
      <div className="output-wrapper">
        <h2>BMI</h2>
        <h3>{this.props.bmiClass}</h3>
        <h4>{this.props.bmi}</h4>
      </div>
    );
  }
}

export default Output;
