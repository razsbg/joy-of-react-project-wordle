import * as React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
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
        <Guess value="HELLO" />
        <Guess value="TABLE" />
        <Guess />
        <Guess />
        <Guess />
        <Guess />
        <PreviousGuesses previousGuesses={previousGuesses} />
      </div>

      <GuessInput
        guess={currentGuess}
        setGuess={setCurrentGuess}
        submitGuess={submitGuess}
      />
    </>
  );
}

function Guess({ value }) {
  if (!value) {
    return (
      <>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </>
    );
  }

  return Array.from(value).map((letter, index) => {
    return (
      <span key={index} className="cell">
        {letter}
      </span>
    );
  });
}

export default Game;
