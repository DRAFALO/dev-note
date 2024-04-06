"use client";

import React from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { randomId } from "@/lib/random-id";
import { LocaleKeys } from "@/types/locales";

import AppIcon from "../../../common/app-icon";

import Member from "./member";
import ModalContact from "./modal-contact";

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
              <Dialog>
                <Button className="flex items-center " asChild>
                  <DialogTrigger>
                    <AppIcon
                      src="/svg/message-square.svg#id"
                      aria-label={dictionary["Contact now"]}
                    />

                    <span className="pl-3">{dictionary["Contact now"]}</span>
                  </DialogTrigger>
                </Button>

                <ModalContact />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutMyTeam, isEqual);
