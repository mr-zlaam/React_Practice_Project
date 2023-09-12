import { useEffect, useRef } from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const resultRef = useRef();
  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Check if expression is empty, and if so, display "0" in the result area
  const resultValue = props.expression ? props.result : "0";

  return (
    <div className="header custom_scroll">
      <br />
      <div className="header_expression">
        <p className="text-3xl font-bold">{props.expression}</p>
      </div>
      <div ref={resultRef} className="header_result text-4xl font-bold">
        <p>{resultValue}</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  expression: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default Header;
