import React from "react";
import dayjs from "dayjs";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import AppLink from "../AppLink";

import InformationBody from "./InformationBody";

import sx from "./CardInfo.module.scss";

interface Props {
  avatar: string;
  name: string;
  dictionary: LocaleKeys;
  location?: string;
  description?: string;
  education?: string;
  workPosition?: string;
  pronouns?: string;
  className?: string;
}

function CardInfo(props: Props) {
  const {
    avatar,
    description,
    education,
    name,
    workPosition,
    location,
    pronouns,
    className = "",
    dictionary,
  } = props;

  const joined = dayjs().format("YYYY-MM-DD");

  return (
    <div className={cn(sx.CardInfo, className)}>
      <div className="-mt-4">
        <AppLink href="/" className="flex items-end" aria-label={name}>
          <div className="mr-2 aspect-square h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image src={avatar} alt="" width={56} height={56} loading="lazy" />
          </div>
          <span className="mt-5 font-bold">{name}</span>
        </AppLink>
      </div>

      <button type="button" name="button" className={cn(sx.FollowBtn)}>
        {dictionary.Follow}
      </button>

      <div className={cn(sx.DescriptionCard)}>{description}</div>

      <InformationBody
        dictionary={dictionary}
        location={location}
        education={education}
        workPosition={workPosition}
        pronouns={pronouns}
        joined={joined}
      />
    </div>
  );
}

export default React.memo(CardInfo);
