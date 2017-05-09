import React, { Component } from 'react';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';

import './css/App.css';

import PlayerList from './PlayerList';
import Lobby from './Lobby';
import { Header } from './common';


class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      playersInLobby: [],
      width: 0
    }

    this.updateWidth = this.updateWidth.bind(this);

    //socket.io
    this.socket = io();
  }

  componentDidMount() {
    this.getPlayers();
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);

    this.initLobbyListener();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
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

  joinLobby(player) {
    this.socket.emit('join lobby', { player });
  }

  initLobbyListener() {
    this.socket.on('player joined', (data) => {
      const playersInLobby = this.state.playersInLobby;
      let found = false;

      playersInLobby.forEach((player) => {
        if (player.username === data.username){          
          found = true;
        }
      });

      if (!found || playersInLobby.length <= 0) {
        playersInLobby.push(data);
      } else {
        alert(`Player ${data.username} já está no lobby!`);
      }

      this.setState({ playersInLobby });
    });
  }

  render() {
    const styles = {
      appStyle: {
        height: '100%'  
      },
    }

    return (
      <Router style={styles.appStyle}>
        <div>
          <Header />

          <Route 
            exact
            path='/'
            render={() => 
              <PlayerList
                playerList={this.state.players}
                width={this.state.width}
                joinLobby={this.joinLobby.bind(this)}
              />
            }
          />
          <Route
            path='/lobby'
            render={() => 
              <Lobby
                playersInLobby={this.state.playersInLobby}
              />
            }
          />
        </div>  
      </Router>
    );
  }
}

export default App;
