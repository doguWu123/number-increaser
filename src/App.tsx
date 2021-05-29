import "./styles.css";
import React, { useState } from "react";
import {} from "react-dom";
import "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
