import React, { useState } from "react";
import Counter from "./components/counter/Counter";
import Paragraph from "./components/paragraph/Paragraph";
import Employees from "./components/employees/Employees";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph />
      <Employees />
    </div>
  );
}

export default App;
