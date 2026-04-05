/**
Day 37 – Mini Project: Counter App
Task:
Counter with:
Increment / decrement
Reset button
Limit (max 10)
 */



import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
    textAlign: "center",
    marginTop: "100px",
    background: "#bb8585",
    padding: "20px"
    }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}

export default App;