"use client";

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactQuill from "react-quill";

import { Button } from "@/components/ui/button";

import { formats, modules } from "@/constants/editorComment";
import { LocaleKeys } from "@/types/locales";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

// eslint-disable-next-line import/no-extraneous-dependencies
import "react-quill/dist/quill.snow.css";
import "./style.scss";

interface Props {
  dictionary: LocaleKeys;
}
export default function EditorForm(props: Props) {
  const { dictionary } = props;
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <form className="flex w-full flex-col gap-3">
        <div className=" w-full">
          <ReactQuill
            className="edit-quill"
            theme="snow"
            formats={formats}
            modules={modules}
            style={{
              height: "120px",
            }}
            placeholder={dictionary["Write a comment"]}
          />
        </div>

        <div className=" mt-10 flex gap-3">
          <Button className="bg-[#4f46e5] hover:bg-[#6366f1]">Submit</Button>
          <Button className="bg-[#3d3d3d] hover:bg-[#575757]">Preview</Button>
        </div>
      </form>
    </div>
  );
}
