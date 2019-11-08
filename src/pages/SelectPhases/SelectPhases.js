import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SelectPhases.css';
import phases from '../../config/phases'

class SelectPhases extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedPhases: [] }
  }

  getPhaseButtons() {
    let buttons = [];
    phases.forEach(phase => {
      if ((!phase.id && phase.id < 0) || !phase.name || !phase.description) return;
      buttons.push(
        <button key={phase.id} onClick={() => {this.selectPhase(phase.id)}}>
          <strong>{phase.name}</strong>
          <p>{phase.description}</p>
        </button>
      )
    })
    return buttons;
  }

  selectPhase(id) {
    const selectedIndex = this.state.selectedPhases.indexOf(id)
    let newArray = this.state.selectedPhases

    if (selectedIndex > -1) {
      newArray.splice(selectedIndex, 1)
    } else {
      newArray.push(id)
    }

    this.setState({selectedPhases: newArray})
  }
  
  render() {
    const queryParamPhases = encodeURIComponent(this.state.selectedPhases.join(','))
    return (
      <div className={this.props.taskType}>
        <h1>{this.props.title}</h1>
        {this.getPhaseButtons()}
        {
          this.state.selectedPhases.length > 0 ?
            <Link to={`/task?phases=${queryParamPhases}&taskType=${this.props.taskType}`}>
              <button>Start {this.props.taskType}</button>
            </Link>
          :
            <button disabled>Start {this.props.taskType}</button>
        }
        
      </div>
    );
  }
}

export default SelectPhases;