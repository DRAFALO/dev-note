import React from "react";
import isEqual from "react-fast-compare";

import { randomId } from "@/lib/random-id";
import { LocaleKeys } from "@/types/locales";

import EditorForm from "./editor-form";
import HeaderComment from "./header-comment";
import SingleComment from "./single-comment";

interface Props {
  dictionary: LocaleKeys;
}

const data = [
  {
    id: randomId(),
    author: "John",
    commentTime: "Mar 27",
    comment: "This is a comment",
    like: "1",
    replay: "TIL compound components. I never knew Compound was Composition.",
    image: "https://github.com/shadcn.png",
    href: "/2",
  },
  {
    id: randomId(),
    author: "John",
    commentTime: "Mar 28",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit explicabo, facere amet esse commodi corrupti labore nam nesciunt reprehenderit ipsum at cum ea vitae dolorum porro dicta, id possimus?",
    like: "1",
    replay: "This is a replay",
    image: "https://github.com/shadcn.png",
    href: "/3",
  },
  {
    id: randomId(),
    author: "John",
    commentTime: "Mar 20",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus, ab cumque, iusto esse numquam aperiam, voluptatum placeat non repudiandae veritatis quos ipsum repellat voluptatem consectetur dignissimos libero aliquid laborum.",
    like: "5",
    replay: "This is a replay",
    image: "https://github.com/shadcn.png",
    href: "/3",
  },
];

function Comments(props: Props) {
  const { dictionary } = props;

  return (
    <div className="px-14 py-8">
      <HeaderComment
        dictionary={dictionary}
        className="mb-6"
        numberComment={data.length}
      />

      <EditorForm dictionary={dictionary} className="mb-6" />
      {data.map((comment) => (
        <SingleComment
          className="mt-4"
          author={comment.author}
          comment={comment.comment}
          commentTime={comment.commentTime}
          like={comment.like}
          key={comment.id}
          image={comment.image}
          href={comment.href}
          dictionary={dictionary}
        />
      ))}
    </div>
  );
}
export default React.memo(Comments, isEqual);
