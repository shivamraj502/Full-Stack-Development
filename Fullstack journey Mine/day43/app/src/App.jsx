/**
Day 43 – useReducer

Topic: Advanced state
Task:

Replace useState counter with useReducer
 */

// function App(){
//   return(
//     <div>
//       <h1>hii</h1>
//     </div>
//   );
// }export default App;



// import { useReducer } from 'react';

// // Reducer Function (Rules)
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
      
//       <button onClick={() => dispatch({ type: 'increment' })}> + </button>
//       <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   );
// }export default App;




import { useReducer } from 'react';

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>useReducer Counter</h1>
      
      <h2>Count: {state.count}</h2>
      
      <div>
        <button onClick={() => dispatch({ type: 'increment' })} style={{ margin: '5px', padding: '10px 15px' }}>
          +
        </button>
        
        <button onClick={() => dispatch({ type: 'decrement' })} style={{ margin: '5px', padding: '10px 15px' }}>
          -
        </button>
        
        <button onClick={() => dispatch({ type: 'reset' })} style={{ margin: '5px', padding: '10px 15px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;