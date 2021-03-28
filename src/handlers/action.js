import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const action = (value, state) => {
  const {
    current,
    setCurrent,
    previous,
    setPrevious,
    inProcess,
    setInProcess,
  } = state;

  if (current !== "error") {
    if (!inProcess && value !== "=") {
      setPrevious(checkPercentAndComma(current) + value);
      setCurrent("0");
      setInProcess(true);
    }
    if (previous !== "" && inProcess) {
      const oldNumber = previous.slice(0, previous.length - 1);
      const action = previous.slice(previous.length - 1);
      let tempResult = calculate(
        parseFloat(oldNumber),
        action,
        parseFloat(checkPercentAndComma(current))
      );
      if (tempResult === "error") {
        toast.error("Division by zero", notifyOptions);
        setCurrent(tempResult);
        setPrevious("");
        setInProcess(false);
      } else {
        if (value === "=") {
          setCurrent(tempResult.toString());
          setPrevious(tempResult.toString());
          setInProcess(false);
        } else {
          setPrevious(tempResult.toString() + value);
          setCurrent("0");
        }
      }
    }
  }
};

const calculate = (firstNumber, action, secondNumber) => {
  switch (action) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return secondNumber !== 0 ? firstNumber / secondNumber : "error";
    default:
      return "error";
  }
};

const checkPercentAndComma = (text) => {
  if (text.includes("%")) {
    return (Number(text.slice(0, text.length - 1)) / 100).toString();
  }
  if (text[text.length - 1] === ".") {
    return text.slice(0, text.length - 1);
  }
  return text;
};

export default action;
