/**
Day 55 – Dark/Light Mode

Task:
Toggle theme
👉 Build:
Dark mode UI
 */

// function App(){
//   return(
//     <>
//     <h1>hello Modes</h1></>
//   );
// }export default App;



import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white flex flex-col items-center justify-center"
          : "min-h-screen bg-white text-black flex flex-col items-center justify-center"
      }
    >

      <h1 className="text-4xl font-bold mb-6">
        Dark / Light Mode
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Toggle Theme
      </button>

    </div>
  );
}

export default App;