"use client";

import React from "react";
import isEqual from "react-fast-compare";

import { LocaleKeys } from "@/types/locales";

import EditorChoices from "./editor-choices";
import Popular from "./popular";

interface Props {
  dictionary: LocaleKeys;
}

function ArticlePopular(props: Props) {
  const { dictionary } = props;
  return (
    <section className="container my-10 grid-cols-3 gap-10 lg:grid">
      <div className="col-span-2">
        <EditorChoices dictionary={dictionary} />
      </div>

      <div className="col-span-1">
        <Popular dictionary={dictionary} />
      </div>
    </section>
  );
}

export default React.memo(ArticlePopular, isEqual);
