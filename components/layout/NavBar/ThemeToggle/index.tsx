"use client";

import React from "react";
import { useTheme } from "next-themes";

import sx from "./ThemeToggle.module.scss";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label className={sx.switch} htmlFor="theme-toggle">
      <span className="hidden">Theme toggle</span>

      <input
        type="checkbox"
        id="theme-toggle"
        onChange={onToggle}
        defaultChecked={theme === "dark"}
      />
      <span className={sx.slider} />
    </label>
  );
}

export default React.memo(ThemeToggle);
