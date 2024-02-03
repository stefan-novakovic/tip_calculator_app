import "./App.css";
import logo from "./img/logo.svg";
import Calculator from "./Calculator";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <main>
        <img src={logo} alt="Logo icon" />
        <DataProvider>
          <Calculator />
        </DataProvider>
      </main>
    </div>
  );
}

export default App;
