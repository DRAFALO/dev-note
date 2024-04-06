import React from "react";

import AppIcon from "@/components/common/app-icon";
import { Button } from "@/components/ui/button";

import { CategoryEntity } from "@/types/categories";
import { LocaleKeys } from "@/types/locales";

import HeaderContent from "./header-content";

const parse = require("html-react-parser").default;

interface Props {
  articleImage: string;
  authorName: string;
  nickname: string;
  postingTime: string;
  title: string;
  authorAvatar: string;
  linkAuthor: string;
  categories: CategoryEntity[];
  content: string;
  dictionary: LocaleKeys;
}

function Content(props: Props) {
  const {
    dictionary,
    articleImage,
    authorName,
    nickname,
    postingTime,
    title,
    authorAvatar,
    linkAuthor,
    categories,
    content,
  } = props;

  return (
    <div>
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

      <div className="mt-8 flex justify-between border-b-2 border-t-2 border-secondary text-slate-500">
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
    </div>
  );
}

export default React.memo(Content);
