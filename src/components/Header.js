import React, { Component } from 'react';
import avatar from './../avatar/avatar-1.png';

class Header extends Component {
  state = { }

  render() { 
    return ( 
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a></li>
            <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></a></li>
          </ul>
          <div className="search-element">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={250} />
            <button className="btn" type="submit"><i className="fas fa-search" /></button>
            <div className="search-backdrop" />
            
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="image" srcSet={ avatar } className="rounded-circle mr-1" />
              <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user" /> Profile
              </a>
              <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt" /> Activities
              </a>
              <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog" /> Settings
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt" /> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default Header;