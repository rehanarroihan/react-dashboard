import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Sidebar extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="main-sidebar">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <Link href="index.html">Stisla</Link>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
              <Link href="index.html">St</Link>
            </div>
            <ul className="sidebar-menu">
              <li className="menu-header">Beranda</li>
              <li>
                <Link
                  className="nav-link"
                  href="credits.html">
                    <i className="fas fa-tachometer-alt" /> 
                    <span>Beranda</span>
                </Link>
              </li>

              <li className="menu-header">Data Master</li>
              <li className="active">
                <Link
                  className="nav-link"
                  href="blank.html">
                    <i className="fas fa-biking" />
                    <span>Supir</span>
                  </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href="blank.html">
                    <i className="fa fa-truck" />
                    <span>Kendaraan</span>
                  </Link>
              </li>
              <li className="active">
                <Link
                  className="nav-link"
                  href="blank.html">
                    <i className="fa fa-users" />
                    <span>Pelanggan</span>
                  </Link>
              </li>
            </ul>
            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
              <Link href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <i className="fas fa-rocket" /> Documentation
              </Link>
            </div>
          </aside>
        </div>
      </Router>
    );
  }
}
 
export default Sidebar;