module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        "http://127.0.0.1:3001/",
        "http://127.0.0.1:3001/blog",
        "http://127.0.0.1:3001/blog/how-to-make-a-budget",
      ],
      settings: {
        onlyCategories: ["performance", "seo"],
        chromeFlags:
          "--headless=new --user-data-dir=.lighthouseci/chrome-profile",
      },
    },
    assert: {
      assertions: {
        "categories:seo": ["error", { minScore: 0.9 }],
        "categories:performance": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
}
