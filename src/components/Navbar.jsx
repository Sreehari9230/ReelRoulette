import React from "react";
import { Clapperboard } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-end">
        {/* Center: Logo + Name */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Clapperboard size={18} className="text-red-500" />
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
            Reel<span className="font-normal text-gray-600">Roulette</span>
          </span>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
