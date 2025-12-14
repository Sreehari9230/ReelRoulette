import React from "react";
import { Clapperboard } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-center">
        <div className="flex items-center gap-2">
          <Clapperboard size={18} className="text-red-500" />

          <span className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
            Reel<span className="font-normal text-gray-600">Roulette</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
