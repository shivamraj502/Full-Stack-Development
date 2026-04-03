/** Day 34: Event handling.
npm create vite@latest my-app
cd my-app
npm install
npm run dev
web:-localhost:5173
Day 35: Conditional rendering.
 */



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



// function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("Form Submitted");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// function App() {
//   function greet(name) {
//     alert("Hello " + name);
//   }
//   return (
//     <button onClick={() => greet("Shivam")}>
//       Greet
//     </button>
//   );
// }



function App() {
  function showProject() {
    alert("Weather App Project Clicked!");
  }
  return (
    <button onClick={showProject}>
      View Project
    </button>
  );
}
export default App;