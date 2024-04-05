import React from "react";

import { LocaleKeys } from "@/types/locales";

interface Props {
  title: string;
  icon: JSX.Element;
  content?: String;
  dictionary: LocaleKeys;
}

function InformationItem(props: Props) {
  const { title, icon, content, dictionary } = props;

  return (
    <div>
      <div className="text-description-1 font-semibold uppercase text-slate-300">
        {dictionary[title as keyof LocaleKeys]}
      </div>

      <div className="flex items-center gap-2 text-description-3 capitalize">
        {icon && <span>{icon}</span>}
        <span>{content}</span>
      </div>
    </div>
  );
}

export default InformationItem;
