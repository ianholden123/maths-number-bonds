import React, { useState } from 'react';
import './Problem.css';
import Numpad from '../Numpad/Numpad'

const Problem = (props: any) => {
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [problemStartDateTime, setProblemStartDateTime] = useState(new Date())

  const resetState = () => {
    setCurrentAnswer('')
    setProblemStartDateTime(new Date())
  }

  const handleNumpadButtonPress = (value: any) => {
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
        setCurrentAnswer(currentAnswer + value)
        break
      case 'B':
        setCurrentAnswer(currentAnswer.slice(0, - 1))
        break
      case 'E':
        submitAnswer(currentAnswer)
        break
      default:
        break
    }
  }

  const submitAnswer = (answer: any) => {
    if (!answer) return
    const problemEndDateTime = new Date()
    const timeDifference = problemEndDateTime.getTime() - problemStartDateTime.getTime()
    props.answerQuestion(answer, timeDifference)
    resetState()
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') submitAnswer(currentAnswer)
  }

  return (
    <>
      <div className="problem">
        <span id="number1">{props.number1}</span>
        <span id="operator"> + </span>
        <span id="number2">{props.number2}</span>
        <span id="equals"> = </span>
        <input
          type="number"
          name="answer"
          id="answer"
          value={currentAnswer}
          onChange={e => setCurrentAnswer(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
        />
      </div>
      <Numpad 
        handleNumpadButtonPress={handleNumpadButtonPress}
        currentAnswer={currentAnswer}
      />
    </>
  );
}

export default Problem;