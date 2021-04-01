import { TYPES, INITIAL_VALUE } from "../helpers/constants";
import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const digit = (value, state) => {
  const { inputNumb, setInputNumb, expression, setExpression } = state;

  if (!inputNumb.includes("%")) {
    if (inputNumb === "error" || expression.equal) {
      setInputNumb(value);
      setExpression(INITIAL_VALUE.expression);
    } else if (checkDigitsLimit(inputNumb, "total")) {
      toast.warning("only 15 digits can be entered here", notifyOptions);
    } else if (checkDigitsLimit(inputNumb, TYPES.COMMA)) {
      toast.warning(
        "only 10 digits after point '.' can be entered here",
        notifyOptions
      );
    } else {
      setInputNumb((prevState) =>
        prevState === "0" ? value : prevState + value
      );
    }
  }
};

const checkDigitsLimit = (text, type = "") => {
  if (type === TYPES.COMMA) {
    return text.includes(".") && text.slice(text.indexOf(".") + 1).length > 9;
  }
  return text.length > 14;
};

export default digit;
