import { useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { digit, comma, registr, percent, action, memory } from "./handlers";
import { TYPES, INITIAL_VALUE } from "./helpers/constants";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [inputNumb, setInputNumb] = useState(INITIAL_VALUE.inputNumb);
  const [expression, setExpression] = useState(INITIAL_VALUE.expression);
  const [storage, setStorage] = useState(INITIAL_VALUE.storage);

  const handleClick = (type, value) => {
    const state = {
      inputNumb,
      setInputNumb,
      expression,
      setExpression,
      storage,
      setStorage,
    };

    switch (type) {
      case TYPES.DIGIT:
        digit(value, state);
        break;
      case TYPES.COMMA:
        comma(value, state);
        break;
      case TYPES.REGISTR:
        registr(value, state);
        break;
      case TYPES.PERCENT:
        percent(value, state);
        break;
      case TYPES.ACTION:
        action(value, state);
        break;
      case TYPES.MEMORY:
        memory(value, state);
        break;

      default:
        reset();
        break;
    }
  };

  const reset = () => {
    setInputNumb(INITIAL_VALUE.inputNumb);
    setExpression(INITIAL_VALUE.expression);
  };

  return (
    <div className="wrapper">
      <ToastContainer autoClose={3000} />
      <div className="calculator">
        <Display inputNumb={inputNumb} expression={expression} />
        <Buttons onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
