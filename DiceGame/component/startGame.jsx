import {} from "react";
import PropTypes from "prop-types";
import DicesStart from "../assets/dices.png";

const StartGame = ({ Game }) => {
  return (
    <div className="Star-container flex justify-around mt-40 items-center">
      <div className="image">
        <img src={DicesStart} alt="Dices Image" />
      </div>
      <div className="title">
        <h1 className="text-center font-extrabold tracking-wide text-7xl">
          DICES
        </h1>
        <div className="btn-startgame">
          <button className="startbutton w-80 mt-2 p-2" onClick={Game}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

StartGame.propTypes = {
  Game: PropTypes.func.isRequired,
};

export default StartGame;
