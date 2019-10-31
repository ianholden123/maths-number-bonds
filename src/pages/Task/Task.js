import React, { Component } from 'react';
import './Task.css';
import phases from '../../config/phases'
import Initials from '../../components/Initials/Initials'
import Numpad from '../../components/Numpad/Numpad'
import Problem from '../../components/Problem/Problem'

class Task extends Component {
  constructor(props) {
    super(props)

    const chosenPhases = this._getPhasesFromUrl()
    const questions = this._getQuestionsFromPhases(chosenPhases)
    this.state = { phases, questions }
  }

  _getPhasesFromUrl() {
    const urlParams = this.props.location.search
    const regex = new RegExp('[\\?&]phases=([^&#]*)')
    let results = regex.exec(urlParams)
    if (results) results = decodeURIComponent(results[1].replace(/\+/g, ' '))
    return results.toString().split(',')
  }

  _getQuestionsFromPhases(chosenPhases) {
    chosenPhases = chosenPhases.map(phase => Number(phase))
    // Do something clever here
    return chosenPhases
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