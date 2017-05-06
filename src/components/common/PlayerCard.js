import React from 'react';

const cardStyle = {
  backgroundColor: '#828282',
  minWidth: '250px'
};

const PlayerCard = ({ player }) => (
  <div style={cardStyle}>
    <p>{player.username}</p>
  </div>
);



export { PlayerCard };
