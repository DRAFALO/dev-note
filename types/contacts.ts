export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface APIContactFormResponse {
  msg: string;
  status: number;
}
