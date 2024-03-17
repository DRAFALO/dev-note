"use client";

import React, { useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { randomId } from "@/lib/randomId";

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

function AboutMyTeam() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="container my-4">
      <h1 className="text-center text-heading-2 font-bold">About my team</h1>
      <div className="grid grid-cols-1 gap-4  px-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id}>
            <Member member={member} />
          </div>
        ))}
        <div className="mt-12 flex rounded-2xl border-2 border-white">
          <Image
            style={{ borderRadius: "14px" }}
            src="https://picsum.photos/500"
            alt="Avatar"
            width={160}
            height={160}
          />
          <div className="flex flex-col justify-between pl-6 pt-3 ">
            <div>
              <h2 className="text-heading-5">Maybe you</h2>
              <h2>
                <span className="font-medium">We don&apost know yet</span>
              </h2>
            </div>
            <div className="mb-2">
              <Button
                onClick={() => setOpen(true)}
                className="flex items-center "
              >
                <LuMessageSquare fontSize={22} />
                <span className="pl-3">Contact now</span>
              </Button>
              <ModalContact open={open} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutMyTeam);
