import React from 'react';
import { PlayerCard } from './common';

const PlayerList = ({ classeContainer, classeCard }) => (
  <div className={classeContainer}>
    <PlayerCard
      classeCard={classeCard}
    />
  </div>
);

export default PlayerList;
