import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './SettingsButton.css'
import {ReactComponent as SettingsLogo} from './Settings.svg';

class SettingsButton extends Component {
  render() {
    return (
      <Link to="/settings">
        <button className='settings-btn'>
          <SettingsLogo />
        </button>
      </Link>
    )
  }
}

export default SettingsButton;