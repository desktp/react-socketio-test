import React, { Component } from 'react';
import './App.css';

import PlayerList from './PlayerList';
import { Header } from './common';


class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      width: ''
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
    const styles = {
      appStyle: {
        height: '100%'  
      },
    }

    return (
      <div style={styles.appStyle}>
        <Header />
        <PlayerList
          playerList={this.state.players}
        />  
      </div>
    );
  }
}

export default App;
