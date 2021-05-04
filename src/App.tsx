import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import SelectPhases from './pages/SelectPhases/SelectPhases'
import Task from './pages/Task/Task'
import Settings from './pages/Settings/Settings'
import { quickAnswerTime } from './config/variables'
import GA from './utils/GoogleAnalytics'

const App = (props: any) => {
  const [settings, setSettings] = useState({
    quickAnswerTime: localStorage.getItem('quickAnswerTime') || quickAnswerTime
  })

  const setQuickAnswerTime = (value: any) => {
    localStorage.setItem('quickAnswerTime', value);
    setSettings({ quickAnswerTime: value })
  }

  const settingSetters = { setQuickAnswerTime }

  return (
    <div className="AppContainer">
      <div className="App">
        <Router>
          { GA.init() && <GA.RouteTracker /> }
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/practice-zone">
              <SelectPhases title='Practice Zone' taskType='practice' />
            </Route>
            <Route path="/assessment">
              <SelectPhases title='Assessment' taskType='assessment' />
            </Route>
            <Route
              path="/task"
              render={props => <Task location={props.location} settings={settings} />}
            />
            <Route path="/settings">
              <Settings settings={settings} settingSetters={settingSetters} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
