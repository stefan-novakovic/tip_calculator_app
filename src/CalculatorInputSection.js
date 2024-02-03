import "./CalculatorInputSection.css";
import BillInput from "./BillInput";
import Tip from "./Tip";
import PeopleInput from "./PeopleInput";

const CalculatorInputSection = () => {
  return (
    <section className="calculator-input-section">
      <h2>Calculator Input</h2>

      <BillInput />
      <Tip />
      <PeopleInput />
    </section>
  );
};

export default CalculatorInputSection;
