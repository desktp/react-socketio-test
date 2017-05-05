import React, { Component } from 'react';
import './App.css';

import PlayerList from './PlayerList';
import { Header } from './common';

import logo from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div 
        className="App"
      >
        <Header 
          classeHeader="App-header" 
          classeLogo="App-logo"
          logo={logo} 
        />
        <PlayerList
          classeContainer="List-container"
          classeCard="List-card"
        />
      </div>
    );
  }
}

export default App;
