import { useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { digit, comma, registr, percent, action, memory } from "./handlers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState("");
  const [inProcess, setInProcess] = useState(false);
  const [storage, setStorage] = useState("");

  const handleClick = ({ currentTarget }) => {
    const type = currentTarget.dataset["type"];
    const value = currentTarget.dataset["value"];
    const state = {
      current,
      setCurrent,
      previous,
      setPrevious,
      inProcess,
      setInProcess,
      storage,
      setStorage,
    };

    switch (type) {
      case "digit":
        digit(value, state);
        break;
      case "comma":
        comma(value, state);
        break;
      case "registr":
        registr(value, state);
        break;
      case "percent":
        percent(value, state);
        break;
      case "action":
        action(value, state);
        break;
      case "memory":
        memory(value, state);
        break;

      default:
        setCurrent("0");
        setPrevious("");
        setInProcess(false);
        break;
    }
  };

  return (
    <div className="wrapper">
      <ToastContainer autoClose={3000} />
      <div className="calculator">
        <Display
          previousData={previous}
          currentData={current}
          inProcess={inProcess}
        />
        <Buttons onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
