import React from "react";

import ArticlePopular from "@/components/features/article-popular";
import AboutMyTeam from "@/components/features/home/about-my-team";
import Category from "@/components/features/home/category";
import HeroBanner from "@/components/features/home/hero-banner";
import News from "@/components/features/home/news";

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
      <ArticlePopular dictionary={dictionary} />
      <News dictionary={dictionary} />
      <AboutMyTeam dictionary={dictionary} />
    </>
  );
}

export default Home;
