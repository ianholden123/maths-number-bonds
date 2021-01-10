import React from 'react'
import { Link } from "react-router-dom";
import './SettingsButton.css'
import {ReactComponent as SettingsLogo} from './Settings.svg';

const SettingsButton = () => {
  return (
    <Link to="/settings">
      <button className='settings-btn'>
        <SettingsLogo />
      </button>
    </Link>
  )
}

export default SettingsButton;