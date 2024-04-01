import * as React from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { cn } from "@/lib/utils";

import AppIcon from "../common/AppIcon";

export interface Props {
  icon: keyof typeof dynamicIconImports;
  count?: number;
  className?: string;
}

export default function ReactionButton({
  icon,
  count,
  className = "",
}: Readonly<Props>) {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-1"
    >
      <AppIcon
        name={icon}
        className={cn("h-5 w-5 text-gray-500 hover:text-red-500", className)}
      />
      {count ? (
        <span className="text-[14px] text-gray-500">{count}</span>
      ) : (
        <div>&nbsp;</div>
      )}
    </button>
  );
}
