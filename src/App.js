import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import SelectPhases from './pages/SelectPhases/SelectPhases'
import Task from './pages/Task/Task'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/practice-zone/" render={() => <SelectPhases title='Practice Zone' pageType='practice' />} />
            <Route path="/assessment/" render={() => <SelectPhases title='Assessment' pageType='assessment' />} />
            <Route path="/task/" component={Task} />
          </Router>
      </div>
    );
  }
}

export default App;
