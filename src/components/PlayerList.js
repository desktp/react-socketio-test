import React from 'react';
import { PlayerCard } from './common';

const PlayerList = ({ classeContainer, classeCard, playerList = [] }) => (
  <div className={classeContainer}>
    {playerList.map((player) => (
      <PlayerCard
        key={player.id}
        classeCard={classeCard}
        player={player}
      />
    ))}
  </div>
);

export default PlayerList;
