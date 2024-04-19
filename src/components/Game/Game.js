import * as React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(null)
  );

  const isGameLost = guesses.every((guess) => guess !== null);
  const isGameWon = guesses.find((guess) => guess === answer);
  const isGameOver = isGameLost || isGameWon;

  const numOfGuesses = guesses.reduce((total, guess) => {
    if (guess !== null) {
      return ++total;
    }

    return total;
  }, 0);

  function submitGuess(currentGuess) {
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
              <Guess guess={guess} />
            </p>
          );
        })}
      </div>

      <GuessInput submitGuess={submitGuess} disabled={isGameOver} />

      {isGameLost && (
        <div className="banner sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>
          </p>
        </div>
      )}
      {isGameWon && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}
            </strong>
          </p>
        </div>
      )}
    </>
  );
}

function Guess({ guess }) {
  if (!guess) {
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

  const checkedGuess = checkGuess(guess, answer);

  return checkedGuess.map(({ letter, status }, index) => {
    return (
      <span key={index} className={`cell ${status}`}>
        {letter}
      </span>
    );
  });
}

export default Game;
