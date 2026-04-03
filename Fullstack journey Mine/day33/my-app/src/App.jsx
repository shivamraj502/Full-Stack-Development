/**
npm create vite@latest my-app
cd my-app
npm install
npm run dev
web:-localhost:5173
 */



// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default App;



// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h2>Hello {name}</h2>
//     </div>
//   );
// }
// export default App;



// import { useState } from "react";
// function App() {
//   const [show, setShow] = useState(true);

//   <button onClick={() => setShow(!show)}>Toggle</button>;

//   {
//     show && <h1>Visible Text</h1>;
//   }
// }
// export default App;



// import { useState } from "react";
// function App() {
//   const [dark, setDark] = useState(false);

//   return( 
//   <button onClick={() => setDark(!dark)}>
//     Toggle Theme
//   </button>
//   );
// }
// export default App;



import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", height: "100vh" }}>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}
export default App;