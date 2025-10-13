import { NavLink } from "react-router";
import Navbar from "../blocks/header";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center w-full px-20 sm:px-6 lg:px-8 py-25">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 min-w-5xl">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600">john.doe@email.com</p>
              <p className="text-sm text-gray-500">Member since March 2024</p>
            </div>
          </div>
        </div>

        <div className="bg-white min-w-5xl rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Summer Music Festival
                  </h3>
                  <p className="text-gray-600">July 15, 2024 - 7:00 PM</p>
                  <p className="text-sm text-gray-500">Booking ID: #12345</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600 mb-2">$89.00</p>
                <button
                  onclick="cancelBooking(1)"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Cancel Booking
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Tech Conference 2024
                  </h3>
                  <p className="text-gray-600">August 22, 2024 - 9:00 AM</p>
                  <p className="text-sm text-gray-500">Booking ID: #12346</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600 mb-2">$149.00</p>
                <button
                  onclick="cancelBooking(2)"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Cancel Booking
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Art Workshop</h3>
                  <p className="text-gray-600">September 5, 2024 - 2:00 PM</p>
                  <p className="text-sm text-gray-500">Booking ID: #12347</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600 mb-2">$65.00</p>
                <button
                  onclick="cancelBooking(3)"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
