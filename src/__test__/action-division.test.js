import action from "../handlers/action";
import { INITIAL_VALUE } from "../helpers/constants";

let inputNumb = "0";
const setInputNumb = jest.fn();
let expression = INITIAL_VALUE.expression;
const setExpression = jest.fn();

const state = {
  inputNumb,
  setInputNumb,
  expression,
  setExpression,
};

it("check division operation without arguments", () => {
  action("/", { ...state });

  expect(setExpression).toBeCalled();
  expect(setExpression).toBeCalledWith({
    numbOne: "0",
    action: "/",
    numbTwo: "",
    equal: "",
  });
  expect(setExpression).toHaveBeenCalledTimes(1);
  expect(setInputNumb).toBeCalled();
  expect(setInputNumb).toBeCalledWith("0");
  expect(setInputNumb).toHaveBeenCalledTimes(1);
});

it("check division operation with inputNumb and without expression", () => {
  action("/", { ...state, inputNumb: "5" });
  action("/", { ...state, inputNumb: "-1000000" });
  action("/", { ...state, inputNumb: "0.00000005" });
  action("/", { ...state, inputNumb: "-4444.44%" });

  expect(setExpression).toBeCalled();
  expect(setExpression.mock.calls).toEqual([
    [
      {
        numbOne: "5",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "-1000000",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "0.00000005",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "-44.4444",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
  ]);
  expect(setExpression).toHaveBeenCalledTimes(4);

  expect(setInputNumb).toBeCalled();
  expect(setInputNumb).toBeCalledWith("0");
  expect(setInputNumb).toHaveBeenCalledTimes(4);
});

it("check division operation if inputNumb = 'error'", () => {
  action("/", { ...state, inputNumb: "error" });
  expect(setExpression).not.toBeCalled();
  expect(setInputNumb).not.toBeCalled();
});

it("check division operation with inputNumb and expression", () => {
  action("/", {
    ...state,
    inputNumb: "5",
    expression: {
      numbOne: "5",
      action: "+",
      numbTwo: "",
      equal: "",
    },
  });
  action("/", {
    ...state,
    inputNumb: "-100",
    expression: {
      numbOne: "100",
      action: "/",
      numbTwo: "",
      equal: "",
    },
  });
  action("/", {
    ...state,
    inputNumb: "1000%",
    expression: {
      numbOne: "0.0001",
      action: "*",
      numbTwo: "",
      equal: "",
    },
  });
  action("/", {
    ...state,
    inputNumb: "0.0001",
    expression: {
      numbOne: "1000",
      action: "-",
      numbTwo: "",
      equal: "",
    },
  });
  action("/", {
    ...state,
    inputNumb: "0",
    expression: {
      numbOne: "25",
      action: "/",
      numbTwo: "",
      equal: "",
    },
  });

  expect(setExpression).toBeCalled();
  expect(setExpression.mock.calls).toEqual([
    [
      {
        numbOne: "10",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "-1",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "0.001",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [
      {
        numbOne: "999.9999",
        action: "/",
        numbTwo: "",
        equal: "",
      },
    ],
    [INITIAL_VALUE.expression],
  ]);
  expect(setExpression).toHaveBeenCalledTimes(5);
  expect(setInputNumb).toBeCalled();
  expect(setInputNumb.mock.calls).toEqual([
    ["0"],
    ["0"],
    ["0"],
    ["0"],
    ["error"],
  ]);
  expect(setInputNumb).toHaveBeenCalledTimes(5);
});
