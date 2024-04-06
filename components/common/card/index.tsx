import * as React from "react";
import isEqual from "react-fast-compare";

import { cn } from "@/lib/utils";

export interface Props {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode | string;
}

function Card(props: Props) {
  const { children, className, title } = props;

  return (
    <div className="rounded-md border border-slate-200 bg-white">
      {title && (
        <header className="border-b border-slate-200 px-4 py-1 text-xl font-bold">
          {title}
        </header>
      )}
      <div className={cn(className)}>{children}</div>
    </div>
  );
}

export default React.memo(Card, isEqual);
