const TYPES = {
  CLEAR: "clear",
  REGISTR: "registr",
  PERCENT: "percent",
  ACTION: "action",
  MEMORY: "memory",
  DIGIT: "digit",
  COMMA: "comma",
};

const INITIAL_VALUE = {
  inputNumb: "0",
  expression: {
    numbOne: "",
    action: "",
    numbTwo: "",
    equal: "",
  },
  storage: "",
};

export { TYPES, INITIAL_VALUE };
