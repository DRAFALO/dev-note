import React from "react";

import { Button } from "@/components/ui/button";

import { LocaleKeys } from "@/types/locales";

interface CategoryProps {
  dictionary: LocaleKeys;
}

const CATEGORY = [
  "review",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "tailwindcss",
  "css",
  "html",
  "user experience",
  "state",
  "programming",
  "performance",
];

function Category(props: CategoryProps) {
  const { dictionary } = props;

  return (
    <section className="container my-4">
      <h3 className="mb-2 text-heading-4">
        {dictionary["Search blog by topics"]}
      </h3>
      <div className=" flex flex-wrap gap-3">
        {CATEGORY.map((category) => (
          <Button key={category} variant="secondary">
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Category;
