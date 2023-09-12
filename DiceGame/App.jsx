import { useState } from "react";
import StartGame from "./component/startGame";
import GameScreen from "./component/GameScreen";
import "./component/main.css";
const App = () => {
  const [GameStarted, setGameStarted] = useState(false);
  const toggleGame = () => {
    setGameStarted((Prev) => !Prev);
  };
  return <>{GameStarted ? <GameScreen /> : <StartGame Game={toggleGame} />}</>;
};

export default App;
