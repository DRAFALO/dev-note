import React from "react";

import { LocaleKeys } from "@/types/locales";

import AppIcon from "../AppIcon";
import AppLink from "../AppLink";

import sx from "./AppSectionTitle.module.scss";

interface Props {
  title: string;
  linkShowMore?: string;
  dictionary: LocaleKeys;
}

function AppSectionTitle(props: Props) {
  const { title, linkShowMore, dictionary } = props;

  return (
    <div className={sx.AppSectionTitle}>
      <h2 className="relative text-heading-2">{title}</h2>

      {linkShowMore && (
        <AppLink
          href={linkShowMore}
          aria-label={title}
          className="flex items-center gap-1"
        >
          {dictionary["See more"]}

          <AppIcon
            src="/svg/chevron-right.svg#id"
            aria-label={dictionary["See more"]}
          />
        </AppLink>
      )}
    </div>
  );
}

export default React.memo(AppSectionTitle);
