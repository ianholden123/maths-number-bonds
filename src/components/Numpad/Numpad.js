import React, { Component } from 'react';
import './Numpad.css';

class Numpad extends Component {
  render() {
    return (
      <div className="numpad">
        <button id="numpad_1">1</button>
        <button id="numpad_2">2</button>
        <button id="numpad_3">3</button>
        <button id="numpad_4">4</button>
        <button id="numpad_5">5</button>
        <button id="numpad_6">6</button>
        <button id="numpad_7">7</button>
        <button id="numpad_8">8</button>
        <button id="numpad_9">9</button>
        <button id="numpad_back">Back</button>
        <button id="numpad_0">0</button>
        <button id="numpad_enter">Enter</button>
      </div>
    );
  }
}

export default Numpad;