import useCalculatorContext from "../../hooks/useCalculatorContext";

const TotalAmount = () => {
  const { totalTip } = useCalculatorContext();

  return (
    <div className="row">
      <div className="row__text">
        <h3>Total</h3>
        <p>/ person</p>
      </div>

      <p className="row__price">${totalTip.toFixed(2)}</p>
    </div>
  );
};
export default TotalAmount;
