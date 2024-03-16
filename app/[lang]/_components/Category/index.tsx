import React from "react";

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
    <section id="search-tag" className="container my-4">
      <h3 className="mb-2 text-heading-4">
        {dictionary["Search blog by topics"]}
      </h3>
      <div className=" flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button key={category.name} variant="secondary">
            {category.name}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Category;
