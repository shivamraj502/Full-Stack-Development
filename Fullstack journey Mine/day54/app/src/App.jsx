/**
Day 54 – Layouts

Task:
Flex + Grid
👉 Build:
Dashboard UI
 */

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>
        </div>
        
        <div className="flex-1 p-4">
          <div className="space-y-2">
            <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium">🏠 Home</div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">📊 Analytics</div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">👥 Users</div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">📦 Products</div>
            <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">💰 Orders</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Top Navbar */}
        <nav className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome back, Shivam 👋</h2>
          
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-medium">Shivam Kumar</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-8">

          {/* Stats Cards - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-4xl font-bold mt-2">2,845</p>
              <p className="text-green-500 text-sm mt-2">↑ 12% this month</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">Revenue</p>
              <p className="text-4xl font-bold mt-2">₹4,82,900</p>
              <p className="text-green-500 text-sm mt-2">↑ 8% this month</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">Orders</p>
              <p className="text-4xl font-bold mt-2">1,245</p>
              <p className="text-red-500 text-sm mt-2">↓ 3% this month</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">Avg. Session</p>
              <p className="text-4xl font-bold mt-2">4.8m</p>
              <p className="text-green-500 text-sm mt-2">↑ 5% this month</p>
            </div>
          </div>

          {/* Recent Activity - Flex + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex justify-between items-center border-b pb-3 last:border-none">
                    <div>
                      <p className="font-medium">Order #{1000 + i}</p>
                      <p className="text-sm text-gray-500">Rahul Sharma</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹2,499</p>
                      <p className="text-xs text-green-500">Delivered</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Growth */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold text-lg mb-4">User Growth</h3>
              <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                <p className="text-gray-400">📈 Chart will go here</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;