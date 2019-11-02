import React, { Component } from 'react';
import './Task.css';
import phases from '../../config/phases'
import Initials from '../../components/Initials/Initials'
import Numpad from '../../components/Numpad/Numpad'
import Problem from '../../components/Problem/Problem'

class Task extends Component {
  constructor(props) {
    super(props)

    const initials = null
    const chosenPhaseIds = this._getPhasesFromUrl()
    const chosenPhases = this._getPhasesFromIds(chosenPhaseIds)
    const transformedPhases = this._transformPhases(chosenPhases)
    this.state = { initials, chosenPhases, transformedPhases }
  }

  _getPhasesFromUrl() {
    const urlParams = this.props.location.search
    const regex = new RegExp('[\\?&]phases=([^&#]*)')
    let results = regex.exec(urlParams)
    if (results) results = decodeURIComponent(results[1].replace(/\+/g, ' '))
    return results.toString().split(',')
  }

  _getPhasesFromIds(chosenPhaseIds) {
    return chosenPhaseIds.map(chosenPhaseId => {
      return phases.find(phase => { return Number(chosenPhaseId) === phase.id })
    })
  }

  _transformPhases(chosenPhases) {
    return chosenPhases.map(chosenPhase => {
      chosenPhase.bonds.forEach(bond => { chosenPhase.bonds.push({x: bond.y, y: bond.x}) })
      chosenPhase.bonds = chosenPhase.bonds.map(bond => { return {
        ...bond,
        answeredCorrect: null,
        timeToAnswer: null
      }})
      return chosenPhase
    });
  }

  render() {
    return (
      <div className="task">
        <Initials></Initials>
        <Problem></Problem>
        <Numpad></Numpad>
      </div>
    );
  }
}

export default Task;