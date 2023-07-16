import { createContext, useState } from 'react';

export const Context = createContext({
  scores: null,
  setScores: () => null,
  upperCalc: () => null,
});

export const Provider = ({ children }) => {
  const [scores, setScores] = useState({
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    total: 0,
    bonus: 0,
  });

  const upperCalc = (dices) => {
    const onesCalc = dices
      .filter((dice) => dice === 1)
      .reduce((sum, value) => sum + value, 0);

    const twosCalc = dices
      .filter((dice) => dice === 2)
      .reduce((sum, value) => sum + value, 0);

    const threesCalc = dices
      .filter((dice) => dice === 3)
      .reduce((sum, value) => sum + value, 0);

    const foursCalc = dices
      .filter((dice) => dice === 4)
      .reduce((sum, value) => sum + value, 0);

    const fivesCalc = dices
      .filter((dice) => dice === 5)
      .reduce((sum, value) => sum + value, 0);

    const sixesCalc = dices
      .filter((dice) => dice === 6)
      .reduce((sum, value) => sum + value, 0);

    setScores({
      ...scores,
      ones: onesCalc,
      twos: twosCalc,
      threes: threesCalc,
      fours: foursCalc,
      fives: fivesCalc,
      sixes: sixesCalc,
    });
  };

  const value = {
    scores,
    setScores,
    upperCalc,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
