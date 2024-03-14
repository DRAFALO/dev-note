"use client";

import React from "react";
import { useBoolean } from "usehooks-ts";

import AppIcon from "@/components/common/AppIcon";

import { ROUTES } from "@/constants/routes";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { LocaleKeys } from "@/types/locales";

import MenuItem from "../MenuItem";

interface Props {
  dictionary: LocaleKeys;
}
const listItemMenu = [
  {
    title: "Home",
    link: ROUTES.HOME.LINK,
    icon: "/svg/home-icon.svg#id",
    onclick: () => {},
  },
  {
    title: "Notes",
    link: ROUTES.NOTES.LINK,
    icon: "/svg/note-icon.svg#id",
    onclick: () => {},
  },
  {
    title: "Search",
    link: "#search-tag",
    icon: "/svg/search-icon.svg#id",
    onclick: () => {},
  },
  {
    title: "Sign Out",
    link: "#",
    icon: "/svg/signout-icon.svg#id",
    onclick: () => {},
  },
];
const listSocials = [
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: "/svg/facebook.svg#id",
  },
  {
    title: "Github",
    link: "https://www.github.com",
    icon: "/svg/github.svg#id",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com",
    icon: "/svg/linked.svg#id",
  },
];

function MenuMobile(props: Props) {
  const { dictionary } = props;
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const {
    value: isOpenMenuItem,
    setFalse: closeMenuItem,
    // setTrue: openMenuItem,
    toggle: toggleMenuItem,
  } = useBoolean(false);
  useOnClickOutside(buttonRef, closeMenuItem);

  return (
    <button
      type="button"
      onClick={toggleMenuItem}
      ref={buttonRef}
      className="mr-2 block cursor-pointer rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
    >
      <AppIcon
        src="/svg/menu-icon.svg#id"
        aria-label={dictionary.Menu}
        width={24}
        height={24}
        className=" "
      />

      {isOpenMenuItem && (
        <MenuItem
          listItems={listItemMenu}
          listSocials={listSocials}
          onClick={() => {
            // toggleMenuItem();
          }}
          dictionary={dictionary}
        />
      )}
    </button>
  );
}

export default React.memo(MenuMobile);
