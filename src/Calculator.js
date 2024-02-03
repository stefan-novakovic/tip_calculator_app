import "./Calculator.css";
import { useState, useEffect } from "react";
import CalculatorInputSection from "./CalculatorInputSection";
import CalculatorOutputSection from "./CalculatorOutputSection";
const Calculator = () => {
  const [totalTip, setTotalTip] = useState(0);
  const [tipAmountTip, setTipAmountTip] = useState(0);
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState("");
  const [customTip, setCustomTip] = useState("");

  useEffect(() => {
    if (!bill || !people || !tipPercentage) {
      setTipAmountTip(0);
      setTotalTip(0);
      return;
    }

    if (bill > 0 && tipPercentage > 0 && people > 0) {
      setTotalTip((bill / 100) * tipPercentage);
      const calcTipAmount = ((bill / 100) * tipPercentage) / people;
      setTipAmountTip(calcTipAmount < 0.01 ? 0.01 : calcTipAmount);
    }
  }, [bill, tipPercentage, people]);

  return (
    <section className="calculator">
      <h1>Calculator</h1>

      <CalculatorInputSection
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tipPrecentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <CalculatorOutputSection
        totalTip={totalTip}
        tipAmountTip={tipAmountTip}
        setTotalTip={setTotalTip}
        setTipAmountTip={setTipAmountTip}
        setBill={setBill}
        setTipPercentage={setTipPercentage}
        setPeople={setPeople}
        setCustomTip={setCustomTip}
      />
    </section>
  );
};

export default Calculator;
