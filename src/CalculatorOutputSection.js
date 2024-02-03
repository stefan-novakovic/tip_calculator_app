import React from "react";
import "./CalculatorOutputSection.css";
const CalculatorOutputSection = ({
  totalTip,
  tipAmountTip,
  setTotalTip,
  setTipAmountTip,
  bill,
  setBill,
  tipPercentage,
  setTipPercentage,
  people,
  setPeople,
  customTip,
  setCustomTip,
}) => {
  const handleReset = () => {
    setTotalTip(0);
    setTipAmountTip(0);
    setBill("");
    setTipPercentage("");
    setCustomTip("");
    setPeople("");
  };

  return (
    <section className="calculator-output-section">
      <h2>Calculator Output</h2>

      <div>
        <div className="row">
          <div className="tip-amount__text">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <p className="tip-amount__price">${tipAmountTip.toFixed(2)}</p>
        </div>

        <div className="row">
          <div className="tip-amount__text">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p className="tip-amount__price">${totalTip.toFixed(2)}</p>
        </div>
      </div>

      <button
        type="button"
        className={
          bill || tipPercentage || customTip || people
            ? "reset-btn"
            : "reset-btn-disabled"
        }
        disabled={bill || tipPercentage || customTip || people ? false : true}
        onClick={handleReset}
      >
        RESET
      </button>
    </section>
  );
};

export default CalculatorOutputSection;
