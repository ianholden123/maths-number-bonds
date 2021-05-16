import React from 'react'
import './Answers.css'
import { ConfigVariableTypes } from '../../config/variables'

interface AnswersKeyProps {
  settings: ConfigVariableTypes
}

const AnswersKey = (props: AnswersKeyProps) => {
  const { quickAnswerTime } = props.settings

  return (
    <div id='answersKey' className='key'>
      Answered:
      <ul>
        <li className='correct'>Correctly</li>
        <li className='incorrect'>Incorrectly</li>
        <li className='line'>
          <div className='box'>
            <svg id='strikethrough'><line x1="0" y1="0" x2="100%" y2="100%" strokeWidth='4' /></svg>
          </div>
          <span className='boxText'>{`In less than ${quickAnswerTime / 1000} ${quickAnswerTime / 1000 === 1 ? 'second' : 'seconds'}`}</span>
        </li>
      </ul>
    </div>
  )
}

export default AnswersKey
