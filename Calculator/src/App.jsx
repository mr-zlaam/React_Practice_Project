import { useState, useEffect } from "react";
import Header from "./Components/Calculator/Header/Header";
import KeyPad from "./Components/Calculator/KeyPad/KeyPad";

const usedkeyCode = [
  46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 88, 47, 42, 43, 45, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 61, 111, 42, 191
];

const Numbers = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "."
];

const operators = ['-', '+', '*', '/'];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  useEffect(() => {
    CalculateResult(expression);
  }, [expression]);

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedkeyCode.includes(keyCode)) return;

    if (Numbers.includes(key)) {
      setExpression(expression + key);
    } else if (operators.includes(key)) {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (lastChar === "." || operators.includes(lastChar)) {
        // Replace the last operator with the new one
        setExpression(expression.slice(0, -1) + key);
      } else {
        setExpression(expression + key);
      }
    } else if (key === ".") {
      const lastChar = expression.slice(-1);
      if (lastChar === "." || operators.includes(lastChar)) {
        // Prevent adding a decimal point after an operator or another decimal point
        return;
      } else {
        // Check if the last expression ends with a number
        const lastExpression = expression.split(/[-+*/]/).pop();
        if (!lastExpression || lastExpression.includes(".")) {
          // Prevent adding a decimal point if the last expression already has one
          return;
        }
        setExpression(expression + key);
      }
    } else if (keyCode === 61) {
      if (!expression) return;
      CalculateResult(expression);
    } else if (keyCode === 88) {
      if (!expression) return;
      setExpression(expression.slice(0, -1));
    }
  };



  const CalculateResult = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }

    try {
      // Use regular expressions to split the expression into numbers and operators
      const parts = exp.split(/([+*/-])/g).filter((part) => part.trim() !== "");

      // Initialize the result with the first number
      let result = parseFloat(parts[0]);

      // Iterate through the parts array and apply operators to numbers
      for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseFloat(parts[i + 1]);
        if (isNaN(operand)) {
          setResult(result);
          return;
        }

        if (operator === "+") {
          result += operand;
        } else if (operator === "-") {
          result -= operand;
        } else if (operator === "*") {
          result *= operand;
        } else if (operator === "/") {
          if (operand === 0) {
            setResult("");
            return;
          }
          result /= operand;
        }
      }

      setResult(result.toString());
    } catch (error) {
      setResult("");
    }
  };


  return (
    <>

      <div className="app"

        tabIndex="0"
        onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
        data-theme={isDarkMode ? "dark" : ""}>

        <div className="app_calculator">
          <div className="app_calculator_navbar">
            <div
              className="app_toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`app_circle ${isDarkMode ? "app_circle_active" : ""
                  }`}
              />
            </div>
          </div>
          <Header expression={expression} result={result} />
          <KeyPad handleKeyPress={handleKeyPress} />
        </div>
      </div>
    </>
  );
};

export default App;
