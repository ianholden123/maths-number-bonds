import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Progression in Number Bonds Within 20</h1>
        {/* <Link to="/practice-zone/"><button>Practice Zone</button></Link> */}
        <Link to="/assessment/"><button>Assessment</button></Link>
      </div>
    );
  }
}

export default Home;