/* eslint-disable react/jsx-props-no-spreading */

"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface AppLinkProps {
  href: LinkProps["href"];
  ["aria-label"]: string;
  className?: string;
}

function AppLink(props: React.PropsWithChildren<AppLinkProps>) {
  const { href, children, className, ...others } = props;

  const uuid = React.useId();
  const pathname = usePathname();

  const locale = pathname.split("/")[1];

  const finalLink = () => {
    if (!href) return `/${locale}`;

    const segments = (href as string).split("/");

    segments[1] = locale;

    return `/${locale}/${href}`;
  };

  return (
    <Link {...others} href={finalLink()} key={uuid} className={className}>
      {children}
    </Link>
  );
}

AppLink.defaultProps = {
  className: "",
};

export default React.memo(AppLink);
