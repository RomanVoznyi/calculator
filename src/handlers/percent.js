const percent = (value, state) => {
  const { current, setCurrent } = state;

  if (current.length < 14 && current !== "error" && !current.includes(value)) {
    setCurrent((prevState) => checkComma(prevState) + value);
  }
};

const checkComma = (text) => {
  if (text[text.length - 1] === ".") {
    return text.slice(0, text.length - 1);
  }
  return text;
};

export default percent;
