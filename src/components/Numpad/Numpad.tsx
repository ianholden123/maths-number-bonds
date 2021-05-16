import React from 'react';
import './Numpad.css';

interface NumpadProps {
  handleNumpadButtonPress: (a: string) => void,
  currentAnswer: string
}

const Numpad = (props: NumpadProps) => {
  return (
    <div className="numpad">
      <button id="numpad_1" onClick={() => props.handleNumpadButtonPress('1')}>1</button>
      <button id="numpad_2" onClick={() => props.handleNumpadButtonPress('2')}>2</button>
      <button id="numpad_3" onClick={() => props.handleNumpadButtonPress('3')}>3</button>
      <button id="numpad_4" onClick={() => props.handleNumpadButtonPress('4')}>4</button>
      <button id="numpad_5" onClick={() => props.handleNumpadButtonPress('5')}>5</button>
      <button id="numpad_6" onClick={() => props.handleNumpadButtonPress('6')}>6</button>
      <button id="numpad_7" onClick={() => props.handleNumpadButtonPress('7')}>7</button>
      <button id="numpad_8" onClick={() => props.handleNumpadButtonPress('8')}>8</button>
      <button id="numpad_9" onClick={() => props.handleNumpadButtonPress('9')}>9</button>
      <button id="numpad_back"
        onClick={() => props.handleNumpadButtonPress('B')}
        disabled={!props.currentAnswer}
      >Back</button>
      <button id="numpad_0" onClick={() => props.handleNumpadButtonPress('0')}>0</button>
      <button id="numpad_enter" 
        onClick={() => props.handleNumpadButtonPress('E')}
        disabled={!props.currentAnswer}
      >Enter</button>
    </div>
  );
}

export default Numpad;