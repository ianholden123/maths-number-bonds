import React, { Component } from 'react';
import './Task.css';
import Initials from '../../components/Initials/Initials'
import Problem from '../../components/Problem/Problem'
import urlHelper from '../../helpers/url'
import phasesHelper from '../../helpers/phases'

class Task extends Component {
  constructor(props) {
    super(props)
    this.setInitials = this.setInitials.bind(this)
    this.startTask = this.startTask.bind(this)

    // Set initials
    const initialsFromUrl = urlHelper.getParamValuesFromUrl('initials', this.props.location.search)
    const initials = (initialsFromUrl && initialsFromUrl[0]) || null

    // Setup questions for chosen phase(s)
    const chosenPhaseIds = urlHelper.getParamValuesFromUrl('phases', this.props.location.search)
    const chosenPhases = phasesHelper.getPhasesFromIds(chosenPhaseIds)
    const transformedPhases = phasesHelper.transformPhases(chosenPhases)
    const questions = phasesHelper.createQuestionsFromPhases(transformedPhases)
    const shuffledQuestions = phasesHelper.shuffleArray(questions)

    this.state = {
      initials,
      transformedPhases,
      questions: shuffledQuestions,
      taskStarted: false,
      currentQuestionIndex: 0
    }
  }

  setInitials(initials) {
    this.setState({ initials })
  }

  startTask() {
    this.setState({ taskStarted: true })
  }

  render() {
    return (
      <div className="task">
        {!this.state.initials && (
          <Initials setInitials={this.setInitials} />
        )}
        {this.state.initials && (
          <>
            <Problem
              number1={this.state.questions[this.state.currentQuestionIndex].x}
              number2={this.state.questions[this.state.currentQuestionIndex].y}
            />
            {!this.state.taskStarted && (
              <button onClick={this.startTask}>Begin</button>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Task;