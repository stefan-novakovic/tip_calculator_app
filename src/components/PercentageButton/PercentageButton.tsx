import styles from "./PercentageButton.module.css";

interface PercentageButtonPropsInterface {
  percentage: number;
  tipPercentage: string;
  setTipPercentage: React.Dispatch<React.SetStateAction<string>>;
}

const PercentageButton = ({
  percentage,
  tipPercentage,
  setTipPercentage,
}: PercentageButtonPropsInterface) => {
  return (
    <button
      className={
        parseFloat(tipPercentage) === percentage ? styles.selectedBtn : ""
      }
      onClick={() => setTipPercentage(percentage.toString())}
      type="button"
    >
      {percentage}%
    </button>
  );
};

export default PercentageButton;
