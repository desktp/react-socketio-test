import React from 'react';
import { PlayerCard } from './common';

const containerStyle = {
  base: {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'rgb(200,200,200)',
    height: '50%',
    display: 'grid',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)',
  },
  fourCol: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  threeCol: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  twoCol: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  oneCol: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
};

const getCols = (width) => {
  if (width < 560) {
    return {...containerStyle.base, ...containerStyle.oneCol};
  } else if (width < 840) {
    return {...containerStyle.base, ...containerStyle.twoCol};
  } else if (width < 1224) {
    return {...containerStyle.base, ...containerStyle.threeCol};    
  } else {
    return {...containerStyle.base, ...containerStyle.fourCol};    
  }
}

const PlayerList = ({ playerList = [], width, joinLobby }) => (
  <div style={getCols(width)}>
    {playerList.map((player) => (
      <PlayerCard
        key={player.id}
        player={player}
        joinLobby={joinLobby}
      />
    ))}
  </div>
);

export default PlayerList;
