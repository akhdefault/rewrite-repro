/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/intro",
        },
      ],
    };
  },
  trailingSlash: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    localeDetection: false,
  },
};
