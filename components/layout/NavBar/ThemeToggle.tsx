"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const onToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log(`🆘 components/layout/NavBar/ThemeToggle.tsx`); // eslint-disable-line
    console.log(theme); // eslint-disable-line
    console.log('%c => theme ', 'background: #0095FF; color: #fff'); // eslint-disable-line
    console.log(new Date()); // eslint-disable-line
  }, [theme]);

  return (
    <button onClick={onToggle} type="button">
      {theme === "light" ? "🌜" : "🌞"}

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeToggle;
