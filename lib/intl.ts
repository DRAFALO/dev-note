import { createIntl } from "@formatjs/intl";

import "server-only";

import { Locale } from "@/i18n-config";

export default async function getIntl(locale: Locale) {
  return createIntl({
    locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}
