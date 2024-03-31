import React from "react";

import ArticlePopular from "@/components/ArticlePopular";
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

      <div
        dangerouslySetInnerHTML={{
          __html:
            '\n<pre class="wp-block-code"><code>const a = 15</code></pre>\n\n\n\n<p>This is me</p>\n\n\n\n<p></p>\n\n\n\n<h2 class="wp-block-heading">12312kqspdjiopqr9012r9012</h2>\n\n\n\n<blockquote class="wp-block-quote">\n<p>plsdfodsfoenwfo</p>\n<cite>1231231231231</cite></blockquote>\n',
        }}
      />
    </>
  );
}

export default Home;
