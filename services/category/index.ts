import { randomId } from "@/lib/random-id";
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
  { name: "review", _id: randomId() },
  { name: "javascript", _id: randomId() },
  { name: "typescript", _id: randomId() },
  { name: "react", _id: randomId() },
  { name: "nextjs", _id: randomId() },
  { name: "tailwindcss", _id: randomId() },
  { name: "css", _id: randomId() },
  { name: "html", _id: randomId() },
  { name: "user experience", _id: randomId() },
  { name: "state", _id: randomId() },
  { name: "programming", _id: randomId() },
  { name: "performance", _id: randomId() },
];

export function fetchCategories(): APICategoryResponse {
  return { data: categories, page: 1, total: 10 };
}
