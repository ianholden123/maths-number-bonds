import React from 'react'
import { Link } from "react-router-dom";
import './BackButton.css'
import {ReactComponent as BackLogo} from './Back.svg';

interface BackButtonProps {
  to?: string
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Link to={props.to || '/'}>
      <button className='back-btn'>
        <BackLogo />
      </button>
    </Link>
  )
}

export default BackButton;