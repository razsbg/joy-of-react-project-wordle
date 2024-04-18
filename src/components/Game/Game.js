import * as React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(null)
  );

  const isGameOver = guesses.every((guess) => guess !== null);

  function submitGuess() {
    if (isGameOver) {
      return;
    }

    const newGuesses = [...guesses];
    const newGuessIndex = newGuesses.findIndex(
      (value) => value === null
    );
    newGuesses[newGuessIndex] = currentGuess;
    setGuesses(newGuesses);
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          return (
            <p key={index} className="guess">
              <Guess value={guess} />
            </p>
          );
        })}
      </div>

      {isGameOver ? (
        <h2 style={{ fontWeight: 'normal' }}>
          Game over. Try again tommorow 🌞
        </h2>
      ) : (
        <GuessInput
          guess={currentGuess}
          setGuess={setCurrentGuess}
          submitGuess={submitGuess}
        />
      )}
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
