import React, { Component } from 'react';
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
  }

  componentDidMount() {
    this.getPlayers();
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
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
      <div style={styles.appStyle}>
        <Header />
        <PlayerList
          playerList={this.state.players}
          width={this.state.width}
        />  
      </div>
    );
  }
}

export default App;
