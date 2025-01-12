import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: "/kaiPortfolio/docs", // replace '/your-base-path' with your desired base path
    },
  },
};
