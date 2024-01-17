import React from "react";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";
import { Button } from "@/components/ui/button";

import { ROUTES } from "@/constants/routes";
import { LocaleKeys } from "@/types/locales";

interface HeroBannerProps {
  dictionary: LocaleKeys;
}

function HeroBanner(props: HeroBannerProps) {
  const { dictionary } = props;

  return (
    <section className="container">
      <div className=" grid grid-cols-2 gap-4 bg-slate-200">
        <div className="flex flex-col gap-4 px-12 py-[5rem]">
          <AppLink
            href="/"
            aria-label={
              dictionary[
                "DevNote is a blog that helps you to share your knowledge."
              ]
            }
          >
            <h2 className="text-heading-1">
              {
                dictionary[
                  "DevNote is a blog that helps you to share your knowledge."
                ]
              }
            </h2>
          </AppLink>

          <p className="line-clamp-3">
            Beautifully crafted with the latest technologies, SASS & Bootstrap
            4.1.3, Mundana is the perfect design for your professional blog.
            Homepage, post article and category layouts available. Beautifully
            crafted with the latest technologies, SASS & Bootstrap 4.1.3,
            Mundana is the perfect design for your professional blog. Homepage,
            post article and category layouts available.
          </p>

          <Button asChild>
            <AppLink
              href={ROUTES.SIGN_UP.LINK}
              aria-label={dictionary["Sign In"]}
            >
              {dictionary["Sign In"]}
            </AppLink>
          </Button>
        </div>

        <div className="relative">
          <Image
            src="https://picsum.photos/500"
            alt="Hero Banner"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(HeroBanner);
