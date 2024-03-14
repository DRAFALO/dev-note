"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppLink from "@/components/common/AppLink";
import { Button } from "@/components/ui/button";

import { ROUTES } from "@/constants/routes";
import { LocaleKeys } from "@/types/locales";

interface HeroBannerProps {
  dictionary: LocaleKeys;
}

function HeroBanner(props: HeroBannerProps) {
  const { dictionary } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container mb-10 p-8">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="relative grid h-full bg-transparent lg:grid-cols-2 lg:px-6 lg:py-[1rem]">
              <div className="absolute bottom-0 z-10 flex w-full flex-col justify-between gap-4 bg-black/40 px-4 py-3 text-white md:w-full md:p-6 lg:static lg:bg-transparent lg:text-black">
                <div>
                  <AppLink
                    href="/"
                    aria-label={
                      dictionary[
                        "DevNote is a blog that helps you to share your knowledge."
                      ]
                    }
                  >
                    <h2 className="max-w-full text-heading-7 font-bold dark:text-white sm:text-heading-5 lg:text-heading-1">
                      {
                        dictionary[
                          "DevNote is a blog that helps you to share your knowledge."
                        ]
                      }
                    </h2>
                  </AppLink>

                  <p className="sm:tex-description-1 hidden font-extralight dark:text-white sm:line-clamp-3 lg:text-description-2">
                    Beautifully crafted with the latest technologies, SASS &
                    Bootstrap 4.1.3, Mundana is the perfect design for your
                    professional blog. Homepage, post article and category
                    layouts available. Beautifully crafted with the latest
                    technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect
                    design for your professional blog. Homepage, post article
                    and category layouts available.
                  </p>
                </div>

                <Button asChild className="w-full border border-white lg:py-7">
                  <AppLink
                    href={ROUTES.SIGN_UP.LINK}
                    aria-label={dictionary["Sign In"]}
                  >
                    <span className="text-heading-7 md:text-heading-6">
                      {dictionary["Sign In"]}
                    </span>
                  </AppLink>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg"
                  alt="Hero Banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="relative grid h-full bg-transparent lg:grid-cols-2 lg:px-6 lg:py-[1rem]">
              <div className="absolute bottom-0 z-10 flex w-full flex-col justify-between gap-4 bg-black/40 px-4 py-3 text-white md:w-full md:p-6 lg:static lg:bg-transparent lg:text-black">
                <div>
                  <AppLink
                    href="/"
                    aria-label={
                      dictionary[
                        "DevNote is a blog that helps you to share your knowledge."
                      ]
                    }
                  >
                    <h2 className="max-w-full text-heading-7 font-bold dark:text-white sm:text-heading-5 lg:text-heading-1">
                      {
                        dictionary[
                          "DevNote is a blog that helps you to share your knowledge."
                        ]
                      }
                    </h2>
                  </AppLink>

                  <p className="sm:tex-description-1 hidden font-extralight dark:text-white sm:line-clamp-3 lg:text-description-2">
                    Beautifully crafted with the latest technologies, SASS &
                    Bootstrap 4.1.3, Mundana is the perfect design for your
                    professional blog. Homepage, post article and category
                    layouts available. Beautifully crafted with the latest
                    technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect
                    design for your professional blog. Homepage, post article
                    and category layouts available.
                  </p>
                </div>

                <Button asChild className="w-full border border-white lg:py-7">
                  <AppLink
                    href={ROUTES.SIGN_UP.LINK}
                    aria-label={dictionary["Sign In"]}
                  >
                    <span className="text-heading-7 md:text-heading-6">
                      {dictionary["Sign In"]}
                    </span>
                  </AppLink>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg"
                  alt="Hero Banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default React.memo(HeroBanner);
