import AppLink from '@/components/common/AppLink';
import { Button } from '@/components/ui/button'
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { LocaleKeys } from '@/types/locales';
import { MenuItemType } from '@/types/menuItem';
import React, { useRef } from 'react'


interface ListMenuItemsProps {
  listItems: MenuItemType[],
  listSocials?: MenuItemType[],
  onClick?: () => void,
  dictionary: LocaleKeys;
}
interface IListItemLang {
  title: "Home" | "Notes" | "Search" | "Sign Out",
}
export default function MenuItem({ listItems, onClick, dictionary, listSocials }: ListMenuItemsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => onClick && onClick());
  return (
    <div ref={ref} className="absolute mt-2 right-0 bg-white dark:bg-gray-700 w-40 rounded-md shadow-lg outline-none">
      <ul className="text-[16px]">
        {listItems.map((item, index) => {
          // Get the correct icon component from the mapping object
          const Icon = listItems[index].icon;
          return (
            <div>
              <AppLink href={item.link} aria-label={dictionary.DevNote} key={item.title}>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center text-left gap-2 rounded-md">
                  <Icon size={20} /> {/* Use the icon component */}
                  {dictionary[item.title as IListItemLang["title"]]}
                </li>
              </AppLink>
            </div>

          );
        })}

        {listSocials && listSocials.length > 0 &&
          (
            <>
              <hr className="w-full h-1" />
              <li className="px-4 py-4 flex gap-6 items-center">
                {listSocials.map((item, index) => {
                  const Icon = listSocials[index].icon;
                  return (
                    <AppLink href={item.link} aria-label={dictionary.DevNote} key={item.title}>
                      <Icon size={16} className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100" />
                    </AppLink>
                  )
                })}
              </li>
            </>

          )
        }

      </ul>
    </div>
  )
}
