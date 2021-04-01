import { INITIAL_VALUE } from "../helpers/constants";
import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const action = (value, state) => {
  const { inputNumb, setInputNumb, expression, setExpression } = state;

  if (inputNumb !== "error") {
    if (
      (!expression.action && value !== "=") ||
      (expression.equal && value !== "=")
    ) {
      setExpression({
        numbOne: checkPercentAndComma(inputNumb),
        action: value,
        numbTwo: "",
        equal: "",
      });
      setInputNumb("0");
    }
    if (expression.numbOne && expression.action && !expression.equal) {
      const tempResult = calculate(
        Number(expression.numbOne),
        expression.action,
        Number(checkPercentAndComma(inputNumb))
      );
      if (tempResult === "error") {
        toast.error("Division by zero", notifyOptions);
        setInputNumb(tempResult);
        setExpression(INITIAL_VALUE.expression);
      } else {
        if (value === "=") {
          setExpression((prevState) => ({
            ...prevState,
            numbTwo: inputNumb,
            equal: "=",
          }));
          setInputNumb(tempResult);
        } else {
          setExpression({
            numbOne: tempResult,
            action: value,
            numbTwo: "",
            equal: "",
          });
          setInputNumb("0");
        }
      }
    }
  }
};

const calculate = (firstNumber, action, secondNumber) => {
  switch (action) {
    case "+":
      return setNumberFormat(firstNumber + secondNumber);
    case "-":
      return setNumberFormat(firstNumber - secondNumber);
    case "*":
      return setNumberFormat(firstNumber * secondNumber);
    case "/":
      return secondNumber !== 0
        ? setNumberFormat(firstNumber / secondNumber)
        : "error";
    default:
      return "error";
  }
};

const checkPercentAndComma = (text) => {
  if (text.includes("%")) {
    return (Number(text.slice(0, text.length - 1)) / 100)
      .toFixed(10)
      .replace(/\.?0+$/, "");
  }
  if (text[text.length - 1] === ".") {
    return text.slice(0, text.length - 1);
  }
  return text;
};

const setNumberFormat = (number) => {
  if (
    number > 1e15 ||
    number < -1e15 ||
    (number > 0 && number < 1e-10) ||
    (number > -1e-10 && number < 0)
  ) {
    return number.toPrecision(10);
  } else {
    return number.toFixed(10).replace(/\.?0+$/, "");
  }
};

export default action;
