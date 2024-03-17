import React from "react";

import ArticlePopular from "@/components/ArticlePopular";

import HeroBanner from "@/app/[lang]/_components/HeroBanner";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { fetchCategories } from "@/services/category";
import { LocaleEnum } from "@/types/locales";

import Category from "./_components/Category";

async function Home({ params: { lang } }: { params: { lang: LocaleEnum } }) {
  const dictionary = await getDictionary(lang);

  const listCategories = await fetchCategories();

  return (
    <>
      <HeroBanner />
      <Category dictionary={dictionary} categories={listCategories.data} />
      <ArticlePopular />
    </>
  );
}

export default Home;
