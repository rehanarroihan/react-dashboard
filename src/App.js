import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Blank from './components/Blank';

import './App.css';

class App extends Component {

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

export default App;