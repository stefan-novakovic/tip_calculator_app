import "./Calculator.css";
import CalculatorInputSection from "./CalculatorInputSection";
import CalculatorOutputSection from "./CalculatorOutputSection";
import { useEffect, useContext } from "react";
import DataContext from "./context/DataContext";

const Calculator = () => {
  const { resetOutput, calculateOutput } = useContext(DataContext);

  useEffect(() => {
    resetOutput();
    calculateOutput();
  }, [resetOutput, calculateOutput]);

  return (
    <section className="calculator">
      <h1>Calculator</h1>

      <CalculatorInputSection />
      <CalculatorOutputSection />
    </section>
  );
};

export default Calculator;
