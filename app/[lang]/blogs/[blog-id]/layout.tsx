import React from "react";

import ActionButtons from "@/components/blogs/action-buttons";
import RelatedBlogs from "@/components/blogs/related-blogs";
import Card from "@/components/common/card";

interface Props {
  children: React.ReactNode;
}

async function BlogDetailLayout({ children }: Readonly<Props>) {
  return (
    <section className="bg-bg-blog py-4">
      <div className="container flex gap-4">
        <ActionButtons />

        <div className="flex min-h-[500px] flex-1 flex-col">{children}</div>

        <aside className="hidden min-h-[500px] basis-72 flex-col gap-4 lg:flex">
          <Card title="OtherBlogs">
            <RelatedBlogs />
          </Card>
        </aside>
      </div>
    </section>
  );
}

export default BlogDetailLayout;
