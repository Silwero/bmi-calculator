import React, { Component } from 'react';

import Range from './components/Range/Range';
import Output from './components/Output/Output';

import './App.css';

class App extends Component {
  state = {
    height: 170,
    weight: 65,
    bmi: 22.49,
    bmiClass: 'Normal'
  }

  changeHandler = (val, type) => {
    if (type === 'height') {
      this.setState({
        ...this.state,
        height: val
      });
    } else if (type === 'weight') {
      this.setState({
        ...this.state,
        weight: val
      });
    }
    this.setBmi();
  }

  setBmi() {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi: bmi, bmiClass: this.getBmiClass(bmi)});
  }

  getBmiClass(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >=18.5 && bmi <= 24.9 ) {
      return 'Normal';
    } else if (bmi >=25 && bmi <= 29.9 ) {
      return 'Overweight';
    } else if (bmi >= 30) {
      return 'Obese';
    }
  }

  render() {
    return (
      <div className="App">
        <div className="fade"></div>
        <div>
          <h1>BMI Calculator</h1>
          <div className="row">
            <div className="col">
              <Range
                type='height'
                label='Height'
                value={this.state.height}
                onChange={this.changeHandler}
                min={1}
                max={245}
                step={1} />
            </div>
            <Output bmi={this.state.bmi} bmiClass={this.state.bmiClass} />
            <div className="col">
              <Range
                label='Weight'
                type='weight'
                value={this.state.weight}
                onChange={this.changeHandler}
                min={1}
                max={200}
                step={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
