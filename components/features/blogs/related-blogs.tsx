import React from "react";
import isEqual from "react-fast-compare";

function RelatedBlogs() {
  return <div>RelatedBlogs</div>;
}

export default React.memo(RelatedBlogs, isEqual);
