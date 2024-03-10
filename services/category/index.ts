import { APICategoryResponse } from "@/types/categories";

import { PATHES } from "..";

import { APICategorySchema } from "./schema";

export function fetchCategories() {
  return fetch(process.env.URL + PATHES.CATEGORIES)
    .then((res) => res.json() as Promise<APICategoryResponse>)
    .then((data) => {
      const validated = APICategorySchema.safeParse(data);

      if (validated.success) {
        return validated.data;
      }

      // Call api to report error (not correct response)

      return data;
    });
}
