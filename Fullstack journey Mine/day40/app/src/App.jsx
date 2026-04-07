// /**
// Day 40 – Forms
// Topic: Controlled components
// Task:
// Create login form
// 👉 Build:
// Store input in state
//  */



// import { useState } from 'react';
// import './App.css';

// function App() {
//   // State for controlled inputs
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Handle input change - ye controlled component ka core hai
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       setIsSubmitted(true);
//       console.log('Login Data Submitted:', formData);
      
//       // Here you can later send data to backend using fetch or axios
//       // Example: await fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) });
      
//       // Reset form after successful submit (optional)
//       // setFormData({ email: '', password: '', rememberMe: false });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           Login
//         </h1>

//         {isSubmitted && (
//           <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
//             Form submitted successfully! Check console.
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email Field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               }`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
//                 errors.password ? 'border-red-500' : 'border-gray-300'
//               }`}
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//           </div>

//           {/* Remember Me Checkbox */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="rememberMe"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//               className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//             />
//             <label className="ml-2 text-sm text-gray-600">Remember me</label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
//           >
//             Login
//           </button>
//         </form>

//         {/* Extra Info */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           This is a controlled form using React useState
//         </p>
//       </div>
//     </div>
//   );
// }



// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));

//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;

//     setIsLoading(true);
//     setSuccess(null);

//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay

//       console.log('Login Successful:', formData);
      
//       setSuccess(`Welcome back, ${formData.email.split('@')[0]}! 🎉`);
      
//       // Reset form after success (optional)
//       // setFormData({ email: '', password: '', rememberMe: false });

//     } catch (error) {
//       alert('Something went wrong!');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
//           Welcome Back
//         </h1>
//         <p className="text-center text-gray-500 mb-8">Sign in to your account</p>

//         {success && (
//           <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center font-medium">
//             {success}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               }`}
//               disabled={isLoading}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           {/* Password with Toggle */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all pr-12 ${
//                   errors.password ? 'border-red-500' : 'border-gray-300'
//                 }`}
//                 disabled={isLoading}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 disabled={isLoading}
//               >
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//             </div>
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//           </div>

//           {/* Remember Me */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="rememberMe"
//               checked={formData.rememberMe}
//               onChange={handleChange}
//               className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               disabled={isLoading}
//             />
//             <label className="ml-2 text-sm text-gray-600">Remember me</label>
//           </div>

//           {/* Submit Button with Loading */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center"
//           >
//             {isLoading ? (
//               <>
//                 <span className="animate-spin mr-2">⏳</span>
//                 Signing in...
//               </>
//             ) : (
//               'Sign In'
//             )}
//           </button>
//         </form>

//         <p className="text-center text-xs text-gray-400 mt-8">
//           Controlled Components Example • Day 40
//         </p>
//       </div>
//     </div>
//   );
// }



import { useState } from 'react';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  const [activeTab, setActiveTab] = useState('uncontrolled'); // 'controlled' or 'uncontrolled'

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Day 40 – Forms Comparison
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Controlled vs Uncontrolled Components
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('controlled')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'controlled'
                ? 'bg-indigo-600 text-white shadow'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Controlled Form (useState)
          </button>

          <button
            onClick={() => setActiveTab('uncontrolled')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'uncontrolled'
                ? 'bg-indigo-600 text-white shadow'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Uncontrolled Form (useRef)
          </button>
        </div>

        {/* Render Selected Form */}
        <div className="flex justify-center">
          {activeTab === 'controlled' ? (
            <ControlledLogin />
          ) : (
            <UncontrolledLogin />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;