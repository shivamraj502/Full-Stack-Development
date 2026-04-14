/**
Day 46 – Nested & Dynamic Routes
Task:
Dynamic route /user/:id
👉 Build:
Show user details
 */
// function App(){
//   return(
//     <div>
//       hello
//     </div>
//   );
// }export default App;


// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// function Homee() {
//   return <h1>Welcome to Home Page</h1>;
// }

// function About() {
//   return <h1>About Us</h1>;
// }

// function Notes() {
//   return <h1>My Notes Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>My First React Router App - Day 45</h1>

//         <nav>
//           <Link to="/">Homeeeeeee</Link> &nbsp;|&nbsp; 
//           <Link to="/about">Aboutttt</Link> &nbsp;|&nbsp; 
//           <Link to="/notes">Notessss</Link>
//         </nav>

//         <hr />

//         <Routes>
//           <Route path="/" element={<Homee />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/notes" element={<Notes />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
// export default App;


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Dummy User Data
const users = [
  { id: 1, name: "Amit Sharma", age: 25, city: "Mumbai" },
  { id: 2, name: "Priya Singh", age: 28, city: "Delhi" },
  { id: 3, name: "Rahul Verma", age: 32, city: "Bangalore" },
  { id: 4, name: "Sneha Gupta", age: 24, city: "Hyderabad" },
];

function Home() {
  return <h2>Home Page</h2>;
}

// Dynamic Route Component
function UserDetail() {
  // Get the dynamic id from URL
  const userId = window.location.pathname.split('/').pop();

  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.city}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Day 46 - Nested & Dynamic Routes</h1>

        <nav style={{ margin: "20px 0" }}>
          <Link to="/">Home</Link> &nbsp; | &nbsp;
          <Link to="/user/1">User 1</Link> &nbsp; | &nbsp;
          <Link to="/user/2">User 2</Link> &nbsp; | &nbsp;
          <Link to="/user/3">User 3</Link> &nbsp; | &nbsp;
          <Link to="/user/4">User 4</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Route */}
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;