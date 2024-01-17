const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
