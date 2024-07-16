import styles from "./Calculator.module.css";
import CalculatorInputSection from "../CalculatorInputSection/CalculatorInputSection";
import CalculatorOutputSection from "../CalculatorOutputSection/CalculatorOutputSection";

const Calculator = () => {
  return (
    <section className={styles.calculator}>
      <CalculatorInputSection />
      <CalculatorOutputSection />
    </section>
  );
};

export default Calculator;
