import React, { Component } from 'react';
import './Initials.css';

class Initials extends Component {
  render() {
    return (
      <div className="initials">
        <label for="initials">Initials:</label>
        <input type="text" name="initials" id="initials" />
      </div>
    );
  }
}

export default Initials;