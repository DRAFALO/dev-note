"use client";

import React from "react";
import isEqual from "react-fast-compare";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ThemeProvider {...props}>{children}</ThemeProvider>
  );
}

export default React.memo(Provider, isEqual);
