"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { checked } = event.target as HTMLInputElement;
  //   setTheme(checked ? "dark" : "light");
  // };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-none"
    >
      {theme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] " />
      ) : (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] " />
      )}
    </Button>
    // <label
    // className={sx.switch}
    // htmlFor="theme-toggle"
    // aria-label="Theme Toggle"
    // >
    //   <input
    //     type="checkbox"
    //     id="theme-toggle"
    //     onChange={onToggle}
    //     defaultChecked={theme === "dark"}
    //   />
    //   <span className={sx.slider} />

    // </label>
  );
}

export default React.memo(ThemeToggle);
