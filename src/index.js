import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const superincrement = () => {
    setCount(oldCount => oldCount + 10);
  };
  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };
  const decrement = () => {
    setCount(oldCount => oldCount - 1);
  };
  const reset = () => {
    setCount(oldCount => 0);
  };
  return (
    <div className="App">
      <h1>React Liker Counter</h1>
      <p>Overall Count: {count}</p>
      <button onClick={superincrement}>Superlike</button>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
