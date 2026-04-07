function ChildInput({ text, setText }) {
  return (
    <p>
      ChildInput: <input value={text} onChange={(e) => setText(e.target.value)} />
    </p>
  );
}

export default ChildInput;



// function ChildInput({ text, setText }) {
//   return (
//     <div className="bg-white p-8 rounded-2xl shadow-xl">
//       <h2 className="text-xl font-semibold mb-6 text-gray-700">Child Component</h2>
      
//       <div className="space-y-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Type here (Child Input):
//         </label>
        
//         <input
//           type="text"
//           value={text}                    // Controlled by Parent's state
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Start typing..."
//           className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//         />

//         <div className="pt-4 border-t">
//           <p className="text-sm text-gray-500">
//             Current Input Length: <span className="font-medium text-gray-700">{text.length}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChildInput;