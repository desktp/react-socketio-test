import React, { Component } from 'react';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './css/App.css';

import PlayerList from './PlayerList';
import { Header } from './common';


class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
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

    this.socket.emit('lobby', { lobby: 'test' });
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
            render={() => 
              <PlayerList
                playerList={this.state.players}
                width={this.state.width}
              />
            }
          />
        </div>  
      </Router>
    );
  }
}

export default App;
