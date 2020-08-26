import React, { Component } from 'react';

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <footer className="main-footer">
        <div className="footer-left">
          Copyright © 2018 <div className="bullet" /> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
        </div>
        <div className="footer-right">
          2.3.0
        </div>
      </footer>
    );
  }
}
 
export default Footer;