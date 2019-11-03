import React, { Component } from 'react';
import './Problem.css';
import Numpad from '../Numpad/Numpad'

class Problem extends Component {
  constructor(props) {
    super(props)

    this.handleNumpadButtonPress = this.handleNumpadButtonPress.bind(this)

    this.state = {
      currentAnswer: ''
    }
  }

  handleNumpadButtonPress(value) {
    let curAns = this.state.currentAnswer
    switch(value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({ currentAnswer: curAns + value })
        break
      case 'B':
        curAns = curAns.slice(0, - 1)
        this.setState({currentAnswer: curAns})
        break
      case 'E':
        this.submitAnswer(curAns)
        break
      default:
        break
    }
  }

  submitAnswer(answer) {
    console.log('THIS IS ANSWER', answer)
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') this.submitAnswer(this.state.currentAnswer)
  }

  render() {
    return (
      <>
        <div className="problem">
          <span id="number1">{this.props.number1}</span>
          <span id="operator"> + </span>
          <span id="number2">{this.props.number2}</span>
          <span id="equals"> = </span>
          <input 
            type="number"
            name="answer"
            id="answer"
            value={this.state.currentAnswer}
            onChange={e => this.setState({ currentAnswer: e.target.value })}
            onKeyDown={e => this.handleKeyDown(e)}
          />
        </div>
        <Numpad 
          handleNumpadButtonPress={this.handleNumpadButtonPress}
        />
      </>
    );
  }
}

export default Problem;