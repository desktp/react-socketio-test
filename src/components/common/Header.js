import React from 'react';

const Header = ({ classeHeader, classeLogo, logo }) => (
  <div className={classeHeader}>
    <img src={logo} className={classeLogo} alt="logo" />
    <h2>MixBR - React + socket.io :)</h2>
  </div>
);

export { Header };
