import React from 'react';
import { PlayerCard } from './common';

const containerStyle = {
  margin: '10px',
  padding: '10px',
  backgroundColor: 'rgb(200,200,200)',
  height: '50%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  gridAutoRows: 'minmax(100px, auto)'
};

const PlayerList = ({ playerList = [] }) => (
  <div style={containerStyle}>
    {playerList.map((player) => (
      <PlayerCard
        key={player.id}
        player={player}
      />
    ))}
  </div>
);

export default PlayerList;
