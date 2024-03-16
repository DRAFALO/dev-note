import { z } from "zod";

import { APICategoryResponse, CategoryEntity } from "@/types/categories";

export const CategorySchema: z.ZodType<CategoryEntity> = z.lazy(() =>
  z.object({
    _id: z.string(),
    name: z.string(),
  }),
);

export const APICategorySchema: z.ZodType<APICategoryResponse> = z.lazy(() =>
  z.object({
    data: z.array(CategorySchema),
    page: z.number(),
    total: z.number(),
  }),
);
