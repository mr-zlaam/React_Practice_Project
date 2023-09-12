import { useState } from "react";
import TotalScore from "./totalScore";
import RollDice from "./RollDice";
import NumberSelector from "../component/NumebrSelector";
import one from "../assets/dice/dice_1.png";
import two from "../assets/dice/dice_2.png";
import three from "../assets/dice/dice_3.png";
import four from "../assets/dice/dice_4.png";
import five from "../assets/dice/dice_5.png";
import six from "../assets/dice/dice_6.png";

const GameScreen = () => {
  const [NumberSelected, setNumberSelected] = useState();
  const [currentDice, setCurrentDice] = useState(one);
  const [Score, setScore] = useState(0);
  const [Error, setError] = useState();
  const diceImages = [one, two, three, four, five, six];

  const rollDice = () => {
    if (!NumberSelected) {
      setError("!Please select the Number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6); // Generates 0 to 5
    setCurrentDice(diceImages[randomNumber]);
    if (NumberSelected === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setNumberSelected(undefined);
  };
  const Reseter = () => {
    setScore(0);
  };
  return (
    <div className="divGameScreen">
      <div className="hero flex justify-between items-center">
        <div className="totalScore">
          <TotalScore Score={Score} />
        </div>
        <div className="numebrselector  mr-20 ">
          <NumberSelector
            setError={setError}
            Error={Error}
            NumberSelected={NumberSelected}
            setNumberSelected={setNumberSelected}
          />
        </div>
      </div>

      <div className="totalscore">
        <RollDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <div className="btns">
        <button onClick={Reseter}>Reset Score</button>
      </div>
    </div>
  );
};

export default GameScreen;
