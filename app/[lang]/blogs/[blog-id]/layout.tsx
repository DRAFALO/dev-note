import React from "react";

import ActionButtons from "@/components/blogs/action-buttons";
import RelatedBlogs from "@/components/blogs/related-blogs";
import Card from "@/components/common/Card";

interface Props {
  children: React.ReactNode;
}

async function BlogDetailLayout({ children }: Readonly<Props>) {
  return (
    <main className="bg-[#f8f8f8] py-4">
      <div className="container flex gap-4">
        <ActionButtons />

        <main className="flex min-h-[500px] flex-1 flex-col">{children}</main>

        <aside className="hidden min-h-[500px] basis-72 flex-col gap-4 lg:flex">
          <Card title="OtherBlogs">
            <RelatedBlogs />
          </Card>
        </aside>
      </div>
    </main>
  );
}

export default BlogDetailLayout;
