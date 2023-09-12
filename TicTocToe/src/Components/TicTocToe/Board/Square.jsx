import {} from "react";
import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="squareContainer ">
        <h2>{value}</h2>
        {/* <h2>✔️</h2> */}
        {/* <h2>❌</h2> */}
      </div>
    </>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.string,
};

export default Square;
