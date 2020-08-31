import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import avatar from './../avatar/avatar-1.png';

class Header extends Component {
  state = { }

  render() { 
    return ( 
      <Router>
        <nav className="navbar navbar-expand-lg main-navbar">
          <form className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li>
                <Link
                  to={""}
                  data-toggle="sidebar"
                  className="nav-link nav-link-lg">
                  <i className="fas fa-bars" /></Link>
              </li>
              <li>
                <Link
                  to={""}
                  data-toggle="search"
                  className="nav-link nav-link-lg d-sm-none">
                  <i className="fas fa-search" />
                  </Link>
                </li>
            </ul>
            <div className="search-element">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={250} />
              <button className="btn" type="submit"><i className="fas fa-search" /></button>
              <div className="search-backdrop" />
            </div>
          </form>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown">
              <Link to={""} data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                <img alt="Avatar of User" src={ avatar } className="rounded-circle mr-1" />
                <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-title">Logged in 5 min ago</div>
                <Link to={""} className="dropdown-item has-icon">
                  <i className="far fa-user" /> Profile
                </Link>
                <Link to={""} className="dropdown-item has-icon">
                  <i className="fas fa-bolt" /> Activities
                </Link>
                <Link to={""} className="dropdown-item has-icon">
                  <i className="fas fa-cog" /> Settings
                </Link>
                <div className="dropdown-divider" />
                <Route to={ "/login" } className="dropdown-item has-icon text-danger">
                  <i className="fas fa-sign-out-alt" /> Logout
                </Route>
              </div>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}
 
export default Header;