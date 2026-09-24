import { useState } from "react";
import Coin from "./Coin";

function CoinFlipping({
  coins = [
    {
      side: "head",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    },
    {
      side: "tail",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    },
  ],
}) {
  const [totalFlips, setTotalFlips] = useState(null);
  const [currFace, setCurFace] = useState(0);
  const [heads, setHeads] = useState(0);

  const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  };

  const flipCoin = () => {
    const newFace = choice(coins);

    setCurFace(newFace);
    setTotalFlips((prevTotalFlips) => prevTotalFlips + 1);

    if (newFace.side === "head") {
      setHeads((prevHeads) => prevHeads + 1);
    }
  };

  return (
    <>
      <div>
        {" "}
        <h2>Let's Flip a Coin</h2> {currFace && <Coin info={currFace} />}{" "}
        <button onClick={flipCoin}> Flip Me! </button>{" "}
        <p>
          {" "}
          Out of {totalFlips} flips, there have been {heads} heads and{" "}
          {totalFlips - heads} tails{" "}
        </p>{" "}
      </div>
    </>
  );
}

export default CoinFlipping;
