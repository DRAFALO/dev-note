const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "i.pinimg.com",
      "images7.alphacoders.com",
      "media.dev.to",
      "dev.to",
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
