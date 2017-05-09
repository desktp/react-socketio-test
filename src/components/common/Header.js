import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const styles = {
  headerStyle: {
    backgroundColor: '#222',
    height: '70px',
    padding: '10px',
    color: 'white'
  },
  logoStyle: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
    float: 'left'
  },
  linkListStyle: {
    //float: 'right',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    width: '100px',
    position: 'absolute',
    right: '50px',
    top: '30px'
  },
  linkStyle: {
    display: 'block',
    textAlign: 'center',
    float: 'left',
    textDecoration: 'none',
  }

};

const Header = () => (
  <div style={styles.headerStyle}>
    <img src={logo} style={styles.logoStyle} alt="logo" />
    <h2>MixBR - React + socket.io :)</h2>
    <ul style={styles.linkListStyle}>
      <li style={styles.linkStyle}><Link to="/">Home</Link></li>
      <li style={styles.linkStyle}><Link to="/lobby">Lobby</Link></li>
    </ul>
  </div>
);

export { Header };
