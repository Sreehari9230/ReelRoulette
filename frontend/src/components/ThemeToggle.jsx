import React from "react";
import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const themeToggled = () => {
    // Toggle between light and dark
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div>
      <label className="toggle text-base-content">
        <input
          type="checkbox"
          value="synthwave"
          className="theme-controller"
          onChange={themeToggled}      // ✅ changed from onClick
          checked={theme === "dark"}    // ✅ controlled input
        />

        {/* Icons */}
        <Sun aria-label="sun" size={16} />
        <Moon aria-label="moon" size={16} />
      </label>
    </div>
  );
};

export default ThemeToggle;
