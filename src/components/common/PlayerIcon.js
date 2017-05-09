import React from 'react';

const styles = {
  cardStyle: {
    backgroundColor: '#828282',
    Width: '50px',
    padding: '5px',
    textAlign: 'center'
  },
  avatarStyle: {
    //float: 'left',
    marginRight: '25px',
    borderRadius: '50%'
  },
  nickStyle: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  buttonStyle: {
    //float: 'right'
  }
};

const PlayerIcon = ({ player }) => (
  <div style={styles.cardStyle}>
    <img src={player.avatar_medium} alt='avatar' style={styles.avatarStyle}/>
    <p style={styles.nickStyle}>{player.username}</p>
    <button 
      style={styles.buttonStyle}
    >
      Sair do Lobby
    </button>
  </div>
);



export { PlayerIcon };
