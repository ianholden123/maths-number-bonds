import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Targets.css'
import answeredQuestionsHelper from '../../../helpers/answeredQuestions'

const Targets = (props) => {
  const incorrectAnswers = answeredQuestionsHelper.getAllIncorrectAnswers(props.answeredQuestions)
  const incorrectAnswersByPhase = answeredQuestionsHelper.groupAnswersByPhase(incorrectAnswers)
  const orderedIncorrectAnswersByPhase = answeredQuestionsHelper.sortAnswersByPhase(incorrectAnswersByPhase)

  const getSecureTarget = (orderedIncorrectAnswersByPhase) => {
    for(const phase of orderedIncorrectAnswersByPhase) {
      if (phase.bonds.length <= 2) return phase
    }
    return null
  }

  const getDevelopmentTarget = (orderedIncorrectAnswersByPhase) => {
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

Targets.propTypes = {
  answeredQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      answeredCorrectly: PropTypes.bool,
      answerGiven: PropTypes.string,
      timeToAnswer: PropTypes.number,
      phase: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        number: PropTypes.number,
        colour: PropTypes.string
      })
    })
  )
}

export default Targets