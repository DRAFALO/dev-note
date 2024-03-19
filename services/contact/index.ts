import { APIContactFormResponse, ContactPayload } from "@/types/contacts";

import { PATCHES } from "..";

import { APIContactFormSchema } from "./schema";

export function postContact(payload: ContactPayload) {
  return fetch(PATCHES.CONTACT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json() as Promise<APIContactFormResponse>)
    .then((data) => {
      const validated = APIContactFormSchema.safeParse(data);

      if (validated.success) {
        return validated.data;
      }

      // Call api to report error (not correct response)

      return data;
    });
}
