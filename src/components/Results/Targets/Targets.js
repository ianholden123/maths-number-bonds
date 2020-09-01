import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Targets.css'
import answeredQuestionsHelper from '../../../helpers/answeredQuestions'

class Targets extends Component {
  constructor(props) {
    super(props)

    const incorrectAnswers = answeredQuestionsHelper.getAllIncorrectAnswers(this.props.answeredQuestions)
    const incorrectAnswersByPhase = answeredQuestionsHelper.groupAnswersByPhase(incorrectAnswers)
    const orderedIncorrectAnswersByPhase = answeredQuestionsHelper.sortAnswersByPhase(incorrectAnswersByPhase)

    this.state = {
      orderedIncorrectAnswersByPhase,
      secureTarget: this.getSecureTarget(orderedIncorrectAnswersByPhase),
      developmentTarget: this.getDevelopmentTarget(orderedIncorrectAnswersByPhase)
    }
  }

  getSecureTarget(orderedIncorrectAnswersByPhase) {
    for(const phase of orderedIncorrectAnswersByPhase) {
      if (phase.bonds.length <= 2) return phase
    }
    return null
  }

  getDevelopmentTarget(orderedIncorrectAnswersByPhase) {
    for(const phase of orderedIncorrectAnswersByPhase) {
      if (phase.bonds.length > 2) return phase
    }
    return null
  }

  render() {
    return (
      <>
        {this.state.secureTarget && (
          <div id='secureTarget' className='target'>
            <h2>Secure Target:</h2>
            <p>You nearly passed <span className="phaseSquare" style={{ backgroundColor: this.state.secureTarget.colour, border: `4px solid ${this.state.secureTarget.colour}`}}/>{this.state.secureTarget.name} - {this.state.secureTarget.description}</p>
          </div>
        )}
        {this.state.developmentTarget && (
          <div id='developmentTarget' className='target'>
            <h2>Development Target:</h2>
            <p>You need to practice <span className="phaseSquare" style={{ backgroundColor: this.state.developmentTarget.colour, border: `4px solid ${this.state.developmentTarget.colour}`}}/>{this.state.developmentTarget.name} - {this.state.developmentTarget.description}</p>
          </div>
        )}
      </>
    )
  }
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