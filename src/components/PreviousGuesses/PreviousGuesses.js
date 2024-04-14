function PreviousGuesses({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
