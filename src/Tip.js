import React from "react";
import "./Tip.css";

const Tip = () => {
  return (
    <form className="tip-input-form">
      <p>Select Tip %</p>
      <div className="tip-btns-container">
        <button type="button">5%</button>
        <button type="button">10%</button>
        <button type="button">15%</button>
        <button type="button">25%</button>
        <button type="button">50%</button>
        <button type="button">Custom</button>
      </div>
    </form>
  );
};

export default Tip;
