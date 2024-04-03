import React from "react";

import BlogPost from "@/components/blogs/blog-post";
import Comment from "@/components/blogs/Comment";

function BlogDetailPage() {
  return (
    <div className="flex flex-col gap-2">
      <BlogPost />

      <Comment />
    </div>
  );
}

export default BlogDetailPage;
