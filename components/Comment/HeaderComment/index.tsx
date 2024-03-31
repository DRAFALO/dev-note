import React from "react";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import { Button } from "../../ui/button";

interface Props {
  dictionary: LocaleKeys;
  className?: string;
  numberComment: number;
}

export default function HeaderComment(props: Props) {
  const { dictionary, className, numberComment } = props;
  return (
    <div className={cn(`flex items-center justify-between`, className)}>
      <h2 className="text-heading-4 font-bold">
        {dictionary["Top comments"]} ({numberComment})
      </h2>
      <Button variant="outline">{dictionary.Subscribe}</Button>
    </div>
  );
}
