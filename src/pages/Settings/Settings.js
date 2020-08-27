import React, { Component } from 'react'
import './Settings.css'
import BackButton from '../../components/BackButton/BackButton'

class Settings extends Component {


  render() {
    const { quickAnswerTime } = this.props.settings
    const { setQuickAnswerTime } = this.props.settingSetters

    return (
      <>
        <BackButton />
        <h1>Settings</h1>
        <div className="setting">
          <label htmlFor="quickAnswerTime">Quick answer time: </label>
          <input
            name="quickAnswerTime"
            type="number"
            defaultValue={quickAnswerTime / 1000}
            min="1"
            max="20"
            onChange={(e) => setQuickAnswerTime(e.target.value * 1000)}
          />
          <span> seconds</span>
        </div>
      </>
    )
  }
}

export default Settings