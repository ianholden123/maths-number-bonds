let answeredQuestions: any = {}

/**
 * Filter all questions that have been answered incorrectly from a list of
 * questions and answers.
 * @param {Array} answeredQuestions An array of question objects
 */
answeredQuestions.getAllIncorrectAnswers = (answeredQuestions: any) => {
  if (!answeredQuestions || !Array.isArray(answeredQuestions))
    throw new Error('We could not retrieve incorrect answers from questions given.')

  return answeredQuestions.filter(question => {
    return question.hasOwnProperty('answeredCorrectly') && question.answeredCorrectly === false
  })
}

/**
 * Group all answers by their corresponding phase.
 * @param {Array} answeredQuestions An array of question objects
 */
answeredQuestions.groupAnswersByPhase = (answeredQuestions: any) => {
  if (!answeredQuestions || !Array.isArray(answeredQuestions))
    throw new Error('We could not retrieve incorrect answers from questions given.')

  let result: any = []
  answeredQuestions.forEach(question => {
    if (question.phase && question.phase.hasOwnProperty('id')) {
      if (result[question.phase.id] && Array.isArray(result[question.phase.id].bonds)) {
        result[question.phase.id].bonds.push({
          answeredCorrectly: question.answeredCorrectly,
          x: question.x,
          y: question.y
        })
      } else {
        result[question.phase.id] = {
          ...question.phase,
          bonds: [{
            answeredCorrectly: question.answeredCorrectly,
            x: question.x,
            y: question.y
          }]
        }
      }
    }
  })

  return result.filter((item: any) => {
    if (item !== undefined) return item
    return false
  })
}

/**
 * Sort phases by their phase ID
 * @param {Array} answersGroupedByPhase Answers grouped by their phase
 */
answeredQuestions.sortAnswersByPhase = (answersGroupedByPhase: any) => {
  if (!answersGroupedByPhase || !Array.isArray(answersGroupedByPhase))
    throw new Error('We could not order phases from the answers array given.')

  // Filter out any objects in the array that do not contain an ID.
  answersGroupedByPhase = answersGroupedByPhase.filter(phase => {
    if (
      typeof phase === 'object' &&
      !Array.isArray(phase) &&
      phase.hasOwnProperty('id') &&
      typeof phase.id === 'number'
    ) return true
    return false
  })

  // Perform sort
  return answersGroupedByPhase.sort((first: any, second: any) => {
    if (first.id < second.id) return -1
    if (first.id > second.id) return 1
    return 0
  })
}

export default answeredQuestions