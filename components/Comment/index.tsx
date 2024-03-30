import React from "react";

import { LocaleKeys } from "@/types/locales";

import EditorForm from "./EditorForm";
import HeaderComment from "./HeaderComment";
import SingleComment from "./SingleComment";

interface Props {
  dictionary: LocaleKeys;
}
export default function Comment(props: Props) {
  const { dictionary } = props;
  return (
    <div className="container">
      <HeaderComment dictionary={dictionary} />

      <EditorForm dictionary={dictionary} />
      <SingleComment className="mt-2" />
    </div>
  );
}
