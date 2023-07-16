import React, { useState, useContext } from 'react';

import { Body, Dice } from './dicerolls.styles';

import { Context } from '../../contexts/context';

const randomNumber = () => Math.floor(Math.random() * 6 + 1);

const dicesInitial = ['x', 'x', 'x', 'x', 'x', 'x'];

const Dicerolls = () => {
  const [dices, setDices] = useState(dicesInitial);

  const { upperCalc } = useContext(Context);

  const rolling = () => {
    const dicesTemp = [];
    for (let i = 0; i < 6; i++) {
      dicesTemp.push(randomNumber());
    }
    setDices(dicesTemp);
    upperCalc(dicesTemp);
  };

  return (
    <Body>
      {dices.map((dice, key) => (
        <Dice key={key}>{dice}</Dice>
      ))}

      <Dice onClick={rolling}>ROLL</Dice>
    </Body>
  );
};

export default Dicerolls;
