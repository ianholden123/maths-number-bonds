import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SelectPhases.css';
import phases from '../../config/phases'

class SelectPhases extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedPhases: [] }
    
    this.toggleAllPhases = this.toggleAllPhases.bind(this)
  }

  getPhaseButtons() {
    let buttons = [];
    phases.forEach(phase => {
      if ((!phase.id && phase.id < 0) || !phase.name || !phase.description) return;
      buttons.push(
        <button 
          key={phase.id} 
          onClick={() => {this.selectPhase(phase.id)}}
          className={this.state.selectedPhases.includes(phase.id) ? 'selected' : ''}
        >
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

  toggleAllPhases() {
    // Empty selected phases if they are all already selected
    if (this.state.selectedPhases.length === phases.length) {
      this.setState({ selectedPhases: [] })
    // Select all phases if they are not all already selected
    } else {
      phases.forEach(phase => {
        if (!this.state.selectedPhases.includes(phase.id)) {
          this.selectPhase(phase.id)
        }
      })
    }
  }
  
  render() {
    const queryParamPhases = encodeURIComponent(this.state.selectedPhases.join(','))
    return (
      <div className={this.props.taskType}>
        <h1>{this.props.title}</h1>
        <div className="phaseButtons">
          {this.getPhaseButtons()}
          <button 
            onClick={this.toggleAllPhases}
            className={this.state.selectedPhases.length === phases.length ? 'selected' : ''}
          >
            { this.state.selectedPhases.length === phases.length ? 'Deselect all phases' : 'Select all phases'}
          </button>
        </div>
        {
          this.state.selectedPhases.length > 0 ?
            <Link to={`/task?phases=${queryParamPhases}&taskType=${this.props.taskType}`}>
              <button className="bg-primary">Start {this.props.taskType}</button>
            </Link>
          :
            <button disabled className="bg-primary">Start {this.props.taskType}</button>
        }
        
      </div>
    );
  }
}

export default SelectPhases;