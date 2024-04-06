import React from "react";
import isEqual from "react-fast-compare";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ROUTES } from "@/constants/routes";
import { CategoryEntity } from "@/types/categories";

interface Props {
  categories: CategoryEntity[];
}

function TagArticle(props: Props) {
  const { categories } = props;

  return (
    <div className=" mt-4 flex">
      {categories.map((category) => (
        <Button className="mr-2" key={category.name} variant="hashtag" asChild>
          <Link
            href={{
              pathname: ROUTES.BLOG.LINK,
              query: { category: category.name },
            }}
          >
            #{category.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default React.memo(TagArticle, isEqual);
