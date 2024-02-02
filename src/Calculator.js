import "./Calculator.css";
import CalculatorInputSection from "./CalculatorInputSection";
import CalculatorOutputSection from "./CalculatorOutputSection";
const Calculator = () => {
  return (
    <section className="calculator">
      <h1>Calculator</h1>

      <CalculatorInputSection />
      <CalculatorOutputSection />
    </section>
  );
};

export default Calculator;
