/**
Day 53 – Responsive Design

Task:
Use sm, md, lg
👉 Build:
Responsive layout */

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-10">
        Responsive Layout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p>This layout changes on different screen sizes.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p>Using Tailwind responsive breakpoints.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p>Mobile, tablet, and desktop support.</p>
        </div>

      </div>

    </div>
  )
}

export default App