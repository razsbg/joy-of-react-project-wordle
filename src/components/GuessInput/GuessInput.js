import * as React from 'react';

function GuessInput({ submitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    submitGuess(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          name="guess input"
          title="5 letter word"
          value={guess}
          required={true}
          pattern={'[a-zA-Z]{5}'}
          onChange={(event) =>
            setGuess(event.target.value.toUpperCase())
          }
          disabled={disabled}
        />
      </div>
    </form>
  );
}

export default GuessInput;
