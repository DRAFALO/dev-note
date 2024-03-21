import { z } from "zod";

import { APIContactFormResponse, ContactPayload } from "@/types/contacts";

export const ContactFormSchema: z.ZodType<ContactPayload> = z.lazy(() =>
  z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  }),
);

export const APIContactFormSchema: z.ZodType<APIContactFormResponse> = z.lazy(
  () =>
    z.object({
      msg: z.string(),
      status: z.number(),
    }),
);
