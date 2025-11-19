import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <p className="text-7xl  text-red-800">404</p>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>

      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
