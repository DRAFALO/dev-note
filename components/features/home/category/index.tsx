import React from "react";
import isEqual from "react-fast-compare";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ROUTES } from "@/constants/routes";
import { CategoryEntity } from "@/types/categories";
import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
  categories: CategoryEntity[];
}

function Category(props: Props) {
  const { dictionary, categories } = props;

  return (
    <section className="container my-10">
      <h2 className="mb-2 text-heading-2">
        {dictionary["Search blog by topics"]}
      </h2>

      <div className=" flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button key={category.name} variant="hashtag" asChild>
            {/* Change to AppLink */}
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
    </section>
  );
}

export default React.memo(Category, isEqual);
