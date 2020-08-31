import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/dashboard" component={DashboardPage}></Route>
        </Router>
      </div>
    );
  }
}

export default App;