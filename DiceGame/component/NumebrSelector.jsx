import {} from "react";
import { styled } from "styled-components";

const NumberSelector = ({
  setError,
  Error,
  NumberSelected,
  setNumberSelected,
}) => {
  const errorHandler = (value) => {
    setNumberSelected(value);
    setError("");
  };
  const Array = [1, 2, 3, 4, 5, 6];
  //   console.log(NumberSelected);
  return (
    <>
      <div className="box flex ">
        {Array.map((value, i) => (
          <Box
            isselected={value === NumberSelected}
            key={i}
            onClick={() => errorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="roko relative top-2 font-bold  h-5">
        <p className="text-center  text-red-500  ">{Error}</p>
      </div>
    </>
  );
};

export default NumberSelector;
const Box = styled.div`
  height: 62px;
  width: 62px;
  cursor: pointer;
  font-weight: bold;
  border: 3px solid black;
  display: grid;
  place-items: center;
  margin-right: 10px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black ")};
  .text-center {
    font-style: italic;
  }
`;
