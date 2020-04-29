import React from 'react'
import './Answers.css'
import { quickAnswerTime } from '../../config/variables'

const AnswersKey = () => (
  <div id='answersKey' className='key'>
    Answered:
    <ul>
      <li className='correct'>Correctly</li>
      <li className='incorrect'>Incorrectly</li>
      <li className='line'>{`In less than ${quickAnswerTime / 1000} ${quickAnswerTime / 1000 === 1 ? 'second' : 'seconds'}`}</li>
    </ul>
  </div>
)

export default AnswersKey
