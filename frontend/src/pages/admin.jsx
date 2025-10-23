import { NavLink } from "react-router";
import Navbar from "../blocks/header";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 w-full px-20 sm:px-6 lg:px-8 py-25">
        <h1 className="flex align-start text-4xl font-bold text-gray-900 mb-6">
          Admin Panel
        </h1>
      </div>
    </>
  );
}
