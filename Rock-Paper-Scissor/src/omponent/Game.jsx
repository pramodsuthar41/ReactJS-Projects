import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
function Game() {
  const [playerVal, setPlayerVal] = useState(null);
  const [computerVal, setComputerVal] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const logic = (playerVal, computerVal) => {
    if (playerVal === computerVal) {
      return 0;
    }

    if (
      (playerVal === "ROCK" && computerVal === "SICSSORS") ||
      (playerVal === "SICSSORS" && computerVal === "PAPER") ||
      (playerVal === "PAPER" && computerVal === "ROCK")
    ) {
      return 1;
    }

    return -1;
  };

  const decision = (playerChoice) => {
    const choices = ["PAPER", "ROCK", "SICSSORS"];

    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = logic(playerChoice, compChoice);

    setPlayerVal(playerChoice);
    setComputerVal(compChoice);

    if (result === 1) {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (result === -1) {
      setCompScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Welcome to Rock, Paper, Scissors Game</h1>
        <div>
          <button onClick={() => decision("ROCK")}>
            <i className="fas fa-hand-rock"></i> Rock
          </button>
          <button onClick={() => decision("PAPER")}>
            <i className="fas fa-hand-paper"></i> Paper
          </button>
          <button onClick={() => decision("SCISSORS")}>
            <i className="fas fa-hand-scissors"></i> Scissors
          </button>
        </div>
        <div>
          <p>Your choice: {playerVal}</p>
          <p>Computer's choice: {computerVal}</p>
          <h2>Your Score: {playerScore}</h2>
          <h2>Computer Score: {compScore}</h2>
        </div>
      </div>
    </>
  );
}

export default Game;
