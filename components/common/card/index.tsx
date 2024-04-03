import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode | string;
}

export default function Card({
  children,
  title,
  className = "",
}: Readonly<Props>) {
  return (
    <div className="rounded-md border border-slate-200 bg-white">
      {title && (
        <header className="border-b border-slate-200 px-4 py-1 text-[20px] font-bold">
          {title}
        </header>
      )}
      <div className={cn(className)}>{children}</div>
    </div>
  );
}
