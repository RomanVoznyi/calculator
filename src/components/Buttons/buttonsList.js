import { TYPES } from "../../helpers/constants";

const buttonsList = [
  { id: "1", display: "AC", type: TYPES.CLEAR, value: TYPES.CLEAR },
  { id: "2", display: "+/-", type: TYPES.REGISTR, value: "-" },
  { id: "3", display: "%", type: TYPES.PERCENT, value: "%" },
  { id: "4", display: `\u00F7`, type: TYPES.ACTION, value: "/" },
  { id: "5", display: "mc", type: TYPES.MEMORY, value: "memClear" },
  { id: "6", display: "mr", type: TYPES.MEMORY, value: "memReturn" },
  { id: "7", display: "m-", type: TYPES.MEMORY, value: "memMinus" },
  { id: "8", display: "m+", type: TYPES.MEMORY, value: "memPlus" },
  { id: "9", display: "7", type: TYPES.DIGIT, value: "7" },
  { id: "10", display: "8", type: TYPES.DIGIT, value: "8" },
  { id: "11", display: "9", type: TYPES.DIGIT, value: "9" },
  { id: "12", display: `\u00D7`, type: TYPES.ACTION, value: "*" },
  { id: "13", display: "4", type: TYPES.DIGIT, value: "4" },
  { id: "14", display: "5", type: TYPES.DIGIT, value: "5" },
  { id: "15", display: "6", type: TYPES.DIGIT, value: "6" },
  { id: "16", display: `\u2212`, type: TYPES.ACTION, value: "-" },
  { id: "17", display: "1", type: TYPES.DIGIT, value: "1" },
  { id: "18", display: "2", type: TYPES.DIGIT, value: "2" },
  { id: "19", display: "3", type: TYPES.DIGIT, value: "3" },
  { id: "20", display: "+", type: TYPES.ACTION, value: "+" },
  { id: "21", display: "0", type: TYPES.DIGIT, value: "0" },
  { id: "22", display: `\u0317`, type: TYPES.COMMA, value: "." },
  { id: "23", display: "=", type: TYPES.ACTION, value: "=" },
];

export default buttonsList;
