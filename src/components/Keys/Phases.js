import React from 'react'
import PropTypes from 'prop-types'
import './Phases.css'

const PhasesKey = ({ chosenPhases }) => (
  <div id='phasesKey' className='key'>
    Phases:
    <ul>
      {chosenPhases.map((phase, index) => (
        <li className={`phase${phase.number}`} key={index}>
          <div className='phaseSquare' style={{ backgroundColor: phase.colour, border: `4px solid ${phase.colour}` }} />
          P.{phase.number} { phase.description && `- ${phase.description}` }
        </li>
      ))}
    </ul>
  </div>
)

PhasesKey.propTypes = {
  chosenPhases: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
      description: PropTypes.string
    })
  )
}

export default PhasesKey
