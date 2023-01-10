const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "../components/"
    );
    config.resolve.alias["@common"] = path.resolve(__dirname, "../common/");
    config.resolve.alias["/assets"] = path.resolve(
      __dirname,
      "../public/assets"
    );
    return config;
  },
};
