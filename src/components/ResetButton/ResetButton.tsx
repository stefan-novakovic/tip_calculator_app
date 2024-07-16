import styles from "./ResetButton.module.css";
import useCalculatorContext from "../../hooks/useCalculatorContext";

const ResetButton = () => {
  const { bill, tipPercentage, people, resetAll } = useCalculatorContext();
  return (
    <button
      type="button"
      className={
        bill || tipPercentage || people
          ? styles.resetBtn
          : styles.resetBtnDisabled
      }
      disabled={bill || tipPercentage || people ? false : true}
      onClick={resetAll}
    >
      RESET
    </button>
  );
};
export default ResetButton;
