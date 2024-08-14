import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="mr-[3vw]">
      <ToggleSwitch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
    </div>
  );
}

export default ThemeToggle;
