/**
Day 50 – Performance
Topic: memo, useMemo, useCallback
Task:
Optimize component re-render
 */


// import React, { useState } from "react";

// const Child = React.memo(({ name }) => {
//   console.log("Child Rendered");
//   return <h2>{name}</h2>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Child name="Shivam" />
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </div>
//   );
// }

// export default App;


// import { useState, useMemo } from "react";

// function App() {
//   const [num, setNum] = useState(0);

//   const square = useMemo(() => {
//     console.log("Calculating...");
//     return num * num;
//   }, [num]);

//   return (
//     <div>
//       <h2>{square}</h2>
//       <button onClick={() => setNum(num + 1)}>Increase</button>
//     </div>
//   );
// }

// export default App;



import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;