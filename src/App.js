import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import SelectPhases from './pages/SelectPhases/SelectPhases'
import Task from './pages/Task/Task'
import Settings from './pages/Settings/Settings'
import { quickAnswerTime } from './config/variables'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: {
        quickAnswerTime: localStorage.getItem('quickAnswerTime') || quickAnswerTime
      }
    }
    this.setQuickAnswerTime = this.setQuickAnswerTime.bind(this)
  }

  setQuickAnswerTime(value) {
    localStorage.setItem('quickAnswerTime', value);
    this.setState({
      settings: {
        quickAnswerTime: value
      }
    })
  }

  goBack() {
    this.props.history && this.props.history.goBack();
  }

  render() {
    const settingSetters = {
      setQuickAnswerTime: this.setQuickAnswerTime
    }

    return (
      <div className="AppContainer">
        <div className="App">
          <Router>
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
                render={props => <Task location={props.location} settings={this.state.settings} />}
              />
              <Route path="/settings">
                <Settings settings={this.state.settings} settingSetters={settingSetters} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
