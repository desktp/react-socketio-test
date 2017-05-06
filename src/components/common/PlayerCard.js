import React from 'react';

const PlayerCard = ({ classeCard, player }) => (
  <div className={classeCard}>
    <p>{player.username}</p>
  </div>
);

export { PlayerCard };
