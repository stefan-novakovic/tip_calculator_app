import "./Tip.css";
import Button from "./Button";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Tip = () => {
  const { tipPrecentage, setTipPercentage, customTip, setCustomTip } =
    useContext(DataContext);

  const percentagesArray = [5, 10, 15, 25, 50];
  return (
    <form className="tip-input-form" onSubmit={(e) => e.preventDefault()}>
      <p>Select Tip %</p>
      <div className="tip-btns-container">
        <label htmlFor="custom-percentage">Custom Percentage</label>
        {percentagesArray.map((percentage) => {
          return (
            <Button
              key={percentage}
              percentage={percentage}
              tipPrecentage={tipPrecentage}
              setTipPercentage={setTipPercentage}
            />
          );
        })}
        <input
          type="number"
          name="custom-percentage"
          id="custom-percentage"
          placeholder="Custom"
          min="0"
          max="1000"
          value={customTip}
          onChange={(e) => {
            setCustomTip(e.target.value ? Number(e.target.value) : "");
            setTipPercentage(e.target.value ? Number(e.target.value) : "");
          }}
          onFocus={(e) =>
            setTipPercentage(e.target.value ? Number(e.target.value) : "")
          }
        />
      </div>
    </form>
  );
};

export default Tip;
