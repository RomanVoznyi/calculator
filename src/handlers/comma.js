import { INITIAL_VALUE } from "../helpers/constants";

const comma = (value, state) => {
  const { inputNumb, setInputNumb, expression, setExpression } = state;

  if (
    inputNumb.length < 14 &&
    !inputNumb.includes(value) &&
    !inputNumb.includes("%")
  ) {
    if (inputNumb === "error" || expression.equal) {
      setInputNumb(`0${value}`);
      setExpression(INITIAL_VALUE.expression);
    } else {
      setInputNumb((prevState) => prevState + value);
    }
  }
};

export default comma;
