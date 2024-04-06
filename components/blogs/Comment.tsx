import React from "react";

import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}

function Comment(props: Props) {
  const { dictionary } = props;

  return <div>{dictionary["About my team"]}</div>;
}

export default Comment;
