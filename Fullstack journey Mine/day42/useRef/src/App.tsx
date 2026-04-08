/*
Day 42 – useRef

Topic: DOM access
Task:

Focus input using useRef
👉 Build:
Auto focus input on load
*/

// function App(){
//   return(
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }export default App;



                                        //JSX FILE
// import { useRef, useEffect } from 'react';
// export default function AutoFocusInput() {
//   const inputRef = useRef(null);     // No <HTMLInputElement>

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
//       <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Day 42 – useRef
//         </h1>
        
//         <p className="text-gray-400 mb-4 text-center">
//           This input will auto-focus when the page loads
//         </p>

//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Type something... (I'm auto focused!)"
//           className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl 
//                      text-lg focus:outline-none focus:border-blue-500 transition-colors"
//         />

//         <div className="mt-6 text-sm text-gray-500 text-center">
//           Open console → You can also check inputRef.current
//         </div>
//       </div>
//     </div>
//   );
// }




                                            // TSX FILE(replace App.jsx to App.tsx in main.jsx)
import { useRef, useEffect } from 'react';

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Day 42 – useRef
        </h1>
        
        <p className="text-gray-400 mb-4 text-center">
          This input will auto-focus when the page loads
        </p>

        <input
          ref={inputRef}
          type="text"
          placeholder="Type something... (I'm auto focused!)"
          className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl 
                     text-lg focus:outline-none focus:border-blue-500 transition-colors"
        />

        <div className="mt-6 text-sm text-gray-500 text-center">
          Open console → You can also check inputRef.current
        </div>
      </div>
    </div>
  );
}