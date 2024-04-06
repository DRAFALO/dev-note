import * as React from "react";
import isEqual from "react-fast-compare";

import AppIcon from "@/components/common/app-icon";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

export interface Props {
  icon: string;
  count?: number;
  className?: string;
}

function ReactionButton({ icon, count, className = "" }: Readonly<Props>) {
  return (
    <Button
      type="button"
      className="flex h-auto flex-col items-center justify-center gap-1"
      variant="none"
    >
      <AppIcon
        src={icon}
        className={cn("h-5 w-5 text-gray-500 hover:text-red-500", className)}
        aria-label={icon}
      />
      {count ? (
        <span className="text-sm text-gray-500">{count}</span>
      ) : (
        <div>&nbsp;</div>
      )}
    </Button>
  );
}

export default React.memo(ReactionButton, isEqual);
