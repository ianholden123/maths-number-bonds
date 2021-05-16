import React, { useState } from 'react'
import './Targets.css'
import answeredQuestionsHelper from '../../../helpers/answeredQuestions'
import { PhaseType } from '../../../config/phases'

interface TargetsProps {
  answeredQuestions: {
    x: number,
    y: number,
    answeredCorrectly: boolean,
    answerGiven: string,
    timeToAnswer: number,
    phase: PhaseType
  }[]
}

const Targets = (props: TargetsProps) => {
  const incorrectAnswers = answeredQuestionsHelper.getAllIncorrectAnswers(props.answeredQuestions)
  const incorrectAnswersByPhase = answeredQuestionsHelper.groupAnswersByPhase(incorrectAnswers)
  const orderedIncorrectAnswersByPhase = answeredQuestionsHelper.sortAnswersByPhase(incorrectAnswersByPhase)

  const getSecureTarget = (orderedIncorrectAnswersByPhase: any) => {
    for(const phase of orderedIncorrectAnswersByPhase) {
      if (phase.bonds.length <= 2) return phase
    }
    return null
  }

  const getDevelopmentTarget = (orderedIncorrectAnswersByPhase: any) => {
    for(const phase of orderedIncorrectAnswersByPhase) {
      if (phase.bonds.length > 2) return phase
    }
    return null
  }

  const [secureTarget] = useState(getSecureTarget(orderedIncorrectAnswersByPhase))
  const [developmentTarget] = useState(getDevelopmentTarget(orderedIncorrectAnswersByPhase))

  return (
    <>
      {secureTarget && (
        <div id='secureTarget' className='target'>
          <h2>Secure Target:</h2>
          <p>You nearly passed <span className="phaseSquare" style={{ backgroundColor: secureTarget.colour, border: `4px solid ${secureTarget.colour}`}}/>{secureTarget.name} - {secureTarget.description}</p>
        </div>
      )}
      {developmentTarget && (
        <div id='developmentTarget' className='target'>
          <h2>Development Target:</h2>
          <p>You need to practice <span className="phaseSquare" style={{ backgroundColor: developmentTarget.colour, border: `4px solid ${developmentTarget.colour}`}}/>{developmentTarget.name} - {developmentTarget.description}</p>
        </div>
      )}
    </>
  )
}

export default Targets