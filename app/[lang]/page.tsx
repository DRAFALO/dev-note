import React from "react";

import HeroBanner from "@/app/[lang]/_components/HeroBanner";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { LocaleEnum } from "@/types/locales";

import Category from "./_components/Category";

async function Home({ params: { lang } }: { params: { lang: LocaleEnum } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroBanner dictionary={dictionary} />
      <Category dictionary={dictionary} />
    </>
  );
}

export default Home;
