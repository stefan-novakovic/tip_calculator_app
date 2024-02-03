import React from "react";
import "./PeopleInput.css";
import person_icon from "./img/icon-person.svg";

const PeopleInput = ({ people, setPeople }) => {
  return (
    <form className="people-input-form" onSubmit={(e) => e.preventDefault()}>
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
          value={people}
          onChange={(e) =>
            setPeople(e.target.value ? Math.ceil(e.target.value) : "")
          }
          style={people <= 0 && people !== "" ? { outlineColor: "red" } : null}
        />
        <p style={people <= 0 && people !== "" ? { display: "block" } : null}>
          Can't be zero
        </p>
        <img src={person_icon} alt="Person icon" />
      </div>
    </form>
  );
};

export default PeopleInput;
