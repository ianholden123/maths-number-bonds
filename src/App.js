import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import SelectPhases from './pages/SelectPhases/SelectPhases'
import Task from './pages/Task/Task'

class App extends Component {

  render() {
    return (
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
                render={props => <Task location={props.location}/>}
              />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
