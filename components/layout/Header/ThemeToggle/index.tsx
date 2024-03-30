"use client";

import React from "react";
import { useTheme } from "next-themes";

import AppSVGIcon from "@/components/common/AppSVGIcon";

import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}

function ThemeToggle(props: Props) {
  const { dictionary } = props;

  const { theme, setTheme } = useTheme();

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label htmlFor="theme-toggle" aria-label="Theme Toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={onToggle}
        defaultChecked={theme === "dark"}
        className="hidden"
      />

      <AppSVGIcon
        src="/svg/sun.svg#id"
        aria-label={dictionary["Turn on the light"]}
        width={20}
        height={20}
        className=""
      />
    </label>
  );
}

export default React.memo(ThemeToggle);
