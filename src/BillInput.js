import "./BillInput.css";
import dollar_icon from "./img/icon-dollar.svg";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const BillInput = () => {
  const { bill, setBill } = useContext(DataContext);

  return (
    <form className="bill-input-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="bill-input">Bill</label>
      <div>
        <img src={dollar_icon} alt="Dollar icon" />
        <input
          style={bill <= 0 && bill !== "" ? { outlineColor: "red" } : null}
          type="number"
          name="bill-input"
          id="bill-input"
          placeholder="0"
          value={bill}
          onChange={(e) =>
            setBill(e.target.value ? Number(e.target.value) : "")
          }
        />
        <p style={bill <= 0 && bill !== "" ? { display: "block" } : null}>
          Can't be zero
        </p>
      </div>
    </form>
  );
};

export default BillInput;
