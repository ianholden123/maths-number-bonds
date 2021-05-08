import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './SelectPhases.css';
import phases from '../../config/phases'
import BackButton from '../../components/BackButton/BackButton'

const SelectPhases = (props: any) => {
  const [selectedPhases, setSelectedPhases] = useState<any>([]);

  const getPhaseButtons = () => {
    const buttons: any = []
    phases.forEach((phase) => {
      if ((!phase.id && phase.id < 0) || !phase.name || !phase.description) return;
      buttons.push(
        <button
          key={phase.id}
          onClick={() => { selectPhase(phase.id) }}
          className={selectedPhases.includes(phase.id) ? 'selected' : undefined}
        >
          <strong>{phase.name}</strong>
          <p>{phase.description}</p>
        </button>
      )
    })
    return buttons;
  }

  const selectPhase = (id: number) => {
    const selectedIndex = selectedPhases.indexOf(id)
    let newArray = [...selectedPhases]

    if (selectedIndex > -1) {
      newArray.splice(selectedIndex, 1)
    } else {
      newArray.push(id)
    }

    setSelectedPhases(newArray)
  };

  const toggleAllPhases = () => {
    // Empty selected phases if they are all already selected
    if (selectedPhases.length === phases.length) {
      setSelectedPhases([])
    // Select all phases if they are not all already selected
    } else {
      setSelectedPhases(phases.map(phase => phase.id))
    }
  };

  const queryParamPhases = encodeURIComponent(selectedPhases.join(','));

  return (
    <div className={props.taskType}>
      <BackButton />
      <h1>{props.title}</h1>
      <div className="phaseButtons">
        {getPhaseButtons()}
        <button
          onClick={() => toggleAllPhases()}
          className={selectedPhases.length === phases.length ? 'selected' : undefined}
        >
          { selectedPhases.length === phases.length ? 'Deselect all phases' : 'Select all phases'}
        </button>
      </div>
      {
        selectedPhases.length > 0
          ? (
            <Link to={`/task?phases=${queryParamPhases}&taskType=${props.taskType}`}>
              <button className="bg-primary">
                Start
                {' '}
                {props.taskType}
              </button>
            </Link>
          )
          : (
            <button disabled className="bg-primary">
              Start
              {' '}
              {props.taskType}
            </button>
          )
      }

    </div>
  );
}

export default SelectPhases;