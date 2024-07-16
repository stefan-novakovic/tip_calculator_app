import { createContext, useState, useEffect, ReactNode } from "react";
import CalculatorContextInterface from "./CalculatorContextInterface";
import { initialState } from "./CalculatorContextInitialState";

const CalculatorContext =
  createContext<CalculatorContextInterface>(initialState);

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [bill, setBill] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<string>("");
  const [customTipPercentage, setCustomTipPercentage] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [totalTip, setTotalTip] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const calculateOutput = (): void => {
    const calcTipAmount =
      ((parseFloat(bill) / 100) * parseFloat(tipPercentage)) / parseInt(people);
    const calcTotalTip = (parseFloat(bill) / 100) * parseFloat(tipPercentage);

    if (
      parseFloat(bill) > 0 &&
      parseFloat(tipPercentage) > 0 &&
      parseInt(people) > 0
    ) {
      setTipAmount(calcTipAmount < 0.01 ? 0.01 : calcTipAmount);
      setTotalTip(calcTotalTip);
    }
  };

  const resetAll = (): void => {
    setTotalTip(0);
    setTipAmount(0);
    setBill("");
    setTipPercentage("");
    setCustomTipPercentage("");
    setPeople("");
  };

  const resetOutput = (): void => {
    setTotalTip(0);
    setTipAmount(0);
  };

  useEffect(() => {
    calculateOutput();

    if (
      parseFloat(bill) <= 0 ||
      parseFloat(tipPercentage) <= 0 ||
      parseFloat(customTipPercentage) <= 0 ||
      parseInt(people) <= 0
    ) {
      resetOutput();
    }
  }, [bill, tipPercentage, customTipPercentage, people]);

  return (
    <CalculatorContext.Provider
      value={{
        totalTip,
        setTotalTip,
        tipAmount,
        setTipAmount,
        bill,
        setBill,
        tipPercentage,
        setTipPercentage,
        people,
        setPeople,
        customTipPercentage,
        setCustomTipPercentage,
        calculateOutput,
        resetAll,
        resetOutput,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
