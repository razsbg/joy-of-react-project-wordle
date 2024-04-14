import * as React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

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
      <div className="guess-results">
        {previousGuesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
      </div>
      <GuessInput
        guess={currentGuess}
        setGuess={setCurrentGuess}
        submitGuess={submitGuess}
      />
    </>
  );
}

export default Game;
