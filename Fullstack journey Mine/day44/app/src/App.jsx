/**
Day 44 – Mini Project: Notes App
Task:
Add note
Delete note
Store in state
 */

// function App(){
//   return(
//     <div>hello</div>
//   )
// }export default App;



import { useState } from 'react';
function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Add Note
  const addNote = (e) => {
    e.preventDefault();
    
    if (newNote.trim() === '') return;

    const note = {
      id: Date.now(),
      text: newNote.trim(),
      date: new Date().toLocaleDateString()
    };

    setNotes([...notes, note]);
    setNewNote('');
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>My Notes App</h1>
      <p>Day 44 - Mini Project</p>

      {/* Add Note Form */} /*hhhhhhhh */
      <form onSubmit={addNote}>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Add Note</button>
      </form>

      <hr />

      {/* Notes List */}
      <h2>My Notes</h2>

      {notes.length === 0 ? (
        <p>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} style={{ border: '1px solid black', margin: '10px 0', padding: '10px' }}>
            <p>{note.text}</p>
            <small>{note.date}</small>
            <br />
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;



// import { useState } from 'react';
// function App() {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState('');

//   // Add Note
//   const addNote = (e) => {
//     e.preventDefault();
    
//     if (newNote.trim() === '') return;

//     const note = {
//       id: Date.now(),              // unique id
//       text: newNote.trim(),
//       date: new Date().toLocaleDateString()
//     };

//     setNotes([...notes, note]);
//     setNewNote('');               // clear input
//   };

//   // Delete Note
//   const deleteNote = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-2 text-red-800">
//           📝 My Notes
//         </h1>
//         <p className="text-center text-red-500 mb-10">Day 44 - Mini Project</p>

//         {/* Add Note Form */}
//         <form onSubmit={addNote} className="bg-white p-6 rounded-2xl shadow-xl mb-8">
//           <textarea
//             value={newNote}
//             onChange={(e) => setNewNote(e.target.value)}
//             placeholder="Write your note here..."
//             className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
//           />
          
//           <button
//             type="submit"
//             className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-all"
//           >
//             Add Note
//           </button>
//         </form>

//         {/* Notes List */}
//         <div className="space-y-4">
//           {notes.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-2xl shadow">
//               <p className="text-gray-400 text-lg">No notes yet. Add your first note above!</p>
//             </div>
//           ) : (
//             notes.map((note) => (
//               <div
//                 key={note.id}
//                 className="bg-white p-6 rounded-2xl shadow-xl flex justify-between items-start group"
//               >
//                 <div>
//                   <p className="text-gray-700 leading-relaxed">{note.text}</p>
//                   <p className="text-xs text-gray-400 mt-3">{note.date}</p>
//                 </div>
                
//                 <button
//                   onClick={() => deleteNote(note.id)}
//                   className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-all"
//                 >
//                   🗑️
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;