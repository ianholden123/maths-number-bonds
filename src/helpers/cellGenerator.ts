import { PhaseType } from '../config/phases'
import { AnsweredQuestionsType } from '../helpers/answeredQuestions'

let cellGenerator: any = {}

export interface CellType {
  x: number
  y: number
}

/**
 * Generates a list of cells based on the phases that are given to it
 * @param phases - A phases object.
 * @param answeredQuestions - An array of every cell and the answers that were or were not given against them.
 */
cellGenerator.generateCellsFromPhases = (phases: PhaseType[], answeredQuestions: AnsweredQuestionsType[]) => {
    if (!phases || !Array.isArray(phases) || phases.length === 0) return null

    let cells: CellType[][] = []
    const yAxisValue = cellGenerator.getAxisRange(phases, 'y')

    for (let i = 0; i <= yAxisValue.maxAxisValue; i++) {
      cells.push([])
    }

    phases.forEach(phase => {
      if (!phase.bonds || typeof phase.bonds !== 'object' || phase.bonds.length === 0) return null

      // Here we can populate each phase array with the relevant number bond information
      phase.bonds.forEach((bond: any) => {
        if (!bond || !bond.hasOwnProperty('x') || !bond.hasOwnProperty('y')) return null

        cells[bond.y][bond.x] = cellGenerator.createCell(bond.x, bond.y, phase, answeredQuestions)
        cells[bond.x][bond.y] = cellGenerator.createCell(bond.y, bond.x, phase, answeredQuestions)
      })
    })

    return cells
}

/**
 * Finds the largest and smallest values in a phases object so that we know what our axis value range
 * should look like.
 * @param phases - A phases object.
 * @param axis - A string containing 'x' or 'y'.
 */
cellGenerator.getAxisRange = (phases: PhaseType[], axis: 'x' | 'y') => {
  if (!phases || !Array.isArray(phases) || phases.length === 0) return null
  if (axis !== 'x' && axis !== 'y') return null

  let minAxisValue = Number.MAX_SAFE_INTEGER
  let maxAxisValue = 0
  phases.forEach((phase) => {
    if (!phase.bonds || typeof phase.bonds !== 'object' || phase.bonds.length === 0) return null
    
    phase.bonds.forEach((bond: any) => {
      if (!bond || !('x' in bond) || !('y' in bond)) return null
      if (bond[axis] < minAxisValue) minAxisValue = bond[axis]
      if (bond[axis] > maxAxisValue) maxAxisValue = bond[axis]
    })
  })

  return { minAxisValue, maxAxisValue }
}

/**
 * Returns the object that should populate a cell component
 * @param value1 X value
 * @param value2 Y value
 * @param phaseObj An object containing data about the phase
 */
cellGenerator.createCell = (value1 = null, value2 = null, phaseObj: any = {}, answeredQuestions: AnsweredQuestionsType[] | null = null) => {
  let answerGiven, answeredCorrectly, timeToAnswer
  
  if (answeredQuestions) {
    answeredQuestions.forEach((answeredQuestion: AnsweredQuestionsType) => {
      if ((answeredQuestion.x === value1) && (answeredQuestion.y === value2)) {
        answerGiven = answeredQuestion.answerGiven
        answeredCorrectly = answeredQuestion.answeredCorrectly
        timeToAnswer = answeredQuestion.timeToAnswer
      }
    })
  }

  return {
    x : value1,
    y : value2,
    phase: {
      id: phaseObj.hasOwnProperty('id') ? phaseObj.id : null,
      name: phaseObj.hasOwnProperty('name') ? phaseObj.name : '',
      description: phaseObj.hasOwnProperty('description') ? phaseObj.description : '',
      number: phaseObj.hasOwnProperty('number') ? phaseObj.number : 0,
      colour: phaseObj.hasOwnProperty('colour') && answerGiven ? phaseObj.colour : ''
    },
    answerGiven: answerGiven || null,
    answeredCorrectly,
    timeToAnswer: timeToAnswer || null
  }
}

export default cellGenerator