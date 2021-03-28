import { useState, useEffect } from "react";
import "./Display.css";

const Display = ({ previousData, currentData, inProcess }) => {
  const [currStyle, setCurrStyle] = useState("");
  const [prevStyle, setPrevStyle] = useState("");
  const updateCurrentData = checkLength(currentData);
  const updatePreviousData = inProcess
    ? checkLength(previousData.slice(0, previousData.length - 1)) +
      previousData[previousData.length - 1]
    : checkLength(previousData);

  useEffect(() => {
    let tempStyle = "currData";
    const length = updateCurrentData.length;

    if (length > 7 && length <= 10) {
      tempStyle += " medium";
    }
    if (length > 10) {
      tempStyle += " small";
    }
    setCurrStyle(tempStyle);
  }, [updateCurrentData]);

  useEffect(() => {
    let tempStyle = "prevData";
    const length = updatePreviousData.length;
    if (length > 10) {
      tempStyle += " small";
    }
    setPrevStyle(tempStyle);
  }, [updatePreviousData]);

  function checkLength(text) {
    if (text.length > 15) {
      return parseFloat(text)
        .toPrecision(5)
        .replace(/\.?0+$/, "");
    }
    return text;
  }

  return (
    <div className="display">
      <p className={prevStyle}>{updatePreviousData}</p>
      <p className={currStyle}>{updateCurrentData}</p>
    </div>
  );
};

export default Display;
