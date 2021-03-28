const registr = (value, state) => {
  const { current, setCurrent } = state;

  if (current.length < 14 && current !== "0" && current !== "error") {
    setCurrent((prevState) =>
      prevState.includes(value) ? prevState.slice(1) : value + prevState
    );
  }
};

export default registr;
