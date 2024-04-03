import React from "react";

import { LocaleKeys } from "@/types/locales";

import AppIcon from "../AppIcon";

import InformationItem from "./InformationItem";

interface Props {
  location?: string;
  education?: string;
  pronouns?: string;
  workPosition?: string;
  joined?: string;
  dictionary: LocaleKeys;
}

const mappingBodyCardInfo = ({
  location,
  education,
  pronouns,
  workPosition,
  joined,
  dictionary,
}: Props) => ({
  Location: {
    icon: (
      <AppIcon src="/svg/map-pin.svg#id" aria-label={dictionary.Location} />
    ),
    content: location,
  },
  Education: {
    icon: (
      <AppIcon
        src="/svg/graduation-cap.svg#id"
        aria-label={dictionary.Education}
      />
    ),
    content: education || "N/A",
  },
  Pronouns: {
    icon: (
      <AppIcon src="/svg/user-round.svg#id" aria-label={dictionary.Pronouns} />
    ),
    content: pronouns || "N/A",
  },
  "Work Position": {
    icon: (
      <AppIcon
        src="/svg/building-2.svg#id"
        aria-label={dictionary["Work Position"]}
      />
    ),
    content: workPosition || "N/A",
  },
  Joined: {
    icon: <AppIcon src="/svg/clock-9.svg#id" aria-label={dictionary.Joined} />,
    content: joined,
  },
});

function InformationBody(props: Props) {
  const { location, education, pronouns, workPosition, joined, dictionary } =
    props;

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(
        mappingBodyCardInfo({
          location,
          education,
          pronouns,
          workPosition,
          joined,
          dictionary,
        }),
      ).map(([key, value]) => (
        <InformationItem
          key={key}
          title={key}
          icon={value.icon}
          content={value.content}
          dictionary={dictionary}
        />
      ))}
    </div>
  );
}

export default InformationBody;
