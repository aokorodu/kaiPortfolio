import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

export default {
  kit: {
    adapter: adapter({
      appDir: "docs",
      pages: "docs",
      assets: "docs",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: "/kaiPortfolio",
      relative: true,
    },
  },
};
