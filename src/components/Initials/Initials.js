import React, { Component } from 'react';
import './Initials.css';

class Initials extends Component {
  constructor(props) {
    super(props)

    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({ initialsValue: event.target.value});
  }
  
  handleStartClick() {
    this.props.setInitials(this.state.initialsValue)
  }

  render() {
    return (
      <div className="initials">
        <label htmlFor="initials">Initials:</label>
        <input type="text" name="initials" id="initials" onChange={this.handleInputChange} />
        <button onClick={this.handleStartClick}>Set Initials</button>
      </div>
    );
  }
}

export default Initials;