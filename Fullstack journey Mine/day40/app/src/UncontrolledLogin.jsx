import { useRef, useState } from 'react';

function UncontrolledLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert("Please fill both Email and Password");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setSuccess(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Uncontrolled Login Data:', { email, password });
      setSuccess(`Login successful! Welcome, ${email.split('@')[0]} 🎉`);
      setIsLoading(false);

      // Optional: Clear fields after success
      // emailRef.current.value = '';
      // passwordRef.current.value = '';
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Uncontrolled Login
      </h1>
      <p className="text-center text-gray-500 mb-8">Using useRef (Uncontrolled)</p>

      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          />
        </div>

        {/* Password with Toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        Uncontrolled Components using <code>useRef</code>
      </p>
    </div>
  );
}

export default UncontrolledLogin;