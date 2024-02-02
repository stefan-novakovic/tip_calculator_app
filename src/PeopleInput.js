import React from "react";
import "./PeopleInput.css";
import person_icon from "./icon-person.svg";

const PeopleInput = () => {
  return (
    <form className="people-input-form">
      <label htmlFor="people-input">Number of People</label>
      <div>
        <input
          type="number"
          name="people-input"
          id="people-input"
          placeholder="0"
          min="0"
          max="1000"
          step="1"
        />
        <img src={person_icon} alt="Person icon" />
      </div>
    </form>
  );
};

export default PeopleInput;
