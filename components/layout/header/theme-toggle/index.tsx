"use client";

import React from "react";
import isEqual from "react-fast-compare";
import { useTheme } from "next-themes";

import AppIcon from "@/components/common/app-icon";

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

      <AppIcon
        src="/svg/sun.svg#id"
        aria-label={dictionary["Turn on the light"]}
        width={20}
        height={20}
        className=""
      />
    </label>
  );
}

export default React.memo(ThemeToggle, isEqual);
