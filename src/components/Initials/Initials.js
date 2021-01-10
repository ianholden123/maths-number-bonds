import React, { useState } from 'react';
import './Initials.css';

const Initials = (props) => {
  const [initialsValue, setInitialsValue] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') props.setInitials(initialsValue)
  }

  return (
    <div className="initials">
      <label htmlFor="initials">Initials:</label>
      <input 
        type="text"
        name="initials"
        id="initials"
        onChange={(event) => setInitialsValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => props.setInitials(initialsValue)}>
        Set Initials
      </button>
    </div>
  );
}

export default Initials;