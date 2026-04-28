/**
Day 51 – Mini Project: Blog App
Task:
Fetch posts
Display posts
Click → view full post
 */


import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10))); // limit for simplicity
  }, []);

  // Show single post
  if (selectedPost) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>

        <button onClick={() => setSelectedPost(null)}>
          🔙 Back
        </button>
      </div>
    );
  }

  // Show list
 return (
  <div
    style={{
      padding: "30px",
      background: "linear-gradient(to right, #74ebd5, #9face6)",
      minHeight: "100vh",
      fontFamily: "Arial"
    }}
  >
    <h1 style={{ textAlign: "center", color: "#333" }}>
       Blog Posts
    </h1>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {posts.map(post => (
        <div
          key={post.id}
          onClick={() => setSelectedPost(post)}
          style={{
            background: "white",
            width: "250px",
            margin: "15px",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ color: "#4a00e0" }}>{post.title}</h3>
          <p style={{ color: "#555", fontSize: "14px" }}>
            Click to read more...
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;