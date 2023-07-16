import { useState, useContext } from 'react';

import { Context } from '../../contexts/context';

import { Container, Score, Value } from './scoreboard.styles';

const Scoreboard = () => {
  const { dices, setDices } = useContext(Context);
  const { scores } = useContext(Context);

  return (
    <Container>
      {Object.entries(scores).map((entries, key) => (
        <>
          <Score>{entries[0].toUpperCase()}</Score>
          <Value>{entries[1]}</Value>
        </>
      ))}
    </Container>
  );
};

export default Scoreboard;
