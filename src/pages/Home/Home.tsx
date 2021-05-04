import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import SettingsButton from '../../components/SettingsButton/SettingsButton'

const Home = () => {
  return (
    <div className="Home">
      <SettingsButton />
      <h1>Progression in Number Bonds Within 20</h1>
      {/* <Link to="/practice-zone/"><button>Practice Zone</button></Link> */}
      <Link to="/assessment/"><button>Assessment</button></Link>
    </div>
  );
}

export default Home;