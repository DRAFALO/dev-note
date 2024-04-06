"use client";

import React from "react";
import isEqual from "react-fast-compare";
import Slider from "react-slick";
import Image from "next/image";

import AppLink from "@/components/common/app-link";

import { SLIDE_AUTOPLAY_TIME } from "@/constants/slide";
import { randomId } from "@/lib/random-id";

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

export default React.memo(HeroBanner, isEqual);
