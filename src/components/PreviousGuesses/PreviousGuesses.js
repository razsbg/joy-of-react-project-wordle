function PreviousGuesses({ previousGuesses }) {
  return previousGuesses.map((guess, index) => (
    <p key={index} className="guess">
      {guess}
    </p>
  ));
}

export default PreviousGuesses;
