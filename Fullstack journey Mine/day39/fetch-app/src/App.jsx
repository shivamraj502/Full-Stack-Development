/**
Day 39 – Fetch API
Topic: API calling
Task:
Fetch data from JSONPlaceholder
👉 Build:
Show list of users
 */

import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List</h1>

      {users.map(user => (
        <div key={user.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

    </div>
  );
}

export default App;