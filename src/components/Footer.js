import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <footer className="main-footer">
          <div className="footer-left">
            Copyright © 2018 <div className="bullet" /> Design By 
            <Link to="/about" />Muhamad Nauval Azhar
          </div>
          <div className="footer-right">
            2.3.0
          </div>
        </footer>
      </Router>
    );
  }
}
 
export default Footer;