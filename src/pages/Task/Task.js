import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Task.css';
import Initials from '../../components/Initials/Initials'
import Numpad from '../../components/Numpad/Numpad'
import Problem from '../../components/Problem/Problem'

class Task extends Component {
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