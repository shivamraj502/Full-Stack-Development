/**

 */

// function App(){
//   return(
//     <div>
//       <h1>hello shivam</h1>
//     </div>
//   );
// }



// import { useEffect } from "react";
// function App() {

//   // useEffect(() => {
//   //   console.log("Component Loaded");
//   // });
//   useEffect(() => {
//   console.log("Run only once");
//   }, []);
//   return <h1>Hello Shivam r</h1>;
// }



// import { useState, useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App; 