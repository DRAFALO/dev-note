import React from "react";

import CardSingleBlog from "@/components/CardSingleBlog";
import AboutMyTeam from "@/components/Home/AboutMyTeam";
import Category from "@/components/Home/Category";
import HeroBanner from "@/components/Home/HeroBanner";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { randomId } from "@/lib/randomId";
import { fetchCategories } from "@/services/category";
import { LocaleEnum } from "@/types/locales";

async function Home({ params: { lang } }: { params: { lang: LocaleEnum } }) {
  const dictionary = await getDictionary(lang);

  const listCategories = await fetchCategories();
  const data = [
    {
      title:
        " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
      description:
        "There are more coral species lurking in the deep ocean that previously throught.",
      image:
        "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
      id: randomId(),
      postingTime: "Dec 12",
      readingTime: "5 min read",
      author: "jake",
      href: "/",
    },
    {
      title:
        " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
      description:
        "There are more coral species lurking in the deep ocean that previously throught.",
      image:
        "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
      id: randomId(),
      author: "jake",
      postingTime: "Dec 12",
      readingTime: "5 min read",
      href: "/",
    },
    {
      title:
        " Nearly 200 Great Barrier Reef coral species also live in the deep sea",
      description:
        "There are more coral species lurking in the deep ocean that previously throught.",
      image:
        "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
      id: randomId(),
      postingTime: "Dec 12",
      readingTime: "5 min read",
      author: "jake",
      href: "/3",
    },
  ];
  return (
    <>
      <HeroBanner />
      <Category dictionary={dictionary} categories={listCategories.data} />
      {data.map((blog) => {
        return <CardSingleBlog props={blog} key={blog.id} />;
      })}
      <AboutMyTeam dictionary={dictionary} />
    </>
  );
}

export default Home;
