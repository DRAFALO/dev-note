// import MdEditor from "react-markdown-editor-lite";
import React from "react";
import isEqual from "react-fast-compare";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import "react-markdown-editor-lite/lib/index.css";

interface Props {
  dictionary: LocaleKeys;
  className?: string;
}

function EditorForm(props: Props) {
  const { dictionary, className } = props;

  return (
    <div className={cn("flex gap-2", className)}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <form className="flex w-full flex-col gap-3 [&>*:fist-child]:h-40">
        {/* <MdEditor
          placeholder={dictionary["Add to the discussion"]}
        /> */}
        <div>
          <Button className="mr-2 bg-[#4f46e5] hover:bg-[#6366f1]">
            {dictionary.Submit}
          </Button>
          <Button className="bg-[#3d3d3d] hover:bg-[#575757]">
            {dictionary.Preview}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default React.memo(EditorForm, isEqual);
