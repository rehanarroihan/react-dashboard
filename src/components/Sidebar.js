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
            <Link to={routes.dashboard}>Stisla</Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <Link to={routes.dashboard}>St</Link>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Beranda</li>
            <li>
              <Link
                className="nav-link"
                to={routes.dashboard}>
                  <i className="fas fa-tachometer-alt" /> 
                  <span>Beranda</span>
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
                to={routes.statistics}>
                  <i className="fa fa-truck" />
                  <span>Kendaraan</span>
                </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={routes.dashboard}>
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
          </ul>
          <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <Link to={routes.dashboard} className="btn btn-primary btn-lg btn-block btn-icon-split">
              <i className="fas fa-rocket" /> Documentation
            </Link>
          </div>
        </aside>
      </div>
    );
  }
}
 
export default Sidebar;