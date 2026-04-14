/**
Day 47 – Context API
Topic: Global state
Task:
Create theme context
👉 Build:
Dark/light toggle
 */

// import { UserProvider } from './UserContext';
// import Profile from './Profile';

// function App() {
//   return (
//     <UserProvider>
//       <div>
//         <h1>Welcome to My App</h1>
//         <Profile />
//       </div>
//     </UserProvider>
//   );
// }

// export default App;



import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Day 47 - Context API</h1>
        <p>Theme Toggle using Context API</p>
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
export default App;