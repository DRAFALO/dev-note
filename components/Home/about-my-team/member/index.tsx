import React from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";

import AppIcon from "@/components/common/app-icon";
import AppLink from "@/components/common/app-link";

function Member(props: any) {
  const { member } = props;

  return (
    <div className="flex rounded-2xl  border-2 border-white">
      <Image
        className="rounded-2xl"
        src={member.avatar}
        alt="Avatar"
        width={160}
        height={160}
      />

      <div className="flex flex-col justify-between pl-6 pt-3">
        <h3 className="text-heading-5">{member.name}</h3>

        <h4>
          aka <span className="font-medium">{member.aka}</span>
        </h4>

        <div className="mb-2 flex space-x-2">
          <AppLink href={member.githubLink} aria-label={member.name}>
            <AppIcon
              src="/svg/github.svg#id"
              aria-label="Github"
              width={25}
              height={25}
            />
          </AppLink>

          <AppLink href={member.socialLink} aria-label={member.name}>
            <AppIcon
              src="/svg/globe.svg#id"
              aria-label="Linkedin"
              width={25}
              height={25}
            />
          </AppLink>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Member, isEqual);
