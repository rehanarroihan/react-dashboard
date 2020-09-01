import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import routes from "../routes";

class Sidebar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to={routes.dashboard}>AisySae Express</Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <Link to={routes.dashboard}>St</Link>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Home</li>
            <li>
              <Link
                className="nav-link"
                to={routes.dashboardHome}>
                  <i className="fas fa-fire" /> 
                  <span>Dashboard</span>
              </Link>
            </li>

            <li className="menu-header">Data Master</li>
            <li>
              <Link
                className="nav-link"
                to={routes.driver}>
                  <i className="fas fa-biking" />
                  <span>Supir</span>
                </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={routes.vehicle}>
                  <i className="fa fa-truck" />
                  <span>Kendaraan</span>
                </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={routes.customer}>
                  <i className="fa fa-users" />
                  <span>Pelanggan</span>
              </Link>
            </li>

            <li className="menu-header">Transaksi</li>
            <li>
              <Link
                className="nav-link"
                to={routes.delivery}>
                  <i className="fa fa-exchange-alt" />
                  <span>Delivery</span>
                </Link>
            </li>

            <li className="menu-header">Lainnya</li>
            <li>
              <Link
                className="nav-link"
                to={routes.login}>
                  <i className="fa fa-sign-out-alt" />
                  <span>Logout</span>
                </Link>
            </li>
          </ul>
          
        </aside>
      </div>
    );
  }
}
 
export default Sidebar;