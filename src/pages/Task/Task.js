import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Task.css';
import Initials from '../../components/Initials/Initials'
import Problem from '../../components/Problem/Problem'
import Grid from '../../components/Results/Grid/Grid'
import PhasesKey from '../../components/Keys/Phases'
import AnswersKey from '../../components/Keys/Answers'
import urlHelper from '../../helpers/url'
import phasesHelper from '../../helpers/phases'

class Task extends Component {
  constructor(props) {
    super(props)
    this.setInitials = this.setInitials.bind(this)
    this.startTask = this.startTask.bind(this)
    this.answerQuestion = this.answerQuestion.bind(this)
    this.goHome = this.goHome.bind(this)

    // Set initials
    const initialsFromUrl = urlHelper.getParamValuesFromUrl('initials', this.props.location.search)
    const initials = (initialsFromUrl && initialsFromUrl[0]) || null

    // Set task type
    const taskTypeFromUrl = urlHelper.getParamValuesFromUrl('taskType', this.props.location.search)
    const taskType = (taskTypeFromUrl && taskTypeFromUrl[0]) || null

    // Setup questions for chosen phase(s)
    const chosenPhaseIds = urlHelper.getParamValuesFromUrl('phases', this.props.location.search)
    const chosenPhases = phasesHelper.getPhasesFromIds(chosenPhaseIds)
    const transformedPhases = phasesHelper.transformPhases(chosenPhases)
    const questions = phasesHelper.createQuestionsFromPhases(transformedPhases)
    const shuffledQuestions = phasesHelper.shuffleArray(questions)

    this.state = {
      taskType: taskType.charAt(0).toUpperCase() + taskType.slice(1),
      initials,
      transformedPhases,
      questions: shuffledQuestions,
      taskStarted: false,
      taskFinished: false,
      currentQuestionIndex: 0,
      shouldRedirectHome: false
    }
  }

  setInitials(initials) {
    this.setState({ initials })
  }

  startTask() {
    this.setState({ taskStarted: true })
  }

  goHome() {
    if (!window && !window.confirm) return
    const result = window.confirm('Are you sure you want to go back? You will lose all results recorded on this page.')
    if (result) this.setState({ shouldRedirectHome: true })
  }

  answerQuestion(answer, timeToAnswerMs) {
    if (this.state.taskFinished) return
    const { x: firstNumber, y: secondNumber } = this.state.questions[this.state.currentQuestionIndex]
    const isCorrect = (firstNumber + secondNumber) === Number(answer)
    const taskFinished = this.state.currentQuestionIndex === this.state.questions.length - 1
    let updatedQuestions = this.state.questions
    updatedQuestions[this.state.currentQuestionIndex].answeredCorrectly = isCorrect
    updatedQuestions[this.state.currentQuestionIndex].timeToAnswer = timeToAnswerMs
    updatedQuestions[this.state.currentQuestionIndex].answerGiven = answer
    this.setState({
      questions: updatedQuestions,
      currentQuestionIndex: !taskFinished ? this.state.currentQuestionIndex + 1 : this.state.currentQuestionIndex,
      taskFinished
    })
  }

  render() {
    if (this.state.shouldRedirectHome) {
      return (<Redirect to='/' />)
    }
    return (
      <div className="task">
        <h1>{this.state.taskType}</h1>
        {this.state.initials ? <p className="initials">Initials: {this.state.initials}</p> : ''}
        {!this.state.initials && (
          <Initials setInitials={this.setInitials} />
        )}
        {!this.state.taskStarted && this.state.initials && (
          <button onClick={this.startTask}>Begin {this.state.taskType}</button>
        )}
        {this.state.initials && this.state.taskStarted && !this.state.taskFinished && (
          <Problem
            number1={this.state.questions[this.state.currentQuestionIndex].x}
            number2={this.state.questions[this.state.currentQuestionIndex].y}
            answerQuestion={this.answerQuestion}
          />
        )}
        {this.state.taskFinished && (
          <>
            <Grid questions={this.state.questions} />
            <div id='keys'>
              <PhasesKey chosenPhases={this.state.transformedPhases} />
              <AnswersKey />
            </div>
            <button onClick={this.goHome}>Main Menu</button>
            <button>Export to PDF</button>
          </>
        )}
      </div>
    );
  }
}

export default Task;