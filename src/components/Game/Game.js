import * as React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  return <WordInput guess={guess} setGuess={setGuess} />;
}

function WordInput({ guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();

    console.log('Submitted guess:', guess);

    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          name="guess-input"
          title="Every guess must have 5 letters"
          value={guess}
          required={true}
          pattern={'[a-zA-Z]{5,5}'}
          maxLength={5}
          onChange={(event) =>
            setGuess(event.target.value.toUpperCase())
          }
        />
      </div>
    </form>
  );
}

export default Game;
