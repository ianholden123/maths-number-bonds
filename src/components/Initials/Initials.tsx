import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import './Initials.css';

interface InitialsProps {
  setInitials: (initialsValue: string) => void
}

const Initials = (props: InitialsProps) => {
  const [initialsValue, setInitialsValue] = useState<string>('')

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') props.setInitials(initialsValue)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInitialsValue(event.target.value)
  }

  return (
    <div className="initials">
      <label htmlFor="initials">Initials:</label>
      <input 
        type="text"
        name="initials"
        id="initials"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => props.setInitials(initialsValue)}>
        Set Initials
      </button>
    </div>
  );
}

export default Initials;