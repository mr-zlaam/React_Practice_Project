import { } from "react";
import "./KeyPad.css";
import PropTypes from 'prop-types'

const KeyPad = (props) => {
  const keys = [
    { "keyCode": 55, "label": "7", "value": "7" },
    { "keyCode": 56, "label": "8", "value": "8" },
    { "keyCode": 57, "label": "9", "value": "9" },
    { "keyCode": 52, "label": "4", "value": "4" },
    { "keyCode": 53, "label": "5", "value": "5" },
    { "keyCode": 54, "label": "6", "value": "6" },
    { "keyCode": 49, "label": "1", "value": "1" },
    { "keyCode": 50, "label": "2", "value": "2" },
    { "keyCode": 51, "label": "3", "value": "3" },
    { "keyCode": 48, "label": "0", "value": "0" },
    { "keyCode": 46, "label": ".", "value": "." },   // Decimal Point (.)
    { "keyCode": 61, "label": "=", "value": "enter" }    // Equals (=)
  ];

  const symbols = [
    { "keyCode": 88, "label": "⌫", "value": "backspace" },   // Delete (⌫)
    { "keyCode": 191, "label": "÷", "value": "/" },   // Division (÷)
    { "keyCode": 55, "label": "×", "value": "*" },   // Multiplication (×)
    { "keyCode": 43, "label": "+", "value": "+" },   // Addition (+)
    { "keyCode": 45, "label": "-", "value": "-" },   // Subtraction (-)
  ];

  return (
    <div className="keypad">
      <div className="keypad_keys ">
        {
          keys.map((items, index) => <p key={index} onClick={() => props.handleKeyPress(items.keyCode, items.label)} >{items.label}</p>)
        }
      </div>
      <div className="keypad_symbol">
        {
          symbols.map((items, index) => <p key={index}
            onClick={() => props.handleKeyPress(items.keyCode, items.value)}
          >{items.label}</p>)
        }
      </div>
    </div>
  );
};
KeyPad.propTypes = {
  handleKeyPress: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
export default KeyPad;
