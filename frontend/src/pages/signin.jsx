import { NavLink } from "react-router";
import Navbar from "../blocks/header";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center py-15 px-4 sm:px-6 lg:px-8">
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

            <form onsubmit="handleLogin(event)">
              <div className="space-y-4">
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
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-white py-3 rounded-lg font-semibold"
                >
                  Sign In
                </button>
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
