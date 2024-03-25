import React from "react";

import ArticlePopular from "@/components/ArticlePopular";
import CardInfo from "@/components/common/CardInfo";
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
      <ArticlePopular dictionary={dictionary} />
      <News dictionary={dictionary} />
      <AboutMyTeam dictionary={dictionary} />
      <CardInfo
        dictionary={dictionary}
        avatar="https://i.pinimg.com/736x/d4/a1/a6/d4a1a63116ff9f08b3e335f9f9c01519.jpg"
        name="Toby Mole"
        nickname="A great dev"
        banner=""
        description="Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳"
        pronouns="he/him"
        education="self taught"
        location="VN"
        workPosition="HCM"
      />
    </>
  );
}

export default Home;
