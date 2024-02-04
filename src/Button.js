const Button = ({ percentage, tipPercentage, setTipPercentage }) => {
  return (
    <button
      className={tipPercentage === percentage ? "selected-btn" : null}
      onClick={() => setTipPercentage(percentage)}
      type="button"
    >
      {percentage}%
    </button>
  );
};

export default Button;
