import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 text-base-content">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>

        <p className="mt-2 text-lg opacity-70">Page not found</p>

        <Link
          to="/"
          className="inline-block mt-6 text-sm font-medium text-accent hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
