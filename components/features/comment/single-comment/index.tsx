import React from "react";
import isEqual from "react-fast-compare";

import AppIcon from "@/components/common/app-icon";
import AppLink from "@/components/common/app-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import ModalSeeMore from "../modal-see-more";

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

function SingleComment(props: Props) {
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
    <div className={cn("flex items-start gap-2", className)}>
      <AppLink href={href} aria-label={author}>
        <Avatar className="mt-3 h-8 w-8">
          <AvatarImage src={image} />
          <AvatarFallback>{author}</AvatarFallback>
        </Avatar>
      </AppLink>
      <article className="w-full rounded-md border border-[#1717170d] px-3">
        <div className="flex items-center justify-between gap-1 pt-2 text-gray-500">
          <div className="flex gap-1">
            <span className="text-black">{author}</span>
            <span>•</span>
            <time>{commentTime}</time>
          </div>

          <Dialog>
            <Button
              className="rounded-md bg-white p-2 text-[#3d3d3d] hover:bg-gray-100"
              asChild
            >
              <DialogTrigger>
                <AppIcon
                  src="/svg/moremenu.svg#id"
                  aria-label={dictionary["See more"]}
                  width={16}
                  height={16}
                />
              </DialogTrigger>
            </Button>

            <ModalSeeMore dictionary={dictionary} />
          </Dialog>
        </div>

        <p className="mb-4">{comment}</p>

        <div className="mt-1 flex gap-4">
          <Button
            type="button"
            className="flex items-center gap-1 rounded-md bg-white p-1 text-[#3d3d3d] hover:bg-gray-100"
          >
            <AppIcon
              src="/svg/heart.svg#id"
              aria-label="Heart"
              width={16}
              height={16}
            />
            <span>
              {like} {dictionary.Likes}
            </span>
          </Button>

          <Button className="flex items-center gap-1 rounded-md bg-white p-1 text-[#3d3d3d] hover:bg-gray-100">
            <AppIcon
              src="/svg/reply.svg#id"
              aria-label="Reply"
              width={16}
              height={16}
            />
            <span>{dictionary.Reply}</span>
          </Button>
        </div>
      </article>
    </div>
  );
}
export default React.memo(SingleComment, isEqual);
