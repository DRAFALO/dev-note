import React from "react";
import Image from "next/image";

import AppLink from "../common/AppLink";

interface CardSingleBlogProps {
  title: string;
  author: string;
  postingTime: string;
  readingTime: string;
  description: string;
  image: string;
  href: string;
}

function CardSingleBlog(props: CardSingleBlogProps) {
  const { author, description, href, image, postingTime, readingTime, title } =
    props;
  return (
    <section className="container my-2">
      <div className="mb-2 grid-cols-2 gap-5 lg:grid">
        <div>
          <AppLink href={href} aria-label={title}>
            <h2 className="mb-1 text-heading-2 font-bold hover:text-green-500 hover:underline">
              {title}
            </h2>
          </AppLink>
          <span>{description}</span>
          <h3 className="mt-3 text-gray-500">{author}</h3>
          <div className="flex items-center pb-1 text-gray-500">
            <span className="mr-2">{postingTime}</span>
            <span>{readingTime}</span>
          </div>
        </div>
        <div>
          <AppLink href={href} aria-label={title}>
            <Image
              className="flex justify-center object-cover object-center xl:max-h-[170px] xl:max-w-[250px]"
              src={image}
              alt={title}
              width={500}
              height={250}
            />
          </AppLink>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CardSingleBlog);
