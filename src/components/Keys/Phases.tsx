import React from 'react'
import './Phases.css'

interface Phase {
  name: string,
  number: number,
  description: string
  colour: string
}
interface PhasesKeyProps {
  chosenPhases: Phase[]
}

const PhasesKey = ({ chosenPhases }: PhasesKeyProps) => (
  <div id='phasesKey' className='key'>
    Phases:
    <ul>
      {chosenPhases.map((phase: Phase, index: number) => (
        <li className={`phase${phase.number}`} key={index}>
          <div className='phaseSquare' style={{ backgroundColor: phase.colour, border: `4px solid ${phase.colour}` }} />
          P.{phase.number} { phase.description && `- ${phase.description}` }
        </li>
      ))}
    </ul>
  </div>
)

export default PhasesKey
