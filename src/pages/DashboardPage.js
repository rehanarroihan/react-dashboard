import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import routes from "../routes";

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

import Home from './../components/Home';
import Blank from './../components/Blank';
import Delivery from './../components/Delivery';

class DashboardPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path={routes.dashboardHome} component={Home} />
          <Route exact path={routes.driver} component={Blank} />
          <Route exact path={routes.vehicle} component={Blank} />
          <Route exact path={routes.customer} component={Blank} />
          <Route exact path={routes.delivery} component={Delivery} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;