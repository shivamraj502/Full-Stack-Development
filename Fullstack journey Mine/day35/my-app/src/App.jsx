/** 
Day 35: Conditional rendering.
npm create vite@latest my-app
cd my-app
npm install
npm run dev
web:-localhost:5173
 */



// function App() {
//   let isLogin = true;
//   if (isLogin) {
//     return <h1>Welcome Shivam</h1>;
//   } else {
//     return <h1>Please Login</h1>;
//   }
// }



// function App() {
//   let isLogin = false;
//   if (isLogin) {
//     return <h1>Welcome Shivam</h1>;
//   } else {
//     return <h1>Please Login</h1>;
//   }
// }



// function App() {
//   let isLogin = false;

//   return (
//     <div>
//       {isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}
//     </div>
//   );
// }



// function App() {
//   let show = true;

//   return (
//     <div>
//       {show && <h1>This is visible</h1>}
//     </div>
//   );
// }



// function App() {
//   let show = false;

//   return (
//     <div>
//       {show && <h1>This is visible</h1>}
//     </div>
//   );
// }



import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        Toggle Login
      </button>

      {login ? <h1>Welcome Shivam</h1> : <h1>Please Login</h1>}
    </div>
  );
}

export default App;