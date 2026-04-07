/**
Day 41 – Lifting State Up

Topic: Parent-child communication
Task:

Share state between components
👉 Build:
Input in child → show in parent
 */

import { useState } from "react";
import ChildInput from './ChildInput';
function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <h1>Day 41 - Lifting State Up</h1>
      <p>Parent: <input value={text} onChange={(e) => setText(e.target.value)} /></p>
      <ChildInput text={text} setText={setText} />
    </div>
  );
}
export default App;



// import { useState } from 'react';
// import ChildInput from './ChildInput';

// function App() {
//   const [text, setText] = useState('');   // ← State lifted up to Parent

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
//           Day 41 – Lifting State Up
//         </h1>
//         <p className="text-center text-gray-600 mb-12">
//           Parent ↔ Child Communication
//         </p>

//         {/* Parent Display Area */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl mb-10">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">Parent Component</h2>
//           <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 min-h-[120px] flex items-center justify-center">
//             {text ? (
//               <p className="text-2xl font-medium text-indigo-600 break-words">
//                 {text}
//               </p>
//             ) : (
//               <p className="text-gray-400 text-lg">
//                 Type something in the child component...
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Child Component */}
//         <ChildInput text={text} setText={setText} />
//       </div>
//     </div>
//   );
// }

// export default App;