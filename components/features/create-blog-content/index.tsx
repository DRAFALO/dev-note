"use client";

import React from "react";
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";

import { LocaleKeys } from "@/types/locales";

import "react-markdown-editor-lite/lib/index.css";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: true,
});

const mdParser = new MarkdownIt();

interface Props {
  dictionary: LocaleKeys;
}

function CreateBlogContent(props: Props) {
  const { dictionary } = props;

  return (
    <div>
      <div
        spellCheck="false"
        contentEditable="true"
        className="ml-2 h-12 w-full border-none text-2xl font-medium outline-none"
      >
        {dictionary.Title}
      </div>
      <MdEditor
        className="h-[700px]"
        renderHTML={(text) => mdParser.render(text)}
      />
    </div>
  );
}

export default React.memo(CreateBlogContent);
