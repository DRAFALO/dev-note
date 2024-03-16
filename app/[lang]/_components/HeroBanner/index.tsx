"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";

import { SLIDE_AUTOPLAY_TIME } from "@/constants/slide";
import { randomId } from "@/lib/randomId";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: SLIDE_AUTOPLAY_TIME,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
};

const data = [
  {
    title: "DevNote là một trang blog cho phép bạn chia sẻ kiến thức của mình.",
    description:
      "Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available. Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    href: "/",
  },
  {
    title: "DevNote là một trang blog cho phép bạn chia sẻ kiến thức của mình.",
    description:
      "Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available. Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.",
    image:
      "https://i.pinimg.com/564x/1c/34/0c/1c340cf030e39aa9d924e9b0418238ec.jpg",
    id: randomId(),
    href: "/",
  },
];

function HeroBanner() {
  return (
    <section className="container my-10">
      <div className="slider-container">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {/* <div>
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
          </div> */}

          {data.map((item, index) => (
            <div key={item.id} className="relative !flex lg:bg-slate-100">
              <div className="absolute bottom-0 left-0 w-full flex-col justify-center bg-black/[0.7] p-4 text-white lg:relative lg:flex lg:w-1/2 lg:bg-transparent lg:p-10 lg:text-black">
                <AppLink href={item.href} aria-label={item.title}>
                  {!index ? (
                    <h1 className="text-heading-2">{item.title}</h1>
                  ) : (
                    <h2 className="text-heading-2">{item.title}</h2>
                  )}
                </AppLink>

                <p className="mt-4  line-clamp-3 lg:line-clamp-6">
                  {item.description}
                </p>
              </div>

              <AppLink
                href={item.href}
                aria-label={item.title}
                className="flex flex-1 lg:w-1/2"
              >
                <Image
                  className="flex-1 object-cover object-center"
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={250}
                />
              </AppLink>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default React.memo(HeroBanner);
