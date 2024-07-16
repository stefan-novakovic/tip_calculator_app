import styles from "./CalculatorOutputSection.module.css";
import TipAmount from "../TipAmount/TipAmount";
import TotalAmount from "../TotalAmount/TotalAmount";
import ResetButton from "../ResetButton/ResetButton";

const CalculatorOutputSection = () => {
  return (
    <section className={styles.calculatorOutputSection}>
      <div>
        <TipAmount />
        <TotalAmount />
      </div>

      <ResetButton />
    </section>
  );
};

export default CalculatorOutputSection;
