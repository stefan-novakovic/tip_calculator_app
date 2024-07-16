import styles from "./CalculatorInputSection.module.css";
import BillInput from "../BillInput/BillInput";
import Tip from "../Tip/Tip";
import PeopleInput from "../PeopleInput/PeopleInput";

const CalculatorInputSection = () => {
  return (
    <section className={styles.calculatorInputSection}>
      <BillInput />
      <Tip />
      <PeopleInput />
    </section>
  );
};

export default CalculatorInputSection;
