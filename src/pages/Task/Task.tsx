import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import './Task.css';
import Initials from '../../components/Initials/Initials'
import Problem from '../../components/Problem/Problem'
import Grid from '../../components/Results/Grid/Grid'
import PhasesKey from '../../components/Keys/Phases'
import AnswersKey from '../../components/Keys/Answers'
import BackButton from '../../components/BackButton/BackButton'
import Targets from '../../components/Results/Targets/Targets'
import urlHelper from '../../helpers/url'
import phasesHelper from '../../helpers/phases'

const Task = (props: any) => {
  // Set initials
  const initialsFromUrl = urlHelper.getParamValuesFromUrl('initials', props.location.search)
  const initialsExtracted = (initialsFromUrl && initialsFromUrl[0]) || ''

  // Set task type
  const taskTypeFromUrl = urlHelper.getParamValuesFromUrl('taskType', props.location.search)
  let taskType = (taskTypeFromUrl && taskTypeFromUrl[0]) || ''
  taskType = taskType.charAt(0).toUpperCase() + taskType.slice(1) // Capitalise task type

  // Setup questions for chosen phase(s)
  const chosenPhaseIds = urlHelper.getParamValuesFromUrl('phases', props.location.search)
  const chosenPhases = phasesHelper.getPhasesFromIds(chosenPhaseIds)
  const transformedPhases = phasesHelper.transformPhases(chosenPhases)
  const questionsFromPhases = phasesHelper.createQuestionsFromPhases(transformedPhases)
  const shuffledQuestions = phasesHelper.shuffleArray(questionsFromPhases)

  const [questions, setQuestions] = useState(shuffledQuestions)
  const [initials, setInitials] = useState(initialsExtracted)
  const [taskStarted, setTaskStarted] = useState(false)
  const [taskFinished, setTaskFinished] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [shouldRedirectHome, setShouldRedirectHome] = useState(false)

  const goHome = () => {
    if (!window.confirm) return
    const result = window.confirm('Are you sure you want to go back? You will lose all results recorded on this page.')
    if (result) setShouldRedirectHome(true)
  }

  const finishEarly = () => {
    if (!window.confirm) return
    const result = window.confirm('Are you sure you are finished? Confirming will take you to the results page.')
    if (result) setTaskFinished(true)
  }

  const openPrint = () => {
    if (!window.print) return
    window.print()
  }

  const answerQuestion = (answer: any, timeToAnswerMs: any) => {
    if (taskFinished) return
    const { x: firstNumber, y: secondNumber } = questions[currentQuestionIndex]
    const isCorrect = (firstNumber + secondNumber) === Number(answer)
    const shouldTaskFinish = currentQuestionIndex === questions.length - 1

    let updatedQuestions = [...questions]
    updatedQuestions[currentQuestionIndex].answeredCorrectly = isCorrect
    updatedQuestions[currentQuestionIndex].timeToAnswer = timeToAnswerMs
    updatedQuestions[currentQuestionIndex].answerGiven = answer

    setQuestions(updatedQuestions)
    setCurrentQuestionIndex(!shouldTaskFinish ? currentQuestionIndex + 1 : currentQuestionIndex)
    setTaskFinished(shouldTaskFinish)
  }

  if (shouldRedirectHome) {
    return (<Redirect to='/' />)
  }
  return (
    <div className="task">
      {!taskStarted && <BackButton />}
      <h1>{taskType}</h1>
      {initials ? <p className="initials">Initials: {initials}</p> : ''}
      {!initials && (
        <Initials setInitials={setInitials} />
      )}
      {!taskStarted && initials && (
        <button onClick={() => setTaskStarted(true)}>Begin {taskType}</button>
      )}
      {initials && taskStarted && !taskFinished && (
        <>
          <Problem
            number1={questions[currentQuestionIndex].x}
            number2={questions[currentQuestionIndex].y}
            answerQuestion={answerQuestion}
          />
          <hr/>
          <button onClick={finishEarly}>Finish early</button>
        </>
      )}
      {taskFinished && (
        <>
          <Grid questions={questions} settings={props.settings} />
          <div id='keys'>
            <PhasesKey chosenPhases={transformedPhases} />
            <AnswersKey settings={props.settings} />
          </div>
          <hr />
          <div id='targets'>
            <Targets answeredQuestions={questions} />
          </div>
          <hr />
          <button onClick={goHome}>Main Menu</button>
          <button onClick={openPrint}>Print</button>
        </>
      )}
    </div>
  );
}

export default Task;