import "./App.css";
import { useState } from "react";

function App() {
  const [numbr, setNumbr] = useState(1);

  const increaseNumbr = () => {
    setNumbr(numbr + 1);
  };

  const decreaseNumbr = () => {
    setNumbr(numbr - 1);
  };

  const resetNumbr = () => {
    setNumbr(1);
  };

  return (
    <div className="App">
      <button onClick={increaseNumbr}>Increase Number</button>
      <button onClick={decreaseNumbr}>Decrease Number</button>
      <button onClick={resetNumbr}>Reset Number</button>
      <h1 className="name">{numbr}</h1>
    </div>
  );
}

export default App;
