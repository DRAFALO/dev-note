import React from "react";

import BlogPost from "@/components/blogs/blog-post";
import Comment from "@/components/blogs/Comment";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { LocaleEnum } from "@/types/locales";

async function BlogDetailPage({
  params: { lang },
}: {
  params: { lang: LocaleEnum };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-2">
      <BlogPost dictionary={dictionary} />

      <Comment dictionary={dictionary} />
    </div>
  );
}

export default BlogDetailPage;
