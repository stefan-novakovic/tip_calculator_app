import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [totalTip, setTotalTip] = useState(0);
  const [tipAmountTip, setTipAmountTip] = useState(0);
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState("");
  const [customTip, setCustomTip] = useState("");

  const handleReset = () => {
    setTotalTip(0);
    setTipAmountTip(0);
    setBill("");
    setTipPercentage("");
    setCustomTip("");
    setPeople("");
  };

  const resetOutput = () => {
    if (
      bill <= 0 ||
      bill === "" ||
      people <= 0 ||
      people === "" ||
      tipPercentage <= 0 ||
      tipPercentage === ""
    ) {
      setTipAmountTip(0);
      setTotalTip(0);
      return;
    }
  };

  const calculateOutput = () => {
    if (bill > 0 && tipPercentage > 0 && people > 0) {
      setTotalTip((bill / 100) * tipPercentage);
      const calcTipAmount = ((bill / 100) * tipPercentage) / people;
      setTipAmountTip(calcTipAmount < 0.01 ? 0.01 : calcTipAmount);
    }
  };

  return (
    <DataContext.Provider
      value={{
        totalTip,
        setTotalTip,
        tipAmountTip,
        setTipAmountTip,
        bill,
        setBill,
        tipPercentage,
        setTipPercentage,
        people,
        setPeople,
        customTip,
        setCustomTip,
        handleReset,
        resetOutput,
        calculateOutput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
