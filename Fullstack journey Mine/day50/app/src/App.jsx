/**
Day 50 – Performance
Topic: memo, useMemo, useCallback
Task:
Optimize component re-render
 */


import React, { useState } from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return <h2>{name}</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Shivam" />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;