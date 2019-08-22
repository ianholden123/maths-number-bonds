import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Progression in Number Bonds Within 20</h1>
        <Router>
          <button><Link to="/practice-zone/">Practice Zone</Link></button>
          <button><Link to="/assessment/">Assessment</Link></button>
        </Router>
      </div>
    );
  }
}

export default Home;