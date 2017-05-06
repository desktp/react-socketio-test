import React, { Component } from 'react';
import './App.css';

import PlayerList from './PlayerList';
import { Header } from './common';

import logo from '../assets/logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    fetch('https://dev.api.mixbrgames.com/api/v1/player/search')
      .then((response) => response.json())
      .then((body) => {
        this.setState({
          players: body.results
        });
      });
  }

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
          playerList={this.state.players}
        />  
      </div>
    );
  }
}

export default App;
