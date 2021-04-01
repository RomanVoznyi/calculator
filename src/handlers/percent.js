const percent = (value, state) => {
  const { inputNumb, setInputNumb } = state;

  if (
    inputNumb.length < 14 &&
    inputNumb !== "error" &&
    !inputNumb.includes(value)
  ) {
    setInputNumb((prevState) => checkComma(prevState) + value);
  }
};

const checkComma = (text) => {
  if (text[text.length - 1] === ".") {
    return text.slice(0, text.length - 1);
  }
  return text;
};

export default percent;
