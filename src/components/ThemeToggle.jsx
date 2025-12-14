import React from "react";

import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <div>
      <label className="toggle text-base-content">
        <input type="checkbox" value="synthwave" className="theme-controller" />

        {/* Replaced SVG with Lucide Sun icon, setting size to 16 */}
        <Sun aria-label="sun" size={16} />

        {/* Replaced SVG with Lucide Moon icon, setting size to 16 */}
        <Moon aria-label="moon" size={16} />
      </label>
    </div>
  );
};

export default ThemeToggle;
