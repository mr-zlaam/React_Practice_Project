import {} from "react";

const TotalScore = ({ Score }) => {
  return (
    <>
      <div className="gameScreen flex justify-between items-center">
        <div className="totalscore p-3 ">
          <h1 className="text-6xl font-extrabold w-20 text-center">{Score}</h1>
          <p className="text-xl font-bold ">Your Score</p>
        </div>
      </div>
    </>
  );
};

export default TotalScore;
