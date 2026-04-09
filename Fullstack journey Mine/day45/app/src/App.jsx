/**
Week 7 (Days 45–51): React Advanced
Day 45 – React Router
Topic: Routing
Task:
Setup routes: Home, About
👉 Build:
Navigation links
 */

// function App(){
//   return(
//     <h2>heool</h2>
//   )
// }
// export default App;




// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function Notes() {
//   return <h2>Notes Page</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>My App - Day 45 (Routing)</h1>

//         {/* Navigation Links */}
//         <nav>
//           <Link to="/">Home</Link> &nbsp; | &nbsp;
//           <Link to="/about">About</Link> &nbsp; | &nbsp;
//           <Link to="/notes">Notes</Link>
//         </nav>

//         <hr />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/notes" element={<Notes />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Notes() {
  return <h1>My Notes Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My First React Router App - Day 45</h1>

        <nav>
          <Link to="/">Home</Link> &nbsp;|&nbsp; 
          <Link to="/about">About</Link> &nbsp;|&nbsp; 
          <Link to="/notes">Notes</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;