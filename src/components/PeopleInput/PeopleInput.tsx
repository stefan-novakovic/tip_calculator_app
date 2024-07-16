import { ChangeEvent } from "react";
import styles from "./PeopleInput.module.css";
import person_icon from "../../assets/icon-person.svg";
import useCalculatorContext from "../../hooks/useCalculatorContext";

const PeopleInput = () => {
  const { people, setPeople, resetOutput } = useCalculatorContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) resetOutput();

    setPeople(
      e.target.value && parseInt(e.target.value) < 0
        ? "0"
        : parseInt(e.target.value) > 0
        ? parseInt(e.target.value).toString()
        : ""
    );
  };

  return (
    <form
      className={styles.peopleInputForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="people-input">Number of People</label>
      <div>
        <input
          style={
            parseInt(people) <= 0 && people !== ""
              ? { outlineColor: "red" }
              : { outlineColor: "transparent" }
          }
          type="number"
          name="people-input"
          id="people-input"
          placeholder="0"
          min="0"
          max="1000"
          step="1"
          value={people}
          onChange={handleChange}
        />
        <p
          style={
            parseInt(people) <= 0 && people !== ""
              ? { display: "block" }
              : { display: "none" }
          }
        >
          Can't be zero or less
        </p>
        <img src={person_icon} alt="Person icon" />
      </div>
    </form>
  );
};

export default PeopleInput;
