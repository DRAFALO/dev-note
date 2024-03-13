import { APICategoryResponse, CategoryEntity } from "@/types/categories";

// import { PATHES } from "..";

// import { APICategorySchema } from "./schema";

// export function fetchCategories() {
//   return fetch(process.env.URL + PATHES.CATEGORIES)
//     .then((res) => res.json() as Promise<APICategoryResponse>)
//     .then((data) => {
//       const validated = APICategorySchema.safeParse(data);
//
//       if (validated.success) {
//         return validated.data;
//       }
//
//       // Call api to report error (not correct response)
//
//       return data;
//     });
// }

export const categories: CategoryEntity[] = [
  { name: "review", _id: "1213" },
  { name: "javascript", _id: "1213" },
  { name: "typescript", _id: "1213" },
  { name: "react", _id: "1213" },
  { name: "nextjs", _id: "1213" },
  { name: "tailwindcss", _id: "1213" },
  { name: "css", _id: "1213" },
  { name: "html", _id: "1213" },
  { name: "user experience", _id: "1213" },
  { name: "state", _id: "1213" },
  { name: "programming", _id: "1213" },
  { name: "performance", _id: "1213" },
];

export function fetchCategories(): APICategoryResponse {
  return { data: categories, page: 1, total: 10 };
}
