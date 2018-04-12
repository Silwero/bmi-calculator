import React, { Component } from 'react';
import './Output.css';

export class Output extends Component {
  render() {
    let className = null;
    if (this.props.bmiClass === 'Underweight') className = 'underweight';
    if (this.props.bmiClass === 'Normal') className = 'normal';
    if (this.props.bmiClass === 'Overweight') className = 'overweight';
    if (this.props.bmiClass === 'Obese') className = 'obese';

    return (
      <div className={className + " output-wrapper"}>
        <h2>BMI</h2>
        <h3>{this.props.bmiClass}</h3>
        <h4>{this.props.bmi}</h4>
      </div>
    );
  }
}

export default Output;
