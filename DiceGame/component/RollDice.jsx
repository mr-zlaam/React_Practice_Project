import {} from "react";
import { styled } from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="cursor-pointer" onClick={rollDice}>
        <img className="w-96" src={currentDice} alt="" />
      </div>
      <p className="font-bold text-xl">Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  p {
    cursor: pointer;
  }
`;
