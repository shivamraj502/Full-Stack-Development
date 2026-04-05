/**
Day 36 – Lists & Keys
Topic: map(), keys
Task:
Create array of items
👉 Build:
Render list dynamically
 */



// function App() {
//   let fruits = ["Apple", "Banana", "Mango"];

//   return (
//     <div>
//       {fruits.map((fruit) => (
//         <h2>{fruit}</h2>
//       ))}
//     </div>
//   );
// }



// function App() {
//   let fruits = ["Apple", "Banana", "Mango"];

//   return (
//     <div>
//       {fruits.map((fruit, index) => (
//         <h2 key={index}>{fruit}</h2>
//       ))}
//     </div>
//   );
// }



// function App() {
//   let students = [
//     { id: 1, name: "Shivam" },
//     { id: 2, name: "Rahul" }
//   ];

//   return (
//     <div>
//       {students.map((s) => (
//         <h2 key={s.id}>{s.name}</h2>
//       ))}
//     </div>
//   );
// }



// function App() {
//   let projects = [
//     { id: 1, name: "Weather App" },
//     { id: 2, name: "To-Do App" },
//     { id: 3, name: "Stoxp" }
//   ];

//   return (
//     <div>
//       <h1>My Projects</h1>

//       {projects.map((p) => (
//         <p key={p.id}>{p.name}</p>
//       ))}
//     </div>
//   );
// }




function App() {
  let items = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h1>My Skills</h1>

      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
  );
}

export default App; 