import React from "react";

import CardSingleBlog from "@/components/CardBlogItem";
import AppSectionTitle from "@/components/common/AppSectionTitle";

import { randomId } from "@/lib/randomId";
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
    image: "https://images7.alphacoders.com/129/thumb-440-1299888.webp",
    id: randomId(),
    postingTime: "Dec 12",
    readingTime: "5 min read",
    author: "jake",
    href: "/3",
  },
];

function EditorChoices(props: Props) {
  const { dictionary } = props;
  return (
    <div>
      <div className="mb-8">
        <AppSectionTitle
          dictionary={dictionary}
          title="All Stories"
          linkShowMore="/allNews"
        />
      </div>

      {data.map((blog) => (
        <CardSingleBlog
          key={blog.id}
          author={blog.author}
          description={blog.description}
          href={blog.href}
          image={blog.image}
          postingTime={blog.postingTime}
          readingTime={blog.readingTime}
          title={blog.title}
        />
      ))}
    </div>
  );
}

export default React.memo(EditorChoices);
