import { useState } from "react";
import "../index.css";

function GuessNumber() {
  const [term, setTerm] = useState("");
  const [message, setMessage] = useState("");

  const [randomNumber] = useState(() => Math.floor(Math.random() * 20) + 1);

  const onHandleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleGuess = () => {
    const guess = Number(term);

    if (term === "" || guess < 1 || guess > 20 || !Number.isInteger(guess)) {
      setMessage("Please enter a valid number between 1 and 20.");
    } else if (guess === randomNumber) {
      setMessage("🎉 Correct! You guessed the number!");
    } else if (guess < randomNumber) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 and 20</label>
      </div>

      <input
        id="term"
        type="number"
        name="term"
        min="1"
        max="20"
        value={term}
        onChange={onHandleChange}
        placeholder="Enter a number"
      />

      <button onClick={handleGuess}>Guess</button>

      <h2>{message}</h2>
    </div>
  );
}

export default GuessNumber;
