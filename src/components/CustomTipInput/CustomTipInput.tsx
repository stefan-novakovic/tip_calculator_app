import { ChangeEvent } from "react";
import useCalculatorContext from "../../hooks/useCalculatorContext";

const CustomTipInput = () => {
  const {
    setTipPercentage,
    customTipPercentage,
    setCustomTipPercentage,
    resetOutput,
  } = useCalculatorContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): string => {
    if (!e.target.value) resetOutput();

    return e.target.value && parseFloat(e.target.value) < 0
      ? ""
      : parseFloat(e.target.value) > 0
      ? e.target.value
      : "";
  };
  return (
    <input
      type="number"
      name="custom-percentage"
      id="custom-percentage"
      placeholder="Custom"
      min="0"
      max="1000"
      value={customTipPercentage}
      onChange={(e) => {
        setCustomTipPercentage(handleChange(e));
        setTipPercentage(handleChange(e));
      }}
      onFocus={(e) => setTipPercentage(handleChange(e))}
    />
  );
};
export default CustomTipInput;
