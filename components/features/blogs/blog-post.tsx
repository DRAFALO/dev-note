/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import isEqual from "react-fast-compare";
import parse from "html-react-parser";

import AppIcon from "@/components/common/app-icon";
import { Button } from "@/components/ui/button";

import { randomId } from "@/lib/random-id";
import { LocaleKeys } from "@/types/locales";

import HeaderContent from "../detail/content/header-content";

const fakeData = {
  articleImage:
    "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
  authorName: "DevNote",
  nickname: "DevNote",
  postingTime: "2 days ago",
  title: "DevNote",
  authorAvatar:
    "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
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

  const {
    articleImage,
    authorName,
    nickname,
    postingTime,
    title,
    authorAvatar,
    linkAuthor,
    categories,
    content,
  } = fakeData;

  return (
    <>
      <HeaderContent
        articleImage={articleImage}
        authorName={authorName}
        nickname={nickname}
        postingTime={postingTime}
        title={title}
        authorAvatar={authorAvatar}
        linkAuthor={linkAuthor}
        categories={categories}
        dictionary={dictionary}
      />

      <div className="px-14 pt-8">{parse(content)}</div>

      <div className="mt-8 flex !hidden justify-between border-b-2 border-t-2 border-secondary text-slate-500">
        <div className="mx-8">
          <Button variant="outline" className="border-none">
            <AppIcon src="/svg/heart.svg#id" aria-label="heart" />
            <span className="ml-2">5.6k</span>
          </Button>

          <Button variant="outline" className="border-none" id="comment">
            <AppIcon src="/svg/message-square.svg#id" aria-label="message" />
            <span className="ml-2">94</span>
          </Button>
        </div>

        <div className="mx-8">
          <Button variant="outline" className="border-none">
            <AppIcon src="/svg/save.svg#id" aria-label="save" />
          </Button>

          <Button variant="outline" className="border-none">
            <AppIcon src="/svg/share.svg#id" aria-label="share" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default React.memo(BlogPost, isEqual);
