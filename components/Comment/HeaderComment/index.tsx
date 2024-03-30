import React from "react";

import { LocaleKeys } from "@/types/locales";

import { Button } from "../../ui/button";

interface Props {
  dictionary: LocaleKeys;
}
export default function HeaderComment(props: Props) {
  const { dictionary } = props;
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-heading-4 font-bold">
        {dictionary["Top comments"]} (7)
      </h2>
      <Button variant="outline">{dictionary.Subscribe}</Button>
    </div>
  );
}
