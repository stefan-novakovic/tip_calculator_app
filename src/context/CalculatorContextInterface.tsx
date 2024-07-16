import { Dispatch } from "react";

export default interface CalculatorContextInterface {
  totalTip: number;
  setTotalTip: Dispatch<React.SetStateAction<number>>;
  tipAmount: number;
  setTipAmount: Dispatch<React.SetStateAction<number>>;
  bill: string;
  setBill: Dispatch<React.SetStateAction<string>>;
  tipPercentage: string;
  setTipPercentage: Dispatch<React.SetStateAction<string>>;
  people: string;
  setPeople: Dispatch<React.SetStateAction<string>>;
  customTipPercentage: string;
  setCustomTipPercentage: Dispatch<React.SetStateAction<string>>;
  resetAll: () => void;
  resetOutput: () => void;
  calculateOutput: () => void;
}
