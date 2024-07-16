import styles from "./App.module.css";
import LogoImage from "../LogoImage/LogoImage";
import Calculator from "../Calculator/Calculator";
import { CalculatorProvider } from "../../context/CalculatorContext";

function App() {
  return (
    <main className={styles.app}>
      <LogoImage />

      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </main>
  );
}

export default App;
