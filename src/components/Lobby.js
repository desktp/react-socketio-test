import React from 'react';
import { PlayerIcon } from './common';

const containerStyle = {
  base: {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'rgb(200,200,200)',
    height: '50%',
    display: 'grid',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}

const Lobby = ({ playersInLobby, leaveLobby }) => (
  <div style={containerStyle.base}>
    {playersInLobby.length <= 0 &&
      <p>Não há players no lobby!</p>
    }

    {playersInLobby.map((player) => (
      <PlayerIcon
        key={player.id}
        player={player}
        leaveLobby={leaveLobby}       
      />
    ))}
  </div>
);

export default Lobby;
