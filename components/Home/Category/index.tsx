import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CategoryEntity } from "@/types/categories";
import { LocaleKeys } from "@/types/locales";

interface CategoryProps {
  dictionary: LocaleKeys;
  categories: CategoryEntity[];
}

function Category(props: CategoryProps) {
  const { dictionary, categories } = props;

  return (
    <section className="container my-4">
      <h2 className="mb-2 text-heading-2">
        {dictionary["Search blog by topics"]}
      </h2>

      <div className=" flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={{
              pathname: "/blog",
              query: { tag: category.name },
            }}
          >
            <Button variant="hashtag">#{category.name}</Button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
