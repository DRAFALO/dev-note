import React from "react";
import isEqual from "react-fast-compare";

function BlogSearchPage() {
  return <div>BlogSearchPage</div>;
}

export default React.memo(BlogSearchPage, isEqual);
