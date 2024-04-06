import React from "react";

import Card from "@/components/common/card";
import ActionButtons from "@/components/features/blogs/action-buttons";
import BlogPost from "@/components/features/blogs/blog-post";
import RelatedBlogs from "@/components/features/blogs/related-blogs";
import Comment from "@/components/features/comment";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { LocaleEnum } from "@/types/locales";

async function BlogDetailPage({
  params: { lang },
}: {
  params: { lang: LocaleEnum };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="bg-bg-blog py-4">
      <div className="container flex gap-4">
        <ActionButtons />

        <div className="flex min-h-[500px] flex-1 flex-col gap-2 overflow-hidden bg-white">
          <BlogPost dictionary={dictionary} />

          <Comment dictionary={dictionary} />
        </div>

        <aside className="hidden min-h-[500px] basis-72 flex-col gap-4 lg:flex">
          <Card title="OtherBlogs">
            <RelatedBlogs />
          </Card>
        </aside>
      </div>
    </section>
  );
}

export default BlogDetailPage;
