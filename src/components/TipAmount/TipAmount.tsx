import useCalculatorContext from "../../hooks/useCalculatorContext";

const TipAmount = () => {
  const { tipAmount } = useCalculatorContext();
  return (
    <div className="row">
      <div className="row__text">
        <h3>Tip Amount</h3>
        <p>/ person</p>
      </div>

      <p className="row__price">${tipAmount.toFixed(2)}</p>
    </div>
  );
};
export default TipAmount;
