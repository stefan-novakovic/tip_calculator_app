import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

const useCalculatorContext = () => {
  return useContext(CalculatorContext);
};

export default useCalculatorContext;
