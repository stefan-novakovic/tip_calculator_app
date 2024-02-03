import React from "react";
import "./BillInput.css";
import dollar_icon from "./icon-dollar.svg";

const BillInput = ({ bill, setBill }) => {
  return (
    <form className="bill-input-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="bill-input">Bill</label>
      <div>
        <img src={dollar_icon} alt="Dollar icon" />
        <input
          type="number"
          name="bill-input"
          id="bill-input"
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          style={bill <= 0 && bill !== "" ? { outlineColor: "red" } : null}
        />
        <p style={bill <= 0 && bill !== "" ? { display: "block" } : null}>
          Can't be zero
        </p>
      </div>
    </form>
  );
};

export default BillInput;
