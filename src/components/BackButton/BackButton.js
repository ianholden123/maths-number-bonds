import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './BackButton.css'
import {ReactComponent as BackLogo} from './Back.svg';

class BackButton extends Component {
  render() {
    return (
      <Link to={this.props.to || '/'}>
        <button className='back-btn'>
          <BackLogo />
        </button>
      </Link>
    )
  }
}

BackButton.propTypes = {
  to: PropTypes.string
}

export default BackButton;