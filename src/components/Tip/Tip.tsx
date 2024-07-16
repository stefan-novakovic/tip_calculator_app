import styles from "./Tip.module.css";
import PercentageButton from "../PercentageButton/PercentageButton";
import useCalculatorContext from "../../hooks/useCalculatorContext";
import CustomTipInput from "../CustomTipInput/CustomTipInput";

const Tip = () => {
  const { tipPercentage, setTipPercentage } = useCalculatorContext();

  const percentagesArray = [5, 10, 15, 25, 50];

  return (
    <form className={styles.tipInputForm} onSubmit={(e) => e.preventDefault()}>
      <h2>Select Tip %</h2>
      <div className={styles.tipBtnsContainer}>
        <label htmlFor="custom-percentage">Custom Percentage</label>
        {percentagesArray.map((percentage) => {
          return (
            <PercentageButton
              key={percentage}
              percentage={percentage}
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
            />
          );
        })}

        <CustomTipInput />
      </div>
    </form>
  );
};

export default Tip;
