import { toast } from "react-toastify";

const notifyOptions = {
  position: "bottom-center",
  style: { width: "200px", margin: "0 auto" },
};

const memory = (value, state) => {
  const { current, setCurrent, storage, setStorage } = state;

  if (value === "memClear") {
    setStorage("");
  }

  if (value === "memMinus" && current !== "error") {
    setStorage((prevState) =>
      (Number(prevState) - Number(checkPercent(current))).toString()
    );
    toast.success("Saved", notifyOptions);
  }

  if (value === "memPlus" && current !== "error") {
    setStorage((prevState) =>
      (Number(prevState) + Number(checkPercent(current))).toString()
    );
    toast.success("Saved", notifyOptions);
  }

  if (value === "memReturn") {
    storage === ""
      ? toast.info("Storage empty", notifyOptions)
      : setCurrent(storage);
  }
};

const checkPercent = (text) => {
  return text.includes("%")
    ? (Number(text.slice(0, text.length - 1)) / 100).toString()
    : text;
};

export default memory;
