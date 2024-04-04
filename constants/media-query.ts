/* eslint-disable no-unsafe-optional-chaining */
import tailwind from "@/theme";

const LIMIT_POINT = 0.02;

export const MEDIA_MAX_WIDTH = {
  SM: tailwind.screen?.md - LIMIT_POINT,
  MD: tailwind.screen?.lg - LIMIT_POINT,
  LG: tailwind.screen?.xl - LIMIT_POINT,
};

export const MEDIA_MIN_WIDTH = {
  SM: 0,
  MD: tailwind.screen?.md,
  LG: tailwind.screen?.lg,
  XL: tailwind.screen?.xl,
};
