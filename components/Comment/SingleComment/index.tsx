import React from "react";

import AppIcon from "@/components/common/AppIcon";
import AppLink from "@/components/common/AppLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

interface Props {
  className: string;
}
export default function SingleComment(props: Props) {
  const { className } = props;
  return (
    <div className={cn(`flex items-start gap-2`, className)}>
      <AppLink href="" aria-label="">
        <Avatar className="mt-3 h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </AppLink>
      <div className="w-full">
        <div className=" w-full rounded-md border border-[#1717170d] px-3">
          <div className="flex items-center justify-between gap-1  pt-2 text-gray-500">
            <div className="flex gap-1">
              <h3 className="text-black">JoelBonetR</h3>
              <span>•</span>
              <span>Mar 27</span>
            </div>

            <button type="button" className="rounded-md p-2 hover:bg-gray-100">
              <AppIcon
                src="/svg/moremenu.svg#id"
                aria-label="More menu"
                width={25}
                height={25}
              />
            </button>
          </div>
          <p className="mb-4">
            TIL compound components. I never knew Compound was Composition.
          </p>
        </div>

        <footer className="mt-1 flex gap-4">
          <button
            type="button"
            className="flex items-center gap-1 rounded-md p-1 hover:bg-gray-100"
          >
            <AppIcon
              src="/svg/heart.svg#id"
              aria-label="Heart"
              width={20}
              height={20}
            />
            <span>2 likes</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-md p-1 hover:bg-gray-100"
          >
            <AppIcon
              src="/svg/reply.svg#id"
              aria-label="Reply"
              width={20}
              height={20}
            />
            <span>Reply</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
