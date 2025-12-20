import React from "react";
import { Clapperboard, Dices } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-base-300 bg-base-100">
      <div className="relative mx-auto max-w-7xl px-4 py-3 flex items-center justify-end">
        {/* Center: Logo + Name */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Clapperboard size={18} className="text-primary" />

          <span className="text-lg sm:text-xl font-semibold tracking-tight text-base-content">
            Reel
            <span className="font-normal opacity-70">Roulette</span>
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
