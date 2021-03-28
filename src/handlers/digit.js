import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const digit = (value, state) => {
  const { current, setCurrent, previous, setPrevious, inProcess } = state;

  if (!current.includes("%")) {
    if ((previous && !inProcess) || current === "error") {
      setCurrent(value);
      setPrevious("");
    } else if (checkDigitsLimit(current, "total")) {
      toast.warning("only 15 digits can be entered here", notifyOptions);
    } else if (checkDigitsLimit(current, "comma")) {
      toast.warning(
        "only 10 digits after point '.' can be entered here",
        notifyOptions
      );
    } else {
      setCurrent((prevState) =>
        prevState === "0" ? value : prevState + value
      );
    }
  }
};

const checkDigitsLimit = (text, type) => {
  if (type === "comma") {
    return text.includes(".") && text.slice(text.indexOf(".") + 1).length > 9;
  }
  return text.length > 14;
};

export default digit;
