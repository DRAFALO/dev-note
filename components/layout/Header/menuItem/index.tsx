"use client";

import React, { useRef } from "react";

import AppIcon from "@/components/common/AppIcon";
import AppLink from "@/components/common/AppLink";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { LocaleKeys } from "@/types/locales";
import { MenuItemType } from "@/types/menuItem";

interface ListMenuItemsProps {
  listItems: MenuItemType[];
  listSocials?: MenuItemType[];
  onClick?: () => void;
  dictionary: LocaleKeys;
}

interface IListItemLang {
  title: "Home" | "Notes" | "Search" | "Sign Out";
}

function MenuItem({
  onClick,
  dictionary,
  listSocials,
  listItems,
}: ListMenuItemsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => onClick && onClick());

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg outline-none dark:bg-gray-700"
    >
      <ul className="text-[16px]">
        {listItems.map((item) => {
          return (
            <AppLink
              href={item.link}
              aria-label={dictionary.DevNote}
              key={item.title}
            >
              <li className="flex items-center gap-2 rounded-md px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
                <AppIcon
                  src={item.icon}
                  aria-label={dictionary[item.title as IListItemLang["title"]]}
                  width={20}
                  height={20}
                  className=""
                />
                {/* Use the icon component */}
                {dictionary[item.title as IListItemLang["title"]]}
              </li>
            </AppLink>
          );
        })}

        {listSocials && listSocials.length > 0 && (
          <>
            <hr className="h-1 w-full" />

            <li className="flex items-center gap-6 px-4 py-4">
              {listSocials.map((item) => {
                return (
                  <AppLink
                    href={item.link}
                    aria-label={dictionary.DevNote}
                    key={item.title}
                  >
                    <AppIcon
                      src={item.icon}
                      aria-label={
                        dictionary[item.title as IListItemLang["title"]]
                      }
                      width={20}
                      height={20}
                      className="transition duration-100 hover:text-gray-500 active:text-gray-600 "
                    />
                  </AppLink>
                );
              })}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

MenuItem.defaultProps = {
  listSocials: [],
  onClick: () => {},
};

export default React.memo(MenuItem);
