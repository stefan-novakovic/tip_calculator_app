import React from "react";
import BillInput from "./BillInput";
import Tip from "./Tip";
import PeopleInput from "./PeopleInput";
import "./CalculatorInputSection.css";
const CalculatorInputSection = ({
  bill,
  setBill,
  people,
  setPeople,
  tipPrecentage,
  setTipPercentage,
  customTip,
  setCustomTip,
}) => {
  return (
    <section className="calculator-input-section">
      <h2>Calculator Input</h2>

      <BillInput bill={bill} setBill={setBill} />
      <Tip
        tipPrecentage={tipPrecentage}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <PeopleInput people={people} setPeople={setPeople} />
    </section>
  );
};

export default CalculatorInputSection;
