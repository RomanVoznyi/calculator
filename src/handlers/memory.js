import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const memory = (value, state) => {
  const { inputNumb, setInputNumb, storage, setStorage } = state;

  if (value === "memClear") {
    setStorage("");
  }

  if (value === "memMinus" && inputNumb !== "error") {
    setStorage((prevState) =>
      setNumberFormat(Number(prevState) - Number(checkPercent(inputNumb)))
    );
    toast.success("Saved", notifyOptions);
  }

  if (value === "memPlus" && inputNumb !== "error") {
    setStorage((prevState) =>
      setNumberFormat(Number(prevState) + Number(checkPercent(inputNumb)))
    );
    toast.success("Saved", notifyOptions);
  }

  if (value === "memReturn") {
    storage === ""
      ? toast.info("Storage empty", notifyOptions)
      : setInputNumb(storage);
  }
};

const checkPercent = (text) => {
  return text.includes("%")
    ? (Number(text.slice(0, text.length - 1)) / 100)
        .toFixed(10)
        .replace(/\.?0+$/, "")
    : text;
};

const setNumberFormat = (number) => {
  if (
    number > 1e15 ||
    number < -1e15 ||
    (number > 0 && number < 1e-10) ||
    (number > -1e-10 && number < 0)
  ) {
    return number.toPrecision(10);
  } else {
    return number.toFixed(10).replace(/\.?0+$/, "");
  }
};

export default memory;
