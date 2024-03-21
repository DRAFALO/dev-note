const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "i.pinimg.com", "images7.alphacoders.com"],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
