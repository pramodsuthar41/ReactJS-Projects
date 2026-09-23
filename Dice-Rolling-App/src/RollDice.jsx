import { useState } from "react";
import Dice from "./Dice";
import "./RollDice.css";

function RollDice({ sides = ["one", "two", "three", "four", "five", "six"] }) {
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      setDie1(sides[Math.floor(Math.random() * sides.length)]);
      setDie2(sides[Math.floor(Math.random() * sides.length)]);
      setRolling(false);
    }, 1000);
  };

  const btn = rolling ? "RollDice-rolling" : "";

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Dice face={die1} rolling={rolling} />
        <Dice face={die2} rolling={rolling} />
      </div>

      <button className={btn} disabled={rolling} onClick={roll}>
        {rolling ? "Rolling" : "Roll Dice!"}
      </button>
    </div>
  );
}

export default RollDice;
