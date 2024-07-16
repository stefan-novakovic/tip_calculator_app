import CalculatorContextInterface from "./CalculatorContextInterface";

export const initialState: CalculatorContextInterface = {
  bill: "",
  setBill: () => {},
  tipPercentage: "",
  setTipPercentage: () => {},
  customTipPercentage: "",
  setCustomTipPercentage: () => {},
  people: "",
  setPeople: () => {},
  totalTip: 0,
  setTotalTip: () => {},
  tipAmount: 0,
  setTipAmount: () => {},
  resetAll: () => {},
  resetOutput: () => {},
  calculateOutput: () => {},
};
