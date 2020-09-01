import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route, 
} from "react-router-dom";

import routes from "./routes";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path={routes.home} component={LoginPage}></Route>
          <Route exact path={routes.login} component={LoginPage}></Route>
          <Route path={routes.dashboard} component={DashboardPage}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;