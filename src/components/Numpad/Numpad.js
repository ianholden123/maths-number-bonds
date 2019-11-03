import React, { Component } from 'react';
import './Numpad.css';

class Numpad extends Component {
  render() {
    return (
      <div className="numpad">
        <button id="numpad_1" onClick={() => this.props.handleNumpadButtonPress('1')}>1</button>
        <button id="numpad_2" onClick={() => this.props.handleNumpadButtonPress('2')}>2</button>
        <button id="numpad_3" onClick={() => this.props.handleNumpadButtonPress('3')}>3</button>
        <button id="numpad_4" onClick={() => this.props.handleNumpadButtonPress('4')}>4</button>
        <button id="numpad_5" onClick={() => this.props.handleNumpadButtonPress('5')}>5</button>
        <button id="numpad_6" onClick={() => this.props.handleNumpadButtonPress('6')}>6</button>
        <button id="numpad_7" onClick={() => this.props.handleNumpadButtonPress('7')}>7</button>
        <button id="numpad_8" onClick={() => this.props.handleNumpadButtonPress('8')}>8</button>
        <button id="numpad_9" onClick={() => this.props.handleNumpadButtonPress('9')}>9</button>
        <button id="numpad_back" onClick={() => this.props.handleNumpadButtonPress('B')}>Back</button>
        <button id="numpad_0" onClick={() => this.props.handleNumpadButtonPress('0')}>0</button>
        <button id="numpad_enter" onClick={() => this.props.handleNumpadButtonPress('E')}>Enter</button>
      </div>
    );
  }
}

export default Numpad;