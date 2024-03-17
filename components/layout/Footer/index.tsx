import React from "react";

import AppLink from "@/components/common/AppLink";

import { LocaleKeys } from "@/types/locales";

interface FooterProps {
  dictionary: LocaleKeys;
}

const footerItems = [
  {
    title: "FAQ",
    link: "Test",
  },
  {
    title: "Customer support",
    link: "Test",
  },
  {
    title: "How it works",
    link: "Test",
  },
  {
    title: "Contact us",
    link: "Test",
  },
];

function Footer(props: FooterProps) {
  const { dictionary } = props;

  return (
    <footer className="container mb-14 mt-20 flex justify-between">
      <div>
        <div className="text-heading-4 font-bold">{dictionary.DevNote}</div>
        <h2 className="mt-4">
          {
            dictionary[
              "DevNote is a blog that helps you to share your knowledge."
            ]
          }
        </h2>
        <h2 className="pt-6 font-semibold">{dictionary.DevNote} ©2023</h2>
      </div>
      <div className="text-right">
        <div className="font-bold">Home</div>
        <ul className="mt-1">
          {footerItems.map((item) => (
            <li key={item.title}>
              <AppLink
                aria-label={item.title}
                href={item.link}
                className="mt-1"
              >
                {item.title}
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
