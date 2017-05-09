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

  leaveLobby(player) {
    this.socket.emit('leave lobby', { player });
  }

  checkPlayer(player) {
    const playersInLobby = this.state.playersInLobby;
    let found = false;

    playersInLobby.forEach((p) => {
      if (player.username === p.username){          
        found = true;
      }
    });

    return found;
  }

  initLobbyListener() {
    this.socket.on('player joined', (data) => {
      const playersInLobby = this.state.playersInLobby;

      if (!this.checkPlayer(data) || playersInLobby.length <= 0) {
        playersInLobby.push(data);
      } else {
        alert(`Player ${data.username} já está no lobby!`);
      }

      this.setState({ playersInLobby });
    });

    this.socket.on('player left', (data) => {
      const playersInLobby = this.state.playersInLobby;
      if (this.checkPlayer(data)) {
        console.log('found player!');

        playersInLobby.forEach((p, index) => {
          if (p.username === data.username) {
            playersInLobby.splice(index, 1);
          }
        });
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
                leaveLobby={this.leaveLobby.bind(this)}
              />
            }
          />
        </div>  
      </Router>
    );
  }
}

export default App;
