import React, { Component } from 'react';
import './Problem.css';

class Problem extends Component {
  render() {
    return (
      <div className="problem">
        <span id="firstNumber">{this.props.firstNumber}</span>
        <span id="operator">+</span>
        <span id="secondNumber">{this.props.secondNumber}</span>
        <span id="equals">=</span>
        <input type="number" name="answer" id="answer" />
      </div>
    );
  }
}

export default Problem;