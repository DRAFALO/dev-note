import React from "react";

import AppLink from "@/components/common/AppLink";
import AppSectionTitle from "@/components/common/AppSectionTitle";

import { randomId } from "@/lib/randomId";
import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}
const data = [
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    href: "/",
  },
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    href: "/",
  },
  {
    title:
      " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
    description:
      "There are more coral species lurking in the deep ocean that previously throught.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    href: "/",
  },
];

function Popular(props: Props) {
  const { dictionary } = props;
  return (
    <div>
      <div className="mb-8">
        <AppSectionTitle
          dictionary={dictionary}
          title="Popular"
          linkShowMore="/allNews"
        />
      </div>

      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <section key={item.id} className="flex justify-center gap-4">
            <p className="flex text-center text-big-size font-bold">
              {index < 9 ? `0${index + 1}` : index + 1}
            </p>

            <div className="mt-2 flex flex-col  justify-center">
              <h3 className="line-clamp-2 text-heading-5 font-bold leading-7">
                <AppLink href={item.href} aria-label={item.title}>
                  Did Supernovae Kill Off Large Ocean
                </AppLink>
              </h3>
              <span>Jake Bittle in SCIENCE</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Popular);
