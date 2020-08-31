import React, { Component } from 'react';

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

import Blank from './../components/Blank';

class DashboardPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Blank />
        <Footer />
      </div>
    );
  }
}

export default DashboardPage;