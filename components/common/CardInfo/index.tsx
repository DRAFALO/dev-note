import React from "react";
import {
  Building2,
  Clock9,
  GraduationCap,
  MapPin,
  UserRound,
} from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import sx from "./CardInfo.module.scss";

interface Props {
  avatar: string;
  name: string;
  location?: string;
  description?: string;
  education?: string;
  workPosition?: string;
  pronouns?: string;
  className?: string;
}

interface IbodyCardInfo {
  location?: string;
  education?: string;
  pronouns?: string;
  workPosition?: string;
  joined?: string;
}

const bodyCardInfo = ({
  location,
  education,
  pronouns,
  workPosition,
  joined,
}: IbodyCardInfo) => ({
  location: {
    icon: <MapPin size={14} />,
    content: location,
  },
  education: {
    icon: <GraduationCap size={14} />,
    content: education,
  },
  pronouns: {
    icon: <UserRound size={14} />,
    content: pronouns,
  },
  "work Position": {
    icon: <Building2 size={14} />,
    content: workPosition,
  },
  joined: {
    icon: <Clock9 size={14} />,
    content: joined,
  },
});

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
  } = props;

  const joined = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("/");

  const renderBodyCard = () => {
    return Object.entries(
      bodyCardInfo({
        location,
        education,
        pronouns,
        workPosition,
        joined,
      }),
    ).map(([key, value]) => (
      <div key={key}>
        <div className="text-description-1 font-semibold uppercase text-slate-300">
          {key}
        </div>
        <div className="flex items-center gap-1 text-description-3 capitalize">
          {value.icon && <span>{value.icon}</span>}
          <span>{value.content}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className={cn(sx.CardInfo, className)}>
      <div className="-mt-4">
        <a href="/" className="flex items-end">
          <div className="mr-2 aspect-square h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image src={avatar} alt="" width={56} height={56} loading="lazy" />
          </div>
          <span className="mt-5 font-bold">{name}</span>
        </a>
      </div>

      <button type="button" name="button" className={cn(sx.FollowBtn)}>
        Follow
      </button>

      <div className={cn(sx.DescriptionCard)}>{description}</div>

      <div className="flex flex-col gap-3">{renderBodyCard()}</div>
    </div>
  );
}

export default React.memo(CardInfo);
