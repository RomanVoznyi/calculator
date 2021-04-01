import { useState, useEffect } from "react";
import "./Display.css";

const Display = ({ inputNumb, expression }) => {
  const [inputStyle, setInputStyle] = useState("");
  const [expressionStyle, setExpressionStyle] = useState("");

  const expressionText = createExpressionText(expression);
  const inputText = convertInputToLocal(inputNumb);

  useEffect(() => {
    let tempStyle = "inputNumb";
    const length = inputText.length;

    if (length > 7 && length <= 10) {
      tempStyle += " medium";
    }
    if (length > 10 && length <= 18) {
      tempStyle += " small";
    }
    if (length > 18) {
      tempStyle += " very-small";
    }
    setInputStyle(tempStyle);
  }, [inputText]);

  useEffect(() => {
    let tempStyle = "expression";
    const length = expressionText.length;
    if (length > 10 && length <= 20) {
      tempStyle += " small";
    }
    if (length > 20) {
      tempStyle += " very-small";
    }
    setExpressionStyle(tempStyle);
  }, [expressionText]);

  function createExpressionText({ numbOne, action, numbTwo, equal }) {
    return `${numbOne} ${action} ${numbTwo} ${equal}`;
  }

  function convertInputToLocal(baseText) {
    const [integer, fraction = ""] = baseText.split(".");
    const newInteger = integer
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3})/g, "$1 ")
      .trim()
      .split("")
      .reverse()
      .join("");

    return baseText.includes(".") ? `${newInteger},${fraction}` : newInteger;
  }

  return (
    <div className="display">
      <p className={expressionStyle}>{expressionText}</p>
      <p className={inputStyle}>{inputText}</p>
    </div>
  );
};

export default Display;
