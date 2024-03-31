"use client";

import React from "react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

import "react-markdown-editor-lite/lib/index.css";

interface Props {
  dictionary: LocaleKeys;
  className?: string;
}
// interface EditorChangeData {
//   html: string;
//   text?: string;
// }

const mdParser = new MarkdownIt();
// function handleEditorChange({ html }: EditorChangeData) {
//   console.log("handleEditorChange", html);
// }
export default function EditorForm(props: Props) {
  const { dictionary, className } = props;

  return (
    <div className={cn(`flex gap-2`, className)}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <form className="flex w-full flex-col gap-3">
        <MdEditor
          style={{ height: "160px" }}
          // onChange={handleEditorChange}
          renderHTML={(text) => mdParser.render(text)}
          placeholder={dictionary["Add to the discussion"]}
        />
        <div className="flex gap-3">
          <Button className="bg-[#4f46e5] hover:bg-[#6366f1]">
            {dictionary.Submit}
          </Button>
          {/* <Button className="bg-[#3d3d3d] hover:bg-[#575757]">Preview</Button> */}
        </div>
      </form>
    </div>
  );
}
