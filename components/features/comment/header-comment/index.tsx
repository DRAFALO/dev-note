import React from "react";
import isEqual from "react-fast-compare";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
  className?: string;
  numberComment: number;
}

function HeaderComment(props: Props) {
  const { dictionary, className, numberComment } = props;

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h4 className="text-heading-4 font-bold">
        {dictionary["Top comments"]} ({numberComment})
      </h4>
      <Button variant="outline">{dictionary.Subscribe}</Button>
    </div>
  );
}
export default React.memo(HeaderComment, isEqual);
