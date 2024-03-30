/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { cn } from "@/lib/utils";

interface AppSVGIconProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  ["aria-label"]: string;
}

function AppSVGIcon(props: AppSVGIconProps) {
  const { src, className = "", width = 20, height = width, ...other } = props;

  return (
    <svg
      width={width}
      height={height}
      className={cn("duration-300 ", className)}
      {...other}
    >
      <use href={src} width={width} height={height} {...other} />
    </svg>
  );
}

export default React.memo(AppSVGIcon);
