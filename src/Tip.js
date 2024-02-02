import React from "react";
import "./Tip.css";

const Tip = ({ tipPrecentage, setTipPercentage }) => {
  return (
    <form className="tip-input-form" onSubmit={(e) => e.preventDefault()}>
      <p>Select Tip %</p>
      <div className="tip-btns-container">
        <button
          className={tipPrecentage === 5 ? "selected-btn" : null}
          onClick={() => setTipPercentage(5)}
          type="button"
        >
          5%
        </button>
        <button
          className={tipPrecentage === 10 ? "selected-btn" : null}
          onClick={() => setTipPercentage(10)}
          type="button"
        >
          10%
        </button>
        <button
          className={tipPrecentage === 15 ? "selected-btn" : null}
          onClick={() => setTipPercentage(15)}
          type="button"
        >
          15%
        </button>
        <button
          className={tipPrecentage === 25 ? "selected-btn" : null}
          onClick={() => setTipPercentage(25)}
          type="button"
        >
          25%
        </button>
        <button
          className={tipPrecentage === 50 ? "selected-btn" : null}
          onClick={() => setTipPercentage(50)}
          type="button"
        >
          50%
        </button>
        <button type="button">Custom</button>
      </div>
    </form>
  );
};

export default Tip;
