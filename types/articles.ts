export interface ArticleEntity {
  tileArtcle: string;
  link: string;
}

export interface APICategoryResponse {
  data: ArticleEntity[];
  articleName: string;
}
