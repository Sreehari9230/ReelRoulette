import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        <p className="mt-2 text-lg text-gray-600">
          Page not found
        </p>

        <Link
          to="/"
          className="inline-block mt-6 text-sm font-medium text-blue-600 hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
