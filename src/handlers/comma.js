const comma = (value, state) => {
  const { current, setCurrent, previous, setPrevious, inProcess } = state;

  if (
    current.length < 14 &&
    !current.includes(value) &&
    !current.includes("%")
  ) {
    if (current === "error" || (!inProcess && previous)) {
      setCurrent(`0${value}`);
      setPrevious("");
    } else {
      setCurrent((prevState) => prevState + value);
    }
  }
};

export default comma;
