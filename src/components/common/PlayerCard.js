import React from 'react';

const styles = {
  cardStyle: {
    backgroundColor: '#828282',
    minWidth: '250px',
    padding: '5px'
  },
  avatarStyle: {
    float: 'left',
    marginRight: '25px'
  },
  nickStyle: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  buttonStyle: {
    float: 'right'
  }
};

const PlayerCard = ({ player, joinLobby }) => (
  <div style={styles.cardStyle}>
    <button 
      style={styles.buttonStyle}
      onClick={() => joinLobby({...player})}
    >
      Entrar no Lobby
    </button>
    <img src={player.avatar_medium} alt='avatar' style={styles.avatarStyle}/>
    <p style={styles.nickStyle}>{player.username}</p>
    {
      player.is_available 
      ? 
      (<p>Possui time</p>) 
      :
      (<p>Não possui time</p>)
    }
  </div>
);



export { PlayerCard };
