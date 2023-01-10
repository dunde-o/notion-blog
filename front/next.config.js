const dotenv = require("dotenv");

(() => {
  const isDev = process.env.NODE_ENV === "development";
  dotenv.config({ path: `env/${isDev ? ".dev" : ""}.env` });
})();

const imgDomains = {
  notion: ["s3.us-west-2.amazonaws.com"],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_SECURE: process.env.SERVER_SECURE.toUpperCase() === "TRUE",
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: Object.values(imgDomains).reduce(
      (list, domains) => [...list, ...domains],
      []
    ),
  },
};

module.exports = nextConfig;
