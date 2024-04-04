"use client";

import React from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";
import { useBoolean, useEventListener } from "usehooks-ts";

import AppLink from "@/components/common/app-link";
import LangToggle from "@/components/layout/header/lang-toggle";

import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

interface NavBarProps {
  lang: string;
  dictionary: LocaleKeys;
}

function Header(props: NavBarProps) {
  const { lang, dictionary } = props;

  const {
    value: isScolled,
    setTrue: setScolled,
    setFalse: unsetScolled,
  } = useBoolean();

  const onScrollUpdateUIHeader = React.useCallback(() => {
    if (typeof window === "undefined") return;

    const { scrollY } = window;

    if (scrollY > 0) {
      setScolled();
    } else {
      unsetScolled();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEventListener("scroll", onScrollUpdateUIHeader);

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-header flex min-h-[5rem] items-center bg-white duration-300",
        isScolled && "shadow-md",
      )}
    >
      <div className="container grid grid-cols-12">
        <div className="col-span-6">
          <AppLink href={ROUTES.HOME.LINK} aria-label={dictionary.DevNote}>
            <Image src="/svg/logo.svg" alt="Logo" width={40} height={40} />
          </AppLink>
        </div>

        <div className="col-span-6 flex items-center justify-end gap-8">
          {/* <ThemeToggle dictionary={dictionary} /> */}

          <LangToggle lang={lang} />
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header, isEqual);
