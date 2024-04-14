function GuessInput({ guess, setGuess, submitGuess }) {
  function handleSubmit(event) {
    event.preventDefault();

    submitGuess();
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

export default GuessInput;
