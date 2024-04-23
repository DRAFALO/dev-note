import React from "react";
import isEqual from "react-fast-compare";

function AppLoading() {
  return <div>Loading...</div>;
}

export default React.memo(AppLoading, isEqual);
