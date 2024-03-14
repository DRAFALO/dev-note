"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useBoolean } from "usehooks-ts";

// import { useBoolean } from "usehooks-ts";
import AppLink from "@/components/common/AppLink";
import LangToggle from "@/components/layout/Header/LangToggle";

import { ROUTES } from "@/constants/routes";
import useScroll from "@/hooks/useScroll";
import { LocaleKeys } from "@/types/locales";

import MenuMobile from "./MenuMobile";

const ThemeToggle = dynamic(
  () => import("@/components/layout/Header/ThemeToggle"),
  { ssr: false },
);

const UserPanel = dynamic(
  () => import("@/components/layout/Header/UserPanel"),
  { ssr: false },
);

interface NavBarProps {
  lang: string;
  dictionary: LocaleKeys;
}

function Header(props: NavBarProps) {
  const { lang, dictionary } = props;
  const isScrolled = useScroll();

  const {
    value: isSignedIn,
    // setFalse: signOut,
    // setTrue: signIn,
  } = useBoolean(false);

  return (
    <header
      className={`sticky left-0 top-0  z-header bg-white py-3 dark:bg-background ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className="container grid grid-cols-12">
        <section className="col-span-6 flex items-center gap-8">
          <AppLink href={ROUTES.HOME.LINK} aria-label={dictionary.DevNote}>
            <div className="flex items-center gap-2">
              <Image
                src="/svg/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="dark:hidden"
              />

              <Image
                src="/svg/dark-logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="hidden dark:block"
              />

              <h2 className="text-8xl font-bold">DEVNOTE</h2>
            </div>
          </AppLink>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <AppLink href={ROUTES.NOTES.LINK} aria-label={dictionary.DevNote}>
                <span className="text-8xl font-bold">{dictionary.Notes}</span>
              </AppLink>
            </li>

            <li>
              <AppLink href="#search-tag" aria-label={dictionary.DevNote}>
                <span className="text-8xl font-bold">{dictionary.Search} </span>
              </AppLink>
            </li>
          </ul>
        </section>

        <section className="relative col-span-6 flex items-center justify-end gap-2">
          <ThemeToggle />

          <LangToggle lang={lang} />

          <UserPanel isSignedIn={isSignedIn} dictionary={dictionary} />

          <MenuMobile dictionary={dictionary} />
        </section>
      </div>
    </header>
  );
}

export default React.memo(Header);
