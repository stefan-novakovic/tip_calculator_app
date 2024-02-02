import React from "react";
import "./BillInput.css";
import dollar_icon from "./icon-dollar.svg";

const BillInput = () => {
  return (
    <form className="bill-input-form">
      <label htmlFor="bill-input">Bill</label>
      <div>
        <img src={dollar_icon} alt="Dollar icon" />
        <input
          type="number"
          name="bill-input"
          id="bill-input"
          placeholder="0"
        />
      </div>
    </form>
  );
};

export default BillInput;
