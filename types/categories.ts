export interface CategoryEntity {
  _id: string;
  name: string;
}

export interface APICategoryResponse {
  data: CategoryEntity[];
  page: number;
  total: number;
}
