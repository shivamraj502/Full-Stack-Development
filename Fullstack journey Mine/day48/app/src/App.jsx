/**
Day 48 – Custom Hooks
Task:
Create custom hook useFetch
👉 Build:
Reuse API logic
 */

// import useFetch from './useFetch';

// function App() {
//   const { data: users, loading, error } = useFetch(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   if (loading) return <h2>Loading users...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>Day 48 - Custom Hook (useFetch)</h1>
//       <h2>Users List</h2>

//       <ul>
//         {users && users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
function App(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default App;