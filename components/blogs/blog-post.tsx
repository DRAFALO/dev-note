/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { randomId } from "@/lib/randomId";
import { LocaleKeys } from "@/types/locales";

import Content from "../m-detail/content";

const fakeData = {
  articleImage:
    "https://dev.to/assets/images/articles/hero/hero-1.jpg?w=1200&h=630&q=75&fm=webp,avif",
  authorName: "DevNote",
  nickname: "DevNote",
  postingTime: "2 days ago",
  title: "DevNote",
  authorAvatar:
    "https://dev.to/assets/images/articles/hero/hero-1.jpg?w=1200&h=630&q=75&fm=webp,avif",
  linkAuthor: "DevNote",
  categories: [
    {
      _id: randomId(),
      name: "DevNote",
      slug: "DevNote",
      description: "DevNote",
      image:
        "https://dev.to/assets/images/articles/hero/hero-1.jpg?w=1200&h=630&q=75&fm=webp,avif",
    },
  ],
  content: "DevNote",
};

type Props = {
  dictionary: LocaleKeys;
};

function BlogPost(props: Props) {
  const { dictionary } = props;

  return (
    <div>
      <Content {...fakeData} dictionary={dictionary} />
    </div>
  );
}

export default BlogPost;
