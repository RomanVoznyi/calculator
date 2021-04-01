const registr = (value, state) => {
  const { inputNumb, setInputNumb } = state;

  if (inputNumb.length < 14 && inputNumb !== "0" && inputNumb !== "error") {
    setInputNumb((prevState) =>
      prevState.includes(value) ? prevState.slice(1) : value + prevState
    );
  }
};

export default registr;
