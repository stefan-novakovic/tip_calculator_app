import "./CalculatorOutputSection.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const CalculatorOutputSection = () => {
  const { totalTip, tipAmountTip, bill, tipPercentage, people, handleReset } =
    useContext(DataContext);

  return (
    <section className="calculator-output-section">
      <h2>Calculator Output</h2>

      <div>
        <div className="row">
          <div className="text">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <p className="price">${tipAmountTip.toFixed(2)}</p>
        </div>

        <div className="row">
          <div className="text">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p className="price">${totalTip.toFixed(2)}</p>
        </div>
      </div>

      <button
        type="button"
        className={
          bill || tipPercentage || people ? "reset-btn" : "reset-btn-disabled"
        }
        disabled={bill || tipPercentage || people ? false : true}
        onClick={handleReset}
      >
        RESET
      </button>
    </section>
  );
};

export default CalculatorOutputSection;
