"use client";

import React from "react";
import isEqual from "react-fast-compare";
import { useMediaQuery } from "usehooks-ts";

import { MEDIA_MAX_WIDTH } from "@/constants/media-query";

import ReactionButton from "./reaction-button";

function ActionButtonsMobile() {
  return (
    <aside className="fixed bottom-0 left-0 flex w-full justify-around bg-white px-4 py-2 shadow-xl md:hidden">
      <ReactionButton icon="/svg/heart.svg#id" count={4} className="h-7 w-7" />
      <ReactionButton
        icon="message-circle"
        count={10}
        className="h-7 w-7 hover:text-yellow-500"
      />
      <ReactionButton
        icon="bookmark"
        count={2}
        className="h-7 w-7 hover:text-blue-500"
      />
      <ReactionButton icon="link" className="h-7 w-7 hover:text-green-500" />
    </aside>
  );
}

function ActionButtonsDesktop() {
  return (
    <aside className="hidden min-h-[500px] basis-16 flex-col items-center gap-4 pt-8 md:flex">
      <ReactionButton icon="/svg/heart.svg#id" count={4} />
      <ReactionButton
        icon="message-circle"
        count={10}
        className="hover:text-yellow-500"
      />
      <ReactionButton
        icon="bookmark"
        count={2}
        className="hover:text-blue-500"
      />
      <ReactionButton icon="link" className="hover:text-green-500" />
    </aside>
  );
}

function ActionButtons() {
  const isMobile = useMediaQuery(`(max-width: ${MEDIA_MAX_WIDTH.MD})`);

  return isMobile ? <ActionButtonsMobile /> : <ActionButtonsDesktop />;
}

export default React.memo(ActionButtons, isEqual);
