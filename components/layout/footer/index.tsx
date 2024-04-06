import React from "react";
import isEqual from "react-fast-compare";

import AppLink from "@/components/common/app-link";

import { ROUTES } from "@/constants/routes";
import { randomId } from "@/lib/random-id";
import { LocaleKeys } from "@/types/locales";

interface FooterProps {
  dictionary: LocaleKeys;
}

const footerItems = [
  {
    title: "FAQ",
    link: "Test",
    id: randomId(),
  },
  {
    title: "Customer support",
    link: "Test",
    id: randomId(),
  },
  {
    title: "How it works",
    link: "Test",
    id: randomId(),
  },
  {
    title: "Contact us",
    link: "Test",
    id: randomId(),
  },
];

function Footer(props: FooterProps) {
  const { dictionary } = props;

  return (
    <footer className="container mb-14 mt-20 flex justify-between">
      <div>
        <AppLink
          href={ROUTES.HOME.LINK}
          className="text-heading-4 font-bold"
          aria-label="DevNote"
        >
          {dictionary.DevNote}
        </AppLink>

        <h2 className="mt-4">
          {
            dictionary[
              "DevNote is a blog that helps you to share your knowledge."
            ]
          }
        </h2>

        <h3 className="pt-6 font-semibold">{dictionary.DevNote} ©2023</h3>
      </div>

      <div className="text-right">
        <AppLink
          href={ROUTES.HOME.LINK}
          aria-label={dictionary.Home}
          className="font-bold"
        >
          {dictionary.Home}
        </AppLink>

        <ul className="mt-2">
          {footerItems.map((item) => (
            <li key={item.id} className="mt-1">
              <AppLink aria-label={item.title} href={item.link}>
                {item.title}
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default React.memo(Footer, isEqual);
