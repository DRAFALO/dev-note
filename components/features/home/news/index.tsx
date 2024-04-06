import React from "react";
import isEqual from "react-fast-compare";

import AppSectionTitle from "@/components/common/app-section-title";
import CardSingleBlog from "@/components/features/card-blog-item";

import { randomId } from "@/lib/random-id";
import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}

const data = [
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    postingTime: "Dec 12",
    readingTime: "5 min read",
    author: "jake",
    href: "/",
  },
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    author: "jake",
    postingTime: "Dec 12",
    readingTime: "5 min read",
    href: "/",
  },
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    postingTime: "Dec 12",
    readingTime: "5 min read",
    author: "jake",
    href: "/3",
  },
];

function News(props: Props) {
  const { dictionary } = props;

  return (
    <section className="container my-10">
      <AppSectionTitle
        dictionary={dictionary}
        title="All Stories"
        linkShowMore="/allNews"
        className="mb-8"
      />

      {data.map((blog, index) => (
        <CardSingleBlog
          key={blog.id}
          author={blog.author}
          description={blog.description}
          href={blog.href}
          image={blog.image}
          postingTime={blog.postingTime}
          readingTime={blog.readingTime}
          title={blog.title}
          className={cn(!!index && "mt-4")}
        />
      ))}
    </section>
  );
}

export default React.memo(News, isEqual);
