import React from "react";
import isEqual from "react-fast-compare";
import Image from "next/image";

import { randomId } from "@/lib/random-id";

const icons = [
  {
    id: randomId(),
    name: "love",
    count: 1,
    imageIcon:
      "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
  },
  {
    id: randomId(),
    name: "unicorn",
    count: 1,
    imageIcon:
      "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
  },
];

function ReactionArticle() {
  return (
    <div className=" mt-9 flex">
      {icons.map((icon) => (
        <span className="flex" key={icon.id}>
          <Image src={icon.imageIcon} alt={icon.name} width={24} height={24} />

          <span className="ml-1 mr-6">{icon.count}</span>
        </span>
      ))}
    </div>
  );
}

export default React.memo(ReactionArticle, isEqual);
