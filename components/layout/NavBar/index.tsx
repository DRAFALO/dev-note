import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import SVGTag from "@/components/SVGTag";

import { ROUTES } from "@/constants/routes";
import SVG_PATH from "@/public/svg";

import LanguageSelect from "./LanguageSelect";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

function NavBar({ params }: { params: { locale: string } }) {
  return (
    <nav className="py-3">
      <div className="container grid grid-cols-12">
        <div className="col-span-6">
          <Link href={ROUTES.HOME.LINK} title={ROUTES.HOME.TITLE}>
            <SVGTag src={SVG_PATH.LOGO} width={40} height={40} />
          </Link>
        </div>

        <div className="col-span-6 flex items-center justify-end gap-2">
          <ThemeToggle />
          <LanguageSelect params={params} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
