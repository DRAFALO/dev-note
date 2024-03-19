"use client";

import React from "react";
import Image from "next/image";
import { useBoolean } from "usehooks-ts";

import { Button } from "@/components/ui/button";

import { randomId } from "@/lib/randomId";
import { LocaleKeys } from "@/types/locales";

import AppIcon from "../../common/AppIcon";

import Member from "./Member";
import ModalContact from "./ModalContact";

const members = [
  {
    name: "Khang",
    aka: "Dev Quèn",
    avatar: "https://picsum.photos/500",
    socialLink: "https://picsum.photos/500",
    githubLink: "https://picsum.photos/500",
    id: randomId(),
  },
  {
    name: "Báu",
    aka: "Mr B",
    avatar: "https://picsum.photos/500",
    socialLink: "https://picsum.photos/500",
    githubLink: "https://picsum.photos/500",
    id: randomId(),
  },
];

interface Props {
  dictionary: LocaleKeys;
}

function AboutMyTeam(props: Props) {
  const { dictionary } = props;

  const {
    value: isOpenModalContact,
    setTrue: openModalContact,
    setFalse: closeModalContact,
  } = useBoolean();

  return (
    <section className="container my-10">
      <h2 className="mb-5 text-center text-heading-2 font-bold">
        {dictionary["About my team"]}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}

        <div className="flex rounded-2xl border-2 border-white">
          <Image
            src="https://picsum.photos/500"
            alt="Avatar"
            width={160}
            height={160}
            className="rounded-[0.875rem]"
          />

          <div className="flex flex-col justify-between pl-6 pt-3 ">
            <h2 className="text-heading-4">Maybe you</h2>

            <span className="font-medium">We don&apos;t know yet</span>

            <div className="mb-2">
              <Button onClick={openModalContact} className="flex items-center ">
                <AppIcon
                  src="/svg/message-square.svg#id"
                  aria-label={dictionary["Contact now"]}
                />

                <span className="pl-3">Contact now</span>
              </Button>

              <ModalContact
                open={isOpenModalContact}
                onClose={closeModalContact}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutMyTeam);
