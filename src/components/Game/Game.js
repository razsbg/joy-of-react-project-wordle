import * as React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// testing linting

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  function submitGuess() {
    const newGuesses = [...previousGuesses, currentGuess];
    setPreviousGuesses(newGuesses);
  }

  return (
    <>
      <PreviousGuesses previousGuesses={previousGuesses} />
      <GuessInput
        guess={currentGuess}
        setGuess={setCurrentGuess}
        submitGuess={submitGuess}
      />
    </>
  );
}

export default Game;
