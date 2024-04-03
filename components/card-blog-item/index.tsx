import React from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";

import AppLink from "@/components/common/app-link";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  author: string;
  postingTime: string;
  readingTime: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

function CardBlogItem(props: Props) {
  const {
    author,
    description,
    href,
    image,
    postingTime,
    readingTime,
    title,
    className = "",
  } = props;

  return (
    <article className={cn("flex flex-col lg:flex-row lg:gap-2", className)}>
      <div className="flex-1">
        <h3 className="mb-1 line-clamp-2 text-heading-4 font-bold">
          <AppLink
            className="hover:text-green-500 hover:underline"
            href={href}
            aria-label={title}
          >
            {title}
          </AppLink>
        </h3>

        <p className="line-clamp-2">{description}</p>

        <h5 className="mt-3 text-gray-500">{author}</h5>

        <div className="flex items-center gap-1 pb-1 text-gray-500">
          <span>{postingTime}</span>

          <span>•</span>

          <span>{readingTime}</span>
        </div>
      </div>

      <AppLink
        href={href}
        aria-label={title}
        className="order-first lg:order-last"
      >
        <Image
          className="aspect-video object-cover object-center"
          src={image}
          alt={title}
          width={400}
          height={250}
        />
      </AppLink>
    </article>
  );
}

export default React.memo(CardBlogItem, isEqual);
