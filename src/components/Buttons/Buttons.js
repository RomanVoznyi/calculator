import { useEffect } from "react";
import buttonsList from "./buttonsList";
import { TYPES } from "../../helpers/constants";
import "./Buttons.css";

const Buttons = ({ onClick }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  });

  const handleClick = (evt) => {
    let type;
    let value;
    if (evt.type === "click") {
      type = evt.currentTarget.dataset["type"];
      value = evt.currentTarget.dataset["value"];
      evt.currentTarget.classList.add("active");

      onClick(type, value);
    }
    if (evt.type === "keydown") {
      let key;
      switch (evt.key) {
        case "Enter":
          key = "=";
          break;
        case ",":
          key = ".";
          break;
        case "Escape":
          key = "clear";
          break;
        default:
          key = evt.key;
          break;
      }

      const pressedBtn = buttonsList.find((el) => el.value === key);
      if (pressedBtn) {
        value = pressedBtn.value;
        type = value === "-" ? TYPES.ACTION : pressedBtn.type;

        const el = document.querySelector(
          `[data-type="${type}"][data-value="${value}"]`
        );
        el.classList.add("active");

        onClick(type, value);
      }
    }
  };

  const removeClass = (evt) => {
    evt.currentTarget.classList.remove("active");
  };

  return (
    <ul className="buttonsList">
      {buttonsList.map((el) => (
        <li
          className="button-item"
          key={el.id}
          onClick={handleClick}
          onTransitionEnd={removeClass}
          data-type={el.type}
          data-value={el.value}
        >
          <span>{el.display}</span>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
