import React from "react";
import { CiGlobe } from "react-icons/ci";
// --Icon
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";

function Member(props: any) {
  const { member } = props;
  return (
    <div className="mt-12 flex rounded-2xl  border-2 border-white">
      <Image
        style={{ borderRadius: "16px" }}
        src={member.avatar}
        alt="Avatar"
        width={160}
        height={160}
      />
      <div className="flex flex-col justify-between pl-6 pt-3">
        <div>
          <h2 className="text-heading-5">{member.name}</h2>
          <h2>
            aka <span className="font-medium">{member.aka}</span>
          </h2>
        </div>
        <div className="mb-2 flex space-x-2">
          <AppLink href={member.githubLink} aria-label={member.name}>
            <FiGithub cursor="pointer" size={20} />
          </AppLink>
          <AppLink href={member.socialLink} aria-label={member.name}>
            <CiGlobe cursor="pointer" size={20} />
          </AppLink>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Member);
