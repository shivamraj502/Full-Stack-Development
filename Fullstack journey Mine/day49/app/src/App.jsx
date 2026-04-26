/**
Day 49 – Error Boundaries
Task:
Handle component crash
👉 Build:
Fallback UI
 */

// function App(){
//   return(
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }export default App;


import ErrorBoundary from "./ErrorBoundary";

// This component will crash intentionally
function BuggyComponent() {
  throw new Error("App Crashed!");
}

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Error Boundary Demo</h1>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

    </div>
  );
}

export default App;