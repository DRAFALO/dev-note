import React from "react";
import Link from "next/link";

import LangToggle from "@/components/layout/NavBar/LangToggle";
import ThemeToggle from "@/components/layout/NavBar/ThemeToggle";
import SVGTag from "@/components/SVGTag";

import { ROUTES } from "@/constants/routes";

interface NavBarProps {
  lang: string;
}

function NavBar(props: NavBarProps) {
  const { lang } = props;

  return (
    <nav className="py-3">
      <div className="container grid grid-cols-12">
        <div className="col-span-6">
          <Link href={ROUTES.HOME.LINK} title={ROUTES.HOME.TITLE}>
            <SVGTag src="/svg/logo.svg#logo" width={40} height={40} />
          </Link>
        </div>

        <div className="col-span-6 flex items-center justify-end gap-4">
          <ThemeToggle />

          <LangToggle lang={lang} />
        </div>
      </div>
    </nav>
  );
}

export default React.memo(NavBar);
