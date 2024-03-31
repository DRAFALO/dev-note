import React from "react";

import AppIcon from "@/components/common/AppIcon";
import AppLink from "@/components/common/AppLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

interface Props {
  className: string;
  author: string;
  commentTime: string;
  comment: string;
  like: string;
  image: string;
  href: string;
  dictionary: LocaleKeys;
}

export default function SingleComment(props: Props) {
  const {
    className,
    author,
    comment,
    commentTime,
    like,
    image,
    href,
    dictionary,
  } = props;
  return (
    <div className={cn(`flex items-start gap-2`, className)}>
      <AppLink href={href} aria-label={author}>
        <Avatar className="mt-3 h-8 w-8">
          <AvatarImage src={image} />
          <AvatarFallback>{author}</AvatarFallback>
        </Avatar>
      </AppLink>
      <article className="w-full rounded-md border border-[#1717170d] px-3">
        <header className="flex items-center justify-between gap-1 pt-2 text-gray-500">
          <div className="flex gap-1">
            <h3 className="text-black">{author}</h3>
            <span>•</span>
            <time>{commentTime}</time>
          </div>

          <button type="button" className="rounded-md p-2 hover:bg-gray-100">
            <AppIcon
              src="/svg/moremenu.svg#id"
              aria-label="More menu"
              width={30}
              height={30}
            />
          </button>
        </header>
        <p className="mb-4">{comment}</p>

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
            <span>
              {like} {dictionary.Likes}
            </span>
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
            <span> {dictionary.Reply}</span>
          </button>
        </footer>
      </article>
    </div>
  );
}
