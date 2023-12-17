import React from "react";

import getIntl from "../../lib/intl";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{intl.formatMessage({ id: "page.home.title" })}</h1>
      <p>{intl.formatMessage({ id: "page.home.description" })}</p>
    </main>
  );
}
