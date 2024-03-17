import React from "react";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";

import { randomId } from "@/lib/randomId";

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
    image: "https://images7.alphacoders.com/129/thumb-440-1299888.webp",
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

function EditorChoices() {
  return (
    <div>
      <h2 className="mb-4 border-b-[1px] border-blue-400 text-heading-2">
        All Stories
      </h2>

      {data.map((item) => (
        <div key={item.id} className=" relative mt-2 grid-cols-12 lg:grid">
          <div className="col-span-9">
            <h3 className=" mb-1 line-clamp-2 text-heading-4 font-bold leading-7">
              <AppLink href={item.href} aria-label={item.title}>
                Nearly 200 Great Barrier Reef coral species also live in the
                deep sea
              </AppLink>
            </h3>

            <p className="description-1 mb-3 text-heading-5 leading-6">
              There are more coral species lurking in the deep ocean that
              previously throught.
            </p>
            <span>Jake Bittle in SCIENCE</span>
            <br />
            <span>Dec 12 5 min read</span>
          </div>

          <AppLink
            href={item.href}
            aria-label={item.title}
            className="col-span-3 mb-4 flex flex-1"
          >
            <Image
              src={item.image}
              className="flex-1 object-cover object-center"
              alt="a"
              width={200}
              height={200}
            />
          </AppLink>
        </div>
      ))}
    </div>
  );
}

export default React.memo(EditorChoices);
