import { NavLink } from "react-router";
import Navbar from "../blocks/header";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to your account or create a new one
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex mb-6">
              <NavLink
                to={"/sign-in"}
                className="bg-gradient-to-br from-blue-300 to-purple-400 flex-1 py-3 px-4 text-center font-semibold rounded-l-lg tab-button active"
              >
                Sign In
              </NavLink>
              <NavLink
                to={"/sign-up"}
                className="bg-gradient-to-br from-blue-100 to-purple-300 flex-1 py-3 px-4 text-center font-semibold rounded-r-lg tab-button bg-gray-100"
              >
                Sign Up
              </NavLink>
            </div>

            <form onsubmit="handleRegister(event)">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Create a password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Confirm your password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-br from-blue-400 to-purple-500 w-full btn-primary text-white py-3 rounded-lg font-semibold cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
