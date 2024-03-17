"use client";

import React from "react";

import EditorChoices from "./EditorChoices";
import Popular from "./Popular";

function ArticlePopular() {
  return (
    <section className="container grid-cols-3 gap-10 lg:grid ">
      <div className="col-span-2">
        <EditorChoices />
      </div>

      <div className="col-span-1">
        <Popular />
      </div>
    </section>
  );
}

export default React.memo(ArticlePopular);
