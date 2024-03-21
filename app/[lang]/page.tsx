import React from "react";



import AboutMyTeam from "@/components/Home/AboutMyTeam";
import Category from "@/components/Home/Category";
import HeroBanner from "@/components/Home/HeroBanner";
import News from "@/components/Home/News";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { fetchCategories } from "@/services/category";
import { LocaleEnum } from "@/types/locales";

async function Home({ params: { lang } }: { params: { lang: LocaleEnum } }) {
  const dictionary = await getDictionary(lang);

  const listCategories = await fetchCategories();

  return (
    <>
      <HeroBanner />
      <Category dictionary={dictionary} categories={listCategories.data} />
      <ArticlePopular />
      <News dictionary={dictionary} />
      <AboutMyTeam dictionary={dictionary} />
    </>
  );
}

export default Home;
