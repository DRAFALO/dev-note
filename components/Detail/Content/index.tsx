import React from "react";

import AppIcon from "@/components/common/AppIcon";
import { Button } from "@/components/ui/button";

import { CategoryEntity } from "@/types/categories";

import HeaderContent from "./HeaderContent";

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
}

const data: Props = {
  articleImage:
    "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fomji0h8jywa38qhojfoj.jpg",
  authorName: "Toby Farley",
  nickname: "Shadow Chicken",
  postingTime: "26 thg 3",
  title: "A Case for Hungarian Notation in JavaScript",
  linkAuthor: "author",
  authorAvatar:
    "https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F74972%2F734aa60b-1b94-4e87-98b7-63f2332deff3.png",
  categories: [
    { name: "review", _id: "1213" },
    { name: "javascript", _id: "1213" },
    { name: "typescript", _id: "1213" },
  ],
  content: `
    <div>
      <h1>Đây là một ví dụ về khung mã:</h1>
      <pre><code>
        function helloWorld() {
          console.log(Hello world !;);
        }
        helloWorld();
      </code></pre>
    </div>
    `,
};

function Content() {
  return (
    <div>
      <HeaderContent
        articleImage={data.articleImage}
        authorName={data.authorName}
        nickname={data.nickname}
        postingTime={data.postingTime}
        title={data.title}
        authorAvatar={data.authorAvatar}
        linkAuthor={data.linkAuthor}
        categories={data.categories}
      />

      <div className="px-14 pt-8">{parse(data.content)}</div>

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
