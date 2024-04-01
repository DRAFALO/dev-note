import React from "react";

import BlogPost from "@/components/blogs/blog-post";
import Comment from "@/components/blogs/Comment";
import Card from "@/components/common/Card";

function BlogDetailPage() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <BlogPost />
      </Card>
      <Card>
        <Comment />
      </Card>
    </div>
  );
}

export default BlogDetailPage;
