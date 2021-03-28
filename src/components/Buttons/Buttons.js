import buttonsList from "./buttonsList";
import "./Buttons.css";

const Buttons = ({ onClick }) => {
  return (
    <ul className="buttonsList">
      {buttonsList.map((el) => (
        <li
          className="button-item"
          key={el.id}
          onClick={onClick}
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
