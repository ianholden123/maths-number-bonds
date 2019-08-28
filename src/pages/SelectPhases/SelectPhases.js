import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './SelectPhases.css';
import phases from '../../config/phases'

class SelectPhases extends Component {
  getPhaseButtons() {
    let buttons = [];
    phases.forEach((phase) => {
      if (!phase.id || !phase.name || !phase.description) return;
      buttons.push(
        <button key={phase.id}>
          <strong>{phase.name}</strong>
          <p>{phase.description}</p>
        </button>
      )
    })
    return buttons;
  }
  
  render() {
    return (
      <div className={this.props.pageType}>
        <h1>{this.props.title}</h1>
        {this.getPhaseButtons()}
        <Router>
          <button><Link to="/task/">Start</Link></button>
        </Router>
      </div>
    );
  }
}

export default SelectPhases;