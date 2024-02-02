import React from "react";
import "./CalculatorOutputSection.css";
const CalculatorOutputSection = () => {
  return (
    <section className="calculator-output-section">
      <h2>Calculator Output</h2>

      <div>
        <div className="row">
          <div className="tip-amount__text">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <p className="tip-amount__price">${"0.00"}</p>
        </div>

        <div className="row">
          <div className="tip-amount__text">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p className="tip-amount__price">${"0.00"}</p>
        </div>
      </div>

      <button className="reset-btn">RESET</button>
    </section>
  );
};

export default CalculatorOutputSection;
