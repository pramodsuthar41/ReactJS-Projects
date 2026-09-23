import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dice.css";

function Dice({ face, rolling }) {
  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={["fas", `fa-dice-${face}`]}
          className={`Die ${rolling && "Die-Shaking"}`}
        />
      </div>
    </>
  );
}

export default Dice;
