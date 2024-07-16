import { ChangeEvent } from "react";
import styles from "./BillInput.module.css";
import dollar_icon from "../../assets/icon-dollar.svg";
import useCalculatorContext from "../../hooks/useCalculatorContext";

const BillInput = () => {
  const { bill, setBill, resetOutput } = useCalculatorContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): string => {
    if (!e.target.value) resetOutput();

    return e.target.value && parseFloat(e.target.value) < 0
      ? "0"
      : parseFloat(e.target.value) > 0
      ? e.target.value
      : "";
  };

  return (
    <form className={styles.billInputForm} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="bill-input">Bill</label>
      <div>
        <img src={dollar_icon} alt="Dollar icon" />
        <input
          style={
            parseFloat(bill) <= 0 && bill !== ""
              ? { outlineColor: "red" }
              : { outlineColor: "transparent" }
          }
          type="number"
          name="bill-input"
          id="bill-input"
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(handleChange(e))}
        />
        <p
          style={
            parseFloat(bill) <= 0 && bill !== ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
          Can't be zero or less
        </p>
      </div>
    </form>
  );
};

export default BillInput;
