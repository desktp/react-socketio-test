import React from 'react';

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
  }
};

const Header = () => (
  <div style={styles.headerStyle}>
    <img src={logo} style={styles.logoStyle} alt="logo" />
    <h2>MixBR - React + socket.io :)</h2>
  </div>
);

export { Header };
