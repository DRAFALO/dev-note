"use client";
import AppLink from "@/components/common/AppLink";
import LangToggle from "@/components/layout/Header/LangToggle";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle
} from "@/components/ui/dialog";

import { ROUTES } from "@/constants/routes";
import { LocaleKeys } from "@/types/locales";

import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Facebook, Github, Home, Linkedin, LogOut, Menu, Search, Settings, Sparkles, User } from "lucide-react";
import { useTheme } from "next-themes";
import AuthButton from "./authButton";

import MenuItem from "./menuItem";
const listItemMenu = [
  {
    title: "Home",
    link: ROUTES.HOME.LINK,
    icon: Home
  },
  {
    title: "Notes",
    link: ROUTES.NOTES.LINK,
    icon: Sparkles
  },
  {
    title: "Search",
    link: "#search-tag",
    icon: Search
  },
  {
    title: "Sign Out",
    link: "#",
    icon: LogOut
  },
];

const listSocials = [
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: Facebook
  },
  {
    title: "Github",
    link: "https://www.github.com",
    icon: Github
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com",
    icon: Linkedin
  },
];

const listItemUserMenu = [
  {
    title: "Profile",
    link: ROUTES.PROFILE.LINK,
    icon: User
  },
  {
    title: "Settings",
    link: "#",
    icon: Settings
  },
  {
    title: "Sign Out",
    link: "#",
    icon: LogOut
  },
];



const ThemeToggle = dynamic(
  () => import("@/components/layout/Header/ThemeToggle"),
  { ssr: false },
);

interface NavBarProps {
  lang: string;
  dictionary: LocaleKeys;
}

function Header(props: NavBarProps) {
  const { lang, dictionary } = props;
  const { theme } = useTheme();
  const [openSignIn, setOpenSignIn] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  const [isLogged, setIsLogged] = useState(true)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <header className="sticky z-header py-3 shadow-sm">
      <div className="container grid grid-cols-12">
        <div className="col-span-6 flex items-center gap-4">
          <AppLink href={ROUTES.HOME.LINK} aria-label={dictionary.DevNote}>
            <div className="flex items-center gap-2">
              <Image
                src={`/svg/logo.svg`} alt="Logo" width={30} height={30}
                className="dark:hidden" />
              <Image
                src={`/svg/dark-logo.png`} alt="Logo" width={30} height={30}
                className="dark:block hidden" />

              <h2 className="text-8xl font-bold">DEVNOTE</h2>
            </div>
          </AppLink>
          <ul className="hidden md:flex gap-4 items-center">
            <li>
              <AppLink href={ROUTES.NOTES.LINK} aria-label={dictionary.DevNote}>
                <h1 className="text-8xl font-bold">{dictionary["Notes"]}</h1>
              </AppLink>
            </li>
            <li>
              <AppLink href="#search-tag" aria-label={dictionary.DevNote}>
                <h1 className="text-8xl font-bold">{dictionary["Search"]} </h1>
              </AppLink>
            </li>
          </ul>

        </div>

        <div className="col-span-6 flex items-center justify-end gap-2 relative">
          <ThemeToggle />

          <LangToggle lang={lang} />

          {isLogged ?
            (
              <div>
                <Avatar className="hover:cursor-pointer hidden md:flex" onClick={() => setOpenUserMenu(!openUserMenu)}>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {openUserMenu && <MenuItem listItems={listItemUserMenu} onClick={() => { setOpenUserMenu(false) }} dictionary={dictionary} />}
              </div>


            )
            :
            (
              <div className={`hidden md:flex`}><AuthButton dictionary={dictionary} title="Sign In" onClick={() => setOpenSignIn(true)} />
                <AuthButton dictionary={dictionary} title="Sign Up" onClick={() => setOpenSignUp(true)} />
              </div>
            )


          }
          <div className="md:hidden mr-2 block ">
            <Menu onClick={() => setOpenMenuMobile(!openMenuMobile)} size={38} className="hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3" />
            {openMenuMobile &&
              (
                <MenuItem listItems={listItemMenu} listSocials={listSocials} onClick={() => { setOpenMenuMobile(false) }} dictionary={dictionary} />
              )}

          </div>

          {openSignIn && <div className="z-modal">
            {/* Modal Sign In or Sign Up here */}
            <Dialog open={true} onOpenChange={() => { setOpenSignIn(!openSignIn) }}>
              <DialogOverlay className="z-modal bg-black/50" />
              <DialogContent className="z-modal ">
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>

            </Dialog>
          </div>}
        </div>
      </div>

    </header>
  );
}

export default React.memo(Header);
