import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isTickturn, setIsTickturn] = useState(true);

  const handleClick = (index) => {
    if (state[index] || CheckWinner()) {
      return; // If the square is already filled or the game is won, do nothing
    }

    const copyState = [...state];
    copyState[index] = isTickturn ? "✔️" : "❌";
    setState(copyState);
    setIsTickturn(!isTickturn);
  };

  const CheckWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const isBoardFull = state.every((square) => square !== null);

  return (
    <div className="boardContainer">
      {CheckWinner() ? (
        <div className="mainCont  w-96 ">
          <div className="winner  text-center flex flex-col text-3xl w-fit ">
            🤗 And The Winner is {CheckWinner()}
            <div className="btn">
              <button onClick={() => setState(Array(9).fill(null))}>
                Play Again
              </button>
            </div>
          </div>
        </div>
      ) : isBoardFull ? (
        <div className="font-extrabold text-4xl text-center mt-40 ">
          Game Drawn 😞
          <div className="btn">
            <button onClick={() => setState(Array(9).fill(null))}>
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-bold text-center my-2">
            YOUR TURN{isTickturn ? "✔️" : "❌"}
          </h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
